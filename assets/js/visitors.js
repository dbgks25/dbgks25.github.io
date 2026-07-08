// Visitor counter — counts once per browser session (a page refresh does NOT
// re-count). Uses counterapi.dev; the count from an increment call is cached
// in localStorage so refreshes just display it without hitting the network.
(function () {
  var el = document.getElementById('visitor-counter');
  var out = document.getElementById('visitor-count');
  if (!el || !out) return;

  var NS = 'dbgks25-io';        // counter namespace
  var KEY = 'site-visitors';    // counter name
  var CACHE = 'vc-count';       // last known total
  var SESS = 'vc-counted';      // "already counted this session" flag

  function show(n) {
    if (n == null || isNaN(n)) return;
    out.textContent = Number(n).toLocaleString();
    el.hidden = false;
  }

  // Show the last known number immediately (covers refreshes and offline).
  var cached = null;
  try { cached = localStorage.getItem(CACHE); } catch (e) {}
  if (cached != null) show(cached);

  // Already counted in this browser session → a refresh: do not increment.
  var counted = false;
  try { counted = !!sessionStorage.getItem(SESS); } catch (e) {}
  if (counted) return;

  // New session → increment once and cache the authoritative count.
  fetch('https://api.counterapi.dev/v1/' + NS + '/' + KEY + '/up')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d && typeof d.count === 'number') {
        try { sessionStorage.setItem(SESS, '1'); } catch (e) {}
        try { localStorage.setItem(CACHE, String(d.count)); } catch (e) {}
        show(d.count);
      }
    })
    .catch(function () { /* keep cached value / stay hidden on failure */ });
})();
