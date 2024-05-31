class Sprite {
    //Constructor, creates a position, image, and scale for all sprites
    constructor({
        position,
        imageSrc,
        scale,
      
    }) {
        this.position = position;

        this.image = new Image();
        this.image.src = imageSrc;

        this.scale = scale;

    }
    height() {
        return this.image.height * this.scale
    }
    width() {
        return this.image.width * this.scale
    }

    //Draws the sprite to the screen
    draw() {
        

        //Draws the sprite with canvas "drawimage"
        //Takes image, and the
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width(),
            this.height()
            );
        }  
        

    //updates information about the sprite, and draws the next frame
    update() {
        this.draw();
    }


    checkWalls() {
        for(let i = 0; i < Game.getCurrentWallList().length; i++) {
            if (Game.getCurrentLevel().currentRoom.WallList[i] != null) {
                var collisionDirection = Game.getCurrentLevel().currentRoom.WallList[i].colliding(this.position, this.width(), this.height(), this.velocity)

                if(collisionDirection == 1) {
                    this.velocity.x = 0; 
                } 
                if (collisionDirection == 2) {
                    this.velocity.y = 0;
                }
            }
        }
    }

    projectileHit(arrow) {
        var xHitBox = arrow.position.x
        var yHitBox = arrow.position.y

        var xHitBoxend = xHitBox + arrow.width()
        var yHitBoxend = yHitBox + arrow.height()

        if((xHitBox > this.position.x && xHitBox < this.position.x + this.width() ||
            xHitBoxend > this.position.x && xHitBoxend < this.position.x + this.width()) && (
            yHitBox > this.position.y && yHitBox < this.position.y + this.height() ||
            yHitBoxend > this.position.y && yHitBoxend < this.position.y + this.height()
        )) {
            this.image.src = this.imageHurt
            setTimeout(() => {
                this.image.src = this.imageNormal
            }, 350)
            return true;
        } else {
            return false
        }
    }

    xPos() {
        return this.position.x
    }
    
    yPos() {
        return this.position.y
    }
}

