# Local candidate campaign-finance verification

Checked October 28, 2026. All 79 individual candidates in the rewritten Cook, collar, northern/central and southern/central local datasets were reviewed. The publication map contains 69 current third-quarter committee reports. Ten candidates have no verified usable current amount; missing evidence is not zero. A historical final report for Mike Babcock is retained only in the underlying southern audit evidence and excluded from the publication map.

## What the amounts mean

Every retained amount belongs to one named Illinois State Board of Elections committee and the exact report window in the JSON. The committee candidate/office table or stated committee purpose was checked before association. These figures are not combined slates, caucus funds, election-cycle totals, proof of an endorsement, or a judgment about a candidate. Receipts, spending, debt, in-kind contributions and ending cash remain separate. Subsequent A-1 contributions were not added to quarterly totals, avoiding double counting.

The reporting date and clock time are transcribed as displayed by SBE. An amended or later filing may change them. Raw official source pages are cached under .cache/sbe-source-pages, excluded from published source artifacts.

## Cook County: 12 verified reports from 13 candidate checks

| Candidate | Committee | Q3 receipts | September 30 funds | Official report |
|---|---|---:|---:|---|
| Toni Preckwinkle | Preckwinkle for President (21644) | $66,649.04 | $86,043.05 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3h%2bmHeqBS24mw%3d%3d) |
| Pat Hynes | Hynes for Assessor (36733) | $82,100.00 | $115,253.14 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3jqkh1sjlPCmw%3d%3d) |
| Thomas Dart | Friends of Dart (19319) | $22,857.49 | $442,016.25 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3jH8gmvTyuv8A%3d%3d) |
| Monica Gordon | Friends of Monica Gordon (35763) | $32,000.00 | $101,843.83 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3gNHa37BRdmNg%3d%3d) |
| Maria Pappas | Committee to Elect Maria Pappas (6051) | $0.00 | $226,302.83 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=hlDCrs0%2bvQ%2bMi%2f4OSQnfLQ%3d%3d) |
| Elizabeth 'Liz' Nicholson | Friends of Liz Nicholson (40500) | $9,975.00 | $19,263.93 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3i6Ccw3Cye9mQ%3d%3d) |
| Elyse Hoffenberg | Friends of Elyse Hoffenberg (34231) | $94,275.00 | $78,218.77 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=hlDCrs0%2bvQ%2fpo0nVcZd8MA%3d%3d) |
| Elizabeth 'Liz' Doody Gorman | Liz for the 17th (22716) | $70,160.12 | $150,545.14 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3g30ksUVZqZ1w%3d%3d) |
| Michael Murphy | Friends of Michael Murphy (40838) | $20.00 | $495.08 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/CDPDFViewer.aspx?FiledDocID=n413reOGEEOGSqtDExaJrA%3d%3d&DocType=y4%2bQAKnRNtkuIDOSztTByg%3d%3d) |
| Brad Sandefur | Sandefur for Sheriff (37056) | $4,171.99 | $4,659.69 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=n413reOGEEPrMLIZ5mWSmg%3d%3d) |
| Drake Warren | Friends of Drake Warren (40649) | $12,750.00 | $7,962.91 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=4U6HVoq%2bn%2fwG2%2bbi1IvA4Q%3d%3d) |
| Miranda Hernandez | Friends of Miranda Hernandez (40923) | $0.00 | $30,835.93 | [SBE filing](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3hDDi%2fdXumlyw%3d%3d) |

Cook County identity and transcription checks:

- Michael Murphy: selected committee 40838, officially linked to the Cook County Board presidency. Rejected the separate same-name committee 29460, which identifies a college-trustee campaign. The official paper D-2 was visually read: $20 receipts, $1.28 spending, $495.08 ending cash. The paper form types 408384 while the official hosting record is 40838; candidate name and identity match. Blank in-kind remains null.
- Elizabeth Gorman: committee 22716 uses the title “Liz for the 17th”, so surname-only committee searching would miss it. Its purpose explicitly identifies the Cook County seventeenth district.
- Nico Tsatsoulis: active and all-status surname searches yielded no committee record. Searches for Nico also did not establish a matching candidate committee. No amount is inferred, and a zero from third-party summaries is not reused.

## Remaining county coverage

- Collar counties: 18 verified current reports of 19 candidates. See [detailed audit](local-collar-finance-report.md). David Penaherrera has a paper report with conflicting period dates and no current Q3 report verified; its amounts are withheld.
- Northern and central counties: 16 verified current reports of 17 candidates. See [detailed audit](local-north-finance-report.md). Rachael Parker only had historical closed committees verified. Kari Gabbert’s scanned current report was visually read; the report’s arithmetic discrepancy and blank fields are preserved in source notes.
- Southern and central counties, including Jackson: 24 reports of 30 candidate checks, comprising 23 current quarters and one final report. See [detailed audit](local-south-finance-report.md). Five candidates had no exact current committee match (Byron Clark, Gregory Worrell, Gary Hursey, Myki Rhodes, Tammy Ehlers). Kathy Michael’s latest verified quarterly was from 2019 despite committee reactivation in October 2026; obsolete values are excluded.

## Historical report must not become a current zero

Mike Babcock’s committee 32096 final report covers July 1–8, 2026. Its reported zero ending funds is historical closure information, not a verified current campaign balance. The record is excluded from local-finance.json and from current finance cards. The southern audit retains its historical filing details.

## Machine-readable result

local-finance.json is keyed by the final individual candidate IDs. It merges local-cook-finance.json, local-collar-finance.json, local-north-finance.json and local-south-finance.json without duplicate keys, excluding the historical closed-committee record for Mike Babcock. Every retained record contains its source URL, committee ID, report identifier, exact coverage dates, filed date and the October 28 verification date.

## Validation

All 69 publication IDs match the final local candidate dataset. The 67 electronic reports were rechecked against locally cached official HTML: all 335 exported financial fields matched exactly and all 67 beginning-funds-plus-receipts-minus-spending balance equations reconciled within one cent. Michael Murphy and Kari Gabbert are the two visually checked paper filings; their transcription notes remain attached. The validation summary is local-finance-validation.json.
