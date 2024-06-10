//Simple sprite that highlights when hovered over by mouse, and preforms it's function when clicked
class Button extends Sprite {
    constructor({
        position,
        imageSrc,
        scale,
        imgHighlight,
        functionality
    }) {
        super ({
            position,
            imageSrc,
            scale
        })
        this.imgHighlight = imgHighlight
        this.imgNormal = imageSrc

        this.functionality = functionality

        this.opened = false

    }

    update() {
        
        this.draw()
        if (mouseX > this.position.x && mouseX < this.position.x + this.width() &&
            mouseY > this.position.y && mouseY < this.position.y + this.height()) {
            
            this.image.src = this.imgHighlight
            
            console.log(leftClick)
            return (leftClick)
        } else {
            this.image.src = this.imgNormal
            return false
        }
    }
}