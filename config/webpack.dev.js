var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var webpack = require('webpack');


module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  output: {
    path: helpers.root('build'),
 //   publicPath: 'src/',  //Sirve cuando hago un deploy del front end en un servidor, este no es el caso
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
    new webpack.DefinePlugin({
    CAR_LOGO_URL: JSON.stringify("/src/assets/images/cars/"),
    sidebarState1: JSON.stringify(true)
    
    }),
    new ExtractTextPlugin('[name].css')
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
