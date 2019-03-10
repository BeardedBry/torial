import { CST } from "../CST";
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD,
        })
    }

    init(){

    }

    preload(){

        this.load.image("title_bg", "./assets/image/title_bg.jpg")

        this.load.image("options_button", "./assets/image/options_button.png")

        this.load.image("play_button", "./assets/image/play_button.png")

        this.load.image("logo", "./assets/image/logo.png")

        this.load.spritesheet("cat", "./assets/sprite/cat.png", {
            frameHeight: 32,
            frameWidth: 32
        })

        this.load.audio("title_music", "./assets/audio/shuinvy-childhood.mp3")

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff // white
            }
        })

        //simulate long load
        // for(let i = 0; i < 100; i++){
        //     this.load.spritesheet("cat" + i, "./assets/sprite/cat.png", {
        //         frameHeight: 32,
        //         frameWidth: 32
        //     })
        // }

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
            console.log(percent);
        })

        this.load.on("complete", ()=>{
            console.log('done');
        })
    }
    // All Scenes need a create method. optinally can have init(), preload(), and update()
    // Can pass data from one scene to another as a parameter.
    create(){                               
        this.scene.start(CST.SCENES.MENU, "Hello from load scene")  // Passes "Hello" message to MENU's init method.
    }
}