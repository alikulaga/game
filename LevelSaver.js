class LevelSaver {
    constructor({
        Level
    }) {
        this.Level = Level
        
    }

    save() {
        for (let i = 0; i < this.Level.roomsList.length; i++) {
            for (let j = 0; j < this.Level.roomsList[i].EnemyList.length; j++) {
                localStorage.setItem("enemy" + i + j, JSON.stringify(this.Level.roomsList[i].EnemyList[j]))
            }
            for (let j = 0; j < this.Level.roomsList[i].WallList.length; j++) {
                localStorage.setItem("wall" + i + j, JSON.stringify(this.Level.roomsList[i].WallList[j]))
            }
            for (let j = 0; j < this.Level.roomsList[i].ChestList.length; j++) {
                localStorage.setItem("chest" + i + j, JSON.stringify(this.Level.roomsList[i].ChestList[j]))
            }
            localStorage.setItem("doorIndex" + i, JSON.stringify(this.Level.roomsList[i].doorIndex)) 
            localStorage.setItem("doorOpened" + i, JSON.stringify(this.Level.roomsList[i].doorOpened))
            localStorage.setItem("enemysDead" + i, JSON.stringify(this.Level.roomsList[i].enemysDead))

            
        }
        
        
    }

    load() {
        

        for (let i = 0; i < this.Level.roomsList.length; i++) {
            console.log(Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].coinList)
            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].coinList = [null]
            console.log(Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].coinList)
            for (let j = 0; j < this.Level.roomsList[i].EnemyList.length; j++) {
                
                var data = JSON.parse(localStorage.getItem("enemy" + i + j))

                        
                        if (data == null) {
                            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].EnemyList[j] = null
                        } else if (data.enemyType == "goblin") {
                            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].EnemyList[j] = this.goblinUnpack(data)
                        } else if (data.enemyType == "skeleton") {
                            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].EnemyList[j] = this.skeletonUnpack(data)
                        }
            }
            
            // for (let j = 0; j < this.Level.roomsList[i].ChestList.length; j++) {
            //     localStorage.setItem("chest" + i + j, JSON.stringify(this.Level.roomsList[i].ChestList[j]))
            // }

            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].doorOpened = JSON.parse(localStorage.getItem("doorOpened"))
            Game.currentWorld.levelList[Game.currentWorld.currentLevel].roomsList[i].doorOpened = JSON.parse(localStorage.getItem("enemysDead"))
            
          

            
        }
    }

    goblinUnpack(data) {
        
        
        var gob = new Goblin({position: data.position})

        this.enemyUnpack(gob, data)

        gob.imageNormal = data.imageNormal
        gob.imageDead = data.imageDead
        gob.imageHurt = data.imageHurt

        gob.maxHealth = data.maxHealth

        gob.speed = data.speed

        gob.droppedLoot = data.droppedLoot

      
        return (gob)
    }

    skeletonUnpack(data) {
       
        var skel = new Skeleton({position: data.position})

        this.enemyUnpack(skel, data) 

        skel.imageNormal = data.imageNormal
        skel.imageHurt = data.imageHurt
        skel.imageDead = data.imageDead

        skel.maxHealth = data.maxHealth

        skel.firing = data.firing 

        if (data.arrow == null) {
            skel.arrow = null
        } else {
            skel.arrow = new Projectile({
                position: data.arrow.position, 
                velocity: data.arrow.velocity,
                imageSrc: "./img/PoisonBall.png",
                scale: data.arrow.scale,
                targetPosition: {x: data.arrow.position.x + data.arrow.targetPosition.x, y: data.arrow.position.y + data.arrow.targetPosition.y}
            })
        }

        skel.arrowCountdown = data.arrowCountdown
        

        skel.speed = data.speed 

        skel.index = data.index 
 
        
        return (skel)

    }

    enemyUnpack(e, data) {

        e.position = data.position
        e.imageSrc = data.imageSrc
        e.scale = data.scale
        
        e.velocity = data.velocity
        e.speed = data.speed


        e.attacking = data.attacking
        e.hit = data.hit
        e.health = data.health
        e.angle = data.angle
        e.knockbackSpeed = data.knockbackSpeed
        e.fixAngles = data.fixAngles
        e.strength = data.strength
        e.isDead = data.isDead

        e.XSign = data.XSign
        e.Ysign = data.YSign 

        
        e.healthBackground = new Sprite({position: data.healthBackground.position, imageSrc: "./img/EnemyHealthBackground.png", scale: data.healthBackground.scale})
        e.healthBar = new Sprite({position: data.healthBar.position, imageSrc: "./img/EnemyHealthBar.png", scale: data.healthBar.scale})

        e.barLength = data.barLength 

        e.enemyType = data.enemyType

        return (e)
    }

}