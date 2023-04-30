const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  personalIdNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  personalIdCopy: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  remainingFees: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
