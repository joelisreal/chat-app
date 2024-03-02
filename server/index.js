const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
server.listen(8000, () => {
    console.log("server listening on port 8000");
})