const path = require("path")
const toml = require("toml")
const yaml = require("yamljs")


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.xml$/i,
            use: ["xml-loader"],
        }, {
            test: /\.csv$/i,
            use: ["csv-loader"],
        }, {
            test: /\.toml$/i,
            type: "json",
            parser: {
                parse: toml.parse
            },
        }, {
            test: /\.(yml|yaml)$/i,
            type: "json",
            parser: {
                parse: yaml.parse
            },
        }, {
            test: /(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
        }],
    },
}
