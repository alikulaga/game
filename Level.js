
class Level {
    constructor({
        currentRoom,
        roomsList,
        background,
        
    }) {

        this.roomsList = roomsList
        this.currentRoom = currentRoom
        this.background = background,
        
        this.savedRoom = currentRoom
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
        
       
        if (((this.currentRoom.respawn != null  && this.currentRoom.enemysDead) || this.currentRoom == this.roomsList[0]) && !this.currentRoom.saved) {

            save1.save()
            this.savedRoom = new Room({
                WallList: this.currentRoom.WallList,
                EnemyList: this.currentRoom.EnemyList,
                ChestList: this.currentRoom.ChestList,
                
                doorIndex: this.currentRoom.doorIndex,
                RoomsListNESW: this.currentRoom.RoomsListNESW,
                respawn: this.currentRoom.respawn})

                this.savedRoom.projectileList = this.currentRoom.projectileList
                this.savedRoom.coinList = this.currentRoom.coinList
                this.savedRoom.enemysDead = this.currentRoom.enemysDead
                this.savedRoom.doorRemoved = this.currentRoom.doorRemoved
                this.savedRoom.respawn = this.currentRoom.respawn
                this.currentRoom.saved = true

        }

            
        

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

    getRoomsList() {
        return this.roomsList
    }

    respawn() {
        this.currentRoom = this.savedRoom
        player.position.x = this.savedRoom.respawn.x
        player.position.y = this.savedRoom.respawn.y
    }
}