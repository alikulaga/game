room1_1_2 = new Room({
    WallList: [
        
        //Top wall
        northBorder,  

        //Left wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 300
        }),
        new Wall({
            position:{x: 0, y: 450},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 500
        }),

        //Bottom wall
        southBorder,

        //Right wall
        eastBorder,

        //Middle wall
        new Wall({
            position:{x: 500, y: 400},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 400,
            height: 500
        })    
    ],


    EnemyList: [
        new Goblin({
            position:{x:400,  y: 50},
        }),

        new Goblin({
            position:{x:800,  y: 50},
        })
    ],

    doorIndex: 6,

    RoomsListNESW: []


})