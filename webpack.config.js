const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist/`,
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
      Components: path.resolve(__dirname, 'src/components/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              emitWarning: true,
            }
          }
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1'],
              plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],

            }
          }
        ],

      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: debug ? 'inline-sourcemap' : false,
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
};
