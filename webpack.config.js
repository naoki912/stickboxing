var webpack = require("webpack")
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "js/main.js": "./src/stickboxing/main.js",
        "index.htm": "./res/html/index.htm"
    },
    output: {
        filename: "[name]",
        path: "build"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new htmlWebpackPlugin({
            title: "Stick Boxing"
        })
    ],
    resolve: {
        modulesDirectories: ["src", "lib"]
    }
}
