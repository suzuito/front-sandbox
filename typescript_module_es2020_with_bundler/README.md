# module=node16,package.jsonのtypeがmodule

TypeScriptは、コンパイル後のJavaScriptは、ES Moduleを扱うことのできる何らかの中間変換(バンドル、WebサーバーからJavaScriptファイルの配布など)を介して、何らかの実行環境(ブラウザなど)で実行されることを想定している。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 当然、下記は実行できない。エラーとなる。
node main.js

# バンドラー(webpack)によって中間処理させ、Node.jsで実行できるようにしてみる。
# (注意)
#   本レポジトリのwebpack利用例はあまり良くないので、真似しないでください。
#   webpackによる中間処理を実施することを目的としたJavaScriptをTypeScriptによって出力させる場合、
#   tsconfigのmoduleを`es2020`にすることは、あまり一般的ではないらしい。
#   tsconfigのmoduleを`nodeXXXX`にすることが一般的っぽい。
#     https://webpack.js.org/api/module-methods/
#   あるいは、TypeScriptをwebpackで処理させる場合、ts-loaderを使ってしまった方が良い。
npx webpack
node dist/bundle.js
```