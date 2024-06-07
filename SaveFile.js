//Saves the current state of an entire game

//IN PROGRESS, MOSTLY REPLACED WITH LEVELSAVER CLASS
class SaveFile {
    constructor ({
        hello
    }) {
        this.hello = hello

    }

    save() {
        for (let i = 0; i < Game.worldsList.length; i++) {
            for (let j = 0; j < Game.worldsList[i].levelList.length; j++) {
                for (let k = 0; k < Game.worldsList[i].levelList[j].roomList.length; k++) {
                    for (let l = 0; l < Game.worldsList[i].levelList[j].roomList[k].EnemyList.length; l++) {
                        localStorage.setItem(("enList" + i + j + k + l), JSON.stringify(Game.worldsList[i].levelList[j].roomList[k].EnemyList[l]))
                    }
                    
                }
            }
        }
    }

    load() {
        for (let i = 0; i < Game.worldsList.length; i++) {
            for (let j = 0; j < Game.worldsList[i].levelList.length; j++) {
                for (let k = 0; k < Game.worldsList[i].levelList[j].roomList.length; k++) {
                    for (let l = 0; l < Game.worldsList[i].levelList[j].roomList[k].EnemyList.length; l++) {
                        var data = JSON.parse(localStorage.getItem("enList" + i + j + k + l))

                        
                        if (data == null) {
                            Game.worldsList[i].levelList[j].roomList[k].EnemyList[l] = null
                        } else if (data.enemyType == "goblin") {
                            Game.worldsList[i].levelList[j].roomList[k].EnemyList[l] = this.goblinUnpack(data)
                        } else if (data.enemyType == "skeleton") {
                            Game.worldsList[i].levelList[j].roomList[k].EnemyList[l] = this.skeletonUnpack(data)
                        }
                        
                    }
                }
            }
        }
    }
}