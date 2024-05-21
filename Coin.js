class Coin extends Sprite{
    constructor({
        position
    }) {
        super({
            position,
            imageSrc: "./img/Coin.png",
            scale: 0.06
        })

        
        this.XVelocity = 0
        this.YVelocity = 0
        this.speed = 0.01
        this.isCollected = false;
    }
    

    update() {
        this.position.x += this.XVelocity
        this.position.y += this.YVelocity

        if (this.collidedWithPlayer()) {
            this.isCollected = true
        } 

        if (this.inRange()) {
            this.speed *= 1.2
            this.follow()
        }
        
        
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

        
    }

    collidedWithPlayer() {
        var thisX = this.position.x
        var playX = player.position.x
        var thisY = this.position.y
        var playY = player.position.y
        return ((thisX > playX && thisX < playX + player.width() &&
            thisY > playY && thisY < playY + player.height() ||
            thisX + this.width() > playX && thisX + this.width() < playX + player.width() &&
            thisY + this.height() > playY && thisY + this.height() < playY + player.height()))
    }

    inRange() {
        var Xdiff = player.position.x - this.position.x
        var Ydiff = player.position.y - this.position.y
        var sum = (Xdiff * Xdiff) + (Ydiff * Ydiff) 
        var sqr = Math.sqrt(sum)

        return (sqr < 200)
    }


}