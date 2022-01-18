const { StatusCodes } = require('http-status-codes');
const { CustomAPIError } = require('../errors');

// eslint-disable-next-line no-unused-vars
const errorHandler = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: err.message,
  });
};
module.exports = errorHandler;
