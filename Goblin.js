//Specific type of enemy - goblins
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

        //Sets fields specifically
        this.imageNormal = "./img/Goblin.png"
        this.imageHurt = "./img/GoblinHurt.png"
        this.imageDead = "./img/GoblinDead.png"


        this.attacking = false;
        this.hit = false;
        this.health = goblinHealth;
        this.maxHealth = goblinHealth;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
        this.speed = enemySpeed

        this.droppedLoot = false

        this.enemyType = "goblin"
        
    }


    update() {

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        if (!Game.paused) {
            
            this.setVelocities();

            this.HitPlayer()

        }
        
    }


    setVelocities() {
        //Calls super to follow player
        super.update()

    }

    //Attacks player if they get too close
    //Creates 350 millisecond invincibility frames
    HitPlayer() {
        if (this.position.x + this.width() - 5 > player.position.x && this.position.x + 5 < player.position.x + player.width() 
        &&  this.position.y + this.height() - 5 > player.position.y && this.position.y + 5 < player.position.y + player.height()
        &&  !player.invincible && !this.isDead) {

            

            player.health -= 10
            player.invincible = true
            player.image.src = player.imageHurt
            player.knockback({Xattack: this.position.x, Yattack: this.position.y})
            setTimeout(() => {
                player.invincible = false;
                if (!this.isDead) {
                    player.image.src = player.imageNormal
                }
                
            }, 350)
        }
        
    }
    
    
}