import k from "../kaplayCtx";

const SPEED = 5000;
const JUMP_FORCE = 2000;

export function makeplayer(){
    const player =k.add([
        k.sprite("sonic"),
        k.scale(4),
        k.area(),
        k.anchor("center"),
        k.pos(500,k.height() -1005),
        k.body(),
        { z: 10 }
      ]);


player.onGround(() => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
        player.play("run");
    }
    else {
        player.play("run");
    }
  });
  
  player.onKeyPress("space", () => {
    if (player.isGrounded()){
      player.jump(JUMP_FORCE),
      player.play("jump")
      k.play("jump", {volume: 0.5});
    }
  });
  
  player.onKeyDown("left", ()=>{
    player.move(-SPEED, 0);
    player.flipX = true;
  
    if (player.isGrounded() && player.curAnim() !== "run") {
      player.play("run");
  }
  });
  
  player.onKeyDown("right", ()=>{
    player.move(SPEED, 0);
    player.flipX = false;
  
    if (player.isGrounded() && player.curAnim() !== "run") {
      player.play("run");
  }
  });
  
  ["left", "right"].forEach((key) => {
    k.onKeyRelease(key, () => {
        if (player.isGrounded() 
          && !k.isKeyDown("left") 
        && !k.isKeyDown("right") 
        && !k.isKeyPressed("space")) {
            player.play("run");
        }
    });
  });


player.onUpdate(() => {

    k.camPos(player.worldPos());
});

player.onPhysicsResolve(() => {
    k.camPos(player.worldPos());
});



  return player

};