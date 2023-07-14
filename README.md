# totto2727 のモノレポ

## 環境変数

- Runtime と Local、Deploy に必要な環境変数は基本的に同じであり、Runtime に合わせる
  - 一部 Local、Deploy にのみ必要な環境変数がある
- .env は各パッケージの下に生成する
  - 下手に共通化しようとしない

### www

- www-prod と www-preview、それぞれに本番と検証で四環境
- Runtime(CF Pages)
  - MICROCMS_SERVICE_DOMAIN
  - MICROCMS_API_KEY
    - www-prod: 下書きのプレビュー取得権限なし
    - www-preview: 下書きのプレビュー取得権限あり
- Local
  - MICROCMS_API_KEY
  - CLOUDFLARE_ACCOUNT_ID
    - 初回の環境作成のみ必要
- Deploy(GHA)
  - CLOUDFLARE_ACCOUNT_ID
  - CLOUDFLARE_API_TOKEN
  - MICROCMS_API_KEY
    - MICROCMS_PROD_API_KEY
      - 下書きのプレビュー取得権限なし
    - MICROCMS_PREVIEW_API_KEY
      - 下書きのプレビュー取得権限あり
