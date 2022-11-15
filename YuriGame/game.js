var config = {
    type: Phaser.AUTO,
    width: 35*32,
    height: 20*32,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scale: {
        // mode: Phaser.Scale.NONE,
        //mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    backgroundColor: '#000000',
    pixelArt: true,

    scene: [ world, level1, level2, level3, lab]
};

var game = new Phaser.Game(config);