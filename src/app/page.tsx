"use client";
import Japan from "public/map-polygon.svg";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const doInitFlag = useRef(true);
  const doInit = useCallback(() => {
    const prefectures = document.querySelectorAll(".prefecture");
    prefectures.forEach((prefecture) => {
      const jpPreName =
        prefecture.children[0].textContent
          ?.replaceAll(" ", "")
          .split("/")?.[0] || "不明";
      const enPreName =
        prefecture.children[0].textContent
          ?.replaceAll(" ", "")
          .split("/")?.[1] || "unknown";
      if (enPreName === "Hokkaido") {
        prefecture.classList.add("red");
      }
      prefecture.addEventListener("click", () => {
        alert(jpPreName);
        console.log(prefecture.classList);
      });
    });
  }, []);

  useEffect(() => {
    if (doInitFlag.current) {
      doInit();
      doInitFlag.current = false;
    }
  }, [doInit]);

  return (
    <div
      style={{
        width: "500px",
        minHeight: "100vh",
        margin: "50px auto 0 auto",
      }}
    >
      <Japan width="100%" />
    </div>
  );
}
