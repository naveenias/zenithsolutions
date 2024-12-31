const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS with specific configuration
app.use(cors({
    origin: 'https://www.zenithsolutionz.in', // Replace with your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
    credentials: true, // Include credentials if needed
}));

// Handle preflight (OPTIONS) requests for all routes
app.options('*', cors());

// Middleware to parse JSON requests
app.use(express.json());

// Load email routes
const emailroute = require('./routes/email');
app.use('/api/email', emailroute);

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
