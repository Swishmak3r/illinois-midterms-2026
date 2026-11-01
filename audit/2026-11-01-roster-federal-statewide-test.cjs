'use strict';
// Regression check against an independently retrieved official roster, not a candidate count alone.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..');
const s = {window:{}};
for (const file of ['data-federal.js','data-statewide.js']) vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),s);
const records = require('./2026-11-01-roster-sbe.json').records;
const snapshot = new Map(records.map(r=>[r.candidateUrl,r]));
const isWriteIn = c=>c.writeIn===true||c.isWriteIn===true;
const norm = text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const display = name=>{const [last,...first]=name.split(',');return `${first.join(',').trim()} ${last.trim()}`;};
const parties={DEMOCRATIC:'Democrat',REPUBLICAN:'Republican',INDEPENDENT:'Independent','AMERICAN CENTER PARTY':'American Center Party','WORKING CLASS PARTY':'Working Class Party'};
const federal=s.window.IL_FEDERAL_RACES,statewide=s.window.IL_STATEWIDE_RACES;
assert.equal(federal.length,18);
assert.equal(statewide.length,5);
for(let n=1;n<=17;n++) assert.equal(federal.filter(r=>r.districtCode===`IL-${String(n).padStart(2,'0')}`).length,1);
const checkedOffices=new Set(), actualActive=new Set();
for(const race of [...federal,...statewide]) {
  const candidates = race.candidates.filter(c=>!isWriteIn(c));
  const raceOffices = new Set();
  for(const c of candidates) {
    assert.ok(c.sbeCandidateUrls?.length,`${c.name}: missing official identity`);
    const rows=c.sbeCandidateUrls.map(url=>snapshot.get(url));
    assert.ok(rows.every(Boolean),`${c.name}: unknown SBE record`);
    for(const row of rows) {
      assert.match(row.status,/^Active\b/);
      assert.equal(row.writeIn,'');
      assert.equal(parties[row.party],c.party);
      assert.ok(!actualActive.has(row.candidateUrl),'Duplicate printed candidate');
      actualActive.add(row.candidateUrl);raceOffices.add(row.office);
    }
    assert.equal(c.ballotName,rows.map(r=>display(r.name)).join(' & '));
    assert.equal(norm(c.name),norm(c.ballotName));
    assert.equal(rows.length,race.districtCode==='IL-GOV'?2:1);
  }
  assert.equal(raceOffices.size,1,'Race crosses offices');
  const office=[...raceOffices][0];
  assert.ok(!checkedOffices.has(office));checkedOffices.add(office);
  if(/^IL-\d+$/.test(race.districtCode)) assert.equal(parseInt(office),parseInt(race.districtCode.slice(3)));
  for(const c of race.candidates.filter(isWriteIn)) {
    assert.ok(c.writeInAuthorities?.length,`${c.name}: missing authority scope`);
    assert.ok(c.evidence.some(e=>e.field==='writeIn'&&e.checked==='2026-11-01'),`${c.name}: no current declaration check`);
    assert.ok(!c.sbeCandidateUrls,`${c.name}: local write-in treated as printed nominee`);
  }
}
const expected=records.filter(r=>checkedOffices.has(r.office)&&/^Active\b/.test(r.status)&&!r.writeIn).map(r=>r.candidateUrl).sort();
assert.deepEqual([...actualActive].sort(),expected,'Active printed roster mismatch');
const governor=statewide.find(r=>r.districtCode==='IL-GOV');
assert.equal(governor.candidates.filter(isWriteIn).length,7);
for(const id of ['misty-metroz','richard-benedict-mayers','elizabeth-ann-sebesta','rafael-varela']) {
  const c=governor.candidates.find(c=>c.id===id);
  assert.match(c.role,/complete ticket not verified/);
  assert.match(c.ballotNote,/complete ticket/);
}
for(const file of ['data-federal.js','data-statewide.js']) assert.ok(!fs.readFileSync(path.join(root,file),'utf8').includes('CandidateList.aspx?ElectionID=71'));
console.log(JSON.stringify({status:'PASS',federalRaces:18,statewideRaces:5,activeSbePeople:expected.length,printedCandidateOrTicketProfiles:[...federal,...statewide].flatMap(r=>r.candidates).filter(c=>!isWriteIn(c)).length,countyWriteInProfiles:[...federal,...statewide].flatMap(r=>r.candidates).filter(isWriteIn).length},null,2));
