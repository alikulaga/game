room2 = new Room({
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
        }),
        new Wall({
            position:{x: 500, y: 400},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 400,
            height: 500
        })    
    ],


    EnemyList: [
        new Enemy({
            position:{x:400,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .2
        }),
        new Enemy({
            position:{x:800,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .2
        })
    ],

    RoomsListNESW: [
        room1,
        null,
        null,
        null
    ]


})