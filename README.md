# totto2727 のモノレポ

## 環境変数

- Local
  - rootはプロジェクトルートの.env.localに記述
  - その他は各プロジェクトルートの.env.localに記述
  - root
    - VITE_LOCAL=true
    - CLOUDFLARE_ACCOUNT_ID
      - 初回の環境作成のみ必要
  - www
    - MICROCMS_API_KEY: 下書き権限なし
    - MICROCMS_SERVICE_DOMAIN
- GitHub Actions Global(Dependabot)
  - Dependabot込みでプロジェクト全体のSecretsに適用する環境変数
  - CLOUDFLARE_ACCOUNT_ID
  - CLOUDFLARE_API_TOKEN
- GitHub Actions Project
  - www
    - Environment
      - www production
      - www staging
      - Dependabot
    - Secrets
      - MICROCMS_SERVICE_DOMAIN
      - MICROCMS_API_KEY
- Cloudflare Pages
  - www
    - MICROCMS_SERVICE_DOMAIN
    - MICROCMS_API_KEY
      - production: 下書き権限あり
      - staging: 下書き権限あり

## アクセス制限

```txt
www.totto.page
  - 誰でも
www*.pages.dev
  - www.totto.pageへリダイレクト
*.www*.pages.dev
  - 開発者のみ
```

## www

[ドキュメント](./docs/www.md)
