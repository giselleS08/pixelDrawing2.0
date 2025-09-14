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

x=21
//row21////////////////
Position(pixel601, 1, x);
Position(pixel602, 2, x);
Position(pixel603, 3, x);
Position(pixel604, 4, x);
Position(pixel605, 5, x);
Position(pixel606, 6, x);
Position(pixel607, 7, x);
Position(pixel608, 8, x);
Position(pixel609, 9, x);
Position(pixel610, 10, x);
Position(pixel611, 11, x);
Position(pixel612, 12, x);
Position(pixel613, 13, x);
Position(pixel614, 14, x);
Position(pixel615, 15, x);
Position(pixel616, 16, x);
Position(pixel617, 17, x);
Position(pixel618, 18, x);
Position(pixel619, 19, x);
Position(pixel620, 20, x);
Position(pixel621, 21, x);
Position(pixel622, 22, x);
Position(pixel623, 23, x);
Position(pixel624, 24, x);
Position(pixel625, 25, x);
Position(pixel626, 26, x);
Position(pixel627, 27, x);
Position(pixel628, 28, x);
Position(pixel629, 29, x);
Position(pixel630, 30, x);
//////////////////////////
//row22
x = 20
Position(pixel631, 1, x+2);
Position(pixel632, 2, x+2);
Position(pixel633, 3, x+2);
Position(pixel634, 4, x+2);
Position(pixel635, 5, x+2);
Position(pixel636, 6, x+2);
Position(pixel637, 7, x+2);
Position(pixel638, 8, x+2);
Position(pixel639, 9, x+2);
Position(pixel640, 10, x+2);
Position(pixel641, 11, x+2);
Position(pixel642, 12, x+2);
Position(pixel643, 13, x+2);
Position(pixel644, 14, x+2);
Position(pixel645, 15, x+2);
Position(pixel646, 16, x+2);
Position(pixel647, 17, x+2);
Position(pixel648, 18, x+2);
Position(pixel649, 19, x+2);
Position(pixel650, 20, x+2);
Position(pixel651, 21, x+2);
Position(pixel652, 22, x+2);
Position(pixel653, 23, x+2);
Position(pixel654, 24, x+2);
Position(pixel655, 25, x+2);
Position(pixel656, 26, x+2);
Position(pixel657, 27, x+2);
Position(pixel658, 28, x+2);
Position(pixel659, 29, x+2);
Position(pixel660, 30, x+2);


//row 23////////////////////////////////////////
Position(pixel661, 1, x+3);
Position(pixel662, 2, x+3);
Position(pixel663, 3, x+3);
Position(pixel664, 4, x+3);
Position(pixel665, 5, x+3);
Position(pixel666, 6, x+3);
Position(pixel667, 7, x+3);
Position(pixel668, 8, x+3);
Position(pixel669, 9, x+3);
Position(pixel670, 10, x+3);
Position(pixel671, 11, x+3);
Position(pixel672, 12, x+3);
Position(pixel673, 13, x+3);
Position(pixel674, 14, x+3);
Position(pixel675, 15, x+3);
Position(pixel676, 16, x+3);
Position(pixel677, 17, x+3);
Position(pixel678, 18, x+3);
Position(pixel679, 19, x+3);
Position(pixel680, 20, x+3);
Position(pixel681, 21, x+3);
Position(pixel682, 22, x+3);
Position(pixel683, 23, x+3);
Position(pixel684, 24, x+3);
Position(pixel685, 25, x+3);
Position(pixel686, 26, x+3);
Position(pixel687, 27, x+3);
Position(pixel688, 28, x+3);
Position(pixel689, 29, x+3);
Position(pixel690, 30, x+3);

//row4
Position(pixel691, 1, x+4);
Position(pixel692, 2, x+4);
Position(pixel693, 3, 4+x);
Position(pixel694, 4, 4+x);
Position(pixel695, 5, 4+x);
Position(pixel696, 6, 4+x);
Position(pixel697, 7, 4+x);
Position(pixel698, 8, 4+x);
Position(pixel699, 9, 4+x);
Position(pixel700, 10, 4+x);
Position(pixel701, 11, 4+x);
Position(pixel702, 12, 4+x);
Position(pixel703, 13, 4+x);
Position(pixel704, 14, 4+x);
Position(pixel705, 15, 4+x);
Position(pixel706, 16, 4+x);
Position(pixel707, 17, 4+x);
Position(pixel708, 18, 4+x);
Position(pixel709, 19, 4+x);
Position(pixel710, 20, 4+x);
Position(pixel711, 21, 4+x);
Position(pixel712, 22, 4+x);
Position(pixel713, 23, 4+x);
Position(pixel714, 24, 4+x);
Position(pixel715, 25, 4+x);
Position(pixel716, 26, 4+x);
Position(pixel717, 27, 4+x);
Position(pixel718, 28, 4+x);
Position(pixel719, 29, 4+x);
Position(pixel720, 30, 4+x);


//row5///////////////////////////////
Position(pixel721, 1, 5+x);
Position(pixel722, 2, 5+x);
Position(pixel723, 3, 5+x);
Position(pixel724, 4, 5+x);
Position(pixel725, 5, 5+x);
Position(pixel726, 6, 5+x);
Position(pixel727, 7, 5+x);
Position(pixel728, 8, 5+x);
Position(pixel729, 9, 5+x);
Position(pixel730, 10, 5+x);
Position(pixel731, 11, 5+x);
Position(pixel732, 12, 5+x);
Position(pixel733, 13, 5+x);
Position(pixel734, 14, 5+x);
Position(pixel735, 15, 5+x);
Position(pixel736, 16, 5+x);
Position(pixel737, 17, 5+x);
Position(pixel738, 18, 5+x);
Position(pixel739, 19, 5+x);
Position(pixel740, 20, 5+x);
Position(pixel741, 21, 5+x);
Position(pixel742, 22, 5+x);
Position(pixel743, 23, 5+x);
Position(pixel744, 24, 5+x);
Position(pixel745, 25, 5+x);
Position(pixel746, 26, 5+x);
Position(pixel747, 27, 5+x);
Position(pixel748, 28, 5+x);
Position(pixel749, 29, 5+x);
Position(pixel750, 30, 5+x);
////////////r0w 6/////////////////////////////////
x = 1
Position(pixel751, 1, 5+x);
Position(pixel752, 2, 5+x);
Position(pixel753, 3, 5+x);
Position(pixel754, 4, 5+x);
Position(pixel755, 5, 5+x);
Position(pixel756, 6, 5+x);
Position(pixel757, 7, 5+x);
Position(pixel758, 8, 5+x);
Position(pixel759, 9, 5+x);
Position(pixel760, 10, 5+x);
Position(pixel761, 11, 5+x);
Position(pixel762, 12, 5+x);
Position(pixel763, 13, 5+x);
Position(pixel764, 14, 5+x);
Position(pixel765, 15, 5+x);
Position(pixel766, 16, 5+x);
Position(pixel767, 17, 5+x);
Position(pixel768, 18, 5+x);
Position(pixel769, 19, 5+x);
Position(pixel770, 20, 5+x);
Position(pixel771, 21, 5+x);
Position(pixel772, 22, 5+x);
Position(pixel773, 23, 5+x);
Position(pixel774, 24, 5+x);
Position(pixel775, 25, 5+x);
Position(pixel776, 26, 5+x);
Position(pixel777, 27, 5+x);
Position(pixel778, 28, 5+x);
Position(pixel779, 29, 5+x);
Position(pixel780, 30, 5+x);

////////////r0w 7/////////////////////////////////
x = 2
Position(pixel781, 1, 5+x);
Position(pixel782, 2, 5+x);
Position(pixel783, 3, 5+x);
Position(pixel784, 4, 5+x);
Position(pixel785, 5, 5+x);
Position(pixel786, 6, 5+x);
Position(pixel787, 7, 5+x);
Position(pixel788, 8, 5+x);
Position(pixel789, 9, 5+x);
Position(pixel790, 10, 5+x);
Position(pixel791, 11, 5+x);
Position(pixel792, 12, 5+x);
Position(pixel793, 13, 5+x);
Position(pixel794, 14, 5+x);
Position(pixel795, 15, 5+x);
Position(pixel796, 16, 5+x);
Position(pixel797, 17, 5+x);
Position(pixel798, 18, 5+x);
Position(pixel799, 19, 5+x);
Position(pixel800, 20, 5+x);
Position(pixel801, 21, 5+x);
Position(pixel802, 22, 5+x);
Position(pixel803, 23, 5+x);
Position(pixel804, 24, 5+x);
Position(pixel805, 25, 5+x);
Position(pixel806, 26, 5+x);
Position(pixel807, 27, 5+x);
Position(pixel808, 28, 5+x);
Position(pixel809, 29, 5+x);
Position(pixel810, 30, 5+x);

////////////r0w 8/////////////////////////////////
x = 3
Position(pixel811, 1, 5+x);
Position(pixel812, 2, 5+x);
Position(pixel813, 3, 5+x);
Position(pixel814, 4, 5+x);
Position(pixel815, 5, 5+x);
Position(pixel816, 6, 5+x);
Position(pixel817, 7, 5+x);
Position(pixel818, 8, 5+x);
Position(pixel819, 9, 5+x);
Position(pixel820, 10, 5+x);
Position(pixel821, 11, 5+x);
Position(pixel822, 12, 5+x);
Position(pixel823, 13, 5+x);
Position(pixel824, 14, 5+x);
Position(pixel825, 15, 5+x);
Position(pixel826, 16, 5+x);
Position(pixel827, 17, 5+x);
Position(pixel828, 18, 5+x);
Position(pixel829, 19, 5+x);
Position(pixel830, 20, 5+x);
Position(pixel831, 21, 5+x);
Position(pixel832, 22, 5+x);
Position(pixel833, 23, 5+x);
Position(pixel834, 24, 5+x);
Position(pixel835, 25, 5+x);
Position(pixel836, 26, 5+x);
Position(pixel837, 27, 5+x);
Position(pixel838, 28, 5+x);
Position(pixel839, 29, 5+x);
Position(pixel840, 30, 5+x);

////////////r0w 9/////////////////////////////////
x = 4
Position(pixel841, 1, 5+x);
Position(pixel842, 2, 5+x);
Position(pixel843, 3, 5+x);
Position(pixel844, 4, 5+x);
Position(pixel845, 5, 5+x);
Position(pixel846, 6, 5+x);
Position(pixel847, 7, 5+x);
Position(pixel848, 8, 5+x);
Position(pixel849, 9, 5+x);
Position(pixel850, 10, 5+x);
Position(pixel851, 11, 5+x);
Position(pixel852, 12, 5+x);
Position(pixel853, 13, 5+x);
Position(pixel854, 14, 5+x);
Position(pixel855, 15, 5+x);
Position(pixel856, 16, 5+x);
Position(pixel857, 17, 5+x);
Position(pixel858, 18, 5+x);
Position(pixel859, 19, 5+x);
Position(pixel860, 20, 5+x);
Position(pixel861, 21, 5+x);
Position(pixel862, 22, 5+x);
Position(pixel863, 23, 5+x);
Position(pixel864, 24, 5+x);
Position(pixel865, 25, 5+x);
Position(pixel866, 26, 5+x);
Position(pixel867, 27, 5+x);
Position(pixel868, 28, 5+x);
Position(pixel869, 29, 5+x);
Position(pixel870, 30, 5+x);

////////////r0w 10/////////////////////////////////
x = 5
Position(pixel871, 1, 5+x);
Position(pixel872, 2, 5+x);
Position(pixel873, 3, 5+x);
Position(pixel874, 4, 5+x);
Position(pixel875, 5, 5+x);
Position(pixel876, 6, 5+x);
Position(pixel877, 7, 5+x);
Position(pixel878, 8, 5+x);
Position(pixel879, 9, 5+x);
Position(pixel880, 10, 5+x);
Position(pixel881, 11, 5+x);
Position(pixel882, 12, 5+x);
Position(pixel883, 13, 5+x);
Position(pixel884, 14, 5+x);
Position(pixel885, 15, 5+x);
Position(pixel886, 16, 5+x);
Position(pixel887, 17, 5+x);
Position(pixel888, 18, 5+x);
Position(pixel889, 19, 5+x);
Position(pixel890, 20, 5+x);
Position(pixel891, 21, 5+x);
Position(pixel892, 22, 5+x);
Position(pixel893, 23, 5+x);
Position(pixel894, 24, 5+x);
Position(pixel895, 25, 5+x);
Position(pixel896, 26, 5+x);
Position(pixel897, 27, 5+x);
Position(pixel898, 28, 5+x);
Position(pixel899, 29, 5+x);
Position(pixel900, 30, 5+x);

////////////r0w 11/////////////////////////////////
x = 6
Position(pixel901, 1, 5+x);
Position(pixel902, 2, 5+x);
Position(pixel903, 3, 5+x);
Position(pixel904, 4, 5+x);
Position(pixel905, 5, 5+x);
Position(pixel906, 6, 5+x);
Position(pixel907, 7, 5+x);
Position(pixel908, 8, 5+x);
Position(pixel909, 9, 5+x);
Position(pixel910, 10, 5+x);
Position(pixel911, 11, 5+x);
Position(pixel912, 12, 5+x);
Position(pixel913, 13, 5+x);
Position(pixel914, 14, 5+x);
Position(pixel915, 15, 5+x);
Position(pixel916, 16, 5+x);
Position(pixel917, 17, 5+x);
Position(pixel918, 18, 5+x);
Position(pixel919, 19, 5+x);
Position(pixel920, 20, 5+x);
Position(pixel921, 21, 5+x);
Position(pixel922, 22, 5+x);
Position(pixel923, 23, 5+x);
Position(pixel924, 24, 5+x);
Position(pixel925, 25, 5+x);
Position(pixel926, 26, 5+x);
Position(pixel927, 27, 5+x);
Position(pixel928, 28, 5+x);
Position(pixel929, 29, 5+x);
Position(pixel930, 30, 5+x);

////////////r0w 12////////////////////////////////
x = 7
Position(pixel931, 1, 5+x);
Position(pixel932, 2, 5+x);
Position(pixel933, 3, 5+x);
Position(pixel934, 4, 5+x);
Position(pixel935, 5, 5+x);
Position(pixel936, 6, 5+x);
Position(pixel937, 7, 5+x);
Position(pixel938, 8, 5+x);
Position(pixel939, 9, 5+x);
Position(pixel940, 10, 5+x);
Position(pixel941, 11, 5+x);
Position(pixel942, 12, 5+x);
Position(pixel943, 13, 5+x);
Position(pixel944, 14, 5+x);
Position(pixel945, 15, 5+x);
Position(pixel946, 16, 5+x);
Position(pixel947, 17, 5+x);
Position(pixel948, 18, 5+x);
Position(pixel949, 19, 5+x);
Position(pixel950, 20, 5+x);
Position(pixel951, 21, 5+x);
Position(pixel952, 22, 5+x);
Position(pixel953, 23, 5+x);
Position(pixel954, 24, 5+x);
Position(pixel955, 25, 5+x);
Position(pixel956, 26, 5+x);
Position(pixel957, 27, 5+x);
Position(pixel958, 28, 5+x);
Position(pixel959, 29, 5+x);
Position(pixel960, 30, 5+x);

////////////r0w 13/////////////////////////////////
x = 8
Position(pixel961, 1, 5+x);
Position(pixel962, 2, 5+x);
Position(pixel963, 3, 5+x);
Position(pixel964, 4, 5+x);
Position(pixel965, 5, 5+x);
Position(pixel966, 6, 5+x);
Position(pixel967, 7, 5+x);
Position(pixel968, 8, 5+x);
Position(pixel969, 9, 5+x);
Position(pixel970, 10, 5+x);
Position(pixel971, 11, 5+x);
Position(pixel972, 12, 5+x);
Position(pixel973, 13, 5+x);
Position(pixel974, 14, 5+x);
Position(pixel975, 15, 5+x);
Position(pixel976, 16, 5+x);
Position(pixel977, 17, 5+x);
Position(pixel978, 18, 5+x);
Position(pixel979, 19, 5+x);
Position(pixel980, 20, 5+x);
Position(pixel981, 21, 5+x);
Position(pixel982, 22, 5+x);
Position(pixel983, 23, 5+x);
Position(pixel984, 24, 5+x);
Position(pixel985, 25, 5+x);
Position(pixel986, 26, 5+x);
Position(pixel987, 27, 5+x);
Position(pixel988, 28, 5+x);
Position(pixel989, 29, 5+x);
Position(pixel990, 30, 5+x);

////////////r0w 14/////////////////////////////////
x = 9
Position(pixel991, 1, 5+x);
Position(pixel992, 2, 5+x);
Position(pixel993, 3, 5+x);
Position(pixel994, 4, 5+x);
Position(pixel995, 5, 5+x);
Position(pixel996, 6, 5+x);
Position(pixel997, 7, 5+x);
Position(pixel998, 8, 5+x);
Position(pixel999, 9, 5+x);
Position(pixel1000, 10, 5+x);
Position(pixel1001, 11, 5+x);
Position(pixel1002, 12, 5+x);
Position(pixel1003, 13, 5+x);
Position(pixel1004, 14, 5+x);
Position(pixel1005, 15, 5+x);
Position(pixel1006, 16, 5+x);
Position(pixel1007, 17, 5+x);
Position(pixel1008, 18, 5+x);
Position(pixel1009, 19, 5+x);
Position(pixel1010, 20, 5+x);
Position(pixel1011, 21, 5+x);
Position(pixel1012, 22, 5+x);
Position(pixel1013, 23, 5+x);
Position(pixel1014, 24, 5+x);
Position(pixel1015, 25, 5+x);
Position(pixel1016, 26, 5+x);
Position(pixel1017, 27, 5+x);
Position(pixel1018, 28, 5+x);
Position(pixel1019, 29, 5+x);
Position(pixel1020, 30, 5+x);
////////////r0w 15/////////////////////////////////
x = 10
Position(pixel1021, 1, 5+x);
Position(pixel1022, 2, 5+x);
Position(pixel1023, 3, 5+x);
Position(pixel1024, 4, 5+x);
Position(pixel1025, 5, 5+x);
Position(pixel1026, 6, 5+x);
Position(pixel1027, 7, 5+x);
Position(pixel1028, 8, 5+x);
Position(pixel1029, 9, 5+x);
Position(pixel1030, 10, 5+x);
Position(pixel1031, 11, 5+x);
Position(pixel1032, 12, 5+x);
Position(pixel1033, 13, 5+x);
Position(pixel1034, 14, 5+x);
Position(pixel1035, 15, 5+x);
Position(pixel1036, 16, 5+x);
Position(pixel1037, 17, 5+x);
Position(pixel1038, 18, 5+x);
Position(pixel1039, 19, 5+x);
Position(pixel1040, 20, 5+x);
Position(pixel1041, 21, 5+x);
Position(pixel1042, 22, 5+x);
Position(pixel1043, 23, 5+x);
Position(pixel1044, 24, 5+x);
Position(pixel1045, 25, 5+x);
Position(pixel1046, 26, 5+x);
Position(pixel1047, 27, 5+x);
Position(pixel1048, 28, 5+x);
Position(pixel1049, 29, 5+x);
Position(pixel1050, 30, 5+x);

////////////r0w 16/////////////////////////////////
x = 11
Position(pixel1051, 1, 5+x);
Position(pixel1052, 2, 5+x);
Position(pixel1053, 3, 5+x);
Position(pixel1054, 4, 5+x);
Position(pixel1055, 5, 5+x);
Position(pixel1056, 6, 5+x);
Position(pixel1057, 7, 5+x);
Position(pixel1058, 8, 5+x);
Position(pixel1059, 9, 5+x);
Position(pixel1060, 10, 5+x);
Position(pixel1061, 11, 5+x);
Position(pixel1062, 12, 5+x);
Position(pixel1063, 13, 5+x);
Position(pixel1064, 14, 5+x);
Position(pixel1065, 15, 5+x);
Position(pixel1066, 16, 5+x);
Position(pixel1067, 17, 5+x);
Position(pixel1068, 18, 5+x);
Position(pixel1069, 19, 5+x);
Position(pixel1070, 20, 5+x);
Position(pixel1071, 21, 5+x);
Position(pixel1072, 22, 5+x);
Position(pixel1073, 23, 5+x);
Position(pixel1074, 24, 5+x);
Position(pixel1075, 25, 5+x);
Position(pixel1076, 26, 5+x);
Position(pixel1077, 27, 5+x);
Position(pixel1078, 28, 5+x);
Position(pixel1079, 29, 5+x);
Position(pixel1080, 30, 5+x);

////////////r0w 17/////////////////////////////////
x = 12
Position(pixel1081, 1, 5+x);
Position(pixel1082, 2, 5+x);
Position(pixel1083, 3, 5+x);
Position(pixel1084, 4, 5+x);
Position(pixel1085, 5, 5+x);
Position(pixel1086, 6, 5+x);
Position(pixel1087, 7, 5+x);
Position(pixel1088, 8, 5+x);
Position(pixel1089, 9, 5+x);
Position(pixel1090, 10, 5+x);
Position(pixel1091, 11, 5+x);
Position(pixel1092, 12, 5+x);
Position(pixel1093, 13, 5+x);
Position(pixel1094, 14, 5+x);
Position(pixel1095, 15, 5+x);
Position(pixel1096, 16, 5+x);
Position(pixel1097, 17, 5+x);
Position(pixel1098, 18, 5+x);
Position(pixel1099, 19, 5+x);
Position(pixel1100, 20, 5+x);
Position(pixel1101, 21, 5+x);
Position(pixel1102, 22, 5+x);
Position(pixel1103, 23, 5+x);
Position(pixel1104, 24, 5+x);
Position(pixel1105, 25, 5+x);
Position(pixel1106, 26, 5+x);
Position(pixel1107, 27, 5+x);
Position(pixel1108, 28, 5+x);
Position(pixel1109, 29, 5+x);
Position(pixel1110, 30, 5+x);

////////////r0w 18/////////////////////////////////
x = 13
Position(pixel1111, 1, 5+x);
Position(pixel1112, 2, 5+x);
Position(pixel1113, 3, 5+x);
Position(pixel1114, 4, 5+x);
Position(pixel1115, 5, 5+x);
Position(pixel1116, 6, 5+x);
Position(pixel1117, 7, 5+x);
Position(pixel1118, 8, 5+x);
Position(pixel1119, 9, 5+x);
Position(pixel1120, 10, 5+x);
Position(pixel1121, 11, 5+x);
Position(pixel1122, 12, 5+x);
Position(pixel1123, 13, 5+x);
Position(pixel1124, 14, 5+x);
Position(pixel1125, 15, 5+x);
Position(pixel1126, 16, 5+x);
Position(pixel1127, 17, 5+x);
Position(pixel1128, 18, 5+x);
Position(pixel1129, 19, 5+x);
Position(pixel1130, 20, 5+x);
Position(pixel1131, 21, 5+x);
Position(pixel1132, 22, 5+x);
Position(pixel1133, 23, 5+x);
Position(pixel1134, 24, 5+x);
Position(pixel1135, 25, 5+x);
Position(pixel1136, 26, 5+x);
Position(pixel1137, 27, 5+x);
Position(pixel1138, 28, 5+x);
Position(pixel1139, 29, 5+x);
Position(pixel1140, 30, 5+x);

////////////r0w 19/////////////////////////////////
x = 14
Position(pixel1141, 1, 5+x);
Position(pixel1142, 2, 5+x);
Position(pixel1143, 3, 5+x);
Position(pixel1144, 4, 5+x);
Position(pixel1145, 5, 5+x);
Position(pixel1146, 6, 5+x);
Position(pixel1147, 7, 5+x);
Position(pixel1148, 8, 5+x);
Position(pixel1149, 9, 5+x);
Position(pixel1150, 10, 5+x);
Position(pixel1151, 11, 5+x);
Position(pixel1152, 12, 5+x);
Position(pixel1153, 13, 5+x);
Position(pixel1154, 14, 5+x);
Position(pixel1155, 15, 5+x);
Position(pixel1156, 16, 5+x);
Position(pixel1157, 17, 5+x);
Position(pixel1158, 18, 5+x);
Position(pixel1159, 19, 5+x);
Position(pixel1160, 20, 5+x);
Position(pixel1161, 21, 5+x);
Position(pixel1162, 22, 5+x);
Position(pixel1163, 23, 5+x);
Position(pixel1164, 24, 5+x);
Position(pixel1165, 25, 5+x);
Position(pixel1166, 26, 5+x);
Position(pixel1167, 27, 5+x);
Position(pixel1168, 28, 5+x);
Position(pixel1169, 29, 5+x);
Position(pixel1170, 30, 5+x);

////////////r0w 20/////////////////////////////////
x = 15
Position(pixel1171, 1, 5+x);
Position(pixel1172, 2, 5+x);
Position(pixel1173, 3, 5+x);
Position(pixel1174, 4, 5+x);
Position(pixel1175, 5, 5+x);
Position(pixel1176, 6, 5+x);
Position(pixel1177, 7, 5+x);
Position(pixel1178, 8, 5+x);
Position(pixel1179, 9, 5+x);
Position(pixel1180, 10, 5+x);
Position(pixel1181, 11, 5+x);
Position(pixel1182, 12, 5+x);
Position(pixel1183, 13, 5+x);
Position(pixel1184, 14, 5+x);
Position(pixel1185, 15, 5+x);
Position(pixel1186, 16, 5+x);
Position(pixel1187, 17, 5+x);
Position(pixel1188, 18, 5+x);
Position(pixel1189, 19, 5+x);
Position(pixel1190, 20, 5+x);
Position(pixel1191, 21, 5+x);
Position(pixel1192, 22, 5+x);
Position(pixel1193, 23, 5+x);
Position(pixel1194, 24, 5+x);
Position(pixel1195, 25, 5+x);
Position(pixel1196, 26, 5+x);
Position(pixel1197, 27, 5+x);
Position(pixel1198, 28, 5+x);
Position(pixel1199, 29, 5+x);
Position(pixel1200, 30, 5+x);







x=21
//row21////////////////
Position(pixel1201, 1, x);
Position(pixel1202, 2, x);
Position(pixel1203, 3, x);
Position(pixel1204, 4, x);
Position(pixel125, 5, x);
Position(pixel1206, 6, x);
Position(pixel1207, 7, x);
Position(pixel1208, 8, x);
Position(pixel1209, 9, x);
Position(pixel1210, 10, x);
Position(pixel1211, 11, x);
Position(pixel1212, 12, x);
Position(pixel1213, 13, x);
Position(pixel1214, 14, x);
Position(pixel1215, 15, x);
Position(pixel1216, 16, x);
Position(pixel1217, 17, x);
Position(pixel1218, 18, x);
Position(pixel1219, 19, x);
Position(pixel1220, 20, x);
Position(pixel1221, 21, x);
Position(pixel1222, 22, x);
Position(pixel1223, 23, x);
Position(pixel1224, 24, x);
Position(pixel1225, 25, x);
Position(pixel1226, 26, x);
Position(pixel1227, 27, x);
Position(pixel1228, 28, x);
Position(pixel1229, 29, x);
Position(pixel1230, 30, x);
//////////////////////////
//row22
x = 20
Position(pixel1231, 1, x+2);
Position(pixel1232, 2, x+2);
Position(pixel1233, 3, x+2);
Position(pixel1234, 4, x+2);
Position(pixel1235, 5, x+2);
Position(pixel1236, 6, x+2);
Position(pixel1237, 7, x+2);
Position(pixel1238, 8, x+2);
Position(pixel1239, 9, x+2);
Position(pixel1240, 10, x+2);
Position(pixel1241, 11, x+2);
Position(pixel1242, 12, x+2);
Position(pixel1243, 13, x+2);
Position(pixel1244, 14, x+2);
Position(pixel1245, 15, x+2);
Position(pixel1246, 16, x+2);
Position(pixel1247, 17, x+2);
Position(pixel1248, 18, x+2);
Position(pixel1249, 19, x+2);
Position(pixel1250, 20, x+2);
Position(pixel1251, 21, x+2);
Position(pixel1252, 22, x+2);
Position(pixel1253, 23, x+2);
Position(pixel1254, 24, x+2);
Position(pixel1255, 25, x+2);
Position(pixel1256, 26, x+2);
Position(pixel1257, 27, x+2);
Position(pixel1258, 28, x+2);
Position(pixel1259, 29, x+2);
Position(pixel1260, 30, x+2);


//row 23////////////////////////////////////////
Position(pixel1261, 1, x+3);
Position(pixel1262, 2, x+3);
Position(pixel1263, 3, x+3);
Position(pixel1264, 4, x+3);
Position(pixel1265, 5, x+3);
Position(pixel1266, 6, x+3);
Position(pixel1267, 7, x+3);
Position(pixel1268, 8, x+3);
Position(pixel1269, 9, x+3);
Position(pixel1270, 10, x+3);
Position(pixel1271, 11, x+3);
Position(pixel1272, 12, x+3);
Position(pixel1273, 13, x+3);
Position(pixel1274, 14, x+3);
Position(pixel1275, 15, x+3);
Position(pixel1276, 16, x+3);
Position(pixel1277, 17, x+3);
Position(pixel1278, 18, x+3);
Position(pixel1279, 19, x+3);
Position(pixel1280, 20, x+3);
Position(pixel1281, 21, x+3);
Position(pixel1282, 22, x+3);
Position(pixel1283, 23, x+3);
Position(pixel1284, 24, x+3);
Position(pixel1285, 25, x+3);
Position(pixel1286, 26, x+3);
Position(pixel1287, 27, x+3);
Position(pixel1288, 28, x+3);
Position(pixel1289, 29, x+3);
Position(pixel1290, 30, x+3);

//row4
Position(pixel1291, 1, x+4);
Position(pixel1292, 2, x+4);
Position(pixel1293, 3, 4+x);
Position(pixel1294, 4, 4+x);
Position(pixel1295, 5, 4+x);
Position(pixel1296, 6, 4+x);
Position(pixel1297, 7, 4+x);
Position(pixel1298, 8, 4+x);
Position(pixel1299, 9, 4+x);
Position(pixel1300, 10, 4+x);
Position(pixel1301, 11, 4+x);
Position(pixel1302, 12, 4+x);
Position(pixel1303, 13, 4+x);
Position(pixel1304, 14, 4+x);
Position(pixel1305, 15, 4+x);
Position(pixel1306, 16, 4+x);
Position(pixel1307, 17, 4+x);
Position(pixel1308, 18, 4+x);
Position(pixel1309, 19, 4+x);
Position(pixel1310, 20, 4+x);
Position(pixel1311, 21, 4+x);
Position(pixel1312, 22, 4+x);
Position(pixel1313, 23, 4+x);
Position(pixel1314, 24, 4+x);
Position(pixel1315, 25, 4+x);
Position(pixel1316, 26, 4+x);
Position(pixel1317, 27, 4+x);
Position(pixel1318, 28, 4+x);
Position(pixel1319, 29, 4+x);
Position(pixel1320, 30, 4+x);


//row5///////////////////////////////
Position(pixel1321, 1, 5+x);
Position(pixel1322, 2, 5+x);
Position(pixel1323, 3, 5+x);
Position(pixel1324, 4, 5+x);
Position(pixel1325, 5, 5+x);
Position(pixel1326, 6, 5+x);
Position(pixel1327, 7, 5+x);
Position(pixel1328, 8, 5+x);
Position(pixel1329, 9, 5+x);
Position(pixel1330, 10, 5+x);
Position(pixel1331, 11, 5+x);
Position(pixel1332, 12, 5+x);
Position(pixel1333, 13, 5+x);
Position(pixel1334, 14, 5+x);
Position(pixel1335, 15, 5+x);
Position(pixel1336, 16, 5+x);
Position(pixel1337, 17, 5+x);
Position(pixel1338, 18, 5+x);
Position(pixel1339, 19, 5+x);
Position(pixel1340, 20, 5+x);
Position(pixel1341, 21, 5+x);
Position(pixel1342, 22, 5+x);
Position(pixel1343, 23, 5+x);
Position(pixel1344, 24, 5+x);
Position(pixel1345, 25, 5+x);
Position(pixel1346, 26, 5+x);
Position(pixel1347, 27, 5+x);
Position(pixel1348, 28, 5+x);
Position(pixel1349, 29, 5+x);
Position(pixel1350, 30, 5+x);
////////////r0w 6/////////////////////////////////
x = 1
Position(pixel1351, 1, 5+x);
Position(pixel1352, 2, 5+x);
Position(pixel1353, 3, 5+x);
Position(pixel1354, 4, 5+x);
Position(pixel1355, 5, 5+x);
Position(pixel1356, 6, 5+x);
Position(pixel1357, 7, 5+x);
Position(pixel1358, 8, 5+x);
Position(pixel1359, 9, 5+x);
Position(pixel1360, 10, 5+x);
Position(pixel1361, 11, 5+x);
Position(pixel1362, 12, 5+x);
Position(pixel1363, 13, 5+x);
Position(pixel1364, 14, 5+x);
Position(pixel1365, 15, 5+x);
Position(pixel1366, 16, 5+x);
Position(pixel1367, 17, 5+x);
Position(pixel1368, 18, 5+x);
Position(pixel1369, 19, 5+x);
Position(pixel1370, 20, 5+x);
Position(pixel1371, 21, 5+x);
Position(pixel1372, 22, 5+x);
Position(pixel1373, 23, 5+x);
Position(pixel1374, 24, 5+x);
Position(pixel1375, 25, 5+x);
Position(pixel1376, 26, 5+x);
Position(pixel1377, 27, 5+x);
Position(pixel1378, 28, 5+x);
Position(pixel1379, 29, 5+x);
Position(pixel1380, 30, 5+x);

////////////r0w 7/////////////////////////////////
x = 2
Position(pixel1381, 1, 5+x);
Position(pixel1382, 2, 5+x);
Position(pixel1383, 3, 5+x);
Position(pixel1384, 4, 5+x);
Position(pixel1385, 5, 5+x);
Position(pixel1386, 6, 5+x);
Position(pixel1387, 7, 5+x);
Position(pixel1388, 8, 5+x);
Position(pixel1389, 9, 5+x);
Position(pixel1390, 10, 5+x);
Position(pixel1391, 11, 5+x);
Position(pixel1392, 12, 5+x);
Position(pixel1393, 13, 5+x);
Position(pixel1394, 14, 5+x);
Position(pixel1395, 15, 5+x);
Position(pixel1396, 16, 5+x);
Position(pixel1397, 17, 5+x);
Position(pixel1398, 18, 5+x);
Position(pixel1399, 19, 5+x);
Position(pixel1400, 20, 5+x);
Position(pixel1401, 21, 5+x);
Position(pixel1402, 22, 5+x);
Position(pixel1403, 23, 5+x);
Position(pixel1404, 24, 5+x);
Position(pixel1405, 25, 5+x);
Position(pixel1406, 26, 5+x);
Position(pixel1407, 27, 5+x);
Position(pixel1408, 28, 5+x);
Position(pixel1409, 29, 5+x);
Position(pixel1410, 30, 5+x);

////////////r0w 8/////////////////////////////////
x = 3
Position(pixel1411, 1, 5+x);
Position(pixel1412, 2, 5+x);
Position(pixel1413, 3, 5+x);
Position(pixel1414, 4, 5+x);
Position(pixel1415, 5, 5+x);
Position(pixel1416, 6, 5+x);
Position(pixel1417, 7, 5+x);
Position(pixel1418, 8, 5+x);
Position(pixel1419, 9, 5+x);
Position(pixel1420, 10, 5+x);
Position(pixel1421, 11, 5+x);
Position(pixel1422, 12, 5+x);
Position(pixel1423, 13, 5+x);
Position(pixel1424, 14, 5+x);
Position(pixel1425, 15, 5+x);
Position(pixel1426, 16, 5+x);
Position(pixel1427, 17, 5+x);
Position(pixel1428, 18, 5+x);
Position(pixel1429, 19, 5+x);
Position(pixel1430, 20, 5+x);
Position(pixel1431, 21, 5+x);
Position(pixel1432, 22, 5+x);
Position(pixel1433, 23, 5+x);
Position(pixel1434, 24, 5+x);
Position(pixel1435, 25, 5+x);
Position(pixel1436, 26, 5+x);
Position(pixel1437, 27, 5+x);
Position(pixel1438, 28, 5+x);
Position(pixel1439, 29, 5+x);
Position(pixel1440, 30, 5+x);

////////////r0w 9/////////////////////////////////
x = 4
Position(pixel1441, 1, 5+x);
Position(pixel1442, 2, 5+x);
Position(pixel1443, 3, 5+x);
Position(pixel1444, 4, 5+x);
Position(pixel1445, 5, 5+x);
Position(pixel1446, 6, 5+x);
Position(pixel1447, 7, 5+x);
Position(pixel1448, 8, 5+x);
Position(pixel1449, 9, 5+x);
Position(pixel1450, 10, 5+x);
Position(pixel1451, 11, 5+x);
Position(pixel1452, 12, 5+x);
Position(pixel1453, 13, 5+x);
Position(pixel1454, 14, 5+x);
Position(pixel1455, 15, 5+x);
Position(pixel1456, 16, 5+x);
Position(pixel1457, 17, 5+x);
Position(pixel1458, 18, 5+x);
Position(pixel1459, 19, 5+x);
Position(pixel1460, 20, 5+x);
Position(pixel1461, 21, 5+x);
Position(pixel1462, 22, 5+x);
Position(pixel1463, 23, 5+x);
Position(pixel1464, 24, 5+x);
Position(pixel1465, 25, 5+x);
Position(pixel1466, 26, 5+x);
Position(pixel1467, 27, 5+x);
Position(pixel1468, 28, 5+x);
Position(pixel1469, 29, 5+x);
Position(pixel1470, 30, 5+x);

////////////r0w 10/////////////////////////////////
x = 5
Position(pixel1471, 1, 5+x);
Position(pixel1472, 2, 5+x);
Position(pixel1473, 3, 5+x);
Position(pixel1474, 4, 5+x);
Position(pixel1475, 5, 5+x);
Position(pixel1476, 6, 5+x);
Position(pixel1477, 7, 5+x);
Position(pixel1478, 8, 5+x);
Position(pixel1479, 9, 5+x);
Position(pixel1480, 10, 5+x);
Position(pixel1481, 11, 5+x);
Position(pixel1482, 12, 5+x);
Position(pixel1483, 13, 5+x);
Position(pixel1484, 14, 5+x);
Position(pixel1485, 15, 5+x);
Position(pixel1486, 16, 5+x);
Position(pixel1487, 17, 5+x);
Position(pixel1488, 18, 5+x);
Position(pixel1489, 19, 5+x);
Position(pixel1490, 20, 5+x);
Position(pixel1491, 21, 5+x);
Position(pixel1492, 22, 5+x);
Position(pixel1493, 23, 5+x);
Position(pixel1494, 24, 5+x);
Position(pixel1495, 25, 5+x);
Position(pixel1496, 26, 5+x);
Position(pixel1497, 27, 5+x);
Position(pixel1498, 28, 5+x);
Position(pixel1499, 29, 5+x);
Position(pixel1500, 30, 5+x);

////////////r0w 11/////////////////////////////////
x = 6
Position(pixel1501, 1, 5+x);
Position(pixel1502, 2, 5+x);
Position(pixel1503, 3, 5+x);
Position(pixel1504, 4, 5+x);
Position(pixel1505, 5, 5+x);
Position(pixel1506, 6, 5+x);
Position(pixel1507, 7, 5+x);
Position(pixel1508, 8, 5+x);
Position(pixel1509, 9, 5+x);
Position(pixel1510, 10, 5+x);
Position(pixel1511, 11, 5+x);
Position(pixel1512, 12, 5+x);
Position(pixel1513, 13, 5+x);
Position(pixel1514, 14, 5+x);
Position(pixel1515, 15, 5+x);
Position(pixel1516, 16, 5+x);
Position(pixel1517, 17, 5+x);
Position(pixel1518, 18, 5+x);
Position(pixel1519, 19, 5+x);
Position(pixel1520, 20, 5+x);
Position(pixel1521, 21, 5+x);
Position(pixel1522, 22, 5+x);
Position(pixel1523, 23, 5+x);
Position(pixel1524, 24, 5+x);
Position(pixel1525, 25, 5+x);
Position(pixel1526, 26, 5+x);
Position(pixel1527, 27, 5+x);
Position(pixel1528, 28, 5+x);
Position(pixel1529, 29, 5+x);
Position(pixel1530, 30, 5+x);

////////////r0w 12////////////////////////////////
x = 7
Position(pixel1531, 1, 5+x);
Position(pixel1532, 2, 5+x);
Position(pixel1533, 3, 5+x);
Position(pixel1534, 4, 5+x);
Position(pixel1535, 5, 5+x);
Position(pixel1536, 6, 5+x);
Position(pixel1537, 7, 5+x);
Position(pixel1538, 8, 5+x);
Position(pixel1539, 9, 5+x);
Position(pixel1540, 10, 5+x);
Position(pixel1541, 11, 5+x);
Position(pixel1542, 12, 5+x);
Position(pixel1543, 13, 5+x);
Position(pixel1544, 14, 5+x);
Position(pixel1545, 15, 5+x);
Position(pixel1546, 16, 5+x);
Position(pixel1547, 17, 5+x);
Position(pixel1548, 18, 5+x);
Position(pixel1549, 19, 5+x);
Position(pixel1550, 20, 5+x);
Position(pixel1551, 21, 5+x);
Position(pixel1552, 22, 5+x);
Position(pixel1553, 23, 5+x);
Position(pixel1554, 24, 5+x);
Position(pixel1555, 25, 5+x);
Position(pixel1556, 26, 5+x);
Position(pixel1557, 27, 5+x);
Position(pixel1558, 28, 5+x);
Position(pixel1559, 29, 5+x);
Position(pixel1560, 30, 5+x);

////////////r0w 13/////////////////////////////////
x = 8
Position(pixel1561, 1, 5+x);
Position(pixel1562, 2, 5+x);
Position(pixel1563, 3, 5+x);
Position(pixel1564, 4, 5+x);
Position(pixel1565, 5, 5+x);
Position(pixel1566, 6, 5+x);
Position(pixel1567, 7, 5+x);
Position(pixel1568, 8, 5+x);
Position(pixel1569, 9, 5+x);
Position(pixel1570, 10, 5+x);
Position(pixel1571, 11, 5+x);
Position(pixel1572, 12, 5+x);
Position(pixel1573, 13, 5+x);
Position(pixel1574, 14, 5+x);
Position(pixel1575, 15, 5+x);
Position(pixel1576, 16, 5+x);
Position(pixel1577, 17, 5+x);
Position(pixel1578, 18, 5+x);
Position(pixel1579, 19, 5+x);
Position(pixel1580, 20, 5+x);
Position(pixel1581, 21, 5+x);
Position(pixel1582, 22, 5+x);
Position(pixel1583, 23, 5+x);
Position(pixel1584, 24, 5+x);
Position(pixel1585, 25, 5+x);
Position(pixel1586, 26, 5+x);
Position(pixel1587, 27, 5+x);
Position(pixel1588, 28, 5+x);
Position(pixel1589, 29, 5+x);
Position(pixel1590, 30, 5+x);

////////////r0w 14/////////////////////////////////
x = 9
Position(pixel1591, 1, 5+x);
Position(pixel1592, 2, 5+x);
Position(pixel1593, 3, 5+x);
Position(pixel1594, 4, 5+x);
Position(pixel1595, 5, 5+x);
Position(pixel1596, 6, 5+x);
Position(pixel1597, 7, 5+x);
Position(pixel1598, 8, 5+x);
Position(pixel1599, 9, 5+x);
Position(pixel1600, 10, 5+x);
Position(pixel1601, 11, 5+x);
Position(pixel1602, 12, 5+x);
Position(pixel1603, 13, 5+x);
Position(pixel1604, 14, 5+x);
Position(pixel1605, 15, 5+x);
Position(pixel1606, 16, 5+x);
Position(pixel1607, 17, 5+x);
Position(pixel1608, 18, 5+x);
Position(pixel1609, 19, 5+x);
Position(pixel1610, 20, 5+x);
Position(pixel1611, 21, 5+x);
Position(pixel1612, 22, 5+x);
Position(pixel1613, 23, 5+x);
Position(pixel1614, 24, 5+x);
Position(pixel1615, 25, 5+x);
Position(pixel1616, 26, 5+x);
Position(pixel1617, 27, 5+x);
Position(pixel1618, 28, 5+x);
Position(pixel1619, 29, 5+x);
Position(pixel1620, 30, 5+x);
////////////r0w 15/////////////////////////////////
x = 10
Position(pixel1621, 1, 5+x);
Position(pixel1622, 2, 5+x);
Position(pixel1623, 3, 5+x);
Position(pixel1624, 4, 5+x);
Position(pixel1625, 5, 5+x);
Position(pixel1626, 6, 5+x);
Position(pixel1627, 7, 5+x);
Position(pixel1628, 8, 5+x);
Position(pixel1629, 9, 5+x);
Position(pixel1630, 10, 5+x);
Position(pixel1631, 11, 5+x);
Position(pixel1632, 12, 5+x);
Position(pixel1633, 13, 5+x);
Position(pixel1634, 14, 5+x);
Position(pixel1635, 15, 5+x);
Position(pixel1636, 16, 5+x);
Position(pixel1637, 17, 5+x);
Position(pixel1638, 18, 5+x);
Position(pixel1639, 19, 5+x);
Position(pixel1640, 20, 5+x);
Position(pixel1641, 21, 5+x);
Position(pixel1642, 22, 5+x);
Position(pixel1643, 23, 5+x);
Position(pixel1644, 24, 5+x);
Position(pixel1645, 25, 5+x);
Position(pixel1646, 26, 5+x);
Position(pixel1647, 27, 5+x);
Position(pixel1648, 28, 5+x);
Position(pixel1649, 29, 5+x);
Position(pixel1650, 30, 5+x);

////////////r0w 16/////////////////////////////////
x = 11
Position(pixel1651, 1, 5+x);
Position(pixel1652, 2, 5+x);
Position(pixel1653, 3, 5+x);
Position(pixel1654, 4, 5+x);
Position(pixel1655, 5, 5+x);
Position(pixel1656, 6, 5+x);
Position(pixel1657, 7, 5+x);
Position(pixel1658, 8, 5+x);
Position(pixel1659, 9, 5+x);
Position(pixel1660, 10, 5+x);
Position(pixel1661, 11, 5+x);
Position(pixel1662, 12, 5+x);
Position(pixel1663, 13, 5+x);
Position(pixel1664, 14, 5+x);
Position(pixel1665, 15, 5+x);
Position(pixel1666, 16, 5+x);
Position(pixel1667, 17, 5+x);
Position(pixel1668, 18, 5+x);
Position(pixel1669, 19, 5+x);
Position(pixel1670, 20, 5+x);
Position(pixel1671, 21, 5+x);
Position(pixel1672, 22, 5+x);
Position(pixel1673, 23, 5+x);
Position(pixel1674, 24, 5+x);
Position(pixel1675, 25, 5+x);
Position(pixel1676, 26, 5+x);
Position(pixel1677, 27, 5+x);
Position(pixel1678, 28, 5+x);
Position(pixel1679, 29, 5+x);
Position(pixel1680, 30, 5+x);

////////////r0w 17/////////////////////////////////
x = 12
Position(pixel1681, 1, 5+x);
Position(pixel1682, 2, 5+x);
Position(pixel1683, 3, 5+x);
Position(pixel1684, 4, 5+x);
Position(pixel1685, 5, 5+x);
Position(pixel1686, 6, 5+x);
Position(pixel1687, 7, 5+x);
Position(pixel1688, 8, 5+x);
Position(pixel1689, 9, 5+x);
Position(pixel1690, 10, 5+x);
Position(pixel1691, 11, 5+x);
Position(pixel1692, 12, 5+x);
Position(pixel1693, 13, 5+x);
Position(pixel1694, 14, 5+x);
Position(pixel1695, 15, 5+x);
Position(pixel1696, 16, 5+x);
Position(pixel1697, 17, 5+x);
Position(pixel1698, 18, 5+x);
Position(pixel1699, 19, 5+x);
Position(pixel1700, 20, 5+x);
Position(pixel1701, 21, 5+x);
Position(pixel1702, 22, 5+x);
Position(pixel1703, 23, 5+x);
Position(pixel1704, 24, 5+x);
Position(pixel1705, 25, 5+x);
Position(pixel1706, 26, 5+x);
Position(pixel1707, 27, 5+x);
Position(pixel1708, 28, 5+x);
Position(pixel1709, 29, 5+x);
Position(pixel1710, 30, 5+x);

////////////r0w 18/////////////////////////////////
x = 13
Position(pixel1711, 1, 5+x);
Position(pixel1712, 2, 5+x);
Position(pixel1713, 3, 5+x);
Position(pixel1714, 4, 5+x);
Position(pixel1715, 5, 5+x);
Position(pixel1716, 6, 5+x);
Position(pixel1717, 7, 5+x);
Position(pixel1718, 8, 5+x);
Position(pixel1719, 9, 5+x);
Position(pixel1720, 10, 5+x);
Position(pixel1721, 11, 5+x);
Position(pixel1722, 12, 5+x);
Position(pixel1723, 13, 5+x);
Position(pixel1724, 14, 5+x);
Position(pixel1725, 15, 5+x);
Position(pixel1726, 16, 5+x);
Position(pixel1727, 17, 5+x);
Position(pixel1728, 18, 5+x);
Position(pixel1729, 19, 5+x);
Position(pixel1730, 20, 5+x);
Position(pixel1731, 21, 5+x);
Position(pixel1732, 22, 5+x);
Position(pixel1733, 23, 5+x);
Position(pixel1734, 24, 5+x);
Position(pixel1735, 25, 5+x);
Position(pixel1736, 26, 5+x);
Position(pixel1737, 27, 5+x);
Position(pixel1738, 28, 5+x);
Position(pixel1739, 29, 5+x);
Position(pixel1740, 30, 5+x);

////////////r0w 19/////////////////////////////////
x = 14
Position(pixel1741, 1, 5+x);
Position(pixel1742, 2, 5+x);
Position(pixel1743, 3, 5+x);
Position(pixel1744, 4, 5+x);
Position(pixel1745, 5, 5+x);
Position(pixel1746, 6, 5+x);
Position(pixel1747, 7, 5+x);
Position(pixel1748, 8, 5+x);
Position(pixel1749, 9, 5+x);
Position(pixel1750, 10, 5+x);
Position(pixel1751, 11, 5+x);
Position(pixel1752, 12, 5+x);
Position(pixel1753, 13, 5+x);
Position(pixel1754, 14, 5+x);
Position(pixel1755, 15, 5+x);
Position(pixel1756, 16, 5+x);
Position(pixel1757, 17, 5+x);
Position(pixel1758, 18, 5+x);
Position(pixel1759, 19, 5+x);
Position(pixel1760, 20, 5+x);
Position(pixel1761, 21, 5+x);
Position(pixel1762, 22, 5+x);
Position(pixel1763, 23, 5+x);
Position(pixel1764, 24, 5+x);
Position(pixel1765, 25, 5+x);
Position(pixel1766, 26, 5+x);
Position(pixel1767, 27, 5+x);
Position(pixel1768, 28, 5+x);
Position(pixel1769, 29, 5+x);
Position(pixel1770, 30, 5+x);

////////////r0w 20/////////////////////////////////
x = 15
Position(pixel1771, 1, 5+x);
Position(pixel1772, 2, 5+x);
Position(pixel1773, 3, 5+x);
Position(pixel1774, 4, 5+x);
Position(pixel1775, 5, 5+x);
Position(pixel1776, 6, 5+x);
Position(pixel1777, 7, 5+x);
Position(pixel1778, 8, 5+x);
Position(pixel1779, 9, 5+x);
Position(pixel1780, 10, 5+x);
Position(pixel1781, 11, 5+x);
Position(pixel1782, 12, 5+x);
Position(pixel1783, 13, 5+x);
Position(pixel1784, 14, 5+x);
Position(pixel1785, 15, 5+x);
Position(pixel1786, 16, 5+x);
Position(pixel1787, 17, 5+x);
Position(pixel1788, 18, 5+x);
Position(pixel1789, 19, 5+x);
Position(pixel1790, 20, 5+x);
Position(pixel1791, 21, 5+x);
Position(pixel1792, 22, 5+x);
Position(pixel1793, 23, 5+x);
Position(pixel1794, 24, 5+x);
Position(pixel1795, 25, 5+x);
Position(pixel1796, 26, 5+x);
Position(pixel1797, 27, 5+x);
Position(pixel1798, 28, 5+x);
Position(pixel1799, 29, 5+x);
Position(pixel1800, 30, 5+x);

Position(pixel801, 1, 1);
Position(pixel802, 2, 1);
Position(pixel803, 3, 1);
Position(pixel804, 4, 1);
Position(pixel805, 5, 1);
Position(pixel806, 6, 1);
Position(pixel807, 7, 1);
Position(pixel808, 8, 1);
Position(pixel809, 9, 1);
Position(pixel810, 10, 1);
Position(pixel811, 11, 1);
Position(pixel812, 12, 1);
Position(pixel813, 13, 1);
Position(pixel814, 14, 1);
Position(pixel815, 15, 1);
Position(pixel816, 16, 1);
Position(pixel817, 17, 1);
Position(pixel818, 18, 1);
Position(pixel819, 19, 1);
Position(pixel820, 20, 1);
Position(pixel821, 21, 1);
Position(pixel822, 22, 1);
Position(pixel823, 23, 1);
Position(pixel824, 24, 1);
Position(pixel825, 25, 1);
Position(pixel826, 26, 1);
Position(pixel827, 27, 1);
Position(pixel828, 28, 1);
Position(pixel829, 29, 1);
Position(pixel830, 30, 1);
//////////////////////////
//row2
Position(pixel831, 1, 2);
Position(pixel832, 2, 2);
Position(pixel833, 3, 2);
Position(pixel834, 4, 2);
Position(pixel835, 5, 2);
Position(pixel836, 6, 2);
Position(pixel837, 7, 2);
Position(pixel838, 8, 2);
Position(pixel839, 9, 2);
Position(pixel840, 10, 2);
Position(pixel841, 11, 2);
Position(pixel842, 12, 2);
Position(pixel843, 13, 2);
Position(pixel844, 14, 2);
Position(pixel845, 15, 2);
Position(pixel846, 16, 2);
Position(pixel847, 17, 2);
Position(pixel848, 18, 2);
Position(pixel849, 19, 2);
Position(pixel850, 20, 2);
Position(pixel851, 21, 2);
Position(pixel852, 22, 2);
Position(pixel853, 23, 2);
Position(pixel854, 24, 2);
Position(pixel855, 25, 2);
Position(pixel856, 26, 2);
Position(pixel857, 27, 2);
Position(pixel858, 28, 2);
Position(pixel859, 29, 2);
Position(pixel860, 30, 2);


//row 3////////////////////////////////////////
Position(pixel861, 1, 3);
Position(pixel862, 2, 3);
Position(pixel863, 3, 3);
Position(pixel864, 4, 3);
Position(pixel865, 5, 3);
Position(pixel866, 6, 3);
Position(pixel867, 7, 3);
Position(pixel868, 8, 3);
Position(pixel869, 9, 3);
Position(pixel870, 10, 3);
Position(pixel871, 11, 3);
Position(pixel872, 12, 3);
Position(pixel873, 13, 3);
Position(pixel874, 14, 3);
Position(pixel875, 15, 3);
Position(pixel876, 16, 3);
Position(pixel877, 17, 3);
Position(pixel878, 18, 3);
Position(pixel879, 19, 3);
Position(pixel880, 20, 3);
Position(pixel881, 21, 3);
Position(pixel882, 22, 3);
Position(pixel883, 23, 3);
Position(pixel884, 24, 3);
Position(pixel885, 25, 3);
Position(pixel886, 26, 3);
Position(pixel887, 27, 3);
Position(pixel888, 28, 3);
Position(pixel889, 29, 3);
Position(pixel890, 30, 3);

//row4
Position(pixel891, 1, 4);
Position(pixel892, 2, 4);
Position(pixel893, 3, 4);
Position(pixel894, 4, 4);
Position(pixel895, 5, 4);
Position(pixel896, 6, 4);
Position(pixel897, 7, 4);
Position(pixel898, 8, 4);
Position(pixel899, 9, 4);
Position(pixel900, 10, 4);
Position(pixel01, 11, 4);
Position(pixel02, 12, 4);
Position(pixel03, 13, 4);
Position(pixel04, 14, 4);
Position(pixel05, 15, 4);
Position(pixel06, 16, 4);
Position(pixel07, 17, 4);
Position(pixel08, 18, 4);
Position(pixel09, 19, 4);
Position(pixel10, 20, 4);
Position(pixel11, 21, 4);
Position(pixel12, 22, 4);
Position(pixel13, 23, 4);
Position(pixel14, 24, 4);
Position(pixel15, 25, 4);
Position(pixel16, 26, 4);
Position(pixel17, 27, 4);
Position(pixel18, 28, 4);
Position(pixel19, 29, 4);
Position(pixel20, 30, 4);


//row5///////////////////////////////
Position(pixel21, 1, 5);
Position(pixel22, 2, 5);
Position(pixel23, 3, 5);
Position(pixel24, 4, 5);
Position(pixel25, 5, 5);
Position(pixel26, 6, 5);
Position(pixel27, 7, 5);
Position(pixel28, 8, 5);
Position(pixel29, 9, 5);
Position(pixel30, 10, 5);
Position(pixel31, 11, 5);
Position(pixel32, 12, 5);
Position(pixel33, 13, 5);
Position(pixel34, 14, 5);
Position(pixel35, 15, 5);
Position(pixel36, 16, 5);
Position(pixel37, 17, 5);
Position(pixel38, 18, 5);
Position(pixel39, 19, 5);
Position(pixel40, 20, 5);
Position(pixel41, 21, 5);
Position(pixel42, 22, 5);
Position(pixel43, 23, 5);
Position(pixel44, 24, 5);
Position(pixel45, 25, 5);
Position(pixel46, 26, 5);
Position(pixel47, 27, 5);
Position(pixel48, 28, 5);
Position(pixel49, 29, 5);
Position(pixel50, 30, 5);
////////////r0w 6/////////////////////////////////
x = 1
Position(pixel51, 1, 5+x);
Position(pixel52, 2, 5+x);
Position(pixel53, 3, 5+x);
Position(pixel54, 4, 5+x);
Position(pixel55, 5, 5+x);
Position(pixel56, 6, 5+x);
Position(pixel57, 7, 5+x);
Position(pixel58, 8, 5+x);
Position(pixel59, 9, 5+x);
Position(pixel60, 10, 5+x);
Position(pixel61, 11, 5+x);
Position(pixel62, 12, 5+x);
Position(pixel63, 13, 5+x);
Position(pixel64, 14, 5+x);
Position(pixel65, 15, 5+x);
Position(pixel66, 16, 5+x);
Position(pixel67, 17, 5+x);
Position(pixel68, 18, 5+x);
Position(pixel69, 19, 5+x);
Position(pixel70, 20, 5+x);
Position(pixel71, 21, 5+x);
Position(pixel72, 22, 5+x);
Position(pixel73, 23, 5+x);
Position(pixel74, 24, 5+x);
Position(pixel75, 25, 5+x);
Position(pixel76, 26, 5+x);
Position(pixel77, 27, 5+x);
Position(pixel78, 28, 5+x);
Position(pixel79, 29, 5+x);
Position(pixel80, 30, 5+x);

////////////r0w 7/////////////////////////////////
x = 2
Position(pixel81, 1, 5+x);
Position(pixel82, 2, 5+x);
Position(pixel83, 3, 5+x);
Position(pixel84, 4, 5+x);
Position(pixel85, 5, 5+x);
Position(pixel86, 6, 5+x);
Position(pixel87, 7, 5+x);
Position(pixel88, 8, 5+x);
Position(pixel89, 9, 5+x);
Position(pixel90, 10, 5+x);
Position(pixel91, 11, 5+x);
Position(pixel92, 12, 5+x);
Position(pixel93, 13, 5+x);
Position(pixel94, 14, 5+x);
Position(pixel95, 15, 5+x);
Position(pixel96, 16, 5+x);
Position(pixel97, 17, 5+x);
Position(pixel98, 18, 5+x);
Position(pixel99, 19, 5+x);
Position(pixel00, 20, 5+x);
Position(pixel01, 21, 5+x);
Position(pixel02, 22, 5+x);
Position(pixel03, 23, 5+x);
Position(pixel04, 24, 5+x);
Position(pixel05, 25, 5+x);
Position(pixel06, 26, 5+x);
Position(pixel07, 27, 5+x);
Position(pixel08, 28, 5+x);
Position(pixel09, 29, 5+x);
Position(pixel10, 30, 5+x);

////////////r0w 8/////////////////////////////////
x = 3
Position(pixel11, 1, 5+x);
Position(pixel12, 2, 5+x);
Position(pixel13, 3, 5+x);
Position(pixel14, 4, 5+x);
Position(pixel15, 5, 5+x);
Position(pixel16, 6, 5+x);
Position(pixel17, 7, 5+x);
Position(pixel18, 8, 5+x);
Position(pixel19, 9, 5+x);
Position(pixel20, 10, 5+x);
Position(pixel21, 11, 5+x);
Position(pixel22, 12, 5+x);
Position(pixel23, 13, 5+x);
Position(pixel24, 14, 5+x);
Position(pixel25, 15, 5+x);
Position(pixel26, 16, 5+x);
Position(pixel27, 17, 5+x);
Position(pixel28, 18, 5+x);
Position(pixel29, 19, 5+x);
Position(pixel30, 20, 5+x);
Position(pixel31, 21, 5+x);
Position(pixel32, 22, 5+x);
Position(pixel33, 23, 5+x);
Position(pixel34, 24, 5+x);
Position(pixel35, 25, 5+x);
Position(pixel36, 26, 5+x);
Position(pixel37, 27, 5+x);
Position(pixel38, 28, 5+x);
Position(pixel39, 29, 5+x);
Position(pixel40, 30, 5+x);

////////////r0w 9/////////////////////////////////
x = 4
Position(pixel41, 1, 5+x);
Position(pixel42, 2, 5+x);
Position(pixel43, 3, 5+x);
Position(pixel44, 4, 5+x);
Position(pixel45, 5, 5+x);
Position(pixel46, 6, 5+x);
Position(pixel47, 7, 5+x);
Position(pixel48, 8, 5+x);
Position(pixel49, 9, 5+x);
Position(pixel50, 10, 5+x);
Position(pixel51, 11, 5+x);
Position(pixel52, 12, 5+x);
Position(pixel53, 13, 5+x);
Position(pixel54, 14, 5+x);
Position(pixel55, 15, 5+x);
Position(pixel56, 16, 5+x);
Position(pixel57, 17, 5+x);
Position(pixel58, 18, 5+x);
Position(pixel59, 19, 5+x);
Position(pixel60, 20, 5+x);
Position(pixel61, 21, 5+x);
Position(pixel62, 22, 5+x);
Position(pixel63, 23, 5+x);
Position(pixel64, 24, 5+x);
Position(pixel65, 25, 5+x);
Position(pixel66, 26, 5+x);
Position(pixel67, 27, 5+x);
Position(pixel68, 28, 5+x);
Position(pixel69, 29, 5+x);
Position(pixel70, 30, 5+x);

////////////r0w 10/////////////////////////////////
x = 5
Position(pixel71, 1, 5+x);
Position(pixel72, 2, 5+x);
Position(pixel73, 3, 5+x);
Position(pixel74, 4, 5+x);
Position(pixel75, 5, 5+x);
Position(pixel76, 6, 5+x);
Position(pixel77, 7, 5+x);
Position(pixel78, 8, 5+x);
Position(pixel79, 9, 5+x);
Position(pixel80, 10, 5+x);
Position(pixel81, 11, 5+x);
Position(pixel82, 12, 5+x);
Position(pixel83, 13, 5+x);
Position(pixel84, 14, 5+x);
Position(pixel85, 15, 5+x);
Position(pixel86, 16, 5+x);
Position(pixel87, 17, 5+x);
Position(pixel88, 18, 5+x);
Position(pixel89, 19, 5+x);
Position(pixel90, 20, 5+x);
Position(pixel91, 21, 5+x);
Position(pixel92, 22, 5+x);
Position(pixel93, 23, 5+x);
Position(pixel94, 24, 5+x);
Position(pixel95, 25, 5+x);
Position(pixel96, 26, 5+x);
Position(pixel97, 27, 5+x);
Position(pixel98, 28, 5+x);
Position(pixel99, 29, 5+x);
Position(pixel00, 30, 5+x);

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

