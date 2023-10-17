const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // bundling mode (개발/운영)
  entry: './src/index.ts', // java 로 치면 main method 가 있는 파일
  devtool: 'inline-source-map', // 여러개의 모듈을 bundling 할때 원래 파일을 추적할수 있도록 설정
  plugins: [
    new HtmlWebpackPlugin({ //index.html 자동생성
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // bundling output file 설정
    path: path.resolve(__dirname, 'dist'),
  },
};
