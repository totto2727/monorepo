import Qwik from "eslint-plugin-qwik";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const astro = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      qwik: Qwik,
    },
    rules: {
      ...Qwik.configs.strict.rurles,
    },
  },
];
