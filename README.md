# totto2727 のモノレポ

## 導入ツール

```bash
brew install volta go-task terraform
```

## 環境変数

- Local
  - rootはプロジェクトルートの.env.localに記述
  - その他は各プロジェクトルートの.env.localに記述
  - root
    - CLOUDFLARE_ACCOUNT_ID
      - wwwの初回の環境作成
      - notionのデプロイ
    - VITE_LOCAL=true
  - www
    - MICROCMS_API_KEY: 下書き権限なし
    - MICROCMS_SERVICE_DOMAIN
  - infra
    - local.tfvars
      - TF_VAR_CLOUDFLARE_DOMAIN
      - TF_VAR_CLOUDFLARE_ZONE_ID
      - TF_VAR_CLOUDFLARE_ACCOUNT_ID
      - TF_VAR_CLOUDFLARE_API_KEY
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
www.totto2727.dev
  - 誰でも
www*.page.dev
  - www.totto2727.devへリダイレクト
*.www*.pages.dev
  - 開発者のみ
notion.totto2727.dev
  - 誰でも
```

## www

[ドキュメント](./docs/www.md)

## keyword-game

[ドキュメント](./docs/keyword-game.md)

## notion

[ドキュメント](./docs/notion.md)

## infra
Web Analyticsだけは手動で有効化する必要あり
