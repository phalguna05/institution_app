const { UnauthorizedError } = require('../errors');
const jwt = require('jsonwebtoken');
const authMiddleware = (role) => {
  return (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new UnauthorizedError('No Auth Token');
    }
    const token = authorization.split(' ')[1];

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
      throw new UnauthorizedError('Invalid Token');
    }
    if (user.role !== role) {
      throw new UnauthorizedError(
        'You are unauthorized to access this resource'
      );
    }
    req.user = user;
    next();
  };
};
module.exports = authMiddleware;
