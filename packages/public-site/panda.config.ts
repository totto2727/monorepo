/* eslint-disable no-undef */
import { defineConfig } from "@pandacss/dev";
import { panda } from "component/panda"

export default defineConfig({
  ...panda,
  include: panda.include.concat(
    ["./node_modules/component/src/**/*.{ts,tsx,js,jsx,astro}",
      "./node_modules/component/pages/**/*.{ts,tsx,js,jsx,astro}"
    ])
});
