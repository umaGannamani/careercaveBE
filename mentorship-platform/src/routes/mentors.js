// src/routes/mentors.js
const express = require('express');
const { getAllMentors } = require('../models/mentor');

const router = express.Router();

router.get('/', (req, res) => {
  getAllMentors((err, mentors) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch mentors' });
    }
    res.json({ mentors });
  });
});

module.exports = router;
