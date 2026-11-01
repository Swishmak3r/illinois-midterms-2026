# Local roster and officeholder recheck — November 1, 2026

Scope: the 23 existing local contests outside Cook, DuPage, Kane, Lake, McHenry and Will counties. This is a read-only evidence report for the integrating editor. It does not certify complete county ballots, write-in eligibility, endorsements, policy summaries or personal district eligibility.

## Findings

**Definite error:** `mclean-sheriff` labels Jon Albee an incumbent and names him as the current sheriff. The current [official elected-official list](https://www.mcleancountyil.gov/486/Elected-Officials) names Matt Lane as sheriff. The [official staff directory](https://mcleancountyil.gov/m/directory/department?did=27) identifies Jon Albee as Operations Commander. The November general specimen ballot lists Albee, with no Democratic candidate. Correct `isOpenSeat` to `true`, incumbent to `Matt Lane (R; not a printed candidate)`, Albee's role to `Candidate for McLean County Sheriff`, and `incumbentStatus` to `Open-seat candidate`. This conclusion compares the current officeholder with the printed roster; it does not assert a retirement date or motive.

The other 22 incumbent/open-seat classifications have corroborating current official officeholder evidence listed below. Their existing role citations generally identify candidacy only and explicitly disclaim an incumbency claim, so the editor should add dedicated `incumbentStatus` / `incumbent` evidence. A passing metadata test did not establish those facts.

Remove unsupported reasons such as `Steve Summers D retiring` and `Thomas Holbrook D retiring` from current incumbent strings unless separate primary evidence for retirement is retained. Current-official pages plus their absence from the general candidate list establish the narrower open-seat classification.

**Roster review:** All 23 current contest rosters were matched in fresh primary-source retrieval/search review. Four Champaign contests rely on the current search-indexed official table (direct page retrieval still returns HTTP 403). A follow-up successfully downloaded and visually reviewed Jackson County’s official September 17 preview ballot and St. Clair’s certified specimen ballot in its general-election voter guide. This resolves the initial Jackson retrieval gap and strengthens St. Clair from filing-status evidence to printed-ballot evidence. No roster discrepancy was found. Exact follow-up source URLs, hashes, images and seven roster refresh records are in `2026-11-01-local-additions-other.json`.

## Race-by-race result

| Race ID | Printed/current roster checked | Officeholder result |
| --- | --- | --- |
| `sangamon-county-2026` | Paula Crouch R; Marc Bell D — S1 | Paula Crouch is current sheriff, appointed 2024 — I1 |
| `winnebago-sheriff` | Gary Caruana R; Dominick Barcellona Independent — S2 p2 | Gary Caruana current sheriff — I2 |
| `peoria-clerk` | Rachael Parker D; Kari Gabbert R — S3 p2 | Rachael Parker current clerk — I3 |
| `champaign-clerk` | Aaron Ammons D; Alan Anderson R — S4 indexed official table | Aaron Ammons current clerk — I4 |
| `champaign-executive` | Michelle Jett D — S4 indexed official table | Steve Summers current executive; Jett is open-seat candidate — I5 |
| `champaign-treasurer` | Byron Clark D — S4 indexed official table | Byron Clark current treasurer — I6 |
| `champaign-sheriff` | Dustin D. Heuerman D; Gregory A. Worrell R — S4 indexed official table | Dustin D. Heuerman current sheriff — I7 |
| `mclean-clerk` | Joshua Crockett D; Kathy Michael R — S5 p2 | Kathy Michael current clerk — I8 |
| `mclean-sheriff` | Jon Albee R — S5 p2 | **Correct:** Matt Lane current sheriff; Albee open-seat candidate — I8/I9 |
| `mclean-treasurer` | Rebecca C. McNeil R — S5 p2 | Rebecca C. McNeil current treasurer — I8 |
| `madison-clerk-and-recorder` | Rachelle Nicole Bauerle D; Linda A. Andreas R — S6 p1, visually read | Linda Andreas current clerk/recorder — I10 |
| `madison-sheriff` | Jeff C. Connor R — S6 p1, visually read | Jeff Connor current sheriff — I10 |
| `madison-treasurer` | Mike Babcock R — S6 p1, visually read | Mike Babcock current treasurer — I10 |
| `st-clair-clerk` | Laura Kaemmerer D; Gary Hursey R — S7 active filings; specimen p6 independently matched | Thomas Holbrook current clerk; neither printed candidate is incumbent — I11 |
| `st-clair-treasurer` | Andrew Lopinot D; Myki Rhodes R — S7 active filings; specimen p6 independently matched | Andrew Lopinot current treasurer — I11 |
| `st-clair-sheriff` | Richard "Rick" Watson D active; Steve Patterson R `Objection Sustained` — S7 | Richard "Rick" Watson current sheriff — I11 |
| `rock-island-clerk` | Maggie (McGrath) Crouch D; Steven G Rugh R — S8 p2 | Karen Kinney current clerk, neither candidate incumbent — I12 |
| `rock-island-sheriff` | Marcus Herbert D; Jamie M. Shoemaker R — S8 p2 | Darren Hart current sheriff, neither candidate incumbent — I13 |
| `rock-island-treasurer` | Nick Camlin D — S8 p2 | Nick Camlin current treasurer — I14 |
| `jackson-clerk` | Doug Gill R; Frank L Byrd D — S9 p2 visually read in successful follow-up | Frank L. Byrd current clerk — I15 |
| `jackson-sheriff` | Jay Wittenborn R; Robert "Bob" Burns D — S9 p2 visually read in successful follow-up | Robert Burns current sheriff — I16 |
| `jackson-treasurer` | Liz Stevenson D — S9 p2 visually read in successful follow-up | Liz Stevenson current treasurer — I16 |
| `jackson-assessor` | Tammy Ehlers D — S9 p2 visually read in successful follow-up | Tammy Ehlers current Chief County Assessment Officer — I17 |

## Roster sources

All accessed November 1, 2026. Dates described as election dates identify the election, not document publication timestamps.

- S1: [Sangamon County Clerk — November 3, 2026 candidate listing](https://sangamondepartments.blob.core.windows.net/dnnfiles/Clerk/Elections/Candidates/2026%20Election/11-3-26%20Co%20Wide%20and%20Co%20Board%20Candidate%20Listing.pdf?si=DNNFileManagerPolicy&sig=R018BKkJgc9t9fEMtDxNLHZcKGq2gO%2Ftnwnsc4zcEv8%3D&sr=b&sv=2017-04-17), page 1, sheriff rows.
- S2: [Winnebago County Clerk — November 3 general sample ballot](https://wincoil.gov/media/attachments/2026/10/03/sample-ballot.pdf), page 2. The URL is dated October 3; document content says November 3, 2026, despite an older PDF title.
- S3: [Peoria County Election Commission — 2026 general sample ballot](https://www.peoriaelections.gov/DocumentCenter/View/1454/2026-General-Election---Sample-Ballot), page 2.
- S4: [Champaign County Clerk — 2026 candidates](https://www.champaigncountyclerk.com/elections/who-represents-me), indexed official `COUNTY-WIDE OFFICES` table. Direct retrieval HTTP 403; search indexed table contains all four office rows. No newly observed roster discrepancy.
- S5: [McLean County Clerk — 2026 general specimen ballot](https://www.mcleancountyil.gov/DocumentCenter/View/32912/2026-General-McLean-County-Specimen-Ballot), page 2. This is a readable primary replacement/corroboration for the existing Bloomington source, which returned HTTP 403 during this check.
- S6: [Madison County Clerk — 2026 general candidate list](https://www.madisoncountyil.gov/document_center/CountyClerk/2026%20Election/Candidate%20list.pdf?t=20260930111710911), page 1. Downloaded successfully, image-only PDF rendered and visually read; official local names/parties match current data. Local evidence copy and rendered page are in `2026-11-01-local-sources/`.
- S7: [St. Clair County Clerk voter-services candidate filings](https://vr.platinumvrms.com/county/rslrequest/6?t=2), November 3, 2026 election. Active candidates for Clerk, Treasurer, Sheriff match data; Patterson is explicitly `Objection Sustained`. The follow-up also visually verified the three printed rosters on page 6 of the [certified official specimen](https://www.co.st-clair.il.us/webdocuments/departments/countyclerk/elections/2026%20General%20Election%20Voters%20Guide.pdf). No named write-in qualification is inferred.
- S8: [Rock Island County Clerk — 2026 general sample ballot](https://www.rockislandcountyil.gov/DocumentCenter/View/3377), page 2.
- S9: [Jackson County Clerk — 2026 preview ballot](https://jacksoncounty-il.gov/DocumentCenter/View/1197/2026-Preview-Ballot), still linked by the [official clerk page](https://jacksoncounty-il.gov/197/Clerk-Recorder--Election-Authority). Initial retrieval returned HTTP 404. Follow-up succeeded with browser User-Agent and the `?bidId=` query suffix: official PDF downloaded, page 2 rendered and all four county-office rosters visually reverified. Printed preview timestamp September 17, 2026, 14:39:38. Local evidence PDF and images appear in `2026-11-01-local-sources/`.

## Current officeholder sources

All consulted November 1, 2026. These sources establish officeholding, not candidacy; combine with the separate roster sources above.

- I1: [Sangamon official elected-official directory](https://sangamonil.gov/departments/a-c/county-clerk/elected-officials/sangamon-county-officials) — Paula Crouch, term 2022–2026, appointed 2024.
- I2: [Winnebago Sheriff's Office service directory](https://winnebagosheriff.com/service) — identifies Sheriff Gary Caruana and links his official biography; [Illinois Sheriffs' Association current county directory](https://www.ilsheriff.org/county/winnebago/) corroborates.
- I3: [Peoria County Clerk office](https://www.peoriacounty.gov/1342/County-Clerk) — Rachael Parker.
- I4: [Champaign County Clerk official site](https://champaigncountyclerkil.gov/) — Aaron Ammons.
- I5: [Champaign County Executive](https://www.champaigncountyil.gov/CountyExecutive/MeettheCountyExec.php) — Steve Summers.
- I6: [Champaign County Treasurer](https://www.champaigncountyil.gov/treasurer/treasurer.php) — Byron Clark.
- I7: [Champaign County Emergency Management Agency](https://champaigncountyil.gov/EMA/) — Sheriff Dustin D. Heuerman.
- I8: [McLean County elected officials](https://www.mcleancountyil.gov/486/Elected-Officials) — Kathy Michael, Matt Lane, Rebecca C. McNeil.
- I9: [McLean Sheriff staff directory](https://mcleancountyil.gov/m/directory/department?did=27) and [Jon Albee individual entry](https://www.mcleancountyil.gov/m/directory/employee?eid=252) — Matt Lane Sheriff, Jon Albee Operations Commander.
- I10: [Madison County Citizen's Guide 2024–2026](https://cms4files.revize.com/madisoncountyilus/document_center/Government%20Transparency/Madison%20County%20Citizen%27s%20Guide%20%202024-2026%20%281%29.pdf) — Linda Andreas Clerk/Recorder, Jeff Connor Sheriff, Mike Babcock Treasurer.
- I11: [St. Clair official elected officials](https://www.co.st-clair.il.us/Elected-Officials) — Thomas Holbrook Clerk, Andrew Lopinot Treasurer, Richard "Rick" Watson Sheriff.
- I12: [Rock Island official Karen Kinney profile](https://www.rockislandcountyil.gov/m/directory/employee?eid=18), current term 2022–2026.
- I13: [Rock Island official Darren Hart profile](https://www.rockislandcountyil.gov/m/directory/employee?eid=82), current term 2022–2026.
- I14: [Rock Island current staff directory](https://rockislandcountyil.gov/m/directory) — Nick Camlin Treasurer.
- I15: [Jackson Clerk & Recorder](https://jacksoncounty-il.gov/197/Clerk-Recorder--Election-Authority) — Frank L. Byrd.
- I16: [Jackson current staff directory](https://jacksoncounty-il.gov/m/directory) — Robert Burns Sheriff, Liz Stevenson Treasurer.
- I17: [Jackson official Tammy Ehlers profile](https://www.jacksoncounty-il.gov/m/directory/employee?eid=45) — Chief County Assessment Officer; [official FOIA directory](https://jacksoncounty-il.gov/325/Freedom-of-Information-Act-FOIA-Informat) also names her Supervisor of Assessments.

## Coverage limits

The site contains only selected county offices. For example, the newly read Winnebago ballot also contains Clerk and Treasurer contests, and Peoria contains Sheriff and Treasurer contests absent from the current directory. This report does not claim all local contests or all Illinois counties were audited. The full official sample ballot remains necessary for county boards, judicial contests, regional superintendents, public questions and other districts.
