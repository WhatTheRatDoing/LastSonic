import { makeplayer } from "./entities/player";
import k from "./kaplayCtx";
import mainMenu from "./scenes/mainMenu";



k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platformstwo.PNG");
k.loadSprite("platforms3", "graphics/60.png");
k.loadSprite("platforms2", "graphics/59.png");
k.loadSprite("platforms11", "graphics/33.png");
k.loadSprite("platforms12", "graphics/36.png");
k.loadSprite("platforms13", "graphics/37.png");
k.loadSprite("platforms14", "graphics/38.png");
k.loadSprite("platforms15", "graphics/39.png");
k.loadSprite("platforms16", "graphics/41.png");
k.loadSprite("platforms17", "graphics/42.png");



k.loadSprite("platforms4", "graphics/bg-61.png")
k.loadSprite("platforms5", "graphics/bg-62.png")
k.loadSprite("platforms6", "graphics/bg-63.png")
k.loadSprite("platforms7", "graphics/bg-64.png")
k.loadSprite("platforms8", "graphics/bg-65.png")
k.loadSprite("platforms9", "graphics/bg-66.png")
k.loadSprite("platforms10", "graphics/bg-67.png")

k.loadSprite("sonic","graphics/sonic.png", {
  sliceX: 16,
  sliceY: 6,
  anims: {

    idle: {
      from: 0, to:4 , loop: false, speed: 10
    },

    idle2: {
      from: 5, to:11 , loop: true, speed: 10
    },
      run: {
          from: 32, to: 39, loop: true, speed: 10
      },
      jump: {
          from: 80, to: 95, loop: true, speed: 120
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
k.loadSound("speed","sounds/sonic-spindash.mp3");

makeplayer();

  k.setGravity(2500)


 const bgPieceWidth = 1920;

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
      k.vec2(60, 15),   
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

const slowingPlatform = k.add([
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
  { z: 1 },
  "SPEEDPlatform"
]);

k.onCollide("SPEEDPlatform", "player", (_, player) => {
  if (player.speed && !player.isBoosted) {
      player.isBoosted = true; 
      const originalSpeed = player.speed;


      player.speed = Math.min(player.speed * 2, player.maxSpeed);
      k.play("speed", { volume: 0.5 });

      k.wait(4, () => {
          player.speed = originalSpeed;
          player.isBoosted = false;
      });
  }
});



k.add([
  k.sprite("platforms3"),
  k.pos(9500, k.height() - 1500),
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
  k.pos(11000, k.height() - 1500),
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


// Ajout d'un timer
let elapsedTime = 0; // Temps écoulé en secondes
const timerText = k.add([
    k.text("TIME : 0:00", { font: "mania", size: 48 }), // Style du texte
    k.pos(20, 900), // Position initiale
    { z: 10 }, // Toujours visible au-dessus des autres éléments
]);

// Fonction pour formater le temps
const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

// Configure la caméra pour suivre Sonic
const player = k.get("player")[0]; // Suppose que le joueur est tagué avec "player"
if (player) {
    k.camPos(player.pos); // La caméra suit Sonic
}

// Fonction pour déterminer le score en fonction du temps écoulé
const determineScore = (time) => {
    if (time <= 120) return "S"; // Moins de 2 minutes
    if (time <= 150) return "A"; // 2 minutes 30 ou moins
    if (time <= 180) return "B"; // 3 minutes ou moins
    return "D"; // 3 minutes 15 ou plus
};

// Boucle de mise à jour
k.onUpdate(() => {
    // Met à jour le temps écoulé
    elapsedTime += k.dt(); // Incrémenter le temps avec le deltaTime
    timerText.text = `TIME : ${formatTime(elapsedTime)}`; // Mettre à jour l'affichage

    // Positionner le timer par rapport à la caméra
    timerText.pos = k.vec2(k.camPos().x - k.width() / 2 + 20, k.camPos().y - k.height() / 2 + 20); // Ajustez ici pour la position souhaitée
});

// Fin du jeu : Appuyez sur une touche pour afficher le score final
k.onKeyPress("end", () => {
    const finalScore = determineScore(elapsedTime); // Déterminer le score final
    k.go("gameover", { time: elapsedTime, score: finalScore }); // Aller à la scène "gameover" avec les données
});

/* 
Scène de Game Over
k.scene("gameover", ({ time, score }) => {
    k.add([
        k.text(`GAME OVER\nTIME: ${formatTime(time)}\nSCORE: ${score}`, {
            font: "mania",
            size: 64,
        }),
        k.pos(k.width() / 2, k.height() / 2),
        k.origin("center"),
    ]);
});
*/








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