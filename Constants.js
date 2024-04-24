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
        {x: 600, y: 50},


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

const northBorder = new BrickWall({
    position:{x: 0, y: 0},
    endPosition:{x: 2500, y: 25}
})

const eastBorder = new BrickWall({
    position:{x: 1575, y: 0},
    endPosition:{x: 1600, y: 1000}
})

const southBorder = new BrickWall({
    position:{x: 0, y: 795},
    endPosition:{x: 2500, y: 820}
})

const westBorder = new BrickWall({
    position:{x: 0, y: 0},
    endPosition:{x: 25, y: 1000}
})

