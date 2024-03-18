//Creates canvas and prepares to be used for 2D drawing
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


//Height and width of the whole screen, including healthbar area
canvas.width = 1600;
canvas.height = 900;


//How fast enemies and players move
const playerSpeed = 10;
const enemySpeed = 3;


//Bottom of the playable screen (Adjusted because of health bar display)
const gameBottom = canvas.height - 80;




//The background, remains the same
const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./img/Background.png",
    scale: 2.5
})








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
        {x: 100, y: 100},


        //Velocity player starts with
        velocity:
        {x: 0, y: 0},


        //Player's speed (updatable above)
        speed: playerSpeed,


        //What player looks like (taken from img folder)
        imageSrc: "./img/Player.png",


        //Scale the image to proper size
        scale: .2,


        //How much health should player have
        health: 500
})


//Weapon, always tracks to player
const weapon = new Sprite ({
    position: player.position,
    imageSrc: "./img/Sword.png",
    scale: .15
})

