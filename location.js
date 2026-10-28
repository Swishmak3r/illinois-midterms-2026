// Postal geography selects research context; only an election authority can confirm a ballot.
(function (root) {
  "use strict";

  const data = root.IL_ZIP_DATA || { illinois: [], otherUSRanges: [], meta: {} };
  const towns = root.IL_TOWNS_DIRECTORY || [];
  const zips = new Map();
  const postalCities = new Map();
  const names = new Map();
  const byId = new Map();
  const townsByZip = new Map();
  const addressLookupUrl = "https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx";
  const electionAuthorityUrl = "https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx";
  const coverageNote = "ZIP codes and communities can cross voting districts. This is an approximate research view, not an official ballot. Confirm your districts and ballot using your street address with your election authority.";

  function normalize(value) {
    return String(value == null ? "" : value).trim().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ");
  }

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
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
    if (!matches.length) return null;
    if (matches.length === 1) return matches[0];
    const fields = ["usHouse", "stateSenate", "stateHouse", "localRaces", "zips", "aliases"];
    const merged = {
      id: "zip-" + location.zip,
      name: location.city + " area · " + location.zip,
      county: unique(matches.map(function (town) { return town.county; })).join(" / "),
      region: unique(matches.map(function (town) { return town.region; })).join(" / "),
      localContext: "Research entries from overlapping community groups. Your address determines which races are on your ballot.",
      researchAreaIds: matches.map(function (town) { return town.id; }),
      isMergedResearchArea: true
    };
    fields.forEach(function (field) {
      merged[field] = unique(matches.reduce(function (all, town) { return all.concat(town[field] || []); }, []));
    });
    return merged;
  }

  function resultForZip(zip) {
    const location = zips.get(zip);
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
      approximate: true, coverage: town ? "community-research" : "statewide-only",
      coverageNote: town ? coverageNote : "This ZIP is in Illinois, but this guide has no mapped local research entry for it. Showing statewide races only. Use the official address lookup to find your district and local ballot.",
      addressLookupUrl: addressLookupUrl, electionAuthorityUrl: electionAuthorityUrl
    };
  }

  function resultForTown(town) {
    return {
      town: town, towns: [town], matchedLabel: town.name, matchedZip: "",
      location: { zip: "", city: town.name, cities: [town.name], state: "IL", stateName: "Illinois", counties: town.county ? [town.county] : [] },
      approximate: true, coverage: "community-research", coverageNote: coverageNote,
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
      return {
        town: null, towns: [], matchedLabel: city + ", Illinois", matchedZip: "",
        location: { zip: "", city: city, cities: [city], state: "IL", stateName: "Illinois", counties: unique(locations.reduce(function (all, item) { return all.concat(item.counties); }, [])), zips: locations.map(function (item) { return item.zip; }) },
        approximate: true, coverage: "statewide-only",
        coverageNote: "This Illinois city is in the postal directory, but this guide has no mapped local research entry for it. Showing statewide races only. Enter a ZIP code or use the official address lookup for your district and local ballot.",
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
        return { query: item.zip, zip: item.zip, label: item.city + " · " + item.zip, detail: item.counties.join(" / ") + " County · Illinois", kind: "zip" };
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
    resolve: resolve, suggestions: suggestions, meta: data.meta,
    zipCount: zips.size, addressLookupUrl: addressLookupUrl,
    electionAuthorityUrl: electionAuthorityUrl
  });
})(window);
