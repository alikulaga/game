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


const objectLimit = 300


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
    endPosition:{x: 25, y: 820}

})


const resumeButton = new Button({position: {x: 50, y: 50}, imageSrc: "./img/ResumeButton.png", scale: 1.5, imgHighlight: "./img/ResumeButtonHighlighted.png", functionality: "resume"})
const mainMenuButton = new Button({position:{x: 50, y: 450}, imageSrc: "./img/MainMenuButton.png", scale: 1.5, imgHighlight: "./img/MainMenuButtonHighlighted.png", functionality: "goMainMenu"})
const playButton = new Button({position: {x: 400, y: 400}, imageSrc: "./img/PlayButton.png", scale: 1, imgHighlight: "./img/playButtonHighlighted.png", functionality: "play"})
const controlsButton = new Button({position: {x: 50, y: 250}, imageSrc: "./img/ControlsButton.png", scale: 1.5, imgHighlight: "./img/ControlsButtonHighlighted.png", functionality: "goControlsMenu"})
const returnButton = new Button({position: {x: 10, y: 10}, imageSrc: "./img/ReturnButton.png", scale: 1, imgHighlight: "./img/ReturnButton.png", functionality: "goPauseMenu"})


const pauseScreen = new Menu({position: {x: 0, y: 0}, imageSrc: "./img/PauseScreen.png", scale: 1, buttonList: [resumeButton, mainMenuButton, controlsButton]})

const controlsMenu = new Menu({position: {x: 0, y: 0}, imageSrc: "./img/ControlsMenu.png", scale: 1, buttonList: [returnButton]})

const mainMenu = new Menu({position: {x:0, y:0}, imageSrc: "./img/MainMenuScreen.png", scale: 1, buttonList: [playButton]})