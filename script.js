let x = 0
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
  creatingPixels(pixel151);

  pixel152 = new Sprite(10,10,19,19);
  creatingPixels(pixel152);

  pixel153 = new Sprite(10,10,19,19);
  creatingPixels(pixel153);

  pixel154 = new Sprite(10,10,19,19);
  creatingPixels(pixel154);

  pixel155 = new Sprite(10,10,19,19);
  creatingPixels(pixel155);

  pixel156 = new Sprite(10,10,19,19);
  creatingPixels(pixel156);

  pixel157 = new Sprite(10,10,19,19);
  creatingPixels(pixel157);

  pixel158 = new Sprite(10,10,19,19);
  creatingPixels(pixel158);

  pixel159 = new Sprite(10,10,19,19);
  creatingPixels(pixel159);

  pixel160 = new Sprite(10,10,19,19);
  creatingPixels(pixel160);

  pixel161 = new Sprite(10,10,19,19);
  creatingPixels(pixel161);

  pixel162 = new Sprite(10,10,19,19);
  creatingPixels(pixel162);

  pixel163 = new Sprite(10,10,19,19);
  creatingPixels(pixel163);

  pixel164 = new Sprite(10,10,19,19);
  creatingPixels(pixel164);

  pixel165 = new Sprite(10,10,19,19);
  creatingPixels(pixel165);

  pixel166 = new Sprite(10,10,19,19);
  creatingPixels(pixel166);

  pixel167 = new Sprite(10,10,19,19);
  creatingPixels(pixel167);

  pixel168 = new Sprite(10,10,19,19);
  creatingPixels(pixel168);

  pixel169 = new Sprite(10,10,19,19);
  creatingPixels(pixel169);

  pixel170 = new Sprite(10,10,19,19);
  creatingPixels(pixel170);

  pixel171 = new Sprite(10,10,19,19);
  creatingPixels(pixel171);

  pixel172 = new Sprite(10,10,19,19);
  creatingPixels(pixel172);

  pixel173 = new Sprite(10,10,19,19);
  creatingPixels(pixel173);

  pixel174 = new Sprite(10,10,19,19);
  creatingPixels(pixel174);

  pixel175 = new Sprite(10,10,19,19);
  creatingPixels(pixel175);

  pixel176 = new Sprite(10,10,19,19);
  creatingPixels(pixel176);

  pixel177 = new Sprite(10,10,19,19);
  creatingPixels(pixel177);

  pixel178 = new Sprite(10,10,19,19);
  creatingPixels(pixel178);

  pixel179 = new Sprite(10,10,19,19);
  creatingPixels(pixel179);

  pixel180 = new Sprite(10,10,19,19);
  creatingPixels(pixel180);

  //////////row 7///////////////////////////////////
    pixel181 = new Sprite(10,10,19,19);
  creatingPixels(pixel181);

  pixel182 = new Sprite(10,10,19,19);
  creatingPixels(pixel182);

  pixel183 = new Sprite(10,10,19,19);
  creatingPixels(pixel183);

  pixel184 = new Sprite(10,10,19,19);
  creatingPixels(pixel184);

  pixel185 = new Sprite(10,10,19,19);
  creatingPixels(pixel185);

  pixel186 = new Sprite(10,10,19,19);
  creatingPixels(pixel186);

  pixel187 = new Sprite(10,10,19,19);
  creatingPixels(pixel187);

  pixel188 = new Sprite(10,10,19,19);
  creatingPixels(pixel188);

  pixel189 = new Sprite(10,10,19,19);
  creatingPixels(pixel189);

  pixel190 = new Sprite(10,10,19,19);
  creatingPixels(pixel190);

  pixel191 = new Sprite(10,10,19,19);
  creatingPixels(pixel191);

  pixel192 = new Sprite(10,10,19,19);
  creatingPixels(pixel192);

  pixel193 = new Sprite(10,10,19,19);
  creatingPixels(pixel193);

  pixel194 = new Sprite(10,10,19,19);
  creatingPixels(pixel194);

  pixel195 = new Sprite(10,10,19,19);
  creatingPixels(pixel195);

  pixel196 = new Sprite(10,10,19,19);
  creatingPixels(pixel196);

  pixel197 = new Sprite(10,10,19,19);
  creatingPixels(pixel197);

  pixel198 = new Sprite(10,10,19,19);
  creatingPixels(pixel198);

  pixel199 = new Sprite(10,10,19,19);
  creatingPixels(pixel199);

  pixel200 = new Sprite(10,10,19,19);
  creatingPixels(pixel200);

  pixel201 = new Sprite(10,10,19,19);
  creatingPixels(pixel201);

  pixel202 = new Sprite(10,10,19,19);
  creatingPixels(pixel202);

  pixel203 = new Sprite(10,10,19,19);
  creatingPixels(pixel203);

  pixel204 = new Sprite(10,10,19,19);
  creatingPixels(pixel204);

  pixel205 = new Sprite(10,10,19,19);
  creatingPixels(pixel205);

  pixel206 = new Sprite(10,10,19,19);
  creatingPixels(pixel206);

  pixel207 = new Sprite(10,10,19,19);
  creatingPixels(pixel207);

  pixel208 = new Sprite(10,10,19,19);
  creatingPixels(pixel208);

  pixel209 = new Sprite(10,10,19,19);
  creatingPixels(pixel209);

  pixel210 = new Sprite(10,10,19,19);
  creatingPixels(pixel210);

  //////////row 8///////////////////////////////////
    pixel211 = new Sprite(10,10,19,19);
  creatingPixels(pixel211);

  pixel212 = new Sprite(10,10,19,19);
  creatingPixels(pixel212);

  pixel213 = new Sprite(10,10,19,19);
  creatingPixels(pixel213);

  pixel214 = new Sprite(10,10,19,19);
  creatingPixels(pixel214);

  pixel215 = new Sprite(10,10,19,19);
  creatingPixels(pixel215);

  pixel216 = new Sprite(10,10,19,19);
  creatingPixels(pixel216);

  pixel217 = new Sprite(10,10,19,19);
  creatingPixels(pixel217);

  pixel218 = new Sprite(10,10,19,19);
  creatingPixels(pixel218);

  pixel219 = new Sprite(10,10,19,19);
  creatingPixels(pixel219);

  pixel220 = new Sprite(10,10,19,19);
  creatingPixels(pixel220);

  pixel221 = new Sprite(10,10,19,19);
  creatingPixels(pixel221);

  pixel222 = new Sprite(10,10,19,19);
  creatingPixels(pixel222);

  pixel223 = new Sprite(10,10,19,19);
  creatingPixels(pixel223);

  pixel224 = new Sprite(10,10,19,19);
  creatingPixels(pixel224);

  pixel225 = new Sprite(10,10,19,19);
  creatingPixels(pixel225);

  pixel226 = new Sprite(10,10,19,19);
  creatingPixels(pixel226);

  pixel227 = new Sprite(10,10,19,19);
  creatingPixels(pixel227);

  pixel228 = new Sprite(10,10,19,19);
  creatingPixels(pixel228);

  pixel229 = new Sprite(10,10,19,19);
  creatingPixels(pixel229);

  pixel230 = new Sprite(10,10,19,19);
  creatingPixels(pixel230);

  pixel231 = new Sprite(10,10,19,19);
  creatingPixels(pixel231);

  pixel232 = new Sprite(10,10,19,19);
  creatingPixels(pixel232);

  pixel233 = new Sprite(10,10,19,19);
  creatingPixels(pixel233);

  pixel234 = new Sprite(10,10,19,19);
  creatingPixels(pixel234);

  pixel235 = new Sprite(10,10,19,19);
  creatingPixels(pixel235);

  pixel236 = new Sprite(10,10,19,19);
  creatingPixels(pixel236);

  pixel237 = new Sprite(10,10,19,19);
  creatingPixels(pixel237);

  pixel238 = new Sprite(10,10,19,19);
  creatingPixels(pixel238);

  pixel239 = new Sprite(10,10,19,19);
  creatingPixels(pixel239);

  pixel240 = new Sprite(10,10,19,19);
  creatingPixels(pixel240);

  //////////row 9///////////////////////////////////
    pixel241 = new Sprite(10,10,19,19);
  creatingPixels(pixel241);

  pixel242 = new Sprite(10,10,19,19);
  creatingPixels(pixel242);

  pixel243 = new Sprite(10,10,19,19);
  creatingPixels(pixel243);

  pixel244 = new Sprite(10,10,19,19);
  creatingPixels(pixel244);

  pixel245 = new Sprite(10,10,19,19);
  creatingPixels(pixel245);

  pixel246 = new Sprite(10,10,19,19);
  creatingPixels(pixel246);

  pixel247 = new Sprite(10,10,19,19);
  creatingPixels(pixel247);

  pixel248 = new Sprite(10,10,19,19);
  creatingPixels(pixel248);

  pixel249 = new Sprite(10,10,19,19);
  creatingPixels(pixel249);

  pixel250 = new Sprite(10,10,19,19);
  creatingPixels(pixel250);

  pixel251 = new Sprite(10,10,19,19);
  creatingPixels(pixel251);

  pixel252 = new Sprite(10,10,19,19);
  creatingPixels(pixel252);

  pixel253 = new Sprite(10,10,19,19);
  creatingPixels(pixel253);

  pixel254 = new Sprite(10,10,19,19);
  creatingPixels(pixel254);

  pixel255 = new Sprite(10,10,19,19);
  creatingPixels(pixel255);

  pixel256 = new Sprite(10,10,19,19);
  creatingPixels(pixel256);

  pixel257 = new Sprite(10,10,19,19);
  creatingPixels(pixel257);

  pixel258 = new Sprite(10,10,19,19);
  creatingPixels(pixel258);

  pixel259 = new Sprite(10,10,19,19);
  creatingPixels(pixel259);

  pixel260 = new Sprite(10,10,19,19);
  creatingPixels(pixel260);

  pixel261 = new Sprite(10,10,19,19);
  creatingPixels(pixel261);

  pixel262 = new Sprite(10,10,19,19);
  creatingPixels(pixel262);

  pixel263 = new Sprite(10,10,19,19);
  creatingPixels(pixel263);

  pixel264 = new Sprite(10,10,19,19);
  creatingPixels(pixel264);

  pixel265 = new Sprite(10,10,19,19);
  creatingPixels(pixel265);

  pixel266 = new Sprite(10,10,19,19);
  creatingPixels(pixel266);

  pixel267 = new Sprite(10,10,19,19);
  creatingPixels(pixel267);

  pixel268 = new Sprite(10,10,19,19);
  creatingPixels(pixel268);

  pixel269 = new Sprite(10,10,19,19);
  creatingPixels(pixel269);

  pixel270 = new Sprite(10,10,19,19);
  creatingPixels(pixel270);

  //////////row 10///////////////////////////////////
    pixel271 = new Sprite(10,10,19,19);
  creatingPixels(pixel271);

  pixel272 = new Sprite(10,10,19,19);
  creatingPixels(pixel272);

  pixel273 = new Sprite(10,10,19,19);
  creatingPixels(pixel273);

  pixel274 = new Sprite(10,10,19,19);
  creatingPixels(pixel274);

  pixel275 = new Sprite(10,10,19,19);
  creatingPixels(pixel275);

  pixel276 = new Sprite(10,10,19,19);
  creatingPixels(pixel276);

  pixel277 = new Sprite(10,10,19,19);
  creatingPixels(pixel277);

  pixel278 = new Sprite(10,10,19,19);
  creatingPixels(pixel278);

  pixel279 = new Sprite(10,10,19,19);
  creatingPixels(pixel279);

  pixel280 = new Sprite(10,10,19,19);
  creatingPixels(pixel280);

  pixel281 = new Sprite(10,10,19,19);
  creatingPixels(pixel281);

  pixel282 = new Sprite(10,10,19,19);
  creatingPixels(pixel282);

  pixel283 = new Sprite(10,10,19,19);
  creatingPixels(pixel283);

  pixel284 = new Sprite(10,10,19,19);
  creatingPixels(pixel284);

  pixel285 = new Sprite(10,10,19,19);
  creatingPixels(pixel285);

  pixel286 = new Sprite(10,10,19,19);
  creatingPixels(pixel286);

  pixel287 = new Sprite(10,10,19,19);
  creatingPixels(pixel287);

  pixel288 = new Sprite(10,10,19,19);
  creatingPixels(pixel288);

  pixel289 = new Sprite(10,10,19,19);
  creatingPixels(pixel289);

  pixel290 = new Sprite(10,10,19,19);
  creatingPixels(pixel290);

  pixel291 = new Sprite(10,10,19,19);
  creatingPixels(pixel291);

  pixel292 = new Sprite(10,10,19,19);
  creatingPixels(pixel292);

  pixel293 = new Sprite(10,10,19,19);
  creatingPixels(pixel293);

  pixel294 = new Sprite(10,10,19,19);
  creatingPixels(pixel294);

  pixel295 = new Sprite(10,10,19,19);
  creatingPixels(pixel295);

  pixel296 = new Sprite(10,10,19,19);
  creatingPixels(pixel296);

  pixel297 = new Sprite(10,10,19,19);
  creatingPixels(pixel297);

  pixel298 = new Sprite(10,10,19,19);
  creatingPixels(pixel298);

  pixel299 = new Sprite(10,10,19,19);
  creatingPixels(pixel299);

  pixel300 = new Sprite(10,10,19,19);
  creatingPixels(pixel300);

  //////////row 11///////////////////////////////////
    pixel301 = new Sprite(10,10,19,19);
  creatingPixels(pixel301);

  pixel302 = new Sprite(10,10,19,19);
  creatingPixels(pixel302);

  pixel303 = new Sprite(10,10,19,19);
  creatingPixels(pixel303);

  pixel304 = new Sprite(10,10,19,19);
  creatingPixels(pixel304);

  pixel305 = new Sprite(10,10,19,19);
  creatingPixels(pixel305);

  pixel306 = new Sprite(10,10,19,19);
  creatingPixels(pixel306);

  pixel307 = new Sprite(10,10,19,19);
  creatingPixels(pixel307);

  pixel308 = new Sprite(10,10,19,19);
  creatingPixels(pixel308);

  pixel309 = new Sprite(10,10,19,19);
  creatingPixels(pixel309);

  pixel310 = new Sprite(10,10,19,19);
  creatingPixels(pixel310);

  pixel311 = new Sprite(10,10,19,19);
  creatingPixels(pixel311);

  pixel312 = new Sprite(10,10,19,19);
  creatingPixels(pixel312);

  pixel313 = new Sprite(10,10,19,19);
  creatingPixels(pixel313);

  pixel314 = new Sprite(10,10,19,19);
  creatingPixels(pixel314);

  pixel315 = new Sprite(10,10,19,19);
  creatingPixels(pixel315);

  pixel316 = new Sprite(10,10,19,19);
  creatingPixels(pixel316);

  pixel317 = new Sprite(10,10,19,19);
  creatingPixels(pixel317);

  pixel318 = new Sprite(10,10,19,19);
  creatingPixels(pixel318);

  pixel319 = new Sprite(10,10,19,19);
  creatingPixels(pixel319);

  pixel320 = new Sprite(10,10,19,19);
  creatingPixels(pixel320);

  pixel321 = new Sprite(10,10,19,19);
  creatingPixels(pixel321);

  pixel322 = new Sprite(10,10,19,19);
  creatingPixels(pixel322);

  pixel323 = new Sprite(10,10,19,19);
  creatingPixels(pixel323);

  pixel324 = new Sprite(10,10,19,19);
  creatingPixels(pixel324);

  pixel325 = new Sprite(10,10,19,19);
  creatingPixels(pixel325);

  pixel326 = new Sprite(10,10,19,19);
  creatingPixels(pixel326);

  pixel327 = new Sprite(10,10,19,19);
  creatingPixels(pixel327);

  pixel328 = new Sprite(10,10,19,19);
  creatingPixels(pixel328);

  pixel329 = new Sprite(10,10,19,19);
  creatingPixels(pixel329);

  pixel330 = new Sprite(10,10,19,19);
  creatingPixels(pixel330);

  //////////row 12///////////////////////////////////
    pixel331 = new Sprite(10,10,19,19);
  creatingPixels(pixel331);

  pixel332 = new Sprite(10,10,19,19);
  creatingPixels(pixel332);

  pixel333 = new Sprite(10,10,19,19);
  creatingPixels(pixel333);

  pixel334 = new Sprite(10,10,19,19);
  creatingPixels(pixel334);

  pixel335 = new Sprite(10,10,19,19);
  creatingPixels(pixel335);

  pixel336 = new Sprite(10,10,19,19);
  creatingPixels(pixel336);

  pixel337 = new Sprite(10,10,19,19);
  creatingPixels(pixel337);

  pixel338 = new Sprite(10,10,19,19);
  creatingPixels(pixel338);

  pixel339 = new Sprite(10,10,19,19);
  creatingPixels(pixel339);

  pixel340 = new Sprite(10,10,19,19);
  creatingPixels(pixel340);

  pixel341 = new Sprite(10,10,19,19);
  creatingPixels(pixel341);

  pixel342 = new Sprite(10,10,19,19);
  creatingPixels(pixel342);

  pixel343 = new Sprite(10,10,19,19);
  creatingPixels(pixel343);

  pixel344 = new Sprite(10,10,19,19);
  creatingPixels(pixel344);

  pixel345 = new Sprite(10,10,19,19);
  creatingPixels(pixel345);

  pixel346 = new Sprite(10,10,19,19);
  creatingPixels(pixel346);

  pixel347 = new Sprite(10,10,19,19);
  creatingPixels(pixel347);

  pixel348 = new Sprite(10,10,19,19);
  creatingPixels(pixel348);

  pixel349 = new Sprite(10,10,19,19);
  creatingPixels(pixel349);

  pixel350 = new Sprite(10,10,19,19);
  creatingPixels(pixel350);

  pixel351 = new Sprite(10,10,19,19);
  creatingPixels(pixel351);

  pixel352 = new Sprite(10,10,19,19);
  creatingPixels(pixel352);

  pixel353 = new Sprite(10,10,19,19);
  creatingPixels(pixel353);

  pixel354 = new Sprite(10,10,19,19);
  creatingPixels(pixel354);

  pixel355 = new Sprite(10,10,19,19);
  creatingPixels(pixel355);

  pixel356 = new Sprite(10,10,19,19);
  creatingPixels(pixel356);

  pixel357 = new Sprite(10,10,19,19);
  creatingPixels(pixel357);

  pixel358 = new Sprite(10,10,19,19);
  creatingPixels(pixel358);

  pixel359 = new Sprite(10,10,19,19);
  creatingPixels(pixel359);

  pixel360 = new Sprite(10,10,19,19);
  creatingPixels(pixel360);
  //////////row 13///////////////////////////////////
    pixel361 = new Sprite(10,10,19,19);
  creatingPixels(pixel361);

  pixel362 = new Sprite(10,10,19,19);
  creatingPixels(pixel362);

  pixel363 = new Sprite(10,10,19,19);
  creatingPixels(pixel363);

  pixel364 = new Sprite(10,10,19,19);
  creatingPixels(pixel364);

  pixel365 = new Sprite(10,10,19,19);
  creatingPixels(pixel365);

  pixel366 = new Sprite(10,10,19,19);
  creatingPixels(pixel366);

  pixel367 = new Sprite(10,10,19,19);
  creatingPixels(pixel367);

  pixel368 = new Sprite(10,10,19,19);
  creatingPixels(pixel368);

  pixel369 = new Sprite(10,10,19,19);
  creatingPixels(pixel369);

  pixel370 = new Sprite(10,10,19,19);
  creatingPixels(pixel370);

  pixel371 = new Sprite(10,10,19,19);
  creatingPixels(pixel371);

  pixel372 = new Sprite(10,10,19,19);
  creatingPixels(pixel372);

  pixel373 = new Sprite(10,10,19,19);
  creatingPixels(pixel373);

  pixel374 = new Sprite(10,10,19,19);
  creatingPixels(pixel374);

  pixel375 = new Sprite(10,10,19,19);
  creatingPixels(pixel375);

  pixel376 = new Sprite(10,10,19,19);
  creatingPixels(pixel376);

  pixel377 = new Sprite(10,10,19,19);
  creatingPixels(pixel377);

  pixel378 = new Sprite(10,10,19,19);
  creatingPixels(pixel378);

  pixel379 = new Sprite(10,10,19,19);
  creatingPixels(pixel379);

  pixel380 = new Sprite(10,10,19,19);
  creatingPixels(pixel380);

  pixel381 = new Sprite(10,10,19,19);
  creatingPixels(pixel381);

  pixel382 = new Sprite(10,10,19,19);
  creatingPixels(pixel382);

  pixel383 = new Sprite(10,10,19,19);
  creatingPixels(pixel383);

  pixel384 = new Sprite(10,10,19,19);
  creatingPixels(pixel384);

  pixel385 = new Sprite(10,10,19,19);
  creatingPixels(pixel385);

  pixel386 = new Sprite(10,10,19,19);
  creatingPixels(pixel386);

  pixel387 = new Sprite(10,10,19,19);
  creatingPixels(pixel387);

  pixel388 = new Sprite(10,10,19,19);
  creatingPixels(pixel388);

  pixel389 = new Sprite(10,10,19,19);
  creatingPixels(pixel389);

  pixel390 = new Sprite(10,10,19,19);
  creatingPixels(pixel390);
  //////////row 14///////////////////////////////////
    pixel391 = new Sprite(10,10,19,19);
  creatingPixels(pixel391);

  pixel392 = new Sprite(10,10,19,19);
  creatingPixels(pixel392);

  pixel393 = new Sprite(10,10,19,19);
  creatingPixels(pixel393);

  pixel394 = new Sprite(10,10,19,19);
  creatingPixels(pixel394);

  pixel395 = new Sprite(10,10,19,19);
  creatingPixels(pixel395);

  pixel396 = new Sprite(10,10,19,19);
  creatingPixels(pixel396);

  pixel397 = new Sprite(10,10,19,19);
  creatingPixels(pixel397);

  pixel398 = new Sprite(10,10,19,19);
  creatingPixels(pixel398);

  pixel399 = new Sprite(10,10,19,19);
  creatingPixels(pixel399);

  pixel400 = new Sprite(10,10,19,19);
  creatingPixels(pixel400);

  pixel401 = new Sprite(10,10,19,19);
  creatingPixels(pixel401);

  pixel402 = new Sprite(10,10,19,19);
  creatingPixels(pixel402);

  pixel403 = new Sprite(10,10,19,19);
  creatingPixels(pixel403);

  pixel404 = new Sprite(10,10,19,19);
  creatingPixels(pixel404);

  pixel405 = new Sprite(10,10,19,19);
  creatingPixels(pixel405);

  pixel406 = new Sprite(10,10,19,19);
  creatingPixels(pixel406);

  pixel407 = new Sprite(10,10,19,19);
  creatingPixels(pixel407);

  pixel408 = new Sprite(10,10,19,19);
  creatingPixels(pixel408);

  pixel409 = new Sprite(10,10,19,19);
  creatingPixels(pixel409);

  pixel410 = new Sprite(10,10,19,19);
  creatingPixels(pixel410);

  pixel411 = new Sprite(10,10,19,19);
  creatingPixels(pixel411);

  pixel412 = new Sprite(10,10,19,19);
  creatingPixels(pixel412);

  pixel413 = new Sprite(10,10,19,19);
  creatingPixels(pixel413);

  pixel414 = new Sprite(10,10,19,19);
  creatingPixels(pixel414);

  pixel415 = new Sprite(10,10,19,19);
  creatingPixels(pixel415);

  pixel416 = new Sprite(10,10,19,19);
  creatingPixels(pixel416);

  pixel417 = new Sprite(10,10,19,19);
  creatingPixels(pixel417);

  pixel418 = new Sprite(10,10,19,19);
  creatingPixels(pixel418);

  pixel419 = new Sprite(10,10,19,19);
  creatingPixels(pixel419);

  pixel420 = new Sprite(10,10,19,19);
  creatingPixels(pixel420);

  //////////row 15///////////////////////////////////
    pixel421 = new Sprite(10,10,19,19);
  creatingPixels(pixel421);

  pixel422 = new Sprite(10,10,19,19);
  creatingPixels(pixel422);

  pixel423 = new Sprite(10,10,19,19);
  creatingPixels(pixel423);

  pixel424 = new Sprite(10,10,19,19);
  creatingPixels(pixel424);

  pixel425 = new Sprite(10,10,19,19);
  creatingPixels(pixel425);

  pixel426 = new Sprite(10,10,19,19);
  creatingPixels(pixel426);

  pixel427 = new Sprite(10,10,19,19);
  creatingPixels(pixel427);

  pixel428 = new Sprite(10,10,19,19);
  creatingPixels(pixel428);

  pixel429 = new Sprite(10,10,19,19);
  creatingPixels(pixel429);

  pixel430 = new Sprite(10,10,19,19);
  creatingPixels(pixel430);

  pixel431 = new Sprite(10,10,19,19);
  creatingPixels(pixel431);

  pixel432 = new Sprite(10,10,19,19);
  creatingPixels(pixel432);

  pixel433 = new Sprite(10,10,19,19);
  creatingPixels(pixel433);

  pixel434 = new Sprite(10,10,19,19);
  creatingPixels(pixel434);

  pixel435 = new Sprite(10,10,19,19);
  creatingPixels(pixel435);

  pixel436 = new Sprite(10,10,19,19);
  creatingPixels(pixel436);

  pixel437 = new Sprite(10,10,19,19);
  creatingPixels(pixel437);

  pixel438 = new Sprite(10,10,19,19);
  creatingPixels(pixel438);

  pixel439 = new Sprite(10,10,19,19);
  creatingPixels(pixel439);

  pixel440 = new Sprite(10,10,19,19);
  creatingPixels(pixel440);

  pixel441 = new Sprite(10,10,19,19);
  creatingPixels(pixel441);

  pixel442 = new Sprite(10,10,19,19);
  creatingPixels(pixel442);

  pixel443 = new Sprite(10,10,19,19);
  creatingPixels(pixel443);

  pixel444 = new Sprite(10,10,19,19);
  creatingPixels(pixel444);

  pixel445 = new Sprite(10,10,19,19);
  creatingPixels(pixel445);

  pixel446 = new Sprite(10,10,19,19);
  creatingPixels(pixel446);

  pixel447 = new Sprite(10,10,19,19);
  creatingPixels(pixel447);

  pixel448 = new Sprite(10,10,19,19);
  creatingPixels(pixel448);

  pixel449 = new Sprite(10,10,19,19);
  creatingPixels(pixel449);

  pixel450 = new Sprite(10,10,19,19);
  creatingPixels(pixel450);

  //////////row 16///////////////////////////////////
    pixel451 = new Sprite(10,10,19,19);
  creatingPixels(pixel451);

  pixel452 = new Sprite(10,10,19,19);
  creatingPixels(pixel452);

  pixel453 = new Sprite(10,10,19,19);
  creatingPixels(pixel453);

  pixel454 = new Sprite(10,10,19,19);
  creatingPixels(pixel454);

  pixel455 = new Sprite(10,10,19,19);
  creatingPixels(pixel455);

  pixel456 = new Sprite(10,10,19,19);
  creatingPixels(pixel456);

  pixel457 = new Sprite(10,10,19,19);
  creatingPixels(pixel457);

  pixel458 = new Sprite(10,10,19,19);
  creatingPixels(pixel458);

  pixel459 = new Sprite(10,10,19,19);
  creatingPixels(pixel459);

  pixel460 = new Sprite(10,10,19,19);
  creatingPixels(pixel460);

  pixel461 = new Sprite(10,10,19,19);
  creatingPixels(pixel461);

  pixel462 = new Sprite(10,10,19,19);
  creatingPixels(pixel462);

  pixel463 = new Sprite(10,10,19,19);
  creatingPixels(pixel463);

  pixel464 = new Sprite(10,10,19,19);
  creatingPixels(pixel464);

  pixel465 = new Sprite(10,10,19,19);
  creatingPixels(pixel465);

  pixel466 = new Sprite(10,10,19,19);
  creatingPixels(pixel466);

  pixel467 = new Sprite(10,10,19,19);
  creatingPixels(pixel467);

  pixel468 = new Sprite(10,10,19,19);
  creatingPixels(pixel468);

  pixel469 = new Sprite(10,10,19,19);
  creatingPixels(pixel469);

  pixel470 = new Sprite(10,10,19,19);
  creatingPixels(pixel470);

  pixel471 = new Sprite(10,10,19,19);
  creatingPixels(pixel471);

  pixel472 = new Sprite(10,10,19,19);
  creatingPixels(pixel472);

  pixel473 = new Sprite(10,10,19,19);
  creatingPixels(pixel473);

  pixel474 = new Sprite(10,10,19,19);
  creatingPixels(pixel474);

  pixel475 = new Sprite(10,10,19,19);
  creatingPixels(pixel475);

  pixel476 = new Sprite(10,10,19,19);
  creatingPixels(pixel476);

  pixel477 = new Sprite(10,10,19,19);
  creatingPixels(pixel477);

  pixel478 = new Sprite(10,10,19,19);
  creatingPixels(pixel478);

  pixel479 = new Sprite(10,10,19,19);
  creatingPixels(pixel479);

  pixel480 = new Sprite(10,10,19,19);
  creatingPixels(pixel480);

  //////////row 17///////////////////////////////////
    pixel481 = new Sprite(10,10,19,19);
  creatingPixels(pixel481);

  pixel482 = new Sprite(10,10,19,19);
  creatingPixels(pixel482);

  pixel483 = new Sprite(10,10,19,19);
  creatingPixels(pixel483);

  pixel484 = new Sprite(10,10,19,19);
  creatingPixels(pixel484);

  pixel485 = new Sprite(10,10,19,19);
  creatingPixels(pixel485);

  pixel486 = new Sprite(10,10,19,19);
  creatingPixels(pixel486);

  pixel487 = new Sprite(10,10,19,19);
  creatingPixels(pixel487);

  pixel488 = new Sprite(10,10,19,19);
  creatingPixels(pixel488);

  pixel489 = new Sprite(10,10,19,19);
  creatingPixels(pixel489);

  pixel490 = new Sprite(10,10,19,19);
  creatingPixels(pixel490);

  pixel491 = new Sprite(10,10,19,19);
  creatingPixels(pixel491);

  pixel492 = new Sprite(10,10,19,19);
  creatingPixels(pixel492);

  pixel493 = new Sprite(10,10,19,19);
  creatingPixels(pixel493);

  pixel494 = new Sprite(10,10,19,19);
  creatingPixels(pixel494);

  pixel495 = new Sprite(10,10,19,19);
  creatingPixels(pixel495);

  pixel496 = new Sprite(10,10,19,19);
  creatingPixels(pixel496);

  pixel497 = new Sprite(10,10,19,19);
  creatingPixels(pixel497);

  pixel498 = new Sprite(10,10,19,19);
  creatingPixels(pixel498);

  pixel499 = new Sprite(10,10,19,19);
  creatingPixels(pixel499);

  pixel500 = new Sprite(10,10,19,19);
  creatingPixels(pixel500);

  pixel501 = new Sprite(10,10,19,19);
  creatingPixels(pixel501);

  pixel502 = new Sprite(10,10,19,19);
  creatingPixels(pixel502);

  pixel503 = new Sprite(10,10,19,19);
  creatingPixels(pixel503);

  pixel504 = new Sprite(10,10,19,19);
  creatingPixels(pixel504);

  pixel505 = new Sprite(10,10,19,19);
  creatingPixels(pixel505);

  pixel506 = new Sprite(10,10,19,19);
  creatingPixels(pixel506);

  pixel507 = new Sprite(10,10,19,19);
  creatingPixels(pixel507);

  pixel508 = new Sprite(10,10,19,19);
  creatingPixels(pixel508);

  pixel509 = new Sprite(10,10,19,19);
  creatingPixels(pixel509);

  pixel510 = new Sprite(10,10,19,19);
  creatingPixels(pixel510);
  //////////row 18///////////////////////////////////
    pixel511 = new Sprite(10,10,19,19);
  creatingPixels(pixel511);

  pixel512 = new Sprite(10,10,19,19);
  creatingPixels(pixel512);

  pixel513 = new Sprite(10,10,19,19);
  creatingPixels(pixel513);

  pixel514 = new Sprite(10,10,19,19);
  creatingPixels(pixel514);

  pixel515 = new Sprite(10,10,19,19);
  creatingPixels(pixel515);

  pixel516 = new Sprite(10,10,19,19);
  creatingPixels(pixel516);

  pixel517 = new Sprite(10,10,19,19);
  creatingPixels(pixel517);

  pixel518 = new Sprite(10,10,19,19);
  creatingPixels(pixel518);

  pixel519 = new Sprite(10,10,19,19);
  creatingPixels(pixel519);

  pixel520 = new Sprite(10,10,19,19);
  creatingPixels(pixel520);

  pixel521 = new Sprite(10,10,19,19);
  creatingPixels(pixel521);

  pixel522 = new Sprite(10,10,19,19);
  creatingPixels(pixel522);

  pixel523 = new Sprite(10,10,19,19);
  creatingPixels(pixel523);

  pixel524 = new Sprite(10,10,19,19);
  creatingPixels(pixel524);

  pixel525 = new Sprite(10,10,19,19);
  creatingPixels(pixel525);

  pixel526 = new Sprite(10,10,19,19);
  creatingPixels(pixel526);

  pixel527 = new Sprite(10,10,19,19);
  creatingPixels(pixel527);

  pixel528 = new Sprite(10,10,19,19);
  creatingPixels(pixel528);

  pixel529 = new Sprite(10,10,19,19);
  creatingPixels(pixel529);

  pixel530 = new Sprite(10,10,19,19);
  creatingPixels(pixel530);

  pixel531 = new Sprite(10,10,19,19);
  creatingPixels(pixel531);

  pixel532 = new Sprite(10,10,19,19);
  creatingPixels(pixel532);

  pixel533 = new Sprite(10,10,19,19);
  creatingPixels(pixel533);

  pixel534 = new Sprite(10,10,19,19);
  creatingPixels(pixel534);

  pixel535 = new Sprite(10,10,19,19);
  creatingPixels(pixel535);

  pixel536 = new Sprite(10,10,19,19);
  creatingPixels(pixel536);

  pixel537 = new Sprite(10,10,19,19);
  creatingPixels(pixel537);

  pixel538 = new Sprite(10,10,19,19);
  creatingPixels(pixel538);

  pixel539 = new Sprite(10,10,19,19);
  creatingPixels(pixel539);

  pixel540 = new Sprite(10,10,19,19);
  creatingPixels(pixel540);
  //////////row 19///////////////////////////////////
    pixel541 = new Sprite(10,10,19,19);
  creatingPixels(pixel541);

  pixel542 = new Sprite(10,10,19,19);
  creatingPixels(pixel542);

  pixel543 = new Sprite(10,10,19,19);
  creatingPixels(pixel543);

  pixel544 = new Sprite(10,10,19,19);
  creatingPixels(pixel544);

  pixel545 = new Sprite(10,10,19,19);
  creatingPixels(pixel545);

  pixel546 = new Sprite(10,10,19,19);
  creatingPixels(pixel546);

  pixel547 = new Sprite(10,10,19,19);
  creatingPixels(pixel547);

  pixel548 = new Sprite(10,10,19,19);
  creatingPixels(pixel548);

  pixel549 = new Sprite(10,10,19,19);
  creatingPixels(pixel549);

  pixel550 = new Sprite(10,10,19,19);
  creatingPixels(pixel550);

  pixel551 = new Sprite(10,10,19,19);
  creatingPixels(pixel551);

  pixel552 = new Sprite(10,10,19,19);
  creatingPixels(pixel552);

  pixel553 = new Sprite(10,10,19,19);
  creatingPixels(pixel553);

  pixel554 = new Sprite(10,10,19,19);
  creatingPixels(pixel554);

  pixel555 = new Sprite(10,10,19,19);
  creatingPixels(pixel555);

  pixel556 = new Sprite(10,10,19,19);
  creatingPixels(pixel556);

  pixel557 = new Sprite(10,10,19,19);
  creatingPixels(pixel557);

  pixel558 = new Sprite(10,10,19,19);
  creatingPixels(pixel558);

  pixel559 = new Sprite(10,10,19,19);
  creatingPixels(pixel559);

  pixel560 = new Sprite(10,10,19,19);
  creatingPixels(pixel560);

  pixel561 = new Sprite(10,10,19,19);
  creatingPixels(pixel561);

  pixel562 = new Sprite(10,10,19,19);
  creatingPixels(pixel562);

  pixel563 = new Sprite(10,10,19,19);
  creatingPixels(pixel563);

  pixel564 = new Sprite(10,10,19,19);
  creatingPixels(pixel564);

  pixel565 = new Sprite(10,10,19,19);
  creatingPixels(pixel565);

  pixel566 = new Sprite(10,10,19,19);
  creatingPixels(pixel566);

  pixel567 = new Sprite(10,10,19,19);
  creatingPixels(pixel567);

  pixel568 = new Sprite(10,10,19,19);
  creatingPixels(pixel568);

  pixel569 = new Sprite(10,10,19,19);
  creatingPixels(pixel569);

  pixel570 = new Sprite(10,10,19,19);
  creatingPixels(pixel570);
  //////////row 20///////////////////////////////////
    pixel571 = new Sprite(10,10,19,19);
  creatingPixels(pixel571);

  pixel572 = new Sprite(10,10,19,19);
  creatingPixels(pixel572);

  pixel573 = new Sprite(10,10,19,19);
  creatingPixels(pixel573);

  pixel574 = new Sprite(10,10,19,19);
  creatingPixels(pixel574);

  pixel575 = new Sprite(10,10,19,19);
  creatingPixels(pixel575);

  pixel576 = new Sprite(10,10,19,19);
  creatingPixels(pixel576);

  pixel577 = new Sprite(10,10,19,19);
  creatingPixels(pixel577);

  pixel578 = new Sprite(10,10,19,19);
  creatingPixels(pixel578);

  pixel579 = new Sprite(10,10,19,19);
  creatingPixels(pixel579);

  pixel580 = new Sprite(10,10,19,19);
  creatingPixels(pixel580);

  pixel581 = new Sprite(10,10,19,19);
  creatingPixels(pixel581);

  pixel582 = new Sprite(10,10,19,19);
  creatingPixels(pixel582);

  pixel583 = new Sprite(10,10,19,19);
  creatingPixels(pixel583);

  pixel584 = new Sprite(10,10,19,19);
  creatingPixels(pixel584);

  pixel585 = new Sprite(10,10,19,19);
  creatingPixels(pixel585);

  pixel586 = new Sprite(10,10,19,19);
  creatingPixels(pixel586);

  pixel587 = new Sprite(10,10,19,19);
  creatingPixels(pixel587);

  pixel588 = new Sprite(10,10,19,19);
  creatingPixels(pixel588);

  pixel589 = new Sprite(10,10,19,19);
  creatingPixels(pixel589);

  pixel590 = new Sprite(10,10,19,19);
  creatingPixels(pixel590);

  pixel591 = new Sprite(10,10,19,19);
  creatingPixels(pixel591);

  pixel592 = new Sprite(10,10,19,19);
  creatingPixels(pixel592);

  pixel593 = new Sprite(10,10,19,19);
  creatingPixels(pixel593);

  pixel594 = new Sprite(10,10,19,19);
  creatingPixels(pixel594);

  pixel595 = new Sprite(10,10,19,19);
  creatingPixels(pixel595);

  pixel596 = new Sprite(10,10,19,19);
  creatingPixels(pixel596);

  pixel597 = new Sprite(10,10,19,19);
  creatingPixels(pixel597);

  pixel598 = new Sprite(10,10,19,19);
  creatingPixels(pixel598);

  pixel599 = new Sprite(10,10,19,19);
  creatingPixels(pixel599);

  pixel600 = new Sprite(10,10,19,19);
  creatingPixels(pixel600);

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
////////////r0w 6/////////////////////////////////
x = 1
Position(pixel151, 1, 5+x);
Position(pixel152, 2, 5+x);
Position(pixel153, 3, 5+x);
Position(pixel154, 4, 5+x);
Position(pixel155, 5, 5+x);
Position(pixel156, 6, 5+x);
Position(pixel157, 7, 5+x);
Position(pixel158, 8, 5+x);
Position(pixel159, 9, 5+x);
Position(pixel160, 10, 5+x);
Position(pixel161, 11, 5+x);
Position(pixel162, 12, 5+x);
Position(pixel163, 13, 5+x);
Position(pixel164, 14, 5+x);
Position(pixel165, 15, 5+x);
Position(pixel166, 16, 5+x);
Position(pixel167, 17, 5+x);
Position(pixel168, 18, 5+x);
Position(pixel169, 19, 5+x);
Position(pixel170, 20, 5+x);
Position(pixel171, 21, 5+x);
Position(pixel172, 22, 5+x);
Position(pixel173, 23, 5+x);
Position(pixel174, 24, 5+x);
Position(pixel175, 25, 5+x);
Position(pixel176, 26, 5+x);
Position(pixel177, 27, 5+x);
Position(pixel178, 28, 5+x);
Position(pixel179, 29, 5+x);
Position(pixel180, 30, 5+x);

////////////r0w 7/////////////////////////////////
x = 2
Position(pixel181, 1, 5+x);
Position(pixel182, 2, 5+x);
Position(pixel183, 3, 5+x);
Position(pixel184, 4, 5+x);
Position(pixel185, 5, 5+x);
Position(pixel186, 6, 5+x);
Position(pixel187, 7, 5+x);
Position(pixel188, 8, 5+x);
Position(pixel189, 9, 5+x);
Position(pixel190, 10, 5+x);
Position(pixel191, 11, 5+x);
Position(pixel192, 12, 5+x);
Position(pixel193, 13, 5+x);
Position(pixel194, 14, 5+x);
Position(pixel195, 15, 5+x);
Position(pixel196, 16, 5+x);
Position(pixel197, 17, 5+x);
Position(pixel198, 18, 5+x);
Position(pixel199, 19, 5+x);
Position(pixel200, 20, 5+x);
Position(pixel201, 21, 5+x);
Position(pixel202, 22, 5+x);
Position(pixel203, 23, 5+x);
Position(pixel204, 24, 5+x);
Position(pixel205, 25, 5+x);
Position(pixel206, 26, 5+x);
Position(pixel207, 27, 5+x);
Position(pixel208, 28, 5+x);
Position(pixel209, 29, 5+x);
Position(pixel210, 30, 5+x);

////////////r0w 8/////////////////////////////////
x = 3
Position(pixel211, 1, 5+x);
Position(pixel212, 2, 5+x);
Position(pixel213, 3, 5+x);
Position(pixel214, 4, 5+x);
Position(pixel215, 5, 5+x);
Position(pixel216, 6, 5+x);
Position(pixel217, 7, 5+x);
Position(pixel218, 8, 5+x);
Position(pixel219, 9, 5+x);
Position(pixel220, 10, 5+x);
Position(pixel221, 11, 5+x);
Position(pixel222, 12, 5+x);
Position(pixel223, 13, 5+x);
Position(pixel224, 14, 5+x);
Position(pixel225, 15, 5+x);
Position(pixel226, 16, 5+x);
Position(pixel227, 17, 5+x);
Position(pixel228, 18, 5+x);
Position(pixel229, 19, 5+x);
Position(pixel230, 20, 5+x);
Position(pixel231, 21, 5+x);
Position(pixel232, 22, 5+x);
Position(pixel233, 23, 5+x);
Position(pixel234, 24, 5+x);
Position(pixel235, 25, 5+x);
Position(pixel236, 26, 5+x);
Position(pixel237, 27, 5+x);
Position(pixel238, 28, 5+x);
Position(pixel239, 29, 5+x);
Position(pixel240, 30, 5+x);

////////////r0w 9/////////////////////////////////
x = 4
Position(pixel241, 1, 5+x);
Position(pixel242, 2, 5+x);
Position(pixel243, 3, 5+x);
Position(pixel244, 4, 5+x);
Position(pixel245, 5, 5+x);
Position(pixel246, 6, 5+x);
Position(pixel247, 7, 5+x);
Position(pixel248, 8, 5+x);
Position(pixel249, 9, 5+x);
Position(pixel250, 10, 5+x);
Position(pixel251, 11, 5+x);
Position(pixel252, 12, 5+x);
Position(pixel253, 13, 5+x);
Position(pixel254, 14, 5+x);
Position(pixel255, 15, 5+x);
Position(pixel256, 16, 5+x);
Position(pixel257, 17, 5+x);
Position(pixel258, 18, 5+x);
Position(pixel259, 19, 5+x);
Position(pixel260, 20, 5+x);
Position(pixel261, 21, 5+x);
Position(pixel262, 22, 5+x);
Position(pixel263, 23, 5+x);
Position(pixel264, 24, 5+x);
Position(pixel265, 25, 5+x);
Position(pixel266, 26, 5+x);
Position(pixel267, 27, 5+x);
Position(pixel268, 28, 5+x);
Position(pixel269, 29, 5+x);
Position(pixel270, 30, 5+x);

////////////r0w 10/////////////////////////////////
x = 5
Position(pixel271, 1, 5+x);
Position(pixel272, 2, 5+x);
Position(pixel273, 3, 5+x);
Position(pixel274, 4, 5+x);
Position(pixel275, 5, 5+x);
Position(pixel276, 6, 5+x);
Position(pixel277, 7, 5+x);
Position(pixel278, 8, 5+x);
Position(pixel279, 9, 5+x);
Position(pixel280, 10, 5+x);
Position(pixel281, 11, 5+x);
Position(pixel282, 12, 5+x);
Position(pixel283, 13, 5+x);
Position(pixel284, 14, 5+x);
Position(pixel285, 15, 5+x);
Position(pixel286, 16, 5+x);
Position(pixel287, 17, 5+x);
Position(pixel288, 18, 5+x);
Position(pixel289, 19, 5+x);
Position(pixel290, 20, 5+x);
Position(pixel291, 21, 5+x);
Position(pixel292, 22, 5+x);
Position(pixel293, 23, 5+x);
Position(pixel294, 24, 5+x);
Position(pixel295, 25, 5+x);
Position(pixel296, 26, 5+x);
Position(pixel297, 27, 5+x);
Position(pixel298, 28, 5+x);
Position(pixel299, 29, 5+x);
Position(pixel300, 30, 5+x);

////////////r0w 11/////////////////////////////////
x = 6
Position(pixel301, 1, 5+x);
Position(pixel302, 2, 5+x);
Position(pixel303, 3, 5+x);
Position(pixel304, 4, 5+x);
Position(pixel305, 5, 5+x);
Position(pixel306, 6, 5+x);
Position(pixel307, 7, 5+x);
Position(pixel308, 8, 5+x);
Position(pixel309, 9, 5+x);
Position(pixel310, 10, 5+x);
Position(pixel311, 11, 5+x);
Position(pixel312, 12, 5+x);
Position(pixel313, 13, 5+x);
Position(pixel314, 14, 5+x);
Position(pixel315, 15, 5+x);
Position(pixel316, 16, 5+x);
Position(pixel317, 17, 5+x);
Position(pixel318, 18, 5+x);
Position(pixel319, 19, 5+x);
Position(pixel320, 20, 5+x);
Position(pixel321, 21, 5+x);
Position(pixel322, 22, 5+x);
Position(pixel323, 23, 5+x);
Position(pixel324, 24, 5+x);
Position(pixel325, 25, 5+x);
Position(pixel326, 26, 5+x);
Position(pixel327, 27, 5+x);
Position(pixel328, 28, 5+x);
Position(pixel329, 29, 5+x);
Position(pixel330, 30, 5+x);

////////////r0w 12////////////////////////////////
x = 7
Position(pixel331, 1, 5+x);
Position(pixel332, 2, 5+x);
Position(pixel333, 3, 5+x);
Position(pixel334, 4, 5+x);
Position(pixel335, 5, 5+x);
Position(pixel336, 6, 5+x);
Position(pixel337, 7, 5+x);
Position(pixel338, 8, 5+x);
Position(pixel339, 9, 5+x);
Position(pixel340, 10, 5+x);
Position(pixel341, 11, 5+x);
Position(pixel342, 12, 5+x);
Position(pixel343, 13, 5+x);
Position(pixel344, 14, 5+x);
Position(pixel345, 15, 5+x);
Position(pixel346, 16, 5+x);
Position(pixel347, 17, 5+x);
Position(pixel348, 18, 5+x);
Position(pixel349, 19, 5+x);
Position(pixel350, 20, 5+x);
Position(pixel351, 21, 5+x);
Position(pixel352, 22, 5+x);
Position(pixel353, 23, 5+x);
Position(pixel354, 24, 5+x);
Position(pixel355, 25, 5+x);
Position(pixel356, 26, 5+x);
Position(pixel357, 27, 5+x);
Position(pixel358, 28, 5+x);
Position(pixel359, 29, 5+x);
Position(pixel360, 30, 5+x);

////////////r0w 13/////////////////////////////////
x = 8
Position(pixel361, 1, 5+x);
Position(pixel362, 2, 5+x);
Position(pixel363, 3, 5+x);
Position(pixel364, 4, 5+x);
Position(pixel365, 5, 5+x);
Position(pixel366, 6, 5+x);
Position(pixel367, 7, 5+x);
Position(pixel368, 8, 5+x);
Position(pixel369, 9, 5+x);
Position(pixel370, 10, 5+x);
Position(pixel371, 11, 5+x);
Position(pixel372, 12, 5+x);
Position(pixel373, 13, 5+x);
Position(pixel374, 14, 5+x);
Position(pixel375, 15, 5+x);
Position(pixel376, 16, 5+x);
Position(pixel377, 17, 5+x);
Position(pixel378, 18, 5+x);
Position(pixel379, 19, 5+x);
Position(pixel380, 20, 5+x);
Position(pixel381, 21, 5+x);
Position(pixel382, 22, 5+x);
Position(pixel383, 23, 5+x);
Position(pixel384, 24, 5+x);
Position(pixel385, 25, 5+x);
Position(pixel386, 26, 5+x);
Position(pixel387, 27, 5+x);
Position(pixel388, 28, 5+x);
Position(pixel389, 29, 5+x);
Position(pixel390, 30, 5+x);

////////////r0w 14/////////////////////////////////
x = 9
Position(pixel391, 1, 5+x);
Position(pixel392, 2, 5+x);
Position(pixel393, 3, 5+x);
Position(pixel394, 4, 5+x);
Position(pixel395, 5, 5+x);
Position(pixel396, 6, 5+x);
Position(pixel397, 7, 5+x);
Position(pixel398, 8, 5+x);
Position(pixel399, 9, 5+x);
Position(pixel400, 10, 5+x);
Position(pixel401, 11, 5+x);
Position(pixel402, 12, 5+x);
Position(pixel403, 13, 5+x);
Position(pixel404, 14, 5+x);
Position(pixel405, 15, 5+x);
Position(pixel406, 16, 5+x);
Position(pixel407, 17, 5+x);
Position(pixel408, 18, 5+x);
Position(pixel409, 19, 5+x);
Position(pixel410, 20, 5+x);
Position(pixel411, 21, 5+x);
Position(pixel412, 22, 5+x);
Position(pixel413, 23, 5+x);
Position(pixel414, 24, 5+x);
Position(pixel415, 25, 5+x);
Position(pixel416, 26, 5+x);
Position(pixel417, 27, 5+x);
Position(pixel418, 28, 5+x);
Position(pixel419, 29, 5+x);
Position(pixel420, 30, 5+x);

////////////r0w 15/////////////////////////////////
x = 10
Position(pixel421, 1, 5+x);
Position(pixel422, 2, 5+x);
Position(pixel423, 3, 5+x);
Position(pixel424, 4, 5+x);
Position(pixel425, 5, 5+x);
Position(pixel426, 6, 5+x);
Position(pixel427, 7, 5+x);
Position(pixel428, 8, 5+x);
Position(pixel429, 9, 5+x);
Position(pixel430, 10, 5+x);
Position(pixel431, 11, 5+x);
Position(pixel432, 12, 5+x);
Position(pixel433, 13, 5+x);
Position(pixel434, 14, 5+x);
Position(pixel435, 15, 5+x);
Position(pixel436, 16, 5+x);
Position(pixel437, 17, 5+x);
Position(pixel438, 18, 5+x);
Position(pixel439, 19, 5+x);
Position(pixel440, 20, 5+x);
Position(pixel441, 21, 5+x);
Position(pixel442, 22, 5+x);
Position(pixel443, 23, 5+x);
Position(pixel444, 24, 5+x);
Position(pixel445, 25, 5+x);
Position(pixel446, 26, 5+x);
Position(pixel447, 27, 5+x);
Position(pixel448, 28, 5+x);
Position(pixel449, 29, 5+x);
Position(pixel450, 30, 5+x);

////////////r0w 16/////////////////////////////////
x = 11
Position(pixel451, 1, 5+x);
Position(pixel452, 2, 5+x);
Position(pixel453, 3, 5+x);
Position(pixel454, 4, 5+x);
Position(pixel455, 5, 5+x);
Position(pixel456, 6, 5+x);
Position(pixel457, 7, 5+x);
Position(pixel458, 8, 5+x);
Position(pixel459, 9, 5+x);
Position(pixel460, 10, 5+x);
Position(pixel461, 11, 5+x);
Position(pixel462, 12, 5+x);
Position(pixel463, 13, 5+x);
Position(pixel464, 14, 5+x);
Position(pixel465, 15, 5+x);
Position(pixel466, 16, 5+x);
Position(pixel467, 17, 5+x);
Position(pixel468, 18, 5+x);
Position(pixel469, 19, 5+x);
Position(pixel470, 20, 5+x);
Position(pixel471, 21, 5+x);
Position(pixel472, 22, 5+x);
Position(pixel473, 23, 5+x);
Position(pixel474, 24, 5+x);
Position(pixel475, 25, 5+x);
Position(pixel476, 26, 5+x);
Position(pixel477, 27, 5+x);
Position(pixel478, 28, 5+x);
Position(pixel479, 29, 5+x);
Position(pixel480, 30, 5+x);

////////////r0w 17/////////////////////////////////
x = 12
Position(pixel481, 1, 5+x);
Position(pixel482, 2, 5+x);
Position(pixel483, 3, 5+x);
Position(pixel484, 4, 5+x);
Position(pixel485, 5, 5+x);
Position(pixel486, 6, 5+x);
Position(pixel487, 7, 5+x);
Position(pixel488, 8, 5+x);
Position(pixel489, 9, 5+x);
Position(pixel490, 10, 5+x);
Position(pixel491, 11, 5+x);
Position(pixel492, 12, 5+x);
Position(pixel493, 13, 5+x);
Position(pixel494, 14, 5+x);
Position(pixel495, 15, 5+x);
Position(pixel496, 16, 5+x);
Position(pixel497, 17, 5+x);
Position(pixel498, 18, 5+x);
Position(pixel499, 19, 5+x);
Position(pixel500, 20, 5+x);
Position(pixel501, 21, 5+x);
Position(pixel502, 22, 5+x);
Position(pixel503, 23, 5+x);
Position(pixel504, 24, 5+x);
Position(pixel505, 25, 5+x);
Position(pixel506, 26, 5+x);
Position(pixel507, 27, 5+x);
Position(pixel508, 28, 5+x);
Position(pixel509, 29, 5+x);
Position(pixel510, 30, 5+x);

////////////r0w 18/////////////////////////////////
x = 13
Position(pixel511, 1, 5+x);
Position(pixel512, 2, 5+x);
Position(pixel513, 3, 5+x);
Position(pixel514, 4, 5+x);
Position(pixel515, 5, 5+x);
Position(pixel516, 6, 5+x);
Position(pixel517, 7, 5+x);
Position(pixel518, 8, 5+x);
Position(pixel519, 9, 5+x);
Position(pixel520, 10, 5+x);
Position(pixel521, 11, 5+x);
Position(pixel522, 12, 5+x);
Position(pixel523, 13, 5+x);
Position(pixel524, 14, 5+x);
Position(pixel525, 15, 5+x);
Position(pixel526, 16, 5+x);
Position(pixel527, 17, 5+x);
Position(pixel528, 18, 5+x);
Position(pixel529, 19, 5+x);
Position(pixel530, 20, 5+x);
Position(pixel531, 21, 5+x);
Position(pixel532, 22, 5+x);
Position(pixel533, 23, 5+x);
Position(pixel534, 24, 5+x);
Position(pixel535, 25, 5+x);
Position(pixel536, 26, 5+x);
Position(pixel537, 27, 5+x);
Position(pixel538, 28, 5+x);
Position(pixel539, 29, 5+x);
Position(pixel540, 30, 5+x);

////////////r0w 19/////////////////////////////////
x = 14
Position(pixel541, 1, 5+x);
Position(pixel542, 2, 5+x);
Position(pixel543, 3, 5+x);
Position(pixel544, 4, 5+x);
Position(pixel545, 5, 5+x);
Position(pixel546, 6, 5+x);
Position(pixel547, 7, 5+x);
Position(pixel548, 8, 5+x);
Position(pixel549, 9, 5+x);
Position(pixel550, 10, 5+x);
Position(pixel551, 11, 5+x);
Position(pixel552, 12, 5+x);
Position(pixel553, 13, 5+x);
Position(pixel554, 14, 5+x);
Position(pixel555, 15, 5+x);
Position(pixel556, 16, 5+x);
Position(pixel557, 17, 5+x);
Position(pixel558, 18, 5+x);
Position(pixel559, 19, 5+x);
Position(pixel560, 20, 5+x);
Position(pixel561, 21, 5+x);
Position(pixel562, 22, 5+x);
Position(pixel563, 23, 5+x);
Position(pixel564, 24, 5+x);
Position(pixel565, 25, 5+x);
Position(pixel566, 26, 5+x);
Position(pixel567, 27, 5+x);
Position(pixel568, 28, 5+x);
Position(pixel569, 29, 5+x);
Position(pixel570, 30, 5+x);

////////////r0w 20/////////////////////////////////
x = 15
Position(pixel571, 1, 5+x);
Position(pixel572, 2, 5+x);
Position(pixel573, 3, 5+x);
Position(pixel574, 4, 5+x);
Position(pixel575, 5, 5+x);
Position(pixel576, 6, 5+x);
Position(pixel577, 7, 5+x);
Position(pixel578, 8, 5+x);
Position(pixel579, 9, 5+x);
Position(pixel580, 10, 5+x);
Position(pixel581, 11, 5+x);
Position(pixel582, 12, 5+x);
Position(pixel583, 13, 5+x);
Position(pixel584, 14, 5+x);
Position(pixel585, 15, 5+x);
Position(pixel586, 16, 5+x);
Position(pixel587, 17, 5+x);
Position(pixel588, 18, 5+x);
Position(pixel589, 19, 5+x);
Position(pixel590, 20, 5+x);
Position(pixel591, 21, 5+x);
Position(pixel592, 22, 5+x);
Position(pixel593, 23, 5+x);
Position(pixel594, 24, 5+x);
Position(pixel595, 25, 5+x);
Position(pixel596, 26, 5+x);
Position(pixel597, 27, 5+x);
Position(pixel598, 28, 5+x);
Position(pixel599, 29, 5+x);
Position(pixel600, 30, 5+x);
}

function creatingPixels(sprite)
{
  sprite.rotation =0;
  sprite.collider = "kinematic";
  sprite.color = "yellow";
  sprite.width = 17;
  sprite.height = 17;
}
function Position(sprite, numPos, rowPos)
{
  sprite.pos={x:100+((numPos - 1 )*17), y: 121+((rowPos-1)*17)};
}

