import type { SchemaContext } from "astro:content";
import { defineCollection, z } from "astro:content";

const tag = z.union([z.literal("implementation"), z.literal("infra")]);
const status = z.union([
  z.literal("public"),
  z.literal("limited"),
  z.literal("draft"),
  z.literal("private"),
]);

const blogScheme = (clx: SchemaContext) =>
  z.object({
    title: z.string(),
    tags: z.array(tag).default([]),
    eyeCatch: z
      .object({
        src: clx.image().optional(),
        alt: z.string().default(""),
      })
      .optional(),
    status: status.default("private"),
  });

const blogCollection = defineCollection({
  type: "content",
  schema: blogScheme,
});

export const collections = {
  blog: blogCollection,
};
