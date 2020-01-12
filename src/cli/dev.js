require('dotenv').config();

const http = require('http');
const app = require('../server');

const server = http.createServer(app);

server.listen(process.env.BACKEND_PORT, function () {
  console.log(`Server listening on port ${process.env.BACKEND_PORT}`);
});
