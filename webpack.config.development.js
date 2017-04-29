/**
 * This file contains development configuration for Webpack.
 *
 * This config is merged to the environment-independent config defined in webpack.config.common.js
 */

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: "source-map"
});
