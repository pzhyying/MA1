class homepage extends Phaser.Scene {
  constructor() {
    super({
      key: "homepage",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    
    this.load.image("homepage", "assets/homepage.jpg");

    this.load.audio("music", "assets/bgmusic.mp3");

  }

  create() {
    console.log("*** world scene");

     // audio play

     this.music = this.sound

     .add("music",{
 
         loop : true,
 
     })
 
     .setVolume(0.4);
 
     this.music = this.music;
 
 
 
     this.music.play();

    var spaceDown = this.input.keyboard.addKey('SPACE');
    var key1 = this.input.keyboard.addKey(49);
    var key2 = this.input.keyboard.addKey(50);
    var key3 = this.input.keyboard.addKey(51);
    var key4 = this.input.keyboard.addKey(52);

    key1.on('down', function(){
      this.scene.stop("homepage");
      this.scene.start("level1");
 }, this );

  key2.on('down', function(){
      this.scene.stop("homepage");
      this.scene.start("level2");
}, this );

  key3.on('down', function(){
      this.scene.stop("homepage");
       this.scene.start("level3");
}, this );

key4.on('down', function(){
  this.scene.stop("homepage");
   this.scene.start("introend");
}, this );

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world" });

    // bg image
    this.add.sprite(550,310,"homepage").setScale(0.25);

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
            console.log('Jump to storybg scene');

            this.scene.start('storybg',
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
