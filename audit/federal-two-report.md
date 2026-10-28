# Federal audit: Illinois congressional districts 9–17

Checked October 28, 2026. Output: `audit/federal-two.json`.

## Scope and result

Rebuilt all nine existing race records and all 18 existing candidate records. Added five officially listed declared write-ins, for 23 records total. The replacement contains 82 concise sourced issue statements, 21 sourced endorsement entries and 77 distinct source URLs. Each candidate has field-level evidence; missing evidence produces an empty field rather than a party-based inference.

The candidate identity/party entries for the original 18 candidates were retained after comparison with official election-authority records. These are research records, not a certification that every listed write-in is eligible in every county.

## Official roster evidence

- Districts 9–10: Lake County Clerk's candidate PDF, printed September 9, 2026. https://www.lakecountyil.gov/DocumentCenter/View/13059/Candidate-List
- Districts 11, 14 and 16: DeKalb County Clerk's November 3 specimen ballot. https://dekalbcountyclerkil.gov/wp-content/uploads/2026/09/11032026SpecimenBallot.pdf
- District 12: Jasper County Clerk's publication ballot dated September 21. https://jaspercountyillinois.gov/wp-content/uploads/2026/09/PUBLICATION_2026-General.pdf
- Districts 13 and 15: Champaign County Clerk's 2026 federal-candidate table, supported by indexed Illinois State Board candidate detail/list records. https://www.champaigncountyclerk.com/elections/who-represents-me
- District 17: Winnebago County Clerk's September 25 candidate list. https://wincoil.gov/media/attachments/2026/09/25/november-2026-candidate-list.pdf

State Board direct retrieval returned HTTP 403, as did direct retrieval of Champaign's table. Their indexed official content was readable; those source notes explicitly disclose the limitation. The Lake, DeKalb, Jasper, Winnebago and Rock Island PDFs were read directly. Search snippets for the Lake County PDF were stale: opening the actual PDF revealed additional candidates absent from the old snippet.

## Added write-ins

Lake County's actual September 9 PDF lists James Jay Mote, Alexandria Keating-Sofiakis, John Minarcik and Thomas Rudd for District 10. These are labeled declared write-ins, with Lake County authority scope, and no party invented from the blank party column.

Brad Ahrens is listed for District 17 on both the Winnebago valid-write-in PDF and the Rock Island County valid-write-in PDF. He is added with both authority names. No sourced policy or endorsement information was located for these added records during this pass, so those fields are empty. A blank policy field is not evidence of agreement or disagreement with any policy.

## Corrections and removals

- Daniel Biss: removed current-mayor wording. The City of Evanston's June 25 bulletin records his announced October 18 resignation; the replacement safely says he served as mayor. Replaced generic issue text with his actual campaign platform. His gun page explicitly calls for repeal of the Second Amendment; his immigration page calls for abolishing ICE. Those claims were checked on the candidate's own pages and presented neutrally as policy statements.
- John Elleson: retained only supported community/business and health-service proposals from his campaign; removed the detailed inherited policy claims that were not supported.
- Carl Lambrecht: retained official candidacy and party, but cleared unsupported biography and all issue positions because no official campaign policy source was located.
- Brad Schneider, Bill Foster, Mike Bost and Julie Fortier: replaced the inherited descriptions with supported campaign/office statements. Historical or undated office material is not presented as a new 2026 legislative action. Bost's support for the 2025 reconciliation law is described as a past action, rather than a future tax-cut proposal.
- Darin LaHood: corrected Illinois District 16 tenure to 2023; his 2015–2023 service was in District 18.
- Jeff Wilson: corrected county-board wording to currently serving according to his campaign biography.
- Jim Marter: corrected party-chair wording to former chairman according to his campaign biography.
- Dillan Vancil: omitted inconsistent shop-count claims (different campaign pages say six and eight). Removed the unsubstantiated Illinois Family Action endorsement: the organization's 2026 primary release endorsed Julie Bickelhaupt in District 17, not Vancil.
- Removed every inherited fundraising amount, cash figure, PAC amount/relationship, speculative donor-network summary and PAC-acceptance claim in this scope. These fields are intentionally empty for the separate finance audit.
- Removed inherited PVI values, race ratings, primary-spending narratives and unsourced election percentages. District titles now use plain district numbers. Existing approximate region/county/city navigation metadata was retained; it is not a certified geographic crosswalk.
- Cleared inherited hometown assertions throughout rather than treating mailing addresses or old biographies as verified current hometowns.

## Endorsement standard

Only original endorser sources are used. The Illinois AFL-CIO July 2026 general-election PDF, CWA Illinois 2026 list, National NOW PAC list hosted by Illinois NOW, current NRA-PVF November 3 ratings/endorsements page, NFIB's October 1 Illinois congressional release, and Illinois Family Action's March primary endorsement release are the source types retained.

IFA entries explicitly say **2026 primary endorsement**. NRA AQ grades for Elleson and Walter were not mislabeled as endorsements. Removed endorsements do not imply the organization opposes the candidate; they mean the inherited assertion was not established to this audit's standard.

## Integration

The JSON is a complete replacement for the nine race objects. Preserve the unchanged candidate IDs so share links and finance matches continue to work. Financial fields must remain blank unless the independent finance review supplies dated official figures. The five write-ins have `writeIn: true` and `writeInAuthorities` to support clear UI labeling.
