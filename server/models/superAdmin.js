/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/**
 * @swagger
 * components:
 *   schemas:
 *     SuperAdmin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "john@gmail.com"
 *         password:
 *           type: string
 *           example: "12345678"
 *
 */
const superAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
  },
});
superAdminSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
superAdminSchema.methods.generateAuthToken = function () {
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
superAdminSchema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};
module.exports = mongoose.model('SuperAdmin', superAdminSchema);
