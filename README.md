# FancyFontMaker

Free fancy fonts & text tools site (fancyfontmaker.site), built with Astro, hosted on Cloudflare Pages, monetised with Adsterra.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy to Cloudflare Pages

1. Push this folder to a new GitHub repository.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. You get a `*.pages.dev` address.
5. In the Pages project → **Custom domains** → add `fancyfontmaker.site` (and `www.fancyfontmaker.site`).

## Add Adsterra ads

1. Sign up at adsterra.com as a **Publisher** and add `https://fancyfontmaker.site`.
2. Create ad units: Popunder, Social Bar, Native Banner, Banner 300x250, 728x90, 320x50.
3. Paste each unit's code into `site.config.mjs` under `ADS`.
4. Commit and push — Cloudflare redeploys automatically.

## After launch

- Google Search Console → add the domain → submit `https://fancyfontmaker.site/sitemap-index.xml`.
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
