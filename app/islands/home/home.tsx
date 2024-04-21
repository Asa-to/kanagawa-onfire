import { useEffect } from "hono/jsx";
import {
  prefectureKanjiMap,
  localKanjiMap,
  locals,
  prefectures,
  prefecturesInLocal,
} from "../../const/prefectures";
import Japan from "../Japan/Japan";
import { Header } from "../../components/Header";

const Home = () => {
  useEffect(() => {
    prefectures.map((prefecture) => {
      const ele = document.getElementsByClassName(prefecture)[0];
      ele.addEventListener("click", (e) => {
        e.preventDefault();
        location.href = `/prefecture/${prefecture}`;
      });
      ele.setAttribute("tabindex", "1");
    });
  }, []);

  return (
    <div class="flex flex-col gap-12">
      <Header>神奈川オンファイア</Header>
      <div class="mx-4 shadow-lg border p-4 rounded-3xl border-black">
        <Japan />
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
