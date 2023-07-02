import { MicroCMSClientObject, getList, getListDetail } from "@/config/microCMS";
import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";

export type Blog = MicroCMSListContent & {
    title: string;
    content: string;
    eyecatch: MicroCMSImage
};

export type Blogs = MicroCMSListResponse<Blog>;

export async function getBlogs(client: MicroCMSClientObject, queries?: MicroCMSQueries) {
    return await getList<Blog>(client, { endpoint: "blogs", queries });
};

export const getBlog = async (
    client: MicroCMSClientObject,
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await getListDetail<Blog>(client, {
        endpoint: "blogs",
        contentId,
        queries,
    });
};