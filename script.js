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


  //3rd row//////////////////////////
  pixel61 = new Sprite(10,10,19,19);
  creatingPixels(pixel61);

  pixel62 = new Sprite(10,10,19,19);
  creatingPixels(pixel62);

  pixel63 = new Sprite(10,10,19,19);
  creatingPixels(pixel63);

  pixel64 = new Sprite(10,10,19,19);
  creatingPixels(pixel64);

  pixel65 = new Sprite(10,10,19,19);
  creatingPixels(pixel65);

  pixel66 = new Sprite(10,10,19,19);
  creatingPixels(pixel66);

  pixel67 = new Sprite(10,10,19,19);
  creatingPixels(pixel67);

  pixel68 = new Sprite(10,10,19,19);
  creatingPixels(pixel68);

  pixel69 = new Sprite(10,10,19,19);
  creatingPixels(pixel69);

  pixel70 = new Sprite(10,10,19,19);
  creatingPixels(pixel70);

  pixel71 = new Sprite(10,10,19,19);
  creatingPixels(pixel71);

  pixel72 = new Sprite(10,10,19,19);
  creatingPixels(pixel72);

  pixel73 = new Sprite(10,10,19,19);
  creatingPixels(pixel73);

  pixel74 = new Sprite(10,10,19,19);
  creatingPixels(pixel74);

  pixel75 = new Sprite(10,10,19,19);
  creatingPixels(pixel75);

  pixel76 = new Sprite(10,10,19,19);
  creatingPixels(pixel76);

  pixel77 = new Sprite(10,10,19,19);
  creatingPixels(pixel77);

  pixel78 = new Sprite(10,10,19,19);
  creatingPixels(pixel78);

  pixel79 = new Sprite(10,10,19,19);
  creatingPixels(pixel79);

  pixel80 = new Sprite(10,10,19,19);
  creatingPixels(pixel80);

  pixel81 = new Sprite(10,10,19,19);
  creatingPixels(pixel81);

  pixel82 = new Sprite(10,10,19,19);
  creatingPixels(pixel82);

  pixel83 = new Sprite(10,10,19,19);
  creatingPixels(pixel83);

  pixel84 = new Sprite(10,10,19,19);
  creatingPixels(pixel84);

  pixel85 = new Sprite(10,10,19,19);
  creatingPixels(pixel85);

  pixel86 = new Sprite(10,10,19,19);
  creatingPixels(pixel86);

  pixel87 = new Sprite(10,10,19,19);
  creatingPixels(pixel87);

  pixel88 = new Sprite(10,10,19,19);
  creatingPixels(pixel88);

  pixel89 = new Sprite(10,10,19,19);
  creatingPixels(pixel89);

  pixel90 = new Sprite(10,10,19,19);
  creatingPixels(pixel90);


///////////row 4///////////////////////////////////
    pixel91 = new Sprite(10,10,19,19);
  creatingPixels(pixel91);

  pixel92 = new Sprite(10,10,19,19);
  creatingPixels(pixel92);

  pixel93 = new Sprite(10,10,19,19);
  creatingPixels(pixel93);

  pixel94 = new Sprite(10,10,19,19);
  creatingPixels(pixel94);

  pixel95 = new Sprite(10,10,19,19);
  creatingPixels(pixel95);

  pixel96 = new Sprite(10,10,19,19);
  creatingPixels(pixel96);

  pixel97 = new Sprite(10,10,19,19);
  creatingPixels(pixel97);

  pixel98 = new Sprite(10,10,19,19);
  creatingPixels(pixel98);

  pixel99 = new Sprite(10,10,19,19);
  creatingPixels(pixel99);

  pixel100 = new Sprite(10,10,19,19);
  creatingPixels(pixel100);

  pixel101 = new Sprite(10,10,19,19);
  creatingPixels(pixel101);

  pixel102 = new Sprite(10,10,19,19);
  creatingPixels(pixel102);

  pixel103 = new Sprite(10,10,19,19);
  creatingPixels(pixel103);

  pixel104 = new Sprite(10,10,19,19);
  creatingPixels(pixel104);

  pixel105 = new Sprite(10,10,19,19);
  creatingPixels(pixel105);

  pixel106 = new Sprite(10,10,19,19);
  creatingPixels(pixel106);

  pixel107 = new Sprite(10,10,19,19);
  creatingPixels(pixel107);

  pixel108 = new Sprite(10,10,19,19);
  creatingPixels(pixel108);

  pixel109 = new Sprite(10,10,19,19);
  creatingPixels(pixel109);

  pixel110 = new Sprite(10,10,19,19);
  creatingPixels(pixel110);

  pixel111 = new Sprite(10,10,19,19);
  creatingPixels(pixel111);

  pixel112 = new Sprite(10,10,19,19);
  creatingPixels(pixel112);

  pixel113 = new Sprite(10,10,19,19);
  creatingPixels(pixel113);

  pixel114 = new Sprite(10,10,19,19);
  creatingPixels(pixel114);

  pixel115 = new Sprite(10,10,19,19);
  creatingPixels(pixel115);

  pixel116 = new Sprite(10,10,19,19);
  creatingPixels(pixel116);

  pixel117 = new Sprite(10,10,19,19);
  creatingPixels(pixel117);

  pixel118 = new Sprite(10,10,19,19);
  creatingPixels(pixel118);

  pixel119 = new Sprite(10,10,19,19);
  creatingPixels(pixel119);

  pixel120 = new Sprite(10,10,19,19);
  creatingPixels(pixel120);


  ///////////row 5///////////////////////////////////
    pixel121 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel122 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel123 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel124 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel125 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel126 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel127 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel128 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel129 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel130 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel131 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel132 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel133 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel134 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel135 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel136 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel137 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel138 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel139 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel140 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel141 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel142 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel143 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel144 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel145 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel146 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel147 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel148 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel149 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel150 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 6///////////////////////////////////
    pixel151 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel152 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel153 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel154 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel155 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel156 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel157 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel158 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel159 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel160 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel161 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel162 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel163 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel164 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel165 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel166 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel167 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel168 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel169 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel170 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel171 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel172 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel173 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel174 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel175 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel176 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel177 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel178 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel179 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel180 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 7///////////////////////////////////
    pixel181 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel182 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel183 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel184 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel185 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel186 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel187 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel188 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel189 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel190 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel191 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel192 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel193 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel194 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel195 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel196 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel197 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel198 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel199 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel200 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel201 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel202 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel203 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel204 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel205 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel206 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel207 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel208 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel209 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel210 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 8///////////////////////////////////
    pixel211 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel212 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel213 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel214 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel215 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel216 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel217 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel218 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel219 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel220 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel221 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel222 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel223 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel224 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel225 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel226 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel227 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel228 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel229 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel230 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel231 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel232 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel233 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel234 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel235 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel236 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel237 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel238 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel239 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel240 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 9///////////////////////////////////
    pixel241 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel242 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel243 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel244 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel245 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel246 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel247 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel248 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel249 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel250 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel251 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel252 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel253 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel254 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel255 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel256 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel257 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel258 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel259 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel260 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel261 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel262 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel263 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel264 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel265 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel266 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel267 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel268 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel269 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel270 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 10///////////////////////////////////
    pixel271 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel272 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel273 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel274 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel275 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel276 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel277 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel278 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel279 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel280 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel281 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel282 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel283 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel284 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel285 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel286 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel287 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel288 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel289 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel290 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel291 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel292 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel293 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel294 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel295 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel296 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel297 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel298 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel299 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel300 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 11///////////////////////////////////
    pixel301 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel302 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel303 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel304 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel305 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel306 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel307 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel308 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel309 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel310 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel311 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel312 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel313 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel314 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel315 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel316 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel317 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel318 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel319 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel320 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel321 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel322 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel323 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel324 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel325 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel326 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel327 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel328 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel329 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel330 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 12///////////////////////////////////
    pixel331 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel332 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel333 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel334 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel335 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel336 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel337 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel338 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel339 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel340 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel341 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel342 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel343 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel344 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel345 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel346 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel347 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel348 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel349 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel350 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel351 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel352 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel353 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel354 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel355 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel356 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel357 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel358 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel359 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel360 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);
  //////////row 13///////////////////////////////////
    pixel361 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel362 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel363 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel364 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel365 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel366 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel367 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel368 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel369 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel370 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel371 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel372 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel373 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel374 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel375 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel376 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel377 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel378 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel379 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel370 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel381 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel382 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel383 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel384 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel385 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel386 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel387 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel388 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel389 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel390 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);
  //////////row 14///////////////////////////////////
    pixel391 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel392 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel393 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel394 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel395 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel396 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel397 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel398 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel399 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel400 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel401 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel402 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel403 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel404 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel405 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel406 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel407 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel408 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel409 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel410 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel411 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel412 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel413 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel414 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel415 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel416 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel417 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel418 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel419 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel420 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 15///////////////////////////////////
    pixel421 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel422 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel423 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel424 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel425 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel426 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel427 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel428 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel429 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel430 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel431 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel432 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel433 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel434 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel435 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel436 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel437 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel438 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel439 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel440 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel441 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel442 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel443 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel444 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel445 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel446 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel447 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel448 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel449 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel450 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 16///////////////////////////////////
    pixel451 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel452 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel453 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel454 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel455 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel456 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel457 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel458 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel459 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel460 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel461 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel462 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel463 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel464 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel465 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel466 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel467 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel468 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel469 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel470 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel471 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel472 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel473 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel474 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel475 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel476 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel477 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel478 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel479 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel480 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  //////////row 17///////////////////////////////////
    pixel481 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel482 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel483 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel484 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel485 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel486 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel487 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel488 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel489 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel490 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel491 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel492 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel493 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel494 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel495 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel496 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel497 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel498 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel499 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel500 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel501 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel502 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel503 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel504 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel505 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel506 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel507 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel508 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel509 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel510 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);
  //////////row 18///////////////////////////////////
    pixel121 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel122 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel123 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel124 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel125 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel126 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel127 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel128 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel129 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel130 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel131 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel132 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel133 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel134 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel135 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel136 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel137 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel138 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel139 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel140 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel141 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel142 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel143 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel144 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel145 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel146 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel147 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel148 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel149 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel150 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);
  //////////row 19///////////////////////////////////
    pixel121 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel122 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel123 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel124 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel125 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel126 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel127 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel128 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel129 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel130 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel131 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel132 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel133 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel134 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel135 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel136 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel137 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel138 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel139 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel140 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel141 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel142 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel143 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel144 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel145 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel146 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel147 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel148 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel149 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel150 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);
  //////////row 20///////////////////////////////////
    pixel121 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel122 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel123 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel124 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel125 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel126 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel127 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel128 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel129 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel130 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel131 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel132 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel133 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel134 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel135 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel136 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel137 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel138 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel139 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel140 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel141 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel142 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel143 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel144 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel145 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel146 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel147 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel148 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel149 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel150 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

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


//row 3////////////////////////////////////////
Position(pixel61, 1, 3);
Position(pixel62, 2, 3);
Position(pixel63, 3, 3);
Position(pixel64, 4, 3);
Position(pixel65, 5, 3);
Position(pixel66, 6, 3);
Position(pixel67, 7, 3);
Position(pixel68, 8, 3);
Position(pixel69, 9, 3);
Position(pixel70, 10, 3);
Position(pixel71, 11, 3);
Position(pixel72, 12, 3);
Position(pixel73, 13, 3);
Position(pixel74, 14, 3);
Position(pixel75, 15, 3);
Position(pixel76, 16, 3);
Position(pixel77, 17, 3);
Position(pixel78, 18, 3);
Position(pixel79, 19, 3);
Position(pixel80, 20, 3);
Position(pixel81, 21, 3);
Position(pixel82, 22, 3);
Position(pixel83, 23, 3);
Position(pixel84, 24, 3);
Position(pixel85, 25, 3);
Position(pixel86, 26, 3);
Position(pixel87, 27, 3);
Position(pixel88, 28, 3);
Position(pixel89, 29, 3);
Position(pixel90, 30, 3);

//row4
Position(pixel91, 1, 4);
Position(pixel92, 2, 4);
Position(pixel93, 3, 4);
Position(pixel94, 4, 4);
Position(pixel95, 5, 4);
Position(pixel96, 6, 4);
Position(pixel97, 7, 4);
Position(pixel98, 8, 4);
Position(pixel99, 9, 4);
Position(pixel100, 10, 4);
Position(pixel101, 11, 4);
Position(pixel102, 12, 4);
Position(pixel103, 13, 4);
Position(pixel104, 14, 4);
Position(pixel105, 15, 4);
Position(pixel106, 16, 4);
Position(pixel107, 17, 4);
Position(pixel108, 18, 4);
Position(pixel109, 19, 4);
Position(pixel110, 20, 4);
Position(pixel111, 21, 4);
Position(pixel112, 22, 4);
Position(pixel113, 23, 4);
Position(pixel114, 24, 4);
Position(pixel115, 25, 4);
Position(pixel116, 26, 4);
Position(pixel117, 27, 4);
Position(pixel118, 28, 4);
Position(pixel119, 29, 4);
Position(pixel120, 30, 4);


//row5///////////////////////////////
Position(pixel121, 1, 5);
Position(pixel122, 2, 5);
Position(pixel123, 3, 5);
Position(pixel124, 4, 5);
Position(pixel125, 5, 5);
Position(pixel126, 6, 5);
Position(pixel127, 7, 5);
Position(pixel128, 8, 5);
Position(pixel129, 9, 5);
Position(pixel130, 10, 5);
Position(pixel131, 11, 5);
Position(pixel132, 12, 5);
Position(pixel133, 13, 5);
Position(pixel134, 14, 5);
Position(pixel135, 15, 5);
Position(pixel136, 16, 5);
Position(pixel137, 17, 5);
Position(pixel138, 18, 5);
Position(pixel139, 19, 5);
Position(pixel140, 20, 5);
Position(pixel141, 21, 5);
Position(pixel142, 22, 5);
Position(pixel143, 23, 5);
Position(pixel144, 24, 5);
Position(pixel145, 25, 5);
Position(pixel146, 26, 5);
Position(pixel147, 27, 5);
Position(pixel148, 28, 5);
Position(pixel149, 29, 5);
Position(pixel150, 30, 5);
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
