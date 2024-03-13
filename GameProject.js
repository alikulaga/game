




var enemyList = [];




for(let i = 0; i < 100; i++) {
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


var walls = [];
walls[1] = new Sprite({
    position: {
        x: 300,
        y: 200
    },


    imageSrc: "./img/Wall.png",


    scale: 1
})


function animate() {
    window.requestAnimationFrame(animate);
   
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    weapon.update();
    player.update();
   
    for (let i = 0; i < enemyList.length; i++) {
       
        if (enemyList[i]!= null) {
           
            enemyList[i].update();




            enemyList[i].velocity.x = 0;
            enemyList[i].velocity.y = 0;
   
            enemyList[i].setVelocities();








            if (enemyList[i].health < 1) {
                enemyList[i] = null;
            }
        }
    }
    player.attacking = false;

    
    
    player.velocity.x = 0;
    player.velocity.y = 0;



    if (keys.a.pressed && lastKeyX == 'a') {




        player.velocity.x = - playerSpeed;
    } else if(keys.d.pressed && lastKeyX == 'd') {
        player.velocity.x = playerSpeed;
    }




    if (keys.w.pressed && lastKeyY == 'w') {
        player.velocity.y = - playerSpeed;
    } else if(keys.s.pressed && lastKeyY == 's') {
        player.velocity.y = playerSpeed;
    }




    if (player.velocity.x != 0 && player.velocity.y != 0) {
        var diagonalVelocity = (Math.sqrt(2) / 2.0) * player.speed;
        player.velocity.x = (diagonalVelocity * (player.velocity.x / Math.abs(player.velocity.x)));
        player.velocity.y = (diagonalVelocity * (player.velocity.y / Math.abs(player.velocity.y)));
    }
   




   








   
}




if (!gameover) {
    animate();
}








window.addEventListener("keydown", (event) =>  {
    //console.log(event);




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
    //console.log(event);




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




window.addEventListener("mousemove", (event) => {
    // console.log(event);




    mouseX = event.clientX
    mouseY = event.clientY








})




window.addEventListener("mousedown", (event) => {
    //console.log(event);




    if (event.button == 0) {
        player.attacking = true;
    }
})







