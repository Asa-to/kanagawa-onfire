import dayjs from "dayjs/esm";
import { stub_member, stub_travel } from "../Travel/stub";
import { useState } from "hono/jsx";

const TravelDetail = () => {
  const data = stub_travel[0];
  const [curImg, setCurImg] = useState<string | null>(null);

  return (
    <div class="flex flex-col gap-4">
      <div>
        <div class="flex flex-row gap-2 items-center">
          <p class="w-fit">メンバー：</p>
          {data.members.map((memberId) => {
            const member = stub_member.find((member) => member.id === memberId);
            return (
              <div>
                <img src={member?.icon} width={30} height={30} />
              </div>
            );
          })}
        </div>
        <p>
          {dayjs(data.begin).format("YYYY/MM/DD")} ~{" "}
          {dayjs(data.end).format("YYYY/MM/DD")}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        {data.images.map((image) => {
          return (
            <div
              class="border border-black shadow-xl"
              onClick={() => setCurImg(image)}
            >
              <img src={image} />
            </div>
          );
        })}
      </div>
      {curImg && (
        <div
          class="absolute bg-neutral-400 bg-opacity-60 w-full h-full top-0 left-0 px-4 pt-36"
          onClick={() => setCurImg(null)}
        >
          <div class="mx-auto text-center w-fit">
            <img src={curImg} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelDetail;
