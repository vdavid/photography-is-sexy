/**
 * This file contains production configuration for Webpack.
 *
 * This config is merged to the environment-independent config defined in webpack.config.common.js
 */

const webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
});
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
        screw_ie8: true,
        keep_fnames: true
    },
    compress: {
        screw_ie8: true
    },
    comments: false
});

const loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
});

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
    plugins: [
        definePlugin,
        loaderOptionsPlugin,
        uglifyPlugin
    ],
});