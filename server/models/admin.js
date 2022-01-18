/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "john@gmail.com"
 *         password:
 *           type: string
 *           example: "12345678"
 
 *         schoolName:
 *           type: string
 *           example: "ABC School"

 *         name:
 *           type: string
 *           example: "John"

 *         phoneNumber:
 *           type: string
 *           example: "1234567890"

 *         address:
 *           type: string
 *           example: "ABC Road, XYZ City"

 *         dateOfJoining:
 *           type: string
 *           example: "2020-01-01"

 */
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    maxlength: [30, 'Email cannot be more than 30 characters.'],
    required: [true, 'Email is required.'],
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 'Enter a valid email'],
    unique: [true, 'User already Exists'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  schoolName: {
    type: String,
    required: [true, 'School Name is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone Number is required'],
    length: [10, 'Enter valid Phone Number'],
  },
  address: {
    type: String,
  },
  dateOfJoining: {
    type: Date,
    required: [true, 'Date of Joining is required'],
  },
});
adminSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { userId: this._id, name: this.name, email: this.email, role: 'ADMIN' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return token;
};
adminSchema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

module.exports = mongoose.model('Admin', adminSchema);
