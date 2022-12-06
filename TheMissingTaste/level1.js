class level1 extends Phaser.Scene {
  constructor() {
    super({
      key: "level1",
    });

    // Put global variable here
  }

    init(data) {
      this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level1", "assets/room.tmj");

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
    let map = this.make.tilemap({ key: "level1" });


    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    let pipoyaTiles = map.addTilesetImage("1", "pipoyaImg");
    let pipoya2Tiles = map.addTilesetImage("pipoya", "pipoyaImg");


    // Step 5  create an array of tiles
    let tilesArray = [pipoyaTiles,pipoya2Tiles];

   //Step 6  Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.chairLayer = map.createLayer("chairLayer",tilesArray,0,0);
    this.wallLayer = map.createLayer("wallLayer",tilesArray,0,0);
    this.objectLayer = map.createLayer("objectLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    

    //dustAnimation
  this.anims.create({
    key:'dustAnim',
    frames:this.anims.generateFrameNumbers('object',
    { start:0, end:1 }),
    frameRate:10,
    repeat:-1
});

// this.dustGroup=this.physics.add.group({
//   key:'dust',
//   repeat:5,
//   setXY:{x:100, y:100, stepX:100}
// })

// this.dustGroup2=this.physics.add.group({
//   key:'dust',
//   repeat:5,
//   setXY:{x:100, y:200, stepX:
//   Phaser.Math.Between(100,400)}
// })

// this.dustGroup.children.iterate(c=>{
//   c.play('dustAnim')
// })

// this.dustGroup2.children.iterate(c=>{
//   c.play('dustAnim')


  this.dustGroup=this.physics.add.group()

    var dust1 = map.findObject("dustLayer", (obj) => obj.name === "dust1");
    this.dustGroup.create(dust1.x,dust1.y,"dust1").play("dustAnim");

    var dust2 = map.findObject("dustLayer", (obj) => obj.name === "dust2");
    this.dustGroup.create(dust2.x,dust2.y,"dust2").play("dustAnim");

    var dust3 = map.findObject("dustLayer", (obj) => obj.name === "dust3");
    this.dustGroup.create(dust3.x,dust3.y,"dust3").play("dustAnim");

    var dust4 = map.findObject("dustLayer", (obj) => obj.name === "dust4");
    this.dustGroup.create(dust4.x,dust4.y,"dust4").play("dustAnim");

    var dust5 = map.findObject("dustLayer", (obj) => obj.name === "dust5");
    this.dustGroup.create(dust5.x,dust5.y,"dust5").play("dustAnim");

    var dust6 = map.findObject("dustLayer", (obj) => obj.name === "dust6");
    this.dustGroup.create(dust6.x,dust6.y,"dust6").play("dustAnim");

    var dust7 = map.findObject("dustLayer", (obj) => obj.name === "dust7");
    this.dustGroup.create(dust7.x,dust7.y,"dust7").play("dustAnim");

    var dust8 = map.findObject("dustLayer", (obj) => obj.name === "dust8");
    this.dustGroup.create(dust8.x,dust8.y,"dust8").play("dustAnim");

    var dust9 = map.findObject("dustLayer", (obj) => obj.name === "dust9");
    this.dustGroup.create(dust9.x,dust9.y,"dust9").play("dustAnim");

    var dust10 = map.findObject("dustLayer", (obj) => obj.name === "dust10");
    this.dustGroup.create(dust10.x,dust10.y,"dust10").play("dustAnim");

    var dust11 = map.findObject("dustLayer", (obj) => obj.name === "dust11");
    this.dustGroup.create(dust11.x,dust11.y,"dust11").play("dustAnim");

    var dust12 = map.findObject("dustLayer", (obj) => obj.name === "dust12");
    this.dustGroup.create(dust12.x,dust12.y,"dust12").play("dustAnim");

    var dust13 = map.findObject("dustLayer", (obj) => obj.name === "dust13");
    this.dustGroup.create(dust13.x,dust13.y,"dust13").play("dustAnim");

    var dust14 = map.findObject("dustLayer", (obj) => obj.name === "dust14");
    this.dustGroup.create(dust14.x,dust14.y,"dust14").play("dustAnim");

    var dust15 = map.findObject("dustLayer", (obj) => obj.name === "dust15");
    this.dustGroup.create(dust15.x,dust15.y,"dust15").play("dustAnim");

    var dust16 = map.findObject("dustLayer", (obj) => obj.name === "dust16");
    this.dustGroup.create(dust16.x,dust16.y,"dust16").play("dustAnim");

    var dust17 = map.findObject("dustLayer", (obj) => obj.name === "dust17");
    this.dustGroup.create(dust17.x,dust17.y,"dust17").play("dustAnim");

    var dust18 = map.findObject("dustLayer", (obj) => obj.name === "dust18");
    this.dustGroup.create(dust18.x,dust18.y,"dust18").play("dustAnim");

    var dust19 = map.findObject("dustLayer", (obj) => obj.name === "dust19");
    this.dustGroup.create(dust19.x,dust19.y,"dust19").play("dustAnim");

    var dust20 = map.findObject("dustLayer", (obj) => obj.name === "dust20");
    this.dustGroup.create(dust20.x,dust20.y,"dust20").play("dustAnim");

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

  var start = map.findObject("Object Layer 1", (obj) => obj.name === "roomStart");

  // this.player = this.physics.add.sprite(Start.x, Start.y, 'girl').setScale(0.9)
  this.player = this.physics.add.sprite(477, 39, 'girl').setScale(0.9)
  window.player = this.player;

    this.player.body.setSize(this.player.width*0.6)

  //this.chairLayer.setCollisionByExclusion(-1, true)
  this.objectLayer.setCollisionByExclusion(-1, true)
  this.decoLayer.setCollisionByExclusion(-1, true)
  this.wallLayer.setCollisionByExclusion(-1, true)

  // Show colliding tiles as different colours 
  // const debugGraphics = this.add.graphics().setAlpha(0.75);
  // this.buildingLayer.renderDebug(debugGraphics, {
  // tileColor: null, // Color of non-colliding tiles
  // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  // });

  //this.physics.add.collider(this.chairLayer, this.player);
  this.physics.add.collider(this.objectLayer, this.player);
  this.physics.add.collider(this.decoLayer, this.player);
  this.physics.add.collider(this.wallLayer, this.player);

  this.physics.add.overlap(
    this.player,
    this.dustGroup,
    this.collectDust,null,this
  );

  //window.player=this.player;

  this.player.setCollideWorldBounds(true);//don't go out of the this.map
  
  this.physics.add.overlap(
    this.player,
    this.dustGroup,
    this.collectDust,null,this
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

  } /////////////////// end of create //////////////////////////////

  collectDust(player,dustGroup){
    console.log("dustOverlap")
  };

  update() {
    if(this.player.x >465 && this.player.x <494 && this.player.y >28 && this.player.y <44){
    console.log("Jump to world3")
    this.level1win();}

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

  collectDust(player,object){
    console.log("dust overlap player")
    object.disableBody(true,true);

    window.object=window.object+1;
  }

  level1win(){
    if(window.object == 20){
      this.scene.start("winningscene1")
    }
  }
  

} //////////// end of class world ////////////////////////
