class BrickWall extends Wall{
    constructor({
        position,
        endPosition,
    }) {
        super({
            position,
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: endPosition.x - position.x,
            height: endPosition.y - position.y
        })
        
        this.endPosition = endPosition
        
    }
}