'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(root, '.cache', 'browsers');
const playwright = require('playwright');
const supplied = process.argv.indexOf('--url');
const base = new URL(supplied >= 0 ? process.argv[supplied + 1] : 'http://127.0.0.1:4173/');
base.search = ''; base.hash = '';
const output = path.join(root, 'output', 'playwright', 'factcheck-features');
fs.mkdirSync(output, { recursive: true });
const results = [];
async function main() {
  for (const engine of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[engine].launch({ headless: true, ...(engine === 'chromium' && process.platform === 'win32' ? { channel: 'msedge' } : {}) });
    try {
      for (const width of [1440, 390]) {
        const context = await browser.newContext({ viewport: { width, height: width === 1440 ? 1000 : 844 }, hasTouch: width < 600, reducedMotion: 'reduce' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', e => errors.push(e.message));
        const check = async (name, fn) => { await fn(); results.push({ engine, width, name, passed: true }); console.log(`PASS ${engine} ${width}: ${name}`); };
        const goto = async (query = '') => { await page.goto(base.href + query, { waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => window.IL_APP); };
        try {
          await goto();
          await check('Known 0%, mixed and 100% scores remain distinct from missing evidence', async () => {
            const scores = await page.evaluate(() => Object.fromEntries(['delia-ramirez', 'nikki-budzinski', 'mike-bost', 'juliana-stratton', 'brad-schneider'].map(id => [id, IL_APP.getAlignment(id)])));
            assert.equal(scores['delia-ramirez'].percent, 0);
            assert.equal(scores['nikki-budzinski'].percent, 33);
            assert.equal(scores['mike-bost'].percent, 100);
            assert.equal(scores['juliana-stratton'].percent, null);
            assert.equal(scores['brad-schneider'].known, 5);
            const card = page.locator('[data-cand-id="delia-ramirez"] .alignment-summary');
            assert.match(await card.innerText(), /0%/);
            assert.match(await card.innerText(), /2025.*six-measure sample.*6\/6/);
            assert.match(await page.locator('[data-cand-id="juliana-stratton"] .alignment-summary').innerText(), /Insufficient evidence/);
            assert.equal(await page.locator('[data-cand-id="juliana-stratton"] .alignment-meter').count(), 0);
          });
          await check('Candidate profile links both sides of all six measures and field sources', async () => {
            await page.locator('[data-modal-cand="delia-ramirez"]').first().click();
            assert.equal(await page.locator('.modal-panel .alignment-policy-list > li').count(), 6);
            assert.equal(await page.locator('.alignment-policy-list a[href*="clerk.house.gov"]').count(), 6);
            assert.ok(await page.locator('.alignment-policy-list a[href*="whitehouse.gov"]').count() >= 6);
            assert.ok(await page.locator('.profile-evidence a').count() > 0);
            await page.locator('.modal-panel [data-alignment-method]').click();
            assert.equal(await page.locator('[role="dialog"]').count(), 0);
            assert.equal(await page.evaluate(() => document.activeElement.id), 'alignment-method');
            assert.match(await page.locator('#alignment-method').innerText(), /not a random sample/);
            assert.equal(await page.locator('body > [inert]').count(), 0);
          });
          await check('Exact finance identity matching and period labels', async () => {
            await goto('?tab=compare&compare=whitfield-harrington,jb-pritzker-christian-mitchell');
            const finance = await page.evaluate(() => ({ federal: IL_APP.getFinance('whitfield-harrington'), state: IL_APP.getFinance('jb-pritzker-christian-mitchell') }));
            assert.equal(finance.federal.candidate_id, 'S6IL00680');
            assert.equal(finance.federal.sourceType, 'federal');
            assert.equal(finance.state.sourceType, 'state');
            assert.equal(finance.state.coverageStart, '2026-07-01');
            assert.equal(finance.state.coverageEnd, '2026-09-30');
            const content = await page.locator('.comparison-table').innerText();
            assert.match(content, /Quarter receipts/);
            assert.match(content, /FEC · 2026 two-year query/);
            assert.match(content, /not an election-cycle total|quarter only/i);
            assert.ok(await page.locator('.comparison-table a[href*="election_full=false"]').count() > 0);
          });
          await check('Write-ins are visibly separate and unknown finance is not zero', async () => {
            await goto('?q=Brad%20Ahrens');
            assert.ok(await page.locator('.write-in-badge').count() > 0);
            assert.equal(await page.evaluate(() => IL_APP.getFinance('brad-ahrens')), null);
            assert.match(await page.locator('[data-cand-id="brad-ahrens"]').innerText(), /No verified FEC total matched/);
          });
          await check('Source-linked issues and four-column comparison remain contained', async () => {
            await goto('?tab=issues&level=federal&issue=healthcare');
            assert.ok(await page.locator('.issue-position .source-citations a').count() > 10);
            await goto('?tab=compare&compare=delia-ramirez,mike-bost,nikki-budzinski,juliana-stratton');
            assert.equal(await page.locator('.comparison-table .alignment-summary').count(), 4);
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
            assert.equal(await page.locator('.comparison-table thead th').count(), 5);
            await page.screenshot({ path: path.join(output, `${engine}-${width}-comparison.png`), fullPage: false });
          });
          await check('No browser errors', async () => assert.deepEqual(errors, []));
        } finally { await context.close(); }
      }
    } finally { await browser.close(); }
  }
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify({ checked: new Date().toISOString(), url: base.href, passed: results.length, results }, null, 2));
  console.log(`${results.length} fact-check feature checks passed.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
