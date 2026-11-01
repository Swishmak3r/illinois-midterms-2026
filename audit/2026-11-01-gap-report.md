# Five remaining roster-source gaps — November 1, 2026 follow-up

All five initial official-source access gaps are closed. The production changes affect only Cook County Commissioner Districts 10 and 16 and McHenry County Clerk, Sheriff and Treasurer. No additional contest or candidate was imported.

## Findings and changes

| Contest | Current official printed field | Result |
|---|---|---|
| Cook Commissioner 10 | Drake Warren — DEM | Existing candidate and party match. Current source confirms vote for one and a four-year term. |
| Cook Commissioner 16 | Miranda E. Hernandez — DEM | Added the missing middle initial to the display name. Candidate ID remains `miranda-hernandez`. Current source confirms vote for one and a four-year term. |
| McHenry County Clerk | Joe Tirio — Republican; Bill McNeese — Democratic | Both represented names and parties match. Vote for one. |
| McHenry County Treasurer | Donna M. Kurtz — Republican; Amin Karim — Democratic | Both represented names and parties match. Vote for one. |
| McHenry County Sheriff | Robb Tadelman — Republican | Represented name and party match. Vote for one. |

Each race now carries a November 1 roster check, direct official roster evidence, candidate identity evidence, and the source-backed vote limit. Resolved access-failure notes were replaced with accurate scope notes. The sources do not separately certify later named write-in eligibility, so that limitation remains. Prior officeholder, campaign-policy and endorsement findings were not re-audited or relabeled by this narrow roster task.

## Source capture

The [Cook Clerk's current candidate list](https://www.cookcountyclerkil.gov/elections/current-elections/view-all-candidates) loaded normally in the connected Edge browser. The selected election and heading were **November 03, 2026 Gubernatorial General Election**. Both complete office tables were read after loading. [Cook capture](2026-11-01-gap-cook-official.json) contains exact rendered-text excerpts and SHA-256 `4e8fd3e94d2ae212e420ee318f341c209ef5357a1c32b234fde8a66208ed4bac`. This hashes the documented excerpt serialization, not a raw HTTP body. The source lists each of these candidates alone in its printed table; no claim about named write-ins is inferred from that fact.

The [McHenry candidate-resources page](https://www.mchenrycountyil.gov/departments/county-clerk/elections/candidate) links its [official Certified Candidate List](https://www.mchenrycountyil.gov/home/showpublisheddocument/122937/639231562267270000) as **updated 8/24/2026**. The PDF's own title is **Certified Candidate List**, election **General - 11/3/2026**. It has four pages; page 2 contains contests 1600, 1610 and 1620. The current original was downloaded, extracted and visually checked. Two independent downloads produced the same 81,156-byte PDF and SHA-256 `e2ade372a8b11829f80a60fece3186b76bc57e4f88b4184bc42756272627c621`. The PDF does not print a publication date or these offices' term lengths; neither is invented. [McHenry evidence](2026-11-01-gap-mchenry.json) records the distinction and scratch source locations.

## Scope and validation

`node audit/2026-11-01-gap-check.cjs` passes against the captured source records. It checks the complete candidate fields, exact displayed names and parties, office/district/county scope, vote limits, source dates and URLs, stable candidate IDs, and removal of obsolete access-gap notes. It verifies the McHenry raw-file hash when that scratch source is present. It also guards every other original race object against the pre-edit baseline, except the separately authorized Knecht retention-geography correction owned by the geography audit.

`node audit/2026-11-01-local-check.cjs` also passes: all 211 SBE judicial/education offices and 219 active candidate rows remain represented, with 131 separate retention questions. The local directory remains 285 contests and 349 profiles, including 74 selected county-filed contests. The current source-freshness gap list is empty for these represented contests. This does not mean every local office in all 102 counties, every referendum, all eligible write-ins, or any individual voter's complete ballot is represented.

The additional [Dempsey identity cross-check](2026-11-01-gap-dempsey-name.md) found that court records use **Maire Aileen Dempsey**, while SBE and the current Cook Clerk list use **Marie Aileen Dempsey**. No official correction was found. That finding was handed to the judicial-module owner; this task did not alter her election identity.
