const express = require('express');
const app = express();
// const io = socketIO(server);

// Serve static files for the SPA
app.use(express.static('public'));

// API routes
app.get('/api', (req, res) => {
    res.json({ message: 'API endpoint' });
});

// Serve the SPA for all other routes
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server on port 80
const server = app.listen(80, () => {
    console.log('Server started on port 80');
});
