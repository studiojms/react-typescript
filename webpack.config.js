const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

module.exports = {
  entry: {
    application: path.join(__dirname, 'src/index.tsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
  },

  //  mode: 'production',

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
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: plugins,
  devServer: {
    stats: 'minimal',
    host: '0.0.0.0',
  },
};
