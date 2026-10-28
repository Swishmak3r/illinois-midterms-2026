#!/usr/bin/env node
// Start the built site on port 4173, then run npm test.
// Browsers: npm run browsers:install. Chromium uses Edge on Windows by default.
// Overrides: TEST_BASE_URL, NODE_PATH, PLAYWRIGHT_BROWSERS_PATH, CHROMIUM_CHANNEL,
// CHROMIUM_EXECUTABLE_PATH, TEST_ENGINES; CLI: --engines, --viewports, --match, --output.
// --capture records any public/local URL without asserting the redesigned DOM.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { performance } = require('node:perf_hooks');
const ROOT = path.resolve(__dirname, '..');
if (!process.env.PLAYWRIGHT_BROWSERS_PATH) process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(ROOT, '.cache', 'browsers');
function loadPlaywright() {
  try { return require('playwright'); }
  catch (original) {
    for (const directory of (process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean)) {
      try { return require(path.join(directory, 'playwright')); } catch (_) { /* Try next configured runtime. */ }
    }
    throw new Error('Playwright is unavailable. Run npm install, or set NODE_PATH to an existing node_modules directory.', { cause: original });
  }
}
const playwright = loadPlaywright();
function argument(name, fallback) { const i = process.argv.indexOf(name); return i < 0 ? fallback : process.argv[i + 1]; }
const CAPTURE = process.argv.includes('--capture');
const INSTALL = process.argv.includes('--install');
const VIEWPORT_ONLY = process.argv.includes('--viewport-only');
const MATCH = argument('--match', '');
const BASE_URL = argument('--url', process.env.TEST_BASE_URL || 'http://127.0.0.1:4173/?zip=60647');
const ENGINES = argument('--engines', process.env.TEST_ENGINES || (CAPTURE ? 'chromium' : 'chromium,firefox,webkit')).split(',');
const OUT = path.resolve(ROOT, argument('--output', CAPTURE ? 'output/playwright/before' : 'output/playwright/checks'));
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'mobile-320', width: 320, height: 740 }
].filter(viewport => !argument('--viewports', '') || argument('--viewports', '').split(',').includes(viewport.name));
async function launch(engine) {
  assert.ok(playwright[engine], `Unknown browser engine: ${engine}`);
  const options = { headless: true };
  if (engine === 'chromium') {
    if (process.env.CHROMIUM_EXECUTABLE_PATH) options.executablePath = process.env.CHROMIUM_EXECUTABLE_PATH;
    else if (process.env.CHROMIUM_CHANNEL || process.platform === 'win32') options.channel = process.env.CHROMIUM_CHANNEL || 'msedge';
  }
  return playwright[engine].launch(options);
}
async function captureBaseline() {
  fs.mkdirSync(OUT, { recursive: true });
  const captures = [];
  for (const engine of ENGINES) {
    const browser = await launch(engine);
    try {
      for (const viewport of VIEWPORTS) {
        const captureViewport = VIEWPORT_ONLY && viewport.name === 'desktop' ? { width:1440,height:900 } : viewport;
        const context = await browser.newContext({ viewport:captureViewport, deviceScaleFactor: 1, reducedMotion: 'reduce', colorScheme: 'light' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(2000);
        const screenshot = VIEWPORT_ONLY ? `${viewport.name}-viewport.png` : `${engine}-${viewport.name}.png`;
        await page.screenshot({ path: path.join(OUT, screenshot), fullPage: !VIEWPORT_ONLY, animations: 'disabled' });
        captures.push({ engine, viewport:captureViewport, url: page.url(), title: await page.title(), screenshot, errors,
          documentWidth: await page.evaluate(() => document.documentElement.scrollWidth) });
        console.log(`CAPTURE ${engine} ${viewport.name}: ${screenshot}`);
        await context.close();
      }
    } finally { await browser.close(); }
  }
  fs.writeFileSync(path.join(OUT, VIEWPORT_ONLY ? 'viewport-capture.json' : 'capture.json'), JSON.stringify({ capturedAt: new Date().toISOString(), source: BASE_URL, captures }, null, 2));
}

const results = [];
let contextLabel = 'node';
async function check(name, body, page) {
  if (MATCH && !`${contextLabel} ${name}`.toLowerCase().includes(MATCH.toLowerCase())) return;
  const start = performance.now();
  try {
    await body();
    results.push({ context: contextLabel, name, status: 'passed', milliseconds: Math.round(performance.now() - start) });
    console.log(`PASS ${contextLabel}: ${name}`);
  } catch (error) {
    const filename = `${contextLabel}-${name}`.replace(/[^a-z0-9-]/gi, '-').slice(0,160) + '.png';
    if (page && !page.isClosed()) await page.screenshot({ path: path.join(OUT, filename), fullPage: false, animations: 'disabled' }).catch(() => {});
    results.push({ context: contextLabel, name, status: 'failed', milliseconds: Math.round(performance.now() - start), error: error.stack || String(error), screenshot: page ? filename : undefined });
    console.error(`FAIL ${contextLabel}: ${name}\n${error.message}`);
  }
}
function watchResourceErrors(page, errors) {
  page.on('response', response => { if (response.status() >= 400 && new URL(response.url()).origin === new URL(BASE_URL).origin) errors.push(`HTTP ${response.status()} ${response.url()}`); });
  page.on('requestfailed', request => { if (new URL(request.url()).origin === new URL(BASE_URL).origin && !/abort|cancel/i.test(request.failure()?.errorText || '')) errors.push(`${request.failure()?.errorText} ${request.url()}`); });
}
async function boot(page, url = BASE_URL) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.IL_APP && window.IL_LOCATION);
}
async function readState(page) { return page.evaluate(() => window.IL_APP.getState()); }
async function lookup(page, query) {
  await page.locator('#hero-location-input').fill(query);
  await page.locator('#hero-location-input').press('Enter');
}
async function tab(page, name) {
  await page.locator(`.research-nav [data-tab-btn="${name}"]`).first().click();
  await page.waitForFunction(value => document.body.dataset.activeView === value, name);
}
async function selectFilter(page, id, value) {
  if (!await page.locator(`#${id}`).isVisible()) await page.locator('#filter-toggle').click();
  await page.selectOption(`#${id}`, value);
}
async function noOverflow(page) {
  const dimensions = await page.evaluate(() => ({ viewport: innerWidth, html: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
  assert.ok(dimensions.html <= dimensions.viewport + 1 && dimensions.body <= dimensions.viewport + 1, `Document overflows: ${JSON.stringify(dimensions)}`);
}
async function touchTargets(page) {
  const small = await page.evaluate(() => [...document.querySelectorAll('button, input:not([type=hidden]), select, summary, a.btn-primary, a.btn-secondary, a.btn-text')].filter(element => {
    const r = element.getBoundingClientRect(), style = getComputedStyle(element);
    return r.width > 0 && r.height > 0 && style.visibility !== 'hidden' && !element.closest('[inert]');
  }).map(element => { const r = element.getBoundingClientRect(); return { label: element.getAttribute('aria-label') || element.textContent.trim().slice(0,70) || element.id, width: r.width, height: r.height }; }).filter(r => r.width < 43.5 || r.height < 43.5));
  assert.deepEqual(small, [], `Interactive controls below 44 CSS px: ${JSON.stringify(small.slice(0,12))}`);
}
async function zipDirectoryChecks() {
  const vm = require('node:vm'), scope = { window: {} };
  for (const file of ['data-towns-pacs.js', 'data-zips.js', 'location.js']) vm.runInNewContext(fs.readFileSync(path.join(ROOT,file),'utf8'), scope, { filename: file });
  const api = scope.window.IL_LOCATION, records = scope.window.IL_ZIP_DATA.illinois;
  assert.equal(records.length, 1575, 'Audit an intentional ZIP directory size change before updating this expectation.');
  assert.equal(api.zipCount, records.length);
  for (const [zip] of records) {
    const result = api.resolve(zip), plus4 = api.resolve(zip + '-1234');
    assert.equal(result.error, undefined, zip);
    assert.equal(result.matchedZip, zip);
    assert.equal(result.location.state, 'IL');
    assert.equal(result.approximate, true);
    assert.ok(result.coverageNote && result.coverageNote.includes('address'), zip);
    assert.equal(plus4.matchedZip, zip);
    assert.equal(plus4.town && plus4.town.id, result.town && result.town.id);
  }
  for (const value of ['6064','606470','60647-123','60647-12345','60647abc','00000','99999','90210','10001']) assert.ok(api.resolve(value).error, `Must reject ${value}`);
  assert.equal(api.resolve('90210').error, 'out_of_state_zip');
  assert.equal(api.resolve('62999').town, null, 'An unmapped ZIP must never inherit a guessed district.');
  const chatham = api.resolve('Chatham');
  assert.equal(chatham.error, 'ambiguous_location'); assert.equal(chatham.suggestions.length, 2);
  chatham.suggestions.forEach(choice => assert.ok(api.resolve(choice.query).town));
  const merged = api.resolve('60706'); assert.equal(merged.town.isMergedResearchArea, true);
  assert.ok(merged.towns.length > 1);
  assert.equal(new Set(merged.town.usHouse).size, merged.town.usHouse.length);
}
async function functionalChecks(browser, engine, viewport) {
  contextLabel = `${engine}-${viewport.name}-behavior`;
  const context = await browser.newContext({ viewport, hasTouch: viewport.width < 600, reducedMotion: 'reduce' });
  const page = await context.newPage(), errors = [];
  page.setDefaultTimeout(10000);
  page.on('pageerror', error => errors.push(error.message));
  watchResourceErrors(page, errors);
  try {
    await check('ZIPs, ZIP+4 and safe fallback', async () => {
      await boot(page);
      for (const query of ['60647', '60001', '60706', '62701', '61350', '61820', '62901', '60120', '62002', '60647-1234', '62999']) {
        await lookup(page, query);
        const state = await readState(page); assert.equal(state.locationResult.matchedZip, query.slice(0,5), query);
        assert.equal(state.locationNotice, '');
        assert.equal(await page.locator('#hero-location-input').getAttribute('aria-invalid'), 'false');
      }
      const statewide = await page.evaluate(() => IL_APP.getFilteredRaceIds());
      assert.equal(statewide.length, 6);
      assert.ok((await page.locator('#active-town-banner').innerText()).includes('Showing statewide races'));
      for (const query of ['90210','00000','6064','60647wrong']) {
        await lookup(page,query); const state = await readState(page);
        assert.equal(state.locationResult, null); assert.ok(state.locationNotice);
        assert.equal(await page.locator('#hero-location-input').getAttribute('aria-invalid'), 'true');
        assert.equal((await page.evaluate(() => IL_APP.getFilteredRaceIds())).length, 6, 'Failed lookup must use statewide-only results');
      }
      await page.locator('#hero-location-clear-btn').click();
      assert.equal((await readState(page)).locationNotice, '');
      assert.ok((await page.evaluate(() => IL_APP.getFilteredRaceIds())).length > 6);
    }, page);
    await check('Autocomplete ambiguity and keyboard', async () => {
      await boot(page); await lookup(page,'Chatham');
      assert.equal(await page.locator('#hero-location-suggestions [role=option]').count(),2);
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-expanded'),'true');
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-invalid'),'true');
      await page.locator('#hero-location-input').press('ArrowUp');
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-activedescendant'),'location-option-1');
      await page.locator('#hero-location-input').press('Enter');
      assert.ok((await readState(page)).locationResult.town);
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-expanded'),'false');
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-invalid'),'false');
      await page.locator('#hero-location-input').fill('Rock'); await page.locator('#hero-location-input').press('ArrowDown');
      assert.ok(await page.locator('#hero-location-input').getAttribute('aria-activedescendant'));
      await page.locator('#hero-location-input').press('Escape');
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-activedescendant'),null);
      await page.locator('#hero-location-input').press('ArrowDown'); await page.locator('#hero-location-input').press('Tab');
      assert.equal(await page.locator('#hero-location-input').getAttribute('aria-expanded'),'false');
    }, page);
    await check('History and filter reset keep URL and UI aligned', async () => {
      await boot(page); await selectFilter(page,'party-select-control','dem');
      await lookup(page,'62999'); assert.equal((await readState(page)).partyFilter,'all');
      assert.equal(new URL(page.url()).searchParams.get('zip'),'62999');
      await page.goBack(); await page.waitForFunction(() => IL_APP.getState().locationResult?.matchedZip === '60647');
      assert.equal((await readState(page)).partyFilter,'dem');
      assert.equal(await page.locator('#party-select-control').inputValue(),'dem');
      await page.goForward(); await page.waitForFunction(() => IL_APP.getState().locationResult?.matchedZip === '62999');
      assert.equal(await page.locator('#party-select-control').inputValue(),'all');
      await selectFilter(page,'level-select-control','local'); assert.equal(await page.locator('.empty-state').count(),1);
      await page.locator('#reset-all-filters-btn').last().click();
      assert.equal((await readState(page)).locationResult.matchedZip,'62999');
      assert.equal((await page.evaluate(() => IL_APP.getFilteredRaceIds())).length,6);
    }, page);
    await check('Comparison limit, removal and shareable reload', async () => {
      await boot(page);
      const ids = await page.locator('.candidate-card [data-compare-toggle]').evaluateAll(elements => elements.slice(0,5).map(e => e.dataset.compareToggle));
      assert.equal(ids.length,5);
      for (const id of ids.slice(0,4)) await page.locator(`.candidate-card [data-compare-toggle="${id}"]`).click();
      await page.locator(`.candidate-card [data-compare-toggle="${ids[4]}"]`).click();
      assert.deepEqual((await readState(page)).compareIds,ids.slice(0,4));
      await tab(page,'compare'); assert.equal(await page.locator('.comparison-table thead th').count(),5);
      await page.locator(`[data-compare-remove="${ids[1]}"]`).click();
      assert.equal((await readState(page)).compareIds.length,3);
      await tab(page,'ballot'); await page.locator(`.candidate-card [data-compare-toggle="${ids[4]}"]`).click();
      const selected = (await readState(page)).compareIds; assert.equal(selected.length,4);
      await tab(page,'compare'); await page.reload(); await page.waitForFunction(() => window.IL_APP);
      assert.deepEqual((await readState(page)).compareIds,selected);
      assert.equal(await page.locator('.comparison-table thead th').count(),5);
      await noOverflow(page);
      await page.locator('#clear-compare-btn').click(); assert.equal((await readState(page)).compareIds.length,0);
      assert.equal(await page.locator('.comparison-table').count(),0);
    }, page);
    await check('Modal focus trap, comparison and restoration', async () => {
      await boot(page); const opener = page.locator('.candidate-card [data-modal-cand]').first(); const id = await opener.getAttribute('data-modal-cand');
      await opener.click(); const close = page.locator('#close-modal-btn');
      assert.equal(await page.evaluate(() => document.activeElement.id),'close-modal-btn');
      assert.equal(await page.locator('[role=dialog]').getAttribute('aria-modal'),'true');
      await page.keyboard.press('Shift+Tab');
      const lastTag = await page.evaluate(() => document.activeElement.tagName); assert.equal(lastTag,'A');
      await page.keyboard.press('Tab'); assert.equal(await page.evaluate(() => document.activeElement.id),'close-modal-btn');
      const compare = page.locator('.modal-panel [data-compare-toggle]'); await compare.focus(); await page.keyboard.press('Space'); assert.equal(await compare.getAttribute('aria-pressed'),'true');
      assert.equal(await page.evaluate(() => document.activeElement.dataset.compareToggle),id);
      await page.keyboard.press('Escape'); assert.equal(await page.locator('[role=dialog]').count(),0);
      assert.equal(await page.evaluate(() => document.activeElement.dataset.modalCand),id);
      assert.equal(await page.evaluate(() => document.body.style.overflow),'');
      assert.equal(await page.locator('body > [inert]').count(),0);
    }, page);
    await check('Share waits for clipboard and supports manual fallback', async () => {
      await boot(page);
      await page.evaluate(() => {
        Object.defineProperty(navigator,'share',{configurable:true,value:undefined});
        Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText: text => new Promise(resolve => { window.__shareText = text; window.__resolveClipboard = resolve; })}});
      });
      await page.locator('#share-link-btn').click();
      await page.waitForFunction(() => window.__shareText);
      assert.equal(await page.locator('#app-toast').count(),0,'Success must wait for the clipboard promise');
      assert.equal(await page.evaluate(() => window.__shareText),page.url());
      await page.evaluate(() => window.__resolveClipboard()); await page.waitForFunction(() => document.getElementById('app-toast')?.textContent.includes('copied'));
      await page.evaluate(() => {
        document.getElementById('app-toast')?.remove();
        navigator.clipboard.writeText = async () => { throw new Error('clipboard denied'); };
        document.execCommand = () => false;
        window.prompt = (message,url) => { window.__manualShare = {message,url}; return null; };
      });
      await page.locator('#share-link-btn').click(); await page.waitForFunction(() => window.__manualShare);
      assert.equal((await page.evaluate(() => window.__manualShare)).url,page.url());
      assert.equal(await page.locator('#app-toast').count(),0,'Manual fallback must not claim copied');
    }, page);
    await check('Sharing includes a search typed immediately before click', async () => {
      await boot(page);
      await page.evaluate(() => {
        Object.defineProperty(navigator,'share',{configurable:true,value:undefined});
        Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText: async text => { window.__immediateShare = text; }}});
        const input = document.getElementById('global-search-input'); input.value = 'housing'; input.dispatchEvent(new Event('input',{bubbles:true})); document.getElementById('share-link-btn').click();
      });
      await page.waitForFunction(() => window.__immediateShare);
      assert.equal(new URL(await page.evaluate(() => window.__immediateShare)).searchParams.get('q'),'housing');
    }, page);
    if (viewport.width < 600) await check('Native share cancellation does not trigger clipboard fallback', async () => {
      await boot(page);
      assert.equal(await page.evaluate(() => matchMedia('(pointer: coarse)').matches), true);
      await page.evaluate(() => {
        window.__nativeShares = 0; window.__shareFallbacks = 0;
        Object.defineProperty(navigator, 'share', { configurable: true, value: async () => { window.__nativeShares++; throw new DOMException('User cancelled', 'AbortError'); } });
        Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { window.__shareFallbacks++; } } });
        window.prompt = () => { window.__shareFallbacks++; return null; };
      });
      await page.locator('#share-link-btn').click();
      await page.waitForFunction(() => window.__nativeShares === 1);
      assert.equal(await page.evaluate(() => window.__shareFallbacks), 0);
      assert.equal(await page.locator('#app-toast').count(), 0);
    }, page);
    await check('Reduced motion and print controls', async () => {
      await boot(page); assert.equal(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches),true);
      const ids = await page.locator('.candidate-card [data-compare-toggle]').evaluateAll(es => es.slice(0,2).map(e => e.dataset.compareToggle));
      for (const id of ids) await page.locator(`.candidate-card [data-compare-toggle="${id}"]`).click();
      await tab(page,'compare');
      await page.evaluate(() => { window.__printCalls = 0; window.print = () => { window.__printCalls++; }; });
      await page.locator('[data-print]').click(); assert.equal(await page.evaluate(() => window.__printCalls),1);
      if (await page.locator('#print-guide-btn').isVisible()) { await page.locator('#print-guide-btn').click(); assert.equal(await page.evaluate(() => window.__printCalls),2); }
      await page.emulateMedia({media:'print'});
      assert.equal(await page.locator('.comparison-table').isVisible(),true);
      const overflow = await page.locator('.table-scroll').evaluate(el => getComputedStyle(el).overflowX);
      assert.ok(['visible','clip'].includes(overflow), `Print comparison must not be clipped by a scroll container: ${overflow}`);
      assert.equal(await page.locator('#share-link-btn').isVisible(),false);
      await page.screenshot({ path:path.join(OUT,`${engine}-${viewport.name}-print.png`),fullPage:false });
      await page.emulateMedia({media:'screen'});
    }, page);
    await check('No unhandled browser errors', async () => assert.deepEqual(errors,[]),page);
  } finally { await context.close(); }
  contextLabel = `${engine}-${viewport.name}-storage`;
  const denied = await browser.newContext({ viewport, reducedMotion:'reduce' });
  await denied.addInitScript(() => { Object.defineProperty(window,'localStorage',{configurable:true,get(){throw new DOMException('Storage denied','SecurityError');}}); });
  const deniedPage = await denied.newPage(), deniedErrors = []; deniedPage.on('pageerror',e=>deniedErrors.push(e.message)); watchResourceErrors(deniedPage, deniedErrors);
  try { await check('Denied local storage preserves lookup and theme controls',async()=>{
    await boot(deniedPage); const before=await deniedPage.locator('html').getAttribute('data-theme'); await deniedPage.locator('#theme-toggle-btn').click();
    assert.notEqual(await deniedPage.locator('html').getAttribute('data-theme'),before);
    await lookup(deniedPage,'62999'); assert.equal((await readState(deniedPage)).locationResult.matchedZip,'62999'); assert.deepEqual(deniedErrors,[]);
  },deniedPage); } finally { await denied.close(); }
}
async function layoutChecks(browser,engine,viewport) {
  contextLabel = `${engine}-${viewport.name}-layout`;
  const context = await browser.newContext({viewport,hasTouch:viewport.width<600,reducedMotion:'reduce',colorScheme:'light'}), page = await context.newPage(), errors=[];
  page.setDefaultTimeout(10000); page.on('pageerror',e=>errors.push(e.message)); watchResourceErrors(page, errors);
  try {
    await boot(page);
    for (const name of ['ballot','towns','issues','pacs','compare','guide']) await check(`${name}: no horizontal overflow and usable controls`,async()=>{
      await tab(page,name); await noOverflow(page); await touchTargets(page);
      if (name==='ballot') await page.screenshot({path:path.join(OUT,`${engine}-${viewport.name}-races.png`),fullPage:false,animations:'disabled'});
    },page);
    await check('Four-column comparison scrolls inside page',async()=>{
      await tab(page,'ballot'); const ids=await page.locator('.candidate-card [data-compare-toggle]').evaluateAll(es=>es.slice(0,4).map(e=>e.dataset.compareToggle));
      for(const id of ids) await page.locator(`.candidate-card [data-compare-toggle="${id}"]`).click();
      await tab(page,'compare'); await noOverflow(page); await touchTargets(page); assert.equal(await page.locator('.comparison-table thead th').count(),5);
      if(viewport.width<900) assert.ok(await page.locator('.table-scroll').evaluate(el=>el.scrollWidth>el.clientWidth));
      await page.screenshot({path:path.join(OUT,`${engine}-${viewport.name}-compare.png`),fullPage:false,animations:'disabled'});
    },page);
    await check('Modal fits viewport and close target remains usable',async()=>{
      await tab(page,'ballot'); await page.locator('.candidate-card [data-modal-cand]').first().click(); await noOverflow(page); await touchTargets(page);
      const rect=await page.locator('.modal-panel').boundingBox(); assert.ok(rect.x>=-1 && rect.x+rect.width<=viewport.width+1);
      assert.equal(await page.locator('#close-modal-btn').isVisible(),true);
      await page.screenshot({path:path.join(OUT,`${engine}-${viewport.name}-modal.png`),fullPage:false,animations:'disabled'}); await page.keyboard.press('Escape');
    },page);
    await check('Dark theme keeps layout usable',async()=>{await page.locator('#theme-toggle-btn').click(); await noOverflow(page); assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');},page);
    await check('No unhandled browser errors',async()=>assert.deepEqual(errors,[]),page);
  } finally { await context.close(); }
}
async function runSuite() {
  fs.mkdirSync(OUT,{recursive:true});
  await check('All 1,575 Illinois ZIPs and ZIP+4 variants resolve without district guesses',zipDirectoryChecks);
  for(const engine of (process.argv.includes('--data-only') ? [] : ENGINES)) {
    contextLabel=engine; let browser;
    try { browser=await launch(engine); }
    catch(error) { await check('Browser engine starts',async()=>{throw error;}); continue; }
    try {
      for(const viewport of VIEWPORTS) {
        try {
          if(viewport.name==='desktop'||viewport.name==='mobile-390') await functionalChecks(browser,engine,viewport);
          await layoutChecks(browser,engine,viewport);
        } catch (error) { await check('Context setup or cleanup', async () => { throw error; }); }
      }
    } finally { await browser.close(); }
  }
  const failed=results.filter(result=>result.status==='failed');
  const report={generatedAt:new Date().toISOString(),baseUrl:BASE_URL,engines:ENGINES,viewports:VIEWPORTS,limitations:'Browser engines and CSS viewport/touch emulation on this host; not physical Android, iOS, Windows or macOS device certification.',passed:results.length-failed.length,failed:failed.length,results};
  fs.writeFileSync(path.join(OUT,'report.json'),JSON.stringify(report,null,2));
  console.log(`\n${report.passed} passed; ${report.failed} failed. Report: ${path.join(OUT,'report.json')}`);
  if(failed.length || !results.length) process.exitCode=1;
}
async function installBrowsers() {
  const directories = [ROOT, ...(process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean)];
  const modulePath = require.resolve('playwright', { paths: directories });
  const result = require('node:child_process').spawnSync(process.execPath, ['--use-system-ca', path.join(path.dirname(modulePath),'cli.js'), 'install', ...(process.platform === 'win32' ? ['firefox', 'webkit'] : ['chromium', 'firefox', 'webkit'])], { stdio:'inherit', env:process.env });
  if (result.error) throw result.error;
  process.exitCode = result.status || 0;
}
(INSTALL ? installBrowsers() : CAPTURE ? captureBaseline() : runSuite()).catch(error=>{console.error(error.stack||error);process.exitCode=1;});
