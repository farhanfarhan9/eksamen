import express from 'express';
import chalk from 'chalk';
import path from 'path';

const app = express();
const success = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

app.get('/api', (req, res) => res.json({version: '0.1.0'}));
app.use('/', express.static(path.resolve('dist')));

app.listen(process.env.APP_PORT, function () {
  console.log(success(`✨ Eksamen 🏃‍♂️ on ${process.env.APP_PORT}`));
});
