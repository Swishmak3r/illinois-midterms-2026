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
    npm test

Browser checks require the preview server above. On Windows, Chromium checks use installed Microsoft Edge; Firefox and WebKit binaries are installed in .cache/browsers. On other systems install Chromium as well with Playwright, or set CHROMIUM_CHANNEL / CHROMIUM_EXECUTABLE_PATH. The harness accepts --engines, --viewports and --match for focused reruns. NODE_PATH may point to an existing Playwright 1.62.1 installation.

The browser matrix covers Chromium/Edge, Firefox and WebKit at desktop, tablet and 320/360/390px phone widths. These are browser-engine and viewport tests, not physical-device certification for Android, iOS or macOS.

## Data and limits

- The bundled postal directory contains 1,575 Illinois ZIP records. It is geographic context, not a USPS validation service or district boundary database.
- A ZIP with a curated community association shows possible area research. Overlapping associations are merged. A valid Illinois ZIP without that association shows statewide races, not an invented local district.
- Unrecognized and out-of-state codes receive a clear error and statewide-only research. Official address-based lookup is always available.
- Candidate, issue, endorsement and PAC descriptions are inherited curated research. They have not all been independently verified. Local entries sometimes combine offices or slates and are labeled as overviews.
- Political alignment percentages inferred from party membership have been removed. Missing issue positions stay missing.
- FEC amounts are a dated bundled snapshot. Full-name/identity, party, office and district must match before a filing is attached. Unmatched curated finance figures are labeled unverified.
- The scheduled OpenFEC job fetches every page, validates completeness and atomically replaces the snapshot. A failed fetch retains prior content and date. The optional Vercel API is not called by GitHub Pages.
- Election-day hours and procedural information link to official sources. The local election authority is the source of record for a person's ballot and voting requirements.
- No street address is collected. Lookup and comparison state stays in the browser and share URL. Only theme preference is stored locally.

See GEOGRAPHY_SOURCES.md and assets/CREDITS.md for data, artwork and font attribution.

## Publish

Build and commit index.html together with its source, assets and data changes. GitHub Pages serves the main branch root. The .nojekyll file preserves plain static hosting. The existing scheduled finance workflow rebuilds index.html after a successful update.

The two local fonts and illustration are self-hosted. The app has no CDN JavaScript or CSS dependency, no account requirement and no analytics request.
