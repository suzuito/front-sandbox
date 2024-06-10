# module=node16,package.jsonのtypeがmodule,webpackでバンドリング

TypeScriptはコンパイル後のJavaScriptがNode.js v16以上で実行されることを想定している。
package.jsonのtypeがmoduleなため、TypeScriptはNode.jsのES Moduleとして動作するJavaScriptを出力する。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 直接実行できる
node main.js

# バンドリングする
npx webpack

# バンドルされたjsを実行する
node dist/bundle.js
```