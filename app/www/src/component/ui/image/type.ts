import type { ImageMetadata } from "astro";
import type { LocalImageProps, RemoteImageProps } from "astro:assets";
import type { SystemStyleObject } from "pandacss-www/types";

export type ImageWithContainerProps = Omit<
  LocalImageProps & RemoteImageProps,
  "src" | "class" | "style"
> & {
  src: string | ImageMetadata;
  aspectRatio?: string;
  objectFit?: string;
  containerWidth?: SystemStyleObject["width"];
  containerHeight?: SystemStyleObject["height"];
  cssProps?: SystemStyleObject;
};
