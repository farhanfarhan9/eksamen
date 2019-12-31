const chokidar = require('chokidar');
const chalk = require('chalk');
const { spawn } = require('child_process');
const _ = require('lodash');
const path = require('path');
const parcel = require('parcel-bundler');

// cli-app constants
const appEntryPoint = path.resolve('src/index.js');
let appProcess = undefined;

const uiBundler = new parcel(path.resolve('src/templates/index.html'), {watch: true, autoInstall: false});

async function cli() {
  console.log(chalk.green.bold("🏁 Starting file watcher.."));
  console.log(chalk.green.bold("🏁 Start bundling UI"));
  await uiBundler.bundle();
  let appProcess = undefined;
  chokidar.watch(path.resolve('src'), {
    ignored: /cli.js/,
    persistent: true,
  }).on('all', _.debounce(async (event, path) => {
    console.log(chalk.keyword('orange')('🔍 Detecting change ...'));
    appProcess = spawn('node', [appEntryPoint], { stdio: 'inherit' });
  }, 1000));
}

module.exports = cli;
