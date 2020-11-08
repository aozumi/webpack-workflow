const path = require('path');

module.exports = {
    mode: 'development',
    devServer: { port: 3000 },

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '',
    },
    devtool: 'eval-cheap-module-source-map',

    module: {
        rules: [
            {
                // JavaScriptファイルのコンパイル
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
