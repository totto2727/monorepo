import type { TextStyles } from "@pandacss/types";

function notoBase(
  description: string,
  value?: TextStyles[string]["value"],
): TextStyles[string] {
  return {
    description,
    value: {
      fontFamily: "'Noto Sans JP Variable', sans-serif",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5",
      textDecoration: "none",
      textTransform: "none",
      ...(value ?? {}),
    },
  };
}

export const noto: TextStyles = {
  notoP: notoBase("noto p"),
  notoA: notoBase("noto a", { textDecoration: "underline" }),
  notoH1: notoBase("noto h1", { fontWeight: 700, fontSize: "3rem" }),
  notoH2: notoBase("noto h2", { fontWeight: 700, fontSize: "2.5rem" }),
  notoH3: notoBase("noto h3", { fontWeight: 700, fontSize: "2rem" }),
  notoH4: notoBase("noto h3", { fontWeight: 700, fontSize: "1.5rem" }),
};
