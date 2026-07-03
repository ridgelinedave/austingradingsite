/* ============================================================
   AGLM script.js  (vanilla, dependency-free)
   1. Sticky-nav shadow   2. Mobile nav toggle
   3. Smooth scroll       4. IntersectionObserver fade-ins
   5. Web3Forms submit + success state (no reload)
   6. Footer year         7. GA4 conversion events
   ============================================================ */
(function () {
  'use strict';

  /* ---- GA4 helper: guarded so a blocked/absent tag can never throw ---- */
  // gtag lives in the inline <head> snippet (CSP-hashed). Events go through this
  // same-origin file, covered by script-src 'self' -> no CSP change, no new hash.
  function gaEvent(name, params) {
    if (typeof window.gtag === 'function') { window.gtag('event', name, params || {}); }
  }
  // page slug for event context: '/', '/index.html' -> 'home'; else the filename sans .html
  var pageSlug = (function () {
    var p = (location.pathname || '').split('/').pop().replace(/\.html$/, '');
    return (!p || p === 'index') ? 'home' : p;
  })();

  /* ---- 1. Sticky-nav .scrolled shadow ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 2. Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    var closeNav = function () {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close drawer after tapping a link
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        closeNav();
        toggle.focus();
      }
    });
    // close when resizing up to the desktop layout so state never gets stuck open
    var mq = window.matchMedia('(min-width:861px)');
    var onMQ = function (e) { if (e.matches) closeNav(); };
    if (mq.addEventListener) { mq.addEventListener('change', onMQ); }
    else if (mq.addListener) { mq.addListener(onMQ); }
  }

  /* ---- 3. Smooth scroll for in-page anchors ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---- 4. IntersectionObserver fade-ins ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- 5. Contact form: Web3Forms submit, success state w/o reload ---- */
  // Target the visible form by its unique id.
  var form = document.getElementById('quote-form');
  if (form) {
    var success = document.querySelector('.form-success');
    var errBox = form.querySelector('.form-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errBox) errBox.classList.remove('show');

      var data = new FormData(form);
      // honeypot: if the bot-field is filled, treat as spam — no send, no lead event.
      var hpFilled = (data.get('bot-field') || '').toString().trim().length > 0;
      if (hpFilled) {
        form.style.display = 'none';
        if (success) success.classList.add('show');
        return;
      }
      // Web3Forms accepts a JSON body carrying access_key + all fields.
      var payload = {};
      data.forEach(function (v, k) { payload[k] = v; });

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Network response was not ok');
          form.style.display = 'none';
          if (success) success.classList.add('show');
          if (success) success.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // conversion: real success only (validation already passed; skip honeypot hits)
          if (!hpFilled) gaEvent('generate_lead', { form: 'contact' });
        })
        .catch(function () {
          if (errBox) {
            errBox.classList.add('show');
          } else {
            // last-ditch fallback so a lead is never lost
            window.location.href =
              'mailto:matthew@aglmnc.com?subject=Quote%20Request%20(site%20fallback)';
          }
        });
    });
  }

  /* ---- 6. Footer year ---- */
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- 7. GA4 conversion events ---- */
  // One delegated listener catches every tel:/mailto: link (static or injected).
  // We never preventDefault — the link must still dial/open mail.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) {
      gaEvent('phone_click', { location: pageSlug });
    } else if (href.indexOf('mailto:') === 0) {
      gaEvent('email_click', { location: pageSlug });
    }
  });
  // No-JS path lands on thank-you.html via the Netlify POST redirect; count the lead there
  // (mutually exclusive with the AJAX success branch, which stays on the contact page).
  if (pageSlug === 'thank-you') gaEvent('generate_lead', { form: 'contact' });
})();
