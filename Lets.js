//Stores which vertical or horizontal key was most recently pressed
//Vertical is W or S, horizontal is A or D
let lastKeyX;
let lastKeyY;


//Constantly tracks the coordinates of the mouse
let mouseX;
let mouseY;


//Tells if the player has died
let gameover = false;


//The coordinates where the player's attack lands
let attackX;
let attackY;

//Array of enemies
let enemyList = [];

//Array of walls
let wallList = [];