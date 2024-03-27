// const express = require('express');
const express =  require('express');
// const socketio = require('socket.io');
const { Server } =  require('socket.io');
// const http = require('http');
const { createServer } =  require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
// const PORT = process.env.PORT || 8000;

const router = require('./router');

const app = express();
app.use(cors());
// const server = http.createServer(app);
const httpServer = createServer(app);
// const io = socketio(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         allowedHeaders: ["my-custom-header"],
//         credentials: true
//     }
// });
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        // allowedHeaders: ["my-custom-header"],
        // credentials: true
    }
});

// server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) { return callback(error); }

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});

        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} had left!!!` });
        }
    })
});
app.use(router);
httpServer.listen(8000, () => {
    console.log("server listening on port 8000");
})