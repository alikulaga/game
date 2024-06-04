room1_1_3 = new Room({
    WallList: [

        //Top Wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 500,
            height: 25
        }),
        new Wall({
            position:{x: 700, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 900,
            height: 25
        }),

        //Left Wall
        westBorder,
        
        //Right Wall
        new Wall({
            position:{x: 1575, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 400
        }),

        //Bottom Wall
        southBorder,

        //Other Walls
        new Wall({
            position:{x: 500, y: 400},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 1100,
            height: 210
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

    RoomsListNESW: [],

    respawn: null
})