# www

## 概要

ブログやポートフォリオLPを公開するためのAstroアプリケーション(群)

### www-public

- 一般公開用のAstroアプリケーション
- [app/www-public](../app/www-public/)が実体
- 全てSSGすることでCloudflare Pagesのスペックを最大限活用する設計

### www-preview

- 公開前のコンテンツプレビュー用のAstroアプリケーション
- [app/www-preview](../app/www-preview/)が実体
- コンテンツプレビューという性質上、コンテンツの反映速度を重視し、SSRを採用した設計

## インフラおよびCI/CD

### 配信環境

- public、previewともにCloudflare Pagesを利用して配信
  - public
    - 完全な静的ファイルによる配信
    - 動的な処理、およびAPIはCloudflare Workers(Pages Functions)を利用
  - preview
    - 完全なSSRによる配信
      - バックエンドはCloudflare Workers(Pages Functions)
    - 動的な処理を記述可能だが、publicと実装を合わせるため、基本的にはAstroのSSR関係は使用しない
- Cloudflare Zero TrustのAccessを用いることで検証環境および、previewへのアクセスを制限
  - public
    - 本番: 制限なし
    - 検証(staging): 開発者のみ
  - private
    - 本番: コンテンツ作成者のみ
    - 検証(staging): 開発者のみ

### CI/CD

- public、previewともにGitHub Actionsを利用
- [.github/workflow](../.github/workflows/)が実体
  - 影響しているCI/CD
    - [static-analysis.yaml](../.github/workflows/static-analysis.yaml)
      - プロジェクト全体の型チェック、リント、フォーマットを確認するCI
    - [deploy-www.yaml](../.github/workflows/deploy-www.yaml)
      - Astroアプリケーションをビルドし、Cloudflare PageをデプロイするCD
      - (public, private) \* (本番, 検証)で計4環境

## 環境構築

### エディタ

- VSCode
- Jetbrains IDE
- モノレポとAstroとの相性からVSCodeの使用を推奨

### 初回

- プロジェクトのクローン
- 環境変数の設定
  - [README.md](../README.md)の環境変数を参照
  - wwwに関するLocalの環境変数のみでOK
  - この時点ではLocal以外の環境変数は影響しない
- Cloudflare Pagesプロジェクトの作成

  ```bash
  brew install task
  task www-init
  ```

  - 途中でログインが要求された場合は、指示に従ってログインする

- Pages プロジェクトの確認
  - Cloudflareのコンソールで正常にプロジェクトが生成されたか確認する
    - この段階ではwww-publicは動作するが、環境変数の問題でwww-previewは動作しない
    - SSR時はCloudflare Pagesの環境変数を直接参照するため
- 環境変数の設定
  - [README.md](../README.md)の環境変数を参照
  - GitHub Actions、Cloudflare Pagesの環境変数を設定
- アクセス制限の設定
  - [README.md](../README.md)のアクセス制限を参照
  - Cloudflare Zero TrustのAccessを用いたアクセス制限

### 開発

- 基本的にはリポジトリルートでの操作を推奨
- `--filter www-public`や`--filter www-preview`を以下のコマンドに付与することで実行するプロジェクトを限定することが可能

```bash
# 開発サーバの起動
## publicはlocalhost:3001
## previewはlocalhost:3002
pnpm dev

# ローカルでのビルド(本番用の環境変数ではない可能性が高いため注意)
## ビルド結果は各プロジェクトルート以下に生成
pnpm build

# 型チェック
pnpm type

# リンタ(型チェック込み)
pnpm lint

# フォーマット(型チェック、リンタ込み)
pnpm format

# ルートのファイル(app/、package/、config/以外)を操作した場合
pnpm root
```
