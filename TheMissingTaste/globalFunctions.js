//    ////////////////////////////////////////////////////////
// //
// // access this function using updateInventory.call(this)
// // Uses a JS function to prevent repeated codes
// // 
// ///////////////////////////////////////////////////////
// function updateInventory() {
//     console.log("*** updateInventory()")
//     // Emit events showInventory
//     this.inventory = {}
//     this.inventory.object = window.object
     
//     console.log('*** updateInventory() Emit event', this.inventory)
//     this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
//     this.invEvent("inventory", this.inventory);
//   }
  
//   ////////////////////////////////////////////////////////
//   //
//   // access this function using hitAnt
//   // Uses a JS function to prevent repeated codes
//   // 
//   ///////////////////////////////////////////////////////
//   // function hitAnt(player,Ant) {
//   //     console.log("*** Ant overlap Jollie");

//   function collectDust(player,object){
//     console.log("dust overlap player");
//     object.disableBody(true,true);

//     window.object++;
//     updateInventory.call(this)
//   }

//   //     // Shake screen
//   //    this.cameras.main.shake(100);

//   //    this.hitenemySnd.play();
  
//   //     window.heart--;
//   //     Ant.disableBody(true, true);
//   //     //this.updateInventory()
//   //     updateInventory.call(this)
 
//   //   if (window.heart == 0){
//   //     this.scene.start("gameover");
//   //     this.loselifeSnd.play();
//   //   }
//   // }
