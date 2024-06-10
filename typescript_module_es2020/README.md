# module=node16,package.jsonのtypeがmodule

TypeScriptは、コンパイル後のJavaScriptは、ES Moduleを扱うことのできる何らかの中間変換(バンドル、WebサーバーからJavaScriptファイルの配布など)を介して、何らかの実行環境(ブラウザなど)で実行されることを想定している。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 当然、下記は実行できない。エラーとなる。
node main.js
```