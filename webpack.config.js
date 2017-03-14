const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //
  //  base directory
  context: resolve(__dirname, 'app'),

  //
  //  base entry point
  entry: './index.js',

  //
  //  bundle output options
  output: {

    //  filename
    filename: 'bundle.js',

    //  location on disk
    path: resolve(__dirname, 'dist')

    //  base path for assets
    publicPath: '/'
  },

  //
  //  webpack dev server
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true
  },

  //
  //  sourcemaps
  devtool: resolve(__dirname, 'src'),

  //
  //  handle filetypes
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },

  //
  //  awesome plugins
  plugins: [

    //  insert bundle into html
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ]
}
