# Finance review of the Antigravity update

Reviewed November 1, 2026. Scope: changes in commit `d94c1aa`, current data bindings, finance regression tests, and three fresh official-source spot checks. This is not a fresh source re-audit of every financial filing.

## Findings

- `data-finance-verified.js` and `data-live-sync.js` are unchanged by `d94c1aa`. The finance rendering and sync-script changes are punctuation/source-label edits. No financial amount was introduced by that commit in those two candidate-finance datasets.
- The existing 126 state/local committee records all still bind to candidate IDs present in the Antigravity roster. All 126 have numeric receipts and cash-on-hand fields. Missing records are left unavailable in the UI, rather than rendered as zero.
- The Antigravity roster has 208 profiles, including 164 nonfederal profiles. Of these, 126 have a state committee report and **38 lack one**. The October 28 finance report's 141 nonfederal profiles and 15 unavailable records describe the earlier snapshot; they must not be cited as coverage of the 23 newly added profiles.
- The 23 added profiles without a verified finance record are: Janet Yang Rohr, Ajay Gupta, Dagmara Avelar, Chris Metcalfe, Natalie A. Manley, Nona Parker, Laura Ellman, Julie Berkowicz, Theresa Rouse, Elizabeth Caparelli-Ruff, Destinee Ortiz, Alex Zapien, Raquel M. Mitchell, Margaret “Peggy” O'Connell, Jason A. Helland, Amy Christiansen, JohnPaul Ivec, Sonni Choi Williams, Erin O'Brien, Amy M. Bertani-Tomczak, Sarah Jones, Daniel L. Kennedy, and Daniel D. Rippy. A missing total does not establish that a candidate has no committee, no contributions, or a zero balance.
- The federal bundle contains 223 totals records and 38 explicitly mapped FEC identities. There are 33 current candidate-to-totals matches. Five identified candidates have no totals record, and six other current federal profiles have no mapped FEC identity. The application does not turn unmatched federal records into ballot candidates.
- The federal bundle was generated October 31, 2026, at 16:00 UTC. Individual reporting coverage ends vary. The state committee records are checked October 28 and identify third-quarter periods ending September 30. A bundle retrieval timestamp is not a filing-coverage date.
- No critical candidate-finance regression was established in this review. This finding does not validate PAC totals embedded in organization descriptions; those belong to the separate organization audit.

## Fresh source samples

| Source | Period | Verified against displayed dataset |
|---|---|---|
| [FEC: Juliana Stratton, S6IL00458](https://www.fec.gov/data/candidate/S6IL00458/?cycle=2026&election_full=false) | April 24, 2025–October 14, 2026 | Receipts $7,230,576.52; disbursements $5,688,991.72; cash $1,541,584.80; candidate identity and committee C00903252 match. |
| [Illinois SBE: JB for Governor, committee 32762](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=hlDCrs0%2bvQ%2fpSP8p8Z%2bmcg%3d%3d) | July 1–September 30, 2026 | Receipts $65,048,259.49; expenditures $23,771,446.74; ending funds $44,417,830.63; in-kind $750,833.98. |
| [Illinois SBE: Preckwinkle for President, committee 21644](https://www.elections.il.gov/CampaignDisclosure/D2Quarterly.aspx?id=A5gasTiGP3h%2bmHeqBS24mw%3d%3d) | July 1–September 30, 2026 | Receipts $66,649.04; expenditures $91,344.95; ending funds $86,043.05; in-kind $0.00. |

The SBE pages were inaccessible through the search browser but successfully read through direct HTTPS requests. Only committee-summary fields were inspected; no filing addresses or donor records were republished. An additional FEC Bill Foster page attempt returned a cache miss and is not counted as verified.

## Verification

- `python scripts/test_fec_sync.py`: 5 tests passed.
- `node scripts/test-fec-api.mjs`: 5 tests passed.
- Runtime inspection of the source datasets: no stale state-finance keys, no duplicate totals match for a mapped federal candidate, and no nonnumeric receipts/cash in the 126 state records.

These tests verify identity/scope safeguards, pagination, data preservation on failure, and handling of malformed responses. They do not prove the truth of the filings or refresh all source values. Reporting periods and separate state/federal scope should remain visible; no “100% accurate” or “all 208 finance-verified” claim is supported.
