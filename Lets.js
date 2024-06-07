//Stores which vertical or horizontal key was most recently pressed
//Vertical is W or S, horizontal is A or D
let lastKeyX;
let lastKeyY;

let leftClick = false;

let escPressed = false

//Constantly tracks the coordinates of the mouse
let mouseX;
let mouseY;


//Tells if the player has died
let gameover = false;

let playerStrength = 20;

let playerHealth = 100

//The coordinates where the player's attack lands
let attackX;
let attackY;


let interacting = false;

let bulletCooldown = 7000

let goblinHealth = 100

let skeletonHealth = 300

let bossHealth = 2000