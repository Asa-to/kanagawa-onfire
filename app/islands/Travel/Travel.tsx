import dayjs from "dayjs/esm/index";
import { stub_member, stub_travel } from "./stub";

const Travel = () => {
  return (
    <>
      {stub_travel.map((data) => {
        return (
          <div>
            <img src={data.images[0]} alt={`${data.title}のベストショット`} />
            <p>{data.title}</p>
            <p>
              {dayjs(data.begin).format("YYYY/MM/DD")} ~{" "}
              {dayjs(data.end).format("YYYY/MM/DD")}
            </p>
            <div class="flex flex-row gap-2 items-center">
              <p class="w-fit">参加メンバー：</p>
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
