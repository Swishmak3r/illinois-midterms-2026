'use strict';
// Persist the same source-derived postal-area unions used by location.js.
// Preserves the independent issue/PAC portions of data-towns-pacs.js.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const scope = { window: {} };
for (const file of ['data-federal.js','data-legislature.js','data-local.js','data-towns-pacs.js','data-zips.js','data-geography.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), scope, { filename: file });
}
const before = JSON.parse(JSON.stringify(scope.window.IL_TOWNS_DIRECTORY));
// The former five downtown ZIPs did not describe a citywide overview.
// Retain the citywide shortcut as the explicitly disclosed union of Chicago research groups.
const overview = scope.window.IL_TOWNS_DIRECTORY.find(t => t.id === 'chicago-all');
if (overview) overview.zips = [...new Set(scope.window.IL_TOWNS_DIRECTORY.filter(t => t.id !== 'chicago-all' && t.region === 'Chicago').flatMap(t => t.zips))].sort();
vm.runInNewContext(fs.readFileSync(path.join(root, 'location.js'), 'utf8'), scope, { filename: 'location.js' });
const after = scope.window.IL_TOWNS_DIRECTORY;
const file = path.join(root, 'data-towns-pacs.js');
const text = fs.readFileSync(file, 'utf8');
const start = text.indexOf('window.IL_TOWNS_DIRECTORY = ');
const end = text.indexOf('window.IL_PACS_DIRECTORY = ', start);
if (start < 0 || end < 0) throw new Error('Cannot identify isolated town directory segment');
fs.writeFileSync(file, text.slice(0, start) + 'window.IL_TOWNS_DIRECTORY = ' + JSON.stringify(after, null, 2) + ';\n\n' + text.slice(end));
const auditFile = path.join(root, 'audit', '2026-11-01-geography-town-changes.json');
const previous = fs.existsSync(auditFile) ? JSON.parse(fs.readFileSync(auditFile, 'utf8')).changes : [];
const changes = before.map((town, i) => ({ id: town.id, before: previous.find(p => p.id === town.id)?.before || Object.fromEntries(['county','usHouse','stateSenate','stateHouse','localRaces'].map(k => [k, town[k]])), after: Object.fromEntries(['county','usHouse','stateSenate','stateHouse','localRaces','mappedGeographyZips'].map(k => [k, after[i][k]])) }));
fs.writeFileSync(auditFile, JSON.stringify({ checked: '2026-11-01', method: 'Union of mapped ZCTAs explicitly listed by each community; current election district filter; source-approved countywide/courtwide local contests only.', changes }, null, 2) + '\n');
console.log(`Refreshed ${after.length} community entries from Census geography and current race data.`);
