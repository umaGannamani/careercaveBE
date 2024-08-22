// src/models/student.js
const db = require('../db');

const createStudentTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      availability TEXT NOT NULL,
      area_of_interest TEXT NOT NULL
    )
  `;
  db.run(query);
};

module.exports = {
  createStudentTable
};
