# totto2727 のモノレポ

## 環境変数

- Runtime と Local、Deploy に必要な環境変数は基本的に同じであり、Runtime に合わせる
  - 一部 Local、Deploy にのみ必要な環境変数がある
- .env はルートで全て管理

### 構成

- GitHub Actions Shared
  - CLOUDFLARE_ACCOUNT_ID
  - CLOUDFLARE_API_TOKEN
- Cloudflare Pages www-preview
  - MICROCMS_SERVICE_DOMAIN
    - production
    - staging
  - MICROCMS_API_KEY
    - production: 下書き権限あり
    - staging: 下書き権限あり
- GitHub Actions www-public,www-preview
  - MICROCMS_SERVICE_DOMAIN_PREVIEW
    - www-preview -> MICROCMS_SERVICE_DOMAIN
    - production
    - staging
  - MICROCMS_API_KEY_PREVIEW: 下書き権限あり
    - www-preview -> MICROCMS_API_KEY
    - production
    - staging
  - MICROCMS_SERVICE_DOMAIN_PUBLIC
    - www-public -> MICROCMS_SERVICE_DOMAIN
    - production
    - staging
  - MICROCMS_API_KEY_PUBLIC: 下書き権限あり
    - www-public -> MICROCMS_API_KEY
    - production
    - staging
- Local
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
