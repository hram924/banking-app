const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = 3000; 

// Use CORS middleware to allow cross-origin requests
app.use(cors({
    origin: 'http://localhost:8080', // Allow requests from your backend's origin
    methods: ['GET', 'POST'], // Specify allowed methods
}));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Frontend server is running on http://localhost:${PORT}`);
});
