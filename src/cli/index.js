const dotenv = require('dotenv');
const express = require('express');
// const { spawn } = require('child_process');
// const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

// Initialize dotenv config
dotenv.config();

// Initialize compiler object for web app.
const compiler = webpack(webpackConfig);
// End of compiler object

console.log(webpackConfig.output.path);

// CLI for development purpose.
console.log('🏁  CLI App Running at %s...');
console.log('⚙️   Trying to compile webpack for app ...');

const router = express.Router();
router.get('/api/version', (req, res) => {
  return res.json({version: '0.1.0'});
 });

const server = new WebpackDevServer(compiler, {
  before: function(app, server, compiler) {
    // Middleware for api server. this is for development only.
    app.use('/', router);
  },
  contentBase: webpackConfig.output.path,
  historyApiFallback: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
  }
});
console.log('⚙️   Trying to wake up the server ...');

// Development server.
server.listen(process.env.PORT, process.env.HOST, function () {
  console.log(`✨  Server running on ${process.env.HOST}:${process.env.PORT}`);
});
