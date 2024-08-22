// src/models/mentor.js
const db = require('../db');

const createMentorTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS mentors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      availability TEXT NOT NULL,
      areas_of_expertise TEXT NOT NULL,
      is_premium INTEGER DEFAULT 0
    )
  `;
  db.run(query);
};

const getAllMentors = (callback) => {
  db.all('SELECT * FROM mentors', callback);
};

module.exports = {
  createMentorTable,
  getAllMentors
};
