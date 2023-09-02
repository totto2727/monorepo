import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { vstack } from "~/style/pandacss/patterns";

export default component$(() => {
  return (
    <>
      <div class={vstack()}>
        <h1>キーワード当てゲーム</h1>
        <div>
          <h2>ゲームマスター</h2>
          <Link href="/masters/rooms/">ルームを作成する</Link>
          <Link href="/accounts/login/">ログイン</Link>
        </div>
        <div>
          <h2>プレイヤー</h2>
          <Link href="/players/rooms/">ルームに参加する</Link>
        </div>
      </div>
    </>
  );
});
