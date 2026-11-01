'use strict';
// Browser regressions for judicial research and its separation from campaign scores.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(root, '.cache', 'browsers');
const playwright = require('playwright');
const sourceScope = { window: {} };
for (const file of ['data-local.js','data-judicial.js']) vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'), sourceScope);
const source = JSON.parse(JSON.stringify(sourceScope.window.IL_JUDICIAL_RESEARCH));
const races = sourceScope.window.IL_LOCAL_RACES;
const base = new URL(process.env.TEST_BASE_URL || 'http://127.0.0.1:4174/'); base.search = ''; base.hash = '';
const arg = (name, fallback) => { const index = process.argv.indexOf(name); return index < 0 ? fallback : process.argv[index + 1]; };
const engines = arg('--engines','chromium,firefox,webkit').split(',');
const widths = arg('--widths','1440,390,320').split(',').map(Number);
const out = path.join(root,'output','playwright','judicial'); fs.mkdirSync(out,{recursive:true});
const results = [];
const screenshots = [];
const IDs = {
  will: 'amy-m-bertani-tomczak',
  otherWill: 'daniel-l-kennedy',
  appellate: 'sbe-5th-appellate-retain-barberis-jr-john-b-barberis-jr',
  insufficient: 'sbe-2nd-circuit-retain-hartrich-matthew-j-hartrich',
  cook: 'sbe-cook-circuit-retain-murphy-lorraine-mary-murphy',
  dempsey: 'sbe-cook-circuit-retain-dempsey-marie-aileen-dempsey',
  stacey: 'sbe-cook-circuit-retain-stacey-chris-stacey',
  quinn: 'sbe-cook-circuit-retain-quinn-jill-rose-quinn',
  grischow: 'sbe-7th-circuit-retain-grischow-raylene-grischow',
  knecht: 'sbe-4th-appellate-retain-knecht-james-a-knecht',
};
async function main() {
  for (const engine of engines) {
    assert.ok(playwright[engine], engine);
    const browser = await playwright[engine].launch({ headless:true, ...(engine === 'chromium' && process.platform === 'win32' ? {channel:'msedge'} : {}) });
    try {
      for (const width of widths) {
        const page = await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
        const errors = []; page.on('pageerror', e => errors.push(e.message));
        const goto = async query => { await page.goto(base.href + query,{waitUntil:'load'}); await page.waitForFunction(() => window.IL_APP && window.IL_JUDICIAL_RESEARCH); };
        const run = async (name, fn) => {
          try { await fn(); results.push({engine,width,name,status:'passed'}); console.log(`PASS ${engine} ${width}: ${name}`); }
          catch (error) {
            const screenshot = `${engine}-${width}-${name.replace(/[^a-z0-9]+/gi,'-').slice(0,90)}.png`;
            await page.screenshot({path:path.join(out,screenshot),fullPage:false}).catch(() => {});
            results.push({engine,width,name,status:'failed',error:error.stack,screenshot}); console.error(`FAIL ${engine} ${width}: ${name}: ${error.message}`);
          }
        };
        const openProfile = async id => {
          const race = races.find(race => race.candidates.some(candidate => candidate.id === id));
          assert.ok(race, id);
          await goto('?district=' + encodeURIComponent(race.districtCode));
          await page.locator(`[data-modal-cand="${id}"]`).first().click();
          await page.locator('.modal-panel .judicial-record').waitFor();
        };
        const noOverflow = async () => {
          const boxes = await page.evaluate(() => {
            const list = [{name:'document',client:innerWidth,scroll:document.documentElement.scrollWidth}];
            for (const element of document.querySelectorAll('.modal-panel,.judicial-record,.judicial-ruling,.judicial-assessment')) {
              if (element.getBoundingClientRect().width) list.push({name:element.className,client:element.clientWidth,scroll:element.scrollWidth});
            }
            return list.filter(item => item.scroll > item.client + 1);
          });
          assert.deepEqual(boxes, [], 'Judicial content must not overflow a phone viewport or modal');
        };
        try {
          await goto('?zip=60490');
          await run('Built research module matches current source and retention cards have no campaign score', async () => {
            assert.deepEqual(await page.evaluate(() => IL_JUDICIAL_RESEARCH), source, 'Rebuild after any judicial-data change, even when coverage counts are unchanged');
            const cards = page.locator('.candidate-retention');
            assert.ok(await cards.count() >= 4);
            assert.equal(await cards.locator('.alignment-summary,.alignment-meter').count(),0);
            assert.equal(await cards.locator('.judicial-summary').count(),await cards.count());
            await page.locator('#toggle-compact-issues-btn').click();
            assert.equal(await cards.locator('.issue-details-box').count(),0);
          });
          await openProfile(IDs.will);
          await run('Will profile distinguishes trial ruling appeal history dated party and advisory poll', async () => {
            const panel = page.locator('.modal-panel');
            assert.equal(await panel.locator('.judicial-ruling').count(),source.profiles[IDs.will].rulings.length);
            const ruling = panel.locator('.judicial-ruling').first();
            const text = await ruling.innerText();
            assert.match(text,/Judge’s role/); assert.match(text,/What this judge decided/); assert.match(text,/Appeal and later treatment/);
            assert.match(text,/Trial judge|Trial ruling/i); assert.match(text,/affirm|revers|remand/i);
            const expectedUrl = source.profiles[IDs.will].rulings[0].evidence[0].url;
            assert.ok((await ruling.locator('a').evaluateAll(anchors => anchors.map(anchor => anchor.href))).includes(expectedUrl));
            assert.match(await panel.locator('.judicial-history').innerText(),/1996.*Republican/s);
            assert.match(await panel.locator('.judicial-history').innerText(),/does not establish current political beliefs/);
            assert.match(await panel.locator('.judicial-assessment').first().innerText(),/Attorney advisory poll/);
            assert.match(await panel.locator('.judicial-assessment').first().innerText(),/not an institutional endorsement/);
            assert.equal(await panel.locator('.alignment-summary').count(),0);
            assert.equal(await panel.getByRole('heading',{name:'Issue summaries',exact:true}).count(),0);
            await noOverflow();
            if (engine === 'chromium' && [1440,390].includes(width)) {
              await ruling.evaluate(element => {
                const panel = element.closest('.modal-panel');
                const header = panel.querySelector('.modal-heading');
                panel.scrollTop += element.getBoundingClientRect().top - panel.getBoundingClientRect().top - header.getBoundingClientRect().height - 12;
              });
              const file = path.resolve(root,'../../outputs',width === 1440 ? 'retention-desktop.png' : 'retention-phone.png');
              fs.mkdirSync(path.dirname(file),{recursive:true});
              await page.screenshot({path:file,fullPage:false});
              screenshots.push({engine,width,profile:IDs.will,path:file});
            }
          });
          await openProfile(IDs.appellate);
          await run('Appellate nonparticipation reason stays separate from negative attorney poll', async () => {
            const assessments = page.locator('.modal-panel .judicial-assessment');
            const committee = assessments.filter({has:page.locator('.judicial-assessment-kind',{hasText:'Committee evaluation'})});
            const poll = assessments.filter({has:page.locator('.judicial-assessment-kind',{hasText:'Attorney advisory poll'})});
            assert.equal(await committee.count(),1); assert.equal(await poll.count(),1);
            assert.equal((await committee.locator('.judicial-rating').innerText()).trim(),'No');
            assert.match(await committee.innerText(),/declined|nonparticipat/i);
            assert.match(await committee.innerText(),/could not|unable|not fully/i);
            assert.match(await poll.innerText(),/Not Recommended/); assert.match(await poll.innerText(),/55\.88%/); assert.match(await poll.innerText(),/36 respondents/);
            await noOverflow();
          });
          await openProfile(IDs.insufficient);
          await run('Insufficient poll responses are neutral and never displayed as zero or negative', async () => {
            const assessment = page.locator('.modal-panel .judicial-assessment').filter({has:page.locator('.judicial-assessment-kind',{hasText:'Attorney advisory poll'})});
            const text = await assessment.innerText();
            assert.match(text,/Insufficient responses/); assert.match(text,/not an unfavorable rating/);
            assert.doesNotMatch(text,/0\.00%|Not Recommended|0 respondents/);
            await noOverflow();
          });
          await openProfile(IDs.cook);
          await run('Cook assessments preserve differing organizations rather than a consensus score', async () => {
            const panel = page.locator('.modal-panel');
            const assessments = panel.locator('.judicial-assessment');
            assert.equal(await assessments.count(),3);
            assert.match(await assessments.nth(0).innerText(),/Illinois State Bar Association/);
            assert.equal((await assessments.nth(0).locator('.judicial-rating').innerText()).trim(),'No');
            assert.match(await assessments.nth(1).innerText(),/Chicago Bar Association/);
            assert.equal((await assessments.nth(1).locator('.judicial-rating').innerText()).trim(),'Qualified');
            assert.match(await assessments.nth(2).innerText(),/not one consensus rating/);
            assert.equal(await assessments.nth(2).locator('.judicial-member-ratings > div').count(),12,'ISBA shown separately, twelve other independent columns');
            await noOverflow();
          });
          await run('Dempsey and Stacey ballot and court aliases resolve to the same sourced identity', async () => {
            for (const id of [IDs.dempsey,IDs.stacey]) {
              const profile = source.profiles[id];
              assert.ok(profile.searchAliases.length > 0 && profile.identityNotes.length > 0);
              for (const name of [profile.name,...profile.searchAliases]) {
                await goto('?q=' + encodeURIComponent(name));
                const found = await page.locator('.candidate-card').evaluateAll(cards => cards.map(card => card.dataset.candId));
                assert.deepEqual(found,[id],name + ' must resolve to exactly one existing retention candidate');
                await page.locator(`[data-modal-cand="${id}"]`).first().click();
                const note = page.locator('.modal-panel .judicial-identity-notes');
                await note.waitFor();
                assert.equal((await page.locator('#candidate-profile-title').innerText()).trim(),profile.name);
                assert.match(await note.innerText(),id === IDs.dempsey ? /Marie.*Maire.*no official correction/s : /Chris Stacey.*Christ Stanley Stacey.*Christ Stacey/s);
                assert.ok((await note.locator('a').evaluateAll(anchors => anchors.map(anchor => anchor.href))).includes(profile.identityNotes[0].url));
                await noOverflow();
              }
            }
          });
          await openProfile(IDs.quinn);
          await run('Quinn 2023 public statement is dated attributed and separate from judicial holdings', async () => {
            const panel = page.locator('.modal-panel');
            const statements = panel.locator('.judicial-public-statements');
            assert.equal(await statements.count(),1);
            assert.match(await statements.innerText(),/2023-05-18/);
            assert.match(await statements.innerText(),/separate from court rulings and historical election-party records/);
            assert.match(await statements.innerText(),/not a particular holding, a 2026 endorsement/);
            assert.match(await statements.innerText(),/No inference from personal identity/);
            assert.equal((await statements.locator('blockquote').innerText()).trim(),source.profiles[IDs.quinn].publicStatements[0].text);
            assert.ok((await statements.locator('a').evaluateAll(anchors => anchors.map(anchor => anchor.href))).includes('https://lgbtqbar.org/bar-news/pride-interview/hon-jill-rose-quinn/'));
            assert.equal(await statements.locator('.judicial-ruling').count(),0);
            assert.equal(await panel.locator('.judicial-ruling').count(),source.profiles[IDs.quinn].rulings.length);
            assert.equal(await statements.evaluate(element => element.nextElementSibling?.tagName === 'H4' && element.nextElementSibling.textContent.startsWith('Selected rulings')),true);
            await noOverflow();
          });
          await openProfile(IDs.grischow);
          await run('Grischow Allen date explicitly identifies the trial TRO rather than the appellate decision', async () => {
            const ruling = page.locator('.modal-panel .judicial-ruling').filter({hasText:'Allen v. North Mac Community Unit School District No. 34'});
            assert.equal(await ruling.count(),1);
            if (!await ruling.evaluate(element => element.open)) await ruling.locator(':scope > summary').click();
            const dateNote = ruling.locator(':scope > .source-review-note').first();
            assert.match(await dateNote.innerText(),/2022-04-08.*Trial TRO date; appellate decision April 20, 2022/s);
            assert.match(await ruling.locator('.judicial-case-facts').innerText(),/Trial judge who issued the temporary restraining order; not an appellate-panel member/);
            assert.match(await ruling.locator('.judicial-case-facts').innerText(),/Grischow temporarily blocked Chicago Public Schools/);
            await noOverflow();
          });
          await openProfile(IDs.knecht);
          await run('Cadengo Trump comparison preserves precise later policy sources and no personal ideology inference', async () => {
            const ruling = page.locator('.modal-panel .judicial-ruling').filter({hasText:'People v. Cadengo'});
            assert.equal(await ruling.count(),1);
            if (!await ruling.evaluate(element => element.open)) await ruling.locator(':scope > summary').click();
            const comparisons = ruling.locator('.judicial-comparisons');
            await comparisons.locator(':scope > summary').click();
            const trump = comparisons.locator('dl > div').filter({has:page.locator('dt',{hasText:'Trump administration policy'})});
            assert.equal(await trump.count(),1);
            const text = await trump.innerText();
            assert.match(text,/Different legal question/);
            assert.match(text,/limited practical similarity/);
            assert.match(text,/August 2026 rule postdates the May 2025 ruling/);
            assert.match(text,/does not establish Knecht's motives or Trump support/);
            assert.match(text,/leaves state prohibitions intact/);
            const urls = await trump.locator('a').evaluateAll(anchors => anchors.map(anchor => anchor.href));
            assert.ok(urls.includes('https://www.govinfo.gov/content/pkg/FR-2026-08-20/html/2026-16981.htm'));
            assert.ok(urls.some(url => url.startsWith('https://ilcourtsaudio.blob.core.windows.net/') && url.includes('Cadengo')));
            assert.match(text,/Paragraphs 55-72/);
            assert.match(text,/91 FR 54057 and 54069-54070/);
            assert.equal(await page.locator('.modal-panel .alignment-summary,.modal-panel .alignment-meter').count(),0);
            await noOverflow();
          });
          await goto('?tab=compare&compare=' + [IDs.will,IDs.otherWill].join(','));
          await run('Retention-only comparison has judicial research and no congressional policy score', async () => {
            const table = page.locator('.comparison-table');
            assert.equal(await table.locator('.judicial-summary').count(),2);
            assert.equal(await table.locator('.alignment-summary').count(),0);
            const headings = await table.locator('tbody th').allTextContents();
            assert.ok(headings.includes('Judicial record'));
            assert.ok(!headings.includes('Trump policy alignment') && !headings.includes('PAC policy'));
            assert.ok(!headings.some(heading => /^(Federal|State|Local):/.test(heading)));
            assert.match(await page.locator('#tab-content-container').innerText(),/not opponents/);
            await noOverflow();
          });
          await goto('?tab=compare&compare=' + [IDs.will,'mike-bost'].join(','));
          await run('Mixed comparison preserves House score while excluding judicial ideology', async () => {
            const table = page.locator('.comparison-table');
            assert.equal(await table.locator('.judicial-summary').count(),1);
            assert.equal(await table.locator('.alignment-summary').count(),1);
            assert.equal(await page.evaluate(() => IL_APP.getAlignment('mike-bost').percent),100);
            assert.match(await table.innerText(),/No overall judicial score/);
            await noOverflow();
          });
          await goto('?tab=issues&tier=local&level=local');
          await run('Generic local campaign issue view excludes retention judges', async () => {
            const shown = await page.locator('.issue-position [data-modal-cand]').evaluateAll(elements => elements.map(element => element.dataset.modalCand));
            assert.ok(shown.length > 0);
            assert.ok(shown.every(id => !source.profiles[id]));
          });
          await goto('?district=IL-12');
          await run('House candidate card retains the existing sourced voting alignment', async () => {
            const card = page.locator('[data-cand-id="mike-bost"]');
            assert.equal(await card.locator('.alignment-summary').count(),1);
            assert.match(await card.locator('.alignment-summary').innerText(),/100%/);
            assert.equal(await card.locator('.judicial-summary').count(),0);
          });
          await run('No unhandled browser errors or page overflow', async () => { assert.deepEqual(errors,[]); await noOverflow(); });
        } finally { await page.close(); }
      }
    } finally { await browser.close(); }
  }
  const report = { checked:source.checked,sourceCoverage:source.coverage,url:base.href,passed:results.filter(result=>result.status==='passed').length,failed:results.filter(result=>result.status==='failed').length,screenshots,results };
  fs.mkdirSync(path.join(root,'output','audit'),{recursive:true});
  fs.writeFileSync(path.join(root,'output/audit/judicial-ui.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`${report.passed} passed; ${report.failed} failed.`);
  if (report.failed) process.exitCode=1;
}
main().catch(error=>{console.error(error);process.exitCode=1;});
