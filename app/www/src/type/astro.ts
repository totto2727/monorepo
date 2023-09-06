export type GetStaticPathProps<T> = T extends () => Promise<
  {
    props: infer U;
  }[]
>
  ? U
  : never;
