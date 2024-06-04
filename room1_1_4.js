room1_1_4 = new Room({
    WallList: [

        //Top Wall
        northBorder,

        //Left Wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 610
        }),

        new BrickWall({
            position: {x: 1575, y: 580},
            endPosition: {x: 1600, y: 900}
        }),
        
        //Right Wall
        new BrickWall({
            position:{x: 1575, y: 0},
            endPosition:{x: 1600, y: 430}
        }),
        
        //Bottom Wall
        southBorder,

        new Wall({
            position:{x: 1575, y: 430},
            imageSrc: "./img/Door.png",
            scale: 1/3,
            width: 25,
            height: 190
        })


    ],


    EnemyList: [
        new Goblin({
            position:{x:400,  y: 50},
        }),
        
        new Goblin({
            position:{x:800,  y: 50},
        }),

        new Goblin({
            position:{x:200,  y: 50},
        }),

        new Goblin({
            position:{x:800,  y: 600},
        })
    ],

    ChestList: [null],

    doorIndex: 5,

    RoomsListNESW: [],

    respawn: null


})