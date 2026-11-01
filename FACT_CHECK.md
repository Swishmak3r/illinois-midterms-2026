# Source audit — November 1, 2026

This release corrects Antigravity commit `d94c1aa` and rechecks retained research against actual source content. The directory contains **465 contests and 645 candidate/ticket profiles**. It is a research directory, not a certified personal ballot or a guarantee of complete local coverage.

## Verified coverage

| Scope | What was checked |
| --- | --- |
| Federal and statewide | All 17 U.S. House districts, U.S. Senate, and five statewide offices match the active Illinois SBE list. The 53 individual SBE records become 50 printed-choice profiles because governor/lieutenant-governor candidates are joint tickets. Fourteen documented write-in profiles are separately labeled and authority-limited. |
| Legislature | All 118 House districts and all 39 Senate contests listed for 2026: 157 races and 232 active candidates. Added 124 missing races. Incumbency separately compared with all 177 official ILGA member entries; indexed-source limits recorded. |
| Judicial and regional education | Every active office in the SBE source: 211 offices and 219 active candidate rows. All 131 retention questions are separate Yes/No decisions. |
| County-filed offices | All 74 represented contests checked against current official sources November 1. The five Cook/McHenry source-access gaps are closed. Local coverage remains selective. |
| Retention research | All 131 judges matched to 2026 professional assessments; 200 primary-source ruling examples for 128 judges, including 13 for Will County. Three documented research gaps remain. Historical party facts and public statements are separately sourced. |
| Issues and endorsements | All 400 issue summaries and 118 endorsement entries reconciled to semantic source-review ledgers: 510 directly supported, eight supported with explicit qualifications, zero unresolved retained claims. |
| State/local finance | All 126 displayed committee reports: 1,638 comparisons, zero mismatches, including two visually reviewed scans. |
| Federal finance | All 223 bundled FEC totals and all 38 explicit identities compared with fresh official data: zero mismatches. |
| Geography | Official Census polygon intersections for 1,396 of 1,575 postal ZIPs. The other 179 have no ZCTA match and fall back to statewide results. All 70 community groups use sourced unions. |

The primary roster source is the [Illinois SBE general-election list](https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=sejIrI%2BQmww%3D). All 528 rows were retrieved; active/removed/withdrawn status was preserved and candidate addresses omitted. [Sanitized snapshot](audit/2026-11-01-roster-sbe.json).

## Material repairs

- Replaced manual ZIP guesses with reproducible [Census TIGERweb](https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Legislative/MapServer) overlaps. ZIPs 60490, 60440 and 60446 no longer inherit a shared community list. For example, 60440 includes DuPage and Will research; 60446 no longer incorrectly includes HD-97. No ZIP assigns a voter's primary district.
- Removed blanket county assignment of board districts, judicial subcircuits and school regions. A countywide specimen contains multiple ballot styles and does not prove address eligibility.
- Corrected false challenger/incumbent labels for Thomas Dart, John Idleburg and Jon Albee; open-seat classifications including SD-27/33; Mike Kelley's party; and Michelle Stiff and Jason Helland's professional descriptions.
- Replaced wrong-person ILGA biography links for Natalie Manley and Dagmara Avelar. Narrowed policy statements to what their sources actually say. Corrected primary/general-election and individual/joint-ticket endorsement distinctions.
- Removed unsupported AFL-CIO endorsements for Amy Christiansen and Sonni Choi Williams. Corrected UDP's committee classification, removed unsupported PAC dollar assertions, and distinguished AIPAC's reported announced plans from a completed shutdown.
- Added direct district/office browsing and a county filter based on documented overlaps. Fixed postal-city share links and record-specific review dates. Link counts are not factual proof.
- Corrected mail-request versus in-person application deadlines and preserved missing-postmark alternatives. [Voting rules audit](audit/2026-11-01-voting-rules.md).
- Verified the Cook Clerk's current commissioner rosters for districts 10/16 and McHenry's certified general-election candidate PDF. Corrected Miranda E. Hernandez's full name; existing McHenry names and parties matched. [Five-gap report](audit/2026-11-01-gap-report.md).
- Corrected Knecht's retention electorate from the current 41-county court jurisdiction to the original 30-county Fourth District. Rechecked all 1,575 ZIPs and 70 communities; 130 ZIP associations were added and 287 removed. Checked all 128 circuit-retention county lists, including the Twenty-Fourth Circuit split. [Appellate geography](audit/judicial-2026/geography-review.md), [circuit scope](audit/judicial-2026/circuit-scope-review.md).
- Added retention-specific profiles with the judge's actual ruling, appeal outcome, source paragraphs and later-law caveats. Removed legislative Trump scores and generic campaign-policy rows from retention profiles. Bar polls, institutional evaluations, historical party records and political statements remain distinct.

## Explicit remaining qualifications

**Judicial research limits:** the 200 examples are selected public rulings, not complete career dockets, statistical ideology measures or reversal rates. No attributable primary ruling was located for Daniel Edward Maloney, John G. Mulroe or Pamela Reaves-Harris in the documented searches; professional reports remain available. Unknown later proceedings stay unknown. Ballot spelling differences for Dempsey and Stacey are explicitly cross-referenced to court records. [Judicial review](audit/judicial-2026/release-report.md).

**Eight content qualifications:** three La Shawn Ford positions use his accessible primary-era platform; three Kam Buckner claims have full indexed primary support while the live page returns 404; two endorsements name the governor candidate individually rather than both ticket members. Those distinctions remain in the evidence and displayed labels. [Content ledger](audit/2026-11-01-content-final.json).

**Geography:** 2020 ZCTAs approximate postal areas and may contain uninhabited land or small boundary fragments. The 2026 overlay is research context, never address certification. Community views combine listed ZIP areas, not municipal boundaries. The [official address lookup](https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx) and [election authority](https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx) determine personal eligibility, sample ballots and later changes. [Geography methods](GEOGRAPHY_SOURCES.md).

**Coverage:** county-filed offices, referendums and local write-in declarations are not exhaustive statewide. One listed candidate does not prove no eligible write-in. New minimal profiles contain official identity/office/party information; absent biographies, positions, endorsements and totals remain unknown.

**Finance:** checks establish faithful transcription and committee association, not an independent audit of campaign transactions. State figures describe a single committee and quarter, not cycle totals or amounts exclusive to one race. FEC totals use the stated two-year query, not live balances. Paper-report committee-number, subtotal and period-heading conflicts are disclosed without changing filed amounts. [State audit](audit/2026-11-01-finance-full-state.md), [federal audit](audit/2026-11-01-finance-full-federal.md).

**Alignment:** House percentages remain an equal-weight sample of six Trump-backed measures from January–July 2025, not overall ideology, endorsement or loyalty. At least three documented measures are needed; absences and unknowns are excluded. All scored votes match archived House Clerk XML. Retention judges have no numeric score: case-level policy comparisons require the same precise question and dated primary evidence. Ordinary detention, conviction, sentence or procedural outcomes do not establish personal politics. [House method](audit/alignment-methodology.md), [judicial method](audit/judicial-2026/policy-method.md).

## Reproduction

`npm run verify` checks exact roster parity, geography and failure behavior, source metadata, alignment, finance safeguards, reviewed content and the static build. These offline checks prevent regression; they do not represent a fresh live source review each run. Browser checks cover Edge, Firefox and WebKit on Windows at desktop, tablet and phone widths. [QA report](QA_REPORT.md).

Detailed reports: [rosters](audit/2026-11-01-roster-report.md), [local](audit/2026-11-01-local-report.md), [geography](audit/2026-11-01-geography-report.md), [PAC corrections](audit/2026-11-01-claims-report.md), [content](audit/2026-11-01-content-report.md), [integration](audit/2026-11-01-integration-review.md).

The [October 28 audit](audit/2026-10-28-fact-check.md) is historical. Its counts do not describe this release. No blanket 100% accuracy claim replaces these evidence boundaries.
