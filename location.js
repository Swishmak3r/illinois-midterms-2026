// Postal geography selects research context; only an election authority can confirm a ballot.
(function (root) {
  "use strict";

  const data = root.IL_ZIP_DATA || { illinois: [], otherUSRanges: [], meta: {} };
  const geography = root.IL_GEOGRAPHY_DATA || { zips: {}, meta: {} };
  const localRaces = root.IL_LOCAL_RACES || [];
  const currentDistricts = new Set([...(root.IL_FEDERAL_RACES || []), ...(root.IL_LEGISLATURE_RACES || [])].map(function (race) { return race.districtCode; }));
  const towns = (root.IL_TOWNS_DIRECTORY || []).map(function (town) {
    return Object.assign({}, town, geographyForZips(town.zips || []));
  });
  // Every consumer (including community cards) receives the same sourced arrays.
  root.IL_TOWNS_DIRECTORY = towns;
  const zips = new Map();
  const postalCities = new Map();
  const names = new Map();
  const byId = new Map();
  const townsByZip = new Map();
  const addressLookupUrl = "https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx";
  const electionAuthorityUrl = "https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx";
  const coverageNote = "Districts are approximate overlaps of Census 2020 ZIP Code Tabulation Areas with 2026 district maps. ZCTAs are not current postal delivery boundaries and overlaps can include uninhabited areas or small boundary fragments. Local results include selected countywide and courtwide contests; subcounty races and ballot questions may be missing. This is not an official ballot. Confirm your districts and all local contests using your street address with your election authority.";

  function normalize(value) {
    return String(value == null ? "" : value).trim().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ");
  }

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function countywideResearch(race) {
    return ["countywide", "whole-court-district"].includes(race.geographicScope) ||
      (race.contestType === "retention" && ["circuit", "judicial-district"].includes(race.eligibilityScope));
  }

  function geographyForZips(zipList) {
    const mapped = unique(zipList.map(String)).filter(function (zip) { return geography.zips[zip]; });
    const records = mapped.map(function (zip) { return geography.zips[zip]; });
    const counties = unique(records.flatMap(function (record) { return record.counties || []; })).sort();
    const result = {
      county: counties.join(" / "), counties: counties, mappedGeographyZips: mapped,
      geographyStatus: mapped.length ? "census-zcta-overlap" : "no-zcta",
      geographyChecked: geography.meta.checked || null,
      localRaces: localRaces.filter(function (race) {
        return countywideResearch(race) && (race.counties || []).some(function (county) { return counties.includes(county); });
      }).map(function (race) { return race.id; })
    };
    ["usHouse", "stateSenate", "stateHouse"].forEach(function (key) {
      result[key] = unique(records.flatMap(function (record) { return record[key] || []; }))
        .filter(function (code) { return currentDistricts.has(code); })
        .sort(function (a, b) { return Number(a.split("-")[1]) - Number(b.split("-")[1]); });
    });
    return result;
  }

  function addToIndex(index, key, value) {
    if (!key) return;
    const values = index.get(key) || [];
    if (!values.includes(value)) values.push(value);
    index.set(key, values);
  }

  data.illinois.forEach(function (record) {
    const location = {
      zip: record[0], city: record[1][0], cities: record[1].slice(),
      state: "IL", stateName: "Illinois", counties: record[2].slice()
    };
    zips.set(location.zip, location);
    location.cities.forEach(function (city) { addToIndex(postalCities, normalize(city), location); });
  });

  towns.forEach(function (town) {
    byId.set(town.id, town);
    [town.name].concat(town.aliases || []).forEach(function (name) {
      addToIndex(names, normalize(name), town);
    });
    (town.zips || []).forEach(function (zip) {
      // The legacy town directory is not a postal validity database.
      // Only explicit, independently listed Illinois ZIPs are eligible.
      if (zips.has(String(zip))) addToIndex(townsByZip, String(zip), town);
    });
  });

  function isKnownOtherUSZip(zip) {
    const number = Number(zip);
    const ranges = data.otherUSRanges || [];
    let low = 0;
    let high = ranges.length - 1;
    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const range = ranges[middle];
      if (number < range[0]) high = middle - 1;
      else if (number > range[1]) low = middle + 1;
      else return true;
    }
    return false;
  }

  function specificTowns(matches) {
    // Chicago's aggregate overview is a parent of the named neighborhood views.
    // Keep overlapping substantive communities; do not choose whichever appeared first.
    return matches.length > 1
      ? matches.filter(function (town) { return town.id !== "chicago-all"; })
      : matches.slice();
  }

  function unionTown(matches, location) {
    const mapped = geographyForZips([location.zip]);
    if (!mapped.mappedGeographyZips.length) return null;
    return Object.assign({
      id: "zip-" + location.zip,
      name: location.city + " area · " + location.zip,
      region: unique(matches.map(function (town) { return town.region; })).join(" / "),
      zips: [location.zip], aliases: [],
      researchAreaIds: matches.map(function (town) { return town.id; }),
      isMergedResearchArea: matches.length > 1
    }, mapped);
  }

  function resultForZip(zip) {
    const postalLocation = zips.get(zip);
    const sourceGeography = geography.zips[zip];
    const location = postalLocation && Object.assign({}, postalLocation, {
      counties: sourceGeography ? sourceGeography.counties.slice() : postalLocation.counties.slice()
    });
    if (!location) {
      return isKnownOtherUSZip(zip)
        ? { error: "out_of_state_zip", zip: zip, message: "That ZIP code is outside Illinois. Enter an Illinois ZIP code or browse statewide races." }
        : { error: "unknown_zip", zip: zip, message: "That ZIP code is not in the bundled postal directory. Check the ZIP, try a city, or use the official address lookup.", addressLookupUrl: addressLookupUrl };
    }
    const matches = specificTowns(townsByZip.get(zip) || []);
    const town = unionTown(matches, location);
    return {
      town: town, towns: matches, location: location,
      matchedLabel: location.city + " · " + zip, matchedZip: zip,
      approximate: true, coverage: town ? "census-zcta-research" : "statewide-only",
      coverageNote: town ? coverageNote : "This Illinois postal ZIP has no Census ZCTA crosswalk in this guide. Showing statewide races only; no district is guessed from a nearby ZIP or community. Use the official address lookup to find your district and local ballot.",
      geographySourceUrl: geography.meta.sourceUrl,
      addressLookupUrl: addressLookupUrl, electionAuthorityUrl: electionAuthorityUrl
    };
  }

  function resultForTown(town) {
    const mapped = town.mappedGeographyZips.length > 0;
    return {
      town: mapped ? town : null, towns: [town], matchedLabel: town.name, matchedZip: "",
      location: { zip: "", city: town.name, cities: [town.name], state: "IL", stateName: "Illinois", counties: town.counties || [] },
      approximate: true, coverage: mapped ? "community-research" : "statewide-only",
      coverageNote: mapped ? "This community view combines its listed postal-code areas; it is not a municipal boundary. " + coverageNote : "This community has no Census ZCTA crosswalk in this guide. Use the official address lookup for your districts and local ballot.",
      geographySourceUrl: geography.meta.sourceUrl,
      addressLookupUrl: addressLookupUrl, electionAuthorityUrl: electionAuthorityUrl
    };
  }

  function resolve(rawQuery) {
    const raw = String(rawQuery == null ? "" : rawQuery).trim();
    if (!raw) return null;
    if (raw.length > 180) return { error: "unknown_location", message: "Enter a city, neighborhood, or five-digit ZIP code." };
    const zipMatch = raw.match(/^(\d{5})(?:-\d{4})?$/);
    if (zipMatch) return resultForZip(zipMatch[1]);
    if (/\d/.test(raw)) return { error: "invalid_zip", message: "Enter a five-digit ZIP code, such as 60647. ZIP+4 is also accepted." };

    const query = normalize(raw).replace(/,\s*(?:illinois|il)$/, "");
    if (byId.has(query)) return resultForTown(byId.get(query));
    const exactTowns = names.get(query) || [];
    if (exactTowns.length === 1) return resultForTown(exactTowns[0]);
    if (exactTowns.length > 1) {
      return {
        error: "ambiguous_location", message: "More than one research area matches that name. Choose an area below or enter a ZIP code.",
        suggestions: exactTowns.map(townSuggestion)
      };
    }
    const locations = postalCities.get(query);
    if (locations && locations.length) {
      const city = locations[0].cities.find(function (name) { return normalize(name) === query; }) || locations[0].city;
      const area = geographyForZips(locations.map(function (item) { return item.zip; }));
      const mapped = area.mappedGeographyZips.length > 0;
      return {
        town: mapped ? Object.assign({ id: "postal-city-" + query.replace(/\W+/g, "-"), name: city, zips: locations.map(function (item) { return item.zip; }) }, area) : null,
        towns: [], matchedLabel: city + ", Illinois", matchedZip: "",
        location: { zip: "", city: city, cities: [city], state: "IL", stateName: "Illinois", counties: mapped ? area.counties : unique(locations.reduce(function (all, item) { return all.concat(item.counties); }, [])), zips: locations.map(function (item) { return item.zip; }) },
        approximate: true, coverage: mapped ? "postal-city-research" : "statewide-only",
        coverageNote: mapped ? "This postal-city view combines its mapped postal-code areas; it is not a municipal boundary. " + coverageNote : "This Illinois postal city has no Census ZCTA crosswalk in this guide. Use the official address lookup for your districts and local ballot.",
        geographySourceUrl: geography.meta.sourceUrl,
        addressLookupUrl: addressLookupUrl, electionAuthorityUrl: electionAuthorityUrl
      };
    }
    return { error: "unknown_location", message: "No exact location match found. Choose a suggestion, enter an Illinois ZIP code, or browse statewide races.", suggestions: suggestions(raw, 5) };
  }

  function townSuggestion(town) {
    return { query: town.id, label: town.name, detail: "Community research area", kind: "town", town: town };
  }

  function suggestions(rawQuery, maximum) {
    const raw = String(rawQuery == null ? "" : rawQuery).trim();
    const query = normalize(raw).replace(/,\s*(?:illinois|il)$/, "");
    const limit = Math.min(12, Math.max(1, Number(maximum) || 8));
    if (!query || query.length > 180) return [];
    if (/^\d{1,5}$/.test(query)) {
      return Array.from(zips.values()).filter(function (item) { return item.zip.indexOf(query) === 0; }).slice(0, limit).map(function (item) {
        const counties = geography.zips[item.zip] ? geography.zips[item.zip].counties : item.counties;
        return { query: item.zip, zip: item.zip, label: item.city + " · " + item.zip, detail: counties.join(" / ") + " County · Illinois", kind: "zip" };
      });
    }
    if (/\d/.test(query)) return [];
    const scored = [];
    towns.forEach(function (town) {
      const labels = [town.name].concat(town.aliases || []).map(normalize);
      let score = 3;
      if (labels.includes(query)) score = 0;
      else if (labels.some(function (label) { return label.indexOf(query) === 0; })) score = 1;
      else if (query.length >= 3 && labels.some(function (label) { return label.includes(query); })) score = 2;
      if (score < 3) scored.push({ score: score, item: townSuggestion(town) });
    });
    postalCities.forEach(function (locations, cityKey) {
      if (names.has(cityKey)) return;
      if (cityKey === query || cityKey.indexOf(query) === 0) {
        const city = locations[0].cities.find(function (name) { return normalize(name) === cityKey; }) || locations[0].city;
        scored.push({ score: cityKey === query ? 0 : 1, item: { query: city, label: city + ", Illinois", detail: "Postal city · enter a ZIP for area coverage", kind: "city" } });
      }
    });
    return scored.sort(function (a, b) { return a.score - b.score || a.item.label.localeCompare(b.item.label); }).slice(0, limit).map(function (entry) { return entry.item; });
  }

  root.IL_LOCATION = Object.freeze({
    resolve: resolve, suggestions: suggestions, meta: data.meta, geographyMeta: geography.meta,
    zipCount: zips.size, addressLookupUrl: addressLookupUrl,
    electionAuthorityUrl: electionAuthorityUrl
  });
})(window);
