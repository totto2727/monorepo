import TypeScriptParser from "@typescript-eslint/parser";
import AstroParser from "astro-eslint-parser";
import Astro from "eslint-plugin-astro";

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
    },
    rules: {
      ...Astro.configs.recommended.rules,
    },
  },
];
