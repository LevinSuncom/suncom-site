const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, "build/"),
    // publicPath: "/build/"
  },
  devServer: {
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, {
        test: /\.jpg$/,
        use: ['file-loader']
      }
    ]
  }
};
