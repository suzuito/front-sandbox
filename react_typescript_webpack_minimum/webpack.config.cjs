const CopyFilePlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    plugins: [
        new CopyFilePlugin({
            patterns: [
                {
                    from: `${__dirname}/index.html`,
                    to: `${__dirname}/dist/index.html`
                }
            ]
        })
    ],
    devServer: {
        static: `${__dirname}/dist`
    },
}