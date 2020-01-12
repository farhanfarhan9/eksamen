const express = require('express');

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', function (req, res) {
  const version = '0.1.0';
  res.json({version});
});

app.use('/api', router);

module.exports = app;
