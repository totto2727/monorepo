import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "~/style/pandacss/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>作戦会議準備フェーズ</h1>
        <ul>
          <li>
            <h2>チーム1</h2>
            <div>コピー</div>
          </li>
          <li>
            <h2>チーム2</h2>
            <div>コピー</div>
          </li>
          <li>
            <h2>チーム3</h2>
            <div>コピー</div>
          </li>
        </ul>
        <button>作戦会議を開始する</button>
      </div>
    </>
  );
});
