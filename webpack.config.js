const webpack = require('webpack');

const port = '3010';

module.exports = {
  entry: [
    'babel-polyfill',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders:
      [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel',
        },
        {
          test: /\.scss$/,
          loader: 'style!css?modules!sass',
          include: /src/,
          exclude: 'node_modules',
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules',
          include: /flexboxgrid/,
        },
      ]
  },
  devtool: 'inline-source-map',
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
