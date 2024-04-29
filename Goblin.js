class Goblin extends Enemy {
    constructor({
        position,
    }) {
        super({
            position,
            imageSrc: "./img/Goblin.png",
            scale: 0.15
        })
        this.velocity = ({x: 0, y: 0})
        this.speed = enemySpeed;

        this.imageNormal = "./img/Goblin.png"
        this.imageHurt = "./img/GoblinHurt.png"
        this.imageDead = "./img/GoblinDead.png"


        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
        this.speed = enemySpeed
    }


    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.setVelocities();

        this.checkIfHitPlayer()
    }


    setVelocities() {
        this.follow()
    }

    checkIfHitPlayer() {
        
    }
    
}