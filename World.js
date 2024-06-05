//Contains multiple levels, and handles many accessor classes to obtain important information
class World{
    constructor ({
        levelList
    }) {
        this.levelList = levelList

        this.currentLevel = 0;

        this.paused = false

       
    }

    update() {
        
        
        this.levelList[this.currentLevel].update()
        
    }

    getLevel() {
        return this.levelList[this.currentLevel]
    }

    getRoom() {
        return this.getLevel().currentRoom
    }

    getWallList() {
        return this.getRoom().WallList
    }

    getEnemyList() {
        
        return this.getRoom().EnemyList
    }

    getLevelsList() {
        return this.levelList
    }

    

}

