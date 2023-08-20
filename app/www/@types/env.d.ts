type ImportMetaEnv = {
  readonly MICROCMS_SERVICE_DOMAIN: string;
  readonly MICROCMS_API_KEY: string;
  readonly DATA_CF_BEACON_TOKEN_ID?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
