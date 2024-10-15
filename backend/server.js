const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Set CORS options
const corsOptions = {
  origin: '*', // Replace with your front-end URL
};

app.use(cors(corsOptions));
app.use(express.json());

const hotelRoutes = require('./routes/hotels');
app.use('/hotels', hotelRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Basic route to test
app.get('/', (req, res) => {
  res.send('Welcome to Serenity Suites API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
