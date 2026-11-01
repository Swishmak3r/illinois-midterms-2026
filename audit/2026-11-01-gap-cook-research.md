# Cook Commissioner 10 and 16: source discovery handoff

Checked November 1, 2026. Research only; no application data changed.

## Successful source handoff

The original official source is the Cook County Clerk's current [View All Candidates](https://www.cookcountyclerkil.gov/elections/current-elections/view-all-candidates) page. The parent local-audit agent reported that this exact URL loaded successfully in Edge and displayed the current general-election roster:

| Office | Printed candidate | Party |
|---|---|---|
| County Commissioner, 10th District | Drake Warren | DEM |
| County Commissioner, 16th District | Miranda E. Hernandez | DEM |

The parent reported that each office listed only that candidate and is retaining the original DOM and hash. These are handoff observations, not an independent capture by this researcher. The parent's retained official-page evidence controls the final data change and closure decision, including vote limit and election date verification.

## Discovery and access observations

- The current-election URL above was discovered by following the direct official-source link on [Research Upon's Chicago page](https://researchupon.com/politics/us-chicago). That secondary page explicitly described the Clerk's November 3, 2026 general-election list, election code `110326`, and public endpoint path `/api/Candidate/GetAllCandidates`. The endpoint host and parameter schema were not established independently here and are not evidence of roster contents.
- In this child's web tool, the official candidate page returned HTTP 402. Normal PowerShell `Invoke-WebRequest` returned `No such host is known` for `www.cookcountyclerkil.gov`. No sandbox override, CAPTCHA bypass, credentials, or paid-access workaround was used.
- A direct endpoint attempt at the official site's `/api/Candidate/GetAllCandidates` was inaccessible to the web tool. An inferred `electionCode=110326` query was also inaccessible; it must not be treated as a verified API contract.
- The Chicago Board of Election Commissioners website was inaccessible here. Indexed official January and February candidate PDFs were primary-election lists and were not accepted as proof of the November general-election roster.
- [NoticeRegistry's Proviso notice reproduction](https://www.noticeregistry.com/illinois/notice/public-hearing-maywood-3342540), dated October 21, 2026, corroborated `Miranda E. Hernandez`, Democratic, in the 16th District, with `Vote for One`. Its publisher disclaimer and interleaved extracted text mean it was not accepted as the required original official source. No original publisher attachment was obtained in this child.

No source bytes were successfully downloaded by this researcher, so this report does not assert a source-file hash. Further source hunting stopped when the parent obtained the official current list in Edge. No fresh contradictory candidate name or additional candidate was established in this bounded research pass.
