const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // エントリーポイントの設定
    entry: './src/ts/app.ts', 
    // 出力の設定
    // 出力するファイル名や出力先のパスを指定  
    output: {  
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.ts$/, //tsファイルをコンパイル
                use: 'ts-loader', //ts-loaderを使う
            }

        ]
    },
    resolve: {
        extensions: ['.ts', '.js']  //importの時にファイル名からここに書いてある拡張子は省略できる
    }
};
