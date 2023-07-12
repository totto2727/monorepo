import AstroConfig from "prettier-plugin-astro";

/** @type {import("prettier").Options} */
export const prettierConfig = {
  plugins: [AstroConfig],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
