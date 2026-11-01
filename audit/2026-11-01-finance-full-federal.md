# Federal finance full-source check — November 1, 2026

The fresh official OpenFEC response exactly matches all 223 bundled Illinois candidate-total records across every retained field. All 38 explicitly mapped FEC candidate identities also match the official 2026 identity query. No production correction is needed from this check.

## Source verification performed

- Retrieved every page of the [official Illinois 2026 two-year candidate totals query](https://api.open.fec.gov/v1/candidates/totals/?state=IL&cycle=2026&election_full=false&per_page=100&page=1&sort=-receipts): 3 pages, 223 distinct records, stable pagination counts.
- Compared candidate ID, name, office, district, party, state, cycle, two-year period, receipts, disbursements, cash on hand, coverage start and coverage end for every bundled row. Numeric strings were compared numerically. There were **zero field differences**, no added or missing rows, and no duplicate candidate IDs.
- Retrieved the official `/v1/candidates/` endpoint for all 38 explicitly mapped candidate IDs with `cycle=2026`; all 38 were returned on one page. Candidate name, office, district, party and state match each stored identity exactly. The archived JSON records the complete query URL without the public demonstration API key.
- Checked all current profile-to-identity mappings against their current federal contest's office and district. All 38 agree. No identity is attached to two totals records.
- Checked numerical validity and source date ordering for all 223 totals rows, plus `hasTotals` consistency for all 38 identity records. No errors found.

The sanitized JSON companion retains the 223 public candidate-level summary records, the 38 identity-check results, source URLs, retrieval timestamp, raw-response SHA-256 hashes, pagination metadata and differences arrays. It does not retain candidate addresses, donor transactions or API credentials.

## Display coverage

At this check, the production federal roster contains 44 candidate profiles, including separately labeled write-in declarations.

| Current profile finance state | Count |
|---|---:|
| Explicit FEC identity and one matching totals record | 33 |
| Explicit FEC identity but no totals record | 5 |
| No explicitly verified FEC identity in this site's mapping | 6 |

The five mapped candidates without a totals result are Michael Scott Noack (`H6IL02389`), Lupe Castillo (`H4IL04117`), Ed Hershey (`H2IL04178`), Tommy Hanson (`H2IL05241`) and Carl Lambrecht (`H6IL10176`). Their amounts must remain unavailable, not zero.

The six unmapped profiles are John Elleson, James Jay Mote, Alexandria Keating-Sofiakis, John Minarcik, Thomas Rudd and Brad Ahrens. This check confirms that the site does not display a guessed financial match for them. It does not establish that these people have no FEC registration or filings; locating additional identities was outside this reconciliation's scope.

## Dates and limitations

The bundled snapshot is dated October 31, 2026, 16:00 UTC. A November 1 re-fetch produced identical data. Keep the original retrieval label unless the actual production snapshot is intentionally regenerated; this review does not silently relabel the old bundle as a new fetch.

Individual coverage periods vary. The official `cycle=2026&election_full=false` query even contains one non-displayed primary candidate whose reported coverage starts November 25, 2024. That is an exact official-source value, not a reason to replace the filing date with January 1, 2025. The UI accurately calls this the “2026 two-year query” and shows the returned coverage dates. Forty-nine other, non-displayed query records have no coverage end; the UI's existing guard does not attach a total without an end date. All 33 matched current candidate records have a coverage end.

This is verification against the FEC's currently published summary data, not an independent audit of campaigns' underlying transactions. FEC registration and the presence of a totals record do not establish general-election ballot eligibility. Federal financial receipts are not solely contributions, and cash on hand is the filing-period balance, not a real-time amount. The source can change after the recorded retrieval.

Artifacts: `audit/2026-11-01-finance-full-federal.json` contains the exact sanitized source comparison. No production files were edited by this check.
