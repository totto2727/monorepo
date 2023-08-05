import type { MicroCMSClientInstance } from "microcms";
import { createClient } from "microcms-js-sdk";

export function microCMS(): MicroCMSClientInstance {
  if(!import.meta.env.MICROCMS_SERVICE_DOMAIN || !import.meta.env.MICROCMS_API_KEY){
    throw new Error('microCMSの環境変数が設定されていません')
  }
  return createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
  });
}
