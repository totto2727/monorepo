import { getRuntime } from "@astrojs/cloudflare/runtime";
import type { MicroCMSClientInstance } from "microcms";
import { createClient } from "microcms-js-sdk";

export function microCMS(response: Request): MicroCMSClientInstance {
  if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    import.meta?.env?.MICROCMS_SERVICE_DOMAIN &&
    import.meta.env.MICROCMS_API_KEY
  )
    return createClient({
      serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: import.meta.env.MICROCMS_API_KEY,
    });

  const runtime = getRuntime(response);
  const env = runtime.env as Record<PropertyKey, string>;
  if (!env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
    throw new Error("microCMSの環境変数が設定されていません");
  }
  return createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY,
  });
}
