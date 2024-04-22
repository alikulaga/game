room1_1_1 = new Room({
    WallList: [
        //Top Wall
        northBorder,

        //Left Wall
        westBorder,

        //Bottom Wall
        new BrickWall({
            position:{x: 0, y: 795},
            endPosition:{x:500, y: 820}
        }),

        new BrickWall({
            position:{x: 700, y: 795},
            endPosition:{x:1600, y: 820}
        }),

        //Right Wall
        new BrickWall({
            position:{x: 1575, y: 0},
            endPosition:{x:1600, y: 300}
        }),

        
        new BrickWall({
            position:{x: 1575, y: 450},
            endPosition:{x: 1600, y: 820}
        }),
    ],


    EnemyList: [
        new Goblin({
            position:{x: 800, y: 500}
        }),

        new Goblin({
            position:{x: 300, y: 300}
        }),

        new Skeleton({
            position:{x: 400, y: 600}
        }),

        new Skeleton({
            position:{x: 500, y: 400}
        })
    ],

    doorIndex: null,

    RoomsListNESW: []
})