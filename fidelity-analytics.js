(() => {
  const measurementId = 'G-ZK59708GWD';
  const choice = document.getElementById('offerAnalytics');
  const cta = document.getElementById('fidelityBuy');
  const key = 'promptbr_consent';
  let loaded = false;

  function preference() {
    try { return JSON.parse(localStorage.getItem(key)) || {}; }
    catch { return {}; }
  }

  function tag() { window.dataLayer.push(arguments); }

  function apply(enabled) {
    choice.checked = enabled;
    window['ga-disable-' + measurementId] = !enabled;
    if (!enabled || loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    tag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    tag('js', new Date());
    tag('config', measurementId, {
      page_location: location.origin + location.pathname,
      page_referrer: '', allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(script);
  }

  choice.addEventListener('change', () => {
    const old = preference();
    const next = {essential: true, analytics: choice.checked, ads: old.ads === true, ts: Date.now()};
    try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* Apply for this page. */ }
    apply(choice.checked);
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(preference().analytics === true);
  });
  cta.addEventListener('click', () => {
    if (choice.checked && cta.getAttribute('href') === 'newsletter.html?interesse=ai-fidelity') {
      tag('event', 'fidelity_signup_click', {send_to: measurementId});
    }
  });
  apply(preference().analytics === true);
})();
