class Coin extends Item{
    constructor({
        position
    }) {
        super({
            position,
            imageSrc: "./img/Coin.png",
            scale: 0.06
        })

        this.imageNormal ="./img/Coin.png"
        this.imageFading = "./img/VanishingCoin.png"
        
        this.despawnTime = 800

    }

    update() {
        this.despawnTime--

        if (this.despawnTime < 300) {
            
            if ((Math.floor(this.despawnTime / 10)) % 2 == 0) {
                
                this.image.src = this.imageFading
            } else {
                this.image.src = this.imageNormal
            }
        }
        if (this.despawnTime == 0) {
            this.isCollected = true;
        }

        
        super.update()
    }
    
    

}