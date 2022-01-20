const { StatusCodes } = require('http-status-codes');
const SuperAdmin = require('../../models/superAdmin');
const Admin = require('../../models/admin');
const { UnauthorizedError, CustomAPIError } = require('../../errors');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const superAdmin = await SuperAdmin.findOne({ email });
  if (!superAdmin) {
    throw new UnauthorizedError('User Not Found');
  } else if (await superAdmin.validatePassword(password)) {
    const token = superAdmin.generateAuthToken();
    res.header('Authorization', `Bearer ${token}`);
    res.status(StatusCodes.OK).send({ email: superAdmin.email });
  } else {
    throw new UnauthorizedError('Invalid Credentials');
  }
};

// To be removed
const Signup = async (req, res) => {
  const { email } = req.body;
  const superAdmin = await SuperAdmin.findOne({ email });
  if (superAdmin) {
    throw new UnauthorizedError('User Already Exists');
  }
  try {
    const newSuperAdmin = await SuperAdmin.create({ ...req.body });
    const token = newSuperAdmin.generateAuthToken();
    res.header('Authorization', `Bearer ${token}`);
    res.status(StatusCodes.CREATED).send({ email: superAdmin.email });
  } catch (err) {
    throw new CustomAPIError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const GetAllAdmins = async (req, res) => {
  const admins = await Admin.find({}).select('-password');
  res.status(StatusCodes.OK).send(admins);
};

const GetAdminById = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findById(id).select('-password');
  res.status(StatusCodes.OK).send(admin);
};

module.exports = { Login, Signup, GetAllAdmins, GetAdminById };
