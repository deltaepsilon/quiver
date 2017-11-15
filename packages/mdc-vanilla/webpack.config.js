const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

console.log(path.resolve(__dirname, ''));
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    // 'mdc-material': path.resolve(__dirname, 'src/elements/mdc-material/mdc-material.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new MinifyPlugin()],
  devServer: {
    contentBase: __dirname,
    compress: false,
    port: 8080,
  },
};
