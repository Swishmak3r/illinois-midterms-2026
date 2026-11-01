# Release verification — November 1, 2026

All required release checks passed. These are software/source-parity tests plus the separately documented human-style semantic source audit; test counts alone do not establish factual accuracy.

| Validation | Result |
| --- | --- |
| General browser/data suite | 214 passed, 0 failed |
| Accuracy-specific UI suite | 63 passed, 0 failed |
| Existing source/finance/alignment UI suite | 36 passed, 0 failed |
| Legislative source parity | All 118 House and 39 current-cycle Senate districts; all 232 active candidates |
| Federal/statewide source parity | All 53 active individual SBE records; 50 printed-choice profiles; 14 authority-specific write-in profiles separately checked |
| Judicial/education source parity | All 211 active SBE offices and 219 candidate rows; 131 separate retention questions |
| County-filed coverage | 74 represented contests; 69 current-source checks and five explicit original-source gaps |
| Geographic integrity | All 1,575 postal ZIPs, 1,396 Census overlaps, 179 explicit fallbacks, 70 community unions, all 194 geographic districts |
| Retained substantive content | Exact source-ledger match for 518 claims: 400 issues and 118 endorsements; 510 verified and eight qualified; zero unresolved |
| Source metadata | 465 contests, 645 profiles, 3,561 evidence entries; zero structural errors |
| Alignment regression | 9 passed, including all scored votes against archived official XML |
| Finance regression | 10 passed |
| Fresh finance source audit | 126 state/local reports, 1,638 comparisons, 223 FEC totals and 38 identities: zero mismatches |
| Build and diff | JavaScript syntax valid, portable index rebuilt, git diff whitespace check passed |

## Browser and visual review

Edge/Chromium, Firefox and WebKit were exercised on Windows at 1440px desktop, 768px tablet and 390/360/320px phone widths. Focused accuracy checks used 1440/390/320px. These are browser-engine/viewport checks, not physical-device certification.

Checks include ZIP+4, invalid/out-of-state input, missing Census geography, autocomplete ambiguity, history/URL synchronization, county filtering, complete district selection, Ringwood postal-city share/reload, separate Yes/No retention decisions, multi-seat vote limits, source links, missing-versus-zero finance/alignment, comparison containment, focus traps, storage denial, clipboard/native-share fallbacks, dark theme, print controls and no script errors/overflow.

Independent integration review found two defects during development: newly added districts disappeared under unsupported manual region filtering, and synthetic postal-city IDs broke shared links. Both were corrected and independently rechecked. The replacement county selector uses Census county overlaps; all 786 synthetic postal-city names round-trip correctly. [Review](audit/2026-11-01-integration-review.md).

Visual inspection covered Bolingbrook 60490, House District 98 and a separate Will judicial retention question at desktop/mobile sizes. A narrow-phone selected-district note wrapping issue was fixed and the 63-check focused suite rerun successfully.

## Reproduce

Start `npm run dev`, then run:

    npm run verify
    npm test
    npm run test:audit-ui
    npm run test:accuracy-ui

Generated local reports: output/playwright/final-accuracy-release/report.json, output/playwright/factcheck-features/report.json, output/audit/accuracy-ui.json and output/audit/evidence-coverage.json. The scripts reproduce these ignored test artifacts. CI runs offline source integrity and verifies the committed static build; it does not silently claim a new external-source review.

See [FACT_CHECK.md](FACT_CHECK.md) for factual scope and remaining qualifications. The [October 27 report](audit/2026-10-27-qa-report.md) is preserved as historical evidence.
