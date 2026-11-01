# Complete state and local finance source comparison — November 1, 2026

All 126 published Illinois state/local committee records match their cited official SBE summary filings. No numerical correction is required. This verifies the site's transcription and committee association; it does not independently audit the truth of campaigns' filed transactions.

## What was verified

- Retrieved all 126 official report URLs and committee-detail URLs directly over HTTPS. SBE's default committee page shows only five recent documents; expanded to all filings where needed to verify the older quarterly link rather than treating the first page as complete.
- Compared 124 electronic report summaries field by field: committee name, report type, coverage start/end, receipts, expenditures, ending cash, debt and in-kind contributions. All 620 electronic monetary comparisons match exactly. All 124 reported beginning-funds-plus-receipts-minus-expenditures balances reconcile to ending funds to the cent.
- Compared every committee's ID and name, confirmed that the official committee filing table actually links the cited report, and compared the report filing timestamp: all 126 match. All committees are currently marked Active in the source.
- Read the source committee candidate/office rows for all 126 associations against the current published candidate and race. Each is the same candidate and relevant office; historical and additional offices appear on many committee records, so the site's single-committee/nonexclusive-office scope must remain visible. For example, Citizens for Giannoulias lists Secretary of State and Chicago Mayor, among historical offices. Ordinary name variants include David/Dave Vella, Gabriella/Gabby Shanahan, James/Jimmy Ford and Kambium/Kam Buckner. SBE's Ram Villivalam entry spells his surname “Villivalim”; its committee purpose, first name, office and Senate District 8 identify the same person, not a substituted candidate.
- Reviewed all returned current-quarter filing rows for later amendments. No newer quarterly filing was listed than the one used by the site. Jehan Gordon-Booth, Laura Kaemmerer and Peter Coolidge already use the later amendment rather than their original report.
- Rendered the two official scanned D-2 summary pages with Poppler and visually read them. Their recorded SHA-256 hashes bind the manual transcription to the actual downloaded PDFs. Future changes to either PDF require another visual review; the checker does not accept the old manual annotation against different bytes.

The final ledger contains **1,638 field comparisons with zero mismatches**, including all 126 receipts and cash balances, both paper summaries, and their committee associations. The stored JSON contains only public committee/candidate identity and aggregate summary information, not candidate addresses, signatures, or donor transactions.

## Paper filing qualifications

| Committee | Verified summary | Source qualifications retained |
|---|---|---|
| Friends of Michael Murphy, SBE 40838 | July 1–September 30; receipts $20; expenditures $1.28; ending funds $495.08; debt $0; in-kind blank. | The scanned form prints 408384, but SBE hosts it under 40838 and identifies the Cook County Board President candidate. A separate same-name college-trustee committee is not substituted. Blank in-kind is unknown. |
| Friends of Kari Gabbert, SBE 41017 | July 1–September 30; receipts $4,000; expenditures $2,703.35; ending funds $1,361.83; debt/in-kind blank. | The scanned form prints 4101714. The subtotal line incorrectly says $4,000 rather than $4,065.18, while ending funds reconcile to beginning funds plus receipts minus expenditures. The attached Schedule B heading starts June 1; the signed summary and official filing table specify July 1. Coverage follows the summary. |

The site already discloses the committee-number and subtotal discrepancies in `sourceNote`/`metricNote`. Display `sourceNote` as well as `metricNote` in the detailed finance view, and add Gabbert's Schedule B period qualification. Preserve the reported amounts; do not silently “correct” a source figure or turn blank debt/in-kind fields into zero.

## Dates and scope

This is a November 1 recheck of the existing quarter-specific source records; the reporting periods still end September 30, and their source filing dates remain unchanged. Most reports begin July 1; Jessica Dixon Heitman's committee begins July 11. The daily federal sync does not refresh state filings. A fresh check date is not a current bank balance or a new reporting period.

The 126 records are complete verification of the site's displayed state/local totals, not complete finance coverage of the expanded candidate directory. Newly added profiles without verified committee data must remain unavailable. Receipts include cash inflows beyond individual donations, and in-kind contributions are separately reported. These are single-committee quarterly totals, not election-cycle totals, combined tickets, or independent spending supporting candidates.

## Reproduction and artifacts

Run `node --use-system-ca scripts/check-state-finance-sources.cjs` with network access. The script uses four concurrent workers, records retrieval dates and source byte hashes, checks filing pagination, compares source values, and exits nonzero on mismatches or unreviewed source changes. Paper annotations are accepted only if their byte hashes match the fresh official PDFs.

- `audit/2026-11-01-finance-full-state.json`: all 126 sanitized source comparisons and committee associations.
- `audit/2026-11-01-finance-full-paper.json`: SHA-bound visual transcriptions of the two paper summaries.
- `audit/2026-11-01-finance-full-federal.json` and `.md`: separate complete federal check; all 223 fresh official totals and all 38 mapped identities match, with no production correction required.

The official report and committee URLs are preserved per record in the ledgers. No production data file was edited by this audit.
