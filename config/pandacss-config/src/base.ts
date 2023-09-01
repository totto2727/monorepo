import { defineTextStyles } from "@pandacss/dev";

import { colorTokens } from "./color/index.js";
import { noto } from "./font/noto.js";

/* eslint-disable no-undef */
export const base = {
  preflight: true,
  theme: {
    extend: {
      textStyles: defineTextStyles({ ...noto }),
    },
    tokens: { ...colorTokens },
  },

  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ] as string[],
  exclude: [] as string[],
  emitPackage: false,
  outdir: "src/style/pandacss",

  optimize: process.env["NODE_ENV"] === "production",
  minify: process.env["NODE_ENV"] === "production",
  // hash: process.env.NODE_ENV === "production",
  clean: process.env["NODE_ENV"] === "production",
} as const;
