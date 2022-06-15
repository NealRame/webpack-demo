const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
}
