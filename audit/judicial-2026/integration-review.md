# Judicial research integration review — November 1, 2026

This read-only production review and test work is separate from the specialist opinion, bar-report, geographic-scope and party-history research. Only the two new QA scripts and this report were authored by the integration reviewer.

## Checks added

`scripts/check-judicial-research.cjs` validates:

- Exact identity equality between all 131 production retention candidates and the judicial profiles, with one separate Yes/No decision for each judge.
- Each professional rating, source identity, poll percentage, respondent count, null and Alliance member rating against the separately reviewed bar-source ledger.
- Fourteen insufficient-response polls remain neutral missing results, with no fabricated zero percentages or negative recommendations.
- Barberis's committee “No” explicitly retains the nonparticipation reason and stays distinct from the separate 55.88% attorney poll (36 respondents).
- Every displayed ruling has a court, date, identified judicial role, holding, reasoning, appeal/later-history statement and pinpointed official court URL. These checks validate provenance structure; they do not replace reading the opinion.
- No numerical judicial ideology/Trump score and no accidental reuse of the congressional voting score. A substantive case-level policy comparison needs an exact question and a dated policy source; noncomparability and insufficient evidence require explanations.
- Historical election party remains a dated, separately sourced fact rather than the retention ballot party or a present-belief declaration. The four sourced Will County election histories survive normalization.
- Published coverage counts match the actual module. The number of verified cases is intentionally not fixed because coverage is still expanding.

`scripts/check-judicial-ui.cjs` exercises:

- Retention cards and expanded cards without congressional alignment meters or generic campaign-issue summaries.
- A Will profile's trial/appellate distinction, appeal result, source links, historical party caveat and voluntary-poll qualification.
- Barberis's nonparticipation explanation alongside the independently labeled attorney poll.
- Insufficient-response presentation without zero/negative shorthand.
- Cook County disagreements preserved between ISBA, CBA and the separate Alliance organizations.
- Retention-only and mixed comparisons, preserving House candidates' existing voting scores while excluding an overall judicial score.
- Exclusion of retention judges from generic local campaign-issue results.
- Desktop and 390/320-pixel layout containment in Chromium/Edge, Firefox and WebKit, including modal, case and assessment widths; browser errors are collected.
- The entire embedded built module equals the source module, so stale text fails even if coverage counts are unchanged.
- Dempsey's Marie/Maire and Stacey's Chris/Christ court-name variants resolve to the same ballot candidate, with an explicit official-directory identity note.
- Quinn's May 18, 2023 statement remains dated, attributed, and separate from selected court holdings and election-party history.
- Grischow's Allen date explicitly identifies the trial TRO, separately from the appellate decision date.
- Cadengo's case-level Trump comparison preserves the limited practical similarity, different legal questions and rationales, later-policy timing, official court and Federal Register sources, pinpoints, and absence of a personal-belief inference.

## Final frozen-build results

- Data assertions: **seven groups passed** with 131 profiles, 131 bar-report profiles, 128 profiles containing selected rulings and **200 selected rulings**.
- Browser assertions: **126 passed, zero failed** against the final frozen 200-case build at `http://127.0.0.1:4174/`. Chromium/Edge, Firefox and WebKit each passed fourteen checks at widths 1440, 390 and 320 pixels. This preserves all ninety original checks and adds thirty-six edge-case checks. Exact entire-module equality passed in all nine browser/width combinations.
- Successful desktop and phone screenshots show Bertani-Tomczak's People v. Sanders case content, with the case heading below the sticky profile header. Both were visually inspected. Paths: `C:/Users/rodne/Documents/Codex/2026-11-01/i-ne/outputs/retention-desktop.png` and `C:/Users/rodne/Documents/Codex/2026-11-01/i-ne/outputs/retention-phone.png`.
- Machine-readable results: `output/audit/judicial-research.json`, `output/audit/judicial-ui.json`, and the preserved combined `audit/judicial-2026/integration-review-results.json`.
- Existing campaign-browser tests reference nonjudicial candidates for their numerical scores and stable modal selectors. No test adjustment was needed to preserve their intended meaning.
- No unresolved production integration defect found in this final review. The initial missing Bertani/Jones historical-party normalization was raised to the parent and corrected before data validation passed. Screenshot framing was adjusted in the QA script only; no production files were edited by this reviewer.

## Continuing limits

These automated checks cannot certify interpretation of a legal decision, exhaustive appellate history, a judge's personal beliefs or an exact personal ballot. Those remain source-research and election-authority matters. The tested build contains the final frozen source ledgers and retains documented limitations for cases without verified subsequent history or substantive policy comparability. No generic browser-suite rerun was performed by this reviewer in this final pass; that separate baseline remains parent-owned.
