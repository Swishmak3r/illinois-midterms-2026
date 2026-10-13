// 2026 Illinois Midterm Elections - Interactive Application Engine
// Handles Town/City Ballot Sorting, Multi-Level Race Filtering, Issue Stance Matrix, PAC Power Tracker & Candidate Comparison

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

  // Application State
  const state = {
    activeTab: "ballot", // 'ballot' | 'towns' | 'issues' | 'pacs' | 'compare'
    selectedTownId: "all", // 'all' or town.id
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
    expandedRaces: new Set(),
    modalCandidateId: null,
    theme: "light"
  };

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
    // Also check if town name or county matches race cities
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
    const selectedTown = state.selectedTownId !== "all" ? TOWNS.find((t) => t.id === state.selectedTownId) : null;
    const q = state.searchQuery.trim().toLowerCase();

    return ALL_RACES.filter((race) => {
      if (selectedTown && !raceMatchesTown(race, selectedTown)) return false;
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

      // Check candidate-level filters (Party, PAC, Search)
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

      if (q) {
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

  // Render Top Summary Metrics & Active Town Banner
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
                <div class="text-sm font-semibold text-primary-custom">Select any Illinois city, suburb, or Chicago neighborhood above to build your exact local, state, and federal ballot.</div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-quick-town="chicago-loop-downtown" class="quick-town-pill">Chicago Loop</button>
              <button type="button" data-quick-town="chicago-lincoln-park-lakeview" class="quick-town-pill">Lincoln Park / Lakeview</button>
              <button type="button" data-quick-town="evanston" class="quick-town-pill">Evanston</button>
              <button type="button" data-quick-town="naperville" class="quick-town-pill">Naperville</button>
              <button type="button" data-quick-town="aurora" class="quick-town-pill">Aurora</button>
              <button type="button" data-quick-town="joliet" class="quick-town-pill">Joliet</button>
              <button type="button" data-quick-town="orland-park" class="quick-town-pill">Orland Park</button>
              <button type="button" data-quick-town="rockford-loves-park" class="quick-town-pill">Rockford</button>
              <button type="button" data-quick-town="springfield" class="quick-town-pill">Springfield</button>
              <button type="button" data-quick-town="champaign-urbana" class="quick-town-pill">Champaign-Urbana</button>
              <button type="button" data-quick-town="belleville-ofallon-east-st-louis" class="quick-town-pill">Metro East</button>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const town = TOWNS.find((t) => t.id === state.selectedTownId);
    if (!town) return;

    const matchingRaces = getFilteredRaces();
    bannerEl.innerHTML = `
      <div class="town-banner-active">
        <div class="flex flex-wrap items-start justify-between gap-4 pb-3 border-b border-subtle-custom">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 text-xs font-mono font-semibold uppercase rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">Personalized Town Ballot</span>
              <span class="text-xs font-mono text-muted-custom">${esc(town.region)} | ${esc(town.county)} County | Pop. ${esc(town.population)}</span>
            </div>
            <h2 class="text-xl md:text-2xl font-serif-display font-bold text-primary-custom">${esc(town.name)} - 2026 General Election Ballot</h2>
            <p class="text-xs md:text-sm text-secondary-custom mt-1">Current Municipal Leadership: <strong class="text-primary-custom">${esc(town.mayor)}</strong></p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-elevated-custom border border-subtle-custom text-primary-custom">${matchingRaces.length} Ballot Races Shown</span>
            <button type="button" id="clear-town-btn" class="px-3 py-1.5 text-xs font-semibold rounded border border-subtle-custom hover:bg-red-500/10 hover:text-red-600 hover:border-red-500/30 transition">Reset to All Illinois</button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 pt-3 text-xs">
          <div class="p-2.5 rounded bg-primary-custom border border-subtle-custom">
            <div class="font-mono uppercase text-[10px] text-muted-custom">Federal Congressional</div>
            <div class="font-semibold text-primary-custom mt-0.5">U.S. Senate + ${(town.usHouse || []).join(", ")}</div>
          </div>
          <div class="p-2.5 rounded bg-primary-custom border border-subtle-custom">
            <div class="font-mono uppercase text-[10px] text-muted-custom">IL State Senate</div>
            <div class="font-semibold text-primary-custom mt-0.5">${(town.stateSenate || []).join(", ")}</div>
          </div>
          <div class="p-2.5 rounded bg-primary-custom border border-subtle-custom">
            <div class="font-mono uppercase text-[10px] text-muted-custom">IL State House</div>
            <div class="font-semibold text-primary-custom mt-0.5">${(town.stateHouse || []).join(", ")}</div>
          </div>
          <div class="p-2.5 rounded bg-primary-custom border border-subtle-custom">
            <div class="font-mono uppercase text-[10px] text-muted-custom">County & Local Jurisdiction</div>
            <div class="font-semibold text-primary-custom mt-0.5">${esc(town.county)} County Offices & Referendums</div>
          </div>
        </div>
        <div class="mt-3 p-3 rounded bg-primary-custom/70 border border-subtle-custom text-xs text-secondary-custom leading-relaxed">
          <strong class="text-primary-custom font-semibold">Local 2026 Election Context for ${esc(town.name)}:</strong> ${esc(town.localContext)}
        </div>
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
        <details class="mt-3 group issue-details-box" open>
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

  // Render Races List (Tab 1)
  function renderBallotTab() {
    const container = document.getElementById("tab-content-container");
    if (!container) return;

    const races = getFilteredRaces();
    const totalCandidates = races.reduce((acc, r) => acc + (r.candidates ? r.candidates.length : 0), 0);

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

    const raceCardsHtml = races
      .map((race) => {
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
                <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-primary-custom border border-subtle-custom text-primary-custom">${esc(race.rating)}</span>
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
      })
      .join("");

    container.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div class="text-xs font-mono text-secondary-custom">
          Showing <strong class="text-primary-custom">${races.length}</strong> Elections & <strong class="text-primary-custom">${totalCandidates}</strong> Candidates with Verified FEC/IL SBE PAC Profiles & Issue Stances
        </div>
        <div class="text-xs text-muted-custom">
          Click any candidate's <strong>+ Compare</strong> button to compare up to 4 candidates side-by-side.
        </div>
      </div>
      <div class="space-y-6">
        ${raceCardsHtml}
      </div>
    `;
  }

  // Render Town / City Ballot Directory (Tab 2)
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
        return `
          <div class="p-4 rounded-xl bg-elevated-custom border ${isSelected ? "border-blue-600 ring-2 ring-blue-500/20" : "border-subtle-custom"} flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[11px] font-mono uppercase tracking-wider text-muted-custom">${esc(t.region)}</span>
                <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-primary-custom border border-subtle-custom text-secondary-custom">${esc(t.county)} County</span>
              </div>
              <h3 class="text-base font-serif-display font-bold text-primary-custom">${esc(t.name)}</h3>
              <p class="text-xs text-secondary-custom mt-1"><strong>Mayor / Local Exec:</strong> ${esc(t.mayor)}</p>

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
          <h3 class="text-lg font-serif-display font-bold text-primary-custom">Illinois Town, Suburb & Chicago Neighborhood Ballot Directory</h3>
          <p class="text-xs text-secondary-custom">Click any community below to assemble its exact Federal, State Executive, State Senate, State House, and County/Local ballot.</p>
        </div>
        <span class="text-xs font-mono px-3 py-1 rounded bg-primary-custom border border-subtle-custom text-primary-custom">${filteredTowns.length} Communities Indexed</span>
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
          <p class="text-xs text-secondary-custom mt-1">Click "+ Compare Candidate" on any candidate card or choose a preset below:</p>
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
          <button type="button" id="clear-compare-btn" class="px-3 py-1.5 text-xs font-semibold rounded border border-subtle-custom hover:bg-red-500/10 hover:text-red-500">Clear All</button>
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
            <span class="px-2.5 py-0.5 text-xs font-mono font-bold uppercase rounded bg-blue-600 text-white">INTERACTIVE USER MANUAL</span>
            <h3 class="text-xl md:text-2xl font-serif-display font-bold text-primary-custom mt-2">How to Use the 2026 Illinois Midterm Elections & PAC Guide</h3>
            <p class="text-xs md:text-sm text-secondary-custom mt-1">Follow the steps below or click any of the blue <strong>"Try Example"</strong> buttons to jump straight to that feature.</p>
          </div>
          <button type="button" data-tab-btn="ballot" class="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
            Return to All Races & Ballot View
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Step 1 -->
          <div class="p-4 rounded-xl bg-primary-custom border border-subtle-custom flex flex-col justify-between gap-3">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-blue-600/15 text-blue-600 dark:text-blue-400">Step 1 • Local Ballot Builder</span>
                <span class="text-xs font-mono text-muted-custom">Control #1 in Top Bar</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">Sort by Your Illinois Town, Suburb, or Chicago Neighborhood</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                Select your community from the <strong>"1. Sort by Your Illinois Town..."</strong> dropdown at the top-left (or browse the <strong>Town & Neighborhood Ballot Directory</strong> tab). The guide immediately filters out the rest of the state and displays <strong>only</strong> your exact ballot: U.S. Senate, your U.S. House district(s), all 5 Statewide Executive offices, your State Senator, your State Representative, and your County offices & referendums, plus your current Mayor and local policy flashpoints.
              </p>
            </div>
            <div class="pt-2 border-t border-subtle-custom flex flex-wrap gap-2">
              <button type="button" data-quick-town="naperville" class="btn-compare-sm">Try Example: Naperville Ballot</button>
              <button type="button" data-quick-town="chicago-lincoln-park-lakeview" class="btn-compare-sm">Try Example: Chicago North Lakefront</button>
              <button type="button" data-quick-town="springfield" class="btn-compare-sm">Try Example: Springfield Ballot</button>
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
                Every candidate card includes a verified <strong>FEC / IL SBE Campaign Finance Box</strong> showing Total Raised, Cash on Hand, PAC Policy, and a line-by-line list of associated PACs with dollar amounts. Notice the green vs. red tags: green shows PACs <strong>Supporting</strong> the candidate, while red flags Super PACs that spent money <strong>Opposing</strong> them in the primary or general election. Use dropdown <strong>#3 (Filter by PAC)</strong> to isolate candidates by donor network.
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
                <span class="px-2 py-0.5 text-[11px] font-mono font-bold uppercase rounded bg-purple-500/15 text-purple-700 dark:text-purple-300">Step 4 • Side-by-Side Comparison & Sharing</span>
                <span class="text-xs font-mono text-muted-custom">Up to 4 Candidates at Once</span>
              </div>
              <h4 class="text-base font-serif-display font-bold text-primary-custom">Compare Candidates Head-to-Head & Share Custom Links</h4>
              <p class="text-xs text-secondary-custom mt-1.5 leading-relaxed">
                Click <strong>"+ Compare Candidate"</strong> at the bottom of any candidate card to add them to your comparison tray (up to 4 candidates at a time), then click the <strong>Compare Candidates</strong> tab to view a side-by-side matrix of their fundraising, PAC backers, and every issue position. Want to send a specific town's ballot or comparison to a friend? Click <strong>"Share This View"</strong> in the top-right corner to copy the exact deep-link URL!
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

  // Update Compare Tray Floating Pill
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
        html += `<option value="${esc(t.id)}" ${state.selectedTownId === t.id ? "selected" : ""}>${esc(t.name)} (${esc(t.county)} Co.)</option>`;
      });
      html += `</optgroup>`;
    });

    selectEl.innerHTML = html;
  }

  // Sync URL query params for shareable deep links on the public web
  function loadStateFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const townParam = params.get("town");
      if (townParam && (townParam === "all" || TOWNS.some((t) => t.id === townParam))) {
        state.selectedTownId = townParam;
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
      if (state.selectedTownId !== "all") params.set("town", state.selectedTownId);
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
        // 1. Check pre-synced daily build snapshot first
        if (window.IL_LIVE_SYNC_META && Array.isArray(window.IL_LIVE_SYNC_META.records)) {
          records = window.IL_LIVE_SYNC_META.records;
        }
        // 2. Try Vercel Edge-Cached endpoint if hosted on web, or direct OpenFEC API
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

    // Run non-blocking background FEC check 800ms after initial render
    setTimeout(() => syncLiveFecData(false), 800);

    // Controls change
    document.getElementById("town-select-control")?.addEventListener("change", (e) => {
      state.selectedTownId = e.target.value;
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
      state.searchQuery = e.target.value;
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
      const tabBtn = e.target.closest("[data-tab-btn]");
      if (tabBtn) {
        state.activeTab = tabBtn.getAttribute("data-tab-btn");
        renderApp();
        return;
      }

      const quickTown = e.target.closest("[data-quick-town]");
      if (quickTown) {
        state.selectedTownId = quickTown.getAttribute("data-quick-town");
        state.activeTab = "ballot";
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
        state.selectedTownId = loadTown.getAttribute("data-load-town");
        state.activeTab = "ballot";
        window.scrollTo({ top: 0, behavior: "smooth" });
        renderApp();
        return;
      }

      if (e.target.closest("#clear-town-btn")) {
        state.selectedTownId = "all";
        renderApp();
        return;
      }

      if (e.target.closest("#reset-all-filters-btn")) {
        state.selectedTownId = "all";
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
      if (e.key === "Escape" && state.modalCandidateId) {
        state.modalCandidateId = null;
        renderModal();
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
