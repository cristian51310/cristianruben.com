import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cristianfigueroa.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false, },
  }
});