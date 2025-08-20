function setup() {
  createCanvas(800, 800);
  background(100);


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

  pixel25 = new Sprite(10,10,19,19);
  creatingPixels(pixel25);

  pixel26 = new Sprite(10,10,19,19);
  creatingPixels(pixel26);

  pixel27 = new Sprite(10,10,19,19);
  creatingPixels(pixel27);

  pixel28 = new Sprite(10,10,19,19);
  creatingPixels(pixel28);

  pixel29 = new Sprite(10,10,19,19);
  creatingPixels(pixel29);

  pixel30 = new Sprite(10,10,19,19);
  creatingPixels(pixel30);


    //2st row
  pixel41 = new Sprite(10,10,19,19);
  creatingPixels(pixel41);

  pixel42 = new Sprite(10,10,19,19);
  creatingPixels(pixel42);

  pixel43 = new Sprite(10,10,19,19);
  creatingPixels(pixel43);

  pixel44 = new Sprite(10,10,19,19);
  creatingPixels(pixel44);

  pixel45 = new Sprite(10,10,19,19);
  creatingPixels(pixel45);

  pixel46 = new Sprite(10,10,19,19);
  creatingPixels(pixel46);

  pixel47 = new Sprite(10,10,19,19);
  creatingPixels(pixel47);

  pixel48 = new Sprite(10,10,19,19);
  creatingPixels(pixel48);

  pixel49 = new Sprite(10,10,19,19);
  creatingPixels(pixel49);

  pixel50 = new Sprite(10,10,19,19);
  creatingPixels(pixel50);

  pixel51 = new Sprite(10,10,19,19);
  creatingPixels(pixel51);

  pixel52 = new Sprite(10,10,19,19);
  creatingPixels(pixel52);

  pixel53 = new Sprite(10,10,19,19);
  creatingPixels(pixel53);

  pixel54 = new Sprite(10,10,19,19);
  creatingPixels(pixel54);

  pixel55 = new Sprite(10,10,19,19);
  creatingPixels(pixel55);

  pixel56 = new Sprite(10,10,19,19);
  creatingPixels(pixel56);

  pixel57 = new Sprite(10,10,19,19);
  creatingPixels(pixel57);

  pixel58 = new Sprite(10,10,19,19);
  creatingPixels(pixel58);

  pixel59 = new Sprite(10,10,19,19);
  creatingPixels(pixel59);

  pixel60 = new Sprite(10,10,19,19);
  creatingPixels(pixel60);

  pixel31 = new Sprite(10,10,19,19);
  creatingPixels(pixel31);

  pixel32 = new Sprite(10,10,19,19);
  creatingPixels(pixel32);

  pixel33 = new Sprite(10,10,19,19);
  creatingPixels(pixel33);

  pixel34 = new Sprite(10,10,19,19);
  creatingPixels(pixel34);

  pixel35 = new Sprite(10,10,19,19);
  creatingPixels(pixel35);

  pixel36 = new Sprite(10,10,19,19);
  creatingPixels(pixel36);

  pixel37 = new Sprite(10,10,19,19);
  creatingPixels(pixel37);

  pixel38 = new Sprite(10,10,19,19);
  creatingPixels(pixel38);

  pixel39 = new Sprite(10,10,19,19);
  creatingPixels(pixel39);

  pixel40 = new Sprite(10,10,19,19);
  creatingPixels(pixel40);

}


function draw() {

  //row1////////////////
Position(pixel1, 1, 1);
Position(pixel2, 2, 1);
Position(pixel3, 3, 1);
Position(pixel4, 4, 1);
Position(pixel5, 5, 1);
Position(pixel6, 6, 1);
Position(pixel7, 7, 1);
Position(pixel8, 8, 1);
Position(pixel9, 9, 1);
Position(pixel10, 10, 1);
Position(pixel11, 11, 1);
Position(pixel12, 12, 1);
Position(pixel13, 13, 1);
Position(pixel14, 14, 1);
Position(pixel15, 15, 1);
Position(pixel16, 16, 1);
Position(pixel17, 17, 1);
Position(pixel18, 18, 1);
Position(pixel19, 19, 1);
Position(pixel20, 20, 1);
Position(pixel21, 21, 1);
Position(pixel22, 22, 1);
Position(pixel23, 23, 1);
Position(pixel24, 24, 1);
Position(pixel25, 25, 1);
Position(pixel26, 26, 1);
Position(pixel27, 27, 1);
Position(pixel28, 28, 1);
Position(pixel29, 29, 1);
Position(pixel30, 30, 1);
//////////////////////////
//row2
Position(pixel31, 1, 2);
Position(pixel32, 2, 2);
Position(pixel33, 3, 2);
Position(pixel34, 4, 2);
Position(pixel35, 5, 2);
Position(pixel36, 6, 2);
Position(pixel37, 7, 2);
Position(pixel38, 8, 2);
Position(pixel39, 9, 2);
Position(pixel40, 10, 2);
Position(pixel41, 11, 2);
Position(pixel42, 12, 2);
Position(pixel43, 13, 2);
Position(pixel44, 14, 2);
Position(pixel45, 15, 2);
Position(pixel46, 16, 2);
Position(pixel47, 17, 2);
Position(pixel48, 18, 2);
Position(pixel49, 19, 2);
Position(pixel50, 20, 2);
Position(pixel51, 21, 2);
Position(pixel52, 22, 2);
Position(pixel53, 23, 2);
Position(pixel54, 24, 2);
Position(pixel55, 25, 2);
Position(pixel56, 26, 2);
Position(pixel57, 27, 2);
Position(pixel58, 28, 2);
Position(pixel59, 29, 2);
Position(pixel60, 30, 2);

}

function creatingPixels(sprite)
{
  sprite.rotation =0;
  sprite.collider = "kinematic";
  sprite.color = "yellow";
}
function Position(sprite, numPos, rowPos)
{
  sprite.pos={x:120+((numPos - 1 )*19), y: 121+((rowPos-1)*19)};
}
