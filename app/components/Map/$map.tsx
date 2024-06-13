import { Prefectures, prefectures } from "@/const/prefectures";
import Japan from "@/islands/Japan/Japan";
import { useEffect } from "hono/jsx";

const Map = () => {
  useEffect(() => {
    const colors: Prefectures[] = ["kanagawa", "tokyo", "hokkaido", "tochigi"];
    prefectures.map((prefecture) => {
      const ele = document.getElementsByClassName(prefecture)[0];
      ele.addEventListener("click", (e) => {
        e.preventDefault();
        location.href = `/prefecture/${prefecture}`;
      });
      ele.setAttribute("tabindex", "1");
      if (colors.includes(prefecture)) {
        ele.classList.add("fill-sky-400");
      }
    });
  }, []);

  return <Japan />;
};

export default Map;
