import { CST } from "../CST";
export class OptionsScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.OPTIONS,
        })
    }

    init(data){
        console.log(data);
    }
    create(){


    }

}

