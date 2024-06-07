room1_1_3 = new Room({
    WallList: [

        //Top Wall
        new BrickWall({
            position:{x: 0, y: 0},
            endPosition:{x: 500, y: 25}
        }),
        new BrickWall({
            position:{x: 700, y: 0},
            endPosition:{x: 1600, y: 25}
        }),

        //Left Wall
        westBorder,
        
        //Right Wall
        new BrickWall({
            position:{x: 1575, y: 0},
            endPosition:{x: 400, y: 25}
        }),

        //Bottom Wall
        southBorder,

        //Other Walls
        new BrickWall({
            position:{x: 500, y: 400},
            endPosition:{x: 1600, y: 610}
        }),

        //Door
        new Wall({
            position:{x: 1575, y: 610},
            imageSrc: "./img/Door.png",
            scale: 1/3,
            width: 25,
            height: 190
        }),

    ],


    EnemyList: [
        new Goblin({
            position:{x:400,  y: 50},
        }),

        new Goblin({
            position:{x:800,  y: 50},
        })
    ],

    ChestList: [null],
    doorIndex: 6,

    roomListNESW: [],

    respawn: null
})