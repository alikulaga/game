class Projectile extends Sprite{
    constructor({
        position,
        velocity,
        imageSrc,
        scale,
        targetPosition
    }) {
        super({
            position,
            imageSrc,
            scale,
        })
        this.targetPosition = targetPosition;


        var yDist = this.targetPosition.y - this.position.y
        var xDist = this.targetPosition.x - this.position.x

        console.log(yDist) 
        console.log(xDist)
        var ySign = Math.sign(yDist);
        var xSign = Math.sign(xDist);

        var angle = Math.atan(yDist / xDist)
        
        
        
        this.xVelocity =  9 * xSign * Math.cos(angle)
        this.yVelocity =  9 * xSign * Math.sin(angle)

        
    }
    update() {
        this.position.x += this.xVelocity
        this.position.y += this.yVelocity

        
        this.draw()

    }
    
    
}