# module=node16,package.jsonのtypeがmodule

TypeScriptはコンパイル後のJavaScriptがNode.js v16以上で実行されることを想定している。
package.jsonのtypeがmoduleなため、TypeScriptはNode.jsのES Moduleとして動作するJavaScriptを出力する。

```bash
# 環境構築
npm ci

# コンパイル
npx tsc

# 実行
node tscout/main.js
```