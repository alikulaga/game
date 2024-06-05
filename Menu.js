//A screen that contains buttons on it
class Menu extends Sprite {
    constructor({
        position,
        imageSrc,
        scale,
        buttonList
    }) {
        super ({
            position,
            imageSrc,
            scale
        })

        this.buttonList = buttonList

        
    }

    //Draws menu and iterates through buttons
    update() {
        
        this.draw()
        for (let i = 0; i < this.buttonList.length; i++) {
            if (this.buttonList[i] != null) {
                if(this.buttonList[i].update()) {
                    
                    this.preformFunction(i)
                }
            }
            
        }
    }

    //Checks what a button's function was, and switches the screenmanager to the cooresponding screen
    preformFunction(ind) {
        
        var func = this.buttonList[ind].functionality
        if (func == "resume" || func == "play") {
            
            
            Game.changeScreen("Game")
        }

        if (func == "goMainMenu") {
            
           
            Game.changeScreen("MainMenu")
        }

        if (func == "goControlsMenu") {

            Game.changeScreen("ControlsMenu")
        }

        if (func == "goPauseMenu") {
            Game.changeScreen("PauseMenu")
        }

        if (func == "return") {
            Game.changeScreen("Return")
        }
        
        if (func == "goAboutMe") {
            Game.changeScreen("AboutMe")
        }

        if (func == "respawn") {
            Game.changeScreen("Respawn")
        }
    }

    
}