import {
  createClient,
  type GetListRequest,
  MicroCMSListResponse as MicroCMSListResponse_,
  GetListDetailRequest,
  MicroCMSImage,
  MicroCMSListContent as MicroCMSListContent_,
  MicroCMSQueries,
} from "microcms-js-sdk";
// import { getRuntime } from "@astrojs/cloudflare/runtime";
import { succeed, AnyhowResult, fail } from "result";

export type MicroCMSClientInstance = ReturnType<typeof createClient>;

const richEditoerSymbol: unique symbol = Symbol();

export type MicroCMSPrimitiveField = string | number | boolean;

export type MicroCMSImageField = MicroCMSImage;
export type MicroCMSRichEditorField = string & {
  [richEditoerSymbol]: "rich-editor";
};
export type MicroCMSBaseField = MicroCMSImageField | MicroCMSRichEditorField;

export type MicroCMSCustomFieldId = { fieldId: string };

export type MicroCMSRepeatedField<T extends MicroCMSCustomFieldId> = T[];

export type MicroCMSCustomField<T extends string, U> = U extends Record<
  string,
  | MicroCMSPrimitiveField
  | MicroCMSBaseField
  | MicroCMSRepeatedField<infer _>
  | undefined
>
  ? U & { fieldId: T }
  : never;

export type MicroCMSContent<T> = T extends Record<
  string,
  | MicroCMSPrimitiveField
  | MicroCMSBaseField
  | MicroCMSRepeatedField<infer _>
  | MicroCMSCustomField<infer __, infer ___>
  | undefined
>
  ? T
  : never;

export type MicroCMSListContent<T> = T extends MicroCMSContent<infer _>
  ? T & MicroCMSListContent_
  : never;

export type MicroCMSQueriesWithoutFields = Omit<MicroCMSQueries, "fields">;
export type GetListRequestWithoutFields = Omit<GetListRequest, "queries"> & {
  queries?: Omit<MicroCMSQueries, "fields">;
};
export type GetListDetailRequestWithoutFields = Omit<
  GetListDetailRequest,
  "queries"
> & { queries?: Omit<MicroCMSQueries, "fields"> };

export type MicroCMSListResponse<T> = Omit<
  MicroCMSListResponse_<T>,
  "contents"
> & {
  contents: T[];
};

export async function getList<
  T extends {},
  const U extends readonly (keyof T)[]
>(
  client: MicroCMSClientInstance,
  fields: U,
  { queries, ...getListRequest }: GetListRequestWithoutFields
): Promise<AnyhowResult<MicroCMSListResponse<Pick<T, U[number]>>>> {
  return await client
    .getList<Pick<T, U[number]>>({
      ...getListRequest,
      queries: { ...queries, fields: fields as unknown as string[] },
    })
    .then((v) => succeed(v))
    .catch((e) => fail(e));
}

export async function getListDetail<
  T extends {},
  const U extends readonly (keyof T)[]
>(
  client: MicroCMSClientInstance,
  fields: U,
  { queries, ...getRequest }: GetListDetailRequestWithoutFields
): Promise<AnyhowResult<Pick<T, U[number]>>> {
  return await client
    .getListDetail<Pick<T, U[number]>>({
      ...getRequest,
      queries: { ...queries, fields: fields as unknown as string[] },
    })
    .then((v) => succeed(v))
    .catch((e) => fail(e));
}

// function loadEnv(env?: Record<string, unknown>) {
//   if (
//     !(
//       env &&
//       typeof env.MICROCMS_SERVICE_DOMAIN === "string" &&
//       typeof env.MICROCMS_API_KEY === "string"
//     )
//   )
//     throw new Error("MicroCMSの環境変数の読み込みに失敗しました");
//   return {
//     serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
//     apiKey: env.MICROCMS_API_KEY,
//   };
// }

// const isDev = import.meta.env.DEV ?? false;

// export function microCMS(request?: Request): MicroCMSClientInstance {
//   if (!request || isDev) return createClient(loadEnv(import.meta.env));
//   const runtime = getRuntime(request) as { env?: Record<string, unknown> };
//   return createClient(loadEnv(runtime.env));
// }
