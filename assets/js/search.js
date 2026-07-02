// Client-side search over /search.json (papers + research projects)
(function () {
  const input = document.getElementById('site-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let data = [];
  let loaded = false;

  async function load() {
    if (loaded) return;
    loaded = true;
    try {
      const res = await fetch(input.dataset.searchUrl || '/search.json');
      data = await res.json();
    } catch (e) {
      data = [];
    }
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function query(q) {
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return data.filter(function (it) {
      const hay = (it.title + ' ' + it.authors + ' ' + it.venue + ' ' +
        it.tags + ' ' + it.summary + ' ' + it.content).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
  }

  function render(items, q) {
    if (!q.trim()) { results.hidden = true; results.innerHTML = ''; return; }
    results.hidden = false;
    if (!items.length) {
      results.innerHTML = '<li class="search-empty">검색 결과가 없습니다</li>';
      return;
    }
    results.innerHTML = items.slice(0, 8).map(function (it) {
      const meta = [it.year, it.venue].filter(Boolean).join(' · ');
      return '<li class="search-result" role="option">' +
        '<a href="' + it.url + '">' +
        '<span class="sr-type sr-type-' + (it.type === '논문' ? 'paper' : 'project') + '">' + it.type + '</span>' +
        '<span class="sr-title">' + escapeHtml(it.title) + '</span>' +
        (meta ? '<span class="sr-meta">' + escapeHtml(meta) + '</span>' : '') +
        '</a></li>';
    }).join('');
  }

  const run = (typeof debounce === 'function' ? debounce : function (f) { return f; })(function () {
    render(query(input.value), input.value);
  }, 150);

  input.addEventListener('focus', load);
  input.addEventListener('input', run);

  // Enter → open the first result
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const first = results.querySelector('.search-result a');
      if (first) { e.preventDefault(); window.location.href = first.getAttribute('href'); }
    } else if (e.key === 'Escape') {
      results.hidden = true;
    }
  });

  // Close results when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#search-box')) results.hidden = true;
  });
})();
