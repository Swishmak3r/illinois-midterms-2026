# Legislative data audit — October 28, 2026

Reviewed all **33 legislative races previously present in the guide**, including the ten records formerly appended from `data-local.js`. The consolidated `data-legislature.js` contains **29 current-cycle races, 49 candidates, 117 sourced issue statements, 42 endorser-confirmed endorsements and 260 candidate evidence records**. This is selected-district coverage, not a complete statewide legislative ballot.

## Corrections

- Removed Senate districts **19, 34, 43 and 52**, which are not scheduled for election in 2026. This removes erroneous current-cycle entries for Michael Hastings, Steve Stadelman, Rachel Ventura and Paul Faraci, without implying that they no longer hold office. The [official Illinois election calendar hosted by the Peoria election authority](https://www.peoriaelections.gov/250/2026-Election-Calendar) establishes the schedule. The Senate appendix report explains a calendar typo and the independent ballot check resolving it.
- Senate 9: replaced Laura Fine with **Patrick Hanley (D) and Tom Lally (R)**.
- Senate 36: added **Brad Beekman (R)** opposite Michael W. Halpin.
- Senate 59: corrected **Paul Jacobs to incumbent senator**, following his June 2026 appointment.
- House 18: added **Pete Donaghue (R)** opposite Robyn Gabel; removed the false unopposed description.
- House 37: removed **David Maher**, whom the [Will County Clerk’s published November specimen ballot](https://fwrnews.com/legal-notice/will-county-specimen-ballot-2026/) does not list. It expressly lists Patrick Sheehan and no Democratic candidate. Removed the unsupported description of Sheehan as a former interim mayor.
- House 84: replaced Stephanie Kifowit in the candidate roster with **Saba Haider (D) and Brian Scopa (R)**, verified by the [Kane County Clerk’s general-election list](https://applications.kanecountyil.gov/ElectionWebsite/en-US/Candidates/List/31/NP). Kifowit remains the current officeholder, not a nominee in this race.
- Corrected Adriane L. Johnson’s displayed name while preserving her original internal ID; corrected other ballot-name spellings where supported.
- House 47: Erica Bray-Parker is a **retired** teacher; Robert A. Vrankovich is from **Carol Stream**, not a guessed Wheaton/Naperville location.
- House 52: Maria Peterson’s campaign describes her as a former **U.S. Department of Labor attorney**, not a healthcare attorney.
- House 76: Liz Bishop is **La Salle city clerk**, not Peru city clerk.
- House 104: corrected Brandun Schweizer’s military rank to **Master Sergeant** and Mary Catherine Roberson’s congressional employer to **Robin Kelly**.

## What was removed or qualified

Every inherited finance total, cash balance, estimated PAC amount, PAC-support narrative, PVI, race rating and primary-summary narrative was removed from these records. A separate filing-based finance audit supplies any verified financial data. Empty values mean unavailable here, not zero money or no support.

Original eight-topic policy profiles were replaced with specific statements supported by official legislative offices or attributed campaign publications. Unverified positions were removed rather than inferred from party or endorsements. Candidate statements establish what a candidate says, not the independent truth of claimed achievements, projected savings or allegations about others. Proposals are identified as proposals rather than enacted laws.

Endorsements were retained only when the endorsing organization’s own current announcement could be checked. Sources include [AFSCME Council 31](https://afscme31.org/news/afscme-illinois-people-recommendations-2026-general-election), [Illinois AFL-CIO](https://www.ilaflcio.org/wp-content/uploads/2026/07/IL-AFL-CIO-General-Endorsements-072026-1.pdf), [Illinois Federation of Teachers](https://www.ift-aft.org/vote), and other named endorsers. An endorsement does not establish a contribution or Trump-policy agreement. Endorsement lists are non-exhaustive.

District display names were simplified. Remaining city, county and region labels are browsing context inherited from the guide, not certified boundary definitions. An address-specific official ballot determines eligibility. The `safetAct` storage key includes broader justice and gun-policy statements; the interface should label it **Public safety & justice**, not imply every statement is a SAFE-T Act position.

## Verification and limits

Each retained issue has matching `issues.KEY` evidence, with source URL, title, check date and a support note. Every retained candidate has identity evidence, every race has roster evidence, and every retained endorsement has endorser evidence. Automated assembly verifies unique race/candidate IDs, complete evidence fields and the absence of inherited finance claims.

Published county rosters and specimen ballots provide the strongest general-election evidence, including [DuPage’s September 28 official candidate list](https://cms5.revize.com/revize/dupage/Election/Documents/Candidate%20Information/WebsiteListingsByElection/2026GE/2026GE%20Candidate%20Listing.pdf), Kane, DeKalb, Peoria, Will, Lake, Winnebago and Henry County sources. Some State Board of Elections endpoints returned access errors; readable search-indexed official content was used and this limit is recorded. Publisher-hosted government legal notices are identified as such.

Two remaining roster limits are explicitly recorded in the production `coverageNotes`:

- **House 18:** Gabel/Donaghue is corroborated by [Glenview Public Library’s October public-agency voter guide](https://glenviewpl.org/blogs/post/voter-information-november-2026/) and official primary records. The complete county general certification was not independently retrieved.
- **House 26:** Buckner’s official state candidate record confirms his general-election candidacy. The complete current Chicago general-election ballot was not independently retrieved; the guide does not claim that this alone proves an exhaustive or unopposed field.

The [St. Clair County Clerk’s official general-election portal](https://vr.platinumvrms.com/county/rslrequest/6?t=2) directly confirms both Senate 56 candidates as active, closing the initial retrieval gap for that race.

No completeness claim is made for late write-ins, entire candidate platforms, all endorsements, exact address/ZIP boundaries or all Illinois legislative races. Missing evidence is not opposition, neutrality or zero alignment.

## Supporting audit files

- `senate-report.md`, `senate-late-report.md`: all 17 original Senate entries.
- `house-low-three-report.md`: House 7, 26 and 37.
- `house-high-report.md`: House 68, 76, 84, 89, 91, 92, 97, 104, 112 and 114.
- `house-three.json`: House 18, 47 and 52, with all primary-source evidence.
- `legislature-roster.json`: final candidate IDs for finance and other integrations.
- `assemble-legislature.cjs`: reproducible consolidated dataset and evidence checks.
