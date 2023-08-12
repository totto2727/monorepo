import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { vstack } from "pandacss/patterns";

export const head: DocumentHead = {
  title: "home",
  meta: [
    {
      name: "description",
      content: "キーワード当てゲームのホーム",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <Link href="/game">game</Link>
      </div>
    </>
  );
});
