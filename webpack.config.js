const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Caching",
        }),
    ],
    output: {
        clean: true,
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
}
