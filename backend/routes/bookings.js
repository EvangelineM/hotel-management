// routes/bookings.js

const express = require('express');
const router = express.Router();
const rooms = require('../data/rooms');

let bookings = []; // In-memory booking data

// Create a new booking
router.post('/', (req, res) => {
  const { roomId, guestName, date } = req.body;
  const room = rooms.find(r => r.id === roomId);

  if (!room || !room.available) {
    return res.status(400).json({ error: 'Room not available' });
  }

  room.available = false; // Mark the room as booked
  bookings.push({ roomId, guestName, date });
  res.json({ success: 'Room booked successfully!' });
});

// View all bookings
router.get('/', (req, res) => {
  res.json(bookings);
});

module.exports = router;
