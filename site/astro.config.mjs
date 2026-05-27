// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Static site for Tomé & Paiva Advocacia — deploys to Hostinger as plain files.
export default defineConfig({
  site: 'https://www.tomepaivaadvogados.com.br',
  trailingSlash: 'ignore',
  build: { format: 'directory' }, // clean URLs: /especialidades/, /blog/<slug>/
  integrations: [sitemap(), icon()],
});
