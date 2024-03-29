var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    defServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // display only errors to reduce the amount of output
        stats: 'errors-only',

        // parse host and port from env so this easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Kanban.app'
        })
    ]
};