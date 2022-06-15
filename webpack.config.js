const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    entry: {
        index: {
            import: "./src/index.js",
            dependOn: "shared",
        },
        print: {
            import: "./src/print.js",
            dependOn: "shared",
        },
        shared: "lodash",
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
        runtimeChunk: "single",
    },
}
