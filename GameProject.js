var currentWorld = world1;



function animate() {

    window.requestAnimationFrame(animate);
   
    currentWorld.load();
    
    
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


document.addEventListener("mousedown", (event) => {
    //console.log(event);
    event.preventDefault()


    if (event.button == 0) {
        player.attacking = true;
    }

    if (event.button == 2) {
        console.log("Hello")
    }
})
