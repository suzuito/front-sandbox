const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        bundle_commonjs: "./main.cjs",
        bundle_esm: "./main.mjs",
    },
    // バンドル後のJavaScriptの実行環境はNode.js v20
    target: "node20"
}