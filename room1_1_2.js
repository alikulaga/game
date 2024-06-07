room1_1_2 = new Room({
    WallList: [
        
        //Top wall
        northBorder,  

        //Left wall
        new BrickWall({
            position:{x: 0, y: 0},
            endPosition:{x: 25, y: 300}
        }),
        new BrickWall({
            position:{x: 0, y: 450},
            endPosition:{x: 25, y: 950}
        }),

        //Bottom wall
        southBorder,

        //Right wall
        eastBorder,

        //Middle wall
        new BrickWall({
            position:{x: 500, y: 400},
            endPosition:{x: 900, y: 900}
        })    
    ],


    EnemyList: [
        new Goblin({
            position:{x:400,  y: 50},
        }),

        new Goblin({
            position:{x:800,  y: 50},
        }),
        
        new Skeleton({
            position:{x: 400, y: 100}
        })
    ],

    ChestList: [null],
    doorIndex: null,

    roomListNESW: [],

    respawn: {x: 100, y: 200}
})