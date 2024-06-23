import { prefectureKanjiMap, Prefectures } from "@/const/prefectures";
import Travel from "@/islands/Travel/Travel";
import { createRoute } from "honox/factory";

export default createRoute((c) =>
  c.render(
    <div class="flex flex-col px-4 gap-4">
      <h1 class="text-3xl text-center">
        {prefectureKanjiMap[c.req.param()["prefecture"] as Prefectures]}
      </h1>
      <a href="/home">日本地図に戻る</a>
      <Travel />
      <a>旅行登録</a>
    </div>
  )
);
