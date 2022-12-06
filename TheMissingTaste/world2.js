class world2 extends Phaser.Scene {
  constructor() {
    super({
      key: "world2",
    });

    // Put global variable here
  }

    init(data) {
      this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world", "assets/map.tmj");

    // Step 2 : Preload any images here
    this.load.image("pipoyaImg", "assets/pipoya.png");

    //dust
    this.load.spritesheet('object', 'assets/object.png', {frameWidth:32, frameHeight: 32});

    //girl
    this.load.spritesheet('girl', 'assets/yuri.png', {frameWidth: 64, frameHeight: 64});
  }

  create() {
    
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "world" });


    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    let pipoyaTiles = map.addTilesetImage("1", "pipoyaImg");
    let pipoya2Tiles = map.addTilesetImage("pipoya", "pipoyaImg");


    // Step 5  create an array of tiles
    let tilesArray = [pipoyaTiles,pipoya2Tiles];

    // Step 6  Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);
    

    // Add main player here with physics.add.sprite
    var spaceDown = this.input.keyboard.addKey('SPACE');

    this.anims.create({
      key:'right-yuri',
      frames:this.anims.generateFrameNumbers('girl',
      { start:0, end:2 }),
      frameRate:10,
      repeat:-1
  });

  this.anims.create({
      key:'up-yuri',
      frames:this.anims.generateFrameNumbers('girl',
      { start:3, end:5 }),
      frameRate:10,
      repeat:-1
  });

  this.anims.create({
      key:'down-yuri',
      frames:this.anims.generateFrameNumbers('girl',
      { start:6, end:8 }),
      frameRate:10,
      repeat:-1
  });

  this.anims.create({
      key:'left-yuri',
      frames:this.anims.generateFrameNumbers('girl',
      { start:9, end:11 }),
      frameRate:10,
      repeat:-1
  });

 

  this.player = this.physics.add.sprite(863, 251, 'girl').setScale(0.9)
  window.player = this.player;

  this.player.body.setSize(this.player.width*0.3, this.player.height*0.5)

  this.buildingLayer.setCollisionByExclusion(-1, true) 

  // Show colliding tiles as different colours 
  // const debugGraphics = this.add.graphics().setAlpha(0.75);
  // this.buildingLayer.renderDebug(debugGraphics, {
  // tileColor: null, // Color of non-colliding tiles
  // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  // });

  this.physics.add.collider(this.buildingLayer, this.player);

  //window.player=this.player;

  // this.player.setCollideWorldBounds(true);//don't go out of the this.map
  

    // Add time event / movement here

    // get the tileIndex number in json, +1
    // mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {
    if(this.player.x >416 && this.player.x <455 && this.player.y >846 && this.player.y <881) {
      console.log("Jump to introroom")
      this.introroom();
    }

    // if(this.player.x >584 && this.player.x <599 && this.player.y >315 && this.player.y <331) {
    //   console.log("Jump to level2")
    //   this.level2();
    // }

    // if(this.player.x >575 && this.player.x <623 && this.player.y >878 && this.player.y <913) {
    //   console.log("Jump to level3")
    //   this.level3();
    // }

    if(this.player.x >840 && this.player.x <887 && this.player.y >211 && this.player.y <235) {
      console.log("Jump to lab")
      this.lab();
    }


      if (this.cursors.left.isDown)
      {
          this.player.setVelocityX(-160);
          this.player.anims.play('left-yuri', true);
      }
      else if ( this.cursors.right.isDown)
      {
          this.player.setVelocityX(160);
          this.player.anims.play('right-yuri', true);
      }
      else if ( this.cursors.up.isDown)
      {
          this.player.setVelocityY(-160);
          this.player.anims.play('up-yuri', true);
      }
      else if ( this.cursors.down.isDown)
      {
          this.player.setVelocityY(160);
          this.player.anims.play('down-yuri', true);
      }
      else
      {
          this.player.setVelocity(0);
          this.player.stop();
      }
  } /////////////////// end of update //////////////////////////////
 
  introroom(player,title){
    console.log("introroom function");
    this.scene.start("introroom");
  }

  // level2(player,title){
  //   console.log("level2 function");
  //   this.scene.start("level2");
  // }

  // level3(player,title){
  //   console.log("level3 function");
  //   this.scene.start("level3");
  // }

  lab(player,title){
    console.log("lab function");
    this.scene.start("lab");
  }


} //////////// end of class world ////////////////////////
