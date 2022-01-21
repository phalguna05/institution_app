const { StatusCodes } = require('http-status-codes');
const { UnauthorizedError, CustomAPIError } = require('../../errors');
const Admin = require('../../models/admin');
const Teacher = require('../../models/teacher');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const teacher = await Teacher.findOne({ email });
  if (!teacher) {
    throw new UnauthorizedError('User Not Found');
  }
  if (await teacher.validatePassword(password)) {
    const token = teacher.generateAuthToken();
    res.status(StatusCodes.OK).send({ access_token: token });
  }
  throw new UnauthorizedError('Invalid Credentials');
};
const Signup = async (req, res) => {
  const { email } = req.body;
  const teacher = await Teacher.findOne({ email });
  if (teacher) {
    throw new UnauthorizedError('User Already Exists');
  }
  try {
    const newTeacher = await Teacher.create({ ...req.body });
    const token = newTeacher.generateAuthToken();
    res.status(StatusCodes.OK).send({ access_token: token });
  } catch (err) {
    throw new CustomAPIError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
const GetTeachers = async (req, res) => {
  const { schoolName } = req.body;
  const { userId } = req.user;
  const admin = await Admin.findOne({ _id: userId });
  if (admin.schoolName !== schoolName) {
    throw new UnauthorizedError('You do not have access to this school');
  }
  const teachers = await Teacher.find({ schoolName }).select('-password');
  res.status(StatusCodes.OK).send(teachers);
};
module.exports = { Login, Signup, GetTeachers };
