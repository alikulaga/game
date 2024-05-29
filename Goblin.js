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

        this.droppedLoot = false
    }


    update() {

        
        this.draw();
        
        if (!currentWorld.paused) {
            
            this.setVelocities();

            this.HitPlayer()
            //this.checkProjectiles()
        }
        
    }


    setVelocities() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.follow()

    }

    HitPlayer() {
        if (this.position.x + this.width() - 5 > player.position.x && this.position.x + 5 < player.position.x + player.width() 
        &&  this.position.y + this.height() - 5 > player.position.y && this.position.y + 5 < player.position.y + player.height()
        &&  !player.invincible && !this.isDead) {

            

            player.health -= 20
            player.invincible = true
            player.image.src = player.imageHurt
            player.knockback({Xattack: this.position.x, Yattack: this.position.y})
            setTimeout(() => {
                player.invincible = false;
                player.image.src = player.imageNormal
            }, 350)
        }
        
    }

    
}