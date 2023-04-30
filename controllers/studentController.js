const Student = require('../models/studentModel');
const { handleErrorResponse } = require('../helpers/errorHandler');

// Get all students
const getAllStudents = (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Get a specific student by ID
const getStudentById = (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Get Student by full name
const getStudentByFullName = (req, res) => {
    const { firstName, lastName } = req.query;
  
  Student.find({ firstName, lastName })
    .then((students) => {
    res.json(students);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};

// Get Student by personal ID number
const getStudentByPersonalIdNumber = (req, res) => {
    const { personalIdNumber } = req.query;

  Student.find({ personalIdNumber })
    .then((students) => {
    res.json(students);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};

// Get Student by email
const getStudentByEmail = (req, res) => {
    const { email } = req.query;

  Student.find({ email })
    .then((students) => {
    res.json(students);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};

// Get Student by phone number
const getStudentByPhoneNumber = (req, res) => {
    const { phoneNumber } = req.query;

  Student.find({ phoneNumber })
    .then((students) => {
    res.json(students);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};

// Create a new student
const createStudent = (req, res) => {
  const student = new Student(req.body);
  student
    .save()
    .then((savedStudent) => {
      res.status(201).json(savedStudent);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Update a specific student by ID
const updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedStudent) => {
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(updatedStudent);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Delete a specific student by ID
const deleteStudent = (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((deletedStudent) => {
      if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.sendStatus(204);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentByFullName,
  getStudentByPersonalIdNumber,
  getStudentByEmail,
  getStudentByPhoneNumber,
  createStudent,
  updateStudent,
  deleteStudent,
};
