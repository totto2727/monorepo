import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "pandacss-keyword-game/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>バトルフェーズ</h1>
        <h2>各チームの登録ワード</h2>
        <div>隠す</div>
        <ul>
          <li>
            <h3>チーム1</h3>
            <div>わたし</div>
          </li>
          <li>
            <h3>チーム2</h3>
            <div>自分</div>
          </li>
          <li>
            <h3>チーム3</h3>
            <div>ゆめみ</div>
          </li>
        </ul>
        <h2>ルーム分け</h2>
        <ul>
          <li>
            <h3>ルーム1</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
          <li>
            <h3>ルーム2</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
          <li>
            <h3>ルーム3</h3>
            <ul>
              <li>〇〇</li>
              <li>〇〇</li>
              <li>〇〇</li>
            </ul>
          </li>
        </ul>
        <button>バトルをする</button>
      </div>
    </>
  );
});
