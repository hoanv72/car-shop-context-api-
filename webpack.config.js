const path = require('path');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {  
   mode : 'development',
   entry : {
            bundle : './src/index.js'
  },
  output : {
    path : path.join(__dirname, "build"),
    filename : "[name].js",
  },

  module : {
    rules : [
        {
          use : {
            loader : 'babel-loader'
          },
          test : /\.js$/,
          exclude : /node_modules/
        },
        {
          test : /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          use : 'file-loader',
          test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
        }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins : [
    new HtmlwebPackPlugin({template : './src/index.html'}),
    new MiniCssExtractPlugin({
      filename : 'style.css',
    })
  ]
}
