import { createClient, type GetListRequest, MicroCMSListResponse, MicroCMSObjectContent, GetListDetailRequest } from "microcms-js-sdk";
import { getRuntime } from "@astrojs/cloudflare/runtime";
import { succeed, AnyhowResult, fail } from "@/lib/result";

function loadEnv(env?: Record<string, unknown>) {
    if (!(env && typeof env.MICROCMS_SERVICE_DOMAIN === 'string' && typeof env.MICROCMS_API_KEY === 'string')) throw new Error('MicroCMSの環境変数の読み込みに失敗しました')
    return { serviceDomain: env.MICROCMS_SERVICE_DOMAIN, apiKey: env.MICROCMS_API_KEY }
}

export type MicroCMSClientObject = ReturnType<typeof createClient>

const isDev = import.meta.env.DEV ?? false
const isSSR = import.meta.env.SSR ?? false

export function microCMS(request?: Request): MicroCMSClientObject {
    const isLoadRequest = Boolean(!isDev && isSSR && request)
    if (!isLoadRequest) {
        console.log('isLoadRequest:', isLoadRequest)
        console.log('request:', request)
    }
    const env = loadEnv(isLoadRequest ? getRuntime(request ?? new Request('')).env as Record<string, unknown> : import.meta.env);
    return createClient(env)
}

export async function getList<T extends MicroCMSObjectContent>(client: MicroCMSClientObject, getListRequest: GetListRequest): Promise<AnyhowResult<MicroCMSListResponse<T>>> {
    return await client.getList<T>(getListRequest).then(v => succeed(v)).catch(e => fail(e))
}

export async function getListDetail<T extends MicroCMSObjectContent>(client: MicroCMSClientObject, getRequest: GetListDetailRequest): Promise<AnyhowResult<T>> {
    return await client.getListDetail<T>(getRequest).then(v => succeed(v)).catch(e => fail(e))
}