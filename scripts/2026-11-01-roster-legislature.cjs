'use strict';
// Reconcile every current-cycle legislative district to the archived official SBE table.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const source = JSON.parse(read('audit/2026-11-01-roster-sbe.json'));
const scope = {window: {}};
vm.runInNewContext(read('data-legislature.js'), scope);
const existing = scope.window.IL_LEGISLATURE_RACES;
const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const nameFor = s => { const p = s.split(',').map(x=>x.trim()); return p.length === 1 ? s : [p[p.length-1], p[0], ...p.slice(1,-1)].join(' '); };
const partyFor = s => ({DEMOCRATIC:'Democrat', REPUBLICAN:'Republican', INDEPENDENT:'Independent', 'WORKING CLASS PARTY':'Working Class Party'}[s] || s);
const ordinal = n => `${n}${n%100>=11&&n%100<=13?'th':({1:'st',2:'nd',3:'rd'}[n%10]||'th')}`;
const evidence = (field, row, note) => ({field, url: field === 'candidates' ? row.officeUrl : row.candidateUrl, title:'Illinois State Board of Elections: November 3, 2026 general-election candidate list', checked:source.checked, note});
const legislative = source.records.filter(r => /^\d+(ST|ND|RD|TH) (SENATE|REPRESENTATIVE)$/.test(r.office));
const groups = new Map();
for (const row of legislative.filter(r=>r.status.startsWith('Active '))) {
  const code = `${row.office.endsWith('SENATE')?'SD':'HD'}-${parseInt(row.office)}`;
  if (!groups.has(code)) groups.set(code, []);
  groups.get(code).push(row);
}
assert.equal([...groups.keys()].filter(k=>k.startsWith('HD-')).length,118);
assert.equal([...groups.keys()].filter(k=>k.startsWith('SD-')).length,39);
const usedIds = new Set(existing.flatMap(r=>r.candidates.map(c=>c.id)));
const results = [], additions = [], changes = [];
for (const [code, rows] of groups) {
  const n=Number(code.split('-')[1]), house=code.startsWith('HD-');
  let race = existing.find(r=>r.districtCode === code);
  if (!race) {
    additions.push(code);
    race = {id:`il-${house?'house':'senate'}-${String(n).padStart(2,'0')}`, level:'state_legislature', chamber:house?'State House':'State Senate', office:`Illinois State ${house?'Representative':'Senator'} - ${ordinal(n)} District`, districtCode:code, districtName:`${ordinal(n)} ${house?'House':'Senate'} District`, region:'Illinois', counties:[], cities:[], isOpenSeat:null, isBattleground:false, incumbent:'', evidence:[], candidates:[]};
  }
  const before = race.candidates;
  const resolved = [];
  for (const row of rows) {
    const name=nameFor(row.name), party=partyFor(row.party);
    const matches = before.filter(c=>c.party===party);
    assert.ok(matches.length <= 1, `Ambiguous existing party mapping ${code}: ${party}`);
    let candidate=matches[0];
    if (candidate) {
      // Manual review of all 33 inherited races confirmed party-level matches; guard surname.
      const surname=normalize(row.name.split(',')[0]);
      assert.ok(normalize(candidate.name).includes(surname), `Name mismatch ${code}: ${candidate.name} / ${row.name}`);
      if (candidate.name !== name) changes.push({district:code, candidateId:candidate.id, previousName:candidate.name, ballotName:name});
      candidate.name=name;
    } else {
      let id=name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      if (usedIds.has(id)) id += `-${code.toLowerCase()}`;
      usedIds.add(id);
      candidate={id,name,party,role:`Candidate for the ${ordinal(n)} ${house?'House':'Senate'} District on the Illinois SBE general-election list.`,hometown:'',incumbentStatus:'Not independently verified',photoInitials:name.split(/\s+/).filter(x=>/^[A-Za-z]/.test(x)).map(x=>x[0]).filter(Boolean).slice(0,2).join(''),fecRaised:'',fecCashOnHand:'',pacPolicy:'',pacSummary:'',pacs:[],endorsements:[],issues:{},evidence:[]};
    }
    candidate.sbeCandidateUrl=row.candidateUrl;
    candidate.ballotName=name;
    candidate.ballotStatus='Active on Illinois SBE general-election list';
    candidate.ballotStatusChecked=source.checked;
    candidate.evidence=candidate.evidence.filter(e=>!(e.checked===source.checked && e.title.includes('State Board of Elections') && ['identity','ballotStatus'].includes(e.field)));
    candidate.evidence.push(evidence('identity', row, `Official list names ${row.name}; ${row.party}; ${row.office}. Active status checked November 1, 2026. This is not a complete county write-in list.`));
    resolved.push(candidate);
  }
  assert.equal(resolved.length, before.length || resolved.length, `${code}: inherited candidate mismatch`);
  race.candidates=resolved;
  race.rosterChecked=source.checked;
  race.rosterScope='Active candidates in the Illinois SBE general-election list; county write-in filings are not exhaustively covered.';
  race.evidence=race.evidence.filter(e=>e.field!=='candidates');
  race.evidence.unshift(evidence('candidates', rows[0], `Complete active ${rows[0].office} roster in the 528-record SBE source retrieved November 1, 2026. Removed and withdrawn entries are excluded; local write-in declarations require separate verification.`));
  race.coverageNotes=[
    'Candidate names and parties checked November 1, 2026 against the complete active Illinois State Board of Elections general-election list. All 118 House districts and all 39 Senate districts listed for 2026 are included in the directory.',
    'County write-in declarations are not exhaustively covered. A single listed candidate is not a guarantee that no write-in is eligible. Confirm the official address-based ballot with your election authority.',
    'Policy, biography, endorsement and finance research varies by candidate. Missing information is unknown; it is not opposition, no support or zero fundraising.'
  ];
  results.push(race);
}
results.sort((a,b)=>(a.chamber===b.chamber?0:a.chamber==='State House'?-1:1)||parseInt(a.districtCode.split('-')[1])-parseInt(b.districtCode.split('-')[1]));
assert.equal(results.length,157);
assert.equal(results.reduce((n,r)=>n+r.candidates.length,0),232);
fs.writeFileSync(path.join(root,'data-legislature.js'),'// All 118 Illinois House and all 39 current-cycle Senate districts.\n// Active SBE candidate rosters checked November 1, 2026; local write-ins require separate confirmation.\nwindow.IL_LEGISLATURE_RACES = '+JSON.stringify(results,null,2)+';\n');
const report={checked:source.checked, source:source.url, sourceRecords:source.recordCount, houseDistricts:118, senateDistricts:39, activeCandidates:232, addedDistricts:additions, ballotNameCorrections:changes, excludedRecords:legislative.filter(r=>!r.status.startsWith('Active ')), caveats:['This source is not a comprehensive county write-in declaration list.','Candidate biographies, policies, endorsements and finance are not uniformly researched.','An active SBE roster is not an address-specific voter ballot.']};
fs.writeFileSync(path.join(root,'audit/2026-11-01-roster-legislature.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({races:results.length,candidates:232,addedDistricts:additions.length,nameNormalizations:changes.length},null,2));
