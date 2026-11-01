'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const modules = ['data-federal.js','data-legislature.js','data-local.js','data-towns-pacs.js','data-zips.js','data-geography.js'];
function load({ omitGeography = false, poisonTown = false } = {}) {
  const scope = { window: {} };
  for (const file of modules) {
    if (omitGeography && file === 'data-geography.js') continue;
    vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), scope, { filename: file });
  }
  if (poisonTown) {
    const town = scope.window.IL_TOWNS_DIRECTORY.find(t => t.id === 'bolingbrook');
    town.usHouse = ['IL-17']; town.stateHouse = ['HD-118']; town.localRaces = ['will-board-9'];
  }
  vm.runInNewContext(fs.readFileSync(path.join(root, 'location.js'), 'utf8'), scope, { filename: 'location.js' });
  return scope.window;
}
const w = load(), resolve = w.IL_LOCATION.resolve;
const plain = x => JSON.parse(JSON.stringify(x));
const currentCodes = new Set([...w.IL_FEDERAL_RACES, ...w.IL_LEGISLATURE_RACES].map(r => r.districtCode));
const local = new Map(w.IL_LOCAL_RACES.map(r => [r.id, r]));
const source = JSON.parse(fs.readFileSync(path.join(root, 'audit/2026-11-01-geography-sources.json'), 'utf8'));
assert.equal(w.IL_GEOGRAPHY_DATA.meta.zipCount, 1396);
assert.equal(source.mappedZipCount, 1396);
assert.equal(source.unmappedPostalZips.length, 179);
assert.equal(source.sources.length, 43, '4 district/county metadata+queries, Chicago metadata+query, 1 ZCTA metadata, 32 ZCTA chunks');
for (const item of source.sources) {
  assert.match(item.url, /^https:\/\/tigerweb\.geo\.census\.gov\//);
  assert.match(item.sha256, /^[a-f\d]{64}$/);
  assert.equal(item.checked, '2026-11-01');
}
let mapped = 0, unmapped = 0;
for (const [zip] of w.IL_ZIP_DATA.illinois) {
  const result = resolve(zip), record = w.IL_GEOGRAPHY_DATA.zips[zip];
  assert.equal(result.error, undefined, zip);
  assert.equal(result.approximate, true);
  assert.match(result.coverageNote, /address/);
  assert.equal(resolve(zip + '-1234').matchedZip, zip);
  if (!record) {
    unmapped++;
    assert.equal(result.town, null, zip + ' must not inherit another community ZIP');
    assert.equal(result.coverage, 'statewide-only');
    continue;
  }
  mapped++;
  for (const key of ['usHouse', 'stateSenate', 'stateHouse']) {
    assert.deepEqual(plain(result.town[key]), plain(record[key].filter(code => currentCodes.has(code))), zip + ' ' + key);
  }
  assert.deepEqual(plain(result.town.counties), plain(record.counties), zip + ' counties');
  for (const id of result.town.localRaces) {
    const race = local.get(id);
    assert.ok(race, zip + ' stale local reference ' + id);
    assert.ok(['countywide','whole-court-district'].includes(race.geographicScope) || (race.contestType === 'retention' && ['circuit','judicial-district'].includes(race.eligibilityScope)), zip + ' unverified scope ' + id);
    assert.ok(race.counties.some(county => record.counties.includes(county)), zip + ' wrong county ' + id);
  }
}
assert.deepEqual([mapped, unmapped], [1396, 179]);
for (const [key, prefix, count] of [['usHouse','IL-',17], ['stateHouse','HD-',118], ['stateSenate','SD-',59]]) {
  const codes = new Set(Object.values(w.IL_GEOGRAPHY_DATA.zips).flatMap(r => r[key]));
  assert.equal(codes.size, count);
  for (let n = 1; n <= count; n++) assert.ok(codes.has(prefix + (prefix === 'IL-' ? String(n).padStart(2,'0') : n)));
}
const byDistrict = w.IL_GEOGRAPHY_DATA.byDistrict;
assert.equal(Object.keys(byDistrict).length, 194);
assert.equal(new Set(Object.values(byDistrict).flatMap(r => r.counties)).size, 102);
for (const [code, area] of Object.entries(byDistrict)) {
  assert.ok(area.counties.length, code);
  assert.equal(typeof area.chicago, 'boolean', code);
  assert.equal(typeof area.suburbanCook, 'boolean', code);
  if (area.suburbanCook) assert.ok(area.counties.includes('Cook'), code);
}
for (const code of ['HD-3','HD-4','HD-10','HD-39','HD-40']) {
  assert.equal(byDistrict[code].chicago, true, code);
  assert.equal(byDistrict[code].suburbanCook, false, code);
}
assert.equal(byDistrict['HD-98'].chicago, false);
assert.deepEqual(plain(byDistrict['HD-98'].counties), ['Will']);
assert.equal(byDistrict['HD-17'].chicago, false, 'Cook County alone does not establish Chicago membership');
assert.equal(byDistrict['HD-17'].suburbanCook, true);
assert.deepEqual(plain(resolve('60490').town.stateHouse), ['HD-41','HD-85','HD-97','HD-98']);
assert.deepEqual(plain(resolve('60490').town.stateSenate), ['SD-21']);
assert.deepEqual(plain(resolve('60490').town.counties), ['Will']);
assert.deepEqual(plain(resolve('60440').town.counties), ['DuPage','Will']);
assert.deepEqual(plain(resolve('60446').town.stateHouse), ['HD-85','HD-98']);
assert.deepEqual(plain(resolve('60647').town.stateHouse), ['HD-3','HD-4','HD-10','HD-39','HD-40']);
assert.deepEqual(plain(resolve('60657').town.stateHouse), ['HD-11','HD-12','HD-40']);
assert.equal(resolve('60001').town, null);
assert.ok(resolve('62999').town, 'A formerly unmapped rural ZIP gets Census-based district research');
assert.equal(resolve('90210').error, 'out_of_state_zip');
assert.equal(resolve('00000').error, 'unknown_zip');
const bolingbrook = resolve('bolingbrook').town;
assert.deepEqual(plain(bolingbrook.counties), ['DuPage','Will']);
assert.ok(bolingbrook.stateHouse.includes('HD-81'));
assert.ok(!resolve('60490').town.stateHouse.includes('HD-81'), 'ZIP query must not inherit all community districts');
for (const id of ['will-board-9', 'will-circuit-court-1st-subcircuit', 'will-circuit-court-3rd-subcircuit', 'will-circuit-court-5th-subcircuit', 'will-regional-superintendent']) {
  assert.ok(!resolve('60490').town.localRaces.includes(id), 'No unsupported blanket local mapping: ' + id);
}
assert.equal(resolve('60490').town.localRaces.filter(id => id.startsWith('will-retention-')).length, 4);
const poisoned = load({ poisonTown: true }).IL_LOCATION.resolve('60490');
assert.deepEqual(plain(poisoned.town.stateHouse), plain(resolve('60490').town.stateHouse));
assert.deepEqual(plain(poisoned.town.localRaces), plain(resolve('60490').town.localRaces));
assert.equal(load({ omitGeography: true }).IL_LOCATION.resolve('60490').town, null, 'Missing source data must fail closed');
for (const town of w.IL_TOWNS_DIRECTORY) {
  assert.equal(town.geographyStatus, 'census-zcta-overlap', town.id);
  for (const key of ['usHouse','stateSenate','stateHouse']) for (const code of town[key]) assert.ok(currentCodes.has(code), town.id + ' stale ' + code);
  for (const id of town.localRaces) assert.ok(local.has(id), town.id + ' stale ' + id);
}
console.log(`PASS: all 1,575 postal ZIPs, 1,396 Census crosswalks, 179 explicit fallbacks, 70 communities, all 17/118/59 geographic districts, current-cycle filtering, local scope containment, and source-failure behavior.`);
