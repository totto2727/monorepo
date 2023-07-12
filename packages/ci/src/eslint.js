import Astro from "eslint-plugin-astro";
import AstroParser from "astro-eslint-parser";
import eslint from "@eslint/js";
import TypeScript from "@typescript-eslint/eslint-plugin";
import TypeScriptParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const eslintConfig = [
  eslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: TypeScriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": TypeScript,
    },
    rules: {
      ...TypeScript.configs["strict-type-checked"].rules,
      ...TypeScript.configs["stylistic-type-checked"].rules,
    },
  },
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
  {
    ignores: ["**/dist/", "**/node_modules"],
  },
];
