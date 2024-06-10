const path = require("path");

module.exports = {
    entry: "./tscout/main.js",
    output: {
        filename: "./bundle.js",
        path: path.join(__dirname, "dist"),
    },
    // バンドル後のJavaScriptの実行環境はNode.js v20
    target: "node20",
    module: {
        rules: [
            {
                test: /\.js$/,
                resolve: {
                    // import文のモジュール指定子にて、.jsを省略するための設定
                    fullySpecified: false
                }
            }
        ]
    }
}