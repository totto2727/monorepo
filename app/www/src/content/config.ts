import type { SchemaContext } from "astro:content";
import { defineCollection, z } from "astro:content";

const tag = z.union([z.literal("implementation"), z.literal("infra")]);

const blogScheme = (clx: SchemaContext) =>
  z.object({
    title: z.string(),
    tags: z
      .array(tag)
      .nonempty()
      .refine((items) => new Set(items).size === items.length, {
        message: "Must be an array of unique strings",
      }),
    eyeCatch: clx.image().optional(),
  });

const blogCollection = defineCollection({
  type: "content",
  schema: blogScheme,
});

export const collections = {
  blog: blogCollection,
};
