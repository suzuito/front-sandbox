const path = require("path");

module.exports = {
    entry: "./tscout/main.js",
    output: {
        filename: "./bundle.js",
        path: path.join(__dirname, "dist"),
    },
    // バンドル後のJavaScriptの実行環境はweb
    target: "web"
}