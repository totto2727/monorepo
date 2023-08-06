import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import SimpleImportSort from "eslint-plugin-simple-import-sort";
import UnusedImports from "eslint-plugin-unused-imports";

const conpat = new FlatCompat();

/** @type {import('eslint').Linter.FlatConfig[]} */
export const base = [
  eslint.configs.recommended,
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
  ...conpat.extends("prettier"),
  { env: { browser: true, node: true, es2024: true, worker: true } },
  {
    ignores: ["**/dist/*"],
  },
];
