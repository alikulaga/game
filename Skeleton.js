//Specific type of enemy - Skeleton
class Skeleton extends Enemy {
    constructor({
        position,
    }) {
        super({
            position,
            imageSrc: "./img/Skeleton.png",
            scale: 0.18
        })
        this.velocity = ({x: 0, y: 0})
        this.speed = enemySpeed;

        //Sets fields specifically
        this.imageNormal = "./img/Skeleton.png"
        this.imageHurt = "./img/SkeletonHurt.png"
        this.imageDead = "./img/SkeletonDead.png"


        this.attacking = false;
        this.hit = false;
        this.health = skeletonHealth;
        this.maxHealth = skeletonHealth
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;

        this.firing = true;
        this.arrow = null;
        this.speed = 2

        this.index = 0

        this.firePosition
        this.arrowCountdown = 160

        this.enemyType = "skeleton"
    }

    update() {
        this.setVelocities()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        this.countdownArrows()
        
        this.checkToFire()
        
    }

    countdownArrows() {
        this.arrowCountdown--

        if (this.arrowCountdown == 0) {
            this.arrowCountdown = 160
            this.firing = true
        }
    }

    //If timer has reached zero and skeleton is not dead, arrow fires
    checkToFire() {
        if (this.firing && this.health != 0) {
            this.fireArrow()
        }

        if (this.arrow != null) {
            this.arrow.update()
        }
    }

    //Follows player with super(), but keeps a small distance away as skeleton is a ranged enemy
    setVelocities() {
        super.update()
        var xDistance = player.position.x - this.position.x
        var yDistance = player.position.y - this.position.y
        var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

        if (totalDistance < 200 && !this.hit) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = -this.velocity.y
        } else if(totalDistance > 195 && totalDistance < 205) {
            this.velocity.x = 0
            this.velocity.y = 0
        }

        this.checkWalls()
    }

    //Fires an arrow
    fireArrow() {
        
        this.arrow = new Projectile({
            position: {x: this.position.x, y: this.position.y}, 
            velocity:{x: 0, y: 0},
            imageSrc: "./img/PoisonBall.png",
            scale: .05,
            targetPosition: {x: player.position.x, y: player.position.y}
        })

        this.index = Game.getCurrentRoom().projectileList.length
        Game.getCurrentRoom().projectileList[this.index] = this.arrow

        this.firing = false;
        

    }

   
}