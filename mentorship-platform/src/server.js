// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mentorRoutes = require('./routes/mentors');
const studentRoutes = require('./routes/students');
const bookingRoutes = require('./routes/bookings');
const { createMentorTable } = require('./models/mentor');
const { createStudentTable } = require('./models/student');
const { createBookingTable } = require('./models/booking');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Create tables
createMentorTable();
createStudentTable();
createBookingTable();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Mentorship Platform API!');
});

// Routes
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);
app.use('/bookings', bookingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
