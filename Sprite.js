class Sprite {
    //Constructor, creates a position, image, and scale for all sprites
    constructor({
        position,
        imageSrc,
        scale,
        endposition
    }) {
        this.position = position;

        this.image = new Image();
        this.image.src = imageSrc;

        this.scale = scale;
    }

    //Return the scaled widths and heights of any sprite
    height() {
        return this.image.height * this.scale
    }
    width() {
        return this.image.width * this.scale
    }


    //Draws the sprite to the screen
    draw() {
        
        //Draws the sprite with canvas "drawimage"
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
}

