# 2026 retention inventory and research method

Prepared November 1, 2026. This task changed audit files only.

## Coverage and ballot provenance

`inventory-retention.json` contains **131 unique candidate IDs and 131 separate retention questions**: 128 circuit judges and three appellate judges. There are 59 Cook circuit judges, 69 circuit judges outside Cook, and no Supreme Court retention question in this site inventory. The three appellate candidates are:

| Judge | Judicial district | Candidate ID |
|---|---|---|
| Bertina E. Lampkin | First | `sbe-1st-appellate-retain-lampkin-bertina-e-lampkin` |
| James A. Knecht | Fourth | `sbe-4th-appellate-retain-knecht-james-a-knecht` |
| John B. Barberis, Jr. | Fifth | `sbe-5th-appellate-retain-barberis-jr-john-b-barberis-jr` |

Every inventory record matches the site's candidate name and office to an active record in the previously audited [Illinois State Board of Elections November 3 general-election roster](https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=sejIrI%2BQmww%3D). The sanitized local snapshot is `audit/2026-11-01-roster-sbe.json`, retrieved 2026-11-01T16:45:05.186Z; source HTML SHA-256 `20d964b5f8b02a00792ed0ffd7d3b3c0e30b08da236f156d79bf3ce63dcf9603`. This inventory reuses that audited snapshot; it does not claim a second fresh electoral-source retrieval. Individual candidate and office source links remain in every row. Candidate home addresses are excluded.

Run `node audit/judicial-2026/inventory-build.cjs` from the repository root to reproduce the inventory. `inventory-batches.cjs` produces eight disjoint files under `batches/`, covering all 124 circuit judges other than Will County's four. Validation confirms 124 distinct IDs, with neither Will nor appellate judges included. Batches 1–4 cover Cook; 5–8 cover the other circuits.

## Official opinions route

The [Illinois Courts opinions index](https://www.illinoiscourts.gov/top-level-opinions?t=appellate) provides opinion and Rule 23 order metadata and document links. Its public ASP.NET form supports keyword, court, filing-date, decision-type and publication-status filters. It returns 150 rows per page. A keyword can match document text, including judicial names. The form has a `Search All Years` option. The same page explains that Slip decisions may change; Released and Final identify publication stages. Rule 23 orders have different citation treatment from published opinions. These labels do not establish that every appeal is exhausted.

`inventory-opinions.py` reproduces the public search and pagination without a browser or an undocumented private API. It records query parameters, retrieval time, page hashes, completion status, case name, citation, filing date, court, decision type, publication status, notes, and document URL. It downloads metadata only. A missing result table raises an error. An official row without a document link is preserved with `url: null`.

Example:

```powershell
python audit/judicial-2026/inventory-opinions.py --query Bertani-Tomczak --all-pages --output audit/judicial-2026/inventory-opinions-bertani-tomczak.json
python audit/judicial-2026/inventory-opinions.py --query Lampkin --court 'First District Appellate Court' --all-pages --output audit/judicial-2026/inventory-opinions-lampkin.json
```

Python dependencies: `requests`, `beautifulsoup4`. Pagination can be capped with `--max-pages`; a capped result explicitly reports `completePagination: false`. The script retains the form's selected filters and tokens for successive requests. It posts `ctl00$ctl04$btnSearch` to search and `ctl00$ctl04$gvDecisions` with `Page$N` to paginate. These are the public form's own controls.

The Bertani-Tomczak demonstration found 137 index hits from 2006 through 2026. These are **search hits, not 137 verified rulings**. Lampkin requires 20 pages and includes unrelated matches such as a case party named Lampkins. The latter demonstrates why name-search totals must not become judicial productivity or reversal statistics.

## A defensible per-judge workflow

1. Resolve identity against the ballot roster and court. Retain source spelling separately when an organization uses a variant.
2. Search the full name, distinctive surname, and reasonable name variants. Search all years. Court filtering can reduce false positives but can also omit older cases affected by district boundaries or a judge's service in another role; record any such restriction.
3. Open relevant primary decisions. Verify the heading, panel, authored opinion, concurrence or dissent, and any trial-court attribution. A cited precedent, attorney, litigant, or unrelated same-name judge is not participation.
4. Summarize the actual issue, the judge's action, governing legal rule, disposition, and any later reversal or modification found. For a circuit judge, explain when the source is an appellate court's description of the trial ruling. Preserve page or paragraph references.
5. Select meaningful examples across available subjects rather than only favorable or unfavorable outcomes. An example is not a complete career assessment. Explain the selection period and subject limits.
6. Record each researched judge's status separately: primary ruling reviewed; search completed but no suitable verified example selected; source inaccessible; or research still pending. Never translate absence of a retrieved example into no rulings, no controversy, or no political alignment.
7. Keep case outcomes, historical election party, current bar assessments, and any policy comparison distinct. A personal ideology label cannot be established from an isolated ruling. Any outcome comparison needs a specific, dated policy baseline and explanation of judicial constraints.

An exhaustive name-search crawl is feasible, but it is not an exhaustive judicial record: not every circuit order is published, names can vary, older files may be scanned, and court decisions often discuss multiple judges. Docket-level follow-up may require the responsible clerk. Preserve search logs and avoid presenting a completeness percentage unsupported by the universe of all rulings.

## Current professional evaluations

`inventory-bar-sources.json` and `inventory-bar-sources.md` supply current 2026 source coverage for all 131 candidate IDs, plus separate CBA and Alliance assessments for all 60 Cook candidates including Lampkin. They contain the exact source name, association, method, source URL, date, poll values where applicable, and name mappings. See that report for methodology and source disagreements.

Review before integration: Dempsey's site spelling differs from all three bar lists; documented source-name variants are documented; Stephen A. Kouri appears in a bar poll but not the site's active ballot roster. Bar participation and ratings are not electoral certification. Fourteen circuit polls lack sufficient responses. Barberis has separate committee and attorney-poll results with different evidentiary meanings. Do not collapse these into one unlabeled rating or an ideology score.
