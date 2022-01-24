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
    res.status(StatusCodes.OK).send({ access_token: token });
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
    res.status(StatusCodes.CREATED).send({ access_token: token });
  } catch (err) {
    throw new CustomAPIError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const GetAllAdmins = async (req, res) => {
  const admins = await Admin.find({}).select('-password');
  res.status(StatusCodes.OK).send(admins);
};
// Get Admin By Id
const GetAdminById = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findById(id).select('-password');
  if (!admin) {
    res.status(StatusCodes.NOT_FOUND).send({ error: 'Admin not found' });
  } else {
    res.status(StatusCodes.OK).send(admin);
  }
};
// Update Admin By Id
const UpdateAdmin = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findByIdAndUpdate(id, req.body, {
    new: true,
  }).select('-password');
  if (!admin) {
    res.status(StatusCodes.NOT_FOUND).send({ error: 'Admin not found' });
  } else {
    res.status(StatusCodes.OK).send(admin);
  }
};
// Delete Admin By Id
const DeleteAdmin = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findByIdAndDelete(id).select('-password');
  if (!admin) {
    res.status(StatusCodes.NOT_FOUND).send({ error: 'Admin not found' });
  } else {
    res.status(StatusCodes.OK).send(admin);
  }
};
module.exports = {
  Login,
  Signup,
  GetAllAdmins,
  GetAdminById,
  UpdateAdmin,
  DeleteAdmin,
};
