const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin_schema = new mongoose.Schema({
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
admin_schema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
admin_schema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { userId: this._id, name: this.name, email: this.email, role: 'ADMIN' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return token;
};
admin_schema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

module.exports = mongoose.model('Admin', admin_schema);
