worldsList = [world1]
//Creates the main game manager
var Game = new ScreenManager({mainMenu: mainMenu, currentWorld: world1, pauseMenu: pauseScreen, controlsMenu: controlsMenu, aboutMePage: aboutMePage, deathScreen: deathScreen, worldsList: worldsList})








//Recursive function that runs over and over to load the game
function animate() {

    window.requestAnimationFrame(animate);
    
    Game.update()

    interacting = false;
    leftClick = false
    Epressed = false

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
            if (!Game.paused && !Game.deathScreenOpen)
            player.fireArrow();
        break;
        
        case 'f':
            interacting = true;
            
        break;
        case 'Escape':
            if (Game.pauseMenuOpen && Game.lastScreen != mainMenu) {
                Game.changeScreen("Game")
            } else {
                if (!Game.mainMenuScreenOpen) {
                    if (Game.lastScreen == Game.mainMenu && Game.screen != Game.currentWorld) {
                        console.log("hello")
                        Game.changeScreen("MainMenu")
                    } else {
                        Game.changeScreen("PauseMenu")
                    }
                    
                }
            }
            if (Game.screen != Game.currentWorld) {
                console.log("hfn")
            }
            
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
        case 'l':
            save1.save()
        break;
        case 'k':
            save1.load()
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
        leftClick = true
    }
        
        

    //if ()
    
})
