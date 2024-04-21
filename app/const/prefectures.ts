type LocalPrefectures = {
  kyusyu: [
    | "okinawa"
    | "kagoshima"
    | "miyazaki"
    | "oita"
    | "kumamoto"
    | "nagasaki"
    | "saga"
    | "fukuoka"
  ];
  hokkaido: ["hokkaido"];
  shikoku: ["kochi" | "kagawa" | "tokushima"];
  chugoku: ["yamaguchi" | "hiroshima" | "okayama" | "shimane" | "tottori"];
  kinki: ["wakayama" | "nara" | "hyogo" | "osaka" | "kyoto" | "shiga" | "mie"];
  chubu: [
    | "aichi"
    | "shizuoka"
    | "gifu"
    | "nagano"
    | "yamanashi"
    | "fukui"
    | "ishikawa"
    | "toyama"
    | "niigata"
  ];
  kanto: [
    "kanagawa" | "tokyo" | "chiba" | "saitama" | "gunma" | "tochigi" | "ibaraki"
  ];
  tohoku: ["fukushima" | "yamagata" | "akita" | "miyagi" | "iwate" | "aomori"];
};

// prettier-ignore
export type Prefectures = | "okinawa" | "kagoshima" | "miyazaki" | "oita" | "kumamoto" | "nagasaki" | "saga" | "fukuoka" | "kochi" | "kagawa" | "tokushima" | "yamaguchi" | "hiroshima" | "okayama" | "shimane" | "tottori" | "wakayama" | "nara" | "hyogo" | "osaka" | "kyoto" | "shiga" | "mie" | "aichi" | "shizuoka" | "gifu" | "nagano" | "yamanashi" | "fukui" | "ishikawa" | "toyama" | "niigata" | "kanagawa" | "tokyo" | "chiba" | "saitama" | "gunma" | "tochigi" | "ibaraki" | "fukushima" | "yamagata" | "akita" | "miyagi" | "iwate" | "aomori" | "hokkaido" | "ehime";

type Local = keyof LocalPrefectures;

// prettier-ignore
export const prefectures: Prefectures[] = [ "okinawa", "kagoshima", "miyazaki", "oita", "kumamoto", "nagasaki", "saga", "fukuoka", "kochi", "kagawa", "tokushima", "yamaguchi", "hiroshima", "okayama", "shimane", "tottori", "wakayama", "nara", "hyogo", "osaka", "kyoto", "shiga", "mie", "aichi", "shizuoka", "gifu", "nagano", "yamanashi", "fukui", "ishikawa", "toyama", "niigata", "kanagawa", "tokyo", "chiba", "saitama", "gunma", "tochigi", "ibaraki", "fukushima", "yamagata", "akita", "miyagi", "iwate", "aomori","hokkaido", "ehime" ];

export const prefecturesInLocal: { [key in string]: Prefectures[] } = {
  kyusyu: [
    "okinawa",
    "kagoshima",
    "miyazaki",
    "oita",
    "kumamoto",
    "nagasaki",
    "saga",
    "fukuoka",
  ],
  shikoku: ["kochi", "kagawa", "tokushima", "ehime"],
  chugoku: ["yamaguchi", "hiroshima", "okayama", "shimane", "tottori"],
  kinki: ["wakayama", "nara", "hyogo", "osaka", "kyoto", "shiga", "mie"],
  chubu: [
    "aichi",
    "shizuoka",
    "gifu",
    "nagano",
    "yamanashi",
    "fukui",
    "ishikawa",
    "toyama",
    "niigata",
  ],
  kanto: [
    "kanagawa",
    "tokyo",
    "chiba",
    "saitama",
    "gunma",
    "tochigi",
    "ibaraki",
  ],
  tohoku: ["fukushima", "yamagata", "akita", "miyagi", "iwate", "aomori"],
  hokkaido: ["hokkaido"],
};

export const prefectureKanjiMap: { [key in Prefectures]: string } = {
  okinawa: "沖縄",
  kagoshima: "鹿児島",
  miyazaki: "宮崎",
  oita: "大分",
  kumamoto: "熊本",
  nagasaki: "長崎",
  saga: "佐賀",
  fukuoka: "福岡",
  kochi: "高知",
  kagawa: "香川",
  ehime: "愛媛",
  tokushima: "徳島",
  yamaguchi: "山口",
  hiroshima: "広島",
  okayama: "岡山",
  shimane: "島根",
  tottori: "鳥取",
  kyoto: "京都",
  osaka: "大阪",
  shiga: "滋賀",
  mie: "三重",
  aichi: "愛知",
  shizuoka: "静岡",
  gifu: "岐阜",
  nagano: "長野",
  yamanashi: "山梨",
  fukui: "福井",
  ishikawa: "石川",
  toyama: "富山",
  niigata: "新潟",
  kanagawa: "神奈川",
  tokyo: "東京",
  chiba: "千葉",
  saitama: "埼玉",
  gunma: "群馬",
  tochigi: "栃木",
  ibaraki: "茨城",
  fukushima: "福島",
  yamagata: "山形",
  akita: "秋田",
  miyagi: "宮城",
  iwate: "岩手",
  aomori: "青森",
  wakayama: "和歌山",
  nara: "奈良",
  hyogo: "兵庫",
  hokkaido: "北海道",
};

export const locals: Local[] = [
  "chubu",
  "chugoku",
  "kanto",
  "kinki",
  "kyusyu",
  "shikoku",
  "tohoku",
  "hokkaido",
];

export const localKanjiMap: { [key in Local]: string } = {
  chubu: "中部",
  chugoku: "中国",
  kanto: "関東",
  kinki: "近畿",
  kyusyu: "九州",
  shikoku: "四国",
  tohoku: "東北",
  hokkaido: "北海道",
};
