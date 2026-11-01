'use strict';
// Fetch and compare public SBE report summaries; never retain addresses or donor transactions.
// Run: node --use-system-ca scripts/check-state-finance-sources.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data-finance-verified.js'), 'utf8'), context);
const entries = Object.entries(context.window.IL_STATE_FINANCE);
const output = path.join(root, 'audit', '2026-11-01-finance-full-state.json');
const paperPath = path.join(root, 'audit', '2026-11-01-finance-full-paper.json');
const paperReviews = fs.existsSync(paperPath) ? JSON.parse(fs.readFileSync(paperPath,'utf8')).records : {};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const text = value => String(value || '').replace(/<[^>]*>/g, ' ').replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const normalize = value => text(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
function spans(html) { return Object.fromEntries([...html.matchAll(/<span[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/span>/g)].map(m => [m[1].replace(/^ContentPlaceHolder1_/, ''), text(m[2])])); }
function tableRows(html, id) {
  const table = html.match(new RegExp('<table[^>]*id="ContentPlaceHolder1_' + id + '"[^>]*>([\\s\\S]*?)<\\/table>'));
  return table ? [...table[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map(m => ({ raw:m[1], cells:[...m[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/g)].map(c=>text(c[1])) })) : [];
}
const dollars = s => /^-?\$?[\d,]+\.\d{2}$/.test(s || '') ? Number(s.replace(/[$,]/g, '')) : null;
const isoDate = s => { const m = String(s).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/); return m ? `${m[3]}-${m[1].padStart(2,'0')}-${m[2].padStart(2,'0')}` : null; };
function filingDate(value) {
  const m = text(value).match(/(\d{1,2}\/\d{1,2}\/\d{4})\s+(\d{1,2}):(\d\d):(\d\d)\s+(AM|PM)/i);
  if (!m) return null;
  const h = Number(m[2]) % 12 + (m[5].toUpperCase() === 'PM' ? 12 : 0);
  return `${isoDate(m[1])}T${String(h).padStart(2,'0')}:${m[3]}:${m[4]}`;
}
function sameReport(a,b) { const x=new URL(a),y=new URL(b); return x.origin===y.origin && x.pathname.toLowerCase()===y.pathname.toLowerCase() && [...x.searchParams].every(([k,v])=>y.searchParams.get(k)===v) && [...y.searchParams].every(([k,v])=>x.searchParams.get(k)===v); }
function linkedRecord(html, expected) { return tableRows(html,'gvFiledDocs').find(r=> [...r.raw.matchAll(/href="([^"]+)"/g)].some(m=> {try{return sameReport(new URL(m[1].replace(/&amp;/g,'&'),expected.committeeUrl).href,expected.sourceUrl);}catch{return false;}})); }
async function get(url, options={}) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { ...options, signal:AbortSignal.timeout(45000), headers:{'User-Agent':'Mozilla/5.0 (compatible; public-election-source-check)',...(options.headers||{})} });
      const bytes = Buffer.from(await response.arrayBuffer());
      const html = bytes.toString('utf8');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return {html, retrievedAt:new Date().toISOString(), sha256:sha(bytes), status:response.status, finalUrl:response.url,cookie:response.headers.getSetCookie().map(c=>c.split(';')[0]).join('; ')};
    } catch(error) { if(attempt===2) throw error; await new Promise(resolve=>setTimeout(resolve,1000*(attempt+1))); }
  }
}
const results = [];
async function inspect([candidateId, expected]) {
  const result = { candidateId, committeeId:expected.committeeId, reportUrl:expected.sourceUrl, committeeUrl:expected.committeeUrl, expected:{committeeName:expected.committeeName, reportType:expected.reportType, coverageStart:expected.coverageStart, coverageEnd:expected.coverageEnd, reportFiledDate:expected.reportFiledDate, receipts:expected.receipts, disbursements:expected.disbursements, cashOnHand:expected.cashOnHand, debts:expected.debts, inKind:expected.inKind}, comparisons:[], problems:[] };
  const compare = (field, actual, wanted, method='exact') => { const equal = method==='name' ? normalize(actual)===normalize(wanted) : actual===wanted; result.comparisons.push({field,actual,expected:wanted,match:equal}); if(!equal) result.problems.push(`${field}: source ${JSON.stringify(actual)} versus site ${JSON.stringify(wanted)}`); };
  try {
    const report = await get(expected.sourceUrl);
    let committee = await get(expected.committeeUrl);
    if(!linkedRecord(committee.html,expected)) {
      const select=committee.html.match(/<select name="([^"]*PageSize)"/);
      if(select) {
        const body=new URLSearchParams();
        for(const input of committee.html.matchAll(/<input\b[^>]*>/g)) {
          const attrs=Object.fromEntries([...input[0].matchAll(/(\w+)="([^"]*)"/g)].map(m=>[m[1],text(m[2])]));
          if(attrs.name&&attrs.type==='hidden')body.set(attrs.name,attrs.value||'');
        }
        body.set(select[1],'32767');body.set('__EVENTTARGET',select[1]);body.set('__EVENTARGUMENT','');
        committee=await get(expected.committeeUrl,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded',Cookie:committee.cookie},body});
        result.committeeExpandedToAll=true;
      }
    }
    result.reportRetrieval={status:report.status,sha256:report.sha256,retrievedAt:report.retrievedAt,finalUrl:report.finalUrl};
    result.committeeRetrieval={status:committee.status,sha256:committee.sha256,retrievedAt:committee.retrievedAt,finalUrl:committee.finalUrl};
    const c=spans(committee.html);
    result.committee={name:c.lblName,id:c.lblCommitteeID,status:c.lblStatus,type:c.lblTypeOfCommittee,purpose:c.lblPurpose,candidates:tableRows(committee.html,'gvCandidates').slice(1).map(r=>({name:r.cells[0],districtType:r.cells[2],office:r.cells[3],district:r.cells[4]}))};
    compare('committeeId',result.committee.id,String(expected.committeeId));
    compare('committeeName',result.committee.name,expected.committeeName,'name');
    const filedRows=tableRows(committee.html,'gvFiledDocs');
    const record=linkedRecord(committee.html,expected);
    result.reportListedByCommittee=!!record;
    compare('reportListedByCommittee',!!record,true);
    if(record) { result.reportFiledDate=filingDate(record.cells[2]); compare('reportFiledDate',result.reportFiledDate,expected.reportFiledDate); }
    result.otherCurrentQuarterFilings=filedRows.filter(r=>/D-2|Amend/i.test(r.cells[0]||'')&&/9\/30\/2026/.test(r.cells[1]||'')).map(r=>({type:r.cells[0],period:r.cells[1],filed:filingDate(r.cells[2]),url:(()=>{const m=r.raw.match(/href="([^"]+)"/);return m?new URL(m[1].replace(/&amp;/g,'&'),expected.committeeUrl).href:null;})()}));
    if(result.otherCurrentQuarterFilings.some(r=>r.filed>result.reportFiledDate))result.problems.push('A newer filing for this quarter is listed by the committee; inspect amendments before claiming current figures.');
    if(/CDPDFViewer/i.test(expected.sourceUrl)) {
      result.status='paper-report-requires-visual-check';
      const review=paperReviews[candidateId];
      if(review && review.sha256===report.sha256) {
        result.visualReview={checked:review.checked,page:review.page,sha256:review.sha256,notes:review.notes};
        result.report=review.report;
        compare('reportCommitteeName',review.report.committeeName,expected.committeeName,'name');
        compare('reportType',review.report.reportType,expected.reportType);
        for(const field of ['coverageStart','coverageEnd','receipts','disbursements','cashOnHand','debts','inKind'])compare(field,review.report[field],expected[field]);
        result.balanceDifferenceCents=Math.round(100*(review.report.beginningFunds+review.report.receipts-review.report.disbursements-review.report.cashOnHand));
        result.status=result.problems.length?'discrepancy':'verified-paper-summary';
      }
    } else {
      const r=spans(report.html), period=(r.lblReportPeriod||'').split(' to ');
      result.report={committeeName:r.lblName,reportType:r.lblReportType,coverageStart:isoDate(period[0]),coverageEnd:isoDate(period[1]),receipts:dollars(r.lblTotalReceipts),disbursements:dollars(r.lblTotalExpend),cashOnHand:dollars(r.lblEndFundsAvail),debts:dollars(r.lblTotalDebts),inKind:dollars(r.lblTotalInKind),beginningFunds:dollars(r.lblBegFundsAvail)};
      compare('reportCommitteeName',r.lblName,expected.committeeName,'name');
      compare('reportType',r.lblReportType,expected.reportType);
      for(const field of ['coverageStart','coverageEnd','receipts','disbursements','cashOnHand','debts','inKind']) compare(field,result.report[field],expected[field]);
      result.balanceDifferenceCents=Math.round(100*(result.report.beginningFunds+result.report.receipts-result.report.disbursements-result.report.cashOnHand));
      if(result.balanceDifferenceCents!==0) result.problems.push(`Reported balance differs by ${result.balanceDifferenceCents} cents; source values must not be silently recomputed.`);
      result.status=result.problems.length?'discrepancy':'verified-source-fields';
    }
  } catch(error) {result.status='source-unavailable';result.problems.push(error.message);}
  results.push(result);
  console.log(`${results.length}/${entries.length} ${candidateId}: ${result.status}${result.problems.length ? ' '+result.problems.join(' | ') : ''}`);
}
async function main() {
  let next=0;
  await Promise.all(Array.from({length:4},async()=>{while(next<entries.length) await inspect(entries[next++]);}));
  results.sort((a,b)=>a.candidateId.localeCompare(b.candidateId));
  const summary={checked:'2026-11-01',retrievedAt:new Date().toISOString(),records:results.length,statuses:results.reduce((out,r)=>(out[r.status]=(out[r.status]||0)+1,out),{}),comparisons:results.reduce((n,r)=>n+r.comparisons.length,0),comparisonMismatches:results.reduce((n,r)=>n+r.comparisons.filter(c=>!c.match).length,0),scope:'Comparison to the cited public SBE committee/report summary and two SHA-matched visual paper reviews, not an independent audit of donor transactions or truth of filed data. Candidate addresses and donor records are intentionally not retained.',results};
  fs.writeFileSync(output,JSON.stringify(summary,null,2)+'\n');
  console.log(JSON.stringify({...summary,results:undefined},null,2));
  if(summary.comparisonMismatches || results.some(r=>r.problems.length || !['verified-source-fields','verified-paper-summary'].includes(r.status))) process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});
