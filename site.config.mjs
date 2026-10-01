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
//  MONETAG ADS (active network)
//  Paste each zone's code from Monetag -> Websites -> fancyfont.online -> Get tag.
//  These load on every page. Leave a slot as `` (empty) to turn it off.
//  Don't add Push Notifications or Multitag: they show an "Allow notifications?" prompt.
// ============================================================

export const MONETAG = {
  // Onclick (Popunder) — main earner.
  onclick: `<script>(function(s){s.dataset.zone='11935489',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,

  // In-Page Push (Banner) — small ad that slides in over the page.
  inPagePush: `<script>(function(s){s.dataset.zone='11935492',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,

  // Vignette Banner — full-screen ad shown between page views.
  vignette: `<script>(function(s){s.dataset.zone='11935495',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`,
};

// ============================================================
//  ADSTERRA ADS (currently OFF — switched to Monetag for Payoneer payouts)
//  Run only one popunder network at a time. To use Adsterra again, get each
//  unit's code for fancyfont.online and paste it between the backticks.
// ============================================================

export const ADS = {
  // Popunder — loads once in <head> on every page.
  popunder: ``,

  // Social Bar — loads at the end of <body> on every page.
  socialBar: ``,

  // Native Banner — shown under each tool.
  native: ``,

  // Banner 300x250 — after the first font styles on font pages, at the bottom elsewhere.
  banner300x250: ``,

  // Banner 728x90 — top of pages, desktop only (only one of the two top banners loads).
  banner728x90: ``,

  // Banner 320x50 — top of pages, mobile only.
  banner320x50: ``,
};
