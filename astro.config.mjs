// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domain final belum diputuskan (lihat README). Selama PUBLIC_SITE_URL kosong,
// canonical, sitemap dan indexing dimatikan.
const site = process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
});
