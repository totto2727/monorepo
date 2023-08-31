import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// eslint-disable-next-line no-undef
const env = loadEnv("", process.cwd() + "/../..");

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss({ applyBaseStyles: false })],
  publicDir: "../../public",
  server: { port: 3001 },
  vite: {
    envDir: env.VITE_LOCAL ? "." : "../../",
  },
  experimental: {
    assets: true,
  },
});
