import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "~/style/pandacss/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>リザルトフェーズ</h1>
        <h2>各チームの結果</h2>
        <ul>
          <li>
            <h3>チーム1</h3>
            <div>わたし</div>
            <h4>発言回数</h4>
            <div>合計15回</div>
            <h4>他チームの回答</h4>
            <ul>
              <li>
                <div>チーム2</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム3</div>
                <div>ゆめみ</div>
              </li>
            </ul>
            <h3>獲得ポイント</h3>
            <div>5 + 5 + 5 * (2 - 0) / 2 = 15</div>
          </li>
          <li>
            <h3>チーム2</h3>
            <div>自分</div>
            <h4>発言回数</h4>
            <div>合計15回</div>
            <h4>他チームの回答</h4>
            <ul>
              <li>
                <div>チーム2</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム3</div>
                <div>ゆめみ</div>
              </li>
            </ul>
            <h3>獲得ポイント</h3>
            <div>5 + 5 + 5 * (2 - 0) / 2 = 15</div>
          </li>
          <li>
            <h3>チーム3</h3>
            <div>ゆめみ</div>
            <h4>発言回数</h4>
            <div>合計15回</div>
            <h4>他チームの回答予想</h4>
            <ul>
              <li>
                <div>チーム2</div>
                <div>ゆめみ</div>
              </li>
              <li>
                <div>チーム3</div>
                <div>ゆめみ</div>
              </li>
            </ul>
          </li>
        </ul>
        <div>5 + 5 + 5 * (2 - 1) / 2 = 7.5 ~= 7</div>
        <h2>ランキング</h2>
        <ol>
          <li>
            <h3>1位</h3>
            <div>チーム1</div>
            <div>15</div>
          </li>
          <li>
            <h3>1位</h3>
            <div>チーム2</div>
            <div>15</div>
          </li>
          <li>
            <h3>1位</h3>
            <div>チーム2</div>
            <div>15</div>
          </li>
        </ol>
        <button>第2ラウンド</button>
        <button>ゲームを終了する</button>
      </div>
    </>
  );
});
