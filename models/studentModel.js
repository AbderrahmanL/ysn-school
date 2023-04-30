const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  fullName: { type: String, required: true },
  personalIdNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  personalAddress: { type: String, required: true },
  hasPaidFees: { type: Boolean, required: true },
  personalIdCopy: { type: Buffer, required: true },
  degree: { type: Buffer, required: true },
  remainingFees: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
