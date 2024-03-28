# 神奈川オンファイア

俺たちの青春を記録する最高の web アプリケーション

## 機能

- ユーザーログイン
- グループ参加
- 訪問済みの都道府県がグラフィカルにわかる

## データ構造

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
- prisma
- mysql
- terraform
- aws
  - s3
    - 画像を保存（将来的に ）
    - mysql のバックアップを定期的に保存
  - EBS
    - ec2 にアタッチすることでデータの永続性を狙う（ワンチャンいける）
  - ec2(スポットインタンス)
    - mysql rds
  - autoscaling
    - 常に 1 つの ec2 スポットインスタンスを維持する
  - alb
  - acm
  - lambda
    - honox を SSR
      - public subnet
    - honox のサーバー部分
      - private subnet
  - cloud front
    - Google Domains の独自ドメインを繋げる
- Google Domains
  - 神奈川オンファイア.page の管理

## 開発手順

- インフラ構築
  1. ローカルに mysql サーバー
  1. terraform で AWS リソース構築
  1. デプロイまでは削除する
- API サーバー構築
  1. prisma setup
- フロントエンド構築
  1. ページを作る
  1. 適宜サーバーに API を追加する
