import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import pandacss from "@pandacss/dev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pandacss()],
});
