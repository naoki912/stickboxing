var HtmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")

module.exports = {
    entry: { "js/main.js": "stickboxing/main" },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                },
                test: /(\.react)?\.js$/
            },
            {
                loader: "style!css?modules&importLoaders=1",//!postcss",
                test: /\.css$/
            },
        ]
    },
    output: {
        filename: "[name]",
        path: "build"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/stickboxing/index.html" }),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) })
    ],
    resolve: {
        extensions: ["", ".css", ".js", ".react.js"],
        modulesDirectories: ["src", "node_modules"]
    }
}
