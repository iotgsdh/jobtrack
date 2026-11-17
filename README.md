# JobTrack

就職・転職活動で応募した企業を登録・管理するためのWebアプリです。

## Demo

https://jobtrack.tw08iwckpyvz48pfu0sx-262.workers.dev/

## Features

- ログイン
- アカウント作成
- 応募企業の登録
- 応募企業の一覧表示
- 応募企業の詳細表示

## Key Implementations

### Supabaseによる認証・データ管理

`@supabase/ssr` を利用し、サーバー/クライアントの両方でセッションを扱えるようにしています。認証とデータの保存にはSupabaseを使用しています。

### Cloudflare Workers へのデプロイ

[OpenNext](https://opennext.js.org/cloudflare) のCloudflareアダプターを利用し、Next.jsのビルド成果物をCloudflare Workers上で動作させています。

## Tech Stack

| Category  | Technology   |
| --------- | ------------ |
| Framework | Next.js      |
| Language  | TypeScript   |
| Styling   | Tailwind CSS |
| Lint      | ESLint       |
| Formatter | Prettier     |

## Getting Started

### Clone the repository

```bash
git clone https://github.com/iotgsdh/jobtrack.git
cd portfolio
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Directory Structure

```text
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
