require('dotenv').config();
const http = require('http');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

// Initialize compiler object for web app.
const compiler = webpack(webpackConfig);
// Development server.
const server = new WebpackDevServer(compiler, {
  contentBase: webpackConfig.output.path,
  historyApiFallback: true,
  hot: true,
  proxy: {
    '/api': 'http://localhost:3001'
  },
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
  }
});
// Listen development server.
server.listen(process.env.PORT, process.env.HOST, function () {
  console.log(`✨  Server running on ${process.env.HOST}:${process.env.PORT}`);
});
