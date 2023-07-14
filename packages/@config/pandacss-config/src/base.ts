/* eslint-disable no-undef */
export const base = {
  preflight: true,
  jsxFramework: "react",
  theme: {
    extend: {},
  },

  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ] as string[],
  exclude: [] as string[],
  emitPackage: true,
  outdir: "pandacss",

  optimize: process.env["NODE_ENV"] === "production",
  minify: process.env["NODE_ENV"] === "production",
  // hash: process.env.NODE_ENV === "production",
  clean: process.env["NODE_ENV"] === "production",
} as const;
