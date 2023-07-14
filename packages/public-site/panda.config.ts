import { defineConfig } from "@pandacss/dev";
import { base } from "pandacss-config";

export default defineConfig({
  ...base,
  include: base.include.concat([
    "./node_modules/component/src/**/*.{ts,tsx,js,jsx,astro}",
  ]),
});
