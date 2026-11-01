# Voting procedure audit — November 1, 2026

Scope: every election date, registration, early-voting, polling-hours and mail-return assertion in `app.js` (`renderGuide`) and `template.html`. Read-only review; this report does not modify the UI. Sources checked November 1, 2026, America/Chicago.

## Findings

| Existing assertion | Result and scope | Primary evidence |
| --- | --- | --- |
| Tuesday, November 3, 2026; polls 6 a.m.–7 p.m. Central | Confirmed. These are Election Day polling hours, not a promise about early-voting site hours. | [Illinois SBE November 3 calendar entry](https://www.elections.il.gov/Main/CalendarEventDetail.aspx?Date=Z6Ojuy2%2BnF7OyuJu6OFDDVuCo%2FPENUtn) |
| Online registration closed October 18 | Confirmed; deadline was 11:59 p.m. | [Chicago election calendar, printed page 33](https://cboeprod.blob.core.usgovcloudapi.net/prod/2025-07/2026%20Chicago%20Election%20Calendar%20rev2.pdf) |
| In-person registration and voting through Election Day at designated locations | Confirmed. Keep the designated-location qualifier; availability at an ordinary precinct polling place must be checked locally. | [SBE November 3 calendar entry](https://www.elections.il.gov/Main/CalendarEventDetail.aspx?Date=Z6Ojuy2%2BnF7OyuJu6OFDDVuCo%2FPENUtn) |
| Chicago early voting through November 2; hours differ by election authority | Confirmed. Statewide early voting also ends November 2, with permanent/temporary locations and hours locally administered. | [SBE voting by mail/early voting information](https://www.elections.il.gov/electionoperations/VotingByMail.aspx), [Chicago calendar, printed page 34](https://cboeprod.blob.core.usgovcloudapi.net/prod/2025-07/2026%20Chicago%20Election%20Calendar%20rev2.pdf) |
| Mail application deadline October 29 | Date confirmed for requests by mail, but clarify method and that the deadline has passed. An in-person vote-by-mail application at the election authority remains possible through November 2 for registered voters within the United States. | [SBE mail voting information](https://www.elections.il.gov/electionoperations/VotingByMail.aspx), [SBE calendar: November 2 in-person application deadline](https://www.elections.il.gov/Main/CalendarEventsAll.aspx?T=637877907453667309) |
| Mailed ballots must be postmarked by November 3 and received by November 17 | Dates confirmed, but the unconditional postmark wording omits absent-postmark alternatives. A ballot without a postmark is not automatically invalid: the statute allows qualifying barcode tracking or the dated certification under specified conditions. The site should tell users to obtain a timely postmark and refer exceptional cases to election officials. | [McLean County Clerk mail voting](https://mcleancountyil.gov/197/Vote-by-Mail), [Chicago calendar, printed page 35, citing 10 ILCS 5/19-8(c)](https://cboeprod.blob.core.usgovcloudapi.net/prod/2025-07/2026%20Chicago%20Election%20Calendar%20rev2.pdf) |
| Drop-off at an authorized location by Election Day deadline | Safe, appropriately qualified. State the 7 p.m. final deadline while preserving local site-hours and authorized-location instructions. Do not claim every precinct polling place accepts completed mail ballots. | [DeKalb County Clerk return and drop-off rules](https://dekalbcountyclerkil.gov/voting-by-mail/), [McLean County drop-box hours](https://www.mcleancountyil.gov/dropboxes) |
| Address determines districts and sample ballot; ZIP can cross districts | Correct. Keep official district and election-authority lookup links. This does not mean a ZIP-to-district overlay certifies eligibility. | [SBE address lookup](https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx) |

## Recommended concise UI copy

Replace the mail card with:

> Requests by mail had to arrive by October 29. Registered voters may apply in person at their election authority through November 2. Return mailed ballots with a postmark on or before November 3 for receipt by November 17. For a same-day postmark, request one at a staffed USPS counter. Follow your election authority’s instructions for authorized drop-off locations and hours; the final return deadline is 7 p.m. on Election Day.

Add a short details paragraph beneath the card or in the source section:

> A missing postmark does not automatically invalidate a ballot. Illinois law provides alternatives using qualifying postal tracking or the voter’s dated certification. Your election authority decides whether those requirements are met.

USPS explicitly confirms that a processing-facility postmark may differ from the initial collection date and that a manual postmark is free at a retail counter. This is practical source-backed advice given the November 1 audit date, not an assertion that ballot deadlines changed. [USPS postmarks and postal possession](https://about.usps.com/kits/kit600/kit600_v04-2026_042.htm).

The current generic October 26 checked date may become November 1 for these voting instructions, with the above direct sources added. Keep source publication dates separate from review dates. The Chicago calendar was adopted July 8, 2025 and revised July 22, 2025; current SBE and county guidance corroborates the relevant deadlines.

## Current court-change check

The official McLean County government notice says Illinois mail voting remains available for November 3 under existing requirements following the Supreme Court decision. Its current return instructions still give November 3 postmark / November 17 receipt. No contrary current official deadline was found in this review. This checks the operational voter guidance; it is not a comprehensive court-docket audit. [McLean County notice](https://mcleancountyil.gov/Blog.aspx?IID=303), [current county instructions](https://mcleancountyil.gov/197/Vote-by-Mail).

## Retrieval limitations

SBE pages and Chicago's HTML early-voting page returned 403 in direct web retrieval. Their fresh indexed official text was readable; the Chicago calendar PDF, McLean County instructions and USPS primary text were directly readable. The ILGA direct statute URL returned 502, so the absent-postmark provision is supported here by the election authority's published calendar, which expressly cites the statute. No stale third-party checklist was used as authority for a changed deadline.
