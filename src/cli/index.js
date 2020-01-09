require('dotenv').config();
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('../../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

// Initialize compiler object for web app.
const compiler = webpack(webpackConfig);
// End of compiler object

// CLI for development purpose.
console.log('🏁  CLI App Running at %s...');
console.log('⚙️   Trying to wake up dev server ...');

const server = new WebpackDevServer(compiler, {
  before: (app, server, compiler) => {

    app.use(bodyParser.json());

    /* Fake Authentication Router */
    app.post('/api/auth/information', (req, res) => {
      const authenticated = req.body.authenticated;

      if (authenticated) {
        res.json({error: false});
      } else {
        res.status(401).json({error: true, message: 'Authorization Failed.'});
      }
    });

    app.post('/api/auth/login', (req, res) => {
      if (req.body.password !== 'password') {
        res.status(401).json({error: true, message: 'Invalid credentials.'});
      } else {
        res.json({error: false, message: 'Successfully authenticated.'});
      }
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
