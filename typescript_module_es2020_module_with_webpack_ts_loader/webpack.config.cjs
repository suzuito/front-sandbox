const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        bundle: "./main.ts",
    },
    // バンドル後のJavaScriptの実行環境はNode.js v20
    target: "node20",
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
        ]
    },
    // tsconfig.jsonのmoduleをesXXXXでコンパイルする場合、import文のモジュール指定子における拡張子の省略が許される。
    // そのため、モジュール解決時において拡張子付き.tsファイルを解決できるようにするために、下記の設定が必要となる。
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts',
        ],
    },
}