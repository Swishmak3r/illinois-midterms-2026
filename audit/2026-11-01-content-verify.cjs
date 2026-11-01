'use strict';
// Read-only regression guard: displayed content must equal the reviewed semantic ledger.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const reviewed=JSON.parse(fs.readFileSync(path.join(__dirname,'2026-11-01-content-final.json'),'utf8'));
const scope={window:{}};const files={'data-federal.js':'IL_FEDERAL_RACES','data-statewide.js':'IL_STATEWIDE_RACES','data-legislature.js':'IL_LEGISLATURE_RACES','data-local.js':'IL_LOCAL_RACES'};
const actual=[];
const fieldKey=f=>f.startsWith('endorsements[')?'endorsements':f;
for(const [file,key]of Object.entries(files)){
 vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),scope,{filename:file});
 for(const r of scope.window[key])for(const c of r.candidates||[]){
  const values=[...Object.entries(c.issues||{}).filter(([,v])=>v).map(([k,v])=>[`issues.${k}`,v]),...(c.endorsements||[]).map((v,i)=>[`endorsements[${i}]`,v])];
  for(const [field,claim]of values){
   const matches=reviewed.claims.filter(x=>x.candidateId===c.id&&fieldKey(x.field)===fieldKey(field)&&x.claim===claim);
   assert.equal(matches.length,1,`${c.id} ${field}: changed or unreviewed displayed claim`);
   const review=matches[0];assert.ok(['verified','supported-with-qualification'].includes(review.status),`${c.id} ${field}: unresolved semantic review`);
   const evidence=(c.evidence||[]).filter(e=>e.field===fieldKey(field)||(e.fields||[]).includes(fieldKey(field))||(fieldKey(field)==='endorsements'&&String(e.field||'').startsWith('endorsements.')));
   assert.ok(evidence.some(e=>review.urls.includes(e.url)),`${c.id} ${field}: reviewed source is not published`);
   actual.push([c.id,fieldKey(field),claim].join('\t'));
  }
 }
}
assert.equal(new Set(actual).size,actual.length,'Duplicate current content claim');
assert.equal(actual.length,reviewed.claims.length,'Reconcile removed statements with the source ledger');
assert.equal(reviewed.problems.length,0,'Unresolved source-review problems');
console.log(`PASS ${actual.length} retained issue/endorsement claims match the reviewed source ledger. Semantic source verification is documented in the ledger; this regression check cannot refresh external sources.`);
