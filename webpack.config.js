var webpack = require("webpack")
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "js/main.js": "./src/stickboxing/main.js"
    },
    output: {
        filename: "[name]",
        path: "build"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new htmlWebpackPlugin({
            title: "Stick Boxing"
        })
    ],
    resolve: {
        modulesDirectories: ["src", "lib"]
    }
}
