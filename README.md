# 神奈川オンファイア

俺たちの青春を記録する最高の web アプリケーション

## 機能

- 訪問済みの都道府県がグラフィカルにわかる

## 技術スタック

- honox
- prisma
- mysql
- terraform
- aws
  - s3
    - 画像を保存（将来的に）
  - ec2(スポットインタンス)
    - mysql rds
  - lambda
    - honox を SSR
  - cloud front
- Google Domains
  - 神奈川オンファイア.page の管理

## 開発手順

- インフラ構築
- API サーバー構築
- フロントエンド構築
