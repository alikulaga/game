//Enemy class - Creates baseline information that all enemies need
//Takes sprite fields, as well as a speed and velocity
class Enemy extends Sprite{
    constructor({
        position,
        velocity,
        speed,
        imageSrc,
        scale
    }) {
        super({
            position,
            imageSrc,
            scale,
        })
        this.velocity = velocity;
        this.speed = speed;

        //Helpful variables for later on 
        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
        this.isDead = false;
        this.XSign = 1
        this.YSign = 1

        //Enemy healthbar
        this.healthBackground = new Sprite({position: {x: position.x + 5, y: position.y - 15}, imageSrc: "./img/EnemyHealthBackground.png", scale: .35})
        this.healthBar = new Sprite({position: {x: position.x + 5, y: position.y - 15}, imageSrc: "./img/EnemyHealthBar.png", scale: .35})
        this.barLength = 1

        //Clarifies what type of enemy this is
        this.enemyType
    }

    update() {
        
        this.drawHealthBar()
        
        this.follow()
    }


    //Draws and tracks the position of the enemy healthbar
    drawHealthBar() {
        
        if (this.health != this.maxHealth) {
            this.healthBackground.draw()
            this.healthBar.draw()
        }

        this.healthBar.position.x = this.position.x + 5
        this.healthBar.position.y = this.position.y - 15

        if (this.barLength > this.health/this.maxHealth) {
            this.barLength -= 0.02
        }
        this.healthBar.cropX = this.barLength

        this.healthBackground.position.x = this.position.x + 5
        this.healthBackground.position.y = this.position.y - 15
    }


    //Updates enemy velocity to track and follow player. 
    //Dead enemys have no speed, if game is paused, enemy has no speed
    follow() {
        var XDistance = player.position.x - this.position.x
        var YDistance = player.position.y - this.position.y

        this.checkHit()

        //If hit, gets knocked back
        //If not hit, tracks normally
        if (this.hit) {
            this.image.src = this.imageHurt

            this.knockbackSpeed += 0.05

        } else {
            this.image.src = this.imageNormal
            this.angle = Math.atan(XDistance / YDistance)
            

            this.XSign = Math.sign(XDistance)
            this.YSign = Math.sign(YDistance)

            this.knockbackSpeed = 1
        }

        var YVel = Math.abs(Math.cos(this.angle)) * this.YSign * 2
        var XVel = Math.abs(Math.sin(this.angle)) * this.XSign * 2


        this.velocity.x = XVel * this.knockbackSpeed
        this.velocity.y = YVel * this.knockbackSpeed

        this.checkWalls()

        this.checkIfDead()

        if (Game.paused) {
            this.velocity.x = 0
            this.velocity.y = 0
        }
    }

    checkIfDead() {
        if (this.health <= 0) {
            this.velocity.x = 0
            this.velocity.y = 0
            this.image.src = this.imageDead
            this.isDead = true
        }
    }

    //Checks if player has hit enemy with melee or projectile
    checkHit() {
        if (player.attacking && !this.hit &&
        this.position.x < attackX &&
        this.position.x + (this.image.width * this.scale) > attackX &&
        this.position.y < attackY &&
        this.position.y + (this.image.height * this.scale) > attackY) {
            
            this.health -= 20
            
            
            this.hit = true
            this.randomizeAngle()
            this.knockbackSpeed = -2

            setTimeout(() => {
                this.hit = false;
            }, 400)

        } 

        for (let i = 0; i < player.projectileList.length; i++) {
            if (player.projectileList[i] != null) {
                if (this.projectileHit(player.projectileList[i]) && !(this.health == 0)) {

                    player.projectileList[i] = null

                    this.health -= 50
                    this.randomizeAngle()
                    this.knockbackSpeed = -2
                    this.hit = true;
                    setTimeout(() => {
                        this.hit = false;
                    }, 400)
                }
            }
        }
    }

    //Creates a random angle to get knocked back at
    randomizeAngle() {
        var randomJump = (Math.random()* 60) - 30

        this.angle += randomJump;

    
    }

    //After enemy dies, drops the loot enemy contains
    dropLoot() {
        
        var index = 0;

        var list = Game.getCurrentRoom().coinList

        for (let i = 0; i < list.length; i++) {
            if (list[i] == null) {
                index = i;
                break
            }
        }

        Game.getCurrentRoom().coinList[index] = new Coin({position:{x: this.position.x, y: this.position.y}})
        Game.getCurrentRoom().coinList[index + 1] = null
        
        
        this.droppedLoot = true
    }

    
    
}
