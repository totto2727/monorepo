import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "pandacss-keyword-game/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>作戦会議フェーズ</h1>
        <h2>各チームの登録ワード</h2>
        <ul>
          <li>
            <h3>チーム1</h3>
            <div>コピー</div>
            <div>わたし</div>
          </li>
          <li>
            <h3>チーム2</h3>
            <div>コピー</div>
            <div>自分</div>
          </li>
          <li>
            <h3>チーム3</h3>
            <div>コピー</div>
            <div>ゆめみ</div>
          </li>
        </ul>
        <button>作戦会議を終了する</button>
      </div>
    </>
  );
});
