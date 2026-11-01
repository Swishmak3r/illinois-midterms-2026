# Source audit · October 28, 2026

This release audits every inherited candidate, issue, endorsement, finance and PAC record. It replaces unsupported assertions with sourced statements or an explicit absence of verified evidence. It does not claim complete coverage of every Illinois contest, every endorsement, every campaign position or all late write-ins.

The resulting directory contains 100 contests and 185 candidate/ticket profiles, including distinctly labeled declared write-ins. There are 378 retained issue summaries, 110 endorsement entries, 1,066 field-level evidence entries and 384 distinct source URLs in the candidate/race/organization audit. These counts exclude the separate finance and Trump-alignment source records.

## Source rules

- Candidate status and office: election authorities' candidate lists, specimen ballots and published official legal notices. Where only an older or indexed record could be read, the limitation is retained in the profile or race note. Public-agency guides corroborate a few incomplete roster checks and are identified as such.
- Biography and policy: official office records, legislation and candidate-authored campaign pages. Campaign statements are attributed; an allegation, promised result or self-reported achievement is not silently turned into an independently established fact.
- Endorsements: the endorsing organization's announcement, with primary-election endorsements explicitly distinguished from general-election endorsements. A rating or questionnaire response is not an endorsement. An endorsement is not a contribution.
- Finance: exact FEC candidate identities and official Illinois SBE committee filings. No finance amount is inferred from affiliation, endorsements or press estimates. Federal and state figures use visibly different reporting periods.
- Missing evidence: unknown, not zero, opposition, neutrality or absence of endorsements. Inherited unsupported detail was removed rather than replaced with party stereotypes.

## Material corrections

- Added missing candidates and documented write-ins; corrected party labels and outdated biographies.
- Replaced generic party-based policy descriptions with candidate-specific source-backed statements, including positions that depart from party stereotypes.
- Removed four legislative races not on the 2026 cycle. Corrected nominees such as House 84 and Senate 9, and added missing opponents.
- Replaced combined county slates and fabricated referendum coalitions with 48 individual local contests and 79 people.
- Replaced 14 conflated PAC/donor groups with 17 separately sourced organizations. Removed unsupported Illinois-only spending totals and funding narratives.
- Completed the federal snapshot beyond the old first 100 records: 223 official FEC totals records. Queries now use a consistent two-year scope instead of mixing Senate six-year and House two-year totals.
- Removed 207 unused, unsupported town-context, mayor and population fields. Unverified local district assignments no longer appear as ZIP matches.

## Finance interpretation

The federal snapshot is a 2026 two-year OpenFEC query, not a real-time balance. Every displayed record has its actual filing coverage dates. Receipts may include loans and transfers; they are not only donations. Federal candidate registration does not establish general-election ballot qualification.

Illinois SBE figures describe a single committee's third-quarter report, July 1–September 30, 2026. They are not election-cycle totals, and the committee may support activity outside the displayed race. In-kind contributions are separate from the reported cash receipts. Later A-1 contribution notices are not added to a quarterly total or used to invent a current cash balance. The detailed profile preserves the report's scope and caveats.

The audit matched 126 state/local quarterly reports across 141 state/local profiles; the remaining 15 have no verified current-quarter total here. Federal matching uses 38 verified identities, with 33 financial totals available. Missing filings remain unavailable rather than zero.

## Trump policy alignment

The displayed percentage measures agreement within a fixed six-measure sample of Trump-backed federal legislation from January–July 2025. It does not measure every Trump policy, personal support, endorsements or a scientific ideology scale. Every measure is equally weighted; omnibus packages and companion resolutions are not counted repeatedly.

Formula: `round(100 × agreements / (agreements + disagreements))`. At least three documented measures are required. Unknowns and absences are excluded, with coverage shown beside every result. 0% and 100% describe only the observed sample. This release supports numerical scores for 12 current House candidates; others display insufficient evidence. Full candidate and administration sources are visible in each profile.

See [the detailed methodology](audit/alignment-methodology.md), [administration support records](audit/trump-baseline.json), and [official vote records](audit/house-alignment-votes.json).

## Remaining limits

Race notes explicitly disclose incomplete general-roster access, older official lists and authority-specific write-in evidence. Do not interpret a one-candidate card as proof that an entire contest is unopposed. Use the linked election authority and an official address-based sample ballot for eligibility and later changes. County/ZIP associations remain approximate.

Source links are evidence trails, not a promise that an external site will remain available. Some Illinois election pages denied direct retrieval; readable official indexed content and county documents were used where documented. No whole-directory “everything verified” guarantee replaces these record-specific qualifications.

## Audit reports

- [Federal Senate and districts 1–8](audit/federal-one-report.md)
- [Federal districts 9–17](audit/federal-two-report.md)
- [Statewide offices](audit/statewide-report.md)
- [State legislature](audit/legislature-report.md)
- [Local contests](audit/local-report.md)
- [Finance](audit/finance-report.md)
- [PAC and organization directory](audit/pacs-report.md)

## Verification

The source-integrity check validates unique IDs, source metadata, evidence for every retained issue and endorsement list, removal of legacy amounts and alignment scores, and current local directory references. Alignment tests check all scored observations against archived official House Clerk XML. Finance regression tests cover pagination, reporting scope, malformed/partial responses and preserving prior data on failure.

Browser checks cover Chromium/Edge, Firefox and WebKit at desktop, tablet and narrow phone widths, plus dedicated checks for source links, known/unknown alignment, method navigation, scoped finance, declared write-ins and comparison containment. These are browser-engine and viewport tests on Windows, not physical-device certification.

Final local validation passed: 214 general browser/data checks, 36 dedicated fact-check feature checks, 9 alignment tests and 10 finance regression tests. The evidence-contract check passed for all 100 races and 185 profiles. Visual review covered desktop, tablet, 390px and 320px layouts without document or modal overflow.
