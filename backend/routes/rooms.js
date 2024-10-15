// routes/rooms.js

const express = require('express');
const router = express.Router();
const rooms = require('../data/rooms');

// Get all rooms
router.get('/', (req, res) => {
  res.json(rooms);
});

// Get room by ID
router.get('/:id', (req, res) => {
  const room = rooms.find(r => r.id === parseInt(req.params.id));
  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }
  res.json(room);
});

module.exports = router;
