// ============================================================
//  SITE SETTINGS — edit this file only. Everything reads from here.
// ============================================================

export const SITE = {
  name: 'FancyFontMaker',
  url: 'https://fancyfontmaker.site', // your domain, no trailing slash
  tagline: 'Fancy fonts, stylish names & free text tools',
  email: 'contact@fancyfontmaker.site', // shown on the Contact page
};

// ============================================================
//  ADSTERRA ADS
//  1. Log in to Adsterra (publisher) -> Websites -> add fancyfontmaker.site
//  2. Create each ad unit, click "Get code", and paste the WHOLE code
//     between the backticks below.
//  3. Leave a slot as `` (empty) to turn it off.
// ============================================================

export const ADS = {
  // Popunder — loads once in <head> on every page. Highest earner.
  popunder: `<script src="https://pl31578291.profitableratecpmnetwork.com/a1/81/08/a181081563cbdc30e75567dac29fc4fb.js"></script>`,

  // Social Bar — loads at the end of <body> on every page.
  socialBar: `<script src="https://pl31578292.profitableratecpmnetwork.com/bd/15/cc/bd15cc3e43f1c01aee4e8a45d5fa5fd7.js"></script>`,

  // Native Banner — shown under each tool.
  native: `<script async="async" data-cfasync="false" src="https://pl31578293.profitableratecpmnetwork.com/80a3801ff602df7ca757ac4fd2b99e5d/invoke.js"></script>
<div id="container-80a3801ff602df7ca757ac4fd2b99e5d"></div>`,

  // Banner 300x250 — shown inside the page content.
  banner300x250: `<script>
  atOptions = {
    'key' : '87e911d7d9440d38e701bbcee9e190c0',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/87e911d7d9440d38e701bbcee9e190c0/invoke.js"></script>`,

  // Banner 728x90 — top of pages, desktop only (only one of the two top banners loads).
  banner728x90: `<script>
  atOptions = {
    'key' : 'a1d8c10ae3970ecbc01bca7fb1fbeeaf',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/a1d8c10ae3970ecbc01bca7fb1fbeeaf/invoke.js"></script>`,

  // Banner 320x50 — top of pages, mobile only.
  banner320x50: `<script>
  atOptions = {
    'key' : 'e2dadd94d447c023d2891a19caaf791d',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/e2dadd94d447c023d2891a19caaf791d/invoke.js"></script>`,
};
