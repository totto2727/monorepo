import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import SimpleImportSort from "eslint-plugin-simple-import-sort";
import UnusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

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
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.worker,
      },
    },
  },
  {
    ignores: ["**/dist/*", "**/server/*", "**/tmp/*"],
  },
];
