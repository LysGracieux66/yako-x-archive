# セキュリティ方針

## 入れている対策

- `CRON_SECRET` によるcron API保護
- APIごとの簡易レート制限
- zodによる入力検証
- PrismaによるSQLインジェクション対策
- CSP、X-Frame-Options、X-Content-Type-Options
- camera/microphone/geolocation/paymentの権限禁止
- APIにnoindex付与
- `user-scalable=true` でピンチズーム対応

## 運用で絶対にやること

- `.env` をGitHubに上げない
- Nintendoログイン情報をDBやコードに保存しない
- 取得頻度を1時間以上にする
- 管理画面パスワードを強くする
- Vercel/Neon/GitHubの2段階認証をON
- 依存ライブラリを定期更新
- 怪しいプルリクや外部コードを入れない

## 追加で本気運用するなら

- Upstash Redisなどで本格的レート制限
- Cloudflare WAF
- Sentryでエラー監視
- DBバックアップ
- 管理画面の2FA
- 監査ログ
- 画像URLの許可ドメイン制限
