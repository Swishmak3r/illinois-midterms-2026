# 2026 judicial retention bar-source audit

Checked November 1, 2026. No production data changed.

`inventory-bar-sources.json` maps all **131 current site candidate IDs** to current general-election professional assessments. Coverage: 60 Cook judges and 71 outside Cook. Every assessment includes the exact source judge name, source URL/title, method, election, and check date. It preserves each association's result instead of combining recommendations into an ideology score.

## Authoritative sources and extraction

| Source | Verified current coverage and format | Date |
|---|---|---|
| [ISBA outside-Cook report](https://www.isba.org/judicial-elections/reports/all-results) | 69 matched circuit poll rows and two appellate judges. HTML tables preserve seven percentages and respondent counts. One additional source row, Stephen A. Kouri, is absent from the current active roster; Illinois Courts lists his July 31, 2026 retirement date. | [Release announced Sept. 10](https://www.isba.org/barnews/judicialevaluations) |
| [ISBA Cook evaluations](https://www.isba.org/judicial-elections/counties/cook) | 60 retention recommendations; HTML `details/summary` elements include individual narratives. | [Release announced Sept. 24](https://www.isba.org/barnews/judicialevaluations) |
| [Chicago Bar Association guide](https://www.chicagobar.org/CBA/JEC/Judicial_Voters_Guide.aspx) | 60 current retention judges; all rated Qualified. Machine-readable HTML and a [16-page Smart Guide PDF](https://www.chicagobar.org/common/Uploaded%20files/JEC%20PDFs/2026GeneralElectionSmartGuide.pdf). | [Released Sept. 24](https://cbaatthebar.chicagobar.org/2026/09/24/chicago-bar-association-releases-judicial-evaluation-findings-for-november-3-general-election/) |
| [Alliance table](https://www.voteforjudges.org/wp-content/uploads/2026/10/2026-Alliance-General-Ballot-Ratings-Oct-6-2026.pdf) | 60 retention rows on pages 8-9; 13 association columns. Extracted using the PDF text coordinates and visually checked against both table pages. | [Landing page](https://www.voteforjudges.org/) reports Oct. 6, 10:40 a.m. update |
| [Chicago Council of Lawyers narratives](https://www.voteforjudges.org/chicago-council-of-lawyers-evaluation-report/) | Individual Cook evaluations and detailed evaluation method. Current report linked by [CCL's official evaluations page](https://chicagocouncil.org/judicial-evaluations/). Narrative text was read but not copied into the dataset. | Official referring page updated Oct. 19 |

## Interpretation and material findings

[ISBA distinguishes committee evaluations from voluntary attorney advisory polls](https://www.isba.org/judicial-elections/howitworks). Poll ratings represent respondents, not the ISBA or all lawyers. At least 60% agreement on overall requirements produces Recommended; no-opinion responses are excluded separately for each question. Fourteen matched circuit judges have insufficient responses and therefore no usable percentage or recommendation. The JSON retains nulls.

John B. Barberis Jr. has two separate results: the committee's No reflects his declined participation; the attorney poll is Not Recommended, 55.88% overall agreement, 36 respondents. Neither should be described as the other.

ISBA advises against retaining Lorraine Mary Murphy and Tiesha L. Smith, while CBA finds both Qualified. The Alliance table also contains unfavorable member ratings for Erin Haggerty Antonietti and Teresa Molina-Gonzalez. Each assessment is kept with its organization; the ISBA column duplicates ISBA's own published evaluation and is not an extra organization. Blank Alliance cells and the no-fault evaluation footnote remain distinct from No.

These are professional evaluations, not findings about party allegiance, Trump support, or the merits of individual legal rulings.

## Matching and limitations

- Exact or explicitly documented name mappings cover all 131 records. Review the JSON `manualNameMappings` before integration.
- Election listings use **Marie Aileen Dempsey**; the [Cook court directory](https://www.cookcountycourtil.gov/judge/dempsey-maire), assignment order and bar evaluations use **Maire Aileen Dempsey**. Preserve the ballot name and ID, with the court/bar spelling as an explicit matching alias. The electoral and court evidence is documented in `audit/2026-11-01-gap-dempsey-name.md`; no formal election-authority correction is established.
- **Chris Stacey** (ballot/CBA/Alliance), **Christ Stacey** (ISBA), and **Christ Stanley Stacey** are explicit source-name variants. The [official Cook court directory](https://www.cookcountycourtil.gov/judge/stacey-christ) identifies Honorable Christ Stanley Stacey. Do not describe ISBA's Christ as a typo. CBA separately prints **Erin Haggerty Antoniett** without the final i; preserve each source spelling.
- The bar report includes Stephen A. Kouri, but [Illinois Courts' official vacancy table](https://www.illinoiscourts.gov/circuit/) lists Stephen Kouri, 10th Circuit, Peoria, with the source status **Retiring 07/31/26**. The July 31, 2026 retirement date precedes this election. Keep his poll as a documented source-only row; it does not establish an active retention candidacy.
- Direct public ISBA/CBA HTML and Alliance PDF requests returned HTTP 200. VoteForJudges HTML returned HTTP 406 to Python requests but was readable through the web tool. No login was required or bypassed.
- Committee narratives should be attributed, and substantive allegations checked against their original records before being described as established facts.

## Reproduction and validation

Scratch sources, PDF renderings, parsed tables, roster snapshot, and `bar-inventory-build.py` are in `../judicial-research/`. Run the script from the repository root. It builds only this audit JSON, never production data. Source SHA-256 values are recorded. The extraction checks 131 covered site IDs, 60 CBA mappings, 60 Alliance rows, and only one unmatched source-only row. Source HTML contains circuit tables with `caption` equal to `Retention`; appellate ratings use headings and key/value tables. Cook summaries supply the exact name and Yes/No rating. CBA records use ballot number/name/rating delimiters.
