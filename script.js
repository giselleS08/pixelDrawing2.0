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
  pixel1.rotation =0;
  pixel1.collider = "kinematic";
  pixel1.color = "black";

  pixel2 = new Sprite(10,10,19,19);
  pixel2.rotation =0;
  pixel2.collider = "kinematic";
  pixel2.color = "black";

  pixel3 = new Sprite(10,10,19,19);
  pixel3.rotation =0;
  pixel3.collider = "kinematic";
  pixel3.color = "black";

  pixel4 = new Sprite(10,10,19,19);
  pixel4.rotation =0;
  pixel4.collider = "kinematic";
  pixel4.color = "black";

  pixel5 = new Sprite(10,10,19,19);
  pixel5.rotation =0;
  pixel5.collider = "kinematic";
  pixel5.color = "black";

  pixel6 = new Sprite(10,10,19,19);
  creatingPixels(pixel6);
}


function draw() {
pixel1.pos={x:120, y: 121};
pixel2.pos={x:120+19, y: 121};
pixel3.pos={x:120+(2*19), y: 121};
pixel4.pos={x:120+(3*19), y: 121};
pixel5.pos={x:120+(4*19), y: 121};
pixel6.pos={x:120+(5*19), y: 121};
}

function creatingPixels(sprite)
{
  sprite.rotation =0;
  sprite.collider = "kinematic";
  sprite.color = "black";
}