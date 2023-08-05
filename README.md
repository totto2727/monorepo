# totto2727 のモノレポ

## 環境変数

- Local
  - rootはプロジェクトルートの.env.localに記述
  - その他は各プロジェクトルートの.env.localに記述
  - root
    - VITE_LOCAL=true
    - CLOUDFLARE_ACCOUNT_ID
      - 初回の環境作成のみ必要
  - www-public
    - MICROCMS_API_KEY: 下書き権限あり
    - MICROCMS_SERVICE_DOMAIN
  - www-preview
    - MICROCMS_API_KEY: 下書き権限なし
    - MICROCMS_SERVICE_DOMAIN
- GitHub Actions Global(Dependabot)
  - Dependabot込みでプロジェクト全体のSecretsに適用する環境変数
  - CLOUDFLARE_ACCOUNT_ID
  - CLOUDFLARE_API_TOKEN
- GitHub Actions Project
  - 特定のプロジェクトで使用する環境変数名
    - Actionsで特定の対応関係がある場合
    - 設定するEnvironment(複数の場合あり)
  - MICROCMS_SERVICE_DOMAIN_PREVIEW
    - MICROCMS_SERVICE_DOMAIN
    - www production
    - www staging
    - Dependabot
  - MICROCMS_API_KEY_PREVIEW: 下書き権限あり
    - MICROCMS_API_KEY
    - www production
    - www staging
    - Dependabot
  - MICROCMS_SERVICE_DOMAIN_PUBLIC
    - MICROCMS_SERVICE_DOMAIN
    - www production
    - www staging
    - Dependabot
  - MICROCMS_API_KEY_PUBLIC: 下書き権限あり
    - MICROCMS_API_KEY
    - www production
    - www staging
    - Dependabot
- Cloudflare Pages www-preview
  - MICROCMS_SERVICE_DOMAIN
    - production
    - staging
  - MICROCMS_API_KEY
    - production: 下書き権限あり
    - staging: 下書き権限あり

## アクセス制限

```txt
www.totto.page
  - 誰でも
www-preview.totto.page
  - コンテンツ作成者のみ
www-public.pages.dev
  - www.totto.pageへリダイレクト
*.www-public.pages.dev
  - 開発者のみ
*.www-preview.pages.dev
  - 開発者のみ
```

## www

[ドキュメント](./docs/www.md)
