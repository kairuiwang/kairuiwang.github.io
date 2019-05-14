const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,
            use: "babel-loader",
        }],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
};

