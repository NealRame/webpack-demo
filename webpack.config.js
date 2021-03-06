const path = require("path")

module.exports = env => ({
    mode: (env.production ?? false) ? "production" : "development",
    entry: "./src/index.js",
    externals: {
        lodash: {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_",
        },
    },
    output: {
        clean: true,
        filename: "webpack-numbers.js",
        library: {
            name: "webpackNumbers",
            type: "umd",
        },
        path: path.resolve(__dirname, "dist"),
    },
})
