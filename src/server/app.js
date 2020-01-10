const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.json());

app.post('/api/auth/login', (req, res) => {
});

app.delete('/api/auth/logout', (req, res) => {
});

app.post('/api/auth/information', (req, res) => {
});

// websocket here.

app.get('*', function(req, res) {
  res.send('Hi');
});

module.exports = app;