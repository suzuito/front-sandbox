# ブラウザで実行可能なES Moduleで書かれたJavaScript

.tsファイル中のimport指定子には必ず拡張子.jsを付けること。ES Moduleにおいては、拡張子を省略不可能なため。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 実行
npx http-server ./tscout
open http://localhost:8080
```