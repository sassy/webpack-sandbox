const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/js')
    },
    //optimizationの設定
    optimization: {
        minimize: true,  //webpack4ではwebpack.optimize.UglifyJsPluginは使えない
        minimizer: [new TerserPlugin()],
    },
}