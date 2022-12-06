var game;
window.onload=function(){

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
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    backgroundColor: '#000000',
    pixelArt: true,

    scene: [homepage, storybg, gameplay, world, lab, intro1, lab2, world2, introroom, 
        level1, winningscene1, world3, intromaze, level2, winningscene2, world4, introkitchen, level3, winningscene3, world5, introend]
    };

var game = new Phaser.Game(config);

window.object=0;
};