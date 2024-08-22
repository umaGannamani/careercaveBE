// src/routes/students.js
const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, availability, area_of_interest } = req.body;
  const query = 'INSERT INTO students (name, availability, area_of_interest) VALUES (?, ?, ?)';
  db.run(query, [name, availability, area_of_interest], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to create student' });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;
