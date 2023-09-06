type ImportMetaEnv = {
  readonly DATA_CF_BEACON_TOKEN_ID?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

declare module "*.astro" {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
  const component: (_props: Props) => any;
  export default component;
}
