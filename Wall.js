



class Wall extends Sprite {
    constructor({
        position,
        imageSrc,
        scale,
        width,
        height
    }) {
        super({
            position,
            imageSrc,
            scale
        })
        this.width = width
        this.height = height
    }
    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
            );


    }


    //Function that checks if an object has collided with the wall
    colliding(objectPosition, objectWidth, objectHeight, objectVelocity) {
        if (objectPosition.y + objectHeight + objectVelocity.y > this.position.y &&
            objectPosition.y + objectVelocity.y < this.position.y + this.height &&
            (objectPosition.x > this.position.x + this.width ||
            objectPosition.x + objectWidth < this.position.x))
            {




            if (objectPosition.x < this.position.x && objectPosition.x + objectWidth + objectVelocity.x >= this.position.x || objectPosition.x > this.position.x && objectPosition.x + objectVelocity.x <= this.position.x + this.width) {
                return 1;
            }
        }




        if (objectPosition.x + objectWidth + objectVelocity.x > this.position.x &&
            objectPosition.x + objectVelocity.x < this.position.x + this.width) {




            if (objectPosition.y < this.position.y && objectPosition.y + objectHeight + objectVelocity.y > this.position.y || objectPosition.y > this.position.y && objectPosition.y + objectVelocity.y < this.position.y + this.height) {
                return 2;
            }
        }
    }
}











