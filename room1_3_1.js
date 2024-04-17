room1_3_1 = new Room ({
    WallList: [
        //Top Wall
        northBorder,

        //Left Wall
        westBorder,

        //Bottom Wall
        southBorder,

        //Right Wall
        new Wall({
            position:{x: 1575, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 600
        }),
        new Wall({
            position:{x: 1575, y: 750},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 200
        }),

        new Wall({
            position:{x: 200, y: 200},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 60,
            height: 800
        })
    ],


    EnemyList: [
        new Goblin({
            position:{x: 800, y: 500}
        }),

        new Goblin({
            position:{x: 700, y: 300}
        })
    ],

    doorIndex: null,

    RoomsListNESW: []

})