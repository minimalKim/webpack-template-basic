//import 
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//기본구성옵션 제공 및 정리
module.exports = {
  // parcel index.html
  // 파일을 읽어 들이기 시작하는 진입점(html 아닌 js파일) 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  // path는 nodejs가 필요로 하는 절대경로로 적기 
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      { // SCSS 처리할 수 있는 옵션
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, 
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식들 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}