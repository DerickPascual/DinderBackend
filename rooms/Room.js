class Room {
    constructor(roomId, initialMember) {
        this.roomId = roomId;
        this.members = [initialMember];
        this.restaurants = []
        this.likes = {}
    }

    getRoomId() {
        return this.roomId;
    }

    addMember(member) {
        this.members = [...this.members, member];
    }

    getMembers() {
        return this.members;
    }

    setRestaurants(restaurants) {
        this.restaurants = restaurants;

        for (const restaurant of this.restaurants) {
            this.likes[restaurant] = 0;
        }

        return this.restaurants;
    }

    getRestaurants() {
        return this.restaurants;
    }

    addLike(restaurant) {
        this.likes[restaurant]++;

        if (this.likes[restaurant] === this.members.length) {
            return "match";
        }
    }

    getLikes() {
        return this.likes;
    }
}

module.exports = Room;