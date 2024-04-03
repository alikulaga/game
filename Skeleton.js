class Skeleton extends Enemy {
    constructor({
        position,
    }) {
        super({
            position,
            imageSrc: "./img/Skeleton.png",
            scale: 0.2
        })
        this.velocity = ({x: 0, y: 0})
        this.speed = enemySpeed;


        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
        this.firing = true;
        this.arrow = null;
    }

    update() {
        this.setVelocities()
        this.draw();

        if (this.firing) {
            this.fireArrow()
        }

        if (this.arrow != null) {
            this.arrow.update()
        }
    }

    setVelocities() {
        var Xdifference = player.position.x - this.position.x
        var Ydifference = player.position.y - this.position.y
        
    }

    fireArrow() {
        this.arrow = new Projectile({
            position: {x: this.position.x, y: this.position.y}, 
            velocity:{x: 0, y: 0},
            imageSrc: "./img/Arrow.png",
            scale: .15,
            targetPosition: {x: player.position.x, y: player.position.y}
        })

        this.firing = false;
        setTimeout(() => {
            this.firing = true;
        }, 2000)

    }
}