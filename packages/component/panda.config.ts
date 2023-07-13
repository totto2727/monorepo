/* eslint-disable no-undef */
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  theme: {
    extend: {},
  },

  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  exclude: [],
  emitPackage: true,
  outdir: "pandacss",

  optimize: process.env.NODE_ENV === "production",
  minify: process.env.NODE_ENV === "production",
  hash: process.env.NODE_ENV === "production",
  clean: process.env.NODE_ENV === "production",
});
