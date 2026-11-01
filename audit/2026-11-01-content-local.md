# Local candidate content audit — November 1, 2026

Reviewed every retained issue statement and individual endorsement in `data-local.js`: 44 claims across 29 candidates (28 issue statements and 16 endorsements). All 24 primary campaign pages and four endorsing-organization sources were accessible. The ledger records each claim and the factual basis for its classification; an HTTP response alone was never counted as verification.

Initial result: 41 verified, one requiring narrower attribution, two with contradicted source attribution, zero inaccessible. This is a verification of what candidates and endorsing organizations publish, not independent confirmation of campaign claims about accomplishments.

## Corrections sent to the local-data owner

- **Amy Christiansen and Sonni Choi Williams:** the attached Illinois AFL-CIO endorsement citations are unsupported. The [one-page 2026 general-election endorsement document](https://www.ilaflcio.org/wp-content/uploads/2026/07/IL-AFL-CIO-General-Endorsements-072026-1.pdf) lists only Judith Rice and Margaret “Peggy” O’Connell under Judicial. Neither circuit judge appears. The evidence notes claiming this document endorses those judges misrepresent its contents. Official-domain searches did not find an alternative. Remove these two claims unless separate primary evidence is available; this finding does not establish that no such endorsement exists elsewhere.
- **Toni Preckwinkle, property taxes:** the [campaign page](https://tonipreckwinkle.org/taxes/) emphasizes a historical claim that she has not raised county property taxes. Its text does not expressly promise a future flat levy. Replace the future-policy inference with an attributed statement about the record her campaign highlights.

The local-data owner applied these corrections: the two endorsement claims were removed and Toni's statement now uses “not raising county property taxes” as an attributed campaign description of her historical record. Theresa Rouse's already-revised education summary accurately reflects her [current campaign priorities](https://www.rouse4roe.com/): shared services for smaller districts and trauma-informed whole-child support. No further issue-summary correction was identified.

## Endorsement verification

- Nine Cook County endorsements match page 2 of the [Chicago Federation of Labor general-election PDF](https://chicagolabor.org/wp-content/uploads/CFL-2026-General-Election-Endorsements.pdf).
- Margaret O’Connell matches the Illinois AFL-CIO general-election document linked above.
- Dustin Heuerman matches the endorsing organization's [February 26, 2026 announcement](https://victoryfund.org/news/lgbtq-victory-fund-endorses-43-new-candidates-for-2026-campaigns/), specifically its 2026 incumbent slate.
- Maggie Crouch, Marcus Herbert and Nick Camlin match the [Quad City Federation of Labor 2026 table](https://www.quadcityfed.com/political-legislative/local-il-endorsed-candidates/).

The two unsupported AFL-CIO claims are separately recorded in the ledger. No primary-only endorsement was silently treated as a newly issued general-election endorsement in these checked local claims.

## Artifacts and scope

`2026-11-01-content-local.json` is the claim ledger; `2026-11-01-content-local-inventory.json` preserves the reviewed starting text. The ledger records source hashes and temporary archive references, plus production disposition for each reviewed claim (41 retained, one revised, two removed; 42 current claims). Production changes are owned by `local_audit`, not this read-only review. Candidate rosters, biographies, incumbency, finance and geographical eligibility are outside this content-only assignment and have separate audit owners.

## Final production and biography follow-up

The JSON now separately includes `activeProductionClaims`: all 42 current claims (28 issues, 14 endorsements) have verified status. `historicalClaims` preserves the original 44 claims and their correction/removal history. `actuallyReadSources` lists the 28 sources whose relevant contents were read on November 1; this permits review-date updates for these checked issue/endorsement sources without falsely refreshing unrelated evidence.

The separate `2026-11-01-content-local-biography.json` triages all 94 original local profiles: none has a nonempty hometown field. Ordinary candidacy and incumbency wording remains within the independent local-office audit. Seven professional or appointed-judge role subclaims were freshly checked, with no new factual contradiction. Two need stronger role-field source attachment (Ivec's attorney profession and O'Connell's circuit judgeship); the local owner received the exact primary URLs. This is a focused biography follow-up, not a second exhaustive certification of every local-office status.
