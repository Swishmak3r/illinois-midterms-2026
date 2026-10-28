# Statewide candidate fact-check — October 28, 2026

The five statewide races now contain 11 printed-ballot nominees or joint tickets, plus two documented Green write-in campaigns. The module retains 44 issue summaries, each linked to primary evidence. Campaign and candidate-authored positions are attributed; office actions are described as records, and endorsements require an endorser's own publication. Unsupported original assertions were removed rather than displayed with a vague warning.

## Roster and ballot scope

The Illinois State Board of Elections general-election tables and the St. Clair County Clerk's current official candidate filings establish the printed nominees. The direct ISBE pages returned HTTP 403; their indexed official tables were cross-checked against the county's directly opened official list. The governor race retains Pritzker/Mitchell, Bailey/Del Mar and Corbett/Schofield. Attorney General retains Raoul and Fioretti; Secretary of State retains Giannoulias and Harris; Comptroller retains Croke and Drew; Treasurer retains Frerichs and Solomon.

Anna Schiefelbein and Timothea Papas were removed from the printed ballot in July but have later September write-in filings and current Green Party campaign statements. Their profiles carry `isWriteIn`, `ballotNote` and race-level coverage notes. These documents do not certify write-in eligibility in every Illinois election jurisdiction. Other qualified write-ins may exist; the site directs voters to their election authority for the actual local ballot.

## Material corrections

- Replaced the original governor issue summaries with actual campaign or office records. NITA was signed on December 16, 2025, correcting the prior June 2026 timing. Corbett/Schofield's platform is now their published platform; unsupported claims about Schofield's current office were removed.
- Bailey's Trump endorsement is supported by a September 13, 2026 official presidential transcript. Illinois Family Action lists Bailey as **recommended**, which is not represented as an endorsement.
- Updated Raoul's record using current official actions, including the September 2026 ACA brief and October 2026 power-plant emissions and Public Service Loan Forgiveness litigation. Added only campaign-documented priorities; removed unsupported policy and donor-network claims.
- Replaced Fioretti's broad unsourced positions with his published pretrial-detention, ethics and education proposals. No unsupported endorsements remain.
- Giannoulias' profile now uses the official Blue Book, his 2023 ethics order, the August 2026 response to the federal driver-data request, and his 2026 library questionnaire.
- Harris' current Joliet Junior College trustee role is supported by the college's roster. DMV, technology, budget and library proposals come from her campaign and signed 2026 questionnaire. Assertions about illegal activity were not repeated as established facts.
- Corrected Croke's committee title to Financial Institutions & Licensing. HR 695 is identified as a resolution about reproductive and IVF care, not an insurance coverage law. Her fiscal proposals are sourced to her campaign.
- Drew's name and fiscal oversight proposals replace unsupported biographical embellishments and party-inferred policy positions.
- Frerichs' retirement program is now **My Illinois Savings**, formerly Illinois Secure Choice, following the June 2026 rename. ABLE's expanded age eligibility is attributed to federal law. Current official savings and investment programs replace stale monetary figures.
- Solomon's actual campaign supports investment transparency, diversification, community-bank deposits and college saving. Unsupported anti-ESG, fossil-fuel, defense-investment, cash-bail, abortion and tax-freeze claims were removed.
- Retained Illinois AFL-CIO endorsements using its July 2026 **general-election** list, not its older primary list. Other retained endorsements use official SEIU, IRMA, CWA, Illinois Family Action or presidential sources. Removed unsupported endorsements; omission is not a claim that no other endorsement exists.

## Finance and uncertainty

All original statewide fundraising totals, cash balances, PAC amounts, donor-network descriptions and PAC-acceptance claims were removed. Statewide campaigns report to the Illinois State Board of Elections, so FEC-looking fields are left empty. A separate finance review handles any independently verified filing data and reporting-period labels. No financial inference is made from party, endorsement or campaign rhetoric.

Unsourced PVI, race ratings and primary narratives were removed. Sparse policy coverage is left sparse; no position was inferred from party or a similar candidate. The module does not infer Trump policy agreement from endorsements, and a state-office position alone should not be treated as a federal-policy comparison.

## Sources and reproducibility

Every retained biography, issue summary and endorsement has a field-specific evidence entry with a URL, title and checked date. Detailed source records are preserved in `governor-research.json`, `ag-sos-research.json` and `fiscal-officers-research.json`; the latter has an accompanying report. `assemble-statewide.cjs` combines these into `data-statewide.js` and rejects issue summaries without evidence or unexpected finance values. JavaScript syntax validation passed.

Principal official roster sources: [Illinois State Board of Elections](https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=71) and [St. Clair County Clerk candidate filings](https://vr.platinumvrms.com/county/rslrequest/6?t=2). The statewide labor endorsement source is the [Illinois AFL-CIO general-election list](https://www.ilaflcio.org/wp-content/uploads/2026/07/IL-AFL-CIO-General-Endorsements-072026-1.pdf). Each profile contains more specific primary sources rather than relying on these general links for policy assertions.
