
class Level {
    constructor({
        currentRoom
    }) {
        this.currentRoom = currentRoom;
    }

    update() {
        this.currentRoom.load();
    }

    switchRooms(newRoom) {
        this.currentRoom = newRoom;
    }
}