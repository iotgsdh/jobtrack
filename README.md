# JobTrack

就職・転職活動で応募した企業を登録・管理するためのWebアプリです。

## Demo

https://jobtrack.tw08iwckpyvz48pfu0sx-262.workers.dev/sign-in

## Features

- ログイン
- アカウント作成
- 応募企業の登録
- 応募企業の一覧表示
- 応募企業の詳細表示

## Pages

| Page             | Description                          |
| ---------------- | ------------------------------------ |
| ログイン         | メールアドレスとパスワードでログイン |
| アカウント作成   | 新規アカウントを作成                 |
| ダッシュボード   | 応募状況の概要を表示                 |
| 応募企業登録     | 応募した企業の情報を登録             |
| 応募企業一覧     | 登録した企業を一覧で表示             |
| 応募企業詳細     | 企業ごとの詳細情報を表示             |

## Key Implementations

### Supabaseによる認証・データ管理

`@supabase/ssr` を利用し、サーバー/クライアントの両方でセッションを扱えるようにしています。認証とデータの保存にはSupabaseを使用しています。

### Cloudflare Workers へのデプロイ

[OpenNext](https://opennext.js.org/cloudflare) のCloudflareアダプターを利用し、Next.jsのビルド成果物をCloudflare Workers上で動作させています。

## Tech Stack

| Category       | Technology                    |
| -------------- | ----------------------------- |
| Framework      | Next.js 16 (App Router)       |
| Language       | TypeScript                    |
| UI             | React 19                      |
| Styling        | Tailwind CSS 4                |
| Backend / Auth | Supabase                      |
| Hosting        | Cloudflare Workers (OpenNext) |
| Lint           | ESLint                        |
| Formatter      | Prettier                      |

## Getting Started

### Clone the repository

```bash
git clone https://github.com/iotgsdh/jobtrack.git
cd jobtrack
```

### Install dependencies

```bash
npm install
```

### Environment variables

プロジェクトルートに `.env.local` を作成し、Supabaseの接続情報を設定します。

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

値はSupabaseダッシュボードの「Project Settings」→「API Keys」から確認できます。

### Run the development server

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開きます。

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | 開発サーバーを起動します                     |
| `npm run build`   | 本番用にビルドします                         |
| `npm run check`   | ビルドと型チェックを実行します               |
| `npm run lint`    | ESLintを実行します                           |
| `npm run preview` | Cloudflare環境に近い状態でローカル確認します |
| `npm run deploy`  | Cloudflare Workersへデプロイします           |

## Deployment

Cloudflare Workers にデプロイします。

```bash
npm run deploy
```

本番環境の環境変数(`NEXT_PUBLIC_SUPABASE_URL`、`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`)は、Cloudflareのダッシュボードまたは `wrangler` で設定してください。

## Directory Structure

```
src
├── app
├── components
├── constants
├── lib
└── types
```

| Directory    | Description                                              |
| ------------ | -------------------------------------------------------- |
| `app`        | App Routerのページ、レイアウト、ルーティング             |
| `components` | 再利用可能なUIコンポーネント                             |
| `constants`  | 共通で使用する定数                                       |
| `lib`        | Supabaseクライアントの初期化など、共通の処理・ユーティリティ |
| `types`      | TypeScriptの型定義                                       |
