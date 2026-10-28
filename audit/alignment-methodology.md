# Trump policy alignment: official-source audit

Checked October 28, 2026. Source period: January 22–July 3, 2025.

This feature measures agreement within a fixed six-measure legislative policy sample. It is not an overall ideology score, a measure of personal loyalty, an endorsement rating, or a statistical estimate of agreement on every Trump policy. Scores and coverage must be displayed together, with the sample label visible.

## Basket and selection

The basket was specified before individual member votes were collected: immigration detention, citizenship documentation for voter registration, the tax/spending reconciliation package, spending rescissions, methane regulation and California vehicle-emissions waivers. Each had explicit administration support and a distinct substantive House vote. This is an editorial selection of administration priorities, not a random or comprehensive sample. Selecting other policies or weights may change scores. No measure was added or removed to produce a candidate's result.

| Measure | Scored House action | Date | Official roll call |
|---|---|---|---|
| S.5, Laken Riley Act | Final House passage | January 22, 2025 | [23](https://clerk.house.gov/Votes/202523) |
| H.J.Res.35, methane Waste Emissions Charge rule | Passage of disapproval resolution | February 26, 2025 | [52](https://clerk.house.gov/Votes/202552) |
| H.R.22, 2025 SAVE Act | House passage | April 10, 2025 | [102](https://clerk.house.gov/Votes/2025102) |
| H.J.Res.88, Advanced Clean Cars II waiver | Passage of disapproval resolution | May 1, 2025 | [114](https://clerk.house.gov/Votes/2025114) |
| H.R.4, Rescissions Act | June House version; not the amended final law | June 12, 2025 | [168](https://clerk.house.gov/Votes/2025168) |
| H.R.1, 2025 reconciliation package | Concurrence in final Senate amendment | July 3, 2025 | [190](https://clerk.house.gov/Votes/2025190) |

The Laken Riley record uses the enacted S.5 rather than the earlier H.R.29 vote. Rescissions uses the original standalone substantive passage vote because July approval occurred through a broader procedural resolution. The 2025 SAVE Act must not be confused with 2026's SAVE America Act. The omnibus reconciliation package counts once; its vote does not establish a stance on each provision. Related California waiver resolutions are not counted again.

The White House/OMB support evidence, exact version notes, titles and dates are in `trump-baseline.json`. The Clerk metadata and all Illinois members' votes are in `house-alignment-votes.json`. Six original XML files are archived in `sources/alignment/`. These records were actually retrieved and read. Sources are presented as evidence of administration support and recorded member votes, not endorsement of administration claims about policy outcomes.

## Calculation

Each evidenced agreement receives one point and each evidenced disagreement zero. The displayed percentage is `round(100 × agreements / (agreements + disagreements))`. Every measure receives equal weight. At least three known measures are needed; otherwise the result is **Not enough evidence**. No fractional or inferred positions are used.

An absence, abstention, missing record, unsupported claim or ambiguous statement is **unknown** and excluded from the denominator. Unknown is never zero. Coverage is `known / 6` and must accompany the percentage. Scores with different coverage should be compared cautiously.

0% means disagreement on every observed measure in this sample, not disagreement with every Trump policy. 100% has the corresponding limited meaning. The score is not a probability, scientific precision estimate, endorsement or voting recommendation. It does not claim these 2025 actions reflect every candidate's current opinion.

## Coverage and findings

This release scores the 12 current U.S. House incumbents who are candidates in the guide. Candidate identities use stable congressional bioguide IDs. Other candidates are not assigned a score from their party, endorsements or general issue statements. Campaign statements about one provision of a package do not establish a position on the whole package. No challenger acquired three directly comparable measures during this audit.

- Bost, Mary Miller and LaHood: six agreements of six observed measures, 100%.
- Budzinski: two agreements of six (Laken Riley and California waiver), 33%.
- Sorensen: one agreement of six (Laken Riley), 17%.
- Schneider: zero agreements of five, 0%; Laken Riley is unknown because the Clerk records Not Voting.
- Jackson, Ramirez, Quigley, Casten, Foster and Underwood: zero agreements of six, 0%.

## Reproduction and safeguards

Run `python scripts/build-alignment-data.py` to regenerate `data-alignment.js` from the audited source records, then `node scripts/test-alignment.cjs`. The generator validates the fixed basket, administration support, substantive vote type and unique member matches. The calculator requires evidence for both sides, prohibits duplicate policy IDs, enforces a minimum of three and safely distinguishes 0% from null. Tests check cross-party votes, missing-vote treatment, unsupported evidence, threshold behavior and all candidate records against the original Clerk XML.

Future additions should document a new version of the basket and regenerate every candidate under the same rules. Do not silently turn missing data into disagreement or infer support from party membership.
