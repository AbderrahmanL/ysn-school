const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

// Connect to MongoDB
//db~
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connected'));

// Set up routes
const teachingStaffRouter = require('./routers/teachingStaffRouter');
const studentRouter = require('./routers/studentRouter');
const authRoutes = require('./routers/authRouter')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/teaching-staff', authMiddleware, teachingStaffRouter);
app.use('/api/v1/students', authMiddleware, studentRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
