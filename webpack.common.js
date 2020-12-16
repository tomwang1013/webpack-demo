const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileListPlugin = require('./plugins/file-list');

module.exports = {
  // target: ['web', 'es5'], // for ie11 development. 设置之后hot load没法工作，必须注释
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // 需要使用react-hot-loader时
    /*alias: {
      'react-dom': '@hot-loader/react-dom'
    }*/
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
    new MiniCssExtractPlugin(),
    new FileListPlugin()
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
    moduleIds: 'deterministic',
  }
};
