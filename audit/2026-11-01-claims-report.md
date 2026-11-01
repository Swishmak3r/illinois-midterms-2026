# Review of Antigravity's substantive claims

Checked November 1, 2026. This review compares commit `d94c1aa` with its parent and freshly checks the two changed PAC profiles, seven newly added legislative profiles, their retained endorsements, and selected finance records. The separate statewide roster, geography, local-race and full-content audits supply their own scope and evidence. Source-link counts are not factual-verification counts.

## Corrections

- Antigravity labeled sitting sheriffs Thomas Dart and John D. Idleburg as challengers, even while naming each as the race incumbent. The [Cook County official directory](https://www.cookcountyil.gov/all-people/thomas-dart) and [Lake County sheriff document](https://www.lakecountyil.gov/DocumentCenter/View/2565) contradict those labels. Referred to the local-data owner for correction of both role text and status badges.
- Senate 27 and 33 were changed from open-seat contests to non-open races merely because a current officeholder was named. Current officeholding does not establish that the incumbent is running. Referred to the roster owner to reconcile against the actual general-election list.
- Natalie Manley's cited ILGA member ID 3232 resolves to Nabeela Syed. Avelar's cited ID was also wrong. Correct member records and precise primary-source replacements are documented in `2026-11-01-claims-legislature-helper.json`.
- Detailed policy summaries frequently exceeded what their linked homepages said. The seven reviewed profiles now have narrower, attributed statements linked to the actual substantive page or first-person candidate questionnaire. The proposed replacements and per-field sources are in `2026-11-01-claims-legislature-fixes.json` and `2026-11-01-claims-legislature-helper.json`; the legislative-data owner applies them.
- Nona Parker's website could not be opened through the search browser but was retrieved directly over HTTPS. Her About page establishes her accounting/nonprofit background and the retained policy statements. Her homepage did not establish the previous specific property-tax-cap claim. The unverified Bolingbrook hometown was removed. Raw downloaded pages are retained only in the task's scratch sources directory, outside the published repository.

## AIPAC and United Democracy Project

The [FEC's UDP record](https://www.fec.gov/data/committee/C00799031/?cycle=2026) classifies it as an independent-expenditure-only super PAC. Antigravity's “hybrid” description was removed. On review, the current FEC summary showed $85,057,423.26 in disbursements for January 1, 2025–October 14, 2026; that does not substantiate the newly inserted $94,918,891 through September 30. No archived filing was supplied to reproduce the latter figure. The unsupported historical dollar claim was removed, with the separate official filing link retained.

The [AIPAC PAC FEC record](https://www.fec.gov/data/committee/C00797670/?cycle=2026) showed $56,248,372.98 in disbursements over the same current period. Antigravity's older figure lacked an archived source for its stated cutoff, so it too was removed rather than mislabeled as a current or Illinois-specific amount.

[Jewish Insider's October 21 reporting](https://jewishinsider.com/2026/10/aipac-end-candidate-endorsements-pac-contributions/) corroborates a planned strategic change and continuing UDP activity. The complete member letter was not located publicly. The site now attributes the announcement to reporting and avoids asserting that all PAC activity ended that day. The [public AIPAC Politics page](https://www.aipac.org/politics) still describes direct giving and identifies UDP's relationship to AIPAC; it does not establish an effective shutdown date. The original NPR URL was inaccessible during this review.

## Endorsement checks

The [Illinois AFL-CIO general-election list](https://www.ilaflcio.org/wp-content/uploads/2026/07/IL-AFL-CIO-General-Endorsements-072026-1.pdf) confirms the retained endorsements of Yang Rohr, Avelar, Manley and Ellman. The [AFSCME general-election list](https://afscme31.org/news/afscme-illinois-people-recommendations-2026-general-election) confirms the retained endorsements of Yang Rohr, Avelar and Manley. The listed voting-record percentages were not repurposed as endorsement strength or money. Empty endorsement arrays for the other reviewed candidates remain unknown, not a claim that no endorsements exist.

## Financial scope and remaining limits

See `2026-11-01-claims-finance.md`: the commit did not change candidate financial snapshots, three fresh official-source samples matched, and ten finance regression tests passed. In the Antigravity snapshot, 38 nonfederal profiles lacked verified totals, including all 23 added profiles. The earlier figure of 15 referred to an older, smaller roster.

This report does not claim that every inherited policy, biography, endorsement, local roster or dollar amount has been freshly verified. An audit date is attached to the field actually checked; future publication must not promote a successful schema check into a promise of complete accuracy. The full-content sweep separately records every retained issue and endorsement result.
