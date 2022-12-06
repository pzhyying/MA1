class level3 extends Phaser.Scene {
  constructor() {
    super({
      key: "level3",
    });

    // Put global variable here
  }

    init(data) {
      this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("level3", "assets/kitchen.tmj");

    // Step 2 : Preload any images here
    this.load.image("pipoyaImg", "assets/pipoya.png");
    
    //dust
    this.load.spritesheet('object','assets/object.png',{frameWidth:32, frameHeight:32});

    this.load.spritesheet('girl', 'assets/yuri.png', {frameWidth: 64, frameHeight: 64});
  }

  create() {
    
    console.log("*** world scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });
    let map = this.make.tilemap({ key: "level3" });


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
    this.cabinetLayer = map.createLayer("cabinetLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    

     //grassAnimation
this.anims.create({
  key:'food1Anim',
  frames:this.anims.generateFrameNumbers('object',
  { start:4, end:5 }),
  frameRate:10,
  repeat:-1
});

this.anims.create({
  key:'food2Anim',
  frames:this.anims.generateFrameNumbers('object',
  { start:6, end:7 }),
  frameRate:10,
  repeat:-1
});

this.anims.create({
  key:'food3Anim',
  frames:this.anims.generateFrameNumbers('object',
  { start:8, end:9 }),
  frameRate:10,
  repeat:-1
});

this.anims.create({
  key:'food4Anim',
  frames:this.anims.generateFrameNumbers('object',
  { start:10, end:11 }),
  frameRate:10,
  repeat:-1
});

this.anims.create({
  key:'food5Anim',
  frames:this.anims.generateFrameNumbers('object',
  { start:12, end:13 }),
  frameRate:10,
  repeat:-1
});

    this.foodGroup=this.physics.add.group()

    var food1 = map.findObject("foodLayer", (obj) => obj.name === "food1");
    this.foodGroup.create(food1.x,food1.y,"food1").play("food1Anim");

    var food2 = map.findObject("foodLayer", (obj) => obj.name === "food2");
    this.foodGroup.create(food2.x,food2.y,"food2").play("food1Anim");

    var food3 = map.findObject("foodLayer", (obj) => obj.name === "food3");
    this.foodGroup.create(food3.x,food3.y,"food3").play("food1Anim");

    var food4 = map.findObject("foodLayer", (obj) => obj.name === "food4");
    this.foodGroup.create(food4.x,food4.y,"food4").play("food1Anim");

    var food5 = map.findObject("foodLayer", (obj) => obj.name === "food5");
    this.foodGroup.create(food5.x,food5.y,"food5").play("food1Anim");

    var food6 = map.findObject("foodLayer", (obj) => obj.name === "food6");
    this.foodGroup.create(food6.x,food6.y,"food6").play("food2Anim");

    var food7 = map.findObject("foodLayer", (obj) => obj.name === "food7");
    this.foodGroup.create(food7.x,food7.y,"food7").play("food2Anim");

    var food8 = map.findObject("foodLayer", (obj) => obj.name === "food8");
    this.foodGroup.create(food8.x,food8.y,"food8").play("food2Anim");

    var food9 = map.findObject("foodLayer", (obj) => obj.name === "food9");
    this.foodGroup.create(food9.x,food9.y,"food9").play("food2Anim");

    var food10 = map.findObject("foodLayer", (obj) => obj.name === "food10");
    this.foodGroup.create(food10.x,food10.y,"food10").play("food3Anim");

    var food11 = map.findObject("foodLayer", (obj) => obj.name === "food11");
    this.foodGroup.create(food11.x,food11.y,"food11").play("food3Anim");

    var food12 = map.findObject("foodLayer", (obj) => obj.name === "food12");
    this.foodGroup.create(food12.x,food12.y,"food12").play("food3Anim");

    var food13 = map.findObject("foodLayer", (obj) => obj.name === "food13");
    this.foodGroup.create(food13.x,food13.y,"food13").play("food3Anim");

    var food14 = map.findObject("foodLayer", (obj) => obj.name === "food14");
    this.foodGroup.create(food14.x,food14.y,"food14").play("food3Anim");

    var food15 = map.findObject("foodLayer", (obj) => obj.name === "food15");
    this.foodGroup.create(food15.x,food15.y,"food15").play("food4Anim");

    var food16 = map.findObject("foodLayer", (obj) => obj.name === "food16");
    this.foodGroup.create(food16.x,food16.y,"food16").play("food4Anim");

    var food17 = map.findObject("foodLayer", (obj) => obj.name === "food17");
    this.foodGroup.create(food17.x,food17.y,"food17").play("food4Anim");

    var food18 = map.findObject("foodLayer", (obj) => obj.name === "food18");
    this.foodGroup.create(food18.x,food18.y,"food18").play("food4Anim");

    var food19 = map.findObject("foodLayer", (obj) => obj.name === "food19");
    this.foodGroup.create(food19.x,food19.y,"food19").play("food4Anim");

    var food20 = map.findObject("foodLayer", (obj) => obj.name === "food20");
    this.foodGroup.create(food20.x,food20.y,"food20").play("food5Anim");

    var food21 = map.findObject("foodLayer", (obj) => obj.name === "food21");
    this.foodGroup.create(food21.x,food21.y,"food21").play("food5Anim");

    var food22 = map.findObject("foodLayer", (obj) => obj.name === "food22");
    this.foodGroup.create(food22.x,food22.y,"food22").play("food5Anim");

    var food23 = map.findObject("foodLayer", (obj) => obj.name === "food23");
    this.foodGroup.create(food23.x,food23.y,"food23").play("food5Anim");

    var food24 = map.findObject("foodLayer", (obj) => obj.name === "food24");
    this.foodGroup.create(food24.x,food24.y,"food24").play("food5Anim");

    var food25 = map.findObject("foodLayer", (obj) => obj.name === "food25");
    this.foodGroup.create(food25.x,food25.y,"food25").play("food5Anim");

    var food26 = map.findObject("foodLayer", (obj) => obj.name === "food26");
    this.foodGroup.create(food26.x,food26.y,"food26").play("food1Anim");

    var food27 = map.findObject("foodLayer", (obj) => obj.name === "food27");
    this.foodGroup.create(food27.x,food27.y,"food27").play("food2Anim");

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

  var start = map.findObject("Object Layer 1", (obj) => obj.name === "kitchenStart");

  // this.player = this.physics.add.sprite(Start.x, Start.y, 'girl').setScale(0.9)
  this.player = this.physics.add.sprite(40, 280, 'girl').setScale(0.8)
  window.player = this.player;

  this.player.body.setSize(this.player.width*0.3, this.player.height*0.3)

  // this.chairLayer.setCollisionByExclusion(-1, true)
  this.cabinetLayer.setCollisionByExclusion(-1, true)
  this.decoLayer.setCollisionByExclusion(-1, true)

  // Show colliding tiles as different colours 
  // const debugGraphics = this.add.graphics().setAlpha(0.75);
  // this.buildingLayer.renderDebug(debugGraphics, {
  // tileColor: null, // Color of non-colliding tiles
  // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  // });

  // this.physics.add.collider(this.chairLayer, this.player);
  this.physics.add.collider(this.cabinetLayer, this.player);
  this.physics.add.collider(this.decoLayer, this.player);

  //window.player=this.player;

  this.player.setCollideWorldBounds(true);//don't go out of the this.map
  
  this.physics.add.overlap(
    this.player,
    this.foodGroup,
    this.collectFood,null,this
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
    console.log("restart level3");

        this.scene.start("level3",
        //optional parameters
        {

        });
    }, this )

    // console.log("showInventory");

    //     this.scene.launch("showInventory");
  } /////////////////// end of create //////////////////////////////

  // collectFood(player,foodGroup){
  //   console.log("foodOverlap")
  // };

  update() {
    if(this.player.x >20 && this.player.x <47 && this.player.y >250 && this.player.y <314 && window.object >= 67){
      console.log("Jump to winningscene3")
      this.level3win();
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
 
  // level1(player,title){
  //   console.log("level1 function");
  //   this.scene.start("level1");
  // }

  collectFood(player,object){
    console.log("food overlap player")
    object.disableBody(true,true);

    window.object=window.object+1;
  }

  level3win(){
    console.log("level3win")
      this.scene.start("winningscene3")
    
    
  }


} //////////// end of class world ////////////////////////
