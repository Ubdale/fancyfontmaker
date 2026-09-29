import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './site.config.mjs';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
