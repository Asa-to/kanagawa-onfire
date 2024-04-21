const end = new Date();
end.setDate(end.getDate() + 1);
export const stub_travel = [
  {
    id: "123456",
    title: "極寒キャンプ",
    begin: new Date(),
    end,
    teamId: "123456",
    members: ["asato", "ash"],
    prefectures: ["akita", "hokkaido"],
    images: ["https://img.activityjapan.com/wi/ginzanonsen-tour_thumb.jpg"],
  },
];

export const stub_member = [
  {
    id: "asato",
    name: "あさと",
    icon: "https://avatars.githubusercontent.com/u/46988205",
  },
  {
    id: "ash",
    name: "あすか",
    icon: "https://avatars.githubusercontent.com/u/46988205",
  },
];
