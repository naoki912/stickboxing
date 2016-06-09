var htmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")

module.exports = {
    entry: {
        "js/main.js": "./src/stickboxing/main.js"
    },
    module: {
        loaders: [
            {
                include: /src/,
                loader: "babel",
                query: { presets: ["es2015"] },
                test: /\.js$/
            }
        ]
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
