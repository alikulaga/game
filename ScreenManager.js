class ScreenManager {
    constructor({
        mainMenu,
        currentWorld,
        pauseMenu,
        controlsMenu,
        aboutMePage,
        deathScreen,
        worldsList
    }) {
        this.mainMenu = mainMenu
        this.currentWorld = currentWorld
        this.pauseMenu = pauseMenu
        this.controlsMenu = controlsMenu
        this.aboutMePage = aboutMePage
        this.deathScreen = deathScreen
        this.worldsList = worldsList

        this.screen = mainMenu
        this.lastScreen
        this.paused = true

        this.pauseScreenOpen = false
        this.mainMenuScreenOpen = true
        this.deathScreenOpen = false
    }

    getMainMenu() {
        return mainMenu
    }
    getPauseMenu() {
        return pauseMenu
    }
    getCurrentWorld() {
        return currentWorld
    }
    getCurrentLevel() {
        return this.currentWorld.getLevel()
    }
    getCurrentRoom() {
        return this.currentWorld.getRoom()
    }
    getCurrentEnemyList() {
        return this.currentWorld.getEnemyList()
    }
    getCurrentWallList() {
        return this.currentWorld.getWallList()
    }
    paused() {
        return this.paused
    }

    
    update() {

        
        if (player.health < 1) {
            player.health = playerHealth
            player.lives--
            document.querySelector('#HealthBar').style.width = "0px";
            this.changeScreen("DeathScreen")
        }
        
        this.screen.update()
        
        
        if (this.deathScreenOpen) {
            
            this.deathScreen.update()
        }
    }

    changeScreen(newScreen) {
        
        if (newScreen == "MainMenu") {
            this.lastScreen = this.screen
            this.deleteHeader()
            this.screen = this.mainMenu
            this.paused = true
            this.pauseMenuOpen = false
            this.mainMenuScreenOpen = true
            if (this.deathScreenOpen) {
                this.respawn()
            }
        } 
        if (newScreen == "PauseMenu") {
            this.lastScreen = this.screen
            this.screen = this.pauseMenu
            this.paused = true
            this.pauseMenuOpen = true
            this.mainMenuScreenOpen = false
            this.restoreHeader()
        }
        if (newScreen == "ControlsMenu") {
            this.lastScreen = this.screen
            this.screen = this.controlsMenu
            this.paused = true
            this.pauseMenuOpen = true
            this.mainMenuScreenOpen = false
            this.deleteHeader()
        }
        if (newScreen == "Game") {
            this.lastScreen = this.screen
            this.screen = this.currentWorld
            this.paused = false
            this.pauseMenuOpen = false
            this.mainMenuScreenOpen = false
            this.restoreHeader()
        }
        if (newScreen == "Return") {
            this.lastScreen.update()
            this.screen = this.lastScreen
        }
        if (newScreen == "AboutMe") {
            this.lastScreen = this.screen
            this.screen = this.aboutMePage
            this.paused = true
            this.pauseMenuOpen = true
            this.mainMenuScreenOpen = false
        }
        if (newScreen == "DeathScreen") {
            
            this.currentWorld.paused = true
            this.deathScreenOpen = true
        } else {
            this.deathScreenOpen = false
            this.currentWorld.paused = false
        }

        if (newScreen == "Respawn") {
            this.respawn()
            this.deathScreenOpen = false
        }
        
    }

    pause() {
        this.paused = true
    }

    unpause() {
        this.paused = false
    }
    
    deleteHeader() {
        document.querySelector('#gameHeader').style.height = "0px";
        document.querySelector('#HealthBar').style.height = "0px";
        document.querySelector('#HealthBackground').style.height = "0px";
        document.querySelector('#ProjectileCounterBG').style.height = "0px";
        document.querySelector('#ProjectileImage').style.height = "0px";
        document.querySelector('#CoinCounterBG').style.height = "0px";
        document.querySelector('#CoinImage').style.height = "0px";
        document.querySelector('#Counter').style.height = "0px";
        document.querySelector('#CoinCounter').style.height = "0px";
        document.querySelector('#Timer').style.height = "0px";
    }

    restoreHeader() {
        document.querySelector('#gameHeader').style.height = "80px";
        document.querySelector('#HealthBar').style.height = "30px";
        document.querySelector('#HealthBackground').style.height = "30px";
        document.querySelector('#ProjectileCounterBG').style.height = "418px";
        document.querySelector('#ProjectileImage').style.height = "477px";
        document.querySelector('#CoinCounterBG').style.height = "418px";
        document.querySelector('#CoinImage').style.height = "420px";
        document.querySelector('#Counter').style.height = "418px";
        document.querySelector('#CoinCounter').style.height = "418px";
    }

    respawn() {

        this.currentWorld.levelList[this.currentWorld.currentLevel].respawn()
        this.currentWorld.levelList[this.currentWorld.currentLevel].savedRoom.coinList = [null]
        this.getCurrentRoom().saved = true
        save1.load()
        
    }
        
    
}