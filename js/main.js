/* ============ くるみちゃん — behaviour ============ */
(function () {
  'use strict';

  /* ---------- contract address — the ONE place to change it ---------- */
  var CA = '7ZvpqGqTneEuAnYXEbVT9chveSktFtN7XcLsiMzYpump';

  var CA_URLS = {
    pump:    'https://pump.fun/coin/',
    agency:  'https://www.agencypad.fun/coin/',
    solscan: 'https://solscan.io/token/',
    dex:     'https://dexscreener.com/solana/'
  };

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function shortCA(a) {
    return a.length > 16 ? a.slice(0, 5) + '…' + a.slice(-5) : a;
  }

  /* ---------- wire the contract address everywhere ---------- */
  $$('[data-copy]').forEach(function (el) { el.dataset.copy = CA; });
  $$('[data-ca]').forEach(function (el) { el.textContent = CA; });
  $$('[data-ca-short]').forEach(function (el) { el.textContent = shortCA(CA); });
  $$('[data-ca-url]').forEach(function (el) {
    var base = CA_URLS[el.dataset.caUrl];
    if (base) el.href = base + CA;
  });

  /* ---------- toast ---------- */
  var toastEl = $('#toast'), toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('on'); }, 1800);
  }

  /* ---------- splash: opens itself, no button to press ---------- */
  (function splash() {
    var boot = $('#boot'), tag = $('#bootTag'), bar = $('.boot-bar i'),
        HOLD = 2400,
        lines = ['warming the bread…', 'counting the shelf…', 'phone face down'],
        timers = [], done = false, i;

    function enter() {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      boot.classList.add('gone');
      document.body.classList.remove('booting');
      setTimeout(function () { boot.hidden = true; }, 700);
      document.removeEventListener('keydown', enter);
      boot.removeEventListener('click', enter);
      window.removeEventListener('wheel', enter);
      window.removeEventListener('touchstart', enter);
    }

    if (/[?&]nb=1/.test(location.search)) {
      boot.hidden = true;
      document.body.classList.remove('booting');
      return;
    }

    tag.textContent = lines[0];
    for (i = 1; i < lines.length; i++) {
      (function (n) {
        timers.push(setTimeout(function () {
          tag.classList.add('fade');
          timers.push(setTimeout(function () {
            tag.textContent = lines[n];
            tag.classList.remove('fade');
          }, 220));
        }, n * (HOLD / lines.length)));
      })(i);
    }

    requestAnimationFrame(function () {
      bar.style.transition = 'width ' + (HOLD / 1000) + 's linear';
      bar.style.width = '100%';
    });
    timers.push(setTimeout(enter, HOLD));

    document.addEventListener('keydown', enter);
    boot.addEventListener('click', enter);
    window.addEventListener('wheel', enter, { passive: true });
    window.addEventListener('touchstart', enter, { passive: true });
  })();

  /* ---------- copy contract ---------- */
  $$('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      function done() {
        btn.classList.add('ok');
        toast('contract copied');
        setTimeout(function () { btn.classList.remove('ok'); }, 1400);
      }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (e) { toast('copy failed — select it by hand'); }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else { fallback(); }
    });
  });

  /* ---------- drifting strip ---------- */
  (function strip() {
    var track = $('#strip'), srcs = window.KURUMI_STRIP || [];
    if (!track || !srcs.length) return;
    var one = srcs.map(function (s) {
      return '<img src="' + s + '" alt="" loading="lazy" decoding="async">';
    }).join('');
    track.innerHTML = one + one;   // two copies so the loop is seamless
  })();

  /* ---------- the bunny index ---------- */
  (function bunnyIndex() {
    var grid = $('#idxGrid'), items = window.KURUMI_INDEX || [];
    if (!grid) return;
    grid.innerHTML = items.map(function (x) {
      return '<article>' +
        '<div class="top"><span class="code">' + esc(x.code) + '</span>' +
        '<h3>' + esc(x.name) + '</h3></div>' +
        '<span class="read ' + esc(x.mood) + '">' + esc(x.read) + '</span>' +
        '<p>' + esc(x.note) + '</p></article>';
    }).join('');
  })();

  /* ---------- ask the melon pan ---------- */
  (function oracle() {
    var btn = $('#orBtn'), say = $('#orSay'), lines = window.KURUMI_ORACLE || [], prev = -1;
    if (!btn || !lines.length) return;
    btn.addEventListener('click', function () {
      var i = prev;
      while (i === prev && lines.length > 1) i = Math.floor(Math.random() * lines.length);
      prev = i;
      say.classList.add('fade');
      setTimeout(function () {
        say.textContent = lines[i];
        say.classList.remove('fade');
      }, 200);
    });
  })();

  /* ---------- the notebook ---------- */
  (function notes() {
    var list = $('#noteList'), items = window.KURUMI_NOTES || [];
    if (!list) return;
    list.innerHTML = items.map(function (n) {
      return '<li><b>' + esc(n.t) + '</b><span>' + esc(n.s) + '</span></li>';
    }).join('');
  })();

  /* ---------- the walls ---------- */
  var videos = window.KURUMI_VIDEO || [];
  var images = window.KURUMI_IMAGE || [];

  (function counts() {
    var v = $('#vCount'), g = $('#gCount');
    if (v) v.textContent = videos.length + ' clips';
    if (g) g.textContent = images.length + ' pictures';
  })();

  (function videoWall() {
    var wall = $('#videoWall');
    if (!wall || !videos.length) return;

    wall.innerHTML = videos.map(function (v, i) {
      return '<figure data-i="' + i + '" tabindex="0" role="button" aria-label="Play: ' + esc(v.title) + '">' +
        '<div class="media">' +
          '<img src="' + v.poster + '" alt="" loading="lazy" decoding="async">' +
          '<video src="' + v.src + '" poster="' + v.poster + '" muted loop playsinline preload="none"></video>' +
          '<span class="tag">' + esc(v.tag) + '</span><span class="play" aria-hidden="true"></span>' +
        '</div>' +
        '<figcaption><b>' + esc(v.title) + '</b><span>' + esc(v.note) + '</span></figcaption>' +
        '</figure>';
    }).join('');

    /* hover previews the clip muted; a click opens it big */
    $$('figure', wall).forEach(function (fig) {
      var vid = $('video', fig);
      fig.addEventListener('mouseenter', function () {
        fig.classList.add('playing');
        vid.play().catch(function () { fig.classList.remove('playing'); });
      });
      fig.addEventListener('mouseleave', function () {
        fig.classList.remove('playing');
        vid.pause();
      });
    });

    bindOpen(wall, videos, 'video');
  })();

  (function imageWall() {
    var wall = $('#imageWall');
    if (!wall || !images.length) return;

    wall.innerHTML = images.map(function (m, i) {
      return '<figure data-i="' + i + '" tabindex="0" role="button" aria-label="Open: ' + esc(m.title) + '">' +
        '<div class="media"><img src="' + m.src + '" alt="' + esc(m.title) + '" loading="lazy" decoding="async"></div>' +
        '<figcaption><b>' + esc(m.title) + '</b><span>' + esc(m.note) + '</span></figcaption>' +
        '</figure>';
    }).join('');

    bindOpen(wall, images, 'image');
  })();

  /* ---------- lightbox: pictures and clips, both arrow-navigable ---------- */
  var lb      = $('#lb'),
      stage   = $('#lbStage'),
      capT    = $('#lbTitle'),
      capN    = $('#lbNote'),
      countEl = $('#lbCount'),
      group   = [],
      kind    = 'image',
      idx     = 0,
      last    = null;

  function bindOpen(wall, items, itemKind) {
    function open(i, from) {
      last = from || null;
      group = items;
      kind = itemKind;
      show(i);
      lb.hidden = false;
      document.body.classList.add('lb-open');
      $('#lbX').focus();
    }
    wall.addEventListener('click', function (e) {
      var fig = e.target.closest('figure');
      if (!fig) return;
      open(+fig.dataset.i, fig);
    });
    wall.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var fig = e.target.closest('figure');
      if (!fig) return;
      e.preventDefault();
      open(+fig.dataset.i, fig);
    });
  }

  function show(i) {
    idx = (i + group.length) % group.length;
    var m = group[idx];
    stage.innerHTML = kind === 'video'
      ? '<video src="' + m.src + '" poster="' + m.poster + '" controls loop playsinline autoplay></video>'
      : '<img src="' + m.src + '" alt="' + esc(m.title) + '">';
    capT.textContent = m.title;
    capN.textContent = m.note;
    countEl.textContent = (idx + 1) + ' / ' + group.length;

    var vid = $('video', stage);
    if (vid) {
      vid.play().catch(function () {        // sound-on autoplay is often blocked
        vid.muted = true;
        vid.play().catch(function () {});
      });
    }
  }

  function close() {
    var vid = $('video', stage);
    if (vid) vid.pause();
    stage.innerHTML = '';
    lb.hidden = true;
    document.body.classList.remove('lb-open');
    if (last) last.focus();
  }

  $('#lbX').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', function () { show(idx - 1); });
  $('#lbNext').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target === stage || e.target.classList.contains('lb-fig')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });
})();
