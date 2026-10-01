# FancyFont

Free fancy fonts & text tools site (fancyfont.online), built with Astro, hosted on Cloudflare Workers, monetised with Monetag (Adsterra slots kept but turned off).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deployment

Pushes to `main` on GitHub (github.com/Ubdale/fancyfontmaker) auto-deploy to the Cloudflare Worker `fancyfontmaker`.

- Build command: `npm run build`, output directory: `dist`
- Custom domain: Worker → **Settings** → **Domains & Routes** → add `fancyfont.online` and `www.fancyfont.online`.

## Ads

Monetag is the active network. Its zones (Onclick, In-Page Push, Vignette) are in `MONETAG` in `site.config.mjs`; the site is verified with `public/sw.js`. Don't add Monetag's Push Notifications or Multitag zones (permission prompt), and don't run two popunder networks at once.

To switch back to Adsterra, empty the `MONETAG` slots and:

1. Sign up at adsterra.com as a **Publisher** and add `https://fancyfont.online`.
2. Create ad units: Popunder, Social Bar, Native Banner, Banner 300x250, 728x90, 320x50.
3. Paste each unit's code into `site.config.mjs` under `ADS`.
4. Commit and push — Cloudflare redeploys automatically.

## After launch

- Google Search Console → add the domain → submit `https://fancyfont.online/sitemap-index.xml`.
- Change the contact email in `site.config.mjs` if needed.

## Pages

| URL | Tool |
|---|---|
| `/` | Fancy font generator |
| `/instagram-fonts/`, `/tiktok-fonts/`, `/discord-fonts/` | Font generator, platform-specific SEO pages |
| `/free-fire-name-style/`, `/pubg-name-generator/` | Gaming names with symbols |
| `/instagram-bio-generator/` | Bio ideas by category |
| `/username-generator/` | Username ideas |
| `/youtube-thumbnail-downloader/` | Thumbnail downloader |
| `/symbols/` | Copy-paste symbols |
| `/upside-down-text/`, `/strikethrough-text/`, `/word-counter/` | Text tools |

To add a new tool page, create it in `src/pages/` and add it to `src/data/nav.js`.
