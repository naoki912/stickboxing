var webpack = require("webpack")

module.exports = {
    entry: "./src/stickboxing/main.js",
    output: {
        filename: "main.js",
        path: "build/js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ],
    resolve: {
        modulesDirectories: [
            "src",
            "lib"
        ]
    }
}
