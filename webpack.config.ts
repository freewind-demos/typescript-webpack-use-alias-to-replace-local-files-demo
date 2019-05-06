import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: "development",
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '#hello': path.resolve('./src/hello/real/index.ts')
    },
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  }
}

export default config;
