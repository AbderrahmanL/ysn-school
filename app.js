const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/training-center', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up routes
const teachingStaffRouter = require('./routers/teachingStaffRouter');
const studentRouter = require('./routers/studentRouter');

app.use('/api/v1/teaching-staff', teachingStaffRouter);
app.use('/api/v1/students', studentRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
