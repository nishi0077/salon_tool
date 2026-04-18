# salon_tool（FUNECT LP 共有用）

## クライアントへの共有URL（GitHub Pages）

リポジトリの GitHub Pages を有効にすると、次のURLでブラウザから閲覧できます。

**https://nishi0077.github.io/salon_tool/**

（初回は反映まで数分かかることがあります。）

## ローカルで確認する

リポジトリをクローンしたあと、`index.html` をブラウザで開くか、次のように簡易サーバーを起動してください。

```bash
# Python 3 の例
python -m http.server 8080
```

ブラウザで `http://localhost:8080` を開きます。

## ファイル構成

| ファイル | 内容 |
|----------|------|
| `index.html` | LP本体（静的HTML） |
| `styles.css` | スタイル |
| `FUNECT_LP_copy_wireframe.md` | コピー・ワイヤー原稿 |

## 公開前の差し替え

- フッター・CTAの **お問い合わせ先URL**（現在は [TECH Plus サイト](https://techplus-company.com/) への仮リンク）
- **プライバシーポリシー・特商法** の正式URL
- 必要に応じて **OGP画像**（`index.html` の `meta`）

## ライセンス

社内・クライアント共有用途。必要に応じてリポジトリを非公開に変更してください。
