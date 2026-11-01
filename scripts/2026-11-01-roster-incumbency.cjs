'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const source=JSON.parse(fs.readFileSync(path.join(root,'audit/2026-11-01-roster-incumbency.json'),'utf8'));
const scope={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data-legislature.js'),'utf8'),scope);
const races=scope.window.IL_LEGISLATURE_RACES;
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');
const open=[],changes=[];
for(const race of races){
  const member=source.members.find(x=>x.chamber===(race.districtCode.startsWith('HD-')?'House':'Senate')&&x.district===Number(race.districtCode.split('-')[1]));
  assert.ok(member,`Missing ILGA incumbent for ${race.districtCode}`);
  const surname=member.name.split(/\s+/).filter(t=>!/^([IVX]+|jr\.?|sr\.?)$/i.test(t)).at(-1);
  const matches=race.candidates.filter(c=>norm(c.name).includes(norm(surname))&&c.party.startsWith(member.party==='D'?'Democrat':'Republican'));
  assert.ok(matches.length<=1,`Ambiguous incumbent ${race.districtCode}`);
  const isOpen=matches.length===0;
  // The 15 non-matches were manually reviewed against full names, not just surnames.
  if(isOpen)open.push(race.districtCode);
  if(race.isOpenSeat!==isOpen)changes.push({district:race.districtCode,field:'isOpenSeat',before:race.isOpenSeat,after:isOpen});
  race.isOpenSeat=isOpen;
  race.incumbent=`${member.name} (${member.party})`;
  const note=`Current officeholder listed by the official 104th General Assembly roster: ${member.name}, District ${member.district}. ${source.method} Open-seat status is determined by whether this current officeholder appears among active general-election candidates, not whether the office is occupied.`;
  race.evidence=race.evidence.filter(e=>!(e.checked===source.checked&&['incumbent','isOpenSeat'].includes(e.field)));
  race.evidence.push({field:'incumbent',fields:['incumbent','isOpenSeat'],url:member.sourceUrl,title:'Illinois General Assembly: current 104th General Assembly member roster',checked:source.checked,note});
  for(const c of race.candidates){
    const status=isOpen?'Open-seat candidate':matches.includes(c)?'Incumbent':'Challenger';
    if(c.incumbentStatus!==status)changes.push({district:race.districtCode,candidateId:c.id,field:'incumbentStatus',before:c.incumbentStatus,after:status});
    c.incumbentStatus=status;
    c.evidence=c.evidence.filter(e=>!(e.checked===source.checked&&e.field==='incumbentStatus'));
    c.evidence.push({field:'incumbentStatus',url:member.sourceUrl,title:'Illinois General Assembly: current 104th General Assembly member roster',checked:source.checked,note});
  }
}
assert.deepEqual(open.sort(),['HD-8','HD-12','HD-13','HD-34','HD-40','HD-47','HD-51','HD-84','HD-94','HD-105','SD-9','SD-18','SD-27','SD-33','SD-42'].sort());
fs.writeFileSync(path.join(root,'data-legislature.js'),'// All 118 Illinois House and all 39 current-cycle Senate districts.\n// Active SBE rosters checked November 1, 2026; incumbents from indexed official ILGA roster.\nwindow.IL_LEGISLATURE_RACES = '+JSON.stringify(races,null,2)+';\n');
fs.writeFileSync(path.join(root,'audit/2026-11-01-roster-incumbency-changes.json'),JSON.stringify({checked:source.checked,method:source.method,openSeatDistricts:open,changes},null,2)+'\n');
console.log(`Verified incumbent classifications for ${races.length} legislative races; ${open.length} open-seat contests.`);
