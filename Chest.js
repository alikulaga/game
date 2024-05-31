class Chest extends Sprite {
    constructor({
        position,
        itemList
    }) {
        super({
            position,
            imageSrc: "./img/Chest.png",
            scale: 0.2
        })

        this.open = false;

        this.itemList = itemList
        this.MenuBackground = new Sprite({position: {x:170, y: 50}, imageSrc: "./img/ChestBackground.png", scale: 2})
        
    }

    centerX() {
        return this.position.x + (this.width() / 2)
        
    }
    centerY() {
        return this.position.y + (this.height() / 2)
        
    }

    update() {
        if (interacting && this.inRange()) {
            if (this.open) {
                this.closeChest()
            } else {
                this.openChest()
            }
                
        }
        this.draw()

        if (this.open) {
            this.openMenu()
        }
        
    }

    inRange() {
        var xdiff = Math.pow(player.position.x + (player.width() / 2) - this.centerX(), 2)
        var ydiff = Math.pow(player.position.y + (player.height() / 2)  - this.centerY(), 2)
        return Math.sqrt(xdiff + ydiff) < 120
    }

    closeChest() {
        Game.paused = false;
        this.open = false
    }

    openChest() {
        Game.paused = true
        this.open = true
    }


    openMenu() {
        this.MenuBackground.draw()
    }
}