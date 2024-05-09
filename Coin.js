class Coin extends Sprite{
    constructor({
        position
    }) {
        super({
            position,
            imageSrc: "./img/Coin.png",
            scale: 0.1
        })

        
        this.XVelocity = 0
        this.YVelocity = 0
        this.speed = 0.01
    }
    

    update() {
        
        
        this.speed *= 1.1
        this.position.x += this.XVelocity
        this.position.y += this.YVelocity
        this.follow()
        super.draw()
    }

    follow() {

        
        var XDistance = player.position.x - this.position.x
        var YDistance = player.position.y - this.position.y
        
        var Xsign = Math.sign(XDistance)
        var Ysign = Math.sign(YDistance)
        
        

        var angle = Math.atan(XDistance / YDistance)
        
       
        var YVel = Math.abs(Math.cos(angle))
        var XVel = Math.abs(Math.sin(angle)) 

        

        this.XVelocity = Xsign * XVel * this.speed
        this.YVelocity = Ysign * YVel * this.speed

        console.log(this.XVelocity)
    }
}