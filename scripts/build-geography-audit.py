"""Build a reproducible approximate ZCTA/district crosswalk from Census TIGERweb.

Requires requests and shapely. Source responses are cached outside the repository.
No address, population, party, voter, or inferred 'primary district' is used.
"""
import argparse
import concurrent.futures
import hashlib
import json
import pathlib
import subprocess

import requests
from shapely.geometry import shape
from shapely import make_valid
from shapely.strtree import STRtree

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/"
CHECKED = "2026-11-01"
LAYERS = {
    "usHouse": ("Legislative/MapServer/0", "120th Congressional Districts", 17),
    "stateSenate": ("Legislative/MapServer/1", "2026 State Legislative Districts - Upper", 59),
    "stateHouse": ("Legislative/MapServer/2", "2026 State Legislative Districts - Lower", 118),
    "counties": ("State_County/MapServer/1", "Counties", 102),
}
ZCTA = "tigerWMS_Census2020/MapServer/84"
PLACE = "Places_CouSub_ConCity_SubMCD/MapServer/4"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--cache", type=pathlib.Path, default=ROOT.parent / "geography-cache")
    parser.add_argument("--offline", action="store_true")
    args = parser.parse_args()
    args.cache.mkdir(parents=True, exist_ok=True)
    sources = []

    def fetch(name, layer, params=None):
        params = params or {"f": "json"}
        cache = args.cache / (name + ".json")
        url = BASE + layer
        if not cache.exists():
            if args.offline:
                raise RuntimeError(f"Missing cached source: {cache}")
            response = requests.get(url, params=params, timeout=90)
            response.raise_for_status()
            content = response.content
            data = response.json()
            if "error" in data:
                raise RuntimeError(data["error"])
            if data.get("exceededTransferLimit"):
                raise RuntimeError(f"Truncated source {name}")
            cache.write_bytes(content)
        content = cache.read_bytes()
        data = json.loads(content)
        sources.append({"cacheFile": cache.name, "url": url, "parameters": params,
                        "sha256": hashlib.sha256(content).hexdigest(), "bytes": len(content),
                        "checked": CHECKED})
        return data

    node = "const fs=require('fs'),vm=require('vm');const s={window:{}};vm.runInNewContext(fs.readFileSync('data-zips.js','utf8'),s);console.log(JSON.stringify(s.window.IL_ZIP_DATA.illinois.map(x=>x[0])))"
    postal_zips = json.loads(subprocess.check_output(["node", "-e", node], cwd=ROOT, text=True))
    query = {"f": "geojson", "where": "STATE='17'", "outFields": "GEOID,NAME,BASENAME", "outSR": "5070", "returnGeometry": "true"}
    district_data = {}
    for key, (layer, expected_name, expected_count) in LAYERS.items():
        meta = fetch(key + "-metadata", layer)
        assert meta["name"] == expected_name, (key, meta["name"])
        data = fetch(key, layer + "/query", query)
        # Census includes a ZZ 'not defined' polygon (e.g. Lake Michigan).
        data["features"] = [f for f in data["features"] if f["properties"]["GEOID"][2:].isdigit()]
        assert len(data["features"]) == expected_count, (key, len(data["features"]))
        assert "5070" in str(data.get("crs", "")), data.get("crs")
        district_data[key] = data["features"]
        print(key, len(data["features"]), flush=True)

    meta = fetch("zcta-metadata", ZCTA)
    assert "Zip Code Tabulation Areas" == meta["name"], meta["name"]
    chunks = [postal_zips[i:i + 50] for i in range(0, len(postal_zips), 50)]

    def fetch_zcta(item):
        i, codes = item
        params = {"f": "geojson", "where": "ZCTA5 IN (" + ",".join("'" + z + "'" for z in codes) + ")",
                  "outFields": "GEOID,NAME,BASENAME", "outSR": "5070", "returnGeometry": "true"}
        data = fetch("zcta-" + str(i).zfill(2), ZCTA + "/query", params)
        assert "5070" in str(data.get("crs", "")), data.get("crs")
        print("zcta chunk", i, len(data["features"]), flush=True)
        return data["features"]

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        zctas = [feature for chunk in pool.map(fetch_zcta, enumerate(chunks)) for feature in chunk]
    indexes = {}
    for key, features in district_data.items():
        geometries = [make_valid(shape(f["geometry"])) for f in features]
        indexes[key] = (features, geometries, STRtree(geometries))
    place_meta = fetch("chicago-metadata", PLACE)
    assert place_meta["name"] == "Incorporated Places", place_meta["name"]
    chicago_data = fetch("chicago", PLACE + "/query", {**query, "where": "STATE='17' AND BASENAME='Chicago'"})
    assert len(chicago_data["features"]) == 1
    assert "5070" in str(chicago_data.get("crs", "")), chicago_data.get("crs")
    chicago_feature = chicago_data["features"][0]
    assert chicago_feature["properties"]["GEOID"] == "1714000", chicago_feature["properties"]
    chicago_geometry = make_valid(shape(chicago_feature["geometry"]))
    counties_features, counties_geometries, counties_tree = indexes["counties"]
    cook_geometry = next(g for f, g in zip(counties_features, counties_geometries) if f["properties"]["BASENAME"] == "Cook")
    suburban_cook_geometry = cook_geometry.difference(chicago_geometry)
    by_district = {}
    def district_code(key, geoid):
        return {"usHouse": "IL-", "stateSenate": "SD-", "stateHouse": "HD-"}[key] + (str(int(geoid[2:])).zfill(2) if key == "usHouse" else str(int(geoid[2:])))
    for key in ("usHouse", "stateSenate", "stateHouse"):
        features, geometries, _ = indexes[key]
        for feature, geometry in zip(features, geometries):
            code = district_code(key, feature["properties"]["GEOID"])
            by_district[code] = {
                "counties": sorted(counties_features[idx]["properties"]["BASENAME"] for idx in counties_tree.query(geometry, predicate="intersects") if geometry.intersection(counties_geometries[idx]).area > 1),
                "chicago": geometry.intersection(chicago_geometry).area > 1,
                "suburbanCook": geometry.intersection(suburban_cook_geometry).area > 1,
            }
    records = {}
    small_overlaps = []
    for feature in zctas:
        z = feature["properties"]["GEOID"]
        geometry = make_valid(shape(feature["geometry"]))
        record = {}
        for key, (features, geometries, tree) in indexes.items():
            matches = []
            for idx in tree.query(geometry, predicate="intersects"):
                overlap = geometry.intersection(geometries[idx]).area
                # Exclude shared boundaries and sub-square-meter numeric artifacts only.
                if overlap <= 1:
                    continue
                f = features[idx]["properties"]
                if key == "counties":
                    code = f["BASENAME"]
                else:
                    code = district_code(key, f["GEOID"])
                matches.append(code)
                if overlap < 10000:
                    small_overlaps.append({"zip": z, "field": key, "district": code, "overlapSquareMeters": round(overlap, 3)})
            record[key] = sorted(matches, key=(lambda x: x) if key == "counties" else (lambda x: int(x.split("-")[1])))
        if record["counties"] and all(record[k] for k in ("usHouse", "stateSenate", "stateHouse")):
            records[z] = record
    missing = sorted(set(postal_zips) - records.keys())
    result = {"meta": {"checked": CHECKED, "source": "U.S. Census Bureau TIGERweb", "districtVintage": "January 1, 2026 (120th Congress / 2026 state legislative districts)", "postalGeographyVintage": "2020 ZCTAs", "method": "Positive polygon-area intersection (>1 square meter), EPSG:5070; no centroid, proximity or primary-district inference.", "approximate": True, "zipCount": len(records), "unmappedPostalZipCount": len(missing), "sourceUrl": BASE + "Legislative/MapServer", "zctaSourceUrl": BASE + ZCTA, "municipalSourceUrl": BASE + PLACE}, "zips": dict(sorted(records.items())), "byDistrict": dict(sorted(by_district.items()))}
    (ROOT / "data-geography.js").write_text("// Approximate Census ZCTA overlaps, not voter eligibility. Rebuild: scripts/build-geography-audit.py\nwindow.IL_GEOGRAPHY_DATA = " + json.dumps(result, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")
    audit = {"checked": CHECKED, "postalZipCount": len(postal_zips), "zctaCount": len(zctas), "mappedZipCount": len(records), "unmappedPostalZips": missing, "smallOverlapsUnder10000SquareMeters": small_overlaps, "method": result["meta"]["method"], "sources": sorted(sources, key=lambda x: x["cacheFile"])}
    (ROOT / "audit" / "2026-11-01-geography-sources.json").write_text(json.dumps(audit, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"mapped": len(records), "unmapped": len(missing), "examples": {z: records.get(z) for z in ["60490", "60440", "60446", "60647", "60657"]}}, indent=2))


if __name__ == "__main__":
    main()
