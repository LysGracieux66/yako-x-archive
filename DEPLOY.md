# 公開手順

## iPhoneだけでやる場合

1. zipをファイルアプリで展開
2. GitHubで新規リポジトリ `yako-x-archive` を作る
3. 展開した中身をUpload filesで全部アップロード
4. NeonなどでPostgreSQLを作る
5. VercelでGitHubリポジトリをImport
6. VercelのEnvironment Variablesに以下を入れる

```txt
DATABASE_URL=PostgreSQLの接続URL
CRON_SECRET=長いランダム文字列
JWT_SECRET=長いランダム文字列
ADMIN_EMAIL=自分のメール
ADMIN_PASSWORD=管理用パスワード
```

7. Deploy
8. 初回はVercelのFunction Logsかローカルで `npm run db:push` を実行

PCがある場合は、GitHubアップロードとDB初期化がかなり楽です。
