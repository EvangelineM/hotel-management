const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Fetch all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
