/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
    },
    template: path.join(__dirname, './index.html'),
    filename: 'index.html',
    inject: 'body',
    title: 'React with TS',
  }),
];

const ENV = process.env.NODE_ENV || 'dev';

const isProd = ENV != 'dev';

if (isProd) {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
}

module.exports = {
  entry: {
    application: path.join(__dirname, 'src/index.tsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
  },

  mode: isProd ? 'production' : 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: plugins,
  optimization: {
    minimize: isProd,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: isProd ? [new OptimizeCSSAssetsPlugin({})] : [],
  },
  devServer: {
    stats: 'minimal',
    host: '0.0.0.0',
  },
};
