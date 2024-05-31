//Stores which vertical or horizontal key was most recently pressed
//Vertical is W or S, horizontal is A or D
let lastKeyX;
let lastKeyY;

let leftClick = false;

let Epressed = false;
let escPressed = false

//Constantly tracks the coordinates of the mouse
let mouseX;
let mouseY;


//Tells if the player has died
let gameover = false;

let playerStrength = 20;

//The coordinates where the player's attack lands
let attackX;
let attackY;

let currentRoom;

let interacting = false;