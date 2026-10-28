# Organization-directory fact check — October 28, 2026

The 14 previous grouped entries were audited and replaced by 17 separate, sourced organizations. No previous dollar total or unsourced candidate relationship was retained. Organization statements are attributed as their own stated purposes; they are not presented as independent assessments of influence or effectiveness.

## Corrections by previous entry

| Previous entry | Resolution |
|---|---|
| JB for Governor / Illinois Future / Pritzker network | Replaced with the separate FEC-registered Illinois Future PAC, C00902320. Removed the pooled $100 million commitment, lifetime totals, donor-control narrative and inferred candidate relationships. Candidate finance belongs in the candidate's own disclosures. |
| Fairshake / Protect Progress | Split into two independently registered committees, C00835959 and C00848440. Removed the unsourced Illinois-only $11.5 million and candidate-specific amounts/claims. Fairshake's policy purpose comes from its own website. |
| AIPAC / UDP / Elect Chicago Women / Affordable Chicago Now | Split the verified AIPAC PAC C00797670 and UDP C00799031 identities. Removed unsupported assumed affiliations, pooled $14 million, direct-versus-independent spending confusion and candidate associations. No current AIPAC endorsement list is inferred from historical transactions. |
| J Street / Justice Democrats / Working Families / Progressive Caucus | Split JStreetPAC and Justice Democrats. Removed pooled $3.8 million, alleged bundled amounts and cross-organization candidate relationships. The other organizations are not asserted to be part of either committee. |
| IUOE Local 150 | Retained as a distinct federal labor PAC with FEC ID C00142851 and official union political-program sources. Removed $12.5 million/$15 million figures, evaluative superlatives and unsupported candidate funding claims. |
| IEA / IFT / CTU | Replaced with the individually documented IPACE entry. Removed pooled $14 million, implied shared endorsements, leadership assertions and political influence claims. IFT/CTU claims are not silently transferred to IPACE. |
| SEIU / AFL-CIO / CFL | Replaced with Illinois AFL-CIO as an endorsing labor federation, explicitly distinct from a pooled PAC. Removed the $11 million total and inferred contribution relationships. Six clearly labeled endorsement examples link to its official general-election list, including both Democratic and Republican candidates. |
| Illinois House Democrats / DPI / ISDF | Replaced with separately identified Democratic Party of Illinois federal committee C00167015. Removed the combined $35 million, caucus money estimates and transfer narrative. |
| SRCC / HRO | Replaced with independently documented Illinois Republican Party state committee 292 and federal account C00005926. Removed the combined $16.5 million, donor-network claims and candidate amounts. Neither party entry stands in for legislative caucus committees. |
| ITLA PAC | Retained official Illinois SBE committee 627 and its registered purpose. Removed $4.5 million, 95% party share and unsupported candidate relationships. |
| Realtors RPAC / NBOA | Retained Illinois REALTORS RPAC as a separate organization, with its own description and priorities. Removed pooled finances, NBOA associations and unsupported candidate claims. |
| Personal PAC / GPAC | Retained Personal PAC separately. Its official FAQ explicitly says it does not endorse or contribute to federal candidates and is not a super PAC. Removed combined finance/endorsement claims and GPAC associations. |
| IMA / Chamber / Farm Bureau | Split Chamber PAC and IMA's MPAC using each organization's official description. Removed pooled money and candidate relationships. Farm Bureau claims were not moved to the other organizations. |
| FOP / ISRA / Right to Life | Removed the combined group and all unsourced finances, candidate relationships and merged policy claims. These distinct organizations require separate sourced records before being added. |

## Evidence and financial scope

Every retained directory entry has field-level evidence URLs and the October 28 review date. Federal committee IDs link to the FEC's 2026-cycle record. The directory does not reproduce financial totals: national committee disbursements would not verify the previous Illinois-only spending figures, and summing federal/state accounts or affiliates would risk double counting. This omission is not a claim of zero spending. Official FEC pages remain the linked source for receipts, disbursements, independent expenditures and their reporting periods.

The FEC explains that independent expenditure money is not directly given to or spent by the candidate. Endorsements shown in the Illinois AFL-CIO entry are explicitly endorsements, not donations. The organization links to its official [2026 general-election list](https://www.ilaflcio.org/wp-content/uploads/2026/07/IL-AFL-CIO-General-Endorsements-072026-1.pdf).

Some official source bodies were available through the web tool's indexed representation while direct retrieval was denied or timed out. These limits are recorded in `pac-state-notes.md` for ITLA and Local 150. No financial figure was taken from a blocked page, search-generated third-party summary or unsourced fundraising counter.

## Related cleanup authorized by root

- Removed the entire old `IL_TRUMP_ALIGNMENT_DIRECTORY`; its party-inferred percentages and rationales are not used as evidence for the replacement score.
- Removed unused `localContext`, `mayor` and `population` fields from all 69 community records (207 fields), including stale candidate names, speculative issue narratives, unsourced totals and unsupported local officeholder details.
- Preserved every community ID, name, ZIP, alias, region, county and district/race association. Those associations remain approximate research areas, not official boundary determinations.
- Rewrote issue-category descriptions as neutral topic labels rather than unsupported or outdated assertions about tax thresholds, budget amounts, pension totals, rankings or legislation.
- Added `publicServices` and `ethics` to state issue definitions, as requested by the statewide audit.
- Added `electionAdministration` to local issue definitions, as requested by the local audit.

## Validation

`node --check data-towns-pacs.js` passed. The integration check compared every retained community field before and after; all 69 mappings were preserved. The new directory has 17 unique organization IDs, all with source evidence. The state issue list contains 10 categories. The source no longer contains the old alignment object or any reproduced PAC spending amount.
