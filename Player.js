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
        var centerX = this.position.x + (this.width() / 2)
        var centerY = this.position.y + (this.height() / 2)




        var xDistance = mouseX - centerX;
        var yDistance = mouseY - centerY;
 
        var angle = Math.atan(yDistance / xDistance)
        var sign = -Math.abs(xDistance) / xDistance




        attackX = centerX - (sign * 80 * Math.cos(angle) + 1)
        attackY = centerY - (sign * 80 * Math.sin(angle) + 1)




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
            }, 100
            )
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




        for(let i = 0; i < currentWorld.getCurrentLevel().currentRoom.WallList.length; i++) {
            if (currentWorld.getCurrentLevel().currentRoom.WallList[i] != null) {
                var collisionDirection = currentWorld.getCurrentLevel().currentRoom.WallList[i].colliding(this.position, this.width(), this.height(), this.velocity)

                if(collisionDirection == 1) {
                    this.velocity.x = 0; 
                } 
                if (collisionDirection == 2) {
                    this.velocity.y = 0;
                }
            }
        }




        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
       
    }
}
