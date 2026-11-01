# Appellate retention geography review — November 1, 2026

**One material error was corrected:** James A. Knecht's retention electorate is the former **30-county Fourth Judicial District**, not the present **41-county Fourth District**. Barberis's current 48-county Fifth District and Lampkin's Cook County scope remain correct.

## Why court jurisdiction and retention geography differ

[705 ILCS 23/5 and 23/35](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4138&Chapter=COURTS&ChapterID=50&MajorTopic=RIGHTS+AND+REMEDIES) preserve an eligible incumbent appellate judge's choice to seek retention in the district that elected the judge or the redrawn district. The present court county list therefore cannot automatically supply the electorate for a retention question.

The official [Clark County specimen ballot](https://www.clarkcountyil.org/media/2026nov3ilclark-Publication.pdf) and [Macon County specimen ballot](https://maconcounty.illinois.gov/download/specimen-ballot/?filename=2026-General-Specimen-Ballot.pdf&ind=1789592172553&refresh=ea172ebb&wpdmdl=14661), each page 1, separately list Knecht's Fourth District retention and Barberis's Fifth District retention. These counties were in the former Fourth and are in the current Fifth. Given the statutory alternatives, their certified ballot placement establishes Knecht's use of the former district and Barberis's use of the current expanded district. **This is an inference from official ballots plus the statute; the signed retention declarations were not retrieved.**

The [State's Attorneys Appellate Prosecutor FY21 annual report](https://www.ilga.gov/documents/reports/ReportsSubmitted/3346RSGAEmail6565RSGAAttachFY21%20Annual%20Report_UPLOAD.pdf), printed page 21 (PDF page index 21), explicitly enumerates the former Fourth's 30 counties. Section 10 of the Judicial Districts Act retains the First District as Cook County; Lampkin has no old/current boundary difference.

## Changes

Only `sbe-local-4th-appellate-retain-knecht` was changed in `data-local.js`. Its `counties` now holds the 30-county retention electorate, while `courtCounties` preserves the current 41-county court jurisdiction as context. Added `retentionDistrictVintage`, an explanatory profile note, and source evidence. Every other local race object was checked for semantic equality immediately after the patch: **284 unchanged**.

Added to Knecht's electorate: Champaign, Clark, Coles, Cumberland, De Witt, Douglas, Edgar, Macon, Moultrie, Piatt, Vermilion.

Removed from the incorrectly inferred electorate: Boone, Carroll, Fulton, Hancock, Henderson, Henry, Jo Daviess, Knox, Lee, Marshall, McDonough, Mercer, Ogle, Peoria, Putnam, Rock Island, Stark, Stephenson, Tazewell, Warren, Whiteside, Winnebago.

The full old/new arrays are in [geography-review-correction.json](geography-review-correction.json). Census spelling `De Witt` is used consistently.

## Verification

- Regenerated all 70 persisted community associations. ZIP and postal-city resolution already computes local races dynamically from the corrected electorate.
- Extended `scripts/test-geography-audit.cjs` to test Knecht's inclusion/exclusion against the reviewed 30 counties for **every 1,575 postal ZIPs and all 70 communities**.
- **130 ZIP associations added and 287 removed**, recorded in [geography-review-locations.json](geography-review-locations.json). These remain approximate ZCTA research associations, not certified voter-specific eligibility.
- Explicit regressions: Champaign 61820 and Macon 62521 include Knecht; Peoria 61602, Rockford 61101 and Rock Island 61201 exclude him.
- Confirmed Barberis retains 48 counties and Lampkin retains Cook alone.
- Geography suite passes; structural evidence check passes with zero errors.

The direct Clark/Macon PDFs were downloaded successfully and hashed in [geography-review-sources.json](geography-review-sources.json). Direct ILGA HTTP retrieval returned 403, so statutory text and the historical report were reviewed through the web tool's readable primary-source content; no fabricated download hashes are assigned to those two sources.
