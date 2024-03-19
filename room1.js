room1 = new Room({
    WallList: [
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 2500,
            height: 25
        }),  
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 1000
        }),
        new Wall({
            position:{x: 0, y: 795},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 2500,
            height: 25
        }),
        new Wall({
            position:{x: 1575, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 1000
        })
    ],


    EnemyList: [
        new Enemy({
            position:{x:800,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .15
        })
    ],

    connectedRooms: [
        null,
        null,
        null,
        null
    ]


})