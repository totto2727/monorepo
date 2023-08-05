type ImportMetaEnv = {
  readonly MICROCMS_SERVICE_DOMAIN: string;
  readonly MICROCMS_API_KEY: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
