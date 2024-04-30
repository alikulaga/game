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
                this.health = 0;
            }
            
            
            document.querySelector('#HealthBar').style.width = this.health + 'px';
            this.hit = false;

        }
        



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
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
       
        if (this.projectileHit()) {
            
            if (this.health > 30) {
                this.health -=30
            } else {
                this.health = 0
            }
        }
    }


    knockback({Xattack, Yattack}) {
        this.knocked = true
        setTimeout(() => {
            this.knocked = false;
        }, 50)


       
        this.velocity.x = -7 * Math.sign(Xattack - this.position.x)
        this.velocity.y = -7 * Math.sign(Yattack - this.position.y)
        
    }
}
