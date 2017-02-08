var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var node_dir = path.join(__dirname, './node_modules/');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProduction = process.env.NODE_ENV === 'production';

var getEntry = function(globPath, pathDir) {
  var entries = {
    vendor: ['jquery']
  };
  glob.sync(globPath).forEach(function(entry) {
    var pathname = entry.replace(pathDir, '').split('.')[0]
    entries[pathname] = entry;
  });
  return entries;
};
var entries = getEntry('./views/**/**/*.js', './views/');
var chunks = Object.keys(entries);

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, './public/'),
    filename: isProduction ? 'js/[name]-[hash:8].js' : 'js/[name].js',
    publicPath: '/'
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!less')
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url?limit=8192&name=img/[hash:8].[ext]'
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?limit=10000&name=fonts/[hash:8].[ext]'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      mod: node_dir
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProduction ? 'js/vendor-[hash:8].js' : 'js/vendor.js',
      minChunks: 3
    }),
    new ExtractTextPlugin(isProduction ? 'css/[name]-[hash:8].css' : 'css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  devtool: 'source-map'
};
