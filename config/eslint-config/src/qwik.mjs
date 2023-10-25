import Qwik from "eslint-plugin-qwik";

/** @type {import('eslint').Linter.FlatConfig[]} */
export const qwik = [
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
