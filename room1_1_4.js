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
        
        //Right Wall
        eastBorder,
        
        //Bottom Wall
        southBorder,


    ],


    EnemyList: [
        new Enemy({
            position:{x:400,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .15
        }),
        new Enemy({
            position:{x:800,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .15
        }),
        new Enemy({
            position:{x:200,  y: 50},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .15
        }),
        new Enemy({
            position:{x:800,  y: 600},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .15
        })
    ],

    doorIndex: null,

    RoomsListNESW: []


})