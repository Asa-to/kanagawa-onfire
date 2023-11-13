import { useCallback, useEffect, useRef } from "react";
import { preferenceMapping } from "../../public/Prefectures";
import { getKeys } from "../utils/getKeys";

export default function Home() {
  return (
    <div
      style={{
        width: "500px",
        minHeight: "100vh",
        margin: "50px auto 0 auto",
      }}
    >
      <svg
        className="geolonia-svg-map"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Japanese Prefectures</title>
        <desc>Created by Geolonia (https://geolonia.com/).</desc>
        {getKeys(preferenceMapping).map((pre) => {
          return <path d={preferenceMapping[pre].path} key={pre} />;
        })}
        <g
          className="boundary-line"
          style={{
            stroke: "#cecece",
            strokeWidth: "12",
            strokeLinejoin: "round",
          }}
        >
          <path
            d="M216.1,593.3H89.3c-1.1,0-2-0.9-2-2s0.9-2,2-2h126.9c4.4,0,8-3.6,8-8V454.4c0-1.1,0.9-2,2-2s2,0.9,2,2v126.9
				C228.2,587.9,222.8,593.3,216.1,593.3z"
          />
        </g>
      </svg>
    </div>
  );
}
