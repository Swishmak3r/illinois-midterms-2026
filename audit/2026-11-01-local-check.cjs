'use strict';
// Compare the shipped local directory against the separately captured official SBE list.
// County-filed contests are explicitly outside the SBE statewide filing source.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),w={};
vm.runInNewContext(fs.readFileSync(path.join(root,'data-local.js'),'utf8'),{window:w});
const races=w.IL_LOCAL_RACES;
const source=JSON.parse(fs.readFileSync(path.join(__dirname,'2026-11-01-roster-sbe.json'),'utf8'));
const rows=source.records.filter(r=>/(CIRCUIT|APPELLATE|SUP.*SCHOOLS)/.test(r.office));
const active=rows.filter(r=>r.status.startsWith('Active'));
const groups=new Map();for(const row of active){if(!groups.has(row.office))groups.set(row.office,[]);groups.get(row.office).push(row);}
const party=raw=>({DEMOCRATIC:'Democrat',REPUBLICAN:'Republican',INDEPENDENT:'Independent'})[raw]||raw||'Nonpartisan';
const norm=s=>String(s).normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'');
const display=raw=>{const p=raw.split(',').map(s=>s.trim());return p.length>1?`${p.pop()} ${p.join(', ')}`:raw;};
let decisions=0,matched=0;
for(const [office,expected]of groups){
 const found=races.filter(r=>r.sbeOffice===office);assert.equal(found.length,1,`${office}: exactly one race`);
 const race=found[0];assert.equal(race.candidates.length,expected.length,`${office}: complete active roster`);
 assert.equal(race.rosterChecked,'2026-11-01',`${office}: accurate check date`);
 for(const record of expected){
  const matches=race.candidates.filter(c=>c.sbeName===record.name);assert.equal(matches.length,1,`${office}: ${record.name}`);
  const c=matches[0];assert.equal(norm(c.name),norm(display(record.name)),`${office}: displayed name matches official identity`);
  assert.equal(c.party,party(record.party),`${office}: party`);assert.equal(c.sbeStatus,record.status,`${office}: active status`);
  assert(c.evidence.some(e=>e.field==='identity'&&e.url===record.candidateUrl&&e.checked==='2026-11-01'),`${office}: direct official candidate evidence`);
  matched++;
 }
 if(office.includes(' - RETAIN ')){
  assert.equal(race.contestType,'retention');assert.equal(race.candidates.length,1);assert.equal(race.voteFor,1);
  assert.equal(JSON.stringify(race.ballotChoices),'["Yes","No"]');
  assert.equal(race.candidates[0].party,'Nonpartisan');
  assert(race.evidence.some(e=>e.field==='ballotRules'&&e.url.includes('con6.htm')),'retention rule primary source');decisions++;
 }
}
for(const row of rows.filter(r=>!r.status.startsWith('Active'))){assert(!races.some(r=>r.sbeOffice===row.office),'withdrawn retention not displayed as active');}
for(const race of races){
 for(const c of race.candidates){if(c.incumbentStatus&&!['Not verified','Not independently verified','Incumbency not verified'].includes(c.incumbentStatus))assert(c.evidence.some(e=>e.field==='incumbentStatus'),`${c.id}: source for asserted status`);}
 if(race.eligibilityScope==='subcircuit'||race.eligibilityScope==='education-region')assert.notEqual(race.geographicScope,'countywide',`${race.id}: district electorate cannot be countywide`);
}
assert(!races.some(r=>r.id==='will-judicial-retention'),'combined retention group removed');
assert.equal(races.find(r=>r.id==='will-board-9').voteFor,2);
const candidate=id=>races.flatMap(r=>r.candidates).find(c=>c.id===id);
assert.equal(candidate('tom-dart').incumbentStatus,'Incumbent');
assert.equal(candidate('john-idleburg').incumbentStatus,'Incumbent');
assert.equal(candidate('jon-albee').incumbentStatus,'Open-seat candidate');
assert(!candidate('michelle-stiff').role.includes('Auditor'));
assert(!candidate('jason-a-helland').role.includes("State's Attorney"));
assert(races.find(r=>r.id==='will-sheriff').incumbent.includes('Mike Kelley (D)'));
assert.equal(new Set(races.map(r=>r.districtCode)).size,races.length,'unique selectable contest codes');
const candidates=races.flatMap(r=>r.candidates);
assert.equal(new Set(candidates.map(c=>c.id)).size,candidates.length,'candidate profile IDs unique across offices');
const report={checked:'2026-11-01',sbeOfficesChecked:groups.size,sbeActiveRowsMatched:matched,separateRetentionQuestions:decisions,countyFiledContestsOutsideSbeSource:races.filter(r=>!r.sbeOffice).map(r=>r.id),countyFreshnessNotReasserted:races.filter(r=>!r.sbeOffice&&r.rosterChecked!=='2026-11-01').map(r=>r.id),localDirectoryContests:races.length,status:'passed',limits:'Source parity and regression checks do not independently verify every campaign claim, every county ballot, or address-specific eligibility.'};
fs.writeFileSync(path.join(__dirname,'2026-11-01-local-check-results.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,countyFiledContestsOutsideSbeSource:report.countyFiledContestsOutsideSbeSource.length},null,2));
