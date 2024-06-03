// class Boss extends Sprite{
//     constructor({
//         position
//     }) {
//         super ({
//             position,
//             imageSrc: "./img/FinalBoss.png",
//             scale: .45
//         })

//         this.health = bossHealth
//         this.maxHealth = bossHealth

//         this.healthBackground = new Sprite({position: {x: 500, y: 60}, imageSrc: "./img/EnemyHealthBackground.png", scale: 5})
//         this.healthBar = new Sprite({position: {x: 500, y: 60}, imageSrc: "./img/EnemyHealthBar.png", scale: 5})

//         this.hitBox = [[], [], []]

//         this.sign = 1
//         this.barLength = 1
//         this.hit = false

//         this.enemyType = "boss"
//     }

//     update() {
//         this.hitBox[0] = [this.position.x + 80, this.position.y + 20, 110, 200]
//         this.hitBox[1] = [this.position.x, this.position.y + 180, 220, 75]
//         this.hitBox[2] = [this.position.x + 38, this.position.y + 118, 190, 60]


        
//         this.healthBackground.draw()
//         this.healthBar.draw()
        
//         // if (this.barLength > this.health/this.maxHealth) {
//         //     this.barLength -= 0.0001
//         // }
//         this.barLength = this.health / this.maxHealth
//         console.log(this.health)
//         console.log(this.health / this.maxHealth)
//         this.healthBar.cropX = this.barLength

//         if (this.position.x > 800) {
//             this.sign = -1
//         } 
//         if (this.position.x < 300) {
//             this.sign = 1
//         }
//         this.position.x += 3 * this.sign
//         this.position.y += 3 * this.sign
        

//         if (this.checkHit()) {
//             this.health -= 20
//         }
        
//         this.drawhitBox()
//         this.draw()
//     }

//     drawhitBox() {
        
//         for (let i = 0; i < this.hitBox.length; i++) {
//             c.fillRect(this.hitBox[i][0], this.hitBox[i][1], this.hitBox[i][2], this.hitBox[i][3])
//             if (i == 0) {
//                 c.fillStyle = "red"
//             }
//             if (i == 1) {
//                 c.fillStyle = "green"
//             }
            
//         }
//         c.fillStyle = "blue"
//     }

//     checkHit() {
//         if (player.attacking && !this.hit) {
//             for (let i = 0; i < this.hitBox.length; i++) {
//                 if (this.hitBox[i][0] < attackX &&
//                     this.hitBox[i][1] < attackY &&
//                     this.hitBox[i][0] + this.hitBox[i][2] > attackX &&
//                     this.hitBox[i][1] + this.hitBox[i][3] > attackY
//                 ) {
//                     this.hit = true
//                     setTimeout(() => {
//                         this.hit = false;
//                     }, 400)
//                     return true
//                 }
//             }
            
//         }
//         return false;
//     }

//     unpack(json) {
//         super.unpack()

//     }

// }