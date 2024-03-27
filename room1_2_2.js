room1_2_2 = new Room ({
    WallList: [
        //Top Wall
        northBorder,

        //Left Wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 600
        }),
        new Wall({
            position:{x: 0, y: 750},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 200
        }),

        //Bottom Wall
        southBorder,

        //Right Wall
        new Wall({
            position:{x: 1575, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 100
        }),
        new Wall({
            position:{x: 1575, y: 250},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 550
        }),
    ],


    EnemyList: [
        new Goblin({
            position:{x: 800, y: 500}
        }),

        new Goblin({
            position:{x: 500, y: 700}
        }),

        new Goblin({
            position:{x: 200, y: 300}
        })
    ],

    doorIndex: null,

    RoomsListNESW: []

})