'use strict';
// Integrity checks for the published claim/source contract. These do not replace source review.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const scope = { window: {} };
for (const name of ['data-federal.js', 'data-statewide.js', 'data-legislature.js', 'data-local.js', 'data-towns-pacs.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, name), 'utf8'), scope, { filename: name });
}
const w = scope.window;
const races = [...w.IL_FEDERAL_RACES, ...w.IL_STATEWIDE_RACES, ...w.IL_LEGISLATURE_RACES, ...w.IL_LOCAL_RACES];
const problems = [], urls = new Set(), raceIds = new Set(), candidateIds = new Set();
let positions = 0, endorsements = 0, evidenceCount = 0;
function problem(message) { problems.push(message); }
function sources(record, label) {
  const evidence = record.evidence || [];
  if (!evidence.length) problem(`${label}: no source evidence`);
  for (const e of evidence) {
    if (!e.field || !e.title || !e.checked) problem(`${label}: incomplete evidence metadata`);
    try { const u = new URL(e.url); if (u.protocol !== 'https:') problem(`${label}: source must use HTTPS: ${e.url}`); }
    catch { problem(`${label}: invalid source URL ${e.url}`); }
    if (e.checked && !/^2026-10-28$/.test(e.checked)) problem(`${label}: unexpected audit date ${e.checked}`);
    urls.add(e.url); evidenceCount++;
  }
  return evidence;
}
function hasField(evidence, field) {
  return evidence.some(e => e.field === field || (Array.isArray(e.fields) && e.fields.includes(field)));
}
for (const race of races) {
  if (raceIds.has(race.id)) problem(`Duplicate race ${race.id}`);
  raceIds.add(race.id);
  sources(race, race.id);
  for (const candidate of race.candidates || []) {
    if (candidateIds.has(candidate.id)) problem(`Duplicate candidate ${candidate.id}`);
    candidateIds.add(candidate.id);
    const evidence = sources(candidate, candidate.id);
    for (const [key, value] of Object.entries(candidate.issues || {})) {
      if (!value) continue;
      positions++;
      if (!hasField(evidence, `issues.${key}`)) problem(`${candidate.id}: unsourced issue ${key}`);
    }
    if ((candidate.endorsements || []).length) {
      endorsements += candidate.endorsements.length;
      if (!hasField(evidence, 'endorsements')) problem(`${candidate.id}: endorsements lack source`);
    }
    for (const key of ['fecRaised', 'fecCashOnHand', 'pacPolicy', 'pacSummary']) {
      if (candidate[key] && !hasField(evidence, key)) problem(`${candidate.id}: unverified legacy ${key}`);
    }
    if ((candidate.pacs || []).length && !hasField(evidence, 'pacs')) problem(`${candidate.id}: legacy PAC relationships lack source`);
  }
}
assert.equal(w.IL_TRUMP_ALIGNMENT_DIRECTORY, undefined, 'Legacy inferred alignment directory must be absent');
for (const pac of w.IL_PACS_DIRECTORY || []) sources(pac, pac.id);
for (const town of w.IL_TOWNS_DIRECTORY) {
  for (const key of ['localContext', 'mayor', 'population']) if (town[key]) problem(`${town.id}: unaudited legacy town field ${key}`);
  for (const id of town.localRaces || []) if (!raceIds.has(id)) problem(`${town.id}: stale local race link ${id}`);
}
const report = { checked: '2026-10-28', races: races.length, candidates: candidateIds.size, sourcedPositions: positions, endorsementEntries: endorsements, evidenceEntries: evidenceCount, uniqueSourceUrls: urls.size, errors: problems };
fs.mkdirSync(path.join(root, 'output', 'audit'), { recursive: true });
fs.writeFileSync(path.join(root, 'output', 'audit', 'evidence-coverage.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ ...report, errors: problems.slice(0, 25), errorCount: problems.length }, null, 2));
assert.equal(problems.length, 0, 'Published records must satisfy the evidence contract; full errors are in output/audit/evidence-coverage.json');
