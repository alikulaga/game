class World{
    constructor ({
        levelList
    }) {
        this.levelList = levelList

        this.currentLevel = 0;

        this.paused = false
    }

    load() {
        this.levelList[this.currentLevel].update()
       
    }

    getCurrentLevel() {
        return this.levelList[this.currentLevel]
    }

    getCurrentRoom() {
        return this.getCurrentLevel().currentRoom
    }

    getCurrentWallList() {
        return this.getCurrentRoom().WallList
    }

}

