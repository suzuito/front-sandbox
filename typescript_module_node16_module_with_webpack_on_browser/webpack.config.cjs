const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        bundle_commonjs: "./tscout/main.cjs",
        bundle_esm: "./tscout/main.mjs",
    },
    // バンドル後のJavaScriptの実行環境はweb
    target: "web"
}