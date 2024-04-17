class Enemy extends Sprite{
    constructor({
        position,
        velocity,
        speed,
        imageSrc,
        scale
    }) {
        super({
            position,
            imageSrc,
            scale,
        })
        this.velocity = velocity;
        this.speed = speed;


        this.attacking = false;
        this.hit = false;
        this.health = 100;
        this.angle = 0;
        this.knockbackSpeed;
        this.fixAngles = false;
        this.strength = 1;
    }

    follow() {
        var Xdistance = ((player.position.x) - this.position.x)
        var Ydistance = ((player.position.y) - this.position.y)
        if (Xdistance < .2 && Xdistance > -.2) {
            Xdistance = .2;
        }


        if (!this.hit) {
            this.fixAngles = false;
            this.angle = Math.atan((Ydistance / Xdistance))
            this.knockbackSpeed = 0;
            this.image.src = this.imageNormal
        } else {
            this.knockbackSpeed -= .3;
            this.image.src = this.imageHurt
        }
       
        var sign = Math.abs(Xdistance) / Xdistance;
        var vertSign = 1;
       
       
       
        if(
            //Checks if player's attack is inside the enemy's hitbox
            (player.attacking &&
            this.position.x < attackX &&
            this.position.x + (this.image.width * this.scale) > attackX &&
            this.position.y < attackY &&
            this.position.y + (this.image.height * this.scale) > attackY)
        ) {
           
            
            //updates hit
            this.hit = true;

            if(Math.abs(this.angle) > (Math.PI / 2 - 0.1)) {
               
                this.angle += (this.angle / Math.abs(this.angle)) * .2
               
                sign = -sign

                this.fixAngles = true;

            }

            //Randomizes knockback
            this.angle += Math.PI / 2
            this.angle += Math.random() * Math.PI


            //Knockback is reversed
            sign = -sign
       
       
            //Health is decreased
            this.health -= playerStrength;
       
            //Updates hit to false after 400 milliseconds
            setTimeout(() => {
                this.hit = false;



            }, 400)
           
            //Knockback speed is increased from zero
            this.knockbackSpeed = 5
        }
       
        if (this.fixAngles) {
            vertSign = -Math.sin(this.angle) / Math.abs(Math.sin(this.angle)) * Ydistance / Math.abs(Ydistance)
            sign = -Math.cos(this.angle) / Math.abs(Math.cos(this.angle)) * Xdistance / Math.abs(Xdistance)
        } else {
            vertSign = sign
        }
       
        this.velocity.x = 10


        this.velocity.x = enemySpeed * sign * (Math.cos(this.angle)) + (sign * this.knockbackSpeed * Math.cos(this.angle));
       
        this.velocity.y = enemySpeed * vertSign * Math.sin(this.angle) + (vertSign * this.knockbackSpeed * Math.sin(this.angle));  
   
        this.checkWalls();

        if (this.health < 1) {
            this.image.src = this.imageDead  
            this.velocity.x = 0
            this.velocity.y = 0
        }
    }
    
}



























