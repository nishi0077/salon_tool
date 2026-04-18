# salon_tool — FUNECT ランディングページ

## クライアント共有用URL（本番）

このリポジトリの **Next.js LP** は Vercel にデプロイされています。クライアントへの共有は次のURLをそのままお送りください。

**https://salontool.vercel.app/**

- OGP・canonical は `app/layout.tsx` の `metadataBase` を **`https://salontool.vercel.app`** に合わせています（SNS・チャットでのリンク表示用）。
- トライアル・お問い合わせのCTAは [コーポレート FUNECT](https://techplus-company.com/funect/) 等の運営窓口にリンクしています。専用フォームURLが決まったら `app/page.tsx` の定数を更新してください。

## ローカルで開発する

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

```bash
npm run build
npm run start
```

## デプロイ（Vercel）

GitHub と連携済みの場合、`master` / `main` へのプッシュで自動デプロイされます。手動の場合は Vercel CLI（`vercel`）で同一プロジェクトに紐づけてください。

## 補足：静的HTML（`index.html`）

リポジトリ直下の `index.html` / `styles.css` は、以前の静的プレビュー用です。**クライアント共有の主URLは Vercel（上記）** を優先してください。

## 参考ドキュメント

| ファイル | 内容 |
|----------|------|
| `FUNECT_LP_copy_wireframe.md` | コピー・ワイヤー原稿 |
| `app/page.tsx` | LP本体（Next.js App Router） |

## ライセンス

社内・クライアント共有用途。必要に応じてリポジトリを非公開に変更してください。
