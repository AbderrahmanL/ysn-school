const mongoose = require('mongoose');

const teachingStaffSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  fullName: { type: String, required: true },
  personalIdNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  personalAddress: { type: String, required: true },
  subjectTaught: { type: String, required: true },
  salary: { type: Number, required: true },
  isPaid: { type: Boolean, required: true },
  personalIdCopy: { type: Buffer, required: true },
  resume: { type: Buffer, required: true },
});

const TeachingStaff = mongoose.model('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
