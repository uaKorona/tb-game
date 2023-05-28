const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
// const io = socketIO(server);

app.get('/', (req, res) => {
    res.send('Server is running');
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
