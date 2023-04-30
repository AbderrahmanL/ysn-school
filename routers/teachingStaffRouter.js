const express = require('express');
const router = express.Router();

const teachingStaffController = require('../controllers/teachingStaffController');

// Teaching Staff routes
router.get('/', teachingStaffController.getAllTeachingStaff);
router.get('/:id', teachingStaffController.getTeachingStaffById);
router.post('/', teachingStaffController.createTeachingStaff);
router.put('/:id', teachingStaffController.updateTeachingStaff);
router.delete('/:id', teachingStaffController.deleteTeachingStaff);

module.exports = router;
