import dayjs from "dayjs/esm/index";
import { stub_member, stub_travel } from "./stub";

const Travel = () => {
  return (
    <>
      {stub_travel.map((data) => {
        return (
          <div class="flex flex-col gap-2 shadow-lg border border-black p-2 rounded-lg">
            <img src={data.images[0]} alt={`${data.title}のベストショット`} />
            <h2 class="text-xl">{data.title}</h2>
            <p class="m-0">
              {dayjs(data.begin).format("YYYY/MM/DD")} ~{" "}
              {dayjs(data.end).format("YYYY/MM/DD")}
            </p>
            <div class="flex flex-row gap-2 items-center">
              <p class="w-fit m-0">参加メンバー：</p>
              {data.members.map((memberId) => {
                const member = stub_member.find(
                  (member) => member.id === memberId
                );
                return (
                  <div>
                    <img src={member?.icon} width={30} height={30} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Travel;