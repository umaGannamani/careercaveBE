// src/routes/bookings.js
const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', (req, res) => {
  const { student_id, mentor_id } = req.body;
  const query = 'INSERT INTO bookings (student_id, mentor_id) VALUES (?, ?)';
  db.run(query, [student_id, mentor_id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to create booking' });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;
