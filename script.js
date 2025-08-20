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

  pixel13 = new Sprite(10,10,19,19);
  creatingPixels(pixel13);

  pixel14 = new Sprite(10,10,19,19);
  creatingPixels(pixel14);

  pixel15 = new Sprite(10,10,19,19);
  creatingPixels(pixel15);

  pixel16 = new Sprite(10,10,19,19);
  creatingPixels(pixel16);

  pixel17 = new Sprite(10,10,19,19);
  creatingPixels(pixel17);

  pixel18 = new Sprite(10,10,19,19);
  creatingPixels(pixel18);

  pixel19 = new Sprite(10,10,19,19);
  creatingPixels(pixel19);

  pixel20 = new Sprite(10,10,19,19);
  creatingPixels(pixel20);

  pixel21 = new Sprite(10,10,19,19);
  creatingPixels(pixel21);

  pixel22 = new Sprite(10,10,19,19);
  creatingPixels(pixel22);

  pixel23 = new Sprite(10,10,19,19);
  creatingPixels(pixel23);

  pixel24 = new Sprite(10,10,19,19);
  creatingPixels(pixel24);
}


function draw() {
row1pos(pixel1, 1);
}

function creatingPixels(sprite)
{
  sprite.rotation =0;
  sprite.collider = "kinematic";
  sprite.color = "black";
}
function row1pos(sprite, numPos)
{
  sprite.pos={x:120+((numPos - 1 )*19), y: 121};
}