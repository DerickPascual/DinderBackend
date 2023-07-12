const express = require('express');
const { createServer } = require('http');
const { Server } = require("socket.io");
const { listRooms, createRoomId, roomExists } = require('./rooms/rooms');

const app = express();
const cors = require('cors');
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

app.use(express.json());

app.get('/api/new-room-id', (req, res) => {
    const roomId = createRoomId(io);

    res.status(200).json({ roomId: roomId });
});

app.post('/api/check-room-id', (req, res) => {
    const { roomId } = req.body;

    if (roomExists(io, roomId)) {
        res.status(200).json({ message: "valid" });
        return;
    }

    res.status(403).json({ message: 'invalid' });
});

io.on("connection", (socket) => {
    console.log("A socket has connected");

    socket.on("join_room", (roomId) => {
        console.log(`A socket is joining room ${roomId}`);
        socket.join(roomId);
        console.log(`Socket successfully joined ${roomId}`);
        io.in(socket.id).socketsLeave(socket.id);
        listRooms(io);
    });

    socket.on('disconnect', () => {
        console.log("A socket has disconnected.");
    });

    listRooms(io);
    // io.disconnectSockets();
});

httpServer.on("error", (err) => {
    console.log("Error opening server");
});

httpServer.listen(3500, () => {
    console.log("Server listening on port 3500");
});