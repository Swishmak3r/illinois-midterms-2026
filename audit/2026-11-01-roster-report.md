# Candidate roster reconciliation — November 1, 2026

The production directory now contains every active candidate in the Illinois State Board of Elections general-election list for all **118 State House districts and all 39 State Senate districts on the 2026 ballot**. There are **157 legislative contests and 232 active candidates**. The previous production file had 33 legislative contests; 124 district contests were missing. The Antigravity summary's claim of 50 legislative races did not match its committed file.

## Source and scope

The [official Illinois SBE November 3, 2026 general-election candidate list](https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=sejIrI%2BQmww%3D) was retrieved directly using its **All** page-size control. The source returned 528 records, including federal, statewide, legislative, regional superintendent and judicial filings. Its default page contains only ten records and is insufficient for an exhaustive check.

`2026-11-01-roster-sbe.json` preserves all 528 rows' names, offices, parties, status and official record URLs, along with the retrieval time and source-response SHA-256. Candidate street addresses are deliberately excluded. `scripts/2026-11-01-roster-fetch.cjs` reproduces the source retrieval and rejects incomplete responses.

Only **Active** filings are included as ordinary legislative candidates. Eleven removed or withdrawn legislative records remain in the audit manifest, not the current printed roster. The source records all 118 House districts and 39 Senate districts; Senate 19, 34, 43 and 52 are correctly absent from this election. Current officeholding and current election candidacy are separate facts.

The state petition list is not a comprehensive registry of local write-in declarations. A candidate removed from the state printed ballot may separately file as a write-in with an election authority. A single candidate on an active state list is not a guarantee that no write-in is eligible. Exact voter eligibility requires the official address-based ballot.

## Changes

- Added the 99 missing House contests and 25 missing Senate contests, using only the official name, party and election identity as the initial candidate profile. No policies, biography, endorsements or financial amounts were invented for those additions.
- Rechecked the active nominees in every previously listed legislative race. They matched the official state list, including HD-41 Ajay Gupta, HD-85 Chris Metcalfe, HD-98 Nona Parker and SD-21 Julie Berkowicz.
- Standardized four inherited display names to their official ballot forms while preserving internal IDs.
- Matched incumbent status against the official 104th General Assembly's indexed member rosters. The supporting file contains 118 House and 59 Senate officeholders. Live ILGA page retrieval was denied, so this is explicitly an indexed-source check, not a claim that the live pages were independently downloaded.
- Corrected the open-seat rule: an occupied office can have an open-seat election when its incumbent is not a nominee. In particular SD-27 and SD-33 now label both candidates as open-seat candidates. Fifteen legislative races have no current incumbent in the active general-election field.
- Replaced stale selected-district roster limitations with the current statewide roster scope and explicit write-in/research limitations. The older policy and endorsement evidence keeps its original review date.

The separately documented federal/statewide check found all 39 printed federal people and 11 printed statewide candidate/ticket profiles already matched active state records. It refreshed exact identity links and added county-documented write-in declarations with visible jurisdiction and incomplete-ticket limits. See `2026-11-01-roster-federal-statewide-report.md`.

## Source-content corrections

Separate claim reviewers examined the substantive profiles Antigravity added. The candidate rosters were correct, but some cited pages did not support the attached biography or policy text. In particular, Manley and Avelar had incorrect ILGA member links. Seven substantive profiles now use precise supported biographies and attributed policy statements; Chris Metcalfe's profile contains only the sourced nominee identity. Unsupported tax-cap, forensic-audit, school-choice, grid-reliability and other details were removed where the linked source did not establish them. The helper/fix manifests record exact before/after support decisions. The four incumbent profiles' existing AFL-CIO/AFSCME endorsement sources were rechecked against the endorsers' own general-election lists.

The wider content sweep also made source-specific corrections to older profiles. Examples include distinguishing Secretary of State **contractual employees** from every outside contractor, supporting Raoul's official actions separately from his campaign platform, narrowing Wilson's job-growth wording, and citing Castillo's campaign biography for the firearm-policy statement it explicitly supports. These are separate substantive checks, not deductions from a passing source-metadata test.

## Reproduction and checks

1. Retrieve the state source: `node --use-system-ca scripts/2026-11-01-roster-fetch.cjs`.
2. Reconcile legislative candidate identity: `node scripts/2026-11-01-roster-legislature.cjs`.
3. Apply the separately reviewed ILGA officeholder snapshot: `node scripts/2026-11-01-roster-incumbency.cjs`.
4. Check exact full-roster equality: `node scripts/2026-11-01-roster-check.cjs`.
5. Check federal/statewide identity and write-in separation: `node audit/2026-11-01-roster-federal-statewide-test.cjs`.

The legislative test compares the **displayed name, party and district** of every ordinary candidate against the independently retrieved source snapshot, verifies all official identity links, and rejects missing, extra, duplicate, removed and withdrawn printed choices. Its passing result is 118 House districts, 39 Senate districts and 232 candidates. It does not independently validate every issue, endorsement, financial figure or geographic association.

This review supports a precise roster-completeness statement for the retrieved source. It does not support a blanket “100% accurate” claim for every aspect of the site or all authority-specific write-ins.
