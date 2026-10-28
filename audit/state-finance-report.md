# Illinois state campaign-finance audit

Checked October 28, 2026. This audit verifies reported committee figures, not the truth of every underlying donor classification or transaction in a filing.

## Verified coverage

57 current third-quarter D-2 reports were matched to the full candidate name and office/district on the Illinois State Board of Elections committee detail page: 11 statewide candidates/tickets and 46 legislative candidates. Structured source records are in state-finance-combined.json.

All reports end September 30, 2026. Most start July 1; Jessica Dixon Heitman's newly formed committee report starts July 11. Exact start/end dates and filing timestamps are retained for every record.

Five monetary fields in each of the 57 records were checked against the saved official page (285 comparisons), and beginning funds plus receipts minus expenditures reconciled to ending funds within one cent in all 57 reports. state-finance-validation.json records this check.

## What the figures mean

- Receipts and expenditures cover the identified single committee and report period. They are not election-cycle fundraising, a combined gubernatorial ticket total, a caucus war chest, or independent expenditures supporting a candidate.
- Ending funds are the report's funds available at close, as of September 30; they are not a current bank balance.
- SBE reports in-kind contributions separately from total receipts. We preserve that field separately instead of adding it to receipts.
- Later A-1 disclosures are not added to quarter totals, which would require reconciliation and could double count.
- A committee can cover more than one office or campaign. Citizens for Giannoulias also lists Chicago mayor; its totals must not be presented as money exclusively for the secretary-of-state race.
- Governor-ticket figures are the governor candidate committee, not the sum of both running mates.
- The opaque reportId is the actual SBE filing URL identifier, not an invented numerical FiledDocID.

## Corrections

The old site mixed unsupported cycle, self-funding, cumulative, and post-primary numbers. Replace those with the labeled quarterly figures in the structured map. No old dollar figure is retained merely because it appears plausible.

Pritzker's committee reports $65,048,259.49 in third-quarter receipts and $44,417,830.63 in ending funds, replacing the unsupported $90.5 million cycle/self-funding and $68.1 million cash claims. Bailey's committee reports $1,244,428.69 in receipts and $431,787.79 in ending funds. These are quarter-specific committee figures, not a claim about the entire campaign cycle.

Leadership amounts previously combined personal campaign and party/caucus entities. Replacement records contain only the identified candidate committee. Full names, office, and district—not surname similarity—were checked on the SBE committee detail page.

No exact active candidate committee with a verified current report was established for Vince Romano, Tom Lally, Pete Donaghue, Anna Schiefelbein, or Timothea Papas. The latter two entered the corrected statewide roster during this audit and were also checked. Their amounts must remain unavailable, not zero. No committee for a different person with a similar name was substituted.

The roster audit removes candidates and offices incorrectly shown in the original data, including several state Senate districts not on the 2026 ballot. Records for new verified nominees Patrick Hanley, Saba Haider, Brian Scopa and Brad Beekman are included. The final site must bind records only to IDs still present in the corrected roster.

## Provenance and limitations

Official committee pages and D-2 report pages were fetched directly from https://www.elections.il.gov/CampaignDisclosure/. The browser search tool returned 403 for some pages; ordinary HTTP retrieval returned the public official page successfully. Pages were read and fields parsed; source links are preserved in each record. Public source-page caches are local in .cache/sbe-source-pages and should not be published, avoiding unnecessary replication of filing addresses.

Official SBE search and committee detail pages establish identity. Third-party search results were used only as discovery leads for initial statewide committee IDs; no third-party financial amounts are used in the published records.

These are filed figures as accessible on the check date. Amendments, later reporting periods, and newly filed committees can change coverage. The existing daily OpenFEC automation does not update state reports; the site must keep the state check date separate from federal sync time.

County/local individual committees are reported separately in local-finance.json and its audit report: all 79 local candidates were checked, with 69 verified current reports and 10 current amounts withheld. All 335 financial fields in 67 electronic reports match official source pages; two paper reports were visually checked. No aggregate slate figures should return to the site. Closed committees and historical final reports must not be displayed as current-quarter candidate balances.

The final merged integration map is state-local-finance.json: 126 current-quarter committee reports, all IDs present in the corrected 141-candidate state/local roster. The remaining 15 candidates have unavailable finance; no zero is imputed. This includes 620 automated monetary source-field comparisons, 124 successful electronic-report balance equations, and two manually checked paper filings.
