const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
};

const createRoomId = (io) => {
    let possibleRoomId = generateRandomString();

    while (io.sockets.adapter.rooms.has(possibleRoomId)) {
        possibleRoomId = generateRandomString();
    }

    return possibleRoomId;
}

const roomExists = (io, roomId) => {
    const roomsIter = io.sockets.adapter.rooms.keys();
    for (existingRoomId of roomsIter) {
        if (roomId === existingRoomId) return true;
    }
    return false;
}


const listRooms = (io) => {
    const roomsIter = io.sockets.adapter.rooms.keys();

    let roomNum = 1;
    for (roomId of roomsIter) {
        console.log(`Room ${roomNum}: ${roomId}`);
        roomNum++;
    }
}

module.exports = { listRooms, createRoomId, roomExists };
