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

        //Useful variables for later on
        this.attacking = false;
        this.hit = false;
    }


    //Finds where an attack lands based on mouse position
    setAttackLocation() {
        var centerX = this.position.x + (this.scaledWidth / 2)
        var centerY = this.position.y + (this.scaledHeight / 2)

        var xDistance = mouseX - centerX;
        var yDistance = mouseY - centerY;
 
        var angle = Math.atan(yDistance / xDistance)
        var sign = -Math.abs(xDistance) / xDistance

        attackX = centerX - (sign * 100 * Math.cos(angle) + 1)
        attackY = centerY - (sign * 100 * Math.sin(angle) + 1)

        //Fills small rectangle to see where attack landed (temporary)
        c.fillRect(attackX, attackY, 2, 2)
    }
   

    //Updates player data
    update() {
        this.draw();

        if (this.hit) {
            this.health--;
            setTimeout(() => {
                this.hit = false;
            }, 400
            )
        }

        //Updates the healthbar to match player's health
        document.querySelector('#HealthBar').style.width = this.health + 'px';

        this.scaledWidth = this.image.width * this.scale;
        this.scaledHeight = this.image.height * this.scale;
       
        //Stops player from leaving sides of screen
        if (this.position.x + this.scaledWidth + this.velocity.x >= canvas.width) {
            this.position.x = canvas.width - this.scaledWidth;
            this.velocity.x = 0;
        }
   
        if(this.position.x + this.velocity.x <= 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
        if(this.position.y + this.scaledHeight + this.velocity.y >= gameBottom) {
            this.position.y = gameBottom - this.scaledHeight;
            this.velocity.y = 0;  
        }
        if(this.position.y + this.velocity.y <= 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
   
   
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
       
        if(this.attacking) {
            this.setAttackLocation()
        }
    }
}

