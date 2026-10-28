// Illinois 2026: area-aware election research. Not a certified ballot.
(function () {
  'use strict';
  const ALL_RACES = [...(window.IL_FEDERAL_RACES || []), ...(window.IL_STATEWIDE_RACES || []), ...(window.IL_LEGISLATURE_RACES || []), ...(window.IL_LOCAL_RACES || [])];
  const TOWNS = window.IL_TOWNS_DIRECTORY || [];
  const PACS = window.IL_PACS_DIRECTORY || [];
  const ISSUES = window.IL_ISSUE_DEFINITIONS || { federal: [], state: [], local: [] };
  const CANDIDATES = new Map();
  const TABS = ['ballot', 'towns', 'issues', 'pacs', 'compare', 'guide'];
  const LEVELS = ['federal', 'statewide', 'state_legislature', 'local'];
  const LEVEL_LABELS = { federal: 'Federal races', statewide: 'Statewide offices', state_legislature: 'State legislature', local: 'County & local research' };
  const ADDRESS_URL = 'https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx';
  const AUTHORITY_URL = 'https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx';
  const CHICAGO_URL = 'https://chicagoelections.gov/voting/your-voter-information';
  const SOURCE_NOTE = 'Candidate positions, endorsements and PAC relationships are curated research summaries. They are not independently verified here. Check original sources and your official sample ballot before relying on them.';
  const ISSUE_ALIASES = { climate: 'energy', taxesSalt: 'taxes', reproductiveRights: 'reproductive', gunSafety: 'guns' };
  const CONTROL_KEYS = { 'level-select-control': 'levelFilter', 'region-select-control': 'regionFilter', 'party-select-control': 'partyFilter', 'racetype-select-control': 'raceTypeFilter', 'pac-select-control': 'pacFilter' };
  const FILTER_DEFAULTS = { levelFilter: 'all', regionFilter: 'all', partyFilter: 'all', raceTypeFilter: 'all', pacFilter: 'all', searchQuery: '' };
  const state = { ...FILTER_DEFAULTS, activeTab: 'ballot', locationResult: null, locationNotice: '', issueLevel: 'federal', selectedIssueKey: 'economy', pacSearchQuery: '', pacCategoryFilter: 'all', compareIds: [], compactIssues: true, modalCandidateId: null, theme: 'light' };
  let suggestions = [], activeSuggestion = -1, modalReturnFocus = null, modalBackground = [], priorBodyOverflow = '', lastUrl = '', searchTimer, statusTimer;
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const normalize = (value) => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const textList = (items) => (Array.isArray(items) ? items : []).filter(Boolean).join(', ');
  const reduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const externalLink = (url, label, cls = 'btn-text') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens a new tab)</span></a>`;
  const issueTier = (race) => race.level === 'federal' ? 'federal' : race.level === 'local' ? 'local' : 'state';
  const getTown = () => state.locationResult && state.locationResult.town;
  const isStatewideRace = (race) => race.level === 'statewide' || race.districtCode === 'IL-SEN';
  const isOverview = (race) => race.level === 'local' && /overview|referendum|retention|slate|sheriff.*clerk|county.*&/i.test(race.office || '');
  const locationLabel = () => state.locationResult ? state.locationResult.matchedLabel || (getTown() && getTown().name) || 'Illinois' : 'All Illinois';
  const money = (value) => Number.isFinite(Number(value)) && value !== null && value !== '' ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value)) : 'Not available';
  function storageGet(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
  function storageSet(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* Private browsing can disable storage. */ } }
  function announce(message) {
    let status = $('app-status');
    if (!status) { status = document.createElement('div'); status.id = 'app-status'; status.className = 'sr-only'; status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); document.body.appendChild(status); }
    status.textContent = ''; clearTimeout(statusTimer); statusTimer = setTimeout(() => { status.textContent = message; }, 40);
  }
  ALL_RACES.forEach((race) => (race.candidates || []).forEach((candidate) => CANDIDATES.set(candidate.id, { ...candidate, race, finance: null })));
  function partyMeta(party) {
    const p = String(party || '').toLowerCase();
    if (p.includes('democrat')) return { key: 'dem', className: 'party-badge-dem', label: party };
    if (p.includes('republican') || p.includes('gop')) return { key: 'gop', className: 'party-badge-gop', label: party };
    return { key: 'ind', className: 'party-badge-ind', label: party || 'Not listed' };
  }
  function fecName(name) { const parts = String(name || '').split(','); return normalize(parts.length > 1 ? `${parts.slice(1).join(' ')} ${parts[0]}` : name); }
  function applyFinanceSnapshot() {
    const records = (window.IL_LIVE_SYNC_META || {}).records || [];
    CANDIDATES.forEach((candidate) => {
      if (candidate.race.level !== 'federal') return;
      const office = candidate.race.districtCode === 'IL-SEN' ? 'S' : 'H';
      const district = office === 'H' ? Number(String(candidate.race.districtCode).replace(/\D/g, '')) : null;
      const party = partyMeta(candidate.party).key === 'dem' ? 'DEM' : partyMeta(candidate.party).key === 'gop' ? 'REP' : /independent/i.test(candidate.party || '') ? 'IND' : /libertarian/i.test(candidate.party || '') ? 'LIB' : /green/i.test(candidate.party || '') ? 'GRE' : null;
      if (!party) return;
      const matches = records.filter((record) => record && record.office === office && /^[HSP]\d[A-Z]{2}\d{5}$/.test(record.candidate_id || '') && (office !== 'H' || Number(record.district) === district) && (!party || record.party === party) && (candidate.fecId ? candidate.fecId === record.candidate_id : fecName(record.name) === normalize(candidate.name)));
      // Full identity + office + district + party. Never infer matches from a surname.
      if (matches.length !== 1) return;
      const record = matches[0];
      if (!Number.isFinite(Number(record.receipts)) || record.receipts === null || record.receipts === '' || Number(record.receipts) < 0) return;
      candidate.finance = { ...record };
    });
  }
  function resolveLocationQuery(query) {
    return window.IL_LOCATION && typeof window.IL_LOCATION.resolve === 'function' ? window.IL_LOCATION.resolve(query) : { error: 'lookup_unavailable', message: 'The location directory could not load. Browse statewide races or use the official address lookup.' };
  }
  window.IL_RESOLVE_LOCATION = resolveLocationQuery;
  function issueText(candidate, key) { const positions = candidate.issues || {}; return positions[key] || positions[ISSUE_ALIASES[key]] || 'No position is recorded in this research snapshot.'; }
  function raceMatchesTown(race, town) {
    if (isStatewideRace(race)) return true;
    if (!town) return false;
    if (race.level === 'federal') return (town.usHouse || []).includes(race.districtCode);
    if (race.level === 'state_legislature') return [...(town.stateSenate || []), ...(town.stateHouse || [])].includes(race.districtCode);
    if (race.level === 'local') return (town.localRaces || []).includes(race.id);
    return false;
  }
  function candidateMatchesPac(candidate) {
    if (state.pacFilter === 'all') return true;
    const blob = normalize([candidate.pacPolicy, candidate.pacSummary, ...(candidate.pacs || []).map((p) => `${p.name} ${p.type}`)].join(' '));
    const terms = { 'no-corp': ['rejects corporate', 'no corporate', '100 small'], fairshake: ['fairshake', 'protect progress', 'crypto'], aipac: ['aipac', 'united democracy', 'elect chicago women', 'affordable chicago'], jstreet: ['j street', 'justice democrats', 'working families', 'progressive caucus'], local150: ['local 150', 'operating engineers'], teachers: ['iea', 'ipace', 'ift', 'ctu', 'teachers'], 'seiu-afl': ['seiu', 'afl cio', 'federation of labor', 'afscme', 'liuna'], itla: ['itla', 'trial lawyers'], realtors: ['realtors', 'rpac', 'nboa'], business: ['manufacturers', 'ima', 'chamber', 'nfib', 'farm bureau'], 'fop-isra': ['fraternal order of police', 'fop', 'rifle', 'isra', 'right to life'] };
    return (terms[state.pacFilter] || []).some((term) => (` ${blob} `).includes(` ${term} `));
  }
  function candidateMatchesFilters(candidate) { return (state.partyFilter === 'all' || partyMeta(candidate.party).key === state.partyFilter) && candidateMatchesPac(candidate); }
  function raceMatchesRegion(race) {
    if (state.regionFilter === 'all' || isStatewideRace(race)) return true;
    const blob = normalize([race.region, ...(race.counties || [])].join(' '));
    const regions = { chicago: ['chicago'], suburban_cook: ['cook'], collar: ['collar', 'dupage', 'lake', 'will', 'kane', 'mchenry'], northern: ['northern', 'northwest', 'winnebago', 'dekalb', 'lasalle'], central: ['central', 'western', 'sangamon', 'champaign', 'peoria', 'mclean', 'rock island'], southern: ['metro east', 'southern', 'madison', 'st clair', 'jackson'] };
    return (regions[state.regionFilter] || []).some((region) => (` ${blob} `).includes(` ${region} `));
  }
  function getFilteredRaces() {
    const town = getTown(), q = normalize(state.searchQuery);
    return ALL_RACES.filter((race) => {
      if (state.locationResult && !raceMatchesTown(race, town)) return false;
      if (state.locationNotice && !isStatewideRace(race)) return false;
      if (state.levelFilter !== 'all' && race.level !== state.levelFilter) return false;
      if (!raceMatchesRegion(race)) return false;
      if (state.raceTypeFilter === 'open' && !race.isOpenSeat) return false;
      if (state.raceTypeFilter === 'battleground' && !race.isBattleground) return false;
      const candidates = (race.candidates || []).map((c) => CANDIDATES.get(c.id)).filter(Boolean).filter(candidateMatchesFilters);
      if (!candidates.length && (race.candidates || []).length) return false;
      if (q) {
        const blob = normalize([race.office, race.districtCode, race.districtName, race.region, ...(race.cities || []), ...(race.counties || []), ...candidates.map((c) => [c.name, c.party, c.role, c.hometown, c.pacPolicy, c.pacSummary, ...(c.pacs || []).map((p) => p.name), ...Object.values(c.issues || {})].join(' '))].join(' '));
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }
  function applyLocation(result, render = true) {
    clearTimeout(searchTimer);
    if (!result || result.error) { state.locationResult = null; state.locationNotice = result && result.message ? result.message : 'We could not find that place. Enter a five-digit Illinois ZIP or choose a community from the suggestions.'; }
    else { state.locationResult = result; state.locationNotice = ''; }
    Object.assign(state, FILTER_DEFAULTS); state.activeTab = 'ballot'; closeSuggestions();
    if (render) { renderApp('push'); if (result && result.error && Array.isArray(result.suggestions) && result.suggestions.length) renderSuggestions($('hero-location-input')?.value, result.suggestions); announce(state.locationNotice || `Showing research for ${locationLabel()}. Confirm exact districts by address.`); }
  }
  function selectTown(id) { if (id === 'all') clearLocation(); else applyLocation(resolveLocationQuery(id)); }
  function clearLocation() { clearTimeout(searchTimer); state.locationResult = null; state.locationNotice = ''; Object.assign(state, FILTER_DEFAULTS); if ($('hero-location-input')) $('hero-location-input').value = ''; closeSuggestions(); renderApp('push'); announce('Showing all Illinois research entries.'); }
  function summaryKpis() {
    const kpi = $('hero-kpi-container'), races = getFilteredRaces();
    if (kpi && state.activeTab === 'towns') kpi.innerHTML = `<div class="hero-stat"><span class="hero-stat-label">In this view</span><strong>${getFilteredTowns().length}</strong><span>curated community guides</span></div><div class="hero-stat"><span class="hero-stat-label">ZIP directory</span><strong>${Number(window.IL_LOCATION?.zipCount || 0).toLocaleString()}</strong><span>Illinois postal codes</span></div>`;
    else if (kpi) kpi.innerHTML = `<div class="hero-stat"><span class="hero-stat-label">In this view</span><strong>${races.length}</strong><span>races & area overviews</span></div><div class="hero-stat"><span class="hero-stat-label">Research entries</span><strong>${races.reduce((n,r) => n + (r.candidates || []).filter(candidateMatchesFilters).length, 0)}</strong><span>candidates & local slates</span></div>`;
    if ($('hero-location-status-badge')) $('hero-location-status-badge').textContent = state.locationResult ? locationLabel() : 'Illinois ZIP & community lookup';
    if ($('ballot-tab-btn-label')) $('ballot-tab-btn-label').textContent = 'Races & candidates';
    if ($('hero-location-clear-btn')) $('hero-location-clear-btn').classList.toggle('hidden', !state.locationResult && !state.locationNotice);
    const input = $('hero-location-input');
    if (input && document.activeElement !== input) input.value = state.locationResult ? state.locationResult.matchedZip || locationLabel() : state.locationNotice ? input.value : '';
    if (input) input.setAttribute('aria-invalid', state.locationNotice ? 'true' : 'false');
    const feedback = $('hero-location-feedback');
    if (feedback) { feedback.classList.toggle('hidden', !state.locationNotice); feedback.textContent = state.locationNotice; feedback.setAttribute('role', 'status'); }
  }
  function renderAreaSummary() {
    const banner = $('active-town-banner'); if (!banner) return;
    if (!state.locationResult) { banner.innerHTML = `<div class="area-summary area-summary-default"><div><p class="eyebrow">Explore the research</p><h2 class="area-summary-heading">${state.locationNotice ? 'Start with statewide races.' : 'Illinois, at a glance.'}</h2><p class="area-meta">${state.locationNotice ? 'We could not confirm that location. Showing statewide contests while you choose a location or confirm your districts by address.' : 'Browse federal, statewide and selected local races. Enter a ZIP above to narrow your starting point.'}</p></div><button class="btn-secondary" type="button" data-tab-btn="towns">Browse communities ↗</button></div>`; return; }
    const result = state.locationResult, town = getTown();
    const county = town ? town.county : textList(result.location && result.location.counties);
    const note = result.coverageNote || 'ZIP codes and communities can cross district boundaries. These are area research matches, not your official ballot.';
    const districts = town ? [...(town.usHouse || []), ...(town.stateSenate || []), ...(town.stateHouse || [])] : [];
    banner.innerHTML = `<div class="area-summary"><div class="area-summary-top"><div><p class="eyebrow">Your research area</p><h2 class="area-summary-heading">${esc(locationLabel())}</h2><p class="area-meta">${esc(county ? `${county} County` : 'Illinois')}${town && town.region ? ` · ${esc(town.region)}` : ''}</p></div><button id="clear-town-btn" class="btn-text" type="button">Clear location ×</button></div><div class="coverage-note"><span class="coverage-icon" aria-hidden="true">i</span><p>${esc(note)}${!town ? ' Showing statewide races until you confirm your districts.' : ''}</p></div>${districts.length ? `<details class="area-districts"><summary>Districts included in this area's research</summary><p>${esc(districts.join(' · '))}</p><p class="source-note">An area may include several districts. Use your home address to find the one that applies to you.</p></details>` : ''}<div class="area-links">${externalLink(ADDRESS_URL, 'Confirm your districts')}${externalLink(AUTHORITY_URL, 'Find your election office')}</div></div>`;
  }
  function filterSummary(communityOnly = false) {
    const labels = [];
    Object.entries(CONTROL_KEYS).forEach(([id,key]) => { if (communityOnly || state[key] === 'all') return; const el = $(id), opt = el && [...el.options].find((o) => o.value === state[key]); labels.push(`<button class="filter-chip" data-remove-filter="${key}" type="button">${esc(opt ? opt.textContent : state[key])} <span aria-label="Remove filter">×</span></button>`); });
    if (state.searchQuery) labels.push(`<button class="filter-chip" data-remove-filter="searchQuery" type="button">“${esc(state.searchQuery)}” <span aria-label="Remove search">×</span></button>`);
    return labels.length ? `<div class="filter-summary">${labels.join('')}<button class="btn-text" id="reset-all-filters-btn" type="button">Clear filters</button></div>` : '';
  }
  function emptyState(title, detail, action = 'Reset filters', attributes = 'id="reset-all-filters-btn"') { return `<div class="empty-state"><div class="empty-state-mark" aria-hidden="true">↗</div><h3>${esc(title)}</h3><p>${esc(detail)}</p><button class="btn-secondary" type="button" ${attributes}>${esc(action)}</button></div>`; }
  function financeSummary(candidate, detailed = false) {
    const rec = candidate.finance;
    if (rec) return `<dl class="candidate-facts"><div><dt>Receipts</dt><dd>${money(rec.receipts)}</dd></div><div><dt>Cash on hand</dt><dd>${money(rec.cash_on_hand_end_period)}</dd></div></dl><p class="finance-caption">FEC snapshot · period through ${esc(rec.coverage_end_date || 'date not supplied')}${detailed ? ` · ${externalLink(`https://www.fec.gov/data/candidate/${rec.candidate_id}/?cycle=2026`, 'View filing')}` : ''}</p>`;
    if (!detailed) return '<dl class="candidate-facts"><div><dt>Finance source</dt><dd class="fact-text">Research snapshot</dd></div><div><dt>Official record</dt><dd class="fact-text">Not matched</dd></div></dl>';
    return `<dl class="candidate-facts"><div><dt>Raised (curated, unverified)</dt><dd>${esc(candidate.fecRaised || 'Not recorded')}</dd></div><div><dt>Cash (curated, unverified)</dt><dd>${esc(candidate.fecCashOnHand || 'Not recorded')}</dd></div></dl><p class="source-note">No confirmed filing match or reporting period in this app. ${externalLink(candidate.race.level === 'federal' ? 'https://www.fec.gov/data/' : 'https://www.elections.il.gov/', 'Check official disclosures')}</p>`;
  }
  function issueList(candidate) { return `<dl class="issue-list">${(ISSUES[issueTier(candidate.race)] || []).map((i) => `<div><dt>${esc(i.shortLabel || i.label)}</dt><dd>${esc(issueText(candidate,i.key))}</dd></div>`).join('')}</dl>`; }
  function candidateCard(candidate) {
    const party = partyMeta(candidate.party), selected = state.compareIds.includes(candidate.id);
    return `<article class="candidate-card" data-cand-id="${esc(candidate.id)}"><div class="candidate-heading"><div class="candidate-avatar" aria-hidden="true">${esc(candidate.photoInitials || candidate.name.split(/\s+/).slice(0,2).map((word) => word[0]).join(''))}</div><div class="candidate-identity"><span class="party-badge ${party.className}">${esc(party.label)}</span><h4 class="candidate-name">${esc(candidate.name)}</h4></div></div><p class="candidate-role">${esc(candidate.role || 'Role not recorded')}</p><p class="candidate-hometown">${esc(candidate.hometown || 'Illinois')}<span>${esc(candidate.incumbentStatus || 'Research entry')}</span></p>${financeSummary(candidate)}<div class="candidate-actions"><button class="btn-text" type="button" data-modal-cand="${esc(candidate.id)}">View profile ↗</button><button class="btn-compare-sm ${selected ? 'btn-compare-active' : ''}" type="button" aria-pressed="${selected}" data-compare-toggle="${esc(candidate.id)}" aria-label="${selected ? 'Remove' : 'Add'} ${esc(candidate.name)} ${selected ? 'from' : 'to'} comparison">${selected ? '✓ Added' : '+ Compare'}</button></div>${!state.compactIssues ? `<details class="issue-details-box" open><summary>Issue summaries</summary>${issueList(candidate)}</details>` : ''}</article>`;
  }
  function raceCard(race) {
    const candidates = (race.candidates || []).map((c) => CANDIDATES.get(c.id)).filter(Boolean).filter(candidateMatchesFilters);
    return `<article class="race-card race-section-card" id="race-${esc(race.id)}"><div class="race-card-header"><div><div class="race-kicker"><span>${esc(race.districtCode)}</span>${race.isOpenSeat ? '<span class="race-tag">Open seat</span>' : ''}${isOverview(race) ? '<span class="race-tag">Area overview</span>' : ''}</div><h3 class="race-title">${esc(race.office)}</h3><p class="race-meta">${esc(race.districtName)}</p></div>${candidates.length > 1 ? `<button class="btn-secondary" type="button" data-compare-race="${esc(race.id)}">${isOverview(race) ? 'Compare entries' : 'Compare candidates'} ↗</button>` : ''}</div>${isOverview(race) ? '<p class="race-overview-note">This entry groups local offices or ballot topics. Listed people may run for different offices and may not appear on the same ballot.</p>' : ''}<div class="candidates-grid" style="--candidate-columns:${Math.min(Math.max(candidates.length,1),3)}">${candidates.map(candidateCard).join('') || '<p class="source-note">No candidate entries available.</p>'}</div>${race.primarySummary ? `<details class="race-summary"><summary>Race background <span>Curated research</span></summary><p>${esc(race.primarySummary)}</p>${race.incumbent ? `<p><strong>Incumbent listed in the snapshot:</strong> ${esc(race.incumbent)}</p>` : ''}<p class="source-note">Background may be incomplete or outdated. Confirm ballot status with your election authority.</p></details>` : ''}</article>`;
  }
  function renderBallot() {
    const races = getFilteredRaces(), groups = LEVELS.map((level) => ({ level, races: races.filter((race) => race.level === level) })).filter((g) => g.races.length);
    const total = races.reduce((n,race) => n + (race.candidates || []).filter(candidateMatchesFilters).length,0);
    return `<div class="results-toolbar"><div><p class="eyebrow">The research directory</p><h2 class="results-title">Races worth understanding.</h2><p class="result-count">${races.length} races & overviews · ${total} candidate and slate entries</p></div><button class="btn-text" type="button" id="toggle-compact-issues-btn" aria-pressed="${!state.compactIssues}">${state.compactIssues ? 'Show issue summaries' : 'Keep cards compact'}</button></div>${filterSummary()}${groups.length > 1 ? `<nav class="race-jump-nav" aria-label="Jump to race level">${groups.map((g,index) => `<a href="#ballot-tier-${g.level}"><span>${String(index+1).padStart(2,'0')}</span>${LEVEL_LABELS[g.level]}<small>${g.races.length}</small></a>`).join('')}</nav>` : ''}${groups.length ? groups.map((group,index) => `<section class="race-section" id="ballot-tier-${group.level}" aria-labelledby="heading-${group.level}"><div class="race-section-heading"><span class="section-index">${String(index+1).padStart(2,'0')}</span><h2 id="heading-${group.level}">${LEVEL_LABELS[group.level]}</h2><span>${group.races.length} ${group.level === 'local' ? 'entries' : 'races'}</span></div><div class="race-grid">${group.races.map(raceCard).join('')}</div></section>`).join('') : emptyState('No matching races', 'Try removing a filter or searching for another candidate. Your location will stay selected.')}<p class="source-note directory-source-note">${SOURCE_NOTE}</p>`;
  }
  function getFilteredTowns() { const q = normalize(state.searchQuery); return TOWNS.filter((t) => !q || normalize([t.name,t.region,t.county,...(t.aliases || []),...(t.zips || [])].join(' ')).includes(q)); }
  function renderTowns() {
    const towns = getFilteredTowns();
    return `<div class="results-toolbar"><div><p class="eyebrow">Across the state</p><h2 class="results-title">Find your community.</h2><p class="result-count">${towns.length} curated area guides. For any Illinois ZIP, use the lookup above.</p></div></div>${filterSummary(true)}<p class="coverage-note">Community guides describe possible nearby races. Exact districts and ballot eligibility require your residential address.</p><div class="community-grid">${towns.map((t) => `<article class="community-card"><p class="eyebrow">${esc(t.region)}</p><h3>${esc(t.name)}</h3><p>${esc(t.county)} County</p><p class="community-zips">ZIPs in this guide: ${esc((t.zips || []).slice(0,8).join(', '))}${(t.zips || []).length > 8 ? '…' : ''}</p><button type="button" class="btn-text" data-load-town="${esc(t.id)}">Explore area ↗</button></article>`).join('')}</div>${towns.length ? '' : emptyState('No matching community guide', 'The curated directory is smaller than the ZIP directory. Try a five-digit ZIP in the lookup above.', 'Clear search')}`;
  }
  function renderIssues() {
    const definitions = ISSUES[state.issueLevel] || [], issue = definitions.find((i) => i.key === state.selectedIssueKey) || definitions[0];
    if (!issue) return emptyState('No issue summaries available', 'Try another view.', 'Browse races', 'data-tab-btn="ballot"');
    const candidates = getFilteredRaces().filter((race) => issueTier(race) === state.issueLevel).flatMap((race) => (race.candidates || []).map((c) => CANDIDATES.get(c.id)).filter(Boolean).filter(candidateMatchesFilters));
    return `<div class="results-toolbar"><div><p class="eyebrow">Compare the substance</p><h2 class="results-title">Where candidates stand.</h2><p class="result-count">Read summaries by policy area, with missing positions clearly marked.</p></div></div>${filterSummary()}<div class="segmented-control" role="group" aria-label="Issue level">${['federal','state','local'].map((tier) => `<button type="button" data-issue-tier="${tier}" aria-pressed="${state.issueLevel === tier}" class="${state.issueLevel === tier ? 'is-active' : ''}">${tier === 'federal' ? 'Federal' : tier === 'state' ? 'State' : 'Local'}</button>`).join('')}</div><div class="issue-layout"><nav class="issue-picker" aria-label="Policy topics">${definitions.map((i) => `<button type="button" data-select-issue="${esc(i.key)}" aria-pressed="${i.key === issue.key}" class="${i.key === issue.key ? 'is-active' : ''}">${esc(i.shortLabel || i.label)}<span aria-hidden="true">↗</span></button>`).join('')}</nav><div class="issue-results"><h3>${esc(issue.shortLabel || issue.label)}</h3><p class="source-note">These summaries reflect the site's curated dataset. A missing entry is not an inferred party position.</p>${candidates.map((c) => `<article class="issue-position"><div class="issue-position-heading"><div><button class="btn-text candidate-inline-name" data-modal-cand="${esc(c.id)}" type="button">${esc(c.name)}</button><p>${esc(c.race.districtCode)} · ${esc(c.party)}</p></div><button type="button" class="btn-compare-sm" data-compare-toggle="${esc(c.id)}" aria-pressed="${state.compareIds.includes(c.id)}">${state.compareIds.includes(c.id) ? '✓ Added' : '+ Compare'}</button></div><p>${esc(issueText(c,issue.key))}</p></article>`).join('') || emptyState('No candidates in this issue level', 'Your race filters may be excluding this level. Clear them or choose another policy level.')}</div></div>`;
  }
  function renderPacs() {
    const q = normalize(state.pacSearchQuery), categories = [...new Set(PACS.map((p) => p.category).filter(Boolean))].sort();
    const pacs = PACS.filter((p) => (state.pacCategoryFilter === 'all' || p.category === state.pacCategoryFilter) && (!q || normalize([p.name,p.category,p.description,p.leaderOrSource,...(p.keyBackedCandidates || []),...(p.keyOpposedCandidates || [])].join(' ')).includes(q)));
    return `<div class="results-toolbar"><div><p class="eyebrow">Follow the disclosures</p><h2 class="results-title">Money & influence.</h2><p class="result-count">${pacs.length} organizations and donor networks in the statewide research directory.</p></div>${externalLink('https://www.fec.gov/data/', 'Search FEC records', 'btn-secondary')}</div><p class="source-note">This directory is statewide and does not change with location or candidate filters. Descriptions and spending amounts are curated, not live filings. Independent spending, endorsements, bundled donations and direct contributions are different forms of support.</p><div class="directory-controls"><label for="pac-search-input">Search organizations<input class="filter-input" id="pac-search-input" type="search" value="${esc(state.pacSearchQuery)}" placeholder="Organization, donor or candidate" /></label><label for="pac-category-control">Organization type<select class="filter-select" id="pac-category-control"><option value="all">All types</option>${categories.map((category) => `<option value="${esc(category)}" ${category === state.pacCategoryFilter ? 'selected' : ''}>${esc(category)}</option>`).join('')}</select></label></div><div class="pac-grid">${pacs.map((p) => `<article class="pac-card"><p class="eyebrow">${esc(p.category)}</p><h3>${esc(p.name)}</h3><p class="pac-amount">${esc(p.cycle2026Spending || 'Amount not recorded')}</p><p class="finance-caption">Curated amount · reporting period and transactions not verified</p><p>${esc(p.description)}</p><details><summary>Relationships & policy focus</summary><dl class="issue-list"><div><dt>Listed leadership or funding source</dt><dd>${esc(p.leaderOrSource || 'Not recorded')}</dd></div><div><dt>Listed support</dt><dd>${esc(textList(p.keyBackedCandidates) || 'None recorded')}</dd></div><div><dt>Listed opposition</dt><dd>${esc(textList(p.keyOpposedCandidates) || 'None recorded')}</dd></div><div><dt>Policy focus</dt><dd>${esc(p.issueFocus || 'Not recorded')}</dd></div></dl></details></article>`).join('')}</div>${pacs.length ? '' : emptyState('No organizations found', 'Try a broader name or clear the organization filters.', 'Clear organization filters', 'data-reset-pacs="true"')}`;
  }
  function renderCompare() {
    const candidates = state.compareIds.map((id) => CANDIDATES.get(id)).filter(Boolean);
    if (!candidates.length) return `<div class="results-toolbar"><div><p class="eyebrow">Your shortlist</p><h2 class="results-title">Make a clear comparison.</h2></div></div>${emptyState('Choose candidates to compare', 'Add up to four candidates from their cards, or compare an entire race. Nothing is preselected for you.', 'Browse candidates', 'data-tab-btn="ballot"')}`;
    const different = new Set(candidates.map((c) => c.race.id)).size > 1 || candidates.some((c) => isOverview(c.race));
    const topics = [...new Set(candidates.map((c) => issueTier(c.race)))].flatMap((tier) => (ISSUES[tier] || []).map((i) => ({ ...i, tier })));
    const row = (label,render) => `<tr><th scope="row">${esc(label)}</th>${candidates.map((c) => `<td>${render(c)}</td>`).join('')}</tr>`;
    return `<div class="results-toolbar"><div><p class="eyebrow">Your shortlist</p><h2 class="results-title">Side by side.</h2><p class="result-count">${candidates.length} of 4 comparison slots used.</p></div><button class="btn-text" type="button" id="clear-compare-btn">Clear comparison</button></div>${different ? '<p class="coverage-note">These entries cover different offices or local overviews. They are not necessarily opponents in the same contest.</p>' : ''}<p class="source-note">${SOURCE_NOTE}</p><p class="table-hint">On a small screen, swipe the table horizontally. The topic column stays in view.</p><div class="table-scroll" role="region" aria-label="Candidate comparison table, horizontally scrollable" tabindex="0"><table class="data-table comparison-table"><caption class="sr-only">Comparison of ${esc(candidates.map((c) => c.name).join(', '))}</caption><thead><tr><th scope="col">At a glance</th>${candidates.map((c) => `<th scope="col"><span class="party-badge ${partyMeta(c.party).className}">${esc(c.party)}</span><h3>${esc(c.name)}</h3><p>${esc(c.race.districtCode)}</p><button class="btn-text" type="button" data-compare-remove="${esc(c.id)}" aria-label="Remove ${esc(c.name)} from comparison">Remove ×</button></th>`).join('')}</tr></thead><tbody>${row('Office',(c) => esc(c.race.office))}${row('Role',(c) => esc(c.role || 'Not recorded'))}${row('Hometown',(c) => esc(c.hometown || 'Not recorded'))}${row('Finance',(c) => financeSummary(c,true))}${row('PAC policy (curated)',(c) => esc(c.pacPolicy || 'Not recorded'))}${row('Endorsements (curated)',(c) => esc(textList(c.endorsements) || 'None recorded'))}${topics.map((i) => row(`${i.tier === 'federal' ? 'Federal' : i.tier === 'state' ? 'State' : 'Local'}: ${i.shortLabel || i.label}`, (c) => issueTier(c.race) === i.tier ? esc(issueText(c,i.key)) : '<span class="not-applicable">Different level of office</span>')).join('')}</tbody></table></div><div class="comparison-footer"><button class="btn-secondary" type="button" data-tab-btn="ballot">Add another candidate</button><button class="btn-text" type="button" data-print="true">Print this comparison</button></div>`;
  }
  function renderGuide() {
    const meta = window.IL_LIVE_SYNC_META || {}, matched = [...CANDIDATES.values()].filter((c) => c.finance).length;
    return `<div class="results-toolbar"><div><p class="eyebrow">Know before you go</p><h2 class="results-title">A plan for election day.</h2><p class="result-count">Tuesday, November 3, 2026 · Illinois polls open 6 a.m.–7 p.m. Central.</p></div>${externalLink(AUTHORITY_URL,'Find your election office','btn-secondary')}</div><div class="guide-grid"><article class="guide-card"><span class="section-index">01</span><h3>Confirm your registration.</h3><p>Online registration closed October 18. In-person registration and voting remain available through Election Day at designated locations. Confirm requirements with your election authority.</p>${externalLink(AUTHORITY_URL,'Registration & local help')}</article><article class="guide-card"><span class="section-index">02</span><h3>Choose when to vote.</h3><p>Early voting locations and hours vary by election authority. Chicago's early voting runs through November 2; use your local office's current schedule for other communities.</p>${externalLink(AUTHORITY_URL,'Find early voting information')}${externalLink(CHICAGO_URL,'Chicago voter information')}</article><article class="guide-card"><span class="section-index">03</span><h3>Check your mail ballot.</h3><p>The mail application deadline is October 29. Mailed ballots must be postmarked by November 3 and received by November 17. A drop-off must reach an authorized location by the Election Day deadline; check local instructions.</p>${externalLink(AUTHORITY_URL,'Mail ballot & drop-off details')}</article><article class="guide-card"><span class="section-index">04</span><h3>Know your exact ballot.</h3><p>A ZIP is a useful starting point, but it can cross congressional, legislative and local boundaries. Your residential address determines your districts and sample ballot.</p>${externalLink(ADDRESS_URL,'Look up your districts')}${externalLink(AUTHORITY_URL,'Find your official sample ballot')}</article></div><section class="methodology-section" id="research-method"><p class="eyebrow">How to use this guide</p><h3>Research with context.</h3><dl class="issue-list"><div><dt>Area results are approximate</dt><dd>Postal codes are not election districts. This site uses a static Illinois ZIP directory and curated community-to-race associations. Where no curated association exists, it shows statewide races instead of guessing a local district.</dd></div><div><dt>Coverage is selective</dt><dd>The directory includes federal and statewide races plus selected legislative and local research entries. It is not a certified candidate list or a complete sample ballot. Some local entries combine offices, candidates or referendums.</dd></div><div><dt>Policy summaries are curated</dt><dd>${SOURCE_NOTE} Missing positions are left missing. No numerical political-alignment score is inferred from party membership.</dd></div><div><dt>PAC support needs interpretation</dt><dd>The PAC relationship filter includes mentions of support, opposition and rejection; open a candidate profile to read the relationship. Independent expenditures are not donations to a candidate. An endorsement, donor network, direct contribution and bundled contribution are not equivalent. Consult the original disclosures for amounts and dates.</dd></div></dl></section><section class="methodology-section" id="finance-source"><p class="eyebrow">Campaign finance</p><h3>A dated snapshot, clearly labeled.</h3><p>The bundled finance snapshot was generated ${esc(meta.lastAutomatedSync || 'at an unspecified time')}. It contains ${Array.isArray(meta.records) ? meta.records.length : 0} federal records; ${matched} candidate entries match by full identity, office, district and party. Other figures remain marked as unverified curated research.</p><p>This static website does not fetch live FEC data. Individual filing coverage dates are shown wherever a match is available. Zero receipts and zero cash are valid amounts.</p><div class="area-links">${externalLink('https://www.fec.gov/data/','Federal campaign finance')}${externalLink('https://www.elections.il.gov/','Illinois election information')}</div></section><section class="methodology-section"><p class="eyebrow">Official references</p><h3>Go straight to the source.</h3><div class="source-links">${externalLink(AUTHORITY_URL,'Illinois election authorities')}${externalLink(ADDRESS_URL,'Illinois district lookup')}${externalLink(CHICAGO_URL,'Chicago voter information')}${externalLink('https://cboeprod.blob.core.usgovcloudapi.net/prod/2025-07/2026%20Chicago%20Election%20Calendar%20rev2.pdf','2026 Chicago election calendar (PDF)')}</div><p class="source-note">Voting information checked October 26, 2026. Local election officials are the source of record for current hours, locations and ballot instructions.</p></section>`;
  }
  function openModal(id, trigger) {
    const c = CANDIDATES.get(id), backdrop = $('candidate-modal-backdrop'); if (!c || !backdrop) return;
    modalReturnFocus = trigger || document.activeElement; state.modalCandidateId = id;
    backdrop.innerHTML = `<section class="modal-panel modal-card" role="dialog" aria-modal="true" aria-labelledby="candidate-profile-title" tabindex="-1"><header class="modal-heading"><div><p class="eyebrow">Candidate research profile</p><h2 id="candidate-profile-title">${esc(c.name)}</h2><span class="party-badge ${partyMeta(c.party).className}">${esc(c.party)}</span></div><button type="button" id="close-modal-btn" class="modal-close" aria-label="Close candidate profile">×</button></header><div class="modal-body"><p class="candidate-role">${esc(c.role)}</p><p class="candidate-hometown">${esc(c.hometown)} · ${esc(c.race.office)}</p><p class="source-note">${SOURCE_NOTE}</p><h3>Campaign finance</h3>${financeSummary(c,true)}<h3>PACs & donor relationships</h3><p><strong>${esc(c.pacPolicy || 'Policy not recorded')}</strong></p><p>${esc(c.pacSummary || 'No summary recorded.')}</p><div class="pac-relationships">${(c.pacs || []).map((p) => `<article><strong>${esc(p.name)}</strong><p>${esc(p.type)} · ${esc(p.stance || 'Relationship not specified')}</p><p>${esc(p.amount || 'Amount not recorded')}</p></article>`).join('')}</div><h3>Endorsements listed</h3><p>${esc(textList(c.endorsements) || 'No endorsements recorded.')}</p><h3>Issue summaries</h3>${issueList(c)}<div class="modal-actions"><button type="button" class="btn-secondary" data-compare-toggle="${esc(c.id)}" aria-pressed="${state.compareIds.includes(c.id)}">${state.compareIds.includes(c.id) ? '✓ Added to comparison' : '+ Add to comparison'}</button>${externalLink(AUTHORITY_URL,'Confirm official ballot status')}</div></div></section>`;
    backdrop.classList.remove('hidden'); backdrop.removeAttribute('aria-hidden'); $('close-modal-btn')?.focus(); priorBodyOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    modalBackground = [...document.body.children].filter((el) => el !== backdrop && el.id !== 'app-status' && el.tagName !== 'SCRIPT').map((el) => ({ el, inert: el.inert, aria: el.getAttribute('aria-hidden') }));
    modalBackground.forEach(({el}) => { el.inert = true; el.setAttribute('aria-hidden','true'); });
  }
  function closeModal(restoreFocus = true) {
    if (!state.modalCandidateId) return; state.modalCandidateId = null;
    const backdrop = $('candidate-modal-backdrop'); if (backdrop) { backdrop.classList.add('hidden'); backdrop.innerHTML = ''; backdrop.setAttribute('aria-hidden','true'); }
    document.body.style.overflow = priorBodyOverflow; modalBackground.forEach(({el,inert,aria}) => { el.inert = inert; if (aria === null) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden',aria); }); modalBackground = [];
    if (restoreFocus && modalReturnFocus && modalReturnFocus.isConnected) modalReturnFocus.focus({ preventScroll: true });
  }
  function closeSuggestions() {
    activeSuggestion = -1; const dropdown = $('hero-location-suggestions'), input = $('hero-location-input');
    if (dropdown) { dropdown.classList.add('hidden'); dropdown.innerHTML = ''; }
    if (input) { input.setAttribute('aria-expanded','false'); input.removeAttribute('aria-activedescendant'); }
  }
  function renderSuggestions(query, choices) {
    const dropdown = $('hero-location-suggestions'), input = $('hero-location-input'); if (!dropdown || !input) return;
    activeSuggestion = -1; const trimmed = String(query || '').trim();
    suggestions = Array.isArray(choices) ? choices.slice(0,8) : trimmed.length >= 2 && window.IL_LOCATION && window.IL_LOCATION.suggestions ? window.IL_LOCATION.suggestions(trimmed).slice(0,8) : [];
    if (!suggestions.length) { closeSuggestions(); return; }
    dropdown.innerHTML = suggestions.map((item,index) => `<div class="autocomplete-item" role="option" id="location-option-${index}" aria-selected="false" data-suggestion-index="${index}"><strong>${esc(item.label || item.displayTitle || item.matchedLabel || item.query)}</strong><span>${esc(item.detail || item.subtitle || 'Area research · confirm districts by address')}</span></div>`).join('');
    dropdown.classList.remove('hidden'); input.setAttribute('aria-expanded','true'); input.removeAttribute('aria-activedescendant');
  }
  function chooseSuggestion(index) {
    const item = suggestions[index]; if (!item) return;
    const query = item.query || item.matchedZip || item.zip || (item.town && item.town.id) || item.id || item.matchedLabel, result = resolveLocationQuery(query);
    if ($('hero-location-input')) $('hero-location-input').value = result && !result.error ? result.matchedZip || result.matchedLabel : query;
    applyLocation(result);
  }
  function setActiveSuggestion(index) {
    if (!suggestions.length) return; activeSuggestion = (index + suggestions.length) % suggestions.length;
    const options = $('hero-location-suggestions').querySelectorAll('[role=option]'); options.forEach((o,i) => { o.setAttribute('aria-selected',String(i === activeSuggestion)); o.classList.toggle('is-active',i === activeSuggestion); });
    const selected = options[activeSuggestion]; if (selected) { $('hero-location-input').setAttribute('aria-activedescendant',selected.id); selected.scrollIntoView({ block: 'nearest' }); }
  }
  function applyTheme(theme, persist = false) {
    state.theme = theme === 'dark' ? 'dark' : 'light'; document.documentElement.dataset.theme = state.theme; document.documentElement.classList.toggle('dark',state.theme === 'dark'); document.documentElement.style.colorScheme = state.theme;
    const button = $('theme-toggle-btn'); if (button) { button.setAttribute('aria-label',`Switch to ${state.theme === 'dark' ? 'light' : 'dark'} theme`); button.setAttribute('aria-pressed',String(state.theme === 'dark')); }
    if (persist) storageSet('il2026-theme',state.theme);
  }
  function readUrl() {
    const params = new URLSearchParams(window.location.search);
    Object.assign(state,FILTER_DEFAULTS,{ activeTab: 'ballot', locationResult: null, locationNotice: '', compareIds: [], issueLevel: 'federal', selectedIssueKey: 'economy', pacSearchQuery: '', pacCategoryFilter: 'all' });
    const query = params.get('zip') || params.get('town'); if (query && query !== 'all') applyLocation(resolveLocationQuery(query),false);
    if (TABS.includes(params.get('tab'))) state.activeTab = params.get('tab');
    if (LEVELS.includes(params.get('level'))) state.levelFilter = params.get('level');
    const allowed = { region: ['chicago','suburban_cook','collar','northern','central','southern'], party: ['dem','gop','ind'], race: ['open','battleground'], pac: ['no-corp','fairshake','aipac','jstreet','local150','teachers','seiu-afl','itla','realtors','business','fop-isra'] };
    const keys = { region: 'regionFilter', party: 'partyFilter', race: 'raceTypeFilter', pac: 'pacFilter' };
    Object.entries(allowed).forEach(([param,values]) => { if (values.includes(params.get(param))) state[keys[param]] = params.get(param); });
    state.searchQuery = (params.get('q') || '').slice(0,160); state.compareIds = [...new Set((params.get('compare') || '').split(','))].filter((id) => CANDIDATES.has(id)).slice(0,4);
    if (['federal','state','local'].includes(params.get('tier'))) state.issueLevel = params.get('tier');
    state.selectedIssueKey = (ISSUES[state.issueLevel] || []).some((i) => i.key === params.get('issue')) ? params.get('issue') : ((ISSUES[state.issueLevel] || [])[0] || {}).key;
    state.pacSearchQuery = (params.get('orgq') || '').slice(0,160); if (PACS.some((p) => p.category === params.get('orgtype'))) state.pacCategoryFilter = params.get('orgtype');
  }
  function writeUrl(mode = 'replace') {
    if (window.location.protocol === 'file:') return;
    const params = new URLSearchParams(), result = state.locationResult;
    if (result && result.matchedZip) params.set('zip',result.matchedZip);
    else if (result && result.town) params.set('town',result.town.id);
    else if (result && result.location && result.location.city) params.set('town',result.location.city);
    if (state.activeTab !== 'ballot') params.set('tab',state.activeTab);
    Object.entries({ level: 'levelFilter', region: 'regionFilter', party: 'partyFilter', race: 'raceTypeFilter', pac: 'pacFilter' }).forEach(([key,value]) => { if (state[value] !== 'all') params.set(key,state[value]); });
    if (state.searchQuery) params.set('q',state.searchQuery); if (state.compareIds.length) params.set('compare',state.compareIds.join(','));
    if (state.activeTab === 'issues') { params.set('tier',state.issueLevel); params.set('issue',state.selectedIssueKey); }
    if (state.pacSearchQuery) params.set('orgq',state.pacSearchQuery); if (state.pacCategoryFilter !== 'all') params.set('orgtype',state.pacCategoryFilter);
    const qs = params.toString(), url = window.location.pathname + (qs ? `?${qs}` : '') + window.location.hash;
    if (url === lastUrl) return;
    try { window.history[mode === 'push' ? 'pushState' : 'replaceState']({},'',url); lastUrl = url; } catch (_) { /* Restricted frames remain usable. */ }
  }
  function populateControls() {
    const select = $('town-select-control'); if (select) select.innerHTML = `<option value="all">All Illinois communities</option>${[...TOWNS].sort((a,b) => a.name.localeCompare(b.name)).map((t) => `<option value="${esc(t.id)}">${esc(t.name)}</option>`).join('')}`;
    const legacy = $('trump-select-control'); if (legacy) { legacy.disabled = true; legacy.closest('label')?.setAttribute('hidden',''); }
  }
  function syncControls() {
    Object.entries(CONTROL_KEYS).forEach(([id,key]) => { if ($(id)) $(id).value = state[key]; });
    const select = $('town-select-control'), town = getTown();
    if (select) {
      select.querySelectorAll('[data-temporary-location]').forEach((o) => o.remove());
      if (state.locationResult && (!town || !TOWNS.some((t) => t.id === town.id))) { const option = new Option(locationLabel(),'__resolved_location__'); option.dataset.temporaryLocation = 'true'; select.add(option); select.value = option.value; }
      else select.value = town ? town.id : 'all';
    }
    if ($('global-search-input') && document.activeElement !== $('global-search-input')) $('global-search-input').value = state.searchQuery;
    document.querySelectorAll('[data-tab-btn]').forEach((button) => { const active = button.dataset.tabBtn === state.activeTab; button.classList.toggle('active',active); if (button.closest('nav')) { button.setAttribute('aria-current',active ? 'page' : 'false'); button.setAttribute('aria-controls','tab-content-container'); } });
    if ($('compare-count-badge')) $('compare-count-badge').textContent = String(state.compareIds.length);
    document.querySelectorAll('[data-compare-toggle]').forEach((button) => { const active = state.compareIds.includes(button.dataset.compareToggle); button.setAttribute('aria-pressed',String(active)); button.classList.toggle('btn-compare-active',active); button.textContent = button.closest('.modal-panel') ? active ? '✓ Added to comparison' : '+ Add to comparison' : active ? '✓ Added' : '+ Compare'; const candidate = CANDIDATES.get(button.dataset.compareToggle); if (candidate) button.setAttribute('aria-label',`${active ? 'Remove' : 'Add'} ${candidate.name} ${active ? 'from' : 'to'} comparison`); });
    document.body.dataset.activeView = state.activeTab;
  }
  function renderApp(historyMode) {
    syncControls(); summaryKpis(); renderAreaSummary();
    const container = $('tab-content-container'); if (container) { container.dataset.view = state.activeTab; container.innerHTML = ({ ballot: renderBallot, towns: renderTowns, issues: renderIssues, pacs: renderPacs, compare: renderCompare, guide: renderGuide }[state.activeTab] || renderBallot)(); }
    syncControls(); if (historyMode) writeUrl(historyMode);
  }
  function focusResults(scroll = false) {
    const container = $('tab-content-container'); if (!container) return; const heading = container.querySelector('h2'); if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    if (scroll) container.scrollIntoView({ block: 'start', behavior: reduceMotion() ? 'auto' : 'smooth' });
  }
  function switchTab(tab, focus = true) { if (!TABS.includes(tab)) return; state.activeTab = tab; closeSuggestions(); renderApp('push'); if (focus) focusResults(true); }
  function toggleComparison(id) {
    if (!CANDIDATES.has(id)) return;
    if (state.compareIds.includes(id)) { state.compareIds = state.compareIds.filter((value) => value !== id); announce(`${CANDIDATES.get(id).name} removed from comparison.`); }
    else if (state.compareIds.length >= 4) { announce('Your comparison has four candidates. Remove one before adding another.'); showToast('Comparison is full. Remove a candidate to add another.'); return; }
    else { state.compareIds.push(id); announce(`${CANDIDATES.get(id).name} added. ${state.compareIds.length} of four slots used.`); }
    syncControls(); writeUrl('replace');
  }
  function showToast(message) {
    let toast = $('app-toast'); if (!toast) { toast = document.createElement('div'); toast.id = 'app-toast'; toast.className = 'app-toast'; toast.setAttribute('role','status'); document.body.appendChild(toast); }
    toast.textContent = message; toast.hidden = false; clearTimeout(showToast.timer); showToast.timer = setTimeout(() => { toast.hidden = true; },5000);
  }
  async function shareView() {
    writeUrl('replace'); const url = window.location.href;
    if (navigator.share && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) { try { await navigator.share({ title: 'Illinois 2026 election research', url }); return; } catch (error) { if (error && error.name === 'AbortError') return; } }
    try { if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(url); showToast('Link copied. Your location, filters and comparison are included.'); announce('Link copied.'); }
    catch (_) {
      const previous = document.activeElement, box = document.createElement('textarea'); box.value = url; box.setAttribute('readonly',''); box.style.position = 'fixed'; box.style.opacity = '0'; document.body.appendChild(box); box.select(); let copied = false;
      try { copied = document.execCommand('copy'); } catch (_) { /* Manual fallback below. */ } box.remove(); if (previous && previous.isConnected) previous.focus({ preventScroll: true });
      if (copied) { showToast('Link copied.'); announce('Link copied.'); } else { window.prompt('Copy this link to share your view:',url); announce('Copy the link from the dialog to share this view.'); }
    }
  }
  function init() {
    applyFinanceSnapshot(); populateControls(); const savedTheme = storageGet('il2026-theme'); applyTheme(savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')); readUrl(); lastUrl = window.location.pathname + window.location.search + window.location.hash;
    const input = $('hero-location-input'), form = $('hero-location-form');
    if (input) {
      input.setAttribute('role','combobox'); input.setAttribute('aria-autocomplete','list'); input.setAttribute('aria-controls','hero-location-suggestions'); input.setAttribute('aria-expanded','false'); input.setAttribute('autocomplete','off'); input.setAttribute('aria-describedby','hero-location-feedback');
      input.addEventListener('input',() => { state.locationNotice = ''; input.setAttribute('aria-invalid','false'); $('hero-location-feedback')?.classList.add('hidden'); renderSuggestions(input.value); });
      input.addEventListener('keydown',(event) => {
        const open = $('hero-location-suggestions') && !$('hero-location-suggestions').classList.contains('hidden');
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { if (!open) renderSuggestions(input.value); if (suggestions.length) { event.preventDefault(); setActiveSuggestion(activeSuggestion < 0 && event.key === 'ArrowUp' ? suggestions.length - 1 : activeSuggestion + (event.key === 'ArrowDown' ? 1 : -1)); } }
        else if (event.key === 'Enter' && open && activeSuggestion >= 0) { event.preventDefault(); chooseSuggestion(activeSuggestion); }
        else if (event.key === 'Escape') { event.preventDefault(); closeSuggestions(); }
        else if (event.key === 'Tab') closeSuggestions();
      });
    }
    if (form) form.addEventListener('submit',(event) => { event.preventDefault(); const raw = input ? input.value.trim() : ''; if (!raw) clearLocation(); else applyLocation(resolveLocationQuery(raw)); if (state.locationNotice && input) input.focus(); });
    $('hero-location-clear-btn')?.addEventListener('click',clearLocation);
    $('town-select-control')?.addEventListener('change',(event) => { if (event.target.value !== '__resolved_location__') selectTown(event.target.value); });
    Object.entries(CONTROL_KEYS).forEach(([id,key]) => $(id)?.addEventListener('change',(event) => { state[key] = event.target.value; renderApp('push'); announce(state.activeTab === 'towns' ? `${getFilteredTowns().length} matching community guides.` : `${getFilteredRaces().length} matching races and overviews.`); }));
    $('global-search-input')?.addEventListener('input',(event) => { const value = event.target.value.slice(0,160); state.searchQuery = value; clearTimeout(searchTimer); searchTimer = setTimeout(() => { renderApp('replace'); announce(state.activeTab === 'towns' ? `${getFilteredTowns().length} matching community guides.` : `${getFilteredRaces().length} matching races and overviews.`); },140); });
    $('theme-toggle-btn')?.addEventListener('click',() => applyTheme(state.theme === 'light' ? 'dark' : 'light',true));
    $('share-link-btn')?.addEventListener('click',shareView); $('print-guide-btn')?.addEventListener('click',() => window.print());
    if ($('live-fec-sync-label')) $('live-fec-sync-label').textContent = 'Finance snapshot';
    const syncButton = $('live-fec-sync-btn'); if (syncButton) { syncButton.title = 'View the source and date of the bundled finance snapshot'; syncButton.addEventListener('click',() => { switchTab('guide',false); $('finance-source')?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }); }
    document.addEventListener('click',(event) => {
      const target = event.target instanceof Element ? event.target : event.target.parentElement; if (!target) return;
      if (!target.closest('#hero-location-form')) closeSuggestions();
      const suggestion = target.closest('[data-suggestion-index]'); if (suggestion) { chooseSuggestion(Number(suggestion.dataset.suggestionIndex)); return; }
      const tab = target.closest('[data-tab-btn]'); if (tab) { switchTab(tab.dataset.tabBtn); return; }
      const quick = target.closest('[data-quick-town],[data-load-town]'); if (quick) { selectTown(quick.dataset.quickTown || quick.dataset.loadTown); focusResults(true); return; }
      if (target.closest('#clear-town-btn')) { clearLocation(); return; }
      if (target.closest('#reset-all-filters-btn')) { clearTimeout(searchTimer); Object.assign(state,FILTER_DEFAULTS); renderApp('push'); focusResults(); return; }
      const removeFilter = target.closest('[data-remove-filter]'); if (removeFilter && Object.prototype.hasOwnProperty.call(FILTER_DEFAULTS,removeFilter.dataset.removeFilter)) { clearTimeout(searchTimer); state[removeFilter.dataset.removeFilter] = FILTER_DEFAULTS[removeFilter.dataset.removeFilter]; renderApp('push'); focusResults(); return; }
      if (target.closest('#toggle-compact-issues-btn')) { state.compactIssues = !state.compactIssues; renderApp(); $('toggle-compact-issues-btn')?.focus({ preventScroll: true }); return; }
      const compareRace = target.closest('[data-compare-race]'); if (compareRace) { const race = ALL_RACES.find((r) => r.id === compareRace.dataset.compareRace); if (race) { state.compareIds = (race.candidates || []).slice(0,4).map((c) => c.id); switchTab('compare'); if ((race.candidates || []).length > 4) showToast('Showing the first four entries. You can change the selection from candidate cards.'); } return; }
      const compareToggle = target.closest('[data-compare-toggle]'); if (compareToggle) { toggleComparison(compareToggle.dataset.compareToggle); return; }
      const removeCompare = target.closest('[data-compare-remove]'); if (removeCompare) { state.compareIds = state.compareIds.filter((id) => id !== removeCompare.dataset.compareRemove); renderApp('replace'); focusResults(); return; }
      if (target.closest('#clear-compare-btn')) { state.compareIds = []; renderApp('replace'); focusResults(); return; }
      const tier = target.closest('[data-issue-tier]'); if (tier && ISSUES[tier.dataset.issueTier]) { state.issueLevel = tier.dataset.issueTier; state.selectedIssueKey = (ISSUES[state.issueLevel][0] || {}).key; renderApp('push'); document.querySelector(`[data-issue-tier="${state.issueLevel}"]`)?.focus({ preventScroll: true }); return; }
      const topic = target.closest('[data-select-issue]'); if (topic && (ISSUES[state.issueLevel] || []).some((i) => i.key === topic.dataset.selectIssue)) { state.selectedIssueKey = topic.dataset.selectIssue; renderApp('push'); document.querySelector(`[data-select-issue="${state.selectedIssueKey}"]`)?.focus({ preventScroll: true }); return; }
      const profile = target.closest('[data-modal-cand]'); if (profile) { openModal(profile.dataset.modalCand,profile); return; }
      if (target.closest('#close-modal-btn') || target.id === 'candidate-modal-backdrop') { closeModal(); return; }
      if (target.closest('[data-reset-pacs]')) { state.pacSearchQuery = ''; state.pacCategoryFilter = 'all'; state.searchQuery = ''; renderApp('replace'); $('pac-search-input')?.focus(); return; }
      if (target.closest('[data-print]')) window.print();
    });
    document.addEventListener('input',(event) => {
      if (event.target.id !== 'pac-search-input') return; const selection = event.target.selectionStart; state.pacSearchQuery = event.target.value.slice(0,160); if ($('tab-content-container')) $('tab-content-container').innerHTML = renderPacs();
      const field = $('pac-search-input'); if (field) { field.focus({ preventScroll: true }); try { field.setSelectionRange(selection,selection); } catch (_) { /* Search inputs vary by browser. */ } } writeUrl('replace');
    });
    document.addEventListener('change',(event) => { if (event.target.id === 'pac-category-control') { state.pacCategoryFilter = event.target.value; renderApp('push'); $('pac-category-control')?.focus({ preventScroll: true }); } });
    document.addEventListener('keydown',(event) => {
      if (event.key === 'Escape') { if (state.modalCandidateId) { event.preventDefault(); closeModal(); } else closeSuggestions(); }
      if (event.key === 'Tab' && state.modalCandidateId) {
        const panel = document.querySelector('.modal-panel'), focusable = panel ? [...panel.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"],summary')].filter((el) => el.getClientRects().length) : [], first = focusable[0], last = focusable[focusable.length-1];
        if (!first) { event.preventDefault(); panel?.focus(); }
        else if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
      }
    });
    window.addEventListener('popstate',() => { closeModal(false); closeSuggestions(); clearTimeout(searchTimer); readUrl(); lastUrl = window.location.pathname + window.location.search + window.location.hash; renderApp(); announce(`Returned to ${locationLabel()}, ${state.activeTab} view.`); });
    window.addEventListener('pageshow',(event) => { if (event.persisted) { closeModal(false); readUrl(); renderApp(); } });
    renderApp();
    window.IL_APP = Object.freeze({ getState: () => JSON.parse(JSON.stringify(state)), getFilteredRaceIds: () => getFilteredRaces().map((r) => r.id), getIssueText: (id,key) => CANDIDATES.has(id) ? issueText(CANDIDATES.get(id),key) : null, getFinance: (id) => CANDIDATES.has(id) && CANDIDATES.get(id).finance ? { ...CANDIDATES.get(id).finance } : null, candidateCount: CANDIDATES.size, raceCount: ALL_RACES.length });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{ once: true }); else init();
})();
