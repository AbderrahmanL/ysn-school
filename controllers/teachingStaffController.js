const TeachingStaff = require('../models/teachingStaffModel');
const { handleErrorResponse } = require('../helpers/errorHandler');

// Get all teaching staff
const getAllTeachingStaff = (req, res) => {
  TeachingStaff.find()
    .then((teachingStaff) => {
      res.json(teachingStaff);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Get a specific teaching staff member by ID
const getTeachingStaffById = (req, res) => {
  TeachingStaff.findById(req.params.id)
    .then((teachingStaff) => {
      if (!teachingStaff) {
        return res.status(404).json({ error: 'Teaching staff member not found' });
      }
      res.json(teachingStaff);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Get Teaching Staff by full name
const getTeachingStaffByFullName = (req, res) => {
    const { firstName, lastName } = req.query;
  
TeachingStaff.find({ firstName, lastName })
    .then((teachingStaff) => {
    res.json(teachingStaff);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};
  
// Get Teaching Staff by personal ID number
const getTeachingStaffByPersonalIdNumber = (req, res) => {
    const { personalIdNumber } = req.query;
  
TeachingStaff.find({ personalIdNumber })
    .then((teachingStaff) => {
    res.json(teachingStaff);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};
  
// Get Teaching Staff by email
const getTeachingStaffByEmail = (req, res) => {
    const { email } = req.query;
  
TeachingStaff.find({ email })
    .then((teachingStaff) => {
    res.json(teachingStaff);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};
  
// Get Teaching Staff by phone number
const getTeachingStaffByPhoneNumber = (req, res) => {
    const { phoneNumber } = req.query;
  
TeachingStaff.find({ phoneNumber })
    .then((teachingStaff) => {
    res.json(teachingStaff);
    })
    .catch((error) => {
    handleErrorResponse(res, 500, error);
    });
};

// Create a new teaching staff member
const createTeachingStaff = (req, res) => {
  const teachingStaff = new TeachingStaff(req.body);
  teachingStaff
    .save()
    .then((savedTeachingStaff) => {
      res.status(201).json(savedTeachingStaff);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Update a specific teaching staff member by ID
const updateTeachingStaff = (req, res) => {
  TeachingStaff.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedTeachingStaff) => {
      if (!updatedTeachingStaff) {
        return res.status(404).json({ error: 'Teaching staff member not found' });
      }
      res.json(updatedTeachingStaff);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

// Delete a specific teaching staff member by ID
const deleteTeachingStaff = (req, res) => {
  TeachingStaff.findByIdAndDelete(req.params.id)
    .then((deletedTeachingStaff) => {
      if (!deletedTeachingStaff) {
        return res.status(404).json({ error: 'Teaching staff member not found' });
      }
      res.sendStatus(204);
    })
    .catch((error) => {
      handleErrorResponse(res, 500, error);
    });
};

module.exports = {
  getAllTeachingStaff,
  getTeachingStaffById,
  getTeachingStaffByFullName,
  getTeachingStaffByPersonalIdNumber,
  getTeachingStaffByEmail,
  getTeachingStaffByPhoneNumber,
  createTeachingStaff,
  updateTeachingStaff,
  deleteTeachingStaff,
};
