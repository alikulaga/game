class Coin extends Item{
    constructor({
        position
    }) {
        super({
            position,
            imageSrc: "./img/Coin.png",
            scale: 0.06
        })

    }

    update() {
        if (this.isCollected) {
            player.coinCount++
            console.log("hello")
        }
        super.update()
    }
    
    

}