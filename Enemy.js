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
    }

   
    follow() {
        var XDistance = player.position.x - this.position.x
        var YDistance = player.position.y - this.position.y

        this.checkHit()

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

        if (this.health <= 0) {
            this.velocity.x = 0
            this.velocity.y = 0
            this.image.src = this.imageDead
            this.isDead = true
        }

        if (currentWorld.paused) {
            this.velocity.x = 0
            this.velocity.y = 0
        }
    }



    checkHit() {
        //Checks if player's attack is inside the enemy's hitbox
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
                if (this.projectileHit(player.projectileList[i])) {

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

    randomizeAngle() {
        var randomJump = (Math.random()* 60) - 30

        this.angle += randomJump;

    
    }

    
}
