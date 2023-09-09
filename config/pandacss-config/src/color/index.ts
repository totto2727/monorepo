import { defineSemanticTokens } from "@pandacss/dev";

export const colorTokens = {
  colors: {
    light: {
      primary: { DEFAULT: { value: "#5361c2" } },
      secondary: { DEFAULT: { value: "#be5fba" } },
      error: { DEFAULT: { value: "#ff6a9c" } },
      warn: { DEFAULT: { value: "#ff9077" } },
      text: { DEFAULT: { value: "#393939" } },
      bg: { DEFAULT: { value: "#E5EDE9" } },
      link: {
        DEFAULT: {
          value: "hsl(214deg, 95%, 42%)",
        },
        visited: {
          value: "hsl(258deg, 34%, 43%)",
        },
        hover: {
          value: "hsl(214deg, 95%, 25%)",
        },
        focus: {
          value: "hsl(214deg, 95%, 25%)",
        },
      },
    },
  },
  dark: {
    text: { value: "#EAF1F2" },
    bg: { value: "#030531" },
  },
};

export const colorSemanticToken = defineSemanticTokens({
  colors: {
    link: {
      DEFAULT: {
        value: {
          base: "{colors.light.link.base}",
        },
      },
      visited: {
        value: {
          base: "{colors.light.link.visited}",
        },
      },
      focus: {
        value: {
          base: "{colors.light.link.focus}",
        },
      },
      hover: {
        value: {
          base: "{colors.light.link.hover}",
        },
      },
    },
  },
});
