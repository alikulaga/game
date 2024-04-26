var listex = []
// listex[0] = new Skeleton({position: {x: 500, y: 300}})


for (let i = 0; i < 100; i++) {
    listex[i] = new Goblin ({
        position:{x: 400*Math.random() + 400, y: 300 * Math.random() + 300}
    })
}
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

    EnemyList: listex,

    doorIndex: null,

    RoomsListNESW: []
})