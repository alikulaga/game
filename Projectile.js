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

        var ySign = Math.sign(yDist);
        var xSign = Math.sign(xDist);

        var angle = Math.atan(yDist / xDist)
        
        var arrowSpeed = 13
        
        this.xVelocity =  arrowSpeed * xSign * Math.cos(angle)
        this.yVelocity =  arrowSpeed * xSign * Math.sin(angle)

        this.strength = 15

        
    }
    update() {
        
        this.position.x += this.xVelocity
        this.position.y += this.yVelocity

        this.draw()
    }
}