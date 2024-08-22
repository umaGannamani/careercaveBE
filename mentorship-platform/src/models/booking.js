// src/models/booking.js
const db = require('../db');

const createBookingTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER,
      mentor_id INTEGER,
      FOREIGN KEY(student_id) REFERENCES students(id),
      FOREIGN KEY(mentor_id) REFERENCES mentors(id)
    )
  `;
  db.run(query);
};

module.exports = {
  createBookingTable
};
