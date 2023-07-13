import cloudflare from "@astrojs/cloudflare";
import image from "@astrojs/image";
import react from "@astrojs/react";
import pandacss from "@pandacss/dev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), pandacss()],
  output: "hybrid",
  adapter: cloudflare({
    mode: "directory",
  }),
  vite: {
    define: {
      "process.env.MICROCMS_SERVICE_DOMAIN": JSON.stringify(
        process.env.MICROCMS_SERVICE_DOMAIN
      ),
      "process.env.MICROCMS_API_KEY": JSON.stringify(
        process.env.MICROCMS_API_KEY
      ),
    },
  },
});
