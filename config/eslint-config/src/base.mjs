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
        ...globals.builtin,
        ...globals.es5,
        ...globals.es2015,
        ...globals.es2017,
        ...globals.es2020,
        ...globals.es2021,
        ...globals.browser,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.commonjs,
        ...globals.jest,
      },
    },
  },
  {
    ignores: [
      "**/dist/*",
      "**/server/*",
      "**/tmp/*",
      "**/.astro/*",
      "**/src/env.d.ts",
    ],
  },
];
