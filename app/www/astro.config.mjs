import react from "@astrojs/react";
import pandacss from "@pandacss/dev/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// eslint-disable-next-line no-undef
const env = loadEnv("", process.cwd() + "/../..");

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pandacss()],
  publicDir: "../../public",
  server: { port: 3001 },
  vite: {
    envDir: env.VITE_LOCAL ? "." : "../../",
  },
});
