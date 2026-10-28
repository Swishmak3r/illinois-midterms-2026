# Redesign verification · October 27, 2026

Historical report for the design release. Candidate research and finance were subsequently audited on October 28; see FACT_CHECK.md and the audit reports for the current data, alignment methodology and validation.

## Result

214 automated browser/data checks passed; zero failed on the final built site. Eight separate offline FEC regression tests passed. Twelve focused modal regressions also passed after a WebKit focus-timing repair. The final source bundle passes Node syntax validation and git diff --check.

The final matrix report is generated locally at output/playwright/final-checks/report.json. Screenshots and test artifacts are intentionally excluded from Git. Reproduce with the commands in README.md.

## Browser matrix

| Engine | Viewports |
|---|---|
| Chromium / Microsoft Edge | 1440×1000, 768×1024, 390×844, 360×800, 320×740 |
| Firefox | Same five sizes |
| WebKit | Same five sizes |

All six research views were checked at every size for horizontal page overflow and usable controls. Modal sizing, four-candidate internal table scrolling, dark mode and unhandled errors were checked at each size. Desktop and 390px phone contexts received the full interaction suite.

This is browser-engine and viewport/touch emulation on the Windows host. It does not certify physical Android, iOS or macOS hardware. The application uses standard browser APIs and self-hosted assets, with no platform-specific runtime dependency.

## Behavior covered

- All 1,575 bundled Illinois ZIP codes and their ZIP+4 variants.
- Representative urban/rural lookups; invalid, unknown and out-of-state inputs; approximate coverage and statewide fallback.
- Ambiguous place choices, keyboard autocomplete and merged overlapping research areas.
- Filters, empty states, URL restoration, Back/Forward and location-preserving reset.
- Four-candidate comparison limit, removal, shared reload and internal horizontal scrolling.
- Dialog focus trap/restoration, Escape and touch close targets. A redundant next-frame focus reset was removed after reproducing a Safari/WebKit race.
- Successful and denied clipboard operations, manual-copy fallback, native mobile sharing cancellation and sharing during an immediate text search.
- Denied local storage, theme controls, reduced motion and print layout.
- No unhandled JavaScript errors in the final matrix.

## Finance/build checks

The FEC fixtures cover complete pagination, malformed/duplicate/partial results, encoded keys, bounded requests, truthful API failures, error cache policy, atomic snapshot replacement, retained prior data on failure and script-safe serialization. No live data was fabricated or overwritten during the tests.

The build now includes the postal resolver and local CSS, checks the exact combined JavaScript and generates index.html atomically without mutating source data or writing to a developer-specific machine path. The latest upstream automated snapshot at commit 802f6f0 was preserved before publication.

## Visual review

Desktop first-paint and settled screenshots plus phone, candidate, issue, money, community, guide, comparison and dark-mode views were inspected. Both local font families loaded. Final desktop and phone captures reported no failed asset requests, no broken images and no document overflow.

MotionSites rubric (editorial judgment, not automated scoring): first glance 9; signature 9; typography 9; composition 8.5; color 9; media integration 8.5; restrained motion 8; mobile 8.5; copy 8.5; polish 8.5. Mean 8.65, no category below 7.

Specific refinements: minimum 44px action targets, mobile date no-wrap, narrow search width, aligned phone candidate facts, larger substantive mobile copy, safe comparison-table containment, short lookup placeholder and adaptive filters.

## Material content limitations

Postal geography is a directory, not a certified district/ballot crosswalk. 583 listed ZIPs connect to existing community research; 992 show statewide research without invented district assignments. Source provenance and limits appear in GEOGRAPHY_SOURCES.md.

Original candidate, issue, endorsement and PAC prose remains curated research, not independently fact-checked content. The redesign labels that limitation, removes fabricated political-alignment scores and missing-position fallbacks, and directs visitors to official address-based election resources. Dated matched FEC figures are distinguished from unmatched curated finance summaries.

Official procedural references are linked in the voting guide. Local officials remain the source of record for current polling hours, registration requirements, locations and ballot eligibility.
