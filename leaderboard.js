/* ==========================================================
 *  Leaderboard Module  –  standalone   (leaderboard.js)
 *  Author: Your Name
 *  ==========================================================
 *  API:
 *    Leaderboard.init(containerSelector [, options])
 *    Leaderboard.addScore({ name, score, total, theme, combos })
 *    Leaderboard.refresh()
 *
 *  Data is stored in browser localStorage under key "sq_leaderboard".
 *  ========================================================== */

(function (window) {
  /* ---------- configuration ---------- */
  const STORAGE_KEY = 'sq_leaderboard';
  const DEFAULT_MAX = 10;           // keep Top-10

  /* ---------- public object ---------- */
  const Leaderboard = {
    init,
    addScore,
    refresh
  };

  /* ---------- private state ---------- */
  let $container;           // DOM node where list lives
  let maxEntries = DEFAULT_MAX;

  /* ---------- implementation ---------- */

  /*  Leaderboard.init('#selector', {max: 15})  */
  function init(selector, opts = {}) {
    $container = document.querySelector(selector);
    if (!$container) {
      console.error(`Leaderboard: container "${selector}" not found`);
      return;
    }

    maxEntries = opts.max || DEFAULT_MAX;

    // inject basic DOM if empty
    if ($container.innerHTML.trim() === '') {
      $container.innerHTML = `
        <h2>🏆 Leaderboard</h2>
        <div class="lb-list"></div>
      `;
    }
    refresh();
  }

  /*  Leaderboard.addScore({ name, score, total, theme, combos })  */
  function addScore(entry) {
    if (!entry || !entry.name) return;

    const list = getStoredList();
    list.push({
      ...entry,
      percentage: Math.round((entry.score / entry.total) * 100),
      date: new Date().toISOString()
    });

    // sort: score desc, percentage desc
    list.sort((a, b) =>
      b.score !== a.score ? b.score - a.score : b.percentage - a.percentage
    );

    // trim
    const trimmed = list.slice(0, maxEntries);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));

    refresh();
  }

  /* redraw list */
  function refresh() {
    if (!$container) return;

    const listDiv = $container.querySelector('.lb-list');
    const data = getStoredList();

    if (!data.length) {
      listDiv.innerHTML = '<p class="empty">No scores yet. Be the first!</p>';
      return;
    }

    listDiv.innerHTML = data
      .map((e, i) => renderEntry(e, i))
      .join('');
  }

  /* helpers */
  function renderEntry(e, idx) {
    const medal = idx === 0 ? '🥇'
               : idx === 1 ? '🥈'
               : idx === 2 ? '🥉'
               : `${idx + 1}.`;

    return `
      <div class="lb-entry" title="${tooltip(e)}">
        <span class="lb-rank">${medal}</span>
        <span class="lb-name">${escapeHTML(e.name)}</span>
        <span class="lb-score">${e.score}/${e.total}</span>
      </div>`;
  }

  function tooltip(e) {
    return `${e.theme} quiz · ${e.percentage}% · ${
      e.combos ? e.combos + ' combos' : 'no combos'
    }`;
  }

  function getStoredList() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, m =>
      ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' }[m])
    );
  }

  /* expose globally */
  window.Leaderboard = Leaderboard;
})(window);