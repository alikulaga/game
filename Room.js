class Room {
    constructor ({
        WallList,
        EnemyList,
        
        doorIndex,
        RoomsListNESW

    }) {
        this.WallList = WallList
        this.EnemyList = EnemyList
        this.projectileList = []
        this.coinList = []

        this.RoomsListNESW = RoomsListNESW 

        this.doorIndex = doorIndex;

        this.enemysDead = false;

        this.doorRemoved = false;
        
    }



    load() {
        
        this.enemysDead = true;
        for (let i = 0; i < this.EnemyList.length; i++) {
            if (this.EnemyList[i]!= null) {
                this.enemysDead = false;
   
                this.EnemyList[i].update();
                
                console.log(this.EnemyList[i].health)

                var coinX = this.EnemyList[i].xPos()
                var coinY = this.EnemyList[i].yPos()
                if (this.EnemyList[i].isDead) {
                    
                    
                    
                    
                    setTimeout(() => {
                        this.createNewCoin(coinX, coinY)
                        this.EnemyList[i] = null;
                    }, 600)
                }
   
   
            }
        }


        
        if (this.doorIndex != null && this.enemysDead && !this.doorRemoved) {
            this.WallList[this.doorIndex] = null;
            this.doorRemoved = true
        }
   
   
        for(let i = 0; i < this.WallList.length; i++) {
            if (this.WallList[i] != null) {
                this.WallList[i].update();
                
            }
        }

        for(let i = 0; i < this.coinList.length; i++) {
            if (this.coinList[i] != null) {
                this.coinList[i].update();
                
                if (coinList[i].isCollected) {
                    coinList[i] = null
                }
            }
        }

        
    }

    createNewCoin(x, y) {
        for(let i = 0; i < this.coinList.length + 1; i++) {
            if (this.coinList[i] == null) {
                this.coinList[i] = new Coin({position: {x: x, y: y}})
            }
        }
    }
}

