var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d99ea1c9-a8f8-452a-a8da-54fbe4098178"],"propsByKey":{"d99ea1c9-a8f8-452a-a8da-54fbe4098178":{"name":"earthS","frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":1,"categories":["environment"],"jsonLastModified":"2020-07-16 22:28:09 UTC","pngLastModified":"2020-01-29 19:48:19 UTC","version":"MiJKDqHkX13kkrZkobbbRTcbRUnqbQw7","sourceUrl":"assets/api/v1/animation-library/gamelab/MiJKDqHkX13kkrZkobbbRTcbRUnqbQw7/category_environment/dirt_grass.png","sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/MiJKDqHkX13kkrZkobbbRTcbRUnqbQw7/category_environment/dirt_grass.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var money = 0;
var tap = 1;
var earthS = createSprite(200, 200);
earthS.setAnimation("earthS");
earthS.x = 200;
earthS.y = 200;
earthS.scale = 0.8;

draw();
start();
drawSprites();

function start() {
  background("skyblue");
fill("red");
textSize(32);
text("$" + money, 160, 40);
}

function draw() {
  drawSprites();
  fill("green");
  noStroke();
  rect(-1, 320, 402, 100);
  if (keyWentDown("space")) {
    background("skyblue");
    money += tap;
    fill("red");
    textSize(32);
    text("$" + money, 160, 40);
  }
  
  if (mouseIsOver(earthS) && mouseWentDown()) {
    background("skyblue");
    money += tap;
    fill("red");
    textSize(32);
    text("$" + money, 160, 40);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
