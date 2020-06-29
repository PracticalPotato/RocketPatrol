// Create game config object
let config = {
    type: Phaser.Canvas,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

// create main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000,
}

let keyF, keyLEFT, keyRIGHT;