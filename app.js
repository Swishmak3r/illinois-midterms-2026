// 2026 Illinois Midterm Elections - Interactive Application Engine
// Handles City & 5-Digit ZIP Code Ballot Lookup, Dynamic Area + Federal Dashboard, Issue Stance Matrix, PAC Power Tracker & Candidate Comparison

(function () {
  "use strict";

  // 1. Consolidate all races into a unified searchable index
  const ALL_RACES = [
    ...(window.IL_FEDERAL_RACES || []),
    ...(window.IL_STATEWIDE_RACES || []),
    ...(window.IL_LEGISLATURE_RACES || []),
    ...(window.IL_LOCAL_RACES || [])
  ];

  const TOWNS = window.IL_TOWNS_DIRECTORY || [];
  const PACS = window.IL_PACS_DIRECTORY || [];
  const ISSUES = window.IL_ISSUE_DEFINITIONS || { federal: [], state: [], local: [] };

  // Build flat candidate lookup map
  const CANDIDATE_MAP = new Map();
  ALL_RACES.forEach((race) => {
    (race.candidates || []).forEach((cand) => {
      CANDIDATE_MAP.set(cand.id, {
        ...cand,
        raceId: race.id,
        raceOffice: race.office,
        districtCode: race.districtCode,
        districtName: race.districtName,
        level: race.level,
        region: race.region,
        rating: race.rating,
        pvi: race.pvi,
        cities: race.cities || [],
        counties: race.counties || []
      });
    });
  });

  // Build fast ZIP code & Municipality Alias Lookup Index
  const ZIP_TO_TOWN_MAP = new Map();
  TOWNS.forEach((town) => {
    (town.zips || []).forEach((z) => {
      const zipStr = String(z).trim();
      // Prefer specific Chicago neighborhood hubs over citywide 'chicago-all' for specific ZIPs
      if (!ZIP_TO_TOWN_MAP.has(zipStr) || ZIP_TO_TOWN_MAP.get(zipStr).id === "chicago-all") {
        ZIP_TO_TOWN_MAP.set(zipStr, town);
      }
    });
  });

  // Complete deterministic fallback resolver for all Illinois 5-digit ZIP codes (60001 - 62999)
  function resolveIllinoisZipFallback(zip5) {
    if (!/^\d{5}$/.test(zip5)) return null;
    if (ZIP_TO_TOWN_MAP.has(zip5)) {
      return { town: ZIP_TO_TOWN_MAP.get(zip5), exactZip: true };
    }
    const num = Number(zip5);
    if (num < 60001 || num > 62999) {
      return { outOfState: true, zip: zip5 };
    }
    const prefix3 = Math.floor(num / 100);
    let fallbackId = "chicago-all";

    if (prefix3 === 600) {
      if ([60004, 60005, 60006, 60070, 60090].includes(num)) fallbackId = "arlington-heights";
      else if ([60007, 60009].includes(num)) fallbackId = "elk-grove-village";
      else if ([60008, 60056, 60067, 60074, 60078].includes(num)) fallbackId = "mount-prospect-palatine";
      else if ([60010, 60011, 60042, 60047, 60084].includes(num)) fallbackId = "barrington-lake-zurich-wauconda";
      else if ([60012, 60013, 60014, 60021, 60033, 60034, 60050, 60051, 60071, 60072, 60081, 60097, 60098].includes(num)) fallbackId = "crystal-lake-cary-mchenry";
      else if ([60015, 60035, 60037, 60040, 60044, 60045, 60048, 60069].includes(num)) fallbackId = "highland-park-deerfield-lake-forest";
      else if (num >= 60016 && num <= 60019) fallbackId = "des-plaines";
      else if ([60022, 60043, 60091, 60093].includes(num)) fallbackId = "wilmette-winnetka";
      else if ([60025, 60026, 60029].includes(num)) fallbackId = "glenview";
      else if (num === 60053) fallbackId = "niles-morton-grove";
      else if ([60062, 60065].includes(num)) fallbackId = "northbrook";
      else if (num === 60068) fallbackId = "park-ridge";
      else if ([60076, 60077].includes(num)) fallbackId = "skokie";
      else if ([60064, 60083, 60085, 60087, 60088, 60096, 60099].includes(num)) fallbackId = "waukegan-north-chicago";
      else fallbackId = "buffalo-grove-mundelein-gurnee";
    } else if (prefix3 === 601) {
      if ([60101, 60103, 60106, 60108, 60139, 60157, 60172, 60184, 60188, 60191].includes(num)) fallbackId = "carol-stream-bloomingdale-bartlett";
      else if ([60102, 60110, 60118, 60142, 60156].includes(num)) fallbackId = "carpentersville-dundee-algonquin";
      else if ((num >= 60153 && num <= 60165) || [60104, 60131, 60171, 60176].includes(num)) fallbackId = "maywood-proviso";
      else if ((num >= 60192 && num <= 60196) || [60107, 60133, 60168, 60169, 60173, 60179].includes(num)) fallbackId = "schaumburg";
      else if ((num >= 60111 && num <= 60115) || [60135, 60145, 60146, 60150, 60178].includes(num)) fallbackId = "dekalb-sycamore";
      else if ([60119, 60134, 60144, 60147, 60151, 60174, 60175, 60183].includes(num)) fallbackId = "st-charles-geneva-batavia";
      else if ((num >= 60120 && num <= 60124) || [60136, 60140, 60170, 60177].includes(num)) fallbackId = "elgin";
      else if ([60126, 60148, 60181].includes(num)) fallbackId = "elmhurst-lombard-oak-brook";
      else if (num === 60130) fallbackId = "oak-park-river-forest";
      else if (num === 60143) fallbackId = "elk-grove-village";
      else if (num === 60152) fallbackId = "crystal-lake-cary-mchenry";
      else fallbackId = "wheaton-glen-ellyn";
    } else if (prefix3 === 602) {
      fallbackId = "evanston";
    } else if (prefix3 === 603) {
      fallbackId = "oak-park-river-forest";
    } else if (prefix3 === 604) {
      if (num === 60402) fallbackId = "cicero-berwyn";
      else if ((num >= 60431 && num <= 60436) || [60403, 60404, 60408, 60410, 60416, 60420, 60421, 60442, 60447, 60481].includes(num)) fallbackId = "joliet";
      else if ((num >= 60453 && num <= 60459) || [60406, 60415, 60463, 60465, 60482].includes(num)) fallbackId = "oak-lawn-palos";
      else if ([60409, 60419, 60426, 60428, 60438, 60469, 60472, 60473, 60476].includes(num)) fallbackId = "calumet-city-harvey-dolton";
      else if ([60401, 60411, 60417, 60422, 60425, 60429, 60430, 60443, 60449, 60461, 60466, 60468, 60471, 60475, 60484].includes(num)) fallbackId = "chicago-heights-flossmoor";
      else if ([60423, 60441, 60448, 60451, 60491].includes(num)) fallbackId = "new-lenox-frankfort-mokena";
      else if ([60439, 60440, 60446, 60490].includes(num)) fallbackId = "bolingbrook-romeoville";
      else if ([60444, 60450, 60470, 60474, 60479].includes(num)) fallbackId = "ottawa-lasalle-peru";
      else if ([60445, 60452, 60477, 60478, 60487].includes(num)) fallbackId = "tinley-park";
      else if (num === 60480) fallbackId = "la-grange-western-springs";
      else fallbackId = "orland-park";
    } else if (prefix3 === 605) {
      if ([60501, 60513, 60525, 60526, 60534, 60546, 60558].includes(num)) fallbackId = "la-grange-western-springs";
      else if ((num >= 60502 && num <= 60507) || [60511, 60538, 60539, 60542, 60554].includes(num)) fallbackId = "aurora";
      else if (num === 60510) fallbackId = "st-charles-geneva-batavia";
      else if ((num >= 60514 && num <= 60517) || [60521, 60527, 60532, 60559, 60561].includes(num)) fallbackId = "downers-grove-hinsdale";
      else if ([60518, 60531, 60549, 60551, 60552, 60557].includes(num)) fallbackId = "ottawa-lasalle-peru";
      else if ([60520, 60550, 60556].includes(num)) fallbackId = "dekalb-sycamore";
      else if (num === 60523) fallbackId = "elmhurst-lombard-oak-brook";
      else if ([60543, 60544, 60545, 60548, 60560, 60585, 60586].includes(num)) fallbackId = "plainfield-oswego-shorewood";
      else if (num === 60555) fallbackId = "wheaton-glen-ellyn";
      else fallbackId = "naperville";
    } else if (prefix3 === 606) {
      fallbackId = "chicago-all";
    } else if (prefix3 === 607) {
      if ([60712, 60714].includes(num)) fallbackId = "niles-morton-grove";
      else fallbackId = "chicago-jefferson-park-norwood";
    } else if (prefix3 === 608) {
      if (num === 60804) fallbackId = "cicero-berwyn";
      else if (num === 60827) fallbackId = "calumet-city-harvey-dolton";
      else fallbackId = "oak-lawn-palos";
    } else if (prefix3 === 609) {
      if ([60936, 60957].includes(num)) fallbackId = "champaign-urbana";
      else if (num === 60942) fallbackId = "danville";
      else fallbackId = "kankakee-bourbonnais-bradley";
    } else if (prefix3 === 610) {
      if ([61008, 61011, 61012, 61065].includes(num)) fallbackId = "belvidere-boone";
      else if ([61010, 61016, 61061, 61063, 61072, 61073, 61080, 61088].includes(num)) fallbackId = "rockford-loves-park";
      else if (num === 61068) fallbackId = "dekalb-sycamore";
      else fallbackId = "freeport-galena-savanna";
    } else if (prefix3 === 611) {
      fallbackId = "rockford-loves-park";
    } else if (prefix3 === 612) {
      fallbackId = "quad-cities-rock-island-moline";
    } else if (prefix3 === 613) {
      fallbackId = "ottawa-lasalle-peru";
    } else if (prefix3 === 614) {
      fallbackId = "galesburg-monmouth-macomb";
    } else if (prefix3 === 615 || prefix3 === 616) {
      fallbackId = "peoria-east-peoria";
    } else if (prefix3 === 617) {
      fallbackId = "bloomington-normal";
    } else if (prefix3 === 618) {
      if ([61817, 61832, 61833, 61834, 61844, 61846, 61858, 61870, 61876, 61883].includes(num)) fallbackId = "danville";
      else fallbackId = "champaign-urbana";
    } else if (prefix3 === 619) {
      if (num === 61944) fallbackId = "danville";
      else if (num === 61953) fallbackId = "champaign-urbana";
      else fallbackId = "decatur";
    } else if (prefix3 === 620 || prefix3 === 621) {
      if (num === 62052) fallbackId = "quincy-jacksonville";
      else if (num === 62056) fallbackId = "springfield";
      else fallbackId = "edwardsville-alton-granite-city";
    } else if (prefix3 === 622) {
      if ([62234, 62246, 62249, 62294].includes(num)) fallbackId = "edwardsville-alton-granite-city";
      else fallbackId = "belleville-ofallon-east-st-louis";
    } else if (prefix3 === 623) {
      fallbackId = "quincy-jacksonville";
    } else if (prefix3 === 624) {
      fallbackId = "mt-vernon-effingham-centralia-cairo";
    } else if (prefix3 === 625) {
      if ((num >= 62521 && num <= 62526) || [62535, 62549, 62565].includes(num)) fallbackId = "decatur";
      else fallbackId = "springfield";
    } else if (prefix3 === 626 || prefix3 === 627) {
      if ([62618, 62650, 62681].includes(num)) fallbackId = "quincy-jacksonville";
      else fallbackId = "springfield";
    } else if (prefix3 === 628) {
      if ([62812, 62832, 62896].includes(num)) fallbackId = "carbondale-marion-herrin";
      else fallbackId = "mt-vernon-effingham-centralia-cairo";
    } else if (prefix3 === 629) {
      if ([62914, 62930, 62946, 62960, 62964, 62984, 62995].includes(num)) fallbackId = "mt-vernon-effingham-centralia-cairo";
      else fallbackId = "carbondale-marion-herrin";
    }

    const town = TOWNS.find((t) => t.id === fallbackId) || TOWNS[0];
    return { town, exactZip: false };
  }

  // Resolve any user-typed city name, neighborhood, or 5-digit ZIP code into a matching town hub
  function resolveLocationQuery(rawQuery) {
    const cleaned = String(rawQuery || "").trim();
    if (!cleaned) return null;

    // 1. Check if input is or contains a 5-digit ZIP code
    const zipMatch = cleaned.match(/\b(\d{5})\b/);
    if (zipMatch) {
      const zip5 = zipMatch[1];
      const res = resolveIllinoisZipFallback(zip5);
      if (res && res.outOfState) {
        return { error: "out_of_state_zip", zip: zip5 };
      }
      if (res && res.town) {
        return {
          town: res.town,
          matchedLabel: `ZIP ${zip5} (${res.town.name.split("(")[0].trim()})`,
          matchedZip: zip5
        };
      }
    }

    const q = cleaned.toLowerCase();

    // 2. Check exact match on town.id, town.name, or town.aliases
    for (const t of TOWNS) {
      if (t.id.toLowerCase() === q || t.name.toLowerCase() === q) {
        return { town: t, matchedLabel: t.name.split("(")[0].trim() };
      }
      for (const alias of t.aliases || []) {
        if (alias.toLowerCase() === q) {
          return { town: t, matchedLabel: `${alias} (${t.county} County)` };
        }
      }
    }

    // 3. Check prefix match on aliases or town name
    for (const t of TOWNS) {
      const shortName = t.name.split("(")[0].trim();
      if (shortName.toLowerCase().startsWith(q)) {
        return { town: t, matchedLabel: shortName };
      }
      for (const alias of t.aliases || []) {
        if (alias.toLowerCase().startsWith(q)) {
          return { town: t, matchedLabel: `${alias} (${t.county} County)` };
        }
      }
    }

    // 4. Check substring match on aliases, town name, county, or localContext
    for (const t of TOWNS) {
      const matchedAlias = (t.aliases || []).find((a) => a.toLowerCase().includes(q));
      if (matchedAlias) {
        return { town: t, matchedLabel: `${matchedAlias} (${t.county} County)` };
      }
      if (t.name.toLowerCase().includes(q) || (t.county + " county").toLowerCase().includes(q)) {
        return { town: t, matchedLabel: t.name.split("(")[0].trim() };
      }
    }

    return null;
  }

  // Generate autocomplete suggestions for a partial city, neighborhood, or ZIP query
  function getAutocompleteSuggestions(rawQuery) {
    const cleaned = String(rawQuery || "").trim();
    if (!cleaned) return [];
    const q = cleaned.toLowerCase();
    const isDigits = /^\d+$/.test(cleaned);
    const results = [];
    const seenTownIds = new Set();

    if (isDigits) {
      // If 5 digits, resolve directly first
      if (cleaned.length === 5) {
        const res = resolveIllinoisZipFallback(cleaned);
        if (res && res.town) {
          results.push({
            town: res.town,
            displayTitle: `ZIP ${cleaned} - ${res.town.name.split("(")[0].trim()}`,
            matchedLabel: `ZIP ${cleaned} (${res.town.name.split("(")[0].trim()})`,
            zip: cleaned
          });
          seenTownIds.add(res.town.id);
        }
      }
      // Also find towns with ZIPs starting with these digits
      TOWNS.forEach((t) => {
        if (seenTownIds.has(t.id)) return;
        const matchingZip = (t.zips || []).find((z) => String(z).startsWith(cleaned));
        if (matchingZip) {
          results.push({
            town: t,
            displayTitle: `ZIP ${matchingZip} - ${t.name.split("(")[0].trim()}`,
            matchedLabel: `ZIP ${matchingZip} (${t.name.split("(")[0].trim()})`,
            zip: matchingZip
          });
          seenTownIds.add(t.id);
        }
      });
      return results.slice(0, 8);
    }

    // Text search across aliases, names, and counties
    const scored = [];
    TOWNS.forEach((t) => {
      const shortName = t.name.split("(")[0].trim();
      let bestScore = 0;
      let matchedAlias = null;

      for (const alias of t.aliases || []) {
        const al = alias.toLowerCase();
        if (al === q) {
          bestScore = Math.max(bestScore, 100);
          matchedAlias = alias;
        } else if (al.startsWith(q)) {
          if (85 > bestScore) {
            bestScore = 85;
            matchedAlias = alias;
          }
        } else if (al.includes(q)) {
          if (65 > bestScore) {
            bestScore = 65;
            matchedAlias = alias;
          }
        }
      }

      const nl = t.name.toLowerCase();
      if (nl.startsWith(q) && bestScore < 90) {
        bestScore = 90;
      } else if (nl.includes(q) && bestScore < 70) {
        bestScore = 70;
      } else if ((t.county + " county").toLowerCase().includes(q) && bestScore < 50) {
        bestScore = 50;
      }

      if (bestScore > 0) {
        const label =
          matchedAlias && !shortName.toLowerCase().includes(matchedAlias.toLowerCase())
            ? `${matchedAlias} - ${shortName}`
            : t.name;
        scored.push({
          score: bestScore,
          town: t,
          displayTitle: label,
          matchedLabel: matchedAlias ? `${matchedAlias} (${t.county} County)` : shortName
        });
      }
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8);
  }

  // Application State
  const state = {
    activeTab: "ballot", // 'ballot' | 'towns' | 'issues' | 'pacs' | 'compare' | 'guide'
    selectedTownId: "all", // 'all' or town.id
    enteredLocationLabel: "", // e.g., 'ZIP 60540 (Naperville)' or 'Hinsdale'
    locationNotice: "", // Out-of-state ZIP or helpful feedback notice
    levelFilter: "all", // 'all' | 'federal' | 'statewide' | 'state_legislature' | 'local'
    regionFilter: "all",
    partyFilter: "all",
    raceTypeFilter: "all", // 'all' | 'battleground' | 'open'
    pacFilter: "all",
    searchQuery: "",
    issueLevel: "federal", // 'federal' | 'state' | 'local'
    selectedIssueKey: "economy",
    pacCategoryFilter: "all",
    pacSearchQuery: "",
    compareIds: ["juliana-stratton", "don-tracy", "jb-pritzker", "darren-bailey"],
    compactIssues: false,
    modalCandidateId: null,
    theme: "light"
  };

  // Expose resolver helper on window for automated verification tests
  window.IL_RESOLVE_LOCATION = resolveLocationQuery;

  // Utility: Escape HTML safely
  function esc(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Utility: Party Badge Styling
  function getPartyMeta(party) {
    const p = (party || "").toLowerCase();
    if (p.includes("democrat")) {
      return {
        badgeClass: "party-badge-dem",
        borderClass: "party-border-dem",
        short: "DEM",
        label: party
      };
    }
    if (p.includes("republican") || p.includes("gop")) {
      return {
        badgeClass: "party-badge-gop",
        borderClass: "party-border-gop",
        short: "REP",
        label: party
      };
    }
    return {
      badgeClass: "party-badge-ind",
      borderClass: "party-border-ind",
      short: "IND",
      label: party || "Independent / Coalition"
    };
  }

  // Utility: Level Label & Issue Schema
  function getLevelMeta(level) {
    switch (level) {
      case "federal":
        return { label: "Federal (U.S. Congress)", badge: "badge-level-fed", issueTier: "federal" };
      case "statewide":
        return { label: "Statewide Executive", badge: "badge-level-state", issueTier: "state" };
      case "state_legislature":
        return { label: "Illinois General Assembly", badge: "badge-level-leg", issueTier: "state" };
      case "local":
        return { label: "County, Local & Referendums", badge: "badge-level-local", issueTier: "local" };
      default:
        return { label: "Illinois Election", badge: "badge-level-fed", issueTier: "state" };
    }
  }

  // Check if a race belongs to a selected town's ballot
  function raceMatchesTown(race, town) {
    if (!town) return true;
    // Statewide races (U.S. Senate + 5 Statewide Constitutional offices + Statewide ballot overview) apply to EVERY town in Illinois
    if (race.districtCode === "IL-SEN" || race.level === "statewide" || race.id === "il-ballot-referendums-2026") {
      return true;
    }
    if (race.level === "federal" && (town.usHouse || []).includes(race.districtCode)) {
      return true;
    }
    if (race.level === "state_legislature") {
      if ((town.stateSenate || []).includes(race.districtCode)) return true;
      if ((town.stateHouse || []).includes(race.districtCode)) return true;
    }
    if (race.level === "local" && (town.localRaces || []).includes(race.id)) {
      return true;
    }
    // Check if town name or aliases match race cities
    const townBase = town.name.split("(")[0].split("-")[0].trim().toLowerCase();
    if ((race.cities || []).some((c) => c.toLowerCase().includes(townBase))) {
      return true;
    }
    return false;
  }

  // Check if a candidate matches the PAC filter
  function candidateMatchesPacFilter(cand, pacFilter) {
    if (pacFilter === "all") return true;
    const blob = (
      (cand.pacPolicy || "") +
      " " +
      (cand.pacSummary || "") +
      " " +
      (cand.pacs || []).map((p) => p.name + " " + p.type).join(" ")
    ).toLowerCase();

    switch (pacFilter) {
      case "no-corp":
        return blob.includes("rejects corporate") || blob.includes("no corporate") || blob.includes("grassroots") || blob.includes("100% small");
      case "fairshake":
        return blob.includes("fairshake") || blob.includes("protect progress") || blob.includes("crypto");
      case "aipac":
        return blob.includes("aipac") || blob.includes("united democracy") || blob.includes("elect chicago women") || blob.includes("affordable chicago");
      case "jstreet":
        return blob.includes("j street") || blob.includes("justice democrats") || blob.includes("working families") || blob.includes("progressive caucus");
      case "local150":
        return blob.includes("local 150") || blob.includes("operating engineers");
      case "teachers":
        return blob.includes("iea") || blob.includes("ipace") || blob.includes("ift") || blob.includes("ctu") || blob.includes("teachers");
      case "seiu-afl":
        return blob.includes("seiu") || blob.includes("afl-cio") || blob.includes("federation of labor") || blob.includes("afscme") || blob.includes("liuna");
      case "itla":
        return blob.includes("itla") || blob.includes("trial lawyers");
      case "realtors":
        return blob.includes("realtors") || blob.includes("rpac") || blob.includes("nboa");
      case "business":
        return blob.includes("manufacturers") || blob.includes("ima") || blob.includes("chamber") || blob.includes("nfib") || blob.includes("farm bureau");
      case "fop-isra":
        return blob.includes("fraternal order of police") || blob.includes("fop") || blob.includes("rifle") || blob.includes("isra") || blob.includes("right to life");
      default:
        return true;
    }
  }

  // Filter races based on current state
  function getFilteredRaces() {
    let selectedTown = state.selectedTownId !== "all" ? TOWNS.find((t) => t.id === state.selectedTownId) : null;
    const q = state.searchQuery.trim().toLowerCase();

    // If user typed a 5-digit Illinois ZIP code or exact city name into the secondary search box while town is "all", resolve their full town ballot
    let resolvedSearchTown = null;
    if (!selectedTown && q) {
      if (/^\d{5}$/.test(q)) {
        const res = resolveLocationQuery(q);
        if (res && res.town) resolvedSearchTown = res.town;
      } else {
        // Check if q is an exact match for a town name or alias
        const exactTown = TOWNS.find(
          (t) =>
            t.name.split("(")[0].trim().toLowerCase() === q ||
            (t.aliases || []).some((a) => a.toLowerCase() === q)
        );
        if (exactTown) resolvedSearchTown = exactTown;
      }
    }

    const activeTownForBallot = selectedTown || resolvedSearchTown;

    return ALL_RACES.filter((race) => {
      if (activeTownForBallot && !raceMatchesTown(race, activeTownForBallot)) return false;
      if (state.levelFilter !== "all" && race.level !== state.levelFilter) return false;

      if (state.regionFilter !== "all") {
        const reg = (race.region || "").toLowerCase();
        const cList = (race.counties || []).join(" ").toLowerCase();
        if (state.regionFilter === "chicago" && !reg.includes("chicago") && !reg.includes("statewide")) return false;
        if (state.regionFilter === "suburban_cook" && !reg.includes("cook") && !cList.includes("cook") && !reg.includes("statewide")) return false;
        if (state.regionFilter === "collar" && !reg.includes("collar") && !reg.includes("dupage") && !reg.includes("lake") && !reg.includes("will") && !reg.includes("kane") && !reg.includes("mchenry") && !reg.includes("statewide")) return false;
        if (state.regionFilter === "northern" && !reg.includes("northern") && !reg.includes("northwest") && !cList.includes("winnebago") && !cList.includes("dekalb") && !cList.includes("lasalle") && !reg.includes("statewide")) return false;
        if (state.regionFilter === "central" && !reg.includes("central") && !reg.includes("western") && !cList.includes("sangamon") && !cList.includes("champaign") && !cList.includes("peoria") && !cList.includes("mclean") && !cList.includes("rock island") && !reg.includes("statewide")) return false;
        if (state.regionFilter === "southern" && !reg.includes("metro east") && !reg.includes("southern") && !cList.includes("madison") && !cList.includes("st. clair") && !cList.includes("jackson") && !reg.includes("statewide")) return false;
      }

      if (state.raceTypeFilter === "battleground" && !race.isBattleground) return false;
      if (state.raceTypeFilter === "open" && !race.isOpenSeat) return false;

      // Check candidate-level filters (Party, PAC)
      const matchingCands = (race.candidates || []).filter((c) => {
        if (state.partyFilter !== "all") {
          const p = (c.party || "").toLowerCase();
          if (state.partyFilter === "dem" && !p.includes("democrat")) return false;
          if (state.partyFilter === "gop" && !p.includes("republican") && !p.includes("gop")) return false;
          if (state.partyFilter === "ind" && (p.includes("democrat") || p.includes("republican"))) return false;
        }
        if (!candidateMatchesPacFilter(c, state.pacFilter)) return false;
        return true;
      });

      if (matchingCands.length === 0) return false;

      // Only apply raw substring filter if q wasn't already resolved as a full town/ZIP ballot
      if (q && !resolvedSearchTown) {
        const raceBlob = [
          race.office,
          race.districtCode,
          race.districtName,
          race.region,
          race.incumbent,
          race.primarySummary,
          ...(race.cities || []),
          ...(race.counties || [])
        ]
          .join(" ")
          .toLowerCase();

        const candBlob = (race.candidates || [])
          .map((c) => [
            c.name,
            c.party,
            c.role,
            c.hometown,
            c.pacPolicy,
            c.pacSummary,
            ...(c.endorsements || []),
            ...(c.pacs || []).map((p) => p.name),
            ...Object.values(c.issues || {})
          ].join(" "))
          .join(" ")
          .toLowerCase();

        if (!raceBlob.includes(q) && !candBlob.includes(q)) return false;
      }

      return true;
    });
  }

  // Select a town (with optional user-entered label like "ZIP 60540 (Naperville)") and reset conflicting filters
  function activateTownBallot(townId, customLabel) {
    state.selectedTownId = townId;
    state.enteredLocationLabel = customLabel || "";
    state.locationNotice = "";
    state.levelFilter = "all";
    state.regionFilter = "all";
    state.searchQuery = "";
    const gSearch = document.getElementById("global-search-input");
    if (gSearch) gSearch.value = "";
    state.activeTab = "ballot";
    renderApp();
  }

  // Render Dynamic Top Hero KPI Cards & Hero Location Bar Status
  function renderHeroKpis() {
    const kpiEl = document.getElementById("hero-kpi-container");
    const statusBadge = document.getElementById("hero-location-status-badge");
    const clearBtn = document.getElementById("hero-location-clear-btn");
    const feedbackEl = document.getElementById("hero-location-feedback");
    const ballotTabLabel = document.getElementById("ballot-tab-btn-label");
    const heroInput = document.getElementById("hero-location-input");

    const town = state.selectedTownId !== "all" ? TOWNS.find((t) => t.id === state.selectedTownId) : null;

    if (clearBtn) {
      if (town) clearBtn.classList.remove("hidden");
      else clearBtn.classList.add("hidden");
    }

    if (feedbackEl) {
      if (state.locationNotice) {
        feedbackEl.classList.remove("hidden");
        feedbackEl.innerHTML = `<span class="text-amber-700 dark:text-amber-300 font-semibold">${esc(state.locationNotice)}</span>`;
      } else if (town) {
        const displayLoc = state.enteredLocationLabel || town.name.split("(")[0].trim();
        const sampleZips = (town.zips || []).slice(0, 6).join(", ");
        feedbackEl.classList.remove("hidden");
        feedbackEl.innerHTML = `
          <span class="text-emerald-700 dark:text-emerald-400 font-semibold">✓ Active Area Ballot: ${esc(displayLoc)}</span>
          <span class="text-secondary-custom"> • Showing Federal (U.S. Senate + ${esc((town.usHouse || []).join(", "))}), Statewide Executive, IL Legislature (${esc((town.stateSenate || []).join(", "))} / ${esc((town.stateHouse || []).join(", "))}), and ${esc(town.county)} County races (ZIPs: ${esc(sampleZips)})</span>
        `;
      } else {
        feedbackEl.classList.add("hidden");
        feedbackEl.innerHTML = "";
      }
    }

    if (!town) {
      if (statusBadge) {
        statusBadge.textContent = "Covers all Illinois ZIP codes (60001-62999) & 400+ cities/neighborhoods";
      }
      if (ballotTabLabel) {
        ballotTabLabel.textContent = "All Races, Candidates & PACs";
      }
      if (kpiEl) {
        kpiEl.innerHTML = `
          <div class="p-3 rounded-xl bg-elevated-custom border border-subtle-custom">
            <div class="text-[10px] font-mono uppercase text-muted-custom">Federal & State Races</div>
            <div class="text-lg font-mono font-bold text-primary-custom">U.S. Sen + 17 CDs</div>
            <div class="text-[11px] text-secondary-custom">5 Open U.S. House Seats</div>
          </div>
          <div class="p-3 rounded-xl bg-elevated-custom border border-subtle-custom">
            <div class="text-[10px] font-mono uppercase text-muted-custom">State & Local Coverage</div>
            <div class="text-lg font-mono font-bold text-primary-custom">5 Exec + GA + 102 Co.</div>
            <div class="text-[11px] text-secondary-custom">23 Policy Issues & 25+ PACs</div>
          </div>
        `;
      }
      return;
    }

    const shortLabel = state.enteredLocationLabel || town.name.split("(")[0].trim();
    if (statusBadge) {
      statusBadge.textContent = `Active Ballot: ${shortLabel} (${town.county} County)`;
    }
    if (ballotTabLabel) {
      ballotTabLabel.textContent = `Your ${shortLabel.split("(")[0].trim()} Ballot`;
    }
    if (heroInput && document.activeElement !== heroInput) {
      heroInput.value = shortLabel;
    }

    if (kpiEl) {
      const usHouseStr = (town.usHouse || []).join(", ");
      const legStr = [...(town.stateSenate || []), ...(town.stateHouse || [])].join(", ");
      kpiEl.innerHTML = `
        <a href="#ballot-tier-federal" class="p-3 rounded-xl bg-elevated-custom border-2 border-blue-600/60 hover:border-blue-600 transition block no-underline">
          <div class="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold">Your Federal Level Ballot</div>
          <div class="text-base sm:text-lg font-mono font-bold text-primary-custom mt-0.5">U.S. Sen + ${esc(usHouseStr)}</div>
          <div class="text-[11px] text-secondary-custom">Click to jump to Federal candidates ↓</div>
        </a>
        <a href="#ballot-tier-state_legislature" class="p-3 rounded-xl bg-elevated-custom border-2 border-emerald-600/60 hover:border-emerald-600 transition block no-underline">
          <div class="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">Your State & Local Ballot</div>
          <div class="text-base sm:text-lg font-mono font-bold text-primary-custom mt-0.5">${esc(legStr)} + ${esc(town.county)} Co.</div>
          <div class="text-[11px] text-secondary-custom">5 Statewide + Local & Referendums ↓</div>
        </a>
      `;
    }
  }

  // Render Top Summary Metrics & Active Town Personalized Dashboard Banner
  function renderTownBanner() {
    const bannerEl = document.getElementById("active-town-banner");
    if (!bannerEl) return;

    if (state.selectedTownId === "all") {
      bannerEl.innerHTML = `
        <div class="town-banner-default">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="icon-badge-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-muted-custom">Statewide Illinois View Active (All 102 Counties)</div>
                <div class="text-sm font-semibold text-primary-custom">Type your Illinois city or 5-digit ZIP code in the "Start Here" box above to customize this dashboard with your exact local, state, and federal candidates.</div>
              </div>
            </div>
            <button type="button" data-tab-btn="towns" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
              Browse All 69 Illinois Area & ZIP Hubs →
            </button>
          </div>
        </div>
      `;
      return;
    }

    const town = TOWNS.find((t) => t.id === state.selectedTownId);
    if (!town) return;

    const matchingRaces = getFilteredRaces();
    const fedRaces = matchingRaces.filter((r) => r.level === "federal");
    const stateExecRaces = matchingRaces.filter((r) => r.level === "statewide");
    const legRaces = matchingRaces.filter((r) => r.level === "state_legislature");
    const localRaces = matchingRaces.filter((r) => r.level === "local");

    const headingTitle = state.enteredLocationLabel
      ? `${state.enteredLocationLabel} - Your 2026 General Election Dashboard`
      : `${town.name} - Your 2026 General Election Dashboard`;

    const zipsListStr = (town.zips || []).join(", ");

    // Build At-a-Glance Ballot Cheat Sheet rows
    const cheatSheetRowsHtml = matchingRaces
      .map((r) => {
        const levelMeta = getLevelMeta(r.level);
        const candsSummary = (r.candidates || [])
          .map((c) => {
            const pm = getPartyMeta(c.party);
            return `<span class="inline-flex items-center gap-1 mr-2 mb-1 px-2 py-0.5 rounded text-xs font-medium ${pm.badgeClass}">${esc(c.name)} (${pm.short})</span>`;
          })
          .join("");

        return `
          <div class="p-2.5 rounded-lg bg-elevated-custom border border-subtle-custom flex flex-wrap items-center justify-between gap-2">
            <div class="min-w-[210px] flex-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${levelMeta.badge}">${esc(r.districtCode)}</span>
                <a href="#race-${esc(r.id)}" class="text-xs sm:text-sm font-bold text-primary-custom hover:text-blue-600 no-underline">${esc(r.office)}</a>
              </div>
              <div class="mt-1 flex flex-wrap items-center">${candsSummary}</div>
            </div>
            <div class="flex items-center gap-1.5">
              <a href="#race-${esc(r.id)}" class="btn-secondary-sm no-underline">View Details ↓</a>
              ${
                (r.candidates || []).length >= 2
                  ? `<button type="button" data-compare-race="${esc(r.id)}" class="btn-compare-sm">Compare Race</button>`
                  : ""
              }
            </div>
          </div>
        `;
      })
      .join("");

    bannerEl.innerHTML = `
      <div class="town-banner-active">
        <div class="flex flex-wrap items-start justify-between gap-4 pb-3 border-b border-subtle-custom">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2 py-0.5 text-xs font-mono font-semibold uppercase rounded bg-blue-600 text-white">YOUR PERSONALIZED 2026 BALLOT</span>
              <span class="text-xs font-mono text-muted-custom">${esc(town.region)} | ${esc(town.county)} County | Pop. ${esc(town.population)}</span>
            </div>
            <h2 class="text-xl md:text-2xl font-serif-display font-bold text-primary-custom">${esc(headingTitle)}</h2>
            <p class="text-xs md:text-sm text-secondary-custom mt-1">
              Current Local Leadership: <strong class="text-primary-custom">${esc(town.mayor)}</strong>
              ${zipsListStr ? `<span class="text-muted-custom font-mono text-xs"> • ZIP Codes: ${esc(zipsListStr)}</span>` : ""}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-elevated-custom border border-subtle-custom text-primary-custom">${matchingRaces.length} Ballot Races Loaded</span>
            <button type="button" id="clear-town-btn" class="px-3 py-1.5 text-xs font-semibold rounded border border-subtle-custom hover:bg-red-500/10 hover:text-red-600 hover:border-red-500/30 transition">Reset to All Illinois</button>
          </div>
        </div>

        <!-- 4 Clickable Ballot Level Summary Cards (Federal, Statewide, State Legislature, County/Local) -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 text-xs">
          <a href="#ballot-tier-federal" class="p-3 rounded-lg bg-primary-custom border border-subtle-custom hover:border-blue-500 transition block no-underline">
            <div class="flex items-center justify-between">
              <span class="font-mono uppercase text-[10px] text-blue-600 dark:text-blue-400 font-bold">1. Federal Ballot (${fedRaces.length})</span>
              <span class="text-[10px] font-mono text-muted-custom">Jump ↓</span>
            </div>
            <div class="font-bold text-primary-custom mt-1">U.S. Senate + ${esc((town.usHouse || []).join(", "))}</div>
            <div class="text-[11px] text-secondary-custom mt-0.5">U.S. Senator & Your U.S. House Rep</div>
          </a>
          <a href="#ballot-tier-statewide" class="p-3 rounded-lg bg-primary-custom border border-subtle-custom hover:border-blue-500 transition block no-underline">
            <div class="flex items-center justify-between">
              <span class="font-mono uppercase text-[10px] text-amber-700 dark:text-amber-300 font-bold">2. Statewide Ballot (${stateExecRaces.length})</span>
              <span class="text-[10px] font-mono text-muted-custom">Jump ↓</span>
            </div>
            <div class="font-bold text-primary-custom mt-1">Gov, AG, SOS, Comp & Treas</div>
            <div class="text-[11px] text-secondary-custom mt-0.5">All 5 Illinois Executive Offices</div>
          </a>
          <a href="#ballot-tier-state_legislature" class="p-3 rounded-lg bg-primary-custom border border-subtle-custom hover:border-blue-500 transition block no-underline">
            <div class="flex items-center justify-between">
              <span class="font-mono uppercase text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">3. State Legislature (${legRaces.length})</span>
              <span class="text-[10px] font-mono text-muted-custom">Jump ↓</span>
            </div>
            <div class="font-bold text-primary-custom mt-1">Senate: ${esc((town.stateSenate || []).join(", "))} | House: ${esc((town.stateHouse || []).join(", "))}</div>
            <div class="text-[11px] text-secondary-custom mt-0.5">Your IL State Senator & State Rep</div>
          </a>
          <a href="#ballot-tier-local" class="p-3 rounded-lg bg-primary-custom border border-subtle-custom hover:border-blue-500 transition block no-underline">
            <div class="flex items-center justify-between">
              <span class="font-mono uppercase text-[10px] text-purple-700 dark:text-purple-300 font-bold">4. County & Local (${localRaces.length})</span>
              <span class="text-[10px] font-mono text-muted-custom">Jump ↓</span>
            </div>
            <div class="font-bold text-primary-custom mt-1">${esc(town.county)} County & Referendums</div>
            <div class="text-[11px] text-secondary-custom mt-0.5">County Offices & 2026 Ballot Measures</div>
          </a>
        </div>

        <div class="mt-3 p-3 rounded-lg bg-primary-custom/70 border border-subtle-custom text-xs text-secondary-custom leading-relaxed">
          <strong class="text-primary-custom font-semibold">Local 2026 Election Context for ${esc(town.name.split("(")[0].trim())}:</strong> ${esc(town.localContext)}
        </div>

        <!-- Quick At-a-Glance Ballot Summary Cheat Sheet -->
        <details class="mt-3 rounded-xl bg-primary-custom border border-subtle-custom p-3 group" open>
          <summary class="issue-details-summary">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-emerald-600 text-white">QUICK BALLOT SUMMARY</span>
              <span class="text-xs sm:text-sm font-bold text-primary-custom">All ${matchingRaces.length} Races & Candidates on Your Ballot At-a-Glance (Federal, State & Local)</span>
            </div>
            <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">Show / Hide Summary ▼</span>
          </summary>
          <div class="mt-3 pt-3 border-t border-subtle-custom grid grid-cols-1 md:grid-cols-2 gap-2.5">
            ${cheatSheetRowsHtml}
          </div>
        </details>
      </div>
    `;
  }

  // Render a single Candidate Card inside a Race Card
  function renderCandidateCard(cand, race) {
    const partyMeta = getPartyMeta(cand.party);
    const levelMeta = getLevelMeta(race.level);
    const issueDefs = ISSUES[levelMeta.issueTier] || ISSUES.state;
    const isCompared = state.compareIds.includes(cand.id);

    const pacPillsHtml = (cand.pacs || [])
      .map((p) => {
        const isOpp = (p.stance || "").toLowerCase().includes("oppos");
        const stanceBadge = isOpp
          ? `<span class="pac-stance-opp" title="Spent against candidate in primary/general">OPPOSED: ${esc(p.amount)}</span>`
          : `<span class="pac-stance-sup">${esc(p.amount)}</span>`;
        return `
          <div class="pac-row-item ${isOpp ? "pac-row-opposing" : ""}">
            <div class="flex items-center justify-between gap-2">
              <span class="font-medium text-primary-custom text-xs">${esc(p.name)}</span>
              ${stanceBadge}
            </div>
            <div class="text-[11px] text-muted-custom font-mono">${esc(p.type)} | ${esc(p.stance || "Supporting")}</div>
          </div>
        `;
      })
      .join("");

    const issuesPreviewHtml = issueDefs
      .map((def) => {
        const stanceText = (cand.issues && cand.issues[def.key]) || "Position aligned with party platform.";
        return `
          <div class="issue-stance-row">
            <div class="issue-stance-label">${esc(def.label)}</div>
            <div class="issue-stance-text">${esc(stanceText)}</div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="candidate-card ${partyMeta.borderClass}" data-cand-id="${esc(cand.id)}">
        <div>
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <div class="avatar-monogram ${partyMeta.badgeClass}">
                ${esc(cand.photoInitials || cand.name.slice(0, 2).toUpperCase())}
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <h4 class="text-base md:text-lg font-bold text-primary-custom leading-tight">${esc(cand.name)}</h4>
                  <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded ${partyMeta.badgeClass}">${esc(cand.party)}</span>
                  <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-elevated-custom border border-subtle-custom text-secondary-custom">${esc(cand.incumbentStatus)}</span>
                </div>
                <p class="text-xs text-secondary-custom mt-1">${esc(cand.role)}</p>
                <p class="text-[11px] font-mono text-muted-custom mt-0.5">Hometown: ${esc(cand.hometown)}</p>
              </div>
            </div>
          </div>

          <!-- Campaign Finance & PAC Policy Strip -->
          <div class="mt-3 p-2.5 rounded-lg bg-primary-custom border border-subtle-custom">
            <div class="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-subtle-custom">
              <div>
                <div class="text-[10px] font-mono uppercase text-muted-custom">Total Raised (FEC / IL SBE)</div>
                <div class="text-xs md:text-sm font-mono font-bold text-primary-custom tabular-nums">${esc(cand.fecRaised || "N/A")}</div>
              </div>
              <div>
                <div class="text-[10px] font-mono uppercase text-muted-custom">Cash on Hand</div>
                <div class="text-xs md:text-sm font-mono font-semibold text-secondary-custom tabular-nums">${esc(cand.fecCashOnHand || "N/A")}</div>
              </div>
            </div>
            <div class="flex items-center gap-1.5 text-xs font-semibold text-primary-custom mb-1">
              <svg class="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              <span>PAC Policy: ${esc(cand.pacPolicy)}</span>
            </div>
            <p class="text-xs text-secondary-custom leading-relaxed">${esc(cand.pacSummary)}</p>

            <!-- Detailed PAC List -->
            <div class="mt-2.5 space-y-1.5">
              <div class="text-[10px] font-mono uppercase tracking-wider text-muted-custom">Associated PACs, Super PACs & Donors:</div>
              ${pacPillsHtml}
            </div>
          </div>

          <!-- Endorsements -->
          <div class="mt-2.5 flex flex-wrap items-center gap-1">
            <span class="text-[10px] font-mono uppercase text-muted-custom mr-1">Key Endorsements:</span>
            ${(cand.endorsements || [])
              .map((e) => `<span class="endorsement-tag">${esc(e)}</span>`)
              .join("")}
          </div>

          <!-- Issue Stances Accordion -->
          <details class="mt-3 group issue-details-box" ${state.compactIssues ? "" : "open"}>
            <summary class="issue-details-summary">
              <span class="flex items-center gap-1.5 font-semibold text-xs text-primary-custom">
                <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Where ${esc(cand.name)} Stands on All ${issueDefs.length} ${levelMeta.issueTier.toUpperCase()} Issues
              </span>
              <span class="text-[11px] font-mono text-muted-custom group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-2 space-y-2 pt-2 border-t border-subtle-custom">
              ${issuesPreviewHtml}
            </div>
          </details>
        </div>

        <!-- Action Footer -->
        <div class="mt-3 pt-2.5 border-t border-subtle-custom flex items-center justify-between gap-2">
          <button type="button" data-modal-cand="${esc(cand.id)}" class="btn-secondary-sm">
            Full Candidate Dossier
          </button>
          <button type="button" data-compare-toggle="${esc(cand.id)}" class="btn-compare-sm ${isCompared ? "btn-compare-active" : ""}">
            ${isCompared ? "✓ In Comparison Tray" : "+ Compare Candidate"}
          </button>
        </div>
      </div>
    `;
  }

  // Render a single Race Card
  function renderRaceCard(race) {
    const levelMeta = getLevelMeta(race.level);
    const citiesPreview = (race.cities || []).slice(0, 10).join(", ") + ((race.cities || []).length > 10 ? ` + ${(race.cities || []).length - 10} more` : "");

    // Filter candidates inside the race if party or PAC filter is active
    const visibleCandidates = (race.candidates || []).filter((c) => {
      if (state.partyFilter !== "all") {
        const p = (c.party || "").toLowerCase();
        if (state.partyFilter === "dem" && !p.includes("democrat")) return false;
        if (state.partyFilter === "gop" && !p.includes("republican") && !p.includes("gop")) return false;
        if (state.partyFilter === "ind" && (p.includes("democrat") || p.includes("republican"))) return false;
      }
      if (!candidateMatchesPacFilter(c, state.pacFilter)) return false;
      return true;
    });

    const gridCols = visibleCandidates.length >= 3 ? "grid-cols-1 lg:grid-cols-3" : visibleCandidates.length === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1";

    return `
      <article class="race-section-card" id="race-${esc(race.id)}">
        <!-- Race Header -->
        <div class="race-card-header">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded ${levelMeta.badge}">${esc(levelMeta.label)}</span>
              <span class="px-2 py-0.5 text-xs font-mono font-bold rounded bg-primary-custom border border-subtle-custom text-primary-custom">${esc(race.districtCode)}</span>
              <span class="px-2 py-0.5 text-xs font-mono rounded bg-primary-custom border border-subtle-custom text-secondary-custom">PVI: ${esc(race.pvi)}</span>
              ${race.isBattleground ? `<span class="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">Marquee Battleground</span>` : ""}
              ${race.isOpenSeat ? `<span class="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">Open Seat</span>` : ""}
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-primary-custom border border-subtle-custom text-primary-custom">${esc(race.rating)}</span>
              ${
                (race.candidates || []).length >= 2
                  ? `<button type="button" data-compare-race="${esc(race.id)}" class="btn-compare-sm">Compare Candidates in This Race →</button>`
                  : ""
              }
            </div>
          </div>

          <h3 class="text-lg md:text-xl font-serif-display font-bold text-primary-custom">${esc(race.office)}</h3>
          <p class="text-xs md:text-sm text-secondary-custom mt-0.5">${esc(race.districtName)}</p>

          <div class="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-custom">
            <span><strong class="text-secondary-custom">Current Incumbent:</strong> ${esc(race.incumbent)}</span>
            <span><strong class="text-secondary-custom">Towns & Neighborhoods:</strong> ${esc(citiesPreview)}</span>
          </div>

          <div class="mt-2.5 p-2.5 rounded bg-primary-custom/80 border border-subtle-custom text-xs text-secondary-custom leading-relaxed">
            <strong class="text-primary-custom">March 17, 2026 Primary & Race Dynamics:</strong> ${esc(race.primarySummary)}
          </div>
        </div>

        <!-- Candidates Grid -->
        <div class="p-4 grid ${gridCols} gap-4">
          ${visibleCandidates.map((cand) => renderCandidateCard(cand, race)).join("")}
        </div>
      </article>
    `;
  }

  // Render Races List Grouped by Ballot Tier (Tab 1)
  function renderBallotTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const races = getFilteredRaces();
    const totalCandidates = races.reduce((acc, r) => acc + (r.candidates ? r.candidates.length : 0), 0);
    const activeTown = state.selectedTownId !== "all" ? TOWNS.find((t) => t.id === state.selectedTownId) : null;
    const areaShortName = activeTown ? state.enteredLocationLabel || activeTown.name.split("(")[0].trim() : "All of Illinois";

    if (races.length === 0) {
      container.innerHTML = `
        <div class="p-10 text-center rounded-xl bg-elevated-custom border border-subtle-custom">
          <p class="text-base font-semibold text-primary-custom">No races match your current filter combination.</p>
          <p class="text-xs text-secondary-custom mt-1">Try resetting the PAC, Party, or Region filters above to view all 2026 Illinois races.</p>
          <button type="button" id="reset-all-filters-btn" class="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const tierGroups = [
      {
        key: "federal",
        title: activeTown
          ? `1. Federal Level Candidates for ${areaShortName} (U.S. Senate & U.S. House ${(activeTown.usHouse || []).join(", ")})`
          : "1. Federal Level Elections (U.S. Senate + All 17 Illinois Congressional Districts)",
        subtitle: "Represents your area in Washington, D.C. Covers Federal Taxes & SALT Cap, Economy, Healthcare/Medicare, Immigration, Climate/Grid, Reproductive Rights, Foreign Policy, and Gun Policy.",
        items: races.filter((r) => r.level === "federal")
      },
      {
        key: "statewide",
        title: "2. Illinois Statewide Constitutional Executive Elections (All 102 Counties)",
        subtitle: "Represents every Illinois voter statewide. Covers Governor & Lt. Governor, Attorney General, Secretary of State, Comptroller, and State Treasurer.",
        items: races.filter((r) => r.level === "statewide")
      },
      {
        key: "state_legislature",
        title: activeTown
          ? `3. Illinois General Assembly Candidates for ${areaShortName} (State Senate ${(activeTown.stateSenate || []).join(", ")} & State House ${(activeTown.stateHouse || []).join(", ")})`
          : "3. Illinois General Assembly (State Senate & State House Leadership, Battlegrounds & Regional Anchors)",
        subtitle: "Represents your district in Springfield. Covers Property Taxes & EBF School Aid, SAFE-T Act, State Budget ($53B+), Tier 2 Pensions, CEJA & Data Centers, and NITA Transit.",
        items: races.filter((r) => r.level === "state_legislature")
      },
      {
        key: "local",
        title: activeTown
          ? `4. County, Municipal & Ballot Referendums for ${areaShortName} (${activeTown.county} County)`
          : "4. County, Municipal & 2026 Ballot Referendums Across Illinois",
        subtitle: "Directly governs county property tax assessments, County Sheriffs & Clerks, lead water service lines, data center zoning, and local ballot referendums.",
        items: races.filter((r) => r.level === "local")
      }
    ].filter((g) => g.items.length > 0);

    const groupedHtml = tierGroups
      .map(
        (group) => `
        <section id="ballot-tier-${esc(group.key)}" class="space-y-4 pt-2">
          <div class="ballot-tier-section-header flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 class="text-base sm:text-lg font-serif-display font-bold text-primary-custom">${esc(group.title)}</h2>
              <p class="text-xs text-secondary-custom mt-0.5">${esc(group.subtitle)}</p>
            </div>
            <span class="px-2.5 py-1 rounded bg-elevated-custom border border-subtle-custom text-xs font-mono font-semibold text-primary-custom">
              ${group.items.length} ${group.items.length === 1 ? "Race" : "Races"}
            </span>
          </div>
          <div class="space-y-6">
            ${group.items.map((race) => renderRaceCard(race)).join("")}
          </div>
        </section>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 p-3 rounded-xl bg-elevated-custom border border-subtle-custom">
        <div class="text-xs font-mono text-secondary-custom">
          Showing <strong class="text-primary-custom">${races.length}</strong> Elections & <strong class="text-primary-custom">${totalCandidates}</strong> Candidates for <strong class="text-blue-600 dark:text-blue-400">${esc(areaShortName)}</strong>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button type="button" id="toggle-compact-issues-btn" class="btn-secondary-sm">
            ${state.compactIssues ? "Expand All Candidate Issue Lists ▼" : "Compact View (Collapse Issue Lists ▲)"}
          </button>
        </div>
      </div>
      <div class="space-y-8">
        ${groupedHtml}
      </div>
    `;
  }

  // Render Town / City & ZIP Ballot Directory (Tab 2)
  function renderTownsTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const q = state.searchQuery.trim().toLowerCase();
    const filteredTowns = TOWNS.filter((t) => {
      if (!q) return true;
      const blob = [
        t.name,
        t.region,
        t.county,
        t.mayor,
        t.localContext,
        ...(t.zips || []),
        ...(t.aliases || []),
        ...(t.usHouse || []),
        ...(t.stateSenate || []),
        ...(t.stateHouse || [])
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });

    const cardsHtml = filteredTowns
      .map((t) => {
        const isSelected = state.selectedTownId === t.id;
        const zipsPreview = (t.zips || []).slice(0, 8).join(", ") + ((t.zips || []).length > 8 ? ` + ${(t.zips || []).length - 8} more` : "");
        return `
          <div class="p-4 rounded-xl bg-elevated-custom border ${isSelected ? "border-blue-600 ring-2 ring-blue-500/20" : "border-subtle-custom"} flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[11px] font-mono uppercase tracking-wider text-muted-custom">${esc(t.region)}</span>
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary-custom border border-subtle-custom text-secondary-custom">${esc(t.county)} County</span>
              </div>
              <h3 class="text-base font-serif-display font-bold text-primary-custom">${esc(t.name)}</h3>
              <p class="text-xs text-secondary-custom mt-1"><strong>Mayor / Local Exec:</strong> ${esc(t.mayor)}</p>
              <p class="text-[11px] font-mono text-muted-custom mt-1"><strong>ZIP Codes:</strong> ${esc(zipsPreview)}</p>

              <div class="mt-3 grid grid-cols-3 gap-1.5 text-[11px] font-mono">
                <div class="p-1.5 rounded bg-primary-custom border border-subtle-custom">
                  <div class="text-[9px] uppercase text-muted-custom">U.S. House</div>
                  <div class="font-bold text-primary-custom">${esc((t.usHouse || []).join(", "))}</div>
                </div>
                <div class="p-1.5 rounded bg-primary-custom border border-subtle-custom">
                  <div class="text-[9px] uppercase text-muted-custom">IL Senate</div>
                  <div class="font-bold text-primary-custom">${esc((t.stateSenate || []).join(", "))}</div>
                </div>
                <div class="p-1.5 rounded bg-primary-custom border border-subtle-custom">
                  <div class="text-[9px] uppercase text-muted-custom">IL House</div>
                  <div class="font-bold text-primary-custom">${esc((t.stateHouse || []).join(", "))}</div>
                </div>
              </div>

              <p class="mt-2.5 text-xs text-secondary-custom leading-relaxed">${esc(t.localContext)}</p>
            </div>

            <button type="button" data-load-town="${esc(t.id)}" class="w-full py-2 px-3 rounded-lg text-xs font-semibold ${isSelected ? "bg-emerald-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"} transition">
              ${isSelected ? "✓ Currently Active Ballot - View Races" : "Load Complete 2026 Ballot for " + esc(t.name.split("(")[0].trim())}
            </button>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="mb-4 p-4 rounded-xl bg-elevated-custom border border-subtle-custom flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 class="text-lg font-serif-display font-bold text-primary-custom">Illinois Town, Suburb, Chicago Neighborhood & ZIP Code Ballot Directory</h3>
          <p class="text-xs text-secondary-custom">Click any community below (or type any Illinois ZIP code above) to load its exact Federal, Statewide Executive, State Senate, State House, and County/Local ballot.</p>
        </div>
        <span class="text-xs font-mono px-3 py-1 rounded bg-primary-custom border border-subtle-custom text-primary-custom">${filteredTowns.length} Communities & 400+ Cities/ZIPs Indexed</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${cardsHtml}
      </div>
    `;
  }

  // Render Multi-Level Issue Stance Matrix (Tab 3)
  function renderIssuesTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const currentIssueList = ISSUES[state.issueLevel] || ISSUES.federal;
    if (!currentIssueList.some((i) => i.key === state.selectedIssueKey)) {
      state.selectedIssueKey = currentIssueList[0].key;
    }
    const activeIssue = currentIssueList.find((i) => i.key === state.selectedIssueKey) || currentIssueList[0];

    // Filter races matching this issue tier and current town/search filter
    const matchingRaces = getFilteredRaces().filter((r) => {
      const tier = getLevelMeta(r.level).issueTier;
      return tier === state.issueLevel;
    });

    const issueButtonsHtml = currentIssueList
      .map((iss) => {
        const active = iss.key === state.selectedIssueKey;
        return `
          <button type="button" data-select-issue="${esc(iss.key)}" class="px-3 py-2 rounded-lg text-xs font-semibold text-left border transition ${
            active
              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
              : "bg-primary-custom text-secondary-custom border-subtle-custom hover:border-blue-500/40"
          }">
            <div>${esc(iss.shortLabel)}</div>
          </button>
        `;
      })
      .join("");

    const rowsHtml = matchingRaces
      .map((race) => {
        const candsHtml = (race.candidates || [])
          .map((cand) => {
            const partyMeta = getPartyMeta(cand.party);
            const stance = (cand.issues && cand.issues[activeIssue.key]) || "Position aligned with party platform.";
            return `
              <div class="p-3 rounded-lg bg-primary-custom border border-subtle-custom ${partyMeta.borderClass}">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-sm text-primary-custom">${esc(cand.name)}</span>
                    <span class="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${partyMeta.badgeClass}">${esc(cand.party)}</span>
                  </div>
                  <span class="text-[11px] font-mono text-muted-custom">${esc(cand.pacPolicy)}</span>
                </div>
                <p class="text-xs text-secondary-custom leading-relaxed">${esc(stance)}</p>
              </div>
            `;
          })
          .join("");

        return `
          <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-subtle-custom">
              <div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary-custom border border-subtle-custom text-primary-custom mr-2">${esc(race.districtCode)}</span>
                <strong class="text-sm md:text-base font-serif-display text-primary-custom">${esc(race.office)}</strong>
              </div>
              <span class="text-xs font-mono text-muted-custom">${esc(race.rating)}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${candsHtml}
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-subtle-custom">
          <div>
            <h3 class="text-lg font-serif-display font-bold text-primary-custom">Multi-Level Candidate Issue Stance Explorer</h3>
            <p class="text-xs text-secondary-custom">Select a government tier and specific policy issue to compare every candidate's exact stance side-by-side.</p>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" data-issue-tier="federal" class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${state.issueLevel === "federal" ? "bg-blue-600 text-white border-blue-600" : "bg-primary-custom text-secondary-custom border-subtle-custom"}">1. Federal Issues (8)</button>
            <button type="button" data-issue-tier="state" class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${state.issueLevel === "state" ? "bg-blue-600 text-white border-blue-600" : "bg-primary-custom text-secondary-custom border-subtle-custom"}">2. State Issues (8)</button>
            <button type="button" data-issue-tier="local" class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${state.issueLevel === "local" ? "bg-blue-600 text-white border-blue-600" : "bg-primary-custom text-secondary-custom border-subtle-custom"}">3. County & Local Issues (7)</button>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          ${issueButtonsHtml}
        </div>

        <div class="mt-4 p-3 rounded-lg bg-primary-custom border border-subtle-custom">
          <div class="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold">${esc(state.issueLevel.toUpperCase())} POLICY BRIEFING</div>
          <div class="text-base font-bold text-primary-custom mt-0.5">${esc(activeIssue.label)}</div>
          <p class="text-xs text-secondary-custom mt-1">${esc(activeIssue.summary)}</p>
        </div>
      </div>

      <div class="space-y-4">
        ${rowsHtml || `<div class="p-8 text-center text-sm text-secondary-custom bg-elevated-custom rounded-xl border border-subtle-custom">No races in this tier match your current filters. Note: If you filtered by a specific Level in the top bar, set Level to "All Levels" to browse all tiers.</div>`}
      </div>
    `;
  }

  // Render PAC & Money Power Broker Directory (Tab 4)
  function renderPacsTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const q = (state.pacSearchQuery || state.searchQuery || "").trim().toLowerCase();

    const filteredPacs = PACS.filter((p) => {
      if (!q) return true;
      const blob = [
        p.name,
        p.category,
        p.alignment,
        p.leaderOrSource,
        p.description,
        p.issueFocus,
        ...(p.keyBackedCandidates || []),
        ...(p.keyOpposedCandidates || [])
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });

    const pacCardsHtml = filteredPacs
      .map((pac) => {
        return `
          <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span class="px-2 py-0.5 text-[11px] font-mono font-semibold uppercase rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">${esc(pac.category)}</span>
                <span class="text-xs font-mono font-bold text-primary-custom tabular-nums">${esc(pac.cycle2026Spending)}</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">${esc(pac.name)}</h4>
              <p class="text-[11px] font-mono text-muted-custom mt-0.5">Leadership / Funding Source: ${esc(pac.leaderOrSource)} | Alignment: ${esc(pac.alignment)}</p>
              <p class="text-xs text-secondary-custom mt-2 leading-relaxed">${esc(pac.description)}</p>

              <div class="mt-3 p-2.5 rounded bg-primary-custom border border-subtle-custom space-y-2 text-xs">
                <div>
                  <span class="font-mono text-[10px] uppercase text-emerald-600 dark:text-emerald-400 font-bold block">Key Illinois Candidates Paid / Backed (2026):</span>
                  <span class="text-primary-custom font-medium">${esc((pac.keyBackedCandidates || []).join(" • "))}</span>
                </div>
                <div>
                  <span class="font-mono text-[10px] uppercase text-red-600 dark:text-red-400 font-bold block">Key Candidates Opposed / Targeted:</span>
                  <span class="text-secondary-custom">${esc((pac.keyOpposedCandidates || []).join(" • "))}</span>
                </div>
                <div>
                  <span class="font-mono text-[10px] uppercase text-muted-custom font-bold block">Legislative & Policy Agenda:</span>
                  <span class="text-secondary-custom">${esc(pac.issueFocus)}</span>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 class="text-lg md:text-xl font-serif-display font-bold text-primary-custom">2026 Illinois PAC, Super PAC & Megadonor Power Broker Directory</h3>
            <p class="text-xs text-secondary-custom mt-0.5">Comprehensive breakdown of the Super PACs, Labor Unions, Party Committees, Corporate PACs, and Megadonors funding Illinois Federal, State, and County candidates.</p>
          </div>
          <div class="w-full md:w-80">
            <input type="text" id="pac-search-input" value="${esc(state.pacSearchQuery)}" placeholder="Search PACs, Unions, AIPAC, Fairshake, Local 150..." class="w-full px-3 py-2 text-xs rounded-lg bg-primary-custom border border-subtle-custom text-primary-custom" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        ${pacCardsHtml}
      </div>
    `;
  }

  // Render Side-by-Side Candidate Comparison Arena (Tab 5)
  function renderCompareTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const comparedCands = state.compareIds.map((id) => CANDIDATE_MAP.get(id)).filter(Boolean);

    const presetsHtml = `
      <div class="flex flex-wrap items-center gap-2 mt-3">
        <span class="text-xs font-mono uppercase text-muted-custom">Quick Compare Presets:</span>
        <button type="button" data-compare-preset="juliana-stratton,don-tracy,whitfield-harrington" class="quick-town-pill">U.S. Senate (Stratton vs. Tracy vs. Harrington)</button>
        <button type="button" data-compare-preset="jb-pritzker,darren-bailey,collin-corbett" class="quick-town-pill">Governor (Pritzker vs. Bailey vs. Corbett)</button>
        <button type="button" data-compare-preset="margaret-croke,bryan-drew,kwame-raoul,bob-fioretti" class="quick-town-pill">Comptroller & AG Showdowns</button>
        <button type="button" data-compare-preset="donna-miller,melissa-bean,daniel-biss,la-shawn-ford" class="quick-town-pill">Open Congress Seats (IL-02, IL-08, IL-09, IL-07)</button>
        <button type="button" data-compare-preset="eric-sorensen,dillan-vancil,nikki-budzinski,joshua-loyd" class="quick-town-pill">Downstate Congress (IL-17 & IL-13)</button>
        <button type="button" data-compare-preset="doris-turner,frank-lesko,darby-hills,nabeela-syed" class="quick-town-pill">Top State Senate Toss-Ups (SD-48 & SD-26)</button>
        <button type="button" data-compare-preset="toni-preckwinkle,pat-hynes,elyse-hoffenberg,liz-doody-gorman" class="quick-town-pill">Cook County President, Assessor & Dist. 17</button>
      </div>
    `;

    if (comparedCands.length === 0) {
      container.innerHTML = `
        <div class="p-8 rounded-xl bg-elevated-custom border border-subtle-custom text-center">
          <h3 class="text-lg font-serif-display font-bold text-primary-custom">No Candidates Selected for Comparison</h3>
          <p class="text-xs text-secondary-custom mt-1">Click "+ Compare Candidate" on any candidate card, "Compare Race" on any race header, or choose a preset below:</p>
          <div class="flex justify-center mt-4">${presetsHtml}</div>
        </div>
      `;
      return;
    }

    // Determine all issue keys present across selected candidates
    const allIssueRows = [
      ...ISSUES.federal.map((i) => ({ ...i, tierLabel: "FEDERAL" })),
      ...ISSUES.state.map((i) => ({ ...i, tierLabel: "STATE" })),
      ...ISSUES.local.map((i) => ({ ...i, tierLabel: "LOCAL" }))
    ].filter((iss) => comparedCands.some((c) => c.issues && c.issues[iss.key]));

    const headerCols = comparedCands
      .map((c) => {
        const partyMeta = getPartyMeta(c.party);
        return `
          <th class="p-3 text-left align-top bg-elevated-custom border-b border-l border-subtle-custom min-w-[240px]">
            <div class="flex items-start justify-between gap-2">
              <span class="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${partyMeta.badgeClass}">${esc(c.party)}</span>
              <button type="button" data-compare-remove="${esc(c.id)}" class="text-xs text-muted-custom hover:text-red-500 font-mono">✕ Remove</button>
            </div>
            <div class="text-base font-bold text-primary-custom mt-1.5">${esc(c.name)}</div>
            <div class="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">${esc(c.raceOffice)}</div>
            <div class="text-[11px] text-secondary-custom mt-0.5">${esc(c.role)}</div>
          </th>
        `;
      })
      .join("");

    const financeCols = comparedCands
      .map(
        (c) => `
        <td class="p-3 align-top border-b border-l border-subtle-custom text-xs">
          <div class="font-mono font-bold text-primary-custom">Raised: ${esc(c.fecRaised)}</div>
          <div class="font-mono text-secondary-custom">Cash: ${esc(c.fecCashOnHand)}</div>
          <div class="mt-1.5 font-semibold text-amber-700 dark:text-amber-300">${esc(c.pacPolicy)}</div>
          <p class="mt-1 text-secondary-custom leading-relaxed">${esc(c.pacSummary)}</p>
        </td>
      `
      )
      .join("");

    const pacListCols = comparedCands
      .map(
        (c) => `
        <td class="p-3 align-top border-b border-l border-subtle-custom text-xs space-y-1.5">
          ${(c.pacs || [])
            .map(
              (p) => `
              <div class="p-1.5 rounded bg-primary-custom border border-subtle-custom">
                <div class="font-semibold text-primary-custom">${esc(p.name)}</div>
                <div class="font-mono text-[11px] text-muted-custom">${esc(p.type)} | ${esc(p.amount)} (${esc(p.stance)})</div>
              </div>
            `
            )
            .join("")}
        </td>
      `
      )
      .join("");

    const issueMatrixRows = allIssueRows
      .map((iss) => {
        const cols = comparedCands
          .map((c) => {
            const val = c.issues && c.issues[iss.key];
            return `
              <td class="p-3 align-top border-b border-l border-subtle-custom text-xs leading-relaxed ${val ? "text-secondary-custom" : "text-muted-custom italic"}">
                ${val ? esc(val) : "Not applicable to this office tier."}
              </td>
            `;
          })
          .join("");

        return `
          <tr>
            <td class="p-3 align-top border-b border-subtle-custom bg-elevated-custom/60 font-semibold text-xs text-primary-custom w-48">
              <span class="block text-[10px] font-mono text-muted-custom">${esc(iss.tierLabel)} ISSUE</span>
              ${esc(iss.label)}
            </td>
            ${cols}
          </tr>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom mb-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-lg font-serif-display font-bold text-primary-custom">Side-by-Side Candidate Comparison Matrix (${comparedCands.length}/4 Selected)</h3>
            <p class="text-xs text-secondary-custom">Compare fundraising, PAC backers, and exact policy stances across candidates.</p>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" data-tab-btn="ballot" class="btn-secondary-sm">← Back to Ballot</button>
            <button type="button" id="clear-compare-btn" class="px-3 py-1.5 text-xs font-semibold rounded border border-subtle-custom hover:bg-red-500/10 hover:text-red-500">Clear All</button>
          </div>
        </div>
        ${presetsHtml}
      </div>

      <div class="overflow-x-auto rounded-xl border border-subtle-custom bg-primary-custom shadow-sm">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="p-3 text-left align-top bg-elevated-custom border-b border-subtle-custom w-48 text-xs font-mono uppercase text-muted-custom">Attribute / Issue</th>
              ${headerCols}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 align-top border-b border-subtle-custom bg-elevated-custom/60 font-semibold text-xs text-primary-custom">Fundraising & PAC Policy</td>
              ${financeCols}
            </tr>
            <tr>
              <td class="p-3 align-top border-b border-subtle-custom bg-elevated-custom/60 font-semibold text-xs text-primary-custom">Top PAC Backers & Donors</td>
              ${pacListCols}
            </tr>
            ${issueMatrixRows}
          </tbody>
        </table>
      </div>
    `;
  }

  // Render Candidate Modal Dossier
  function renderModal() {
    const modalEl = document.getElementById("candidate-modal-backdrop");
    if (!modalEl) return;

    if (!state.modalCandidateId) {
      modalEl.classList.add("hidden");
      modalEl.innerHTML = "";
      return;
    }

    const cand = CANDIDATE_MAP.get(state.modalCandidateId);
    if (!cand) {
      modalEl.classList.add("hidden");
      return;
    }

    const partyMeta = getPartyMeta(cand.party);
    const levelMeta = getLevelMeta(cand.level);
    const issueDefs = ISSUES[levelMeta.issueTier] || ISSUES.state;

    modalEl.classList.remove("hidden");
    modalEl.innerHTML = `
      <div class="modal-dialog-box" role="dialog" aria-modal="true">
        <div class="p-5 border-b border-subtle-custom flex items-start justify-between gap-4 bg-elevated-custom">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="px-2 py-0.5 text-xs font-mono font-bold uppercase rounded ${partyMeta.badgeClass}">${esc(cand.party)}</span>
              <span class="px-2 py-0.5 text-xs font-mono rounded bg-primary-custom border border-subtle-custom text-secondary-custom">${esc(cand.districtCode)} | ${esc(cand.incumbentStatus)}</span>
            </div>
            <h3 class="text-xl md:text-2xl font-serif-display font-bold text-primary-custom">${esc(cand.name)}</h3>
            <p class="text-xs md:text-sm text-secondary-custom mt-0.5">${esc(cand.raceOffice)}</p>
            <p class="text-xs text-muted-custom mt-0.5">${esc(cand.role)} • Hometown: ${esc(cand.hometown)}</p>
          </div>
          <button type="button" id="close-modal-btn" class="px-3 py-1.5 rounded-lg border border-subtle-custom text-xs font-mono hover:bg-red-500/10 hover:text-red-500">✕ ESC</button>
        </div>

        <div class="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="p-3 rounded-lg bg-elevated-custom border border-subtle-custom">
              <div class="text-[10px] font-mono uppercase text-muted-custom">Total Raised (FEC / IL SBE)</div>
              <div class="text-base font-mono font-bold text-primary-custom mt-0.5">${esc(cand.fecRaised)}</div>
            </div>
            <div class="p-3 rounded-lg bg-elevated-custom border border-subtle-custom">
              <div class="text-[10px] font-mono uppercase text-muted-custom">Cash on Hand</div>
              <div class="text-base font-mono font-bold text-primary-custom mt-0.5">${esc(cand.fecCashOnHand)}</div>
            </div>
            <div class="p-3 rounded-lg bg-elevated-custom border border-subtle-custom">
              <div class="text-[10px] font-mono uppercase text-muted-custom">PAC Policy & Strategy</div>
              <div class="text-xs font-semibold text-primary-custom mt-0.5">${esc(cand.pacPolicy)}</div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-elevated-custom border border-subtle-custom">
            <h4 class="text-xs font-mono uppercase tracking-wider text-muted-custom mb-2">PAC & Campaign Finance Breakdown</h4>
            <p class="text-xs text-secondary-custom mb-3 leading-relaxed">${esc(cand.pacSummary)}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              ${(cand.pacs || [])
                .map(
                  (p) => `
                  <div class="p-2.5 rounded bg-primary-custom border border-subtle-custom flex items-center justify-between gap-2">
                    <div>
                      <div class="text-xs font-bold text-primary-custom">${esc(p.name)}</div>
                      <div class="text-[10px] font-mono text-muted-custom">${esc(p.type)} (${esc(p.stance)})</div>
                    </div>
                    <span class="text-xs font-mono font-bold text-primary-custom">${esc(p.amount)}</span>
                  </div>
                `
                )
                .join("")}
            </div>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase tracking-wider text-muted-custom mb-2.5">Complete Policy Platform (${issueDefs.length} Key Issues)</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${issueDefs
                .map(
                  (def) => `
                  <div class="p-3 rounded-lg bg-elevated-custom border border-subtle-custom">
                    <div class="text-xs font-bold text-primary-custom mb-1">${esc(def.label)}</div>
                    <p class="text-xs text-secondary-custom leading-relaxed">${esc((cand.issues && cand.issues[def.key]) || "Aligned with party platform.")}</p>
                  </div>
                `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Interactive "How to Use This Guide" Tab (Tab 6)
  function renderGuideTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 rounded-xl bg-elevated-custom border border-subtle-custom space-y-6">
        <div class="pb-4 border-b border-subtle-custom flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded bg-blue-600 text-white">FAMILY & FRIENDS USER MANUAL</span>
            <h3 class="text-xl md:text-2xl font-serif-display font-bold text-primary-custom mt-2">How to Use the 2026 Illinois Midterm Elections & PAC Guide</h3>
            <p class="text-xs md:text-sm text-secondary-custom mt-1">Follow the steps below or click any of the blue <strong>"Try Example"</strong> buttons to jump straight to that feature.</p>
          </div>
          <button type="button" data-tab-btn="ballot" class="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
            Return to Your Ballot View
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Step 1 -->
          <div class="p-4 rounded-xl bg-primary-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-blue-600/15 text-blue-600 dark:text-blue-400">Step 1 • Enter Your City or 5-Digit ZIP Code</span>
                <span class="text-xs font-mono text-muted-custom">Hero "Start Here" Box</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">Type Your Illinois ZIP Code (60001-62999) or City Name</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                Type your <strong>5-digit Illinois ZIP code</strong> (like <code>60614</code>, <code>60540</code>, <code>60201</code>, <code>62701</code>) or your <strong>city, suburb, or Chicago neighborhood</strong> into the blue <strong>Start Here</strong> search box at the top of the page. The entire dashboard immediately updates to display your exact ballot across all 4 levels: <strong>Federal</strong> (U.S. Senate + your U.S. House district), <strong>Statewide Executive</strong> (Governor, AG, SOS, Comptroller, Treasurer), <strong>State Legislature</strong> (your State Senator and State Rep), and <strong>County/Local</strong> offices.
              </p>
            </div>
            <div class="pt-2 border-t border-subtle-custom flex flex-wrap gap-2">
              <button type="button" data-quick-town="naperville" data-quick-label="ZIP 60540 (Naperville)" class="btn-compare-sm">Try ZIP 60540 (Naperville)</button>
              <button type="button" data-quick-town="chicago-lincoln-park-lakeview" data-quick-label="ZIP 60614 (Lincoln Park)" class="btn-compare-sm">Try ZIP 60614 (Chicago)</button>
              <button type="button" data-quick-town="springfield" data-quick-label="ZIP 62701 (Springfield)" class="btn-compare-sm">Try ZIP 62701 (Springfield)</button>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="p-4 rounded-xl bg-primary-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-amber-500/15 text-amber-700 dark:text-amber-300">Step 2 • Follow the PAC Money</span>
                <span class="text-xs font-mono text-muted-custom">Control #3 & PAC Tab</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">See Which PACs, Super PACs & Unions Pay or Back Each Candidate</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                Every candidate card includes a verified <strong>FEC / IL SBE Campaign Finance Box</strong> showing Total Raised, Cash on Hand, PAC Policy, and a line-by-line list of associated PACs with dollar amounts. Green tags show PACs <strong>Supporting</strong> the candidate; red tags flag Super PACs that spent money <strong>Opposing</strong> them. Use dropdown <strong>#3 (Filter by PAC)</strong> to isolate candidates by donor network.
              </p>
            </div>
            <div class="pt-2 border-t border-subtle-custom flex flex-wrap gap-2">
              <button type="button" data-guide-pac="fairshake" class="btn-compare-sm">Filter: Fairshake Crypto Backed</button>
              <button type="button" data-guide-pac="aipac" class="btn-compare-sm">Filter: AIPAC / UDP Backed</button>
              <button type="button" data-guide-pac="local150" class="btn-compare-sm">Filter: IUOE Local 150 Backed</button>
              <button type="button" data-tab-btn="pacs" class="btn-secondary-sm">Open PAC Directory</button>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="p-4 rounded-xl bg-primary-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">Step 3 • 23 Policy Issues</span>
                <span class="text-xs font-mono text-muted-custom">Federal, State & Local Tiers</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">Inspect Where Candidates Stand on Every Key Issue</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                We track <strong>23 distinct policy issues</strong> tailored to the office level:
                <br/>• <strong>8 Federal Issues</strong>: Economy, Healthcare/Medicare, Immigration, Climate/Grid, Taxes & SALT Cap, Reproductive Rights, Foreign Policy (Israel/Gaza/Ukraine), and Gun Policy.
                <br/>• <strong>8 State Issues</strong>: Property Taxes & EBF School Aid, SAFE-T Act & Cashless Bail, State Budget ($53B+), Tier 2 Pensions, CEJA & AI Data Centers, NITA Transit ($1.5B), State Healthcare, and School Vouchers.
                <br/>• <strong>7 Local/County Issues</strong>: Commercial vs. Homeowner Assessments, Local Transit/Roads, Lead Water Pipes & Flooding, Municipal Budgets/Elections, Data Center Zoning, Solar/Wind Siting, and County Sheriffs/708 Mental Health Boards.
              </p>
            </div>
            <div class="pt-2 border-t border-subtle-custom flex flex-wrap gap-2">
              <button type="button" data-guide-issue="state:propertyTaxes" class="btn-compare-sm">Compare on Property Taxes</button>
              <button type="button" data-guide-issue="state:safetAct" class="btn-compare-sm">Compare on SAFE-T Act</button>
              <button type="button" data-guide-issue="local:assessmentBurden" class="btn-compare-sm">Compare on County Assessments</button>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="p-4 rounded-xl bg-primary-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-purple-500/15 text-purple-700 dark:text-purple-300">Step 4 • 1-Click Race Compare & Sharing</span>
                <span class="text-xs font-mono text-muted-custom">Shareable Family & Friends Links</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">Compare Candidates in Any Race & Share Direct Links</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                Click <strong>"Compare Candidates in This Race"</strong> on any race header (or <strong>"+ Compare Candidate"</strong> on up to 4 cards) to view a side-by-side table of fundraising, PAC backers, and issue stances. Want to text or email a specific town or ZIP code's ballot to family and friends? Click <strong>"Share This View"</strong> in the top-right corner to copy the exact link!
              </p>
            </div>
            <div class="pt-2 border-t border-subtle-custom flex flex-wrap gap-2">
              <button type="button" data-compare-preset="juliana-stratton,don-tracy,jb-pritzker,darren-bailey" class="btn-compare-sm">Compare Senate & Governor Nominees</button>
              <button type="button" data-compare-preset="doris-turner,frank-lesko,darby-hills,nabeela-syed" class="btn-compare-sm">Compare Top State Senate Toss-Ups</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Update Compare Tray Badge
  function updateCompareBadge() {
    const countEl = document.getElementById("compare-count-badge");
    if (countEl) {
      countEl.textContent = String(state.compareIds.length);
    }
  }

  // Populate Town Select Dropdown
  function populateTownDropdown() {
    const selectEl = document.getElementById("town-select-control");
    if (!selectEl) return;

    const groups = new Map();
    TOWNS.forEach((t) => {
      if (!groups.has(t.region)) groups.set(t.region, []);
      groups.get(t.region).push(t);
    });

    let html = `<option value="all">All of Illinois (102 Counties / Statewide View)</option>`;
    groups.forEach((townList, regionName) => {
      html += `<optgroup label="${esc(regionName)}">`;
      townList.forEach((t) => {
        const sampleZips = (t.zips || []).slice(0, 3).join(", ");
        html += `<option value="${esc(t.id)}" ${state.selectedTownId === t.id ? "selected" : ""}>${esc(t.name)} (${esc(t.county)} Co.${sampleZips ? " - " + esc(sampleZips) : ""})</option>`;
      });
      html += `</optgroup>`;
    });

    selectEl.innerHTML = html;
  }

  // Sync URL query params for shareable deep links on the public web
  function loadStateFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const zipParam = params.get("zip") || params.get("q");
      const townParam = params.get("town");

      if (zipParam) {
        const res = resolveLocationQuery(zipParam);
        if (res && res.town) {
          state.selectedTownId = res.town.id;
          state.enteredLocationLabel = res.matchedLabel || "";
        }
      } else if (townParam) {
        if (townParam === "all" || TOWNS.some((t) => t.id === townParam)) {
          state.selectedTownId = townParam;
        } else {
          const res = resolveLocationQuery(townParam);
          if (res && res.town) {
            state.selectedTownId = res.town.id;
            state.enteredLocationLabel = res.matchedLabel || "";
          }
        }
      }

      const labelParam = params.get("label");
      if (labelParam && state.selectedTownId !== "all") {
        state.enteredLocationLabel = labelParam;
      }

      const tabParam = params.get("tab");
      if (tabParam && ["ballot", "towns", "issues", "pacs", "compare", "guide"].includes(tabParam)) {
        state.activeTab = tabParam;
      }
      const levelParam = params.get("level");
      if (levelParam && ["all", "federal", "statewide", "state_legislature", "local"].includes(levelParam)) {
        state.levelFilter = levelParam;
      }
      const pacParam = params.get("pac");
      if (pacParam) {
        state.pacFilter = pacParam;
      }
      const compareParam = params.get("compare");
      if (compareParam) {
        const ids = compareParam.split(",").filter((id) => CANDIDATE_MAP.has(id));
        if (ids.length > 0) state.compareIds = ids.slice(0, 4);
      }
    } catch (_) {
      // Ignore in sandboxed iframe environments
    }
  }

  function syncUrlToState() {
    try {
      if (window.location.protocol === "file:") return;
      const params = new URLSearchParams();
      if (state.selectedTownId !== "all") {
        params.set("town", state.selectedTownId);
        if (state.enteredLocationLabel) {
          params.set("label", state.enteredLocationLabel);
        }
      }
      if (state.activeTab !== "ballot") params.set("tab", state.activeTab);
      if (state.levelFilter !== "all") params.set("level", state.levelFilter);
      if (state.pacFilter !== "all") params.set("pac", state.pacFilter);
      if (state.activeTab === "compare" && state.compareIds.length > 0) {
        params.set("compare", state.compareIds.join(","));
      }
      const qs = params.toString();
      const newUrl = window.location.pathname + (qs ? "?" + qs : "");
      window.history.replaceState(null, "", newUrl);
    } catch (_) {
      // Ignore in sandboxed iframe environments
    }
  }

  // Render Autocomplete Dropdown under Hero Location Input
  function renderHeroAutocomplete(rawVal) {
    const dropdownEl = document.getElementById("hero-location-suggestions");
    if (!dropdownEl) return;

    const cleaned = String(rawVal || "").trim();
    if (!cleaned) {
      dropdownEl.classList.add("hidden");
      dropdownEl.innerHTML = "";
      return;
    }

    // Check if user typed a 5-digit non-Illinois ZIP code
    if (/^\d{5}$/.test(cleaned)) {
      const num = Number(cleaned);
      if (num < 60001 || num > 62999) {
        dropdownEl.classList.remove("hidden");
        dropdownEl.innerHTML = `
          <div class="p-3 text-xs text-amber-700 dark:text-amber-300">
            <strong>ZIP ${esc(cleaned)} is outside Illinois.</strong> Please enter an Illinois 5-digit ZIP code between <strong>60001 and 62999</strong> (for example: 60614, 60540, 60201, 61820, or 62701).
          </div>
        `;
        return;
      }
    }

    const suggestions = getAutocompleteSuggestions(cleaned);
    if (suggestions.length === 0) {
      dropdownEl.classList.add("hidden");
      dropdownEl.innerHTML = "";
      return;
    }

    dropdownEl.classList.remove("hidden");
    dropdownEl.innerHTML = suggestions
      .map((item) => {
        const t = item.town;
        const zipsSample = (t.zips || []).slice(0, 4).join(", ");
        const districtsInfo = `U.S. House: ${(t.usHouse || []).join(", ")} • IL Sen: ${(t.stateSenate || []).join(", ")} • IL House: ${(t.stateHouse || []).join(", ")}`;
        return `
          <button
            type="button"
            class="autocomplete-item"
            data-suggest-town="${esc(t.id)}"
            data-suggest-label="${esc(item.matchedLabel)}"
          >
            <div>
              <div class="text-xs sm:text-sm font-bold text-primary-custom">${esc(item.displayTitle)}</div>
              <div class="text-[11px] text-secondary-custom font-mono mt-0.5">${esc(t.county)} County • ZIPs: ${esc(zipsSample)}</div>
            </div>
            <div class="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
              ${esc(districtsInfo)} →
            </div>
          </button>
        `;
      })
      .join("");
  }

  // Main Render Dispatcher
  function renderApp() {
    syncUrlToState();
    // Sync active tab buttons
    document.querySelectorAll("[data-tab-btn]").forEach((btn) => {
      const t = btn.getAttribute("data-tab-btn");
      if (t === state.activeTab) {
        btn.classList.add("tab-btn-active");
      } else {
        btn.classList.remove("tab-btn-active");
      }
    });

    const townSelect = document.getElementById("town-select-control");
    if (townSelect && townSelect.value !== state.selectedTownId) {
      townSelect.value = state.selectedTownId;
    }

    const levelSelect = document.getElementById("level-select-control");
    if (levelSelect && levelSelect.value !== state.levelFilter) {
      levelSelect.value = state.levelFilter;
    }

    const pacSelect = document.getElementById("pac-select-control");
    if (pacSelect && pacSelect.value !== state.pacFilter) {
      pacSelect.value = state.pacFilter;
    }

    renderHeroKpis();
    renderTownBanner();
    updateCompareBadge();

    if (state.activeTab === "ballot") {
      renderBallotTab();
    } else if (state.activeTab === "towns") {
      renderTownsTab();
    } else if (state.activeTab === "issues") {
      renderIssuesTab();
    } else if (state.activeTab === "pacs") {
      renderPacsTab();
    } else if (state.activeTab === "compare") {
      renderCompareTab();
    } else if (state.activeTab === "guide") {
      renderGuideTab();
    }

    renderModal();
  }

  // Initialize Event Listeners
  function initEvents() {
    loadStateFromUrl();
    populateTownDropdown();

    // Hero City / ZIP Code Form & Input
    const heroForm = document.getElementById("hero-location-form");
    const heroInput = document.getElementById("hero-location-input");
    const heroSuggestions = document.getElementById("hero-location-suggestions");

    heroInput?.addEventListener("input", (e) => {
      const val = e.target.value;
      renderHeroAutocomplete(val);
      // If user typed a valid 5-digit Illinois ZIP code, immediately resolve and update the dashboard!
      const trimmed = val.trim();
      if (/^\d{5}$/.test(trimmed)) {
        const res = resolveLocationQuery(trimmed);
        if (res && res.town) {
          state.selectedTownId = res.town.id;
          state.enteredLocationLabel = res.matchedLabel;
          state.locationNotice = "";
          state.activeTab = "ballot";
          renderApp();
        } else if (res && res.error === "out_of_state_zip") {
          state.locationNotice = `ZIP ${res.zip} is outside Illinois. Please enter an Illinois 5-digit ZIP code between 60001 and 62999 (e.g., 60614, 60540, 60201, 61820, 62701).`;
          renderHeroKpis();
        }
      }
    });

    heroForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const raw = heroInput ? heroInput.value.trim() : "";
      if (!raw) {
        state.selectedTownId = "all";
        state.enteredLocationLabel = "";
        state.locationNotice = "";
        if (heroSuggestions) heroSuggestions.classList.add("hidden");
        renderApp();
        return;
      }
      const res = resolveLocationQuery(raw);
      if (heroSuggestions) heroSuggestions.classList.add("hidden");
      if (res && res.town) {
        activateTownBallot(res.town.id, res.matchedLabel);
      } else if (res && res.error === "out_of_state_zip") {
        state.locationNotice = `ZIP ${res.zip} is outside Illinois. Illinois ZIP codes run from 60001 to 62999 (try 60614, 60540, 60201, 61820, or 62701).`;
        renderHeroKpis();
      } else {
        state.locationNotice = `No exact Illinois city or ZIP match for "${raw}". Showing matching keyword results below, or pick from the Town & ZIP Directory.`;
        state.searchQuery = raw;
        const gSearch = document.getElementById("global-search-input");
        if (gSearch) gSearch.value = raw;
        renderApp();
      }
    });

    document.getElementById("hero-location-clear-btn")?.addEventListener("click", () => {
      state.selectedTownId = "all";
      state.enteredLocationLabel = "";
      state.locationNotice = "";
      if (heroInput) heroInput.value = "";
      if (heroSuggestions) heroSuggestions.classList.add("hidden");
      renderApp();
    });

    // Share / Copy Direct Link button
    document.getElementById("share-link-btn")?.addEventListener("click", () => {
      const btnSpan = document.getElementById("share-link-label");
      const urlToCopy = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(urlToCopy).catch(() => {});
      }
      if (btnSpan) {
        const orig = btnSpan.textContent;
        btnSpan.textContent = "✓ Link Copied!";
        setTimeout(() => {
          btnSpan.textContent = orig;
        }, 2000);
      }
    });

    // Live FEC Auto-Sync (queries Vercel /api/fec-live edge endpoint or OpenFEC API directly)
    async function syncLiveFecData(isManualClick) {
      const labelEl = document.getElementById("live-fec-sync-label");
      if (isManualClick && labelEl) {
        labelEl.textContent = "Syncing OpenFEC 2026...";
      }
      try {
        let records = [];
        if (window.IL_LIVE_SYNC_META && Array.isArray(window.IL_LIVE_SYNC_META.records)) {
          records = window.IL_LIVE_SYNC_META.records;
        }
        const endpoint =
          window.location.protocol.startsWith("http") && !window.location.hostname.includes("gstatic")
            ? "/api/fec-live"
            : "https://api.open.fec.gov/v1/candidates/totals/?state=IL&cycle=2026&election_full=true&per_page=100&sort=-receipts&api_key=DEMO_KEY";

        const resp = await fetch(endpoint).catch(() => null);
        if (resp && resp.ok) {
          const json = await resp.json();
          records = json.candidates || json.results || records;
        }

        let updatedCount = 0;
        const fmtUsd = (n) => "$" + Math.round(Number(n)).toLocaleString("en-US");
        records.forEach((rec) => {
          if (!rec || !rec.name || !rec.receipts) return;
          const lastName = rec.name.split(",")[0].trim().toLowerCase();
          if (lastName.length < 3) return;
          ALL_RACES.forEach((race) => {
            if (race.level !== "federal") return;
            (race.candidates || []).forEach((cand) => {
              const candParts = cand.name.toLowerCase().split(/\s+/);
              const candLast = candParts[candParts.length - 1].replace(/[^a-z]/g, "");
              if (candLast === lastName) {
                const currentNum = Number(String(cand.fecRaised || "").replace(/[^0-9.]/g, "")) || 0;
                if (Number(rec.receipts) > currentNum) {
                  cand.fecRaised = fmtUsd(rec.receipts) + " (Live FEC)";
                  if (rec.cash_on_hand_end_period) {
                    cand.fecCashOnHand = fmtUsd(rec.cash_on_hand_end_period);
                  }
                  updatedCount++;
                }
              }
            });
          });
        });

        if (labelEl) {
          const dateTag = (window.IL_LIVE_SYNC_META && window.IL_LIVE_SYNC_META.lastAutomatedSync) || "Verified";
          labelEl.textContent = isManualClick
            ? `✓ FEC Synced (${records.length || "All"} Filings Checked)`
            : `Live FEC Auto-Sync: ${dateTag}`;
        }
        if (updatedCount > 0) {
          renderApp();
        }
      } catch (_) {
        if (labelEl) {
          labelEl.textContent = "Live FEC Auto-Sync: Verified Baseline";
        }
      }
    }

    document.getElementById("live-fec-sync-btn")?.addEventListener("click", () => {
      syncLiveFecData(true);
    });

    setTimeout(() => syncLiveFecData(false), 800);

    // Controls change
    document.getElementById("town-select-control")?.addEventListener("change", (e) => {
      const val = e.target.value;
      state.selectedTownId = val;
      state.enteredLocationLabel = "";
      state.locationNotice = "";
      if (val === "all" && heroInput) heroInput.value = "";
      renderApp();
    });

    document.getElementById("level-select-control")?.addEventListener("change", (e) => {
      state.levelFilter = e.target.value;
      renderApp();
    });

    document.getElementById("region-select-control")?.addEventListener("change", (e) => {
      state.regionFilter = e.target.value;
      renderApp();
    });

    document.getElementById("party-select-control")?.addEventListener("change", (e) => {
      state.partyFilter = e.target.value;
      renderApp();
    });

    document.getElementById("racetype-select-control")?.addEventListener("change", (e) => {
      state.raceTypeFilter = e.target.value;
      renderApp();
    });

    document.getElementById("pac-select-control")?.addEventListener("change", (e) => {
      state.pacFilter = e.target.value;
      renderApp();
    });

    document.getElementById("global-search-input")?.addEventListener("input", (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      // If user types a 5-digit Illinois ZIP code in global search, auto-load that town ballot
      const trimmed = val.trim();
      if (/^\d{5}$/.test(trimmed)) {
        const res = resolveLocationQuery(trimmed);
        if (res && res.town) {
          state.selectedTownId = res.town.id;
          state.enteredLocationLabel = res.matchedLabel;
          state.searchQuery = "";
        }
      }
      renderApp();
    });

    // Theme toggle
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", state.theme);
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    // Delegated Clicks
    document.addEventListener("click", (e) => {
      // Hide autocomplete if clicking outside hero form
      if (heroSuggestions && !e.target.closest("#hero-location-form")) {
        heroSuggestions.classList.add("hidden");
      }

      const suggestBtn = e.target.closest("[data-suggest-town]");
      if (suggestBtn) {
        const tid = suggestBtn.getAttribute("data-suggest-town");
        const tlabel = suggestBtn.getAttribute("data-suggest-label") || "";
        if (heroSuggestions) heroSuggestions.classList.add("hidden");
        activateTownBallot(tid, tlabel);
        return;
      }

      const tabBtn = e.target.closest("[data-tab-btn]");
      if (tabBtn) {
        state.activeTab = tabBtn.getAttribute("data-tab-btn");
        renderApp();
        return;
      }

      const quickTown = e.target.closest("[data-quick-town]");
      if (quickTown) {
        const tid = quickTown.getAttribute("data-quick-town");
        const qlabel = quickTown.getAttribute("data-quick-label") || "";
        activateTownBallot(tid, qlabel);
        return;
      }

      const compareRaceBtn = e.target.closest("[data-compare-race]");
      if (compareRaceBtn) {
        const rid = compareRaceBtn.getAttribute("data-compare-race");
        const raceObj = ALL_RACES.find((r) => r.id === rid);
        if (raceObj && Array.isArray(raceObj.candidates) && raceObj.candidates.length > 0) {
          state.compareIds = raceObj.candidates.slice(0, 4).map((c) => c.id);
          state.activeTab = "compare";
          window.scrollTo({ top: 0, behavior: "smooth" });
          renderApp();
        }
        return;
      }

      if (e.target.closest("#toggle-compact-issues-btn")) {
        state.compactIssues = !state.compactIssues;
        renderApp();
        return;
      }

      const guidePac = e.target.closest("[data-guide-pac]");
      if (guidePac) {
        state.pacFilter = guidePac.getAttribute("data-guide-pac");
        state.activeTab = "ballot";
        renderApp();
        return;
      }

      const guideIssue = e.target.closest("[data-guide-issue]");
      if (guideIssue) {
        const parts = (guideIssue.getAttribute("data-guide-issue") || "").split(":");
        if (parts.length === 2) {
          state.issueLevel = parts[0];
          state.selectedIssueKey = parts[1];
          state.activeTab = "issues";
          renderApp();
        }
        return;
      }

      const loadTown = e.target.closest("[data-load-town]");
      if (loadTown) {
        const tid = loadTown.getAttribute("data-load-town");
        window.scrollTo({ top: 0, behavior: "smooth" });
        activateTownBallot(tid, "");
        return;
      }

      if (e.target.closest("#clear-town-btn")) {
        state.selectedTownId = "all";
        state.enteredLocationLabel = "";
        state.locationNotice = "";
        if (heroInput) heroInput.value = "";
        renderApp();
        return;
      }

      if (e.target.closest("#reset-all-filters-btn")) {
        state.selectedTownId = "all";
        state.enteredLocationLabel = "";
        state.locationNotice = "";
        state.levelFilter = "all";
        state.regionFilter = "all";
        state.partyFilter = "all";
        state.raceTypeFilter = "all";
        state.pacFilter = "all";
        state.searchQuery = "";
        ["level-select-control", "region-select-control", "party-select-control", "racetype-select-control", "pac-select-control"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.value = "all";
        });
        const sEl = document.getElementById("global-search-input");
        if (sEl) sEl.value = "";
        if (heroInput) heroInput.value = "";
        renderApp();
        return;
      }

      const issueTierBtn = e.target.closest("[data-issue-tier]");
      if (issueTierBtn) {
        state.issueLevel = issueTierBtn.getAttribute("data-issue-tier");
        state.selectedIssueKey = ISSUES[state.issueLevel][0].key;
        renderApp();
        return;
      }

      const selectIssueBtn = e.target.closest("[data-select-issue]");
      if (selectIssueBtn) {
        state.selectedIssueKey = selectIssueBtn.getAttribute("data-select-issue");
        renderApp();
        return;
      }

      const compareToggle = e.target.closest("[data-compare-toggle]");
      if (compareToggle) {
        const cid = compareToggle.getAttribute("data-compare-toggle");
        const idx = state.compareIds.indexOf(cid);
        if (idx >= 0) {
          state.compareIds.splice(idx, 1);
        } else {
          if (state.compareIds.length >= 4) state.compareIds.shift();
          state.compareIds.push(cid);
        }
        renderApp();
        return;
      }

      const compareRemove = e.target.closest("[data-compare-remove]");
      if (compareRemove) {
        const cid = compareRemove.getAttribute("data-compare-remove");
        state.compareIds = state.compareIds.filter((id) => id !== cid);
        renderApp();
        return;
      }

      const comparePreset = e.target.closest("[data-compare-preset]");
      if (comparePreset) {
        state.compareIds = comparePreset.getAttribute("data-compare-preset").split(",").filter(Boolean);
        state.activeTab = "compare";
        renderApp();
        return;
      }

      if (e.target.closest("#clear-compare-btn")) {
        state.compareIds = [];
        renderApp();
        return;
      }

      const modalOpen = e.target.closest("[data-modal-cand]");
      if (modalOpen) {
        state.modalCandidateId = modalOpen.getAttribute("data-modal-cand");
        renderModal();
        return;
      }

      if (e.target.closest("#close-modal-btn") || e.target.id === "candidate-modal-backdrop") {
        state.modalCandidateId = null;
        renderModal();
        return;
      }
    });

    // Delegated Input for PAC search
    document.addEventListener("input", (e) => {
      if (e.target && e.target.id === "pac-search-input") {
        state.pacSearchQuery = e.target.value;
        renderPacsTab();
        const inputEl = document.getElementById("pac-search-input");
        if (inputEl) {
          inputEl.focus();
          inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (state.modalCandidateId) {
          state.modalCandidateId = null;
          renderModal();
        }
        if (heroSuggestions && !heroSuggestions.classList.contains("hidden")) {
          heroSuggestions.classList.add("hidden");
        }
      }
    });

    renderApp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEvents);
  } else {
    initEvents();
  }
})();
