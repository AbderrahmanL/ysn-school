const mongoose = require('mongoose');

const teachingStaffSchema = new mongoose.Schema({
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
  subject: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
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
  resume: {
    type: String,
    required: true,
  },
});

const TeachingStaff = mongoose.model('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
