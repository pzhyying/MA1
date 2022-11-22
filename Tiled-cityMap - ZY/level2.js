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
      
  
      this.grassGroup=this.physics.add.group()

      var grass1 = map.findObject("grassLayer", (obj) => obj.name === "grass1");
      this.grassGroup.create(grass1.x,grass1.y,"grass1").play("grassAnim");
  
      var grass2 = map.findObject("grassLayer", (obj) => obj.name === "grass2");
      this.grassGroup.create(grass2.x,grass2.y,"grass2").play("grassAnim");
  
      var grass3 = map.findObject("grassLayer", (obj) => obj.name === "grass3");
      this.grassGroup.create(grass3.x,grass3.y,"grass3").play("grassAnim");
  
      var grass4 = map.findObject("grassLayer", (obj) => obj.name === "grass4");
      this.grassGroup.create(dust4.x,dust4.y,"dust4").play("grassAnim");
  
      var grass5 = map.findObject("dustLayer", (obj) => obj.name === "dust5");
      this.grassGroup.create(dust5.x,dust5.y,"dust5").play("grassAnim");
  
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
    } /////////////////// end of create //////////////////////////////
  
    update() {
      // if(this.player.x >616 && this.player.x <663 && this.player.y >625 && this.player.y <625)
      // console.log("Jump to world")
      // this.world();
  
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
  
  } //////////// end of class world ////////////////////////
  