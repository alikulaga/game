
class Level {
    constructor({
        currentRoom,
        background,
    }) {

        this.currentRoom = currentRoom
        this.background = background
    }

    update() {
        this.background.update();
        
        if (leftClick && !Game.paused) {
            player.attacking = true
        }

        if (Epressed) {
            Game.paused = !Game.paused
        }

        player.update();
        weapon.update()
        this.currentRoom.load();
        
        

        this.checkExits()

        
        
        
    }


    checkExits() {
        if (player.position.y < -1 * player.height()) {
            this.currentRoom = this.currentRoom.RoomsListNESW[0]
            player.position.y = canvas.height - player.height()
            player.projectileList = [null]

        } else if (player.position.x > canvas.width) {
            this.currentRoom = this.currentRoom.RoomsListNESW[1]
            player.position.x = 0;
            player.projectileList = [null]

        } else if(player.position.y > canvas.height - 80) {
            player.position.y = 0
            this.currentRoom = this.currentRoom.RoomsListNESW[2]
            player.projectileList = [null]
            
        } else if (player.position.x < -1 * player.width()) {
            this.currentRoom = this.currentRoom.RoomsListNESW[3];
            player.position.x = canvas.width - player.width();
            player.projectileList = [null]
        }
    }
}