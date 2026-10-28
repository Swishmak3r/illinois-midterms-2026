# Illinois 2026 election field guide

A static, responsive research guide for Illinois' 2026 general election.

Live: https://swishmak3r.github.io/illinois-midterms-2026/

## Develop

Requires Python 3.10+ and Node 20+. No framework or production package install is needed.

    python build.py
    node scripts/serve.cjs

Open http://127.0.0.1:4173/?zip=60647. Edit template.html, styles.css, app.js, ui.js and the data modules, then rebuild. index.html is generated. The build checks JavaScript syntax and never edits source datasets or machine-specific folders.

## Checks

    npm install
    npm run browsers:install
    npm run test:data
    python scripts/test_fec_sync.py
    node scripts/test-fec-api.mjs
    npm run test:evidence
    npm run test:alignment
    node scripts/check-audit-ui.cjs
    npm test

Browser checks require the preview server above. On Windows, Chromium checks use installed Microsoft Edge; Firefox and WebKit binaries are installed in .cache/browsers. On other systems install Chromium as well with Playwright, or set CHROMIUM_CHANNEL / CHROMIUM_EXECUTABLE_PATH. The harness accepts --engines, --viewports and --match for focused reruns. NODE_PATH may point to an existing Playwright 1.62.1 installation.

The browser matrix covers Chromium/Edge, Firefox and WebKit at desktop, tablet and 320/360/390px phone widths. These are browser-engine and viewport tests, not physical-device certification for Android, iOS or macOS.

## Data and limits

- The bundled postal directory contains 1,575 Illinois ZIP records. It is geographic context, not a USPS validation service or district boundary database.
- A ZIP with a curated community association shows possible area research. Overlapping associations are merged. A valid Illinois ZIP without that association shows statewide races, not an invented local district.
- Unrecognized and out-of-state codes receive a clear error and statewide-only research. Official address-based lookup is always available.
- Candidate identities, retained issue statements, endorsements and committee descriptions were reviewed against linked primary sources on October 28, 2026. Each retained issue has field-level evidence. Campaign statements establish what a candidate says; they do not independently prove claimed outcomes. Unsupported inherited claims were removed.
- Local slates were split into individual office contests. Coverage is selective, not a certified complete ballot. Declared write-ins are separately identified and authority-specific eligibility limits are displayed. Some roster completeness/source-age limits remain explicitly noted.
- Trump policy alignment is an equal-weight sample of six specific Trump-backed House measures from January–July 2025. It is a historical legislative comparison, not an overall ideology, loyalty or endorsement rating. Scores require at least three documented measures; coverage and all underlying evidence are visible. No score is inferred from party. See audit/alignment-methodology.md.
- Federal amounts are a complete, dated OpenFEC snapshot for the 2026 two-year query, matched by verified candidate ID, office, district and FEC party. Display-party labels do not override official FEC identity. Missing totals or missing filing coverage remain unavailable, not zero.
- Verified Illinois SBE amounts describe one committee's July–September 2026 quarterly report. They are not two-year totals and may include committee activity beyond the current race. Receipts, cash, report dates, source links and scope are shown; donations, in-kind support, endorsements and outside spending are not conflated.
- The scheduled OpenFEC job fetches every page, validates completeness and atomically replaces the snapshot. A failed fetch retains prior content and date. The optional Vercel API is not called by GitHub Pages.
- Election-day hours and procedural information link to official sources. The local election authority is the source of record for a person's ballot and voting requirements.
- No street address is collected. Lookup and comparison state stays in the browser and share URL. Only theme preference is stored locally.

See GEOGRAPHY_SOURCES.md and assets/CREDITS.md for data, artwork and font attribution.
See FACT_CHECK.md for the October 28 audit, corrections, verification limits and source reports.

## Publish

Build and commit index.html together with its source, assets and data changes. GitHub Pages serves the main branch root. The .nojekyll file preserves plain static hosting. The existing scheduled finance workflow rebuilds index.html after a successful update.

The two local fonts and illustration are self-hosted. The app has no CDN JavaScript or CSS dependency, no account requirement and no analytics request.
