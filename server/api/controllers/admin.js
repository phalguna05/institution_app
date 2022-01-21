const { StatusCodes } = require('http-status-codes');
const Admin = require('../../models/admin');

const { CustomAPIError, UnauthorizedError } = require('../../errors');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new UnauthorizedError('User Not Found');
  } else if (await admin.validatePassword(password)) {
    const token = admin.generateAuthToken();
    res.status(StatusCodes.OK).send({ access_token: token });
  } else {
    throw new UnauthorizedError('Invalid Credentials');
  }
};
const Signup = async (req, res) => {
  const { email } = req.body;
  const admin = await Admin.findOne({ email });
  if (admin) {
    throw new UnauthorizedError('User Already Exists');
  }
  try {
    const newAdmin = await Admin.create({ ...req.body });
    const token = newAdmin.generateAuthToken();
    res.status(StatusCodes.OK).send({ access_token: token });
  } catch (err) {
    throw new CustomAPIError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = { Login, Signup };
