# module=es2020,webpack

TypeScriptは、コンパイル後のJavaScriptは、ES Moduleを扱うことのできる何らかの中間変換(バンドル、WebサーバーからJavaScriptファイルの配布など)を介して、何らかの実行環境(ブラウザなど)で実行されることを想定している。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# これでも実行できる
node tscout/main.js

# バンドラー(webpack)によって中間処理させ、Node.jsで実行できるようにしてみる。
npx webpack
node dist/bundle.js
```