var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
  entry: ['./index.pug', './css/master.sass', './sitescript.js'],
  context: __dirname + "/app",
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug',
      filetype: 'pug',
      chunksSortMode: 'dependency',
      inject: false
    }),
    new HtmlWebpackPugPlugin(),
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};


// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// // var HtmlWebpackPlugin = require('html-webpack-plugin');
// // var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
// 
// module.exports = {
//   entry: ['./sitescript.js', './css/master.sass'],
//   context: __dirname + "/app",
//   output: {
//     path: __dirname + "/dist",
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       { 
//         test: /\.sass$/, 
//         loader: ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           loader: "css-loader!sass-loader",
//         }),
//       }
//     ]
//   }
//   //     {
//   //       test: /\.(sass|scss)$/,
//   //       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
//   //     },
//   //     {
//   //       test: /\.pug$/,
//   //       loaders: ['pug-loader']
//   //     }
//   //   ]
//   // },
//   // plugins: [
//   //   new HtmlWebpackPlugin({
//   //     template: './index.pug',
//   //     filetype: 'pug',
//   //     inject: false
//   //   }),
//   //   new HtmlWebpackPugPlugin(),
//   //   new ExtractTextPlugin({ // define where to save the file
//   //     filename: '[name].bundle.css',
//   //     allChunks: true,
//   //   }),
//   // ],
// };
