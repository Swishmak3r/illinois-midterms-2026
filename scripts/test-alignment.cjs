'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
for (const file of ['data-alignment.js', 'alignment.js']) vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
const api = context.window.IL_ALIGNMENT;
const data = context.window.IL_ALIGNMENT_DATA;
let passed = 0;
function test(name, fn) { fn(); passed++; console.log(`PASS ${name}`); }

test('Absent evidence is unavailable, never 0%', () => {
  const result = api.score('unrecorded-candidate');
  assert.equal(result.percent, null);
  assert.equal(result.known, 0);
  assert.equal(result.unknown, 6);
  assert.ok(result.details.every(row => row.stance === 'unknown'));
});
test('Documented disagreements can validly produce 0%', () => {
  const result = api.score('delia-ramirez');
  assert.equal(result.percent, 0);
  assert.equal(result.known, 6);
  assert.equal(result.disagree, 6);
});
test('All six documented agreements produce 100%', () => {
  const result = api.score('mike-bost');
  assert.equal(result.percent, 100);
  assert.equal(result.agree, 6);
  assert.equal(result.known, 6);
});
test('Mixed votes are counted from actual evidence', () => {
  assert.equal(api.score('nikki-budzinski').percent, 33);
  assert.equal(api.score('nikki-budzinski').agree, 2);
  assert.equal(api.score('eric-sorensen').percent, 17);
  assert.equal(api.score('eric-sorensen').agree, 1);
});
test('Not Voting remains unknown and does not enter the denominator', () => {
  const result = api.score('brad-schneider');
  assert.equal(result.percent, 0);
  assert.equal(result.known, 5);
  assert.equal(result.unknown, 1);
  assert.equal(result.coveragePercent, 83);
  assert.equal(result.details.find(row => row.id === 'laken-riley').stance, 'unknown');
});
test('Fewer than three known measures cannot produce a percentage', () => {
  const sample = JSON.parse(JSON.stringify(data));
  sample.candidates.example = { positions: Object.fromEntries(Object.entries(sample.candidates['mike-bost'].positions).slice(0, 2)) };
  sample.minEvidence = 1;
  const result = api.score('example', sample);
  assert.equal(result.known, 2);
  assert.equal(result.percent, null);
  assert.equal(result.minEvidence, 3);
});
test('Unsupported positions fail closed even if a stance is supplied', () => {
  const sample = JSON.parse(JSON.stringify(data));
  for (const position of Object.values(sample.candidates['mike-bost'].positions)) position.sources = [];
  assert.equal(api.score('mike-bost', sample).percent, null);
  assert.equal(api.score('mike-bost', sample).known, 0);
  sample.candidates['mike-bost'].positions = JSON.parse(JSON.stringify(data.candidates['mike-bost'].positions));
  sample.policies.forEach(policy => { policy.baselineSources = [{ url: 'javascript:void(0)', title: 'Unsafe' }]; });
  assert.equal(api.score('mike-bost', sample).known, 0);
});
test('Duplicate measures cannot inflate the denominator', () => {
  const sample = JSON.parse(JSON.stringify(data));
  sample.policies.push(sample.policies[0]);
  assert.throws(() => api.score('mike-bost', sample), /unique/);
});
test('Every scored position matches its archived official Clerk XML', () => {
  assert.equal(data.policies.length, 6);
  for (const policy of data.policies) {
    const xml = fs.readFileSync(path.join(root, 'audit', 'sources', 'alignment', `roll${String(policy.rollCall).padStart(3, '0')}.xml`), 'utf8');
    assert.match(xml, new RegExp(`<rollcall-num>${policy.rollCall}</rollcall-num>`));
    assert.match(xml, /<congress>119<\/congress>/);
    assert.match(xml, /<vote-question>On (Passage|Motion to Concur in the Senate Amendment)<\/vote-question>/);
    for (const candidate of Object.values(data.candidates)) {
      const recorded = [...xml.matchAll(/<recorded-vote>([\s\S]*?)<\/recorded-vote>/g)].find(match => match[1].includes(`name-id="${candidate.bioguide}"`));
      assert.ok(recorded, `${candidate.bioguide}: missing Clerk record`);
      const vote = recorded[1].match(/<vote>([^<]+)<\/vote>/)[1];
      const position = candidate.positions[policy.id];
      assert.equal(position.recordedVote, vote);
      assert.equal(position.stance, ['Yea', 'Yes', 'Aye'].includes(vote) ? 'agree' : ['Nay', 'No'].includes(vote) ? 'disagree' : 'unknown');
      assert.equal(position.sources[0].url, policy.rollCallUrl);
    }
  }
});
console.log(`${passed} alignment tests passed.`);
