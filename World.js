class World{
    constructor ({
        levelList
    }) {
        this.levelList = levelList

        this.currentLevel = 0;
    }

    load() {
        this.levelList[this.currentLevel].update()
       
    }

    getCurrentLevel() {
        return this.levelList[this.currentLevel]
    }

}