import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://adarshayoga.es",
  adapter: cloudflare(),
  integrations: [
    sitemap({
      // /eventos/ is a 301 to Momoyoga, not a page. Listing a redirect in the
      // sitemap tells a search engine to index an address that never answers
      // with content.
      filter: (page) => !page.endsWith("/eventos/"),
    }),
  ]
});