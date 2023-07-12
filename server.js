const express = require('express');
const { createServer } = require('http');
const { Server } = require("socket.io");
const { listRooms, createRoomId, roomExists } = require('./rooms/rooms');
const Room = require('./rooms/Room');

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

const Rooms = {};

const mockRestaurants = require('./mock_restaurants/restauraunts');

io.on("connection", (socket) => {
    console.log("A socket has connected");

    socket.on("join_room", (roomId) => {
        roomId = roomId.toUpperCase();

        if (roomExists(io, roomId)) {
            console.log(`A socket is joining existing room ${roomId}`);

            socket.join(roomId);
            Rooms[roomId].addMember(socket.id);

            console.log(`Socket successfully joined ${roomId}`);
            console.log(`Room Members: ${Rooms[roomId].getMembers()}`);
        } else {
            console.log(`A socket is creating a room ${roomId}`);

            Rooms[roomId] = new Room(roomId, socket.id);
            socket.join(roomId);

            // add restauraunts
            Rooms[roomId].setRestaurants(mockRestaurants);

            console.log(`Socket successfully started room ${roomId}`);
        }

        socket.emit("restaurants", Rooms[roomId].restaurants);

        // disconnect the socket from its connection room
        io.in(socket.id).socketsLeave(socket.id);
    });

    socket.on('disconnect', () => {
        console.log("A socket has disconnected.");
        
        // sync the Rooms list with server rooms on deletion
        const serverRooms = io.sockets.adapter.rooms;
        for (const roomId in Rooms) {
            if (!serverRooms.has(roomId)) {
                delete Rooms[roomId];
            }
        }
    });

    // io.disconnectSockets();
});

httpServer.on("error", (err) => {
    console.log("Error opening server");
});

httpServer.listen(3500, () => {
    console.log("Server listening on port 3500");
});