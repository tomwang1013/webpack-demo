const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.tsx',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    inline: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: '[name].css',
      // chunkFilename: '[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,

      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          name: 'venders',
          priority: 10
        },
        common: {
          test: /\.js$/,
          name: 'common',
          minChunks: 2,
          priority: 5
        },
      },
    },
    // runtimeChunk: 'single',
    moduleIds: 'deterministic',
    // minimize: false
  }
};
