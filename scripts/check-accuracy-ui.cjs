'use strict';
// Regression checks for factual presentation, separate from source verification.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(root, '.cache', 'browsers');
const { chromium, firefox, webkit } = require('playwright');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173/';
const checks = [];
async function main() {
  for (const [engine, launcher] of Object.entries({ chromium, firefox, webkit })) {
    const browser = await launcher.launch({ headless: true, ...(engine === 'chromium' && process.platform === 'win32' ? { channel: 'msedge' } : {}) });
    try {
      for (const width of [1440, 390, 320]) {
        const page = await browser.newPage({ viewport: { width, height: 900 } });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const run = async (name, fn) => { await fn(); checks.push({ engine, width, name }); console.log(`PASS ${engine} ${width}: ${name}`); };
        await page.goto(base + '?zip=60490');
        await page.waitForFunction(() => window.IL_APP);
        await run('ZIP results have explicit approximate boundaries', async () => {
          assert.match(await page.locator('#active-town-banner').innerText(), /approximate|not.*official ballot/i);
          assert.equal(await page.locator('#hero-location-input').getAttribute('aria-describedby'), 'lookup-help hero-location-feedback');
        });
        await page.locator('#filter-toggle').click();
        await page.selectOption('#party-select-control', 'dem');
        await page.selectOption('#district-select-control', 'HD-118');
        await run('Direct district selection resets ZIP and filters and survives reload', async () => {
          let state = await page.evaluate(() => IL_APP.getState());
          assert.equal(state.districtFilter, 'HD-118');
          assert.equal(state.locationResult, null);
          assert.equal(state.partyFilter, 'all');
          assert.equal(new URL(page.url()).searchParams.get('zip'), null);
          assert.equal(new URL(page.url()).searchParams.get('district'), 'HD-118');
          assert.equal(await page.locator('.race-card').count(), 1);
          assert.equal(await page.locator('#district-select-control option[value^="HD-"]').count(), 118);
          assert.equal(await page.locator('#district-select-control option[value^="SD-"]').count(), 39);
          assert.equal(await page.locator('#filter-active-count').innerText(), '1');
          await page.reload();
          await page.waitForFunction(() => window.IL_APP);
          state = await page.evaluate(() => IL_APP.getState());
          assert.equal(state.districtFilter, 'HD-118');
          assert.equal(await page.locator('.race-card').count(), 1);
          assert.match(await page.locator('.race-evidence').innerText(), /2026-11-01/);
        });
        const retention = await page.evaluate(() => IL_LOCAL_RACES.find(r => r.contestType === 'retention'));
        assert.ok(retention);
        await page.goto(base + '?district=' + encodeURIComponent(retention.districtCode));
        await page.waitForFunction(() => window.IL_APP);
        await run('Retention presents a single Yes/No question without opponent comparison', async () => {
          const body = await page.locator('.race-card').innerText();
          assert.match(body, /Vote Yes or No/);
          assert.doesNotMatch(body, /Area overview/);
          assert.equal(await page.locator('[data-compare-race]').count(), 0);
          assert.equal(await page.locator('.candidate-card').count(), 1);
        });
        await page.goto(base + '?district=WILL-BD-9');
        await page.waitForFunction(() => window.IL_APP);
        await run('Multi-seat county board specifies number of votes', async () => {
          assert.match(await page.locator('.race-card').innerText(), /Vote for no more than 2/);
          assert.equal(await page.locator('.candidate-card').count(), 3);
        });
        await page.goto(base + '?zip=60647&county=Cook');
        await page.waitForFunction(() => window.IL_APP);
        await run('County filter keeps all sourced Chicago legislative overlaps', async () => {
          const codes = await page.evaluate(() => IL_LEGISLATURE_RACES.filter(r => IL_APP.getFilteredRaceIds().includes(r.id)).map(r => r.districtCode));
          for (const code of ['HD-3','HD-4','HD-10','HD-39','HD-40']) assert.ok(codes.includes(code), code);
          assert.equal(await page.locator('#region-select-control option').count(), 103);
          assert.ok(await page.locator('#active-town-banner a[href*="tigerweb.geo.census.gov"]').count() > 0);
        });
        await page.goto(base + '?town=Ringwood');
        await page.waitForFunction(() => window.IL_APP);
        await page.locator('#filter-toggle').click();
        await page.selectOption('#party-select-control', 'dem');
        await run('Postal-city links preserve a resolvable city name', async () => {
          assert.equal(new URL(page.url()).searchParams.get('town'), 'Ringwood');
          await page.reload();
          await page.waitForFunction(() => window.IL_APP);
          const state = await page.evaluate(() => IL_APP.getState());
          assert.equal(state.locationNotice, '');
          assert.equal(state.locationResult.location.city, 'Ringwood');
        });
        await run('No script errors or viewport overflow', async () => {
          assert.deepEqual(errors, []);
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        });
        await page.close();
      }
    } finally { await browser.close(); }
  }
  fs.mkdirSync(path.join(root, 'output', 'audit'), { recursive: true });
  fs.writeFileSync(path.join(root, 'output', 'audit', 'accuracy-ui.json'), JSON.stringify({ checked: '2026-11-01', passed: checks.length, checks }, null, 2));
  console.log(`${checks.length} accuracy UI checks passed.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
