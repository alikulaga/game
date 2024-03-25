
class Level {
    constructor({
        currentRoom
    }) {

        this.currentRoom = currentRoom
    }

    update() {
        this.currentRoom.load();

        this.checkExits();
    }


    checkExits() {
        if (player.position.y < -1 * player.height()) {
            this.currentRoom = this.currentRoom.RoomsListNESW[0]
            player.position.y = canvas.height - player.height()
        } else if (player.position.x > canvas.width) {
            this.currentRoom = this.currentRoom.RoomsListNESW[1]
            player.position.x = 0
        } else if(player.position.y > canvas.height - 80) {
           
            player.position.y = 0
            this.currentRoom = this.currentRoom.RoomsListNESW[2]
            
        } else if (player.position.x < -1 * player.width()) {
            this.currentRoom = this.currentRoom.RoomsListNESW[3]
            player.position.x = canvas.width - player.width()
        }


        
        
    }

    
}