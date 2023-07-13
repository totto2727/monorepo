import eslint from "@eslint/js";
import TypeScript from "@typescript-eslint/eslint-plugin";
import TypeScriptParser from "@typescript-eslint/parser";
import AstroParser from "astro-eslint-parser";
import Astro from "eslint-plugin-astro";
import SimpleImportSort from "eslint-plugin-simple-import-sort";
import UnusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
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
    plugins: {
      "unused-imports": UnusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
    },
  },
  {
    plugins: { "simple-import-sort": SimpleImportSort },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  {
    ignores: ["**/dist/", "**/node_modules"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/prefer-ts-expect-error": "warn",
    },
  },
];
