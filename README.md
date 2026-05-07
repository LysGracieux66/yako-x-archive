# Yako X Archive Complete

ヤコ鯖限定のSplatoon 3 XマッチXPアーカイブサイトです。

## 主な機能

- ヤコ鯖限定、アロメ除外
- 各ルール上位500位を1時間ごとに保存
- 更新ごとに武器、XP、順位、時刻、プレートを保存
- 過去最高XPは上がった時だけ更新
- 名前/番号検索
- ルール別、武器別、武器系統別、プレイヤー別ページ
- XP推移グラフ
- スマホ最適化、ピンチズーム対応
- セキュリティヘッダー、CSP、cron認証、入力検証、簡易レート制限

## ローカル起動

```bash
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

## 本番化

`lib/fetchXRanking.ts` を実データ取得処理に差し替えてください。
Nintendoの認証情報やトークンはコードやGitHubに入れず、必ず環境変数やSecret管理に置いてください。

## 注意

SplatNet 3の取得は公式公開APIではありません。公開サービス化するときは任天堂の規約、ログイン情報の扱い、アクセス頻度、個人情報の扱いに注意してください。
