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
            },

            {
                // CSSの扱い (CSSモジュール)
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },

            {
                // 画像の扱い
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    }
}
