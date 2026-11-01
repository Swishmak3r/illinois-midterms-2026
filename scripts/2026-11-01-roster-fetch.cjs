'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const url = 'https://www.elections.il.gov/ElectionOperations/CandidateList.aspx?ElectionID=sejIrI%2BQmww%3D';
const decode = s => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const text = s => decode(s.replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
(async () => {
  const first = await fetch(url); if (!first.ok) throw new Error(`GET ${first.status}`);
  const initial = await first.text();
  const body = new URLSearchParams();
  for (const input of initial.matchAll(/<input\b[^>]*>/g)) {
    const attrs = Object.fromEntries([...input[0].matchAll(/(\w+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
    if (attrs.name && attrs.type === 'hidden') body.set(attrs.name, attrs.value || '');
  }
  const select = initial.match(/<select name="([^"]*PageSize)"/)[1];
  body.set(select, '32767');
  body.set('__EVENTTARGET', select); body.set('__EVENTARGUMENT', '');
  const cookie = first.headers.getSetCookie().map(c => c.split(';')[0]).join('; ');
  const all = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded', Cookie: cookie}, body});
  if (!all.ok) throw new Error(`POST ${all.status}`);
  const html = await all.text();
  const records = [];
  for (const tr of html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...tr[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1]);
    if (cells.length !== 7 || !cells[0].includes('CandidateDetailEO.aspx')) continue;
    const a = cells[0].match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    const office = cells[3].match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    records.push({name: text(a[2]), candidateUrl: new URL(decode(a[1]), url).href, writeIn: text(cells[1]), objection: text(cells[2]), office: text(cells[3]), officeUrl: new URL(decode(office[1]), url).href, party: text(cells[4]), filed: text(cells[5]), status: text(cells[6])});
  }
  if (records.length < 500) throw new Error(`Incomplete source retrieval: ${records.length} records`);
  const result = {url, checked: '2026-11-01', retrievedAt: new Date().toISOString(), sourceHtmlSha256: crypto.createHash('sha256').update(html).digest('hex'), extraction: 'All page-size option; table rows only. Candidate addresses intentionally omitted.', recordCount: records.length, records};
  fs.writeFileSync(path.join(root, 'audit/2026-11-01-roster-sbe.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({records: records.length, offices: [...new Set(records.map(r=>r.office))], statuses: [...new Set(records.map(r=>r.status))]}, null, 2));
})().catch(e=>{console.error(e);process.exitCode=1;});
