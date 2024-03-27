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


        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;

        console.log("Hello")
    }
}