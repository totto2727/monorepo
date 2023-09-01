# totto2727 のモノレポ

## 導入ツール

```bash
brew install volta go-task terraform entr fd
```

## 環境変数

- Local
  - rootはプロジェクトルートの.env.localに記述
  - その他は各プロジェクトルートの.env.localに記述
  - root
    - VITE_LOCAL=true
  - www
    - MICROCMS_API_KEY
    - MICROCMS_SERVICE_DOMAIN
  - keyword-game
  - infra
    - local.tfvars
      - CLOUDFLARE_DOMAIN
      - CLOUDFLARE_ZONE_ID
      - CLOUDFLARE_ACCOUNT_ID
      - CLOUDFLARE_API_KEY
- GitHub Actions
  - Environment
    - root, dependabot
  - Secrets
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
      - DATA_CF_BEACON_TOKEN_ID
        - www production
  - keyword-game
    - Environment
      - keyword-game production
      - keyword-game staging
      - Dependabot
    - Secrets
      - PUBLIC_DATA_CF_BEACON_TOKEN_ID
        - keyword-game production
- Cloudflare Pages
  - www
    - Environment
      - production
      - preview
    - Secrets
      - MICROCMS_SERVICE_DOMAIN
      - MICROCMS_API_KEY
      - DATA_CF_BEACON_TOKEN_ID
        - production
  - keyword-game
    - Environment
      - production
      - preview
    - Secrets
    - PUBLIC_DATA_CF_BEACON_TOKEN_ID
      - production

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

[ドキュメント](./docs/infra.md)

Web Analyticsだけは手動で有効化する必要あり
