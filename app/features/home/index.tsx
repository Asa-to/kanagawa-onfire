import { Header } from "@/components/Header";
import JapanMap from "@/components/JapanMap/$japanMap";
import {
  locals,
  localKanjiMap,
  prefecturesInLocal,
  prefectureKanjiMap,
} from "@/const/prefectures";

const Home = () => {
  return (
    <div class="flex flex-col gap-12">
      <Header>神奈川オンファイア</Header>
      <div class="mx-4 shadow-lg border p-4 rounded-3xl border-black">
        <JapanMap />
      </div>
      <div class="flex flex-row gap-2 flex-wrap justify-center">
        {locals.map((local) => {
          return (
            <details class="flex flex-col text-center border p-2 whitespace-nowrap h-fit m-0 w-20">
              <summary>{localKanjiMap[local]}</summary>
              {prefecturesInLocal[local].map((prefecture) => {
                return (
                  <a href={`prefecture/${prefecture}`}>
                    {prefectureKanjiMap[prefecture]}
                  </a>
                );
              })}
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
