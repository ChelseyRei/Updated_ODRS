const appFooter = document.getElementById('app-footer');
const footerToggle = document.getElementById('footer-toggle');

if (appFooter && footerToggle) {

  const updateFooterHeight = () => {
    if (!appFooter.hidden) {
      document.documentElement.style.setProperty('--footer-height', `${appFooter.offsetHeight}px`);
    }
  };

  footerToggle.addEventListener('click', () => {
    appFooter.hidden = !appFooter.hidden;
    footerToggle.setAttribute('aria-expanded', String(!appFooter.hidden));
    updateFooterHeight();
  });

  window.addEventListener('resize', updateFooterHeight);
  window.addEventListener('load', updateFooterHeight);
  updateFooterHeight();
}