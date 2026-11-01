'use strict';
// Reconcile the reviewed semantic claim ledgers with exact currently displayed text.
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const sources=['federal-one','federal-two','statewide','legislature','legislature-additions','local'].map(k=>`audit/2026-11-01-content-${k}.json`);
const ledgers=sources.map(file=>({file,data:JSON.parse(fs.readFileSync(path.join(root,file),'utf8'))}));
const reviewed=ledgers.flatMap(({file,data})=>(data.activeProductionClaims||data.claims).map(c=>({...c,reviewLedger:file})));
const scope={window:{}};const globals={'data-federal.js':'IL_FEDERAL_RACES','data-statewide.js':'IL_STATEWIDE_RACES','data-legislature.js':'IL_LEGISLATURE_RACES','data-local.js':'IL_LOCAL_RACES'};
const current=[];const candidates=new Map();
for(const [file,key]of Object.entries(globals)){
 vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),scope,{filename:file});
 for(const r of scope.window[key])for(const c of r.candidates||[]){candidates.set(c.id,c);for(const [k,v]of Object.entries(c.issues||{}))if(v)current.push({file,candidateId:c.id,field:`issues.${k}`,claim:v});for(const [i,v]of(c.endorsements||[]).entries())current.push({file,candidateId:c.id,field:`endorsements[${i}]`,claim:v});}
}
const fieldKey=f=>f.startsWith('endorsements[')?'endorsements':f;
const problems=[],claims=[],refresh=[];
for(const c of current){const matches=reviewed.filter(r=>r.candidateId===c.candidateId&&fieldKey(r.field)===fieldKey(c.field)&&r.claim===c.claim);if(matches.length!==1){problems.push({type:'unmatched-or-duplicate-review',...c,matches:matches.length});continue;}const r=matches[0];if(!['verified','supported-with-qualification'].includes(r.status)||!(r.urls||[]).length||!r.support){problems.push({type:'unsupported-review',...c,status:r.status});continue;}const evidence=(candidates.get(c.candidateId).evidence||[]).filter(e=>e.field===fieldKey(c.field)||(e.fields||[]).includes(fieldKey(c.field))||(fieldKey(c.field)==='endorsements'&&e.field.startsWith('endorsements.')));const published=new Set(evidence.map(e=>e.url));const supporting=(r.urls||[]).filter(u=>published.has(u));if(!supporting.length)problems.push({type:'no-reviewed-source-published',...c,reviewedUrls:r.urls});for(const e of evidence)if(supporting.includes(e.url))refresh.push({candidateId:c.candidateId,field:e.field,url:e.url,checked:'2026-11-01',reviewLedger:r.reviewLedger});claims.push({...c,status:r.status,urls:r.urls,support:r.support,reviewLedger:r.reviewLedger,sourceReview:r.sourceReview||r.reviewer||'See per-scope ledger for retrieval method and limitations.'});}
const dedupe=new Map(refresh.map(e=>[[e.candidateId,e.field,e.url].join('|'),e]));
const countBy=fn=>Object.fromEntries([...new Set(claims.map(fn))].map(k=>[k,claims.filter(c=>fn(c)===k).length]));
for (const claim of claims) { const r=reviewed.find(r=>r.candidateId===claim.candidateId&&fieldKey(r.field)===fieldKey(claim.field)&&r.claim===claim.claim); for(const key of ['qualification','access','method','sourceAccess','limitation']) if(r[key]) claim[key]=r[key]; }
const report={checked:'2026-11-01',scope:'Exact retained issue/endorsement statements reconciled to actual-source semantic reviews. This does not establish complete issue coverage, independent truth of campaign achievements, every finance filing, or personal ballot eligibility.',counts:{currentClaims:current.length,reviewedClaims:claims.length,issues:current.filter(c=>c.field.startsWith('issues.')).length,endorsements:current.filter(c=>c.field.startsWith('endorsements[')).length,byStatus:countBy(c=>c.status),byFile:countBy(c=>c.file),refreshEvidenceEntries:dedupe.size,unresolved:problems.length},problems,claims};
fs.writeFileSync(path.join(root,'audit/2026-11-01-content-final.json'),JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(path.join(root,'audit/2026-11-01-content-source-refresh.json'),JSON.stringify({checked:'2026-11-01',scope:'Refresh only these exact candidateId/field/URL evidence entries after semantic source review. Preserve sourceDate and published. Do not blanket stamp unrelated fields at sameURL. Indexed-source caveats remain in scope ledgers.',entries:[...dedupe.values()]},null,2)+'\n');
console.log(JSON.stringify(report.counts,null,2));if(problems.length)console.log(JSON.stringify(problems.slice(0,20),null,2));
assert.equal(problems.length,0,'Every retained claim must match a supported review with a published reviewed source.');
