import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// eslint-disable-next-line no-undef
const env = loadEnv("", process.cwd() + "/../..");

// https://astro.build/config
export default defineConfig({
  site: "https://www.totto2727.dev",
  image: {
    domains: ["picsum.photos"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    pandacss({ applyBaseStyles: false }),
    mdx(),
    prefetch(),
    sitemap(),
  ],
  publicDir: "../../public",
  server: { port: 3001 },
  vite: {
    envDir: env.VITE_LOCAL ? "." : "../../",
  },
  compressHTML: !env.VITE_LOCAL,
});
