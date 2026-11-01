# Illinois 2026 election field guide

A static research guide for Illinois' November 3, 2026 general election.

[Live guide](https://swishmak3r.github.io/illinois-midterms-2026/)

## Current accuracy audit

The November 1 repair contains 465 contests and 645 candidate/ticket profiles, including all 17 U.S. House districts, all 118 Illinois House districts, all 39 current-cycle Senate contests, and all active judicial/regional-superintendent offices in the captured Illinois SBE source. County-filed offices, local write-ins and referendums remain selective. Five county roster-source gaps are explicitly disclosed.

All 400 retained issue statements and 118 endorsements were checked against actual source content; eight retain explicit qualifications. All 126 displayed state/local financial reports, 223 FEC totals and 38 FEC identities were freshly reconciled. These checks establish source fidelity, not independent truth of campaign claims or a 100% personal-ballot guarantee. See [FACT_CHECK.md](FACT_CHECK.md) for exact scope, corrections, qualifications and source ledgers.

## Develop

Requires Node 20+ and Python 3.10+. No production dependencies or external CDN.

    npm ci
    npm run build
    npm run dev

Open http://127.0.0.1:4173/. Edit source modules, then rebuild index.html. The build validates JavaScript syntax and never mutates datasets. All assets/fonts are self-hosted.

## Verify

    npm run verify
    npm run test:data
    npm run browsers:install
    npm test
    npm run test:audit-ui
    npm run test:accuracy-ui

Browser commands require the preview server. Windows Chromium checks use installed Edge. Firefox/WebKit binaries are installed in .cache/browsers. Existing browser overrides and --engines/--viewports/--match options remain supported. Tests cover Windows browser engines and viewports, not physical devices.

`verify` compares every state-filed active roster with the sanitized official snapshot; checks all 1,575 postal ZIPs, Census overlaps and fail-closed lookup; validates every retained issue/endorsement against the exact reviewed text; checks evidence metadata, alignment votes and finance safeguards; and builds the page. CI checks the committed index.html matches its sources. Passing offline tests does not assert that external pages were freshly reviewed on that run.

For a fresh network comparison of the 126 state/local filings:

    node --use-system-ca scripts/check-state-finance-sources.cjs

The two paper summaries require visual review if their source bytes change. Never replace missing totals with zero or extend reporting periods merely because a source was rechecked.

## Geography and browsing

The postal directory has 1,575 Illinois ZIPs. Census 2020 ZCTAs exist for 1,396; these are intersected with official 2026 congressional/state legislative/county polygons. 179 unmatched postal ZIPs show statewide results. Community and postal-city views combine only their listed ZIP areas. All results remain approximate; only an election authority can establish address-specific eligibility.

Direct district/office selection clears ZIP and other filters. County filtering uses documented district/county overlaps and includes statewide offices. Offices lacking confirmed county mapping remain accessible in the full directory. The former manually classified region filter has been removed; new share links use `county=Cook`, for example. Postal-city share links preserve a resolvable city name.

Rebuilding Census intersections requires Python requests+Shapely and network access, or the cached source responses:

    python scripts/build-geography-audit.py
    node scripts/refresh-geography-towns.cjs
    npm run test:geography

Review layer vintage, source hashes, coverage changes and scope before accepting a newly generated crosswalk. It is never an official personal-ballot lookup. [GEOGRAPHY_SOURCES.md](GEOGRAPHY_SOURCES.md) documents the method.

## Source maintenance and publication

Keep source publication dates, review dates and financial coverage periods separate. Source-ledger tests deliberately fail when retained claim text changes without a matching review. Dated reconstruction scripts in the audit record are historical transformations, not an unattended update pipeline.

Build and commit index.html together with source, data and assets. GitHub Pages serves the main branch root. The existing daily FEC workflow updates only its verified federal snapshot and rebuilds. A failed fetch preserves the prior data/date. It does not refresh state filings, biographies, local rosters or endorsements.

No street address is collected. Lookup/comparison state remains in the browser and share URL; only theme preference is stored locally. The artwork is decorative, not a district map. See assets/CREDITS.md for attribution and [QA_REPORT.md](QA_REPORT.md) for validation.
