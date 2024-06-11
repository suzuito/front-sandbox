# module=node16,.mts,.ctsファイルのコンパイル,webpackでバンドリング,ブラウザ向け

本コードはTypeScriptとWebpackの勉強用なため、[ts-loader](https://github.com/TypeStrong/ts-loader)を使用していない。
(TypeScriptをWebpackで扱いたいのであればts-loaderを使った方が良いです)

TypeScriptはコンパイル後のJavaScriptがNode.js v16以上で実行されることを想定している。
package.jsonのtypeではなく、TypeScriptのファイル拡張子によって、TypeScriptがNode.jsのES Module、CommonJS Moduleのどちらとして動作するかを指定できる。

TypeScriptは、.mtsという拡張子を持つソースコードをES ModuleのJavaScriptとして出力し、出力後のJavaScriptのソースコードの拡張子を.mjsとする。

TypeScriptは、.ctsという拡張子を持つソースコードをCommonJS ModuleのJavaScriptとして出力、出力後のJavaScriptのソースコードの拡張子を.cjsとする。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 直接実行できる
node tscout/main.cjs
node tscout/main.mjs
```

JavaScriptがCommonJS Module形式である場合[tree shaking](https://developer.mozilla.org/ja/docs/Glossary/Tree_shaking)されないため、ES Module形式にすること。
dist/bundle_esm.jsはtree shakingされているが、dist/bundle_commonjs.jsはされていない。

```bash
# バンドリングする
npx webpack

# 実行
npx http-server ./dist
open http://localhost:8080
```