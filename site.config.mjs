// ============================================================
//  SITE SETTINGS — edit this file only. Everything reads from here.
// ============================================================

export const SITE = {
  name: 'FancyFont',
  url: 'https://fancyfont.online', // your domain, no trailing slash
  tagline: 'Fancy fonts, stylish names & free text tools',
  email: 'contact@fancyfont.online', // shown on the Contact page
};

// ============================================================
//  ADSTERRA ADS
//  1. Log in to Adsterra (publisher) -> Websites -> add fancyfont.online
//  2. Create each ad unit, click "Get code", and paste the WHOLE code
//     between the backticks below.
//  3. Leave a slot as `` (empty) to turn it off.
// ============================================================

export const ADS = {
  // Popunder — loads once in <head> on every page. Highest earner.
  popunder: `<script src="https://pl31606425.profitableratecpmnetwork.com/11/04/0f/11040fb8a407b2fa41d7a434bdb3ab4e.js"></script>`,

  // Social Bar — loads at the end of <body> on every page.
  socialBar: `<script src="https://pl31606426.profitableratecpmnetwork.com/26/0f/ad/260fad6c65faeedc0fb4d98238dd0cd5.js"></script>`,

  // Native Banner — shown under each tool.
  native: `<script async="async" data-cfasync="false" src="https://pl31606427.profitableratecpmnetwork.com/96142691e12d4d682eaf10db395f6107/invoke.js"></script>
<div id="container-96142691e12d4d682eaf10db395f6107"></div>`,

  // Banner 300x250 — shown inside the page content.
  banner300x250: `<script>
  atOptions = {
    'key' : 'b9a218e78a9c1c335c2fe7cf4c023ab2',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/b9a218e78a9c1c335c2fe7cf4c023ab2/invoke.js"></script>`,

  // Banner 728x90 — top of pages, desktop only (only one of the two top banners loads).
  banner728x90: `<script>
  atOptions = {
    'key' : 'f8be0274b2d2a41fc29fea337113b795',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/f8be0274b2d2a41fc29fea337113b795/invoke.js"></script>`,

  // Banner 320x50 — top of pages, mobile only.
  banner320x50: `<script>
  atOptions = {
    'key' : '080fc470467c156f526ec897ceefc9b3',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/080fc470467c156f526ec897ceefc9b3/invoke.js"></script>`,
};
