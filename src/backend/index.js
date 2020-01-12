const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use('/api', routes);

app.use(function (err, req, res, next) {
  const statusCode = err.statusCode || 500;
  if (err.message && err.statusCode) {
    res.status(statusCode).json({error: true, message: err.message});
  } else {
    console.error(err.stack);
    next(err);
  }
});

module.exports = app;
