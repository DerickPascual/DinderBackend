const express = require('express');
const { createServer } = require('http');
const { listRooms, createRoomId, roomExists } = require('./roomsManager');
const Room = require('./classes/Room');
const { getInitialRestaurants, getAdditionalRestaurants, getRestaurants } = require('./googleApiRestaurantsManager');

const app = express();
const cors = require('cors');
const httpServer = createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        // add localhost for development
        origin: 'https://poetic-smakager-73e06e.netlify.app',
        methods: ['GET', 'POST']
    }
});

app.use(cors({
    // add localhost for development
    origin: 'https://poetic-smakager-73e06e.netlify.app'
}));

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
const socketRooms = {};

io.on("connection", (socket) => {
    console.log("A socket has connected");

    socket.on("join_room", async (roomId, latitude, longitude, radius) => {
        if (!roomId) {
            socket.emit("restauraunts", []);
            return;
        }

        roomId = roomId.toUpperCase();

        if (roomExists(io, roomId)) {
            console.log(`A socket is joining existing room ${roomId}`);

            socket.join(roomId);
            Rooms[roomId].addMember(socket.id);

            console.log(`Socket successfully joined ${roomId}`);
        } else {
            console.log(`A socket is creating a room ${roomId}`);

            // add restauraunts
            const restaurantsObj = await getRestaurants(latitude, longitude, radius);
            const restaurants = restaurantsObj.restaurants;
            
            Rooms[roomId] = new Room(roomId, socket.id, restaurants);

            socket.join(roomId);

            console.log(`Socket successfully started room ${roomId}`);
        }

        socketRooms[socket.id] = roomId;
        socket.emit("restaurants", Rooms[roomId].restaurants);

        // disconnect the socket from its connection room
        io.in(socket.id).socketsLeave(socket.id);
    });

    socket.on('swipe', (index, direction) => {
        const socketRoomId = socketRooms[socket.id];

        if (!socketRoomId) return;

        const socketRoom = Rooms[socketRoomId];

        if (direction === "right") {
            socketRoom.addMemberLike(socket.id, index);
        } else if (direction === "left") {
            socketRoom.addMemberDislike(socket.id, index);
        }

        const updatedLikesAndDislikes = socketRoom.likesAndDislikes;

        // logic to determine if a match was found. If swiped restaurant has the same number of likes as members in the room => match.
        const swipedRestaurantLikesAndDislikes = socketRoom.likesAndDislikes[index].likes;
        const numMembersInRoom = Object.keys(socketRoom.members).length;
        if (numMembersInRoom !== 1 && swipedRestaurantLikesAndDislikes === numMembersInRoom) {
            const restaurant = socketRoom.restaurants[index];

            io.in(socketRoomId).emit("match_found", restaurant);
        }

        // emitting updated likes and dislikes to all sockets in the room for voting modal
        io.in(socketRoomId).emit('likes_and_dislikes', updatedLikesAndDislikes);
    });

    socket.on('undo', (index) => {
        const socketRoomId = socketRooms[socket.id];
        const socketRoom = Rooms[socketRoomId];
        socketRoom.undoMemberSwipe(socket.id, index);

        const updatedLikesAndDislikes = socketRoom.likesAndDislikes;

        io.in(socketRoomId).emit('likes_and_dislikes', updatedLikesAndDislikes);
    });

    socket.on('disconnect', () => {
        console.log("A socket has disconnected.");

        delete socketRooms[socket.id];
        
        // sync the Rooms list with server rooms on deletion
        const serverRooms = io.sockets.adapter.rooms;
        for (const roomId in Rooms) {
            if (!serverRooms.has(roomId)) {
                delete Rooms[roomId];
            }
        }
    });
});

httpServer.on("error", (err) => {
    console.log("Error opening server");
});

httpServer.listen(process.env.PORT || 3500, () => {
    console.log("Server listening on port 3500");
});