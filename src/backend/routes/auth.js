const AuthorizationError = require('../errors/AuthorizationError');

const authentication = {};

authentication.login = (req, res) => {
  const { username, password } = req.body;
  let statusCode = 401;
  let error = true;
  let message = 'Invalid credentials';
  if (username === 'katon' && password === 'atmaja') {
    error = false;
    message = 'Authenticated.';
    statusCode = 200;
  } else {
    throw new AuthorizationError("Invalid credentials.");
  }
  res.status(statusCode).json({error, message});
};

authentication.information = (req, res) => {
  res.status(200).json({error: false, user: {username: 'test'}});
};

module.exports = authentication;
