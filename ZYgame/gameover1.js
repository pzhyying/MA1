class gameover1 extends Phaser.Scene {
  constructor() {
    super({
      key: "gameover1",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    
    this.load.image("gameover1", "assets/gameover1.jpg");

  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world" });

    // bg image
    this.add.sprite(550,310,"gameover1").setScale(0.25);

    // // rules
    // this.add.sprite(400,400,"rule_1");

    // // heart anim
    // this.heart = this.physics.add.sprite(280, 110, 'heart').play('heartAnim');

    //  // text
    //  this.add.text(320,80, 'Level 1' , { font: '32px Fipps', fill: '#000000'});
    //  this.add.text(200,600, 'press space to level 1!' , { font: '20px Fipps', fill: '#96450f'});

    
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to level1 scene');

            this.scene.start('level1',
                // Optional parameters
                {

                }
            );
        }, this)
 
  } /////////////////// end of create //////////////////////////////

  update() {


     
  } /////////////////// end of update //////////////////////////////

  // function to level 2
  // level2(player, tile){
  //   console.log("level2 function")
  //   this.scene.start("level2")
  // }

} //////////// end of class world ////////////////////////
