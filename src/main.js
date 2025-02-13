//import { CST } from "./CST";

/** @type {import("../typings/phaser")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";

console.log('hello world');

let game = new Phaser.Game({
    width: 800,
    height: 600,
    scene: [
        LoadScene,
        MenuScene,
    ],
    render:{
        pixelArt: true,
    }
});

