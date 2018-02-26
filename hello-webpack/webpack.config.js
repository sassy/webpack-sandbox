const path = require('path');
const webpack = require('webpack');

module.exports = {
    // モード
    // productionとdevelopmentがある
    mode: 'production',
    // エントリーポイントの設定
    // 複数設定すること可能
    // メインの処理するJavaScriptファイル
    entry: './src/js/app.js', 
    // 出力の設定
    // 出力するファイル名や出力先のパスを指定  
    output: {  
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/js')
    }
};
