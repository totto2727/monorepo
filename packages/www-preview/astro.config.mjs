import react from "@astrojs/react";
import pandacss from "@pandacss/dev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pandacss()],
  publicDir: "./node_modules/component/public",
});
