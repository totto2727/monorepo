import { defineConfig } from "@pandacss/dev";
import { base } from "pandacss-config";

const config: ReturnType<typeof defineConfig> = defineConfig(
  base("pandacss-www"),
);

export default config;
