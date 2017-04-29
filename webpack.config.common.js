/**
 * This file contains environment-independent configuration.
 * The config defined here will be merged with one of the environment-specific configs.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    /* Used to include Webpack in the HTML file without a <script> tag. */
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body',
    chunksSortMode: 'dependency'
});

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve('distribution'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(jpe?g|gif)$/i, exclude: /node_modules/, use: {loader: 'file-loader', options: {name: 'images/[name].[hash:6].[ext]'}}},
            {test: /favicon\.ico$/, use: {loader: 'file-loader', options: {name: '[name].[ext]'}}},
            {test: /\.(woff|woff2|eot|ttf|svg|png)$/, exclude: /node_modules/, use: {loader: 'url-loader', options: {limit: 100000, name: 'images/[name].[hash:6].[ext]'}}}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        htmlWebpackPlugin
    ],
    devtool: "source-map"
};