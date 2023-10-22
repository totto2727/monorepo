import TypeScriptParser from "@typescript-eslint/parser";
import AstroParser from "astro-eslint-parser";
import Astro from "eslint-plugin-astro";

import { ts } from "./ts.mjs";

const tsConfig = ts[0];

/** @type {import('eslint').Linter.FlatConfig[]} */
export const astro = [
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: AstroParser,
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: TypeScriptParser,
      },
    },
    plugins: {
      astro: Astro,
      ...ts.plugins,
    },
    rules: {
      ...Astro.configs.recommended.rules,
      ...ts.rules,
    },
  },
];
