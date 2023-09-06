import { getCollection, getEntry } from "astro:content";

import type { GetStaticPathProps } from "~/type/astro.ts";

const COLLECTION = "blog";

export async function getBlogPaths() {
  const blogs = await getCollection(COLLECTION);
  return blogs
    .filter((v) => ["public", "limited"].includes(v.data.status))
    .map((v) => {
      return {
        params: { id: v.slug },
        props: v,
      };
    });
}

export type BlogIDProps = GetStaticPathProps<typeof getBlogPaths>;

export async function getBlogEntry(slug: BlogIDProps["slug"]) {
  return await getEntry("blog", slug);
}
