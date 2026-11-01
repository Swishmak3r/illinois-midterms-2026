# Federal and statewide roster check — November 1, 2026

All 17 congressional districts, the U.S. Senate contest, and the five statewide executive contests were compared with the complete current [Illinois State Board of Elections candidate list](https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=sejIrI%2BQmww%3D). The sanitized 528-record source snapshot is `2026-11-01-roster-sbe.json`; it records retrieval time and the raw response hash. It excludes candidate street addresses.

The existing **39 printed federal candidates** and **11 printed statewide candidate/ticket profiles** match every active state filing in these offices, with no missing or extra printed nominee. The governor race has three two-person tickets, so these 50 printed profiles correspond to **53 individual active SBE records**. Removed filings are excluded from that comparison and recorded separately in the audit manifest. The check establishes current printed-roster agreement, not an exhaustive statewide write-in list or revalidation of every policy and finance claim.

## Corrections

- Closed the previously unresolved Chad Koppie general-election status: the directly retrieved state list confirms his active Republican candidacy in Congressional District 7.
- Added exact SBE candidate links and printed ballot names to all printed profiles, with roster check date November 1. Other evidence retains its original review date.
- Replaced malformed `ElectionID=71` state-list links with the verified current election link.
- Added seven omitted governor write-in profiles documented by county election authorities. [Lake County's September 9 list](https://www.lakecountyil.gov/DocumentCenter/View/13059/Candidate-List) names Misty Metroz, Mike Vick, Griselda Romero, Richard Benedict Mayers, Elizabeth Ann Sebesta and Patricia L. Tillman. [Winnebago County's valid-write-in list](https://wincoil.gov/media/attachments/2026/09/16/write-in-nov-3-2026.pdf) also names Rafael Varela and confirms Vick/Pierce, Romero/Arndell and Tillman/Mosley as joint tickets.
- Four governor write-in records have no lieutenant-governor named in these county sources. Their profiles explicitly say that a complete ticket was not verified. A single-name declaration is not represented as a confirmed complete joint ticket. No party is invented from a blank county-list column.
- Added Lake and Winnebago authority evidence for Anna Schiefelbein and Timothea Papas, alongside the [St. Clair County September 2 filings](https://vr.platinumvrms.com/county/rslrequest/6?t=2). Their July removal from the printed state ballot remains distinct from later write-in declarations.
- Rechecked the four Congressional District 10 write-ins against the actual Lake PDF and Brad Ahrens for Congressional District 17 against Winnebago's valid-write-in PDF. This is authority-specific evidence.

## Limits that remain visible

There is no single retrieved comprehensive county write-in registry for all Illinois election authorities. Potential leads for Naomi Craine, Je’Rico J. Brown, John Kitover, Taegun Eimer and Jeffrey Schiefelbein remain unresolved because a current authority declaration was not retrieved in this pass; they were not added from secondary directories alone. These leads are recorded in `2026-11-01-roster-federal-statewide.json`. The absence of a profile does not mean the person is ineligible everywhere.

The state list itself includes inactive/removed petition filings, so the code explicitly filters by active status. A state petition's removal does not itself cancel or establish a later county write-in declaration. Party, financial registration, primary-election results and campaign announcements are not substitutes for current general-election status.

## Validation

Run `node audit/2026-11-01-roster-federal-statewide-test.cjs`. It checks all district codes, exact active state-record coverage, party matches, duplicate identities, ticket member counts, exclusion of removed printed candidates, separate county write-in evidence, and explicit incomplete-ticket wording. The separate updater records the reproducible changes; it does not fetch source data or claim to re-audit older policy evidence.
