# Local, judicial and regional-education audit — November 1, 2026

The repaired directory contains **285 local/judicial/education contests and 349 candidate profiles**. It covers every active judicial and regional-superintendent office listed in the captured Illinois State Board of Elections general-election source, plus selected county-filed offices. This is not a complete inventory of every local contest in all 102 counties, all referenda, or all locally certified write-ins.

## What is verified

| Scope | Result |
|---|---|
| Complete SBE judicial/education source | All 211 active offices and 219 active candidate rows represented; names, party, exact office, status and direct candidate-source links compared automatically with the independent captured source. |
| Judicial retention | 131 separate nonpartisan Yes/No questions. No grouped competition between judges. Three-fifths threshold linked to Illinois Constitution Article VI, Section 12(d). |
| County-filed contests outside SBE source | 74 represented contests; 69 checked against a current specimen/candidate source on November 1, with source-access qualifications retained. Five current-roster gaps remain explicit below. |
| Current officeholding | The 55 inherited local contests were reviewed against official officeholder records separately from ballot rosters. New source-only profiles do not invent professional histories, incumbency, policies, money or endorsements. |
| Retained issue/endorsement claims | The separate content sweep examined 44 inherited active claims: 41 supported, one narrowed, two unsupported endorsements removed. The final 42 retained claims have primary evidence; checked dates were updated only for actually read sources. |

The raw SBE source was retrieved November 1, 2026 with all-page output and recorded SHA-256 `20d964b5f8b02a00792ed0ffd7d3b3c0e30b08da236f156d79bf3ce63dcf9603`. Candidate addresses were omitted from the extracted source. See [source snapshot](2026-11-01-roster-sbe.json), [coverage](2026-11-01-local-sbe-coverage.json), and [test results](2026-11-01-local-check-results.json).

## Material corrections

- Thomas Dart and John D. Idleburg were labeled challengers; official Cook and Lake sources establish they are incumbent sheriffs.
- Jon Albee was labeled the incumbent McLean sheriff. Official county records identify Matt Lane as sheriff and Albee as Operations Commander. The general ballot lists Albee; his profile now describes an open-seat candidacy.
- Mike Kelley was incorrectly labeled Republican. The Will County official directory identifies him as Democratic. Unsupported retirement and primary-defeat explanations were removed throughout the county data when the retrieved evidence established only the narrower current-officeholder/printed-roster comparison.
- Michelle Stiff was incorrectly described as Will County Auditor. She is Director of Workforce Services; the county auditor is Duffy Blackburn. The profile now cites the official workforce agency.
- Jason Helland was incorrectly described as the current Grundy County State's Attorney. LaSalle's official court page identifies him as a Circuit Court Judge.
- Amy Christiansen and Sonni Choi Williams' appointed judicial service is supported by actual Illinois Supreme Court appointment announcements, rather than inferred from a specimen ballot. Their unsupported Illinois AFL-CIO endorsements were removed: the cited general-election PDF does not list them.
- Theresa Rouse's policy summary was replaced with the actual current campaign statement about shared services and student support, under an education issue field. Preckwinkle's campaign claim of a past tax record is no longer converted into a future flat-levy pledge.
- The four Will retention judges now have four separate races. Existing candidate IDs were preserved. Will County Board races use `voteFor: 2`; missing districts 1, 2, 3, 4, 5, 8 and 11 were added from the official county specimen with district-only eligibility.
- Added 203 other SBE judicial/education offices with minimal verified profiles. Withdrawn retention candidates Stephen A. Kouri and John J. Mahoney were excluded from the active directory.
- Added 17 straightforward county/education contests from current official ballots and lists: DuPage forest-preserve president; eight regional-superintendent contests; Winnebago clerk/treasurer; Peoria sheriff/treasurer; Sangamon clerk/treasurer; St. Clair assessor/Board of Review. Sangamon's source did not supply a vote limit, so none was invented.

## Geography and ballot scope

All judicial court county memberships cite current Illinois Courts district pages. Automatic county research inclusion is allowed only for verified countywide contests and whole-court-district votes. Retention is circuitwide or judicial-district-wide under the Constitution. Subcircuits and resident-judge vacancies may have narrower electorates; they are not automatically assigned from court county membership. The Jackson Solverson vacancy is explicitly county-restricted in the official ballot, and its geography is narrowed to Jackson County.

The Third Appellate District contest includes Bureau, DuPage, Grundy, Iroquois, Kankakee, LaSalle and Will counties; it is not solely a Will County contest. `De Witt` uses the Census canonical county spelling for matching, while official source labels are preserved.

Educational service regions cross county lines. The Will specimen itself includes several ROE contests, and Kane's list includes Lake and McHenry regions. ROEs are not mapped to every resident of the county named in their title. County-board and subcircuit contests remain outside generic county expansion. ZIP/geography matching elsewhere in the application must continue to distinguish research overlap from a personal ballot.

## Remaining current-roster gaps

| Entries | What is known | What remains unresolved |
|---|---|---|
| Cook Commissioner 10 | Drake Warren has candidate/endorser evidence; the current county official is Bridget Gainer. | A complete current election-authority general roster was not retrieved. The profile does not claim unopposed status or a complete field. |
| Cook Commissioner 16 | Miranda E. Hernandez appears in a reproduction of the Clerk's October 21 Proviso specimen; Frank Aguilar is the current official. | The original publisher/certified complete roster was not retrieved. This is disclosed rather than called direct official-source verification. |
| McHenry clerk, sheriff, treasurer | Names match indexed official June list content and the October 14 specimen reproduction. | The advertised August 24 original list was inaccessible after direct and alternative official URL attempts. The old source date is retained and the newer-source gap is visible. |

Jackson's four initial retrieval gaps were resolved by downloading and rendering the official preview ballot; all four rosters match. St. Clair's three inherited offices were upgraded from filing-status evidence to the Clerk-certified general specimen. Raw source PDFs and renderings remain local; the [reviewed-file hash manifest](2026-11-01-local-source-files.json) identifies them without publishing raw documents. Original official URLs remain in the race evidence and detailed reports.

Detailed race-by-race evidence and access logs are in [Cook/collar report](2026-11-01-local-cook-collar.md), [other-counties report](2026-11-01-local-other-counties.md), [collar additions](2026-11-01-local-additions-collar.json), [other additions and source replacements](2026-11-01-local-additions-other.json), and the [content claim ledger](2026-11-01-content-local.json).

## Validation

`node audit/2026-11-01-local-check.cjs` passes. It compares every active SBE judicial/education candidate with the displayed name, party, exact office, status and evidence URL; excludes withdrawn retention rows; checks separate Yes/No retention schema and vote limits; verifies unique IDs/codes, explicit status sources and the corrected regressions; and lists county-filed exclusions and stale-roster gaps explicitly.

Passing this test demonstrates source parity and known-regression prevention. It does not turn selective county coverage, inaccessible originals, campaign-authored claims or ZIP overlap into a 100% personal-ballot guarantee.
