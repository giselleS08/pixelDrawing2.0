function setup() {
  createCanvas(600, 600);
  background(255);


  let findingPixelText = `
  ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb

  `;

  let palette1 = {
    b: color(175,0,0),//outline more than likely orange

    s:color(255,25,25),//this will be the lighter orange
    d:color(255,191,0),//yellow main color
    f:color(255,93,0)//word color like black for visibility
  };
        startButton = new Sprite();
        startButton.img = spriteArt(findingPixelText, 19, palette1);
       startButton.pos={x:375, y: 300};
        startButton.rotation =0;
        startButton.collider = "kinematic";

  //1st row
  pixel1 = new Sprite(10,10,19,19);
  creatingPixels(pixel1);

  pixel2 = new Sprite(10,10,19,19);
  creatingPixels(pixel2);

  pixel3 = new Sprite(10,10,19,19);
  creatingPixels(pixel3);

  pixel4 = new Sprite(10,10,19,19);
  creatingPixels(pixel4);

  pixel5 = new Sprite(10,10,19,19);
  creatingPixels(pixel5);

  pixel6 = new Sprite(10,10,19,19);
  creatingPixels(pixel6);

  pixel7 = new Sprite(10,10,19,19);
  creatingPixels(pixel7);

  pixel8 = new Sprite(10,10,19,19);
  creatingPixels(pixel8);

  pixel9 = new Sprite(10,10,19,19);
  creatingPixels(pixel9);

  pixel10 = new Sprite(10,10,19,19);
  creatingPixels(pixel10);

  pixel11 = new Sprite(10,10,19,19);
  creatingPixels(pixel11);

  pixel12 = new Sprite(10,10,19,19);
  creatingPixels(pixel12);
}


function draw() {
pixel1.pos={x:120, y: 121};
pixel2.pos={x:120+19, y: 121};
pixel3.pos={x:120+(2*19), y: 121};
pixel4.pos={x:120+(3*19), y: 121};
pixel5.pos={x:120+(4*19), y: 121};
pixel6.pos={x:120+(5*19), y: 121};
pixel7.pos={x:120+(6*19), y: 121};
pixel8.pos={x:120+(7*19), y: 121};
pixel9.pos={x:120+(8*19), y: 121};
pixel10.pos={x:120+(9*19), y: 121};
pixel11.pos={x:120+(10*19), y: 121};
pixel12.pos={x:120+(11*19), y: 121};
}

function creatingPixels(sprite)
{
  sprite.rotation =0;
  sprite.collider = "kinematic";
  sprite.color = "black";
}