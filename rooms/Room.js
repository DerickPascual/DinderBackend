class Room {
    constructor(roomId, initialMember, restaurants) {
        this.roomId = roomId;
        this.restaurants = restaurants;
        this.likesAndDislikesTemplate = [];
    
        for (let i = 0; i < this.restaurants.length; i++) {
            this.likesAndDislikesTemplate.push({ likes: 0, dislikes: 0});
        }

        this.members = {};
        this.members[initialMember] = JSON.parse(JSON.stringify(this.likesAndDislikesTemplate));
        this.likesAndDislikes = JSON.parse(JSON.stringify(this.likesAndDislikesTemplate));
    }

    getRoomId() {
        return this.roomId;
    }

    addMember(member) {
        this.members[member] = JSON.parse(JSON.stringify(this.likesAndDislikesTemplate));
    }

    getMembers() {
        return this.members;
    }

    addMemberLike(member, index) {
        this.members[member][index].likes++;
        this.likesAndDislikes[index].likes++;
    }

    addMemberDislike(member, index) {
        this.members[member][index].dislikes++;
        this.likesAndDislikes[index].dislikes++;
    }

    setRestaurants(restaurants) {
        this.restaurants = restaurants;

        return this.restaurants;
    }

    getRestaurants() {
        return this.restaurants;
    }

    addLike(restaurant) {
        this.likesAndDislikes[restaurant]++;

        if (this.likesAndDislikes[restaurant] === this.members.length) {
            return "match";
        }
    }

    getLikes() {
        return this.likesAndDislikes;
    }
}

module.exports = Room;