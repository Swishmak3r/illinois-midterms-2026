# Postal geography and research-area coverage — November 1, 2026

`data-zips.js` contains a bundled geographic directory from [GeoNames' United States postal-code extract](https://download.geonames.org/export/zip/US.zip), downloaded October 26, 2026 (America/Chicago). The server's UTC modification timestamp is October 27, 2026 at 02:57:35 GMT. The source archive's SHA-256 is `4973fdf8003ae16e572d68410995dcea150c5a71284ec84adbcfef7c5abb49a7`.

- **1,575 distinct Illinois ZIP codes**, with postal place names and the county labels supplied by GeoNames.
- **39,913 other United States ZIP codes**, stored as sorted contiguous membership ranges so the resolver can distinguish a known out-of-state ZIP from an unrecognized code. Ranges are only a compact encoding of listed codes, not numeric-prefix inference.
- [GeoNames](https://www.geonames.org/) licenses this dataset under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). Credit GeoNames in the site's sources/footer. Adaptations: filtered Illinois records, deduplicated names, converted other-US membership to intervals, and omitted unused coordinates.

The data is supplied without a guarantee of accuracy, timeliness, or completeness. This is not the USPS address validation service. Recently added, retired, unique-organization, or PO-box ZIPs may be absent. An absent ZIP receives an explicit “not in the bundled postal directory” result and access to the official lookup; it is never silently assigned to a nearby town.

## Source-derived district research

The previous community district arrays were hand-curated and did not support accuracy claims. They have been replaced throughout the site with reproducible polygon intersections from the **U.S. Census Bureau**, checked November 1, 2026:

- [120th Congressional Districts](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer/0): January 1, 2026 vintage; all 17 defined Illinois districts.
- [2026 State Legislative Districts — Upper](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer/1): January 1, 2026 vintage; all 59 defined Illinois districts.
- [2026 State Legislative Districts — Lower](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer/2): January 1, 2026 vintage; all 118 defined Illinois districts.
- [Counties](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1): all 102 Illinois counties.
- [Incorporated Places](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/4): January 1, 2026 vintage; the Chicago city polygon (GEOID `1714000`) is used for district-region filtering.
- [2020 ZIP Code Tabulation Areas](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/84): the Census statistical areas, **not current USPS delivery boundaries**. [Census explains the distinction and missing ZIP coverage](https://www.census.gov/programs-surveys/geography/guidance/geo-areas/zctas.html).

`data-geography.js` contains **1,396 ZCTA crosswalk records** for the 1,575 bundled Illinois postal ZIPs. **179 postal ZIPs have no matching Census ZCTA** and receive an explicit statewide-only result. Missing records are never assigned to nearby districts, a ZIP centroid, a parent community, or a supposed primary district. All 17 congressional, 59 Senate and 118 House districts occur in the geometric crosswalk. Only districts with a current race in the audited election dataset are shown as races; an off-cycle Senate district remains geographic membership in the crosswalk but is not a 2026 contest.

The generator requests unsimplified GeoJSON in **EPSG:5070**, a projected equal-area coordinate system. It uses positive polygon intersections greater than **one square meter**, excluding shared lines and negligible numeric artifacts. It does not rank districts by population, land area or likelihood. Census `ZZ` areas labeled “not defined” are excluded. Small overlaps, water, uninhabited areas, and differences between 2020 ZCTAs and 2026 boundaries can still add possibilities; a one-district result is not address-level certification. The audit preserves all 496 overlaps under 10,000 square meters for review rather than silently removing them through an arbitrary threshold.

The precise source URLs, query parameters, response sizes and SHA-256 hashes are recorded in [`audit/2026-11-01-geography-sources.json`](audit/2026-11-01-geography-sources.json). Raw responses are retained in the work cache outside the repository. Reproduce from that cache using:

```text
python scripts/build-geography-audit.py --offline --cache ../geography-cache
node scripts/refresh-geography-towns.cjs
node scripts/test-geography-audit.cjs
```

The Python generator requires `requests` and `shapely`; omit `--offline` to retrieve uncached public responses. The checked date identifies this fixed audit snapshot; a future refresh must update and re-audit the date and source metadata.

`data-geography.js` also includes `byDistrict` metadata for all **194** geographic congressional/Senate/House districts. Each record lists every county with a positive-area intersection, whether the district intersects the official Chicago city polygon, and whether it intersects the remainder of Cook County after subtracting Chicago. This supports regional filtering for newly added races without inferring Chicago from a Cook County label or relying on an incomplete candidate biography. Broader named regional groupings remain interface categories; county membership is the source-derived input.

## ZIPs, communities, and local contests

An individual ZIP now uses **only its own matching ZCTA**, regardless of which community cards list it. A community combines the mapped ZCTAs explicitly listed in its research entry and discloses that this is not its municipal boundary. A postal-city lookup likewise combines its mapped postal ZIP areas. The Chicago overview combines the Chicago neighborhood research groups; it is not a municipal boundary dataset. Curated names/aliases continue to assist navigation, but none can override the source-derived district arrays.

Examples of material corrections:

| Research query | Corrected source-derived possibilities |
|---|---|
| 60490 | Will County; IL-11/14; HD-41/85/97/98; only SD-21 has a current Senate race |
| 60440 | DuPage and Will counties; IL-11; HD-41/81/85/98; not every district from the broader Bolingbrook community |
| 60446 | Will County; IL-01/11/14; HD-85/98; no inherited HD-97 |
| 60647 | HD-3/4/10/39/40, replacing unsupported HD-7/26 |
| Bolingbrook community | Union of 60490 and 60440; DuPage and Will, explicitly broader than either ZIP alone |

Local contests are included in geographic results only when the race explicitly declares a source-supported countywide or whole-court scope and its verified counties overlap the ZCTA. Judicial retention follows its documented circuit/district electorate. County-list inclusion alone cannot qualify a board district, judicial subcircuit, Regional Office of Education, or referendum for every address in a county. In particular, the former blanket Will County Board 9, three different judicial subcircuits, and Will ROE assignments have been removed from ZIP/community views. They remain available in the complete research directory. This is **selected local coverage**, not a complete personal ballot.

Will County GIS also publishes board/subcircuit shapefiles, but their descriptive metadata is inconsistent with their contents (2011 text and a thirteen-district description in an eleven-feature board file). They were investigated but **not used** to imply verified local eligibility in this release.

Exact city/alias matching is supported; incomplete names offer choices instead of automatically selecting the first partial match. Street addresses are not collected or sent to any API. Missing geography data fails closed to statewide-only results.

The [Illinois State Board of Elections district locator](https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx) and the voter's [local election authority](https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx) are the appropriate sources for exact district placement, sample ballots, registration, and polling places.
The regression suite checks every one of the 1,575 postal ZIPs, every source crosswalk, all 70 community entries, current-cycle district containment, local scope containment, exact ZIP isolation, missing-ZCTA fallbacks, malformed/out-of-state codes, and fail-closed behavior if the geography module is absent. These are data/behavior checks; they do not turn approximate Census geography into an official voter-specific ballot.
