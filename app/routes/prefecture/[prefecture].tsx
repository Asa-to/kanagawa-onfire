import { createRoute } from "honox/factory";
import { Prefectures, prefectureKanjiMap } from "../../const/prefectures";
import Travel from "../../islands/Travel/Travel";

export default createRoute((c) =>
  c.render(
    <div class="flex flex-col">
      <header>
        <h1 class="text-3xl">
          {prefectureKanjiMap[c.req.param()["prefecture"] as Prefectures]}
        </h1>
      </header>
      <a href="/home">日本地図に戻る</a>
      <p>行った回数：2回</p>
      <div>行ったメンバー：</div>
      <button>旅行登録</button>
      <Travel />
    </div>
  )
);
