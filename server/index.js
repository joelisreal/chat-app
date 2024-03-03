const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// const PORT = process.env.PORT || 8000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
});
app.use(router);
server.listen(8000, () => {
    console.log("server listening on port 8000");
})