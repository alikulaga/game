room1_1_1 = new Room({
    WallList: [
        //Top Wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 2500,
            height: 25
        }),  

        //Left Wall
        new Wall({
            position:{x: 0, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 1000
        }),

        //Bottom Wall
        new Wall({
            position:{x: 0, y: 795},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 500,
            height: 25
        }),

        new Wall({
            position:{x: 700, y: 795},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 900,
            height: 25
        }),

        //Right Side Wall
        new Wall({
            position:{x: 1575, y: 0},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 300
        }),
        new Wall({
            position:{x: 1575, y: 450},
            imageSrc: "./img/Wall.png",
            scale: 1,
            width: 25,
            height: 500
        }),

       
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

    RoomsListNESW: []
})