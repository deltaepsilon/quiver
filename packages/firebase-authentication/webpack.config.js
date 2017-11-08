const path = require('path');
console.log('path', path.resolve(__dirname));
module.exports = {
  entry: './lib/firebase-authentication.jsx',
  output: {
    path: __dirname,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        use: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    open: true,
    historyApiFallback: {
      index: path.resolve(__dirname, 'index.html')
    }
  }
};
