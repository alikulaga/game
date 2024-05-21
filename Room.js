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
        this.coinList = null

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

        var current = this.coinList
        while (current != null) {
            
            current.value.update()
            current = current.next
        }

        

        
    }

    

    
}

