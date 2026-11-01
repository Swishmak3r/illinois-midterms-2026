'use strict';
// Narrow parity against separately captured original official source content.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, name), 'utf8'));
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const w = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'data-local.js'), 'utf8'), { window: w });
const races = w.IL_LOCAL_RACES;
const baseline = read('2026-11-01-gap-baseline.json');
const source = read('2026-11-01-gap-cook-official.json');
const mchenry = read('2026-11-01-gap-mchenry.json');
assert.equal(source.captureHash.sha256, sha(JSON.stringify({ electionHeading: source.electionHeading, excerpts: source.excerpts })), 'captured official text hash');
assert.equal(source.electionHeading, 'November 03, 2026 Gubernatorial General Election');
const checked = [];
for (const expected of source.verifiedContests) {
  const race = races.find(r => r.id === expected.raceId);
  assert(race, expected.raceId);
  assert.equal(race.office, `Cook County Commissioner, District ${expected.district}`);
  assert.equal(race.districtCode, `COOK-${expected.district}`);
  assert.equal(JSON.stringify(race.counties), '["Cook"]');
  assert.equal(race.voteFor, expected.voteFor);
  assert.equal(race.rosterChecked, source.accessed);
  assert.equal(race.rosterStatus, 'official-general-candidate-list');
  assert.equal(JSON.stringify(race.candidates.map(c => ({ id: c.id, name: c.name, party: c.party }))), JSON.stringify(expected.candidates.map(c => ({ id: c.id, name: c.name, party: c.party }))), `${race.id}: exact complete printed field`);
  assert(race.evidence.some(e => e.field === 'candidates' && e.url === source.sourceUrl && e.checked === source.accessed));
  assert(race.evidence.some(e => e.field === 'ballotRules' && e.url === source.sourceUrl));
  assert(race.candidates.every(c => c.evidence.some(e => e.field === 'identity' && e.url === source.sourceUrl && e.checked === source.accessed)));
  assert(!/not retrieved|not achieved|not available/i.test(race.verificationNote), 'obsolete access gap removed');
  assert(/write-in/i.test(race.verificationNote), 'write-in limitation retained');
  assert.notEqual(race.geographicScope, 'countywide', 'district race is not countywide');
  checked.push(race.id);
}
assert.equal(mchenry.source.electionDate, '2026-11-03');
assert.equal(mchenry.source.verifiedPage, 2);
assert.equal(mchenry.source.printedDocumentPublicationDate, null, 'link update is not misrepresented as a printed PDF date');
assert.equal(mchenry.source.landingPageUpdateDate, '2026-08-24');
assert.match(mchenry.source.sha256, /^[a-f0-9]{64}$/);
if (fs.existsSync(mchenry.source.scratchPdf)) {
  const bytes = fs.readFileSync(mchenry.source.scratchPdf);
  assert.equal(bytes.length, mchenry.source.byteLength);
  assert.equal(sha(bytes), mchenry.source.sha256, 'downloaded official McHenry source hash');
}
const sortedRoster = candidates => JSON.stringify(candidates.map(c => ({ name: c.name, party: c.party })).sort((a, b) => a.name.localeCompare(b.name)));
for (const expected of mchenry.verifiedContests) {
  const race = races.find(r => r.id === expected.raceId);
  assert(race, expected.raceId);
  assert.equal(race.office, expected.office);
  assert.equal(JSON.stringify(race.counties), JSON.stringify(expected.counties));
  assert.equal(race.geographicScope, expected.geographicScope);
  assert.equal(race.voteFor, expected.voteFor);
  assert.equal(race.rosterChecked, mchenry.checked);
  assert.equal(race.rosterStatus, 'official-general-candidate-list');
  assert.equal(sortedRoster(race.candidates), sortedRoster(expected.candidates), `${race.id}: complete certified field`);
  assert(race.evidence.some(e => e.field === 'candidates' && e.url === mchenry.source.url && e.checked === mchenry.checked));
  assert(race.evidence.some(e => e.field === 'ballotRules' && e.url === mchenry.source.url));
  assert(race.candidates.every(c => c.evidence.some(e => e.field === 'identity' && e.url === mchenry.source.url && e.checked === mchenry.checked)));
  assert(!/unavailable|not retrieved|inaccessible|blocked/i.test(race.verificationNote), 'resolved source-access gap removed');
  assert(/write-in/i.test(race.verificationNote), 'write-in limitation retained');
  checked.push(race.id);
}
for (const original of baseline.scopedBefore) {
  const race = races.find(r => r.id === original.id);
  assert.equal(JSON.stringify(race.candidates.map(c => c.id)), JSON.stringify(original.candidates.map(c => c.id)), `${race.id}: stable candidate IDs`);
}
// Separately authorized and owned by the geography audit; its own tests verify the correction.
const concurrentAuthorizedEdits = ['sbe-local-4th-appellate-retain-knecht'];
for (const before of baseline.otherRaceHashes) {
  const race = races.find(r => r.id === before.id);
  assert(race, `${before.id}: preserved`);
  if (concurrentAuthorizedEdits.includes(before.id)) continue;
  assert.equal(sha(JSON.stringify(race)), before.sha256, `${before.id}: outside the five-race scope remains unchanged`);
}
assert.equal(races.length, baseline.otherRaceHashes.length + baseline.scopedRaceIds.length);
const report = { checked: '2026-11-01', status: 'passed', officialGapContestsCompared: checked, outOfScopeRaceObjectsUnchanged: baseline.otherRaceHashes.length - concurrentAuthorizedEdits.length, concurrentAuthorizedEdits, remainingFreshnessGaps: races.filter(r => !r.sbeOffice && r.rosterChecked !== '2026-11-01').map(r => r.id), limits: 'Printed candidate roster parity, date/source integrity, voting-rule regression and narrow-change guard. Does not establish all county contests, write-in certification, personal eligibility or campaign-claim truth.' };
fs.writeFileSync(path.join(__dirname, '2026-11-01-gap-check-results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
