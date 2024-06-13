# 神奈川オンファイア

俺たちの青春を記録する最高の web アプリケーション

## 機能

- ユーザーログイン
- グループ参加
- 訪問済みの都道府県がグラフィカルにわかる

## ページ一覧

- トップページ
  - ログイン
  - グループ選択
- グループトップページ
  - 訪問済み都道府県確認
  - 旅行情報の登録
  - 旅行情報の確認
- 都道府県詳細ページ
  - 訪問済みの旅行
  - 未訪問テキスト
- 旅行詳細ページ
  - タイトル
  - 行ったメンバー
  - 写真
  - 旅行の日程
- 旅行情報登録ページ
- 旅行情報一覧ページ
  - 都道府県別
  - 行った日順

### ユーザー

- id
- 名前
- アイコン

### グループ

- id
- 所属メンバー
- オーナー id
- グループ名

### 旅行記録

- id
- 旅行名
- 旅行日程
- グループ
- 参加メンバー
- 都道府県
- 画像リスト

## 技術スタック

- honox
- cloudflare
  - workers
    - デプロイ
  - D1
    - サーバーレス SQL データベース
  - R2
    - S3 互換分散オブジェクトストレージ
- prisma
- Google Domains
  - 神奈川オンファイア.page の管理
