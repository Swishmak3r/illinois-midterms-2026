// Small presentation enhancements; core research behavior lives in app.js.
(function () {
  'use strict';
  function init() {
    const toggle = document.getElementById('filter-toggle');
    const panel = document.getElementById('filter-panel');
    toggle?.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
    function refreshView() {
      const view = document.body.dataset.activeView;
      const input = document.getElementById('global-search-input');
      const label = document.getElementById('global-search-label');
      if (input) input.placeholder = view === 'towns' ? 'Search communities or counties…' : 'Search candidates, issues, or PACs…';
      if (label) label.textContent = view === 'towns' ? 'Search communities or counties' : 'Search candidates, issues or PACs';
      const count = ['level-select-control','party-select-control','pac-select-control','region-select-control','racetype-select-control']
        .reduce((n,id) => n + (document.getElementById(id)?.value !== 'all' ? 1 : 0),0);
      const badge = document.getElementById('filter-active-count');
      if (badge) { badge.textContent = String(count); badge.hidden = !count; }
      document.querySelectorAll('.header-links [data-tab-btn]').forEach((button) => button.removeAttribute('aria-current'));
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = document.documentElement.dataset.theme === 'dark' ? '#12231f' : '#F5F3EC';
    }
    new MutationObserver(refreshView).observe(document.body, { attributes: true, attributeFilter: ['data-active-view'] });
    new MutationObserver(refreshView).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    document.querySelectorAll('.filter-panel select').forEach((el) => el.addEventListener('change',refreshView));
    document.getElementById('tab-content-container')?.addEventListener('click', () => queueMicrotask(refreshView));
    const dateLabel = document.getElementById('election-status');
    if (dateLabel) {
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year:'numeric',month:'2-digit',day:'2-digit' }).formatToParts(new Date());
      const get = (type) => parts.find((part) => part.type === type).value;
      const localDate = get('year') + '-' + get('month') + '-' + get('day');
      dateLabel.textContent = localDate === '2026-11-03' ? 'ELECTION DAY IS TODAY' : localDate > '2026-11-03' ? '2026 GENERAL ELECTION' : 'GENERAL ELECTION · 2026';
    }
    refreshView();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
