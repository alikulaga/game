//Constructor, creates a position, image, scale, velocity, speed, and health for player
class Player extends Sprite{
    constructor({
        position,
        imageSrc,
        scale,
        velocity,
        speed,
        health
    }) {
        //Sends three required variables to parent class
        super({
            position,
            imageSrc,
            scale,
        })


        this.velocity = velocity;
        this.speed = speed;
        this.health = health
        
        this.imageNormal = "./img/Player.png"
        this.imageHurt = "./img/PlayerHurt.png"



        //Useful variables for later on
        this.attacking = false;
        this.hit = false;
        this.invincible = false;
        this.knocked = false;

        this.projectileList = [null]

        this.ammo = 10

        this.arrowRecharge = true

        this.coinCount = 0
    }


    //Finds where an attack lands based on mouse position
    setAttackLocation() {
        var centerX = this.position.x + (this.width() / 2)
        var centerY = this.position.y + (this.height() / 2)


        var xDistance = mouseX - centerX;
        var yDistance = mouseY - centerY;
 
        var angle = Math.atan(yDistance / xDistance)
        var sign = -Math.abs(xDistance) / xDistance


        attackX = centerX - (sign * 80 * Math.cos(angle) + 1)
        attackY = centerY - (sign * 80 * Math.sin(angle) + 1)

        setTimeout(() => {
            this.attacking = false;
        }, 100)

        //Fills small rectangle to see where attack landed (temporary)
        c.fillRect(attackX, attackY, 10, 10)
    }
   




    //Updates player data
    update() {
        if (this.health == 0) {
            
        }
    

        this.draw();


        if (this.hit) {
            this.image.src = "./img/PlayerHurt.png"
            setTimeout(() => {
                this.image.src = "./img/Player.png";
            }, 100)


            if (player.health > 40) {
                this.health-= 40;
            } else {
                this.health = 0
            }
            
            
            document.querySelector('#HealthBar').style.width = this.health + 'px';
            this.hit = false;

        }
        document.querySelector('#Counter').textContent = this.ammo;

        document.querySelector('#CoinCounter').textContent = this.coinCount;



        //Updates the healthbar to match player's health
        document.querySelector('#HealthBar').style.width = this.health + 'px';

       
       
        if(this.attacking) {
            this.setAttackLocation()
        }

        this.checkWalls()

        if (this.knocked) {
            this.velocity.x -= Math.sign(this.velocity.x) * .4
            this.velocity.y -= Math.sign(this.velocity.y) * .4
        }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y;
        
        var enList = Game.getCurrentRoom().EnemyList


        for (let i = 0; i < enList.length; i++) {
            if (enList[i] instanceof Skeleton) {
                if (enList[i].arrow != null) {
                    if (this.projectileHit(enList[i].arrow)) {

                        // this.image.src = imageHurt
                        // setTimeout(() => {
                        //     this.image.src = this.imageNormal;
                        // }, 400)
                        if (this.health > 30) {
                            this.knockback({Xattack: enList[i].arrow.position.x, Yattack: enList[i].arrow.position.y})
                        
                            enList[i].arrow = null
                            this.health -=30
                        } else {
                            this.health = 0
                        }

                    }
                }
            }
        }

        
        this.updateArrows()

        if (this.arrowRecharge) {
            this.arrowRecharge = false;
            setTimeout(() => {
                this.arrowRecharge = true
            }, 10000)
            if (this.ammo < 10 && !Game.paused) {
                this.ammo++
            }
            
        }
    }


    knockback({Xattack, Yattack}) {
       
        this.knocked = true
        setTimeout(() => {
            this.knocked = false
        }, 50)


       
        this.velocity.x = -7 * Math.sign(Xattack - this.position.x)
        this.velocity.y = -7 * Math.sign(Yattack - this.position.y)
        
    }

    fireArrow() {
        if (this.ammo > 0) {
            var index
        
            for (let i = 0; i < this.projectileList.length; i++) {
                if (this.projectileList[i] == null) {
                    index = i
                    
                    break;
                    
                }
            }
            this.projectileList[index] = new Projectile({
                position: {x: this.position.x, y: this.position.y}, 
                velocity:{x: 0, y: 0},
                imageSrc: "./img/RedBall.png",
                scale: .05,
                targetPosition: {x: mouseX, y: mouseY}
            })
            if (this.projectileList.length == index + 1) {
                this.projectileList[index + 1] = null
            }

            this.ammo--
        }
        
        
        
    }

    updateArrows() {
        for (let i = 0; i < this.projectileList.length; i++) {
            if(this.projectileList[i] != null) {
                this.projectileList[i].update()
                
                if (this.projectileList[i].position.x < 0 || this.projectileList[i].position.y < 0) {


                    this.projectileList[i] = null
                    
                }
                
            }
        }
    }
}
