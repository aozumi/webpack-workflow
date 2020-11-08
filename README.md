# Webpackを用いるワークフローをスクラッチから作成

出典: "React - The Complete Guide", 22章 Webpack

## 主な設定ファイル
 * package.json
 * webpack.config.js
 * .babelrc
 * postcss.config.js

## Webpack の基本設定

 * エントリポイントとするファイル: `entry`
 * 出力先: `output`
 * ビルドの種類(production or development): `mode`

## JavaScriptファイルの処理

 * ファイルの種類ごとの処理方法の指定
   * webpack.config.js の `module.rules` に列挙する。
 * JavaScriptのコンパイルにはBabelを利用
   * Webpackでは babel-loader で処理
   * Babel をインストール
   * Babel の設定は .babelrc に記述

## CSSファイルの処理 (CSSモジュール)

 * style-loader, css-loader
   * 複数のローダを用いるときは use プロパティに配列を入れる
 * css-loader には modules オプションを指定
   * オプションは options プロパティに書く
 * postcss-loader で autoprefixer を利用 (標準CSS属性を、同等のブラウザ固有プレフィクス付き属性に展開)
   * 設定は postcss.config.js に記述
   * autoprefixer のための対象ブラウザ指定は package.json の browserslist で行う

## 画像ファイルの処理

画像ファイルをインポートすると、JavaScriptコードではそのURLを文字列として扱えるようにする。

 * url-loader (file-loaderも必要)

## スクリプトをインジェクトしてHTMLファイルを生成

 * html-webpack-plugin
 * webpack.config.js の plugins (配列)に追加
   * `new HtmlWebpackPlugin({...})`
   * 入力HTMLファイル(template)、出力ファイル名、インジェクト先部位を指定

## package.json にコマンドを追加

 * webpack-dev-serverの起動 (`start`): `webpack serve`
 * productionビルド (`build:prod`): `webpack --config webpack.config.prod.js`
