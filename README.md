# FancyFont

Free fancy fonts & text tools site (fancyfont.online), built with Astro, hosted on Cloudflare Workers, monetised with Monetag (Adsterra slots kept but turned off).

**[Try FancyFont online](https://fancyfont.online/?utm_source=github&utm_medium=referral&utm_campaign=readme)** — type your name, choose a style, and copy it. No account or download required.

`Alex` → `𝐀𝐥𝐞𝐱` → `𝓐𝓵𝓮𝔁` → `Ⓐⓛⓔⓧ` → `꧁𝐀𝐥𝐞𝐱꧂`

Choose All styles, Bold, Cursive, Aesthetic or Gaming names to narrow the results.

| What do you want to make? | Try the tool |
|---|---|
| An Instagram bio or display name | [Instagram fonts](https://fancyfont.online/instagram-fonts/?utm_source=github&utm_medium=referral&utm_campaign=readme) |
| A TikTok bio or caption | [TikTok fonts](https://fancyfont.online/tiktok-fonts/?utm_source=github&utm_medium=referral&utm_campaign=readme) |
| Discord channel labels or nicknames | [Discord fonts](https://fancyfont.online/discord-fonts/?utm_source=github&utm_medium=referral&utm_campaign=readme) |
| A decorated gaming nickname | [Free Fire names](https://fancyfont.online/free-fire-name-style/?utm_source=github&utm_medium=referral&utm_campaign=readme) |
| Hearts, stars or brackets | [Copy-and-paste symbols](https://fancyfont.online/symbols/?utm_source=github&utm_medium=referral&utm_campaign=readme) |

Generated styles are Unicode characters. Preview them in the destination app because character support varies.

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

Monetag is the active network. Its zones are in `MONETAG` in `site.config.mjs`; the site is verified with `public/sw.js`. In-Page Push and Vignette are enabled. Onclick is disabled after a live usability check found a transparent ad overlay intercepting tool clicks; retest the format before re-enabling it. Don't add Monetag's Push Notifications or Multitag zones (permission prompt), and don't run two popunder networks at once.

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
