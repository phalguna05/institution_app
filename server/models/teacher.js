/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "john@gmail.com"
 *         password:
 *           type: string
 *           example: "12345678"
 *         name:
 *           type: string
 *           example: "John"

 *         phoneNumber:
 *           type: string
 *           example: "1234567890"

 *         designation:
 *           type: string
 *           example: "Teacher"
 *         schoolName:
 *           type: string
 *           example: "ABC School"
 *         subjectsThought:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               subjectName:
 *                 type: string
 *                 example: "Science"
 *         assignedClasses:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               className:
 *                 type: string
 *                 example: "1"
 *         
 *         classesTeaching:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               className:
 *                 type: string
 *                 example: "1"
 *         dateOfJoining:
 *           type: string
 *           example: "2020-01-01"

 */

const teacherSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  schoolName: {
    type: String,
    required: [true, 'School Name is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone Number is required'],
    length: [10, 'Enter valid Phone Number'],
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    enum: ['Teacher', 'Principal', 'Vice Principal', 'PET'],
  },
  subjectsThought: [
    {
      subjectName: {
        type: String,
        required: [true, 'Subjects Thought is required'],
        enum: [
          'First Language',
          'Second Language',
          'Third Language',
          'Math',
          'Science',
          'Social Studies',
          'Computer',
          'Art',
          'Music',
          'Dance',
          'Physical Education',
          'Health',
          'Home Economics',
          'Computer Education',
        ],
      },
    },
  ],
  assignedClasses: [
    {
      className: {
        type: String,
        required: [true, 'Class Name is required'],
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      },
    },
  ],
  classesTeaching: [
    {
      className: {
        type: String,
        required: [true, 'Class Name is required'],
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      },
    },
  ],
  dateOfJoining: {
    type: Date,
    required: [true, 'Date of Joining is required'],
  },
});

teacherSchema.plugin(autoIncrement.plugin, {
  model: 'Teacher',
  field: 'EmpId',
  startAt: 100,
  incrementBy: 1,
});
teacherSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});
teacherSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { userId: this._id, name: this.name, email: this.email, role: 'ADMIN' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return token;
};
teacherSchema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};
module.exports = mongoose.model('Teacher', teacherSchema);
