require('@babel/register');
const chokidar = require('chokidar');
const dotenv = require('dotenv');
const lodash = require('lodash');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

// Initialize dotenv config
dotenv.config();

// Create own file watcher for api routes.
chokidar.watch(path.resolve(__dirname, '../api/'), {
  persistent: true,
  ignoreInitial: true,
}).on('all', lodash.debounce((event, path) => {
  console.log("🤔  Detecting changes on API module ...");
  const serverModule = Object.keys(require.cache).find(item => /api\/index/.test(item));
  delete require.cache[serverModule];
}, 1000));

// Initialize compiler object for web app.
const compiler = webpack(webpackConfig);
// End of compiler object

// CLI for development purpose.
console.log('🏁  CLI App Running at %s...');
console.log('⚙️   Trying to wake up dev server ...');

const server = new WebpackDevServer(compiler, {
  before: function(app, server, compiler) {
    // Middleware for api server. this is for development only.
    app.use('/api', function(req, res, next) {
      require('../api/index').default(req, res, next);
    });
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

// Development server.
server.listen(process.env.PORT, process.env.HOST, function () {
  console.log(`✨  Server running on ${process.env.HOST}:${process.env.PORT}`);
});
