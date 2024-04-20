import Japan from "../japan/Japan";
import { useEffect } from "hono/jsx";
import {
  PrefectureKanjiMap,
  localKanjiMap,
  locals,
  prefectures,
  prefecturesInLocal,
} from "../../types/prefectures";

const Home = () => {
  useEffect(() => {
    prefectures.map((prefecture) => {
      document
        .getElementsByClassName(prefecture)[0]
        .addEventListener("click", (e) => {
          e.preventDefault();
          location.href = `/prefecture/${prefecture}`;
        });
    });
  }, []);

  return (
    <div class="flex flex-col gap-8 mt-8 max-w-screen-sm mx-auto">
      <div class="mx-4">
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
                    {PrefectureKanjiMap[prefecture]}
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
