//The most basic environmental element
//Stores and updates the current walls, enemys, chests, coins, etc
class Room {
    constructor ({
        WallList,
        EnemyList,
        ChestList,
        
        doorIndex,
        RoomsListNESW,
        respawn

    }) {
        this.WallList = WallList
        this.EnemyList = EnemyList
        this.ChestList = ChestList

        this.doorIndex = doorIndex;
        this.RoomsListNESW = RoomsListNESW 
        this.respawn = respawn


        this.coinList = [null]

        this.projectileList = []

        this.enemysDead = false;

        this.doorRemoved = false;

        
        this.saved = false
        
    }


    //Updates all the arrays contained in a room
    //Coins, Enemys, Walls
    load() {
        
        this.enemysDead = true;
        for (let i = 0; i < this.EnemyList.length; i++) {
            if (this.EnemyList[i]!= null) {
                this.enemysDead = false;
   
                if (!Game.currentWorld.paused) {
                    this.EnemyList[i].update();
                }
                this.EnemyList[i].draw()
                


                if (this.EnemyList[i].isDead) {
                    
                    if(!this.EnemyList[i].droppedLoot) {
                        this.EnemyList[i].dropLoot()
                    }
                    
                    setTimeout(() => {
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

    
        for (let i = 0; i < this.coinList.length; i++) {
            if (this.coinList[i] == null) {
            } else {
                this.coinList[i].update()
                if (this.coinList[i].isCollected) {
                    if (this.coinList[i].despawnTime > 0) {
                        player.coinCount++
                    }
                    
                    this.coinList[i] = null
                }
            }
            
            if (i == objectLimit) {
                this.coinList[objectLimit = null]   
            }
        }

        for (let i = 0; i < this.ChestList.length; i++) {
            if (this.ChestList[i] != null) {
                this.ChestList[i].update()
            }
            
        }
        

        
    }
    
}

