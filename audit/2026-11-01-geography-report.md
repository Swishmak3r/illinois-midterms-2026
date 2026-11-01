# Geography audit — November 1, 2026

## Finding

Antigravity's selected Bolingbrook district additions did not repair the statewide geography model. Existing community arrays repeatedly assigned HD-26 to northern/western Chicago, omitted multicounty territory, and expanded district-only Will County contests to whole communities. A countywide specimen ballot proves a contest exists somewhere in the county; it does not place every voter in that contest.

## Correction implemented

- Replaced all manual federal/state district arrays across 70 community groups using current official Census district boundaries intersected with 2020 Census ZCTAs.
- Added 1,396 documented ZIP-area crosswalks, including rural areas previously limited to statewide-only research.
- Preserved explicit statewide-only fallback for the 179 postal ZIPs without a Census ZCTA; no primary-district or proximity guessing.
- Isolated each ZIP query from neighboring ZIPs in its community group; fixed Bolingbrook's DuPage/Will union without assigning DuPage to 60490.
- Kept all geographic Senate memberships in the source data while showing only actual 2026 races in the interface.
- Restricted local geographic inclusion to explicitly source-supported countywide/courtwide scopes. Removed unsupported Will Board 9 / subcircuit / ROE blanket links; split retention references follow the independent retention decisions.
- Recomputed every community's county context from its source polygons and updated suggestion/result county labels consistently.
- Added county and official Chicago/suburban-Cook polygon membership for all 194 geographic congressional/state districts so new districts can participate in regional filters without biography-derived guesses.
- Added failure containment: if the geography source module is unavailable, legacy stored town arrays cannot supply guessed districts.

## Evidence and reproducibility

See [GEOGRAPHY_SOURCES.md](../GEOGRAPHY_SOURCES.md), the [source manifest](2026-11-01-geography-sources.json), and the [before/after community ledger](2026-11-01-geography-town-changes.json). The manifest records 43 exact Census requests/responses, their hashes, parameters and byte sizes. Source layer metadata and feature counts were validated: 17 defined congressional districts, 59 Senate, 118 House, 102 counties, and the official January 1, 2026 Chicago municipal polygon. Census undefined `ZZ` polygons are excluded.

The method uses unsimplified polygon intersections in EPSG:5070, with a one-square-meter minimum only to exclude negligible numeric artifacts/shared lines. All 496 small overlaps below 10,000 square meters are retained in the audit manifest. The result is an explicitly approximate research candidate set, not a claim about occupied addresses or district majority.

## Verification

`node scripts/test-geography-audit.cjs` passes all 1,575 ZIP resolutions, 1,396 mapped records, 179 missing-ZCTA fallbacks, 70 community scopes, all 17/118/59 geographic district coverage, current-cycle filtering, district-only local exclusions, separate Will retentions, and injected-corruption/source-failure scenarios.

## Remaining limits

2020 ZCTAs are statistical approximations and may differ from current mail delivery. Polygon overlap includes uninhabited/water/small boundary areas. Community alias groups are research navigation, not surveyed municipal boundaries. Countywide/courtwide research is not full local-ballot coverage. Local district contests excluded from automatic mapping remain available in the full directory and require the official address-based ballot. No claim of 100% personal ballot accuracy is justified by this data.
