class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {
       
            this.load.spritesheet('yuri', 'assets/yuri.png',
            { frameWidth:64, frameHeight:64});    

    } // end of preload //

    create (){

    console.log("animationScene")

    this.anims.create({
        key:'right-yuri',
        frames:this.anims.generateFrameNumbers('yuri',
        { start:0, end:2 }),
        frameRate:10,
        repeat:-1
    });

    this.anims.create({
        key:'up-yuri',
        frames:this.anims.generateFrameNumbers('yuri',
        { start:3, end:5 }),
        frameRate:10,
        repeat:-1
    });

    this.anims.create({
        key:'down-yuri',
        frames:this.anims.generateFrameNumbers('yuri',
        { start:6, end:8 }),
        frameRate:10,
        repeat:-1
    });

    this.anims.create({
        key:'left-yuri',
        frames:this.anims.generateFrameNumbers('yuri',
        { start:9, end:11 }),
        frameRate:10,
        repeat:-1
    });


    // this.add.sprite(100,100, 'monkiddo').play('left-monkiddo').setScale(2)
    // this.add.sprite(200,100, 'monkiddo').play('up-monkiddo').setScale(2)
    // this.add.sprite(300,100, 'monkiddo').play('down-monkiddo').setScale(2)
    // this.add.sprite(400,100, 'monkiddo').play('right-monkiddo').setScale(2)

    this.player = this.physics.add.sprite(400,400, 'yuri')

    // this.fireGroup = this.add.group({
    //     key: 'fire',
    //     repeat: 15,
    //     setXY: { x: 50, y: 100, 
    //         stepX: Phaser.Math.Between(50,100)
    //     }
    // });
    // this.fireGroup.children.iterate( c =>{ 
    //     c.play('burn').setScale(Phaser.Math.Between(0.5,2))
    // })

    // this.fireGroup2 = this.add.group({
    //     key: 'fire',
    //     repeat: 15,
    //     setXY: { x: 50, y: 200, 
    //         stepX: Phaser.Math.Between(50,100)
    //     }
    // });
    // this.fireGroup2.children.iterate( c =>{ 
    //     c.play('burn').setScale(Phaser.Math.Between(0.5,2))
    // })

    // this.fireGroup3 = this.add.group({
    //     key: 'fire',
    //     repeat: 15,
    //     setXY: { x: 50, y: 300, 
    //         stepX: Phaser.Math.Between(50,100)
    //     }
    // });
    // this.fireGroup3.children.iterate( c =>{ 
    //     c.play('burn').setScale(1.2)
    // })
        
    this.cursors = this.input.keyboard.createCursorKeys();

    } // end of create //

    update () {

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
        }

    } // end of update // 
}