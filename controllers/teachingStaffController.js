const TeachingStaff = require('../models/teachingStaffModel');

// Controller methods for teaching staff
// Implement your CRUD operations here

// Get all teaching staff
const getAllTeachingStaff = async (req, res) => {
  try {
    const teachingStaff = await TeachingStaff.find();
    res.json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a specific teaching staff member by ID
const getTeachingStaffById = async (req, res) => {
  try {
    const teachingStaff = await TeachingStaff.findById(req.params.id);
    if (!teachingStaff) {
      return res.status(404).json({ error: 'Teaching staff not found' });
    }
    res.json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new teaching staff member
const createTeachingStaff = async (req, res) => {
  try {
    const teachingStaff = new TeachingStaff(req.body);
    await teachingStaff.save();
    res.status(201).json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a specific teaching staff member by ID
const updateTeachingStaff = async (req, res) => {
  try {
    const teachingStaff = await TeachingStaff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!teachingStaff) {
      return res.status(404).json({ error: 'Teaching staff not found' });
    }
    res.json(teachingStaff);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a specific teaching staff member by ID
const deleteTeachingStaff = async (req, res) => {
  try {
    const teachingStaff = await TeachingStaff.findByIdAndDelete(req.params.id);
    if (!teachingStaff) {
      return res.status(404).json({ error: 'Teaching staff not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllTeachingStaff,
  getTeachingStaffById,
  createTeachingStaff,
  updateTeachingStaff,
  deleteTeachingStaff,
};
