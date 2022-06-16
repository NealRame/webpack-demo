const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        clean: true,
        filename: "webpack-numbers.js",
        library: {
            name: "webpackNumbers",
            type: "umd",
        },
        path: path.resolve(__dirname, "dist"),
    },
}
