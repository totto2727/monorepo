import TypeScript from "@typescript-eslint/eslint-plugin";
import TypeScriptParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const ts = [
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
      "@typescript-eslint/ban-types": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      // Qwikの公式から
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-throw-literal": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
];
