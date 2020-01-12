const AuthorizationError = require('../errors/AuthorizationError');

const middlewares = {};

middlewares.verifyToken = function(req, res, next) {
  if (req.hasOwnProperty('cookies') && 'token' in req.cookies) {
    const { token } = req.cookies;
    if(token == '123') {
      next();
    } else {
      throw new AuthorizationError("Invalid credentials");
    }
  } else {
    throw new AuthorizationError("Invalid credentials");
  }
}

module.exports = middlewares;
