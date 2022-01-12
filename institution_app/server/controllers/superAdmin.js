const SuperAdmin = require('../models/superAdmin');
const { StatusCodes } = require('http-status-codes');
const { UnauthorizedError, CustomAPIError } = require('../errors');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const superAdmin = await SuperAdmin.findOne({ email });
  if (!superAdmin) {
    throw new UnauthorizedError('User Not Found');
  } else {
    if (await superAdmin.validatePassword(password)) {
      const token = superAdmin.generateAuthToken();
      res.status(StatusCodes.OK).send({ access_token: token });
    } else {
      throw new UnauthorizedError('Invalid Credentials');
    }
  }
};

//To be removed
const Signup = async (req, res) => {
  const { email } = req.body;
  const superAdmin = await SuperAdmin.findOne({ email });
  if (superAdmin) {
    throw new UnauthorizedError('User Already Exists');
  }
  try {
    const newSuperAdmin = await SuperAdmin.create({ ...req.body });
    const token = newSuperAdmin.generateAuthToken();
    res.status(StatusCodes.CREATED).send({ access_token: token });
  } catch (err) {
    throw new CustomAPIError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = { Login, Signup };
