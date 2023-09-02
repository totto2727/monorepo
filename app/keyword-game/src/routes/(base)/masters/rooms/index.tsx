import { component$ } from "@builder.io/qwik";
import { vstack } from "~/style/pandacss/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>ルームの設定</h1>
        <label>
          <h2>チーム数</h2>
          <input />
        </label>
        <label>
          <h2>チームの人数</h2>
          <input />
        </label>
        <label>
          <h2>キーワードのテーマ</h2>
          <input />
        </label>
        <label>
          <h2>キーワードの長さ</h2>
          <input />
        </label>
        <button>ルームを作成する</button>
      </div>
    </>
  );
});
