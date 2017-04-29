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
            {test: /\.scss$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]},
            {test: /\.(jpg|png|gif)$/, use: 'file-loader'},
            {test: /\.(woff|woff2|eot|ttf|svg)$/, use: {loader: 'url-loader', options: {limit: 100000}}}
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ],
    devtool: "source-map"
};