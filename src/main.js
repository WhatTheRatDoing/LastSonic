import { makeplayer } from "./entities/player";
import k from "./kaplayCtx";
import mainMenu from "./scenes/mainMenu";



k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platformstwo.PNG");
k.loadSprite("platforms3", "graphics/60.png");
k.loadSprite("platforms2", "graphics/59.png");

k.loadSprite("platforms4", "graphics/bg-61.png")
k.loadSprite("platforms5", "graphics/bg-62.png")
k.loadSprite("platforms6", "graphics/bg-63.png")
k.loadSprite("platforms7", "graphics/bg-64.png")
k.loadSprite("platforms8", "graphics/bg-65.png")
k.loadSprite("platforms9", "graphics/bg-66.png")
k.loadSprite("platforms10", "graphics/bg-67.png")

k.loadSprite("sonic","graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {
            from: 0, to: 7, loop: true, speed: 40
        },
        jump: {
            from: 8, to: 15, loop: true, speed: 120
        },
    },
});




k.loadFont("mania","fonts/mania.ttf");

k.loadSound("destroy","sounds/Destroy.wav");
k.loadSound("hurt","sounds/Hurt.wav");
k.loadSound("hyper-ring","sounds/HyperRing.wav");
k.loadSound("jump","sounds/Jump.wav");
k.loadSound("ring","sounds/Ring.wav");
k.loadSound("city","sounds/city.wav");

makeplayer();

  k.setGravity(2500)


 const bgPieceWidth = 1920;

// Créer une série de plateformes pour couvrir plusieurs cycles
const bgPiecesData = [
  { sprite: "platforms4", posX: 0 },
  { sprite: "platforms5", posX: bgPieceWidth * 0.333},
  { sprite: "platforms6", posX: bgPieceWidth * 0.666},
  { sprite: "platforms7", posX: bgPieceWidth * 0.999},
  { sprite: "platforms8", posX: bgPieceWidth * 1.332},
  { sprite: "platforms9", posX: bgPieceWidth * 1.665},
  { sprite: "platforms10", posX: bgPieceWidth * 1.998},
  { sprite: "platforms5", posX: bgPieceWidth * 2.331},
  { sprite: "platforms6", posX: bgPieceWidth * 2.664},
  { sprite: "platforms7", posX: bgPieceWidth * 2.997}, 
  { sprite: "platforms8", posX: bgPieceWidth * 3.330}, 
  { sprite: "platforms9", posX: bgPieceWidth * 3.663}, 
  { sprite: "platforms10", posX: bgPieceWidth * 3.996} 
];


function createBgPieces() {
  return bgPiecesData.map((bg, index) => 
      k.add([k.sprite(bg.sprite),
          k.pos(bg.posX + index * bgPieceWidth, 0), 
          k.scale(10), 
          k.opacity(0.8),
          k.area()
      ]),
      k.add([
        k.rect(k.width()*10, k.height()+900), // Rectangle couvrant tout l'écran
        k.pos(0, 0),                   // Positionné au coin supérieur gauche
        k.color(120, 200, 255),        // Couleur bleu ciel (valeurs ajustables)
        { z: -1 }                      // S'assurer que ce fond est derrière tout
      ])
  );

}




let bgPieces = createBgPieces();


k.onUpdate(() => {

  if (bgPieces[0].pos.x < -bgPieceWidth) {

      bgPieces.forEach((bg, index) => {
          bg.moveTo(bgPieceWidth * (index + bgPieces.length), 0);
      });

      bgPieces = createBgPieces();
  }
});










k.add([
  k.sprite("platforms2"),
  k.pos(0, k.height() - 705),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 135),     
      k.vec2(60, 145),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms2"),
  k.pos(0, k.height() - 705),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(60, 145),     
      k.vec2(250, 135),   
      k.vec2(60, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);






k.add([
  k.sprite("platforms2"),
  k.pos(1500, k.height() - 705),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 135),     
      k.vec2(60, 145),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms2"),
  k.pos(1500, k.height() - 705),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(60, 145),     
      k.vec2(250, 135),   
      k.vec2(60, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(3000, k.height() - 1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 200),     
      k.vec2(250, 200),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(4500, k.height() - 1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 200),     
      k.vec2(250, 200),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
k.add([
  k.sprite("platforms3"),
  k.pos(6500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 200),     
      k.vec2(250, 200),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
k.add([
  k.sprite("platforms3"),
  k.pos(8000, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 200),     
      k.vec2(250, 200),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);











k.scene("main-menu", mainMenu);

// k.go("main-menu")

/*
add([
  sprite("grass"),
  pos(center()),
  area(),
  // This game object also has isStatic, so our player won't be able to move pass this
  body({ isStatic: true }),
  "grass",
]);
*/


/*
import k from "./kaplayCtx"
import game from "./scenes/game";
import mainMenu from "./scenes/mainMenu";

k.loadSprite("chemical-bg","/LastSonic/graphics/chemical-bg.png");
k.loadSprite("platforms","/LastSonic/graphics/platforms.png");
k.loadSprite("sonic","/LastSonic/graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {
            from: 0, to: 7, loop: true, speed: 40
        },
        jump: {
            from: 8, to: 15, loop: true, speed: 120
        },
    },
});


k.loadSprite("ring","/LastSonic/graphics/ring.png", {
    sliceX: 16,
    SliceY: 1,
    anims: {
        spin: {
            from: 0, to: 15, loop: true, speed: 30
        },
    },
});
k.loadSprite("motobug","/LastSonic/graphics/motobug.png", {
    sliceX: 5,
    SliceY: 1,
    anims: {
        run: {
            from: 0, to: 4, loop: true, speed: 8
        },
    },
});

k.loadFont("mania","/LastSonic/fonts/mania.ttf");

k.loadSound("destroy","/LastSonic/sounds/Destroy.wav");
k.loadSound("hurt","/LastSonic/sounds/Hurt.wav");
k.loadSound("hyper-ring","/LastSonic/sounds/HyperRing.wav");
k.loadSound("jump","/LastSonic/sounds/Jump.wav");
k.loadSound("ring","/LastSonic/sounds/Ring.wav");
k.loadSound("city","/LastSonic/sounds/city.wav");

k.scene("main-menu", mainMenu);

k.scene("game", game);

k.scene("gameover", ()=> {
    
});

k.go("main-menu")

*/