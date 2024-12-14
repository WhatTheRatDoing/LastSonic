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
