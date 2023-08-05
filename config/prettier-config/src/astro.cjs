const base = require("./base.cjs");

/** @type {import("prettier").Options} */
module.exports = {
  ...base,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
