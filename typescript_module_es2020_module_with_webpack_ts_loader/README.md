# module=es2020,webpack(ts-loader)でバンドリング

ts-loaderを用いてバンドリングする場合、tsconfig.jsonのmoduleをesXXXXにし、モジュール指定子における拡張子を省略するという方法が一般的？なようだ。

- 本当に一般的なのか？は自信がないが、ネット上でヒットする多くのサンプルコードはmoduleをesXXXXとしている。
- それに、tsconfig.jsonのmoduleをnode16にした場合、TypeScriptをコンパイルできないはず。moduleをnode16とした場合、import文のモジュール指定子における拡張子を省略できなくなるため.jsみたいな拡張子をつけることとなる(サンプルコードだと"./hoge.js")が、モジュール指定子"./hoge.js"を解決できない。なぜなら、ts-loaderを用いてTypeScriptをコンパイルするということになっているために、ファイル./hoge.jsが存在しないため。

```bash
# 環境構築
npm ci

# コンパイル
npx webpack

# 直接実行できる
node dist/bundle.js
```
