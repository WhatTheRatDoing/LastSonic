import { makeplayer } from "./entities/player";
import k from "./kaplayCtx";
import mainMenu from "./scenes/mainMenu";
import { makeMotobug } from "./entities/motobug";
import { makefish } from "./entities/fish";
import { makeplatformsaut } from "./entities/platformdesaut";
import { makeSonicexe } from "./entities/sonicexe";
import { makeSonicexe2 } from "./entities/sonicexe2";

let isReloading = false;


// dialogues mis en plus, si vous souhaitez les activer, de commentez "introdialog" et commentez "k.go("mainGame");" en fin de code


k.scene("introDialog", () => {
  
  k.loadSprite("sonic", "graphics/sonictalking.gif");
  k.loadSprite("tails", "graphics/tails.png");
  k.loadSound("sonic_voice", "sounds/talking.mp3", );
  // k.loadSound("tails_voice", "examples/sounds/tails_voice.wav");
  k.loadFont("mania","fonts/mania.ttf");

  const characters = {
    "sonic": {
        "sprite": "sonic",
        "name": "Sonic",
        "sound": "sonic_voice", 
    },
    "tails": {
        "sprite": "tails",
        "name": "Tails",
    },
};


const dialogs = 
[
  ["sonic", "[default]Oh salut[/default]"],
  ["tails", "[default]Hey! c'est Sonic[/default]"],
  ["sonic", "[default]Comment tu vas ?[/default]"],
  ["tails", "[default]Pas bien du tout Robotnik a volé notre ciel[/default]"],
  ["sonic", "[default]ho la vache je l'avais pas vu[/default]"],
  ["tails", "[default]oui il faut l'arreter !![/default]"],
  ["sonic", "[default]ok tu viens avec moi tails ?[/default]"],
  ["tails", "[default]nope[/default]"],
  ["sonic", "[default]Pas sympa ...[/default]"],
  ["tails", "[default]Au cas ou sonic, certaines platformes sont traversable[/default]"],
  ["sonic", "[default]...[/default]"],
  ["tails", "[default]et déplace toi avec les touche directives de l'ordinateur[/default]"],
  ["sonic", "[default]heuuu ok ... merci je devine[/default]"],
  ["tails", "[default]de rien, allez maintenant va attraper Robotnik ''qui a volé le ciel''[/default]"],
];

  let curDialog = 0;
  let isTalking = false;

const dialogText = k.add([
    k.text("", { size: 50, font: "mania" }),
    k.pos(k.width() / 2 - 190, k.height() - 500),
    { origin: "left" }, 
    k.layer("ui"),
]);

const spriteDisplay = k.add([
    k.sprite("sonic"),
    k.pos(k.width() / 2 - 300, k.height() - 1250),
    { origin: "center" }, 
    k.layer("ui"),
]);

function showDialog() {
  isTalking = true;

  const [character, text] = dialogs[curDialog];
  spriteDisplay.use(k.sprite(characters[character].sprite));
  dialogText.text = `${characters[character].name}: ${text}`;

  if (characters[character].sound) {
      k.play(characters[character].sound);
  }

  k.wait(2, () => {
      isTalking = false;
  });
}

 showDialog();

  k.onKeyPress("space", () => {
    if (isTalking) return;

    curDialog++;
    if (curDialog >= dialogs.length) {
        k.go("mainGame");
    } else {
        showDialog();
    }
});
});

k.go("introDialog");



k.scene("mainGame", () => {
  let isReloading = false;

  
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
k.loadSprite("platforms18", "graphics/3.png");
k.loadSprite("platforms19", "graphics/4.png");
k.loadSprite("platforms20", "graphics/5.png");
k.loadSprite("platforms21", "graphics/7.png");
k.loadSprite("platforms22", "graphics/2.png");


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
      from: 5, to:10 , loop: true, speed: 10
    },
      run: {
          from: 32, to: 39, loop: true, speed: 10
      },

      crouch: {
        from: 16, to: 20, loop: false, speed: 10
    },

      crouchspeed: {
        from: 48, to: 63, loop: true, speed: 10
    },
    crouchrun: {
      from: 64, to: 79, loop: true, speed: 10
  },
      jump: {
          from: 80, to: 95, loop: true, speed: 120
      },
  },
});

k.loadSprite("ring","graphics/ring.png", {
  sliceX: 16,
  SliceY: 1,
  anims: {
      spin: {
          from: 0, to: 15, loop: true, speed: 30
      },
  },
});
k.loadSprite("motobug","graphics/motobug.png", {
  sliceX: 5,
  SliceY: 1,
  anims: {
      run: {
          from: 0, to: 4, loop: true, speed: 8
      },
  },
});
k.loadSprite("fish","graphics/fish.png", {
  sliceX: 1,
  anims: {
      fishing: {
          from: 0, to: 0, loop: true, speed: 8
      },
  },
});
k.loadSprite("platformsaut","graphics/S2RSC.png", {
  sliceX: 1,
  anims: {
      sauter: {
          from: 0, to: 0, loop: true, speed: 8
      },
  },
});

k.loadSprite("sonicexe","graphics/sonicexe.png", {
  sliceX: 1,
  anims: {
      idles: {
          from: 0, to: 0, loop: true, speed: 10
      },
  },
});

k.loadSprite("sonicexechase","graphics/flyingexe.png", {
  sliceX: 1,
  anims: {
    chase: {
          from: 0, to: 0, loop: true, speed: 10
      },
  },
});





k.loadFont("mania","fonts/mania.ttf");

k.loadSound("destroy","sounds/deathtosmt.mp3");
k.loadSound("hurt","sounds/death.mp3");
k.loadSound("hyper-ring","sounds/deathtosmt.mp3");
k.loadSound("jump","sounds/jump.mp3");
k.loadSound("ring","sounds/sonic-spindash.mp3");
k.loadSound("city","sounds/sonic-spindash.mp3");
k.loadSound("speed","sounds/sonic-spindash.mp3");
k.loadSound("exe","sounds/sonic-exe-laugh.mp3");
k.loadSound("crunch","sounds/crunch.mp3");
k.loadSound("AHHHH","sounds/AHHHH.mp3");
k.loadSound("bounce","sounds/bounce.mp3");
k.loadSound("musicsad","sounds/sadmusic.mp3");
k.loadSound("cours","sounds/cours.mp3");
k.loadSound("runfast","sounds/run-sonic-exe.mp3");
k.loadSound("horror","sounds/horror-jump.mp3");
k.loadSound("RUN","sounds/rrrrruuuuun.mp3");
k.loadSound("scream","sounds/sonicscream.mp3");
let player = makeplayer();

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
  { sprite: "platforms10", posX: bgPieceWidth * 3.996},
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
        k.rect(k.width()*10, k.height()+900),
        k.pos(0, 0),                  
        k.color(120, 200, 255),        
        { z: -1 }                    
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

/*
k.add([
  k.sprite("platforms11"),
  k.pos(500,k.height() - 2000),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(200, 200),     
      k.vec2(250, 200),   
      k.vec2(250, 250),   
      k.vec2(200, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms12"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 148),     
      k.vec2(60, 148),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/

//platform13
/*
k.add([
  k.sprite("platforms13"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 146),     
      k.vec2(75, 146),   
      k.vec2(250, 230),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms13"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(210, 210),     
      k.vec2(250, 210),   
      k.vec2(250, 260),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms13"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 0),     
      k.vec2(60, 0),   
      k.vec2(60, 100),   
      k.vec2(0, 100),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/





//platform14

/*
k.add([
  k.sprite("platforms14"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(180, 142),     
      k.vec2(255, 142),   
      k.vec2(255, 250),   
      k.vec2(-20, 230),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms14"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 205),     
      k.vec2(50, 195),   
      k.vec2(50, 250),   
      k.vec2(0, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms14"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(195, 3),     
      k.vec2(255, 3),   
      k.vec2(255, 80),   
      k.vec2(195, 80),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/


//platforms 15
/*
k.add([
  k.sprite("platforms15"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 250),     
      k.vec2(0, 135),   
      k.vec2(255, 160),   
      k.vec2(255, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms15"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 250),     
      k.vec2(0, 160),   
      k.vec2(255, 135),   
      k.vec2(255, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms15"),
  k.pos(500,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(35, 50),     
      k.vec2(35, 37),   
      k.vec2(220, 37),   
      k.vec2(220, 50),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

*/


//platforms16
/*
k.add([
  k.sprite("platforms16"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 250),     
      k.vec2(0, 75),   
      k.vec2(120, 100),   
      k.vec2(120, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms16"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(120, 100),     
      k.vec2(120, 250),   
      k.vec2(255, 250),   
      k.vec2(255, 140),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/
/*
k.add([
  k.sprite("platforms17"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(115, 95),     
      k.vec2(115, 250),   
      k.vec2(255, 250),   
      k.vec2(255, 140),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms17"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(35, 110),     
      k.vec2(35, 125),   
      k.vec2(115, 125),   
      k.vec2(115, 95),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms17"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 205),     
      k.vec2(0, 255),   
      k.vec2(115, 255),   
      k.vec2(115, 240),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/

//platforms 18 
/*
k.add([
  k.sprite("platforms18"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(38, 130),     
      k.vec2(218, 130),    
      k.vec2(218, 100),     
      k.vec2(38, 100),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  "passthroughPlatform",
  { z: 1 }
]);

k.add([
  k.sprite("platforms18"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 200),     
      k.vec2(255, 200),    
      k.vec2(255, 255),     
      k.vec2(0, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);
*/
// platform 19

/*k.add([
  k.sprite("platforms19"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 100),      
      k.vec2(200, 100),    
      k.vec2(200, 255),      
      k.vec2(130, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 130),      
      k.vec2(125, 130),    
      k.vec2(125, 255),      
      k.vec2(5, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(195, 70),      
      k.vec2(255, 70),    
      k.vec2(255, 255),      
      k.vec2(195, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);*/


// platform 20

/*k.add([
  k.sprite("platforms20"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(68, 20),      
      k.vec2(255, 20),    
      k.vec2(255, 255),      
      k.vec2(68, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms20"),
  k.pos(500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(4, 70),      
      k.vec2(63, 70),    
      k.vec2(63, 255),      
      k.vec2(4, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);*/

//platform21

/*k.add([
  k.sprite("platforms21"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 195),     
      k.vec2(0, 255),   
      k.vec2(130, 255),   
      k.vec2(130, 195),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
])

k.add([
  k.sprite("platforms21"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(70, 195),     
      k.vec2(70, 255),   
      k.vec2(120, 255),   
      k.vec2(125, 135),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);



k.add([
  k.sprite("platforms21"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(125, 135),     
      k.vec2(125, 255),   
      k.vec2(255, 255),   
      k.vec2(255, 135),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);*/

//plateforms22
/*
k.add([
  k.sprite("platforms22"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 135),     
      k.vec2(0, 255),   
      k.vec2(130, 255),   
      k.vec2(130, 165),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms22"),
  k.pos(600,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 255),     
      k.vec2(130, 165),   
      k.vec2(255, 210),   
      k.vec2(255, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

*/

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

k.add([
  k.sprite("platforms22"),
  k.pos(12500,k.height() -1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 135),     
      k.vec2(0, 255),   
      k.vec2(130, 255),   
      k.vec2(130, 165),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms22"),
  k.pos(12500,k.height() -1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 255),     
      k.vec2(130, 165),   
      k.vec2(255, 210),   
      k.vec2(255, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(14000, k.height() - 1100),
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
  k.pos(15500, k.height() - 1100),
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
  k.sprite("platforms19"),
  k.pos(17000, k.height() - 1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 100),      
      k.vec2(200, 100),    
      k.vec2(200, 255),     
      k.vec2(130, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(17000, k.height() - 1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 130),     
      k.vec2(125, 130),   
      k.vec2(125, 255),      
      k.vec2(5, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(17000, k.height() - 1100),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(195, 70),      
      k.vec2(255, 70),    
      k.vec2(255, 255),     
      k.vec2(195, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(18500, k.height() - 1875),
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
  k.sprite("platforms16"),
  k.pos(20000,k.height() - 1115),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 250),     
      k.vec2(0, 75),   
      k.vec2(120, 100),   
      k.vec2(120, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms16"),
  k.pos(20000,k.height() - 1115),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(120, 100),     
      k.vec2(120, 250),   
      k.vec2(255, 250),   
      k.vec2(255, 140),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);


k.add([
  k.sprite("platforms13"),
  k.pos(21500,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 135),     
      k.vec2(75, 135),   
      k.vec2(250, 230),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms13"),
  k.pos(21500,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(210, 210),     
      k.vec2(250, 210),   
      k.vec2(250, 260),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms13"),
  k.pos(21500,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 0),     
      k.vec2(60, 0),   
      k.vec2(60, 100),   
      k.vec2(5, 100),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);


k.add([
  k.sprite("platforms12"),
  k.pos(21495,k.height() - 2300),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 148),     
      k.vec2(60, 148),   
      k.vec2(60, 250),   
      k.vec2(5, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms14"),
  k.pos(24000,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(180, 142),     
      k.vec2(255, 142),   
      k.vec2(255, 250),   
      k.vec2(-20, 230),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms14"),
  k.pos(24000,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 205),     
      k.vec2(50, 195),   
      k.vec2(50, 250),   
      k.vec2(0, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms14"),
  k.pos(24000,k.height() - 1090),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(195, 3),     
      k.vec2(255, 3),   
      k.vec2(255, 80),   
      k.vec2(195, 80),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms2"),
  k.pos(25500, k.height() - 1065),
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
  k.pos(25500, k.height() - 1065),
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
  k.sprite("platforms11"),
  k.pos(24000,k.height() - 2500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(200, 200),     
      k.vec2(250, 200),   
      k.vec2(250, 250),   
      k.vec2(200, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(27000, k.height() - 1450),
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

k.add([
  k.sprite("platforms3"),
  k.pos(28500, k.height() - 1450),
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
  k.pos(30000, k.height() - 1450),
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

k.add([
  k.sprite("platforms21"),
  k.pos(31500,k.height() - 1450),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 195),     
      k.vec2(0, 255),   
      k.vec2(130, 255),   
      k.vec2(130, 195),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 },
])

k.add([
  k.sprite("platforms21"),
  k.pos(31500,k.height() - 1450),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(70, 195),     
      k.vec2(70, 255),   
      k.vec2(120, 255),   
      k.vec2(125, 135),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 },
  "rampPlatform"
]);



k.add([
  k.sprite("platforms21"),
  k.pos(31500, k.height() - 1450),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(125, 135),     
      k.vec2(125, 255),   
      k.vec2(255, 255),   
      k.vec2(255, 135),
    ])
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 },
]);

//code de propulsion vers le haut :3

k.onCollide("rampPlatform", "player", (_, player) => {
  if (player.isGrounded() && player.speed > 0) {
    const horizontalBoost = player.speed * 1.2; 
    const verticalBoost = Math.min(player.speed * 1.4, 2000); 

    player.jump(verticalBoost); 
    player.move(player.flipX ? -horizontalBoost : horizontalBoost, 0); 
    player.play("jump"); 
    k.play("jump", { volume: 0.5 });
  }
});


k.add([
  k.sprite("platforms3"),
  k.pos(38000, k.height() - 0),
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
  k.pos(39500, k.height() - 0),
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
  k.sprite("platforms17"),
  k.pos(40000,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(115, 95),     
      k.vec2(115, 250),   
      k.vec2(255, 250),   
      k.vec2(255, 140),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms17"),
  k.pos(40000,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(35, 110),     
      k.vec2(35, 125),   
      k.vec2(115, 125),   
      k.vec2(115, 95),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms17"),
  k.pos(40000,k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 205),     
      k.vec2(0, 255),   
      k.vec2(115, 255),   
      k.vec2(115, 240),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms22"),
  k.pos(41500,k.height() -1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 135),     
      k.vec2(0, 255),   
      k.vec2(130, 255),   
      k.vec2(130, 165),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms22"),
  k.pos(41500,k.height() -1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 255),     
      k.vec2(130, 165),   
      k.vec2(255, 210),   
      k.vec2(255, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(43000, k.height() - 1500),
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
  k.pos(44500, k.height() - 1500),
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
  "laugh"
]);



k.onCollide("laugh", "player", (_, player) => {
  if (player.speed && !player.isBoosted) {
      player.isBoosted = true; 
      const originalSpeed = player.speed;


      player.speed = Math.min(player.speed * 0.5, player.maxSpeed);
      k.play("exe", { volume: 0.8 });

      k.wait(4, () => {
          player.speed = originalSpeed;
          player.isBoosted = false;
      });
  }
});

k.add([
  k.sprite("platforms3"),
  k.pos(46000, k.height() - 1500),
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
  k.sprite("platforms19"),
  k.pos(47500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(130, 100),      
      k.vec2(200, 100),    
      k.vec2(200, 255),      
      k.vec2(130, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(47500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(5, 130),      
      k.vec2(125, 130),    
      k.vec2(125, 255),      
      k.vec2(5, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms19"),
  k.pos(47500, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(195, 70),      
      k.vec2(255, 70),    
      k.vec2(255, 255),      
      k.vec2(195, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms20"),
  k.pos(49000, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(68, 20),      
      k.vec2(255, 20),    
      k.vec2(255, 255),      
      k.vec2(68, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 },
  "laugh"
]);

k.add([
  k.sprite("platforms20"),
  k.pos(49000, k.height() - 1500),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(4, 70),      
      k.vec2(63, 70),    
      k.vec2(63, 255),      
      k.vec2(4, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 },
  "laugh"
]);

k.add([
  k.sprite("platforms3"),
  k.pos(50500, k.height() - 2550),
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
  k.pos(52000, k.height() - 2550),
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
  k.pos(53500, k.height() - 2550),
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
  "laugh"
]);
k.add([
  k.sprite("platforms3"),
  k.pos(55000, k.height() - 2550),
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
  k.pos(56500, k.height() - 2550),
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
  k.pos(58000, k.height() - 2550),
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
  k.pos(59500, k.height() - 2550),
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
  k.sprite("platforms18"),
  k.pos(61000, k.height() - 2550),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(38, 130),     
      k.vec2(218, 130),    
      k.vec2(218, 100),     
      k.vec2(38, 100),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  "passthroughPlatform",
  { z: 1 }
]);

k.add([
  k.sprite("platforms18"),
  k.pos(61000, k.height() - 2550),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 200),     
      k.vec2(255, 200),    
      k.vec2(255, 255),     
      k.vec2(0, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms3"),
  k.pos(62500, k.height() - 2550),
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
  k.sprite("platforms18"),
  k.pos(63000, k.height() - 2550),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(38, 130),     
      k.vec2(218, 130),    
      k.vec2(218, 100),     
      k.vec2(38, 100),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms18"),
  k.pos(63000, k.height() - 2550),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(0, 200),     
      k.vec2(255, 200),    
      k.vec2(255, 255),     
      k.vec2(0, 255),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.add([
  k.sprite("platforms18"),
  k.pos(63000, k.height() - 2550),
  k.area({ 
    shape: new k.Polygon([
      k.vec2(240, -100),     
      k.vec2(300, 0),   
      k.vec2(300, 250),
      k.vec2(240, 250),
    ])
    
  }),
  k.scale(6),
  k.body({ isStatic: true }),
  { z: 1 }
]);

k.onCollide("passthroughPlatform", "player", (_, player) => {
  if (player.speed && !player.isBoosted) {
      player.isBoosted = true;
      const originalSpeed = player.speed;

      player.speed = Math.min(player.speed * 0.5, player.maxSpeed);
      k.play("musicsad", { volume: 0.5 });

      spawnExe();

      k.wait(4, () => {
          player.speed = originalSpeed;
          player.isBoosted = false;
      });
  }
});







// logique motobug
k.onCollide("enemy", "player", (enemy, player) => {
  if (!player.isGrounded()) {
    k.play("destroy", {volume: 0.5});
    k.play("hyper-ring", {volume: 0.5});
    k.destroy(enemy);
    player.jump(player.jumpforce);
    player.play("jump");
  } else {
    k.play("hurt", {volume: 0.5});
    
    if (!isReloading) {
      isReloading = true;
      setTimeout(() => {
        k.go("mainGame");
      }, 500); 
    }
  }
});



let motobugs = [];  
let positionOccupee = [];  

const spawnMotoBug = () => {

  const positions = [
    k.vec2(1950, 1080),
    k.vec2(2950, 1080),
    k.vec2(3950, 1080),
    k.vec2(4950, 1080),
    k.vec2(5950, 1080),
   
    k.vec2(8950, 680),
    k.vec2(9950, 680),
    k.vec2(10450, 680),
    k.vec2(12450, 680),
    k.vec2(15450, 1080),

    k.vec2(20050, 250),
    k.vec2(25450, 680),
    k.vec2(28450, 670),
  ];


  const availablePositions = positions.filter(position => 
    !positionOccupee.some(posoccupee => 
      posoccupee.x === position.x && posoccupee.y === position.y
    )
  );

  if (availablePositions.length === 0) return;  


  const position = availablePositions[k.randi(0, availablePositions.length - 1)];

  const motobug = makeMotobug(position);
  motobugs.push(motobug);  
  positionOccupee.push(position);  
  
  motobug.animate("pos", [k.vec2(position.x, position.y + 500), k.vec2(position.x - 200, position.y + 500)], {
    duration: 2, 
    direction: "ping-pong", 
  });

  motobug.onExitScreen(() => {
    if (motobug.pos.x < 0) {
      k.destroy(motobug);
      motobugs = motobugs.filter(m => m !== motobug);  
      positionOccupee = positionOccupee.filter(pos => 
        pos.x !== position.x || pos.y !== position.y
      );  
    }
  });

  const waitTime = k.rand(0.1, 0.2);
  k.wait(waitTime, spawnMotoBug); 
};

spawnMotoBug();


//fish logique

k.onCollide("enemyfish", "player", (_, player) => {
  k.play("crunch", { volume: 0.5 });
  if (!isReloading) {
    isReloading = true;
    setTimeout(() => {
      k.go("mainGame");
    }, 500); 
  }
});



let fishs = [];  
let poissonOccupee = [];  

const spawnPoisson = () => {

  const positions = [
    k.vec2(6300, 1580),
    k.vec2(23200, 1580),
    k.vec2(23800, 1580),
    k.vec2(39000, 2500),
    k.vec2(6300, 1580),
  
  ];


  const availablePositions = positions.filter(position => 
    !poissonOccupee.some(poisoccupee => 
      poisoccupee.x === position.x && poisoccupee.y === position.y
    )
  );

  if (availablePositions.length === 0) return;  


  const position = availablePositions[k.randi(0, availablePositions.length - 1)];

  const fish = makefish(position);
  fishs.push(fish);  
  poissonOccupee.push(position);  
  
  fish.animate("pos", [k.vec2(position.x , position.y - 1500), k.vec2(position.x , position.y + 2000)], {
    duration: 1.5, 
    direction: "ping-pong", 
  });

  fish.onExitScreen(() => {
    if (fish.pos.x < 0) {
      k.destroy(fish);
      fishs = fishs.filter(m => m !== fish);  
      poissonOccupee = poissonOccupee.filter(pos => 
        pos.x !== position.x || pos.y !== position.y
      );  
    }
  });

  const waitTime = k.rand(0.1, 0.2);
  k.wait(waitTime, spawnPoisson); 
};

spawnPoisson();



//platformsaut logique

let platformssaut = [];  
let platformOccupee = [];  

const spawnPlatformsaut = () => {

  const positions = [
    k.vec2(39000, 2650),
  
  ];


  const availablePositions = positions.filter(position => 
    !platformOccupee.some(platformoccupee => 
      platformoccupee.x === position.x && platformoccupee.y === position.y
    )
  );

  if (availablePositions.length === 0) return;  


  const position = availablePositions[k.randi(0, availablePositions.length - 1)];

  const platformdesaut = makeplatformsaut(position);
  platformssaut.push(platformdesaut);  
  platformOccupee.push(position);  
  
  platformdesaut.animate("pos", [k.vec2(position.x , position.y ), k.vec2(position.x , position.y )], {
    duration: 1.5, 
    direction: "ping-pong", 
  });

  platformdesaut.onExitScreen(() => {
    if (platformdesaut.pos.x < 0) {
      k.destroy(platformdesaut);
      platformssaut = platformssaut.filter(m => m !== platformdesaut);  
      platformOccupee = platformOccupee.filter(pos => 
        pos.x !== position.x || pos.y !== position.y
      );  
    }
  });

  const waitTime = k.rand(0.1, 0.2);
  k.wait(waitTime, spawnPlatformsaut); 
};

spawnPlatformsaut();


k.onCollide("saut", "player", (_, player) => {
  if (!player.isGrounded()) {
    player.jump(player.jumpforce * 2);
    k.play("bounce",{volume: 0.5})
  }
  // k.play("bounce",{volume: 0.5})

  // k.go("gameover");
});



let exes = [];  
let exeOccupe = [];  


const spawnExe = () => {

  const positions = [
    k.vec2(63500, -500),
  ];

  const availablePositions = positions.filter(position => 
    !exeOccupe.some(exeoccupe => 
      exeoccupe.x === position.x && exeoccupe.y === position.y
    )
  );

  if (availablePositions.length === 0) return;  

  const position = availablePositions[k.randi(0, availablePositions.length - 1)];

  const exe = makeSonicexe(position);
  exes.push(exe);  
  exeOccupe.push(position);  

  exe.animate("idles", [k.vec2(position.x , position.y - 500), k.vec2(position.x , position.y + 500)], {
    duration: 5, 
    direction: "ping-pong", 
  });

  exe.onExitScreen(() => {
    if (exe.pos.x < 0) {
      k.destroy(exe);
      exes = exes.filter(m => m !== exe);  
      exeOccupe = exeOccupe.filter(pos => 
        pos.x !== position.x || pos.y !== position.y
      );  
    }
  });

  k.wait(6, () => {
    k.play("RUN");
  });


  k.wait(10, () => {
    exe.action = "pursuit"; 
    playMusicAfterDelay();
  });

  const waitTime = k.rand(0.1, 0.2);
  k.wait(waitTime, spawnExe); 
};

function playMusicAfterDelay() {
  k.wait(0, () => {
    k.play("runfast"); 
  });


  k.wait(11, () => {
    k.play("runfast"); 
  });
}



let speed = 60;
const maxSpeed = 10000;
const speedIncrement = 4.5;
let path = [];
let currentWaypointIndex = 0;  

k.onUpdate("exe", (enemy) => {
    switch (enemy.action) {
        case "observe": {
            if (lineOfSight(enemy, player)) {
                enemy.action = "pursuit";
                currentWaypointIndex = 0; 
                
            }
            break;
        }

        case "pursuit": {
          
            if (lineOfSight(enemy, player)) {
                enemy.moveTo(player.pos, speed);  
                currentWaypointIndex = 0; 
            } else {
                path = createPath(enemy.pos, player.pos);  

                if (currentWaypointIndex < path.length) {
                    const nextPoint = path[currentWaypointIndex];
                    const distanceToWaypoint = enemy.pos.dist(nextPoint);  

                    if (distanceToWaypoint < 20) {  
                        currentWaypointIndex++;  
                    } else {
                        enemy.moveTo(nextPoint, speed);  
                    }
                    if (speed < maxSpeed) {
                      speed += speedIncrement;
                  }
                    
                }

                if (currentWaypointIndex >= path.length) {
                    if (lineOfSight(enemy, player)) {
                        enemy.action = "pursuit"; 
                        currentWaypointIndex = 0; 
                    } else {
                        enemy.action = "observe"; 
                    }
                }
            }

            if (enemy.pos.dist(player.pos) < 50) {
              k.play("scream", { volume: 0.5 });
              k.go("game over");  
          }
            break;
        }
    }
});

function lineOfSight(enemy, target) {
    const ray = k.raycast(enemy.pos, target.pos);  
    return ray === null;  
}

function createPath(startPos, endPos) {
    const points = [];
    const stepSize = 50;  
    let currentX = startPos.x;
    let currentY = startPos.y;
    while (Math.abs(currentX - endPos.x) > stepSize || Math.abs(currentY - endPos.y) > stepSize) {
        currentX += Math.sign(endPos.x - currentX) * stepSize;
        currentY += Math.sign(endPos.y - currentY) * stepSize;
        points.push(k.vec2(currentX, currentY));
    }
    points.push(endPos);  
    return points;
}













// code bien lourd au niveau du jeu, a ammeliorer

/*
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



k.scene("game over", () => {


  k.add([
      k.text("Ce n'etait Robotnik qui avait volé le ciel", {
          size: 48,
          font: "sink",
          color: k.rgb(255, 0, 0)
      }),
      k.pos(k.width() / 2, k.height() / 2 - 100),
      k.anchor("center"), 
      k.layer("ui")
  ]);


  const restartButton = k.add([
      k.rect(200, 60), 
      k.pos(k.width() / 2 - 100, k.height() / 2), 
      k.color(0, 0, 255),
      k.anchor("center"),
      k.layer("ui"),
      k.area() 
  ]);


  k.add([
      k.text("Restart", { size: 24, font: "sink" }),
      k.pos(k.width() / 2, k.height() / 2), 
      k.anchor("center"),
      k.layer("ui")
  ]);

  restartButton.onClick(() => {
      k.go("mainGame"); 
  });


  const quitButton = k.add([
      k.rect(200, 60), 
      k.pos(k.width() / 2 - 100, k.height() / 2 + 100),
      k.color(255, 0, 0),
      k.anchor("center"),
      k.layer("ui"),
      k.area() 
  ]);


  k.add([
      k.text("Quit", { size: 24, font: "sink" }),
      k.pos(k.width() / 2, k.height() / 2 + 100), 
      k.anchor("center"),
      k.layer("ui")
  ]);

  quitButton.onClick(() => {
      k.quit(); 
  });
});
























});





// k.go("mainGame");








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