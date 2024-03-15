
//Fills the array of enemies with randomly positioned enemies
for(let i = 0; i < 2; i++) {
    enemyList[i] = new Enemy({

        position:
        {x: Math.floor(Math.random() * 900) + 400, y: Math.floor(Math.random() * 300) + 100},
   
        velocity:
        {x: 0, y: 0},
   
        speed: enemySpeed,
   
        imageSrc: "./img/Goblin.png",
   
        scale: .25
    })
}





//Creates a wall in the wall array
wallList[0] = new Wall({
    position:{x: 200, y: 500},

    imageSrc: "./img/Wall.png",

    scale: 1
})





//Recursive function, runs infinitely
function animate() {

    window.requestAnimationFrame(animate);
    
    //Updates the sprites
    background.update();
    weapon.update();
    player.update();
    

    //Updates the enemies
    for (let i = 0; i < enemyList.length; i++) {
       
        if (enemyList[i]!= null) {

            enemyList[i].update();

            if (enemyList[i].health < 1) {
                enemyList[i] = null;
            }

        }
    }
    
    //updates the walls
    for(let i = 0; i < wallList.length; i++) {
        if (wallList[i] != null) {
            wallList[i].update();
        }
    }
    
    //Stops the players attack, so it only lasts one frame
    player.attacking = false;


   
    //Stops player motion
    player.velocity.x = 0;
    player.velocity.y = 0;





    //Ensures A and D override each other
    if (keys.a.pressed && lastKeyX == 'a') {
        player.velocity.x = - playerSpeed;
    } else if(keys.d.pressed && lastKeyX == 'd') {
        player.velocity.x = playerSpeed;
    }

    //Ensures W and S override each other
    if (keys.w.pressed && lastKeyY == 'w') {
        player.velocity.y = - playerSpeed;
    } else if(keys.s.pressed && lastKeyY == 's') {
        player.velocity.y = playerSpeed;
    }

    //Ensures diagonal motion is scaled down
    if (player.velocity.x != 0 && player.velocity.y != 0) {
        var diagonalVelocity = (Math.sqrt(2) / 2.0) * player.speed;
        player.velocity.x = (diagonalVelocity * (player.velocity.x / Math.abs(player.velocity.x)));
        player.velocity.y = (diagonalVelocity * (player.velocity.y / Math.abs(player.velocity.y)));
    }
   
}




//Stops game if game is over
if (!gameover) {
    animate();
}




window.addEventListener("keydown", (event) =>  {

    //Checks what key was pressed, and updates the cooresponding variable
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            lastKeyX = 'd';
        break;
        case 'a':
            keys.a.pressed = true;
            lastKeyX = 'a';
        break;
        case 'w':
            keys.w.pressed = true;
            lastKeyY = 'w';
        break;
        case 's':
            keys.s.pressed = true;
            lastKeyY = 's';
        break;
        case ' ':
            player.attacking = true;
        break;
       
    }
})




window.addEventListener("keyup", (event) =>  {

    //Checks what key was unpressed, and updates the cooresponding variable
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            if (keys.a.pressed) {
                lastKeyX = 'a'
            }
        break;
        case 'a':
            keys.a.pressed = false;
            if (keys.d.pressed) {
                lastKeyX = 'd'
            }
        break;
        case 'w':
            keys.w.pressed = false;
            if (keys.s.pressed) {
                lastKeyY = 's'
            }
        break;
        case 's':
            keys.s.pressed = false;
            if (keys.w.pressed) {
                lastKeyY = 'w'
            }
        break;
       
    }
})


//Constantly updates mouseX and mouseY so the mouse location is always known
window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
})



//Checks if player has clicked a mouse button, and updates the cooresponding function
window.addEventListener("mousedown", (event) => {
  
    if (event.button == 0) {
        player.attacking = true;
    }
})