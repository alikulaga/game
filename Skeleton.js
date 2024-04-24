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

        this.imageNormal = "./img/Skeleton.png"
        this.imageHurt = "./img/SkeletonHurt.png"
        this.imageDead = "./img/SkeletonDead.png"


        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
        this.firing = true;
        this.arrow = null;
        this.speed = 2

        this.index = 0
    }

    update() {
        this.setVelocities()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.draw();

        if (this.firing) {
            this.fireArrow()
        }

        if (this.arrow != null) {
            this.arrow.update()
        }
    }

    setVelocities() {
        this.follow()
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

    fireArrow() {
        this.arrow = new Projectile({
            position: {x: this.position.x, y: this.position.y}, 
            velocity:{x: 0, y: 0},
            imageSrc: "./img/PoisonBall.png",
            scale: .05,
            targetPosition: {x: player.position.x, y: player.position.y}
        })

        this.index = currentWorld.getCurrentRoom().projectileList.length
        currentWorld.getCurrentRoom().projectileList[this.index] = this.arrow

        this.firing = false;
        setTimeout(() => {
            currentWorld.getCurrentRoom().projectileList[this.index] = null
            this.firing = true;
        }, 2000)

    }
}