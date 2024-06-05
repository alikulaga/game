//Multiple levels contained by a world
//Multiple rooms contained by a level

//Level stores a number of rooms, as well has the information on how they connect to one another
//Level also handles drawing everything on screen
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

        this.drawSave = false;
    }

    //Draws the background, then the enemies, player, and room information
    update() {
        
        this.background.update();
        
        if (leftClick && !Game.paused) {
            player.attacking = true
        }

        
        if (!Game.currentWorld.paused) {
            player.update();
        }
        player.draw()
       
        this.currentRoom.load();
        
        //Saves the current room if it has not been saved yet & the enemys are all dead, or if its the first room of the level.
        if (((this.currentRoom.respawn != null  && this.currentRoom.enemysDead) || this.currentRoom == this.roomsList[0]) && !this.currentRoom.saved) {
            this.saveCurrentRoom()
        }

        if (this.drawSave) {
            checkPoint.draw()
        }

            
        

        this.checkExits()

        
        
        
    }

    //Creates a copy of the current room and saves all the information as it is
    //Also starts drawing the checkpoint icon
    saveCurrentRoom() {
        this.drawSave = true
            setTimeout(() => {
                this.drawSave = false;
            }, 2000)
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

    //Checks if player has left any side of the room, and loads the adjecent room if needed.
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

    //Getter that returns the roomsList
    getRoomsList() {
        return this.roomsList
    }

    //Respawn places player back into the saved room at the respawn location
    respawn() {
        this.currentRoom = this.savedRoom
        player.position.x = this.savedRoom.respawn.x
        player.position.y = this.savedRoom.respawn.y
    }
}