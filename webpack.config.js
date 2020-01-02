const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
const webpackBuildFolder = path.resolve(__dirname, '.eksamen/build');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: webpackBuildFolder,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.vue$/i,
        use: [
          'vue-loader',
        ],
      }, {
        test: /\.css$/i,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
      }, {
        test: /\.js$/i,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'App',
      template: path.resolve(__dirname, 'src/statics/index.html'),
    }),
  ]
};
