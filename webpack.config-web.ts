import {Configuration} from 'webpack';
import path from 'path';
import HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  mode: "development",
  entry: './hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web.bundle.js'
  },
  resolve: {
    alias: {
      'request': 'browser-request'
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({})
  ]
}

export default [config];
