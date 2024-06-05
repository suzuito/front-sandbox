package.jsonの`type`を指定しない場合、v16以降のNode.jsはファイルの拡張子によってモジュール機構を使い分ける。

```bash
# OK .cjs(CommonJS)の中で.cjs(CommonJS)をrequireする
% node main1.cjs
hello

# OK .mjs(ESM)の中で.mjs(ESM)をimportする
% node main2.mjs
hello

# OK .mjs(ESM)の中で.cjs(CommonJS)をimportする
% node main3.mjs 
hello

# NG .cjs(CommonJS)の中で.mjs(ESM)をimportする
% node main4.cjs
node:internal/modules/cjs/loader:1204
    throw new ERR_REQUIRE_ESM(filename, true);
    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/suzukitaito/git/front-sandbox/a/hello.mjs not supported.
Instead change the require of /Users/suzukitaito/git/front-sandbox/a/hello.mjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/suzukitaito/git/front-sandbox/a/main4.cjs:1:18) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.10.0
```
