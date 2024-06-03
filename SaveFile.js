class SaveFile {
    constructor ({
        hello
    }) {
        this.hello = hello

    }

    save() {
        for (let i = 0; i < Game.worldsList.length; i++) {
            for (let j = 0; j < Game.worldsList[i].levelList.length; j++) {
                for (let k = 0; k < Game.worldsList[i].levelList[j].roomsList.length; k++) {
                    for (let l = 0; l < Game.worldsList[i].levelList[j].roomsList[k].EnemyList.length; l++) {
                        localStorage.setItem(("enList" + i + j + k + l), JSON.stringify(Game.worldsList[i].levelList[j].roomsList[k].EnemyList[l]))
                    }
                    
                }
            }
        }
    }

    load() {
        for (let i = 0; i < Game.worldsList.length; i++) {
            for (let j = 0; j < Game.worldsList[i].levelList.length; j++) {
                for (let k = 0; k < Game.worldsList[i].levelList[j].roomsList.length; k++) {
                    for (let l = 0; l < Game.worldsList[i].levelList[j].roomsList[k].EnemyList.length; l++) {
                        var data = JSON.parse(localStorage.getItem("enList" + i + j + k + l))

                        
                        if (data == null) {
                            Game.worldsList[i].levelList[j].roomsList[k].EnemyList[l] = null
                        } else if (data.enemyType == "goblin") {
                            Game.worldsList[i].levelList[j].roomsList[k].EnemyList[l] = this.goblinUnpack(data)
                        } else if (data.enemyType == "skeleton") {
                            Game.worldsList[i].levelList[j].roomsList[k].EnemyList[l] = this.skeletonUnpack(data)
                        }
                        
                    }
                }
            }
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