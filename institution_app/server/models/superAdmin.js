const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const super_admin_schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
  },
});
super_admin_schema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
super_admin_schema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      userId: this._id,
      name: this.name,
      email: this.email,
      role: 'SUPER ADMIN',
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return token;
};
super_admin_schema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};
module.exports = mongoose.model('SuperAdmin', super_admin_schema);
