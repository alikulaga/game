class Room {
    constructor ({
        WallList,
        EnemyList,
        
        RoomsListNESW

    }) {
        this.WallList = WallList
        this.EnemyList = EnemyList

        this.RoomsListNESW = RoomsListNESW 
    }



    load() {
        for (let i = 0; i < this.EnemyList.length; i++) {
       
            if (this.EnemyList[i]!= null) {
   
   
                this.EnemyList[i].update();
   
   
                if (this.EnemyList[i].health < 1) {
                    setTimeout(() => {
                        this.EnemyList[i] = null;
                    }, 600)
                }
   
   
            }
        }
   
   
        for(let i = 0; i < this.WallList.length; i++) {
            if (this.WallList[i] != null) {
                this.WallList[i].update();
            }
        }
    }
}

