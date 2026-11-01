'use strict';
// Judicial-data integrity and source-scope regressions. These do not replace
// reading each opinion or establish a judge's ideology from selected cases.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const scope = { window: {} };
for (const file of ['data-local.js', 'data-alignment.js', 'alignment.js', 'data-judicial.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), scope, { filename: file });
}
const data = scope.window.IL_JUDICIAL_RESEARCH;
const plain = value => JSON.parse(JSON.stringify(value));
const barSource = JSON.parse(fs.readFileSync(path.join(root, 'audit/judicial-2026/inventory-bar-sources.json'), 'utf8'));
const retentions = scope.window.IL_LOCAL_RACES.filter(race => race.contestType === 'retention');
const candidates = new Map(retentions.flatMap(race => race.candidates.map(candidate => [candidate.id, { candidate, race }])));
const checks = [];
function check(name, fn) { fn(); checks.push(name); console.log('PASS ' + name); }
function hasText(value, label) { assert.equal(typeof value, 'string', label); assert.ok(value.trim(), label + ' must be nonempty'); }
function url(value, label) { const parsed = new URL(value); assert.equal(parsed.protocol, 'https:', label); return parsed; }
function date(value, label) { assert.match(value, /^\d{4}-\d{2}-\d{2}$/, label); assert.equal(new Date(value).toISOString().slice(0,10), value, label); assert.ok(value <= data.checked, label + ' cannot be in the future'); }
function numericIdeology(value, keyPath = '') {
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    const next = keyPath ? keyPath + '.' + key : key;
    if (/score|percent|ideology|trump|alignment/i.test(next) && typeof child === 'number') assert.fail('Judicial political score is prohibited: ' + next);
    if (typeof child === 'object') numericIdeology(child, next);
  }
}
check('All 131 retention candidates have exactly one matching judicial profile', () => {
  assert.equal(data.schemaVersion, 1);
  date(data.checked, 'research checked');
  assert.equal(retentions.length, 131);
  assert.equal(candidates.size, 131);
  assert.deepEqual(Object.keys(data.profiles).sort(), [...candidates.keys()].sort());
  for (const race of retentions) {
    assert.equal(race.candidates.length, 1, race.id);
    assert.deepEqual(plain(race.ballotChoices), ['Yes', 'No'], race.id);
    assert.equal(race.voteFor, 1, race.id);
  }
});
check('Assessment values match the separately reviewed bar-source ledger', () => {
  assert.equal(barSource.judges.length, 131);
  for (const judge of barSource.judges) {
    const actual = data.profiles[judge.candidateId];
    assert.ok(actual, judge.candidateId);
    assert.equal(actual.assessments.length, judge.assessments.length, judge.candidateId);
    for (const expected of judge.assessments) {
      const found = actual.assessments.filter(a => a.sourceId === expected.sourceId && a.kind === expected.kind);
      assert.equal(found.length, 1, judge.candidateId + ' ' + expected.sourceId + ' ' + expected.kind);
      // Preserve exact independent ratings, nulls and each poll's own values.
      for (const key of ['sourceName','sourceId','kind','rating','reason','respondents','percentAgree','ratings','sourceUrl','election']) {
        if (expected[key] !== undefined) assert.deepEqual(plain(found[0][key]), plain(expected[key]), judge.candidateId + ' ' + key);
      }
      url(found[0].sourceUrl, 'assessment source');
      hasText(found[0].method, 'assessment method');
      assert.match(found[0].election, /2026-11-03|2026.*General/i);
    }
  }
});
check('Voluntary polls, insufficient responses and institutional judgments stay distinct', () => {
  const assessments = Object.values(data.profiles).flatMap(profile => profile.assessments);
  const insufficient = assessments.filter(a => a.kind === 'attorney-advisory-poll' && a.rating === 'Insufficient responses');
  assert.equal(insufficient.length, 14, 'Source has fourteen insufficient-response records, not fourteen negative ratings');
  for (const assessment of assessments) {
    if (assessment.kind === 'attorney-advisory-poll') {
      assert.match(assessment.method, /voluntary|advisory/i);
      assert.match(assessment.method, /no.opinion/i);
      for (const percentage of Object.values(assessment.percentAgree || {})) {
        assert.ok(percentage === null || Number.isFinite(percentage) && percentage >= 0 && percentage <= 100);
      }
      if (assessment.rating === 'Insufficient responses') {
        assert.equal(assessment.respondents, null);
        assert.ok(Object.values(assessment.percentAgree || {}).every(value => value === null));
      }
    } else {
      assert.ok(['committee-evaluation','independent-member-evaluations'].includes(assessment.kind));
      assert.equal(assessment.percentAgree, undefined, 'Committee evaluation must not acquire a poll percentage');
      if (assessment.kind === 'independent-member-evaluations') {
        assert.equal(Object.keys(assessment.ratings).length, 13);
        assert.match(assessment.method, /separate|independent/i);
      }
    }
  }
  const barberis = data.profiles['sbe-5th-appellate-retain-barberis-jr-john-b-barberis-jr'];
  const committee = barberis.assessments.find(a => a.kind === 'committee-evaluation');
  assert.equal(committee.rating, 'No');
  assert.match(committee.reason, /declined|nonparticipat/i);
  assert.match(committee.reason, /could not|unable|not fully/i);
  const poll = barberis.assessments.find(a => a.kind === 'attorney-advisory-poll');
  assert.equal(poll.rating, 'Not Recommended');
  assert.equal(poll.percentAgree.recommendation, 55.88);
  assert.equal(poll.respondents, 36);
  for (const profile of Object.values(data.profiles)) {
    const alliance = profile.assessments.find(assessment => assessment.sourceId === 'alliance');
    const isba = profile.assessments.find(assessment => assessment.sourceId === 'isba-cook');
    if (alliance && isba) assert.equal(alliance.ratings.ISBA, isba.rating, 'UI may omit a duplicate ISBA column only when both sources agree');
  }
});
check('Every selected ruling identifies the judge, legal act, appeal history and pinpointed primary source', () => {
  for (const [id, profile] of Object.entries(data.profiles)) {
    date(profile.checked, id + ' checked');
    hasText(profile.coverageNote, id + ' coverageNote');
    assert.ok(Array.isArray(profile.rulings), id);
    const ids = new Set();
    for (const ruling of profile.rulings) {
      assert.ok(!ids.has(ruling.id), id + ': duplicate ruling ' + ruling.id); ids.add(ruling.id);
      for (const key of ['id','caseName','citation','court','judgeRole','holding','reasoning','subsequentHistory']) hasText(ruling[key], id + ' ' + key);
      date(ruling.date, id + ' decision date');
      assert.ok(ruling.evidence?.length, id + ' ruling must have primary evidence');
      const primary = ruling.evidence.find(source => {
        const host = url(source.url, id + ' evidence').hostname;
        return /(^|\.)(illinoiscourts\.gov|supremecourt\.gov|uscourts\.gov)$/.test(host) || host === 'ilcourtsaudio.blob.core.windows.net';
      });
      assert.ok(primary, id + ' needs an official court decision URL');
      hasText(primary.title, id + ' primary title');
      hasText(primary.pinpoint, id + ' primary pinpoint');
      assert.match(primary.pinpoint, /¶|paragraph|page|caption|pp?\.?\s*\d|\d/i, id + ' pinpoint must locate the court record');
      for (const source of ruling.evidence) url(source.url, id + ' evidence source');
    }
    if (!profile.rulings.length) assert.match(profile.coverageNote + profile.researchStatus, /missing|not.*verified|no selected|not.*complete|limited/i, id + ' missing cases need explicit limits');
  }
});
check('No overall judicial political score; any policy comparison needs the exact issue and dated policy evidence', () => {
  for (const [id, profile] of Object.entries(data.profiles)) {
    const { assessments, ...nonPollData } = profile;
    numericIdeology(nonPollData, id);
    assert.equal(scope.window.IL_ALIGNMENT.score(id).percent, null, id + ' must not receive the congressional voting score');
    for (const ruling of profile.rulings) {
      assert.deepEqual(Object.keys(ruling.policyComparisons).sort(), ['democratic','republican','trump']);
      for (const comparison of Object.values(ruling.policyComparisons)) {
        assert.ok(['aligns','in-tension','mixed','not-comparable','insufficient'].includes(comparison.status));
        hasText(comparison.explanation, id + ' comparison explanation');
        if (['aligns','in-tension','mixed'].includes(comparison.status)) {
          hasText(ruling.question, id + ' same-question comparison');
          assert.ok(comparison.sources?.length, id + ' substantive policy comparison must cite policy evidence');
          for (const source of comparison.sources) {
            url(source.url, id + ' policy source'); hasText(source.title, id + ' policy title');
            assert.match([source.date,source.sourceDate,source.year,source.title,source.url].filter(Boolean).join(' '), /20\d{2}/, id + ' policy source must identify its date/year');
          }
        }
      }
    }
  }
});
check('Election-party history stays dated and separate from the retention ballot', () => {
  for (const [id, profile] of Object.entries(data.profiles)) {
    for (const history of profile.politicalHistory) {
      assert.match(String(history.year), /^(19|20)\d{2}$/);
      hasText(history.party, id + ' historical party'); hasText(history.description, id + ' history scope');
      url(history.sourceUrl, id + ' historical election source');
      assert.match(history.description, /historical|elected|election|ran|nomina|retention/i);
      assert.ok(!/\b(?:currently|now)\s+(?:a\s+)?(?:republican|democrat)/i.test(history.description), id + ' old ballot cannot establish present affiliation');
    }
    assert.ok(!/republican|democrat/i.test(candidates.get(id).candidate.party), id + ' historical party must not change nonpartisan retention label');
  }
  for (const [id, year, party] of [['amy-m-bertani-tomczak','1996','Republican'],['sarah-jones-judge','2008','Democratic'],['daniel-l-kennedy','2014','Democratic'],['daniel-d-rippy','2014','Republican']]) {
    assert.ok(data.profiles[id].politicalHistory.some(history => String(history.year) === year && history.party === party), id + ' verified Will election history must survive normalization');
  }
});
check('Published coverage counts describe actual profiles and rulings', () => {
  const profiles = Object.values(data.profiles);
  assert.equal(data.coverage.judges, 131);
  assert.equal(data.coverage.withBarReports, profiles.filter(profile => profile.assessments.length).length);
  assert.equal(data.coverage.withSelectedRulings, profiles.filter(profile => profile.rulings.length).length);
  assert.equal(data.coverage.selectedRulings, profiles.reduce((n,profile) => n + profile.rulings.length, 0));
});
const report = { checked: data.checked, scope: 'Structural provenance, source-ledger comparisons and known factual regressions; not a substitute for reading every court decision.', passed: checks.length, judges: 131, coverage: plain(data.coverage), checks };
fs.mkdirSync(path.join(root, 'output', 'audit'), { recursive: true });
fs.writeFileSync(path.join(root, 'output/audit/judicial-research.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ passed: checks.length, coverage: data.coverage }));
