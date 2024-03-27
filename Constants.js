//Creates canvas and prepares to be used for 2D drawing
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


//Height and width of the whole screen, including healthbar area
canvas.width = 1600;
canvas.height = 900;


//How fast enemies and players move
const playerSpeed = 5;
const enemySpeed = 3;


//Bottom of the playable screen (Adjusted because of health bar display)
const gameBottom = canvas.height - 80;













//Which keys are currently pressed
const keys = {
    a: {pressed: false},
    w: {pressed: false},
    s: {pressed: false},
    d: {pressed: false},
}






//The player we control
const player = new Player({
       
        //Where player starts
        position:
        {x: 50, y: 50},


        //Velocity player starts with
        velocity:
        {x: 0, y: 0},


        //Player's speed (updatable above)
        speed: playerSpeed,


        //What player looks like (taken from img folder)
        imageSrc: "./img/Player.png",


        //Scale the image to proper size
        scale: .15,


        //How much health should player have
        health: 500
})


//Weapon, always tracks to player
const weapon = new Weapon ({
    position: {x: player.position.x - 20, y: player.position.y - 20},
    imageSrc: "./img/Sword.png",
    scale: .15
})

const northBorder = new Wall({
    position:{x: 0, y: 0},
    imageSrc: "./img/Wall.png",
    scale: 1,
    width: 2500,
    height: 25
})

const eastBorder = new Wall({
    position:{x: 1575, y: 0},
    imageSrc: "./img/Wall.png",
    scale: 1,
    width: 25,
    height: 1000
})

const southBorder = new Wall({
    position:{x: 0, y: 795},
    imageSrc: "./img/Wall.png",
    scale: 1,
    width: 2500,
    height: 25
})

const westBorder = new Wall({
    position:{x: 0, y: 0},
    imageSrc: "./img/Wall.png",
    scale: 1,
    width: 25,
    height: 1000
})

