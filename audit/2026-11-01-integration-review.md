# Independent integration review — November 1, 2026

Read-only review of the working repair against `d94c1aa`. Production files were changing during review; line numbers below identify the inspected version. The parent owns fixes and final validation. This review covers integration behavior, not the separately running claim-by-claim content or finance audits.

## Final re-review: findings resolved

Both integration defects below and the provenance improvement are now resolved in the inspected production source. No remaining publication blocker was found within this review's integration scope.

- **County filtering replaces the unsupported region classification.** `app.js:115–119` now obtains federal/state county memberships from `IL_GEOGRAPHY_DATA.byDistrict` and filters by exact county name. The geography builder intersects actual district polygons with county polygons rather than deriving membership from postal overlaps. A fresh independent VM probe counted 194 geographic districts and all 102 counties; HD-3, HD-4, HD-10, HD-39 and HD-40 each have sourced Cook membership. Legacy `?region=` is ignored; validated `?county=` is read and serialized. The filter explainer explicitly says that local offices without confirmed mapping remain available in the full directory, so missing local metadata is no longer silently presented as comprehensive county coverage.
- **Postal-city URLs preserve the canonical city name.** `app.js:314–315` serializes an ID only if it is a known curated `TOWNS` ID; otherwise it serializes `result.location.city`. A fresh independent probe traversed all 786 resolved synthetic postal-city views in the current postal directory and found zero failures when their canonical city names were resolved again. Ringwood is covered by the browser regression and reloads successfully.
- **Census boundary provenance is visible.** The area-summary renders the resolver's `geographySourceUrl` as “Census boundary source.” The footer separately attributes GeoNames postal geography and Census TIGERweb district overlaps, with the 2026 district / 2020 ZCTA vintages.
- The expanded `scripts/check-accuracy-ui.cjs` contains explicit regressions for Cook+60647 preserving all five House districts, 102 county options, a visible Census link, and Ringwood URL/reload preservation. Its saved `output/audit/accuracy-ui.json` records **63 passing checks** across Chromium, Firefox and WebKit at three viewport widths. I inspected this saved test result; the parent executed that browser run.

The historical findings below document what failed and why; they are not outstanding requests.

## Historical findings

### Resolved P1 — Region filtering hides newly added districts

Inspected `app.js:115–119` builds region membership only from the manually populated `race.region` and `race.counties` fields:

```js
const blob = normalize([race.region, ...(race.counties || [])].join(' '));
return (regions[state.regionFilter] || []).some((region) => (` ${blob} `).includes(` ${region} `));
```

The new complete legislature import gives previously missing races `region: "Illinois"` and `counties: []`. An independently executed source-data probe confirmed that **all five House districts returned for ZIP 60647 — HD-3, HD-4, HD-10, HD-39 and HD-40 — have those values**. Therefore adding the “Chicago” region filter eliminates all five, even though the newly sourced ZIP crosswalk includes them. A general disclaimer about approximate ZIPs does not explain this false exclusion.

Narrow safe fix: remove the incomplete region filter and ignore its legacy URL parameter while retaining ZIP, community, district, office and party controls. If retaining it, derive geographic membership from actual district-to-county/municipal polygon intersections with explicit provenance, rather than inferring it from district names or shared postal ZIPs; handle unclassified local offices explicitly. The geography owner has offered actual polygon intersection metadata, which is a viable alternative. Do not silently treat unknown metadata as proof a race is outside a region.

Regression needed: ZIP 60647 followed by Chicago filtering must retain HD-3/4/10/39/40 if that filter remains supported. Include a newly imported rural district and a local office with unknown county scope.

### Resolved P2 — Postal-city share links cannot restore the selected city

Inspected `location.js:181` creates synthetic town IDs for newly supported postal-city views:

```js
id: "postal-city-" + query.replace(/\W+/g, "-")
```

Inspected `app.js:315` serializes any resolved town using that ID:

```js
else if (result && result.town) params.set('town', result.town.id);
```

However, the `byId` map only contains curated community IDs. The synthetic ID is not registered and is not an actual postal-city name. Exact reproduction from the current source modules:

```text
resolve('Ringwood').coverage -> 'postal-city-research'
resolve('Ringwood').town.id -> 'postal-city-ringwood'
resolve('postal-city-ringwood').error -> 'unknown_location'
```

Thus selecting Ringwood initially works, but sharing or reloading `?town=postal-city-ringwood` loses the selection and falls back to an error/statewide view.

Narrow fix: serialize a town ID only when it exists in `TOWNS`; otherwise serialize the resolvable `result.location.city`. Alternatively expose a canonical `query` in resolver results and consistently serialize that. Add a browser test covering city search, share URL, reload, Back and Forward for Ringwood.

## Resolved provenance improvement

The resolver now exposes `geographySourceUrl`, but the inspected area-summary links do not render it. The footer still attributes “ZIP geography” only to GeoNames. Since district matches now come from Census TIGERweb rather than GeoNames, add a visible Census boundary-source link in the area summary or methodology and distinguish postal-place data from boundary data. This is not a blocker once the source documentation is shipped, but it makes the newly important evidence trail usable from the actual site.

## Checks and positive findings

- Loaded all production data modules and `location.js` in a fresh Node VM. No duplicate `districtCode` was found across the 441 contests inspected; the new direct-district selector therefore targets one unique office/contest.
- Build order loads federal, statewide, legislative and local data before `location.js`, and loads `data-geography.js` before `location.js`. The runtime can safely filter geographic Senate membership to current-cycle races.
- `geographyForZips` replaces inherited manual district arrays rather than merging their guesses back into sourced results. ZIP queries use their own ZCTA, while explicitly labeled community views use a union of their postal-code areas.
- Missing Census geography fails closed to statewide-only research. The postal validity directory remains separate from the boundary crosswalk.
- Source construction checks expected 17 congressional, 59 Senate-geography and 118 House-geography polygons, official layer names, projected CRS, and transfer truncation. Polygon intersection uses actual area, with very small overlaps and 2020-ZCTA limitations documented.
- New retention records use `contestType: 'retention'`; the UI presents separate Yes/No decisions, suppresses the “Compare candidates” race action, and explains that retention judges are not opponents. Will County Board District 9 exposes its two-vote limit.
- Direct district selection resets ZIP and other filters; query-string restoration explicitly clears location when a valid district is present. Candidate comparison selection remains independent.
- Roster review dates are no longer globally asserted as October 28. Per-record dates and explicit limitations survive rendering. Source-metadata checks are labeled structural rather than a factual-accuracy certification.
- The parent reported the initial 45 accuracy-UI checks passing across Chromium, Firefox and WebKit at 1440/390/320 pixels. This review did not claim those tests cover the two newly identified cases.

## Limits

The source-content and finance sweeps were still running. This review does not certify all biographies, policy summaries, endorsements, filings, county-filed offices, local write-ins or an address-specific ballot. Imported judicial/education offices whose local boundaries remain unverified must stay directory-only rather than being broadcast to every ZIP in a named county.
