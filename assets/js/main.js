// ── LANGUAGE SYSTEM ──
// Global functions so onclick in HTML can call them directly

function detectLang() {
  const saved = localStorage.getItem('cgbvrr-lang');
  if (saved === 'en' || saved === 'fr') return saved;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return browser === 'fr' ? 'fr' : 'en';
}

function preferredDisplay(el) {
  const forced = el.getAttribute('data-lang-display');
  if (forced) return forced;

  const tag = el.tagName;
  if (tag === 'SMALL' && el.parentElement && el.parentElement.closest('.nav-panel-links')) {
    return 'block';
  }
  if (tag === 'SPAN' || tag === 'EM' || tag === 'STRONG' || tag === 'SMALL' || tag === 'B' || tag === 'I') {
    return 'inline';
  }
  if (tag === 'A' || tag === 'BUTTON') {
    return 'inline-flex';
  }
  if (tag === 'LI') {
    return 'list-item';
  }
  return 'block';
}

function applyLang(lang) {
  const safeLang = lang === 'fr' ? 'fr' : 'en';

  document.documentElement.lang = safeLang;
  document.documentElement.setAttribute('data-current-lang', safeLang);
  if (document.body) document.body.setAttribute('data-current-lang', safeLang);

  document.querySelectorAll('[data-lang]').forEach(el => {
    const elementLang = el.getAttribute('data-lang');
    el.style.display = elementLang === safeLang ? preferredDisplay(el) : 'none';
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(img => {
    const fallback = img.getAttribute('data-alt-en') || img.getAttribute('alt') || '';
    const nextAlt = img.getAttribute(`data-alt-${safeLang}`) || fallback;
    img.setAttribute('alt', nextAlt);
  });

  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.textContent = safeLang === 'en' ? 'FR' : 'EN';
    btn.setAttribute('aria-label', safeLang === 'en' ? 'Passer au français' : 'Switch to English');
    btn.setAttribute('aria-pressed', safeLang === 'fr' ? 'true' : 'false');
  }

  localStorage.setItem('cgbvrr-lang', safeLang);

  const siteNav = document.getElementById('site-nav');
  if (siteNav) {
    document.documentElement.style.setProperty('--mobile-nav-height', `${siteNav.getBoundingClientRect().height}px`);
  }
}

function toggleLang() {
  const current = localStorage.getItem('cgbvrr-lang') || detectLang();
  applyLang(current === 'en' ? 'fr' : 'en');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', function() {

  // Apply detected/saved language immediately
  const savedLang = localStorage.getItem('cgbvrr-lang');
  applyLang(savedLang || detectLang());

  // Mobile drawer navigation
  const hamburger = document.getElementById('nav-hamburger');
  const siteNav = document.getElementById('site-nav');
  const navLinks  = document.getElementById('primary-navigation');
  const navOverlay = document.getElementById('nav-overlay');
  const mobileQuery = window.matchMedia('(max-width: 900px)');
  let mobileMenuScrollY = 0;
  if (navLinks && !navLinks.hasAttribute('tabindex')) navLinks.setAttribute('tabindex', '-1');

  function updateMobileNavHeight() {
    if (!siteNav) return;
    document.documentElement.style.setProperty('--mobile-nav-height', `${siteNav.getBoundingClientRect().height}px`);
  }

  function isMobileNav() {
    return mobileQuery.matches;
  }

  function closeMobileSubmenus() {
    if (!navLinks) return;
    navLinks.classList.remove('submenu-open');
    document.querySelectorAll('.nav-has-panel.open').forEach(item => {
      item.classList.remove('open');
      const trigger = item.querySelector('.nav-panel-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  function openMobileMenu() {
    if (!hamburger || !navLinks) return;
    updateMobileNavHeight();
    mobileMenuScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${mobileMenuScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    if (navOverlay) navOverlay.hidden = false;
    document.body.classList.add('mobile-menu-open');
  }

  function closeMobileMenu() {
    if (!hamburger || !navLinks) return;
    const wasOpen = navLinks.classList.contains('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menu');
    if (navOverlay) navOverlay.hidden = true;
    document.body.classList.remove('mobile-menu-open');
    closeMobileSubmenus();
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    if (wasOpen) window.scrollTo(0, mobileMenuScrollY);
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navOverlay) navOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-submenu-back').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      closeMobileSubmenus();
      if (navLinks) navLinks.focus({ preventScroll: true });
    });
  });

  document.querySelectorAll('.nav-panel-trigger').forEach(trigger => {
    trigger.addEventListener('click', event => {
      if (!isMobileNav()) return;
      event.preventDefault();

      const item = trigger.closest('.nav-has-panel');
      if (!item || !navLinks) return;

      closeMobileSubmenus();
      item.classList.add('open');
      navLinks.classList.add('submenu-open');
      trigger.setAttribute('aria-expanded', 'true');
    });
  });

  document.querySelectorAll('#primary-navigation a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileNav() && !link.classList.contains('nav-panel-trigger')) closeMobileMenu();
    });
  });

  mobileQuery.addEventListener('change', event => {
    updateMobileNavHeight();
    if (!event.matches) closeMobileMenu();
  });
  window.addEventListener('resize', updateMobileNavHeight);
  updateMobileNavHeight();

  // Director preview dropdown panels
  const panelItems = document.querySelectorAll('.nav-has-panel');
  panelItems.forEach(item => {
    const trigger = item.querySelector('.nav-panel-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', event => {
      // Top-level panel labels are real links. On desktop, hover/focus exposes panels; clicking navigates.
      // Button triggers, if reintroduced later, still toggle the panel without navigation.
      if (trigger.tagName === 'A') return;

      event.preventDefault();
      const willOpen = !item.classList.contains('open');
      panelItems.forEach(other => {
        other.classList.remove('open');
        const otherTrigger = other.querySelector('.nav-panel-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', event => {
    if (event.target.closest('.nav-has-panel')) return;
    panelItems.forEach(item => {
      item.classList.remove('open');
      const trigger = item.querySelector('.nav-panel-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (isMobileNav() && navLinks && navLinks.classList.contains('open')) {
      closeMobileMenu();
      return;
    }
    panelItems.forEach(item => {
      item.classList.remove('open');
      const trigger = item.querySelector('.nav-panel-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── LEAFLET MAP ──
  if (!document.getElementById('watershed-map')) return;

  const map = L.map('watershed-map', {
    center: [47.9, -66.8],
    zoom: 8,
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 14
  }).addTo(map);

  // Public-safe watershed boundary placeholder. Site-specific markers and sensitive
  // habitat layers should be added only after internal review and approval.
  L.polygon([
    [48.30,-67.80],[48.15,-67.90],[48.00,-68.00],
    [47.85,-67.70],[47.70,-67.50],[47.55,-67.20],
    [47.50,-66.90],[47.60,-66.50],[47.75,-66.30],
    [48.00,-66.20],[48.20,-66.40],[48.35,-66.70],
    [48.40,-67.20],[48.30,-67.80]
  ], {
    color: '#4a9baf', fillColor: '#2e6b7a',
    fillOpacity: 0.12, weight: 1.5, dashArray: '4 6'
  }).addTo(map).bindPopup('<strong>Restigouche Watershed</strong><br>General public boundary. Detailed layers pending internal review.');

}); // end DOMContentLoaded
