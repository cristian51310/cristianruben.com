import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://cristianfigueroa.dev',
  integrations: [mdx(), sitemap(), tailwind(), react()]
});