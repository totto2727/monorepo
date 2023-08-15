import type { MicroCMSClientInstance } from "microcms";
import { createClient } from "microcms-js-sdk";

// eslint-disable-next-line no-undef
export function microCMS(locals: App.Locals): MicroCMSClientInstance {
  if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    import.meta.env.MICROCMS_SERVICE_DOMAIN &&
    import.meta.env.MICROCMS_API_KEY
  )
    return createClient({
      serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: import.meta.env.MICROCMS_API_KEY,
    });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const env = locals.runtime.env as Record<PropertyKey, string>;
  if (!env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
    throw new Error("microCMSの環境変数が設定されていません");
  }
  return createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY,
  });
}
