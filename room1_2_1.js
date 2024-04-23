room1_2_1 = new Room ({
    WallList: [
        //Top Wall
        northBorder,

        //Left Wall
        westBorder,

        //Bottom Wall
        southBorder,

        //Right Wall
        new BrickWall({
            position:{x: 1575, y: 0},
            endPosition:{x: 1600, y: 900}
        }),
        new BrickWall({
            position:{x: 1575, y: 750},
            endPosition:{x: 1600, y: 950}
        }),
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