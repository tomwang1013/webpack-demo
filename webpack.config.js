const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    // another: './src/another-module.js',
  },
  output: {
    filename: '[name].[contentHash].js',
    // chunkFilename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: 3 }]
            ]
          }
        }
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
    moduleIds: 'hashed',
  }
};