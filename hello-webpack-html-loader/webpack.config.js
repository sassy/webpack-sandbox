const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/js')
    },
    module: {
        rules: [
            { 
                test: /\.html$/, 
                use: {loader:'html-loader'},
            }
        ]
    }
};
