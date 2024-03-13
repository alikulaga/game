class Wall extends Sprite {
    constructor({
        position,
        imageSrc,
        scale,
       
    }) {
        super({
            position,
            imageSrc,
            scale
        })
        
        

        
    }


   


    colliding(objectPosition, objectWidth, objectHeight, objectVelocity) {
        if (objectPosition.y + objectHeight + objectVelocity.y > this.position.y && objectPosition.y + objectVelocity.y < this.position.y + this.height() && (objectPosition.x < this.position.x)) {

            if (objectPosition.x < this.position.x && objectPosition.x + objectWidth + objectVelocity.x > this.position.x || objectPosition.x > this.position.x && objectPosition.x + objectVelocity.x < this.position.x + this.width()) {
                
                return 1;
            }
        }

        if (objectPosition.x + objectWidth + objectVelocity.x > this.position.x && objectPosition.x + objectVelocity.x < this.position.x + this.width()) {

            if (objectPosition.y < this.position.y && objectPosition.y + objectHeight + objectVelocity.y > this.position.y || objectPosition.y > this.position.y && objectPosition.y + objectVelocity.y < this.position.y + this.height()) {
                return 2;
            }
        }
       


       
       
    }


}

