class level2 extends Phaser.Scene {
  constructor() {
    super({
      key: "level2",
    });

    // Put global variable here
  }

    init(data) {
      this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level2", "assets/maze.tmj");

    // Step 2 : Preload any images here
    this.load.image("pipoyaImg", "assets/pipoya.png");
    
    //grass
    this.load.spritesheet('object','assets/object.png',{frameWidth:32, frameHeight:32});

    this.load.spritesheet('girl', 'assets/yuri.png', {frameWidth: 64, frameHeight: 64});
  }

  create() {
    
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "level2" });


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
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    

     //grassAnimation
this.anims.create({
  key:'grassAnim',
  frames:this.anims.generateFrameNumbers('object',
  { start:2, end:3 }),
  frameRate:10,
  repeat:-1
});

    this.grassGroup=this.physics.add.group()

    var grass1 = map.findObject("grassLayer", (obj) => obj.name === "grass1");
    this.grassGroup.create(grass1.x,grass1.y,"grass1").play("grassAnim");

    var grass2 = map.findObject("grassLayer", (obj) => obj.name === "grass2");
    this.grassGroup.create(grass2.x,grass2.y,"grass2").play("grassAnim");

    var grass3 = map.findObject("grassLayer", (obj) => obj.name === "grass3");
    this.grassGroup.create(grass3.x,grass3.y,"grass3").play("grassAnim");

    var grass4 = map.findObject("grassLayer", (obj) => obj.name === "grass4");
    this.grassGroup.create(grass4.x,grass4.y,"grass4").play("grassAnim");

    var grass5 = map.findObject("grassLayer", (obj) => obj.name === "grass5");
    this.grassGroup.create(grass5.x,grass5.y,"grass5").play("grassAnim");

    var grass6 = map.findObject("grassLayer", (obj) => obj.name === "grass6");
    this.grassGroup.create(grass6.x,grass6.y,"grass6").play("grassAnim");

    var grass7 = map.findObject("grassLayer", (obj) => obj.name === "grass7");
    this.grassGroup.create(grass7.x,grass7.y,"grass7").play("grassAnim");

    var grass8 = map.findObject("grassLayer", (obj) => obj.name === "grass8");
    this.grassGroup.create(grass8.x,grass8.y,"grass8").play("grassAnim");

    var grass9 = map.findObject("grassLayer", (obj) => obj.name === "grass9");
    this.grassGroup.create(grass9.x,grass9.y,"grass9").play("grassAnim");

    var grass10 = map.findObject("grassLayer", (obj) => obj.name === "grass10");
    this.grassGroup.create(grass10.x,grass10.y,"grass10").play("grassAnim");

    var grass11 = map.findObject("grassLayer", (obj) => obj.name === "grass11");
    this.grassGroup.create(grass11.x,grass11.y,"grass11").play("grassAnim");

    var grass12 = map.findObject("grassLayer", (obj) => obj.name === "grass12");
    this.grassGroup.create(grass12.x,grass12.y,"grass12").play("grassAnim");

    var grass13 = map.findObject("grassLayer", (obj) => obj.name === "grass13");
    this.grassGroup.create(grass13.x,grass13.y,"grass13").play("grassAnim");

    var grass14 = map.findObject("grassLayer", (obj) => obj.name === "grass14");
    this.grassGroup.create(grass14.x,grass14.y,"grass14").play("grassAnim");

    var grass15 = map.findObject("grassLayer", (obj) => obj.name === "grass15");
    this.grassGroup.create(grass15.x,grass15.y,"grass15").play("grassAnim");

    var grass16 = map.findObject("grassLayer", (obj) => obj.name === "grass16");
    this.grassGroup.create(grass16.x,grass16.y,"grass16").play("grassAnim");

    var grass17 = map.findObject("grassLayer", (obj) => obj.name === "grass17");
    this.grassGroup.create(grass17.x,grass17.y,"grass17").play("grassAnim");

    var grass18 = map.findObject("grassLayer", (obj) => obj.name === "grass18");
    this.grassGroup.create(grass18.x,grass18.y,"grass18").play("grassAnim");

    var grass19 = map.findObject("grassLayer", (obj) => obj.name === "grass19");
    this.grassGroup.create(grass19.x,grass19.y,"grass19").play("grassAnim");

    var grass20 = map.findObject("grassLayer", (obj) => obj.name === "grass20");
    this.grassGroup.create(grass20.x,grass20.y,"grass20").play("grassAnim");

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

  var start = map.findObject("Object Layer 1", (obj) => obj.name === "mazeStart");

  // this.player = this.physics.add.sprite(Start.x, Start.y, 'girl').setScale(0.9)
  this.player = this.physics.add.sprite(914, 615, 'girl').setScale(0.8)
  window.player = this.player;

  this.player.body.setSize(this.player.width*0.3, this.player.height*0.3)

  // this.chairLayer.setCollisionByExclusion(-1, true)
  this.buildingLayer.setCollisionByExclusion(-1, true)
  // this.decoLayer.setCollisionByExclusion(-1, true)

  // Show colliding tiles as different colours 
  // const debugGraphics = this.add.graphics().setAlpha(0.75);
  // this.buildingLayer.renderDebug(debugGraphics, {
  // tileColor: null, // Color of non-colliding tiles
  // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  // });

  // this.physics.add.collider(this.chairLayer, this.player);
  this.physics.add.collider(this.buildingLayer, this.player);
  // this.physics.add.collider(this.decoLayer, this.player);

  //window.player=this.player;

  this.player.setCollideWorldBounds(true);//don't go out of the this.map
  
  this.physics.add.overlap(
    this.player,
    this.grassGroup,
    this.collectGrass,null,this
  );

    // Add time event / movement here

    // get the tileIndex number in json, +1
    // mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    // this.cameras.main.startFollow(this.player);

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    spaceDown.on('down', function(){
    console.log("restart level2");

        this.scene.start("level2",
        //optional parameters
        {

        });
    }, this )

    // console.log("showInventory");

    //     this.scene.launch("showInventory");
  } /////////////////// end of create //////////////////////////////

  // collectGrass(player,grassGroup){
  //   console.log("grassOverlap")
  // };

  update() {
    if(this.player.x >167 && this.player.x <184 && this.player.y >109 && this.player.y <128){
      console.log("Jump to winningscene2")
      this.level2win();}

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
 
  // level1(player,title){
  //   console.log("level1 function");
  //   this.scene.start("level1");
  // }

  collectGrass(player,object){
    console.log("grass overlap player")
    object.disableBody(true,true);

    window.object=window.object+1;
  }

  level2win(){
    console.log("level2win")
    if(window.object == 40){
      this.scene.start("winningscene2")
    }
  }

} //////////// end of class world ////////////////////////
