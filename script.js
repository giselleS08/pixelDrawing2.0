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


  pixel601 = new Sprite(10,10,19,19);
  creatingPixels(pixel601);

  pixel602 = new Sprite(10,10,19,19);
  creatingPixels(pixel602);

  pixel603 = new Sprite(10,10,19,19);
  creatingPixels(pixel603);

  pixel604 = new Sprite(10,10,19,19);
  creatingPixels(pixel604);

  pixel605 = new Sprite(10,10,19,19);
  creatingPixels(pixel605);

  pixel606 = new Sprite(10,10,19,19);
  creatingPixels(pixel606);

  pixel607 = new Sprite(10,10,19,19);
  creatingPixels(pixel607);

  pixel608 = new Sprite(10,10,19,19);
  creatingPixels(pixel608);

  pixel609 = new Sprite(10,10,19,19);
  creatingPixels(pixel609);

  pixel610 = new Sprite(10,10,19,19);
  creatingPixels(pixel610);

  pixel611 = new Sprite(10,10,19,19);
  creatingPixels(pixel611);

  pixel612 = new Sprite(10,10,19,19);
  creatingPixels(pixel612);

  pixel613 = new Sprite(10,10,19,19);
  creatingPixels(pixel613);

  pixel614 = new Sprite(10,10,19,19);
  creatingPixels(pixel614);

  pixel615 = new Sprite(10,10,19,19);
  creatingPixels(pixel615);

  pixel616 = new Sprite(10,10,19,19);
  creatingPixels(pixel616);

  pixel617 = new Sprite(10,10,19,19);
  creatingPixels(pixel617);

  pixel618 = new Sprite(10,10,19,19);
  creatingPixels(pixel618);

  pixel619 = new Sprite(10,10,19,19);
  creatingPixels(pixel619);

  pixel620 = new Sprite(10,10,19,19);
  creatingPixels(pixel620);

  pixel621 = new Sprite(10,10,19,19);
  creatingPixels(pixel621);

  pixel622 = new Sprite(10,10,19,19);
  creatingPixels(pixel622);

  pixel623 = new Sprite(10,10,19,19);
  creatingPixels(pixel623);

  pixel624 = new Sprite(10,10,19,19);
  creatingPixels(pixel624);

  pixel625 = new Sprite(10,10,19,19);
  creatingPixels(pixel625);

  pixel626 = new Sprite(10,10,19,19);
  creatingPixels(pixel626);

  pixel627 = new Sprite(10,10,19,19);
  creatingPixels(pixel627);

  pixel628 = new Sprite(10,10,19,19);
  creatingPixels(pixel628);

  pixel629 = new Sprite(10,10,19,19);
  creatingPixels(pixel629);

  pixel630 = new Sprite(10,10,19,19);
  creatingPixels(pixel630);

  pixel631 = new Sprite(10,10,19,19);
  creatingPixels(pixel631);

  pixel632 = new Sprite(10,10,19,19);
  creatingPixels(pixel632);

  pixel633 = new Sprite(10,10,19,19);
  creatingPixels(pixel633);

  pixel634 = new Sprite(10,10,19,19);
  creatingPixels(pixel634);

  pixel635 = new Sprite(10,10,19,19);
  creatingPixels(pixel635);

  pixel636 = new Sprite(10,10,19,19);
  creatingPixels(pixel636);

  pixel637 = new Sprite(10,10,19,19);
  creatingPixels(pixel637);

  pixel638 = new Sprite(10,10,19,19);
  creatingPixels(pixel638);

  pixel639 = new Sprite(10,10,19,19);
  creatingPixels(pixel639);

  pixel640 = new Sprite(10,10,19,19);
  creatingPixels(pixel640);

  pixel641 = new Sprite(10,10,19,19);
  creatingPixels(pixel641);

  pixel642 = new Sprite(10,10,19,19);
  creatingPixels(pixel642);

  pixel643 = new Sprite(10,10,19,19);
  creatingPixels(pixel643);

  pixel644 = new Sprite(10,10,19,19);
  creatingPixels(pixel644);

  pixel645 = new Sprite(10,10,19,19);
  creatingPixels(pixel645);

  pixel646 = new Sprite(10,10,19,19);
  creatingPixels(pixel646);

  pixel647 = new Sprite(10,10,19,19);
  creatingPixels(pixel647);

  pixel648 = new Sprite(10,10,19,19);
  creatingPixels(pixel648);

  pixel649 = new Sprite(10,10,19,19);
  creatingPixels(pixel649);

  pixel650 = new Sprite(10,10,19,19);
  creatingPixels(pixel650);

  pixel651 = new Sprite(10,10,19,19);
  creatingPixels(pixel651);

  pixel652 = new Sprite(10,10,19,19);
  creatingPixels(pixel652);

  pixel653 = new Sprite(10,10,19,19);
  creatingPixels(pixel653);

  pixel654 = new Sprite(10,10,19,19);
  creatingPixels(pixel654);

  pixel655 = new Sprite(10,10,19,19);
  creatingPixels(pixel655);

  pixel656 = new Sprite(10,10,19,19);
  creatingPixels(pixel656);

  pixel657 = new Sprite(10,10,19,19);
  creatingPixels(pixel657);

  pixel658 = new Sprite(10,10,19,19);
  creatingPixels(pixel658);

  pixel659 = new Sprite(10,10,19,19);
  creatingPixels(pixel659);

  pixel660 = new Sprite(10,10,19,19);
  creatingPixels(pixel660);

  pixel661 = new Sprite(10,10,19,19);
  creatingPixels(pixel661);

  pixel662 = new Sprite(10,10,19,19);
  creatingPixels(pixel662);

  pixel663 = new Sprite(10,10,19,19);
  creatingPixels(pixel663);

  pixel664 = new Sprite(10,10,19,19);
  creatingPixels(pixel664);

  pixel665 = new Sprite(10,10,19,19);
  creatingPixels(pixel665);

  pixel666 = new Sprite(10,10,19,19);
  creatingPixels(pixel666);

  pixel667 = new Sprite(10,10,19,19);
  creatingPixels(pixel667);

  pixel668 = new Sprite(10,10,19,19);
  creatingPixels(pixel668);

  pixel669 = new Sprite(10,10,19,19);
  creatingPixels(pixel669);

  pixel670 = new Sprite(10,10,19,19);
  creatingPixels(pixel670);

  pixel671 = new Sprite(10,10,19,19);
  creatingPixels(pixel671);

  pixel672 = new Sprite(10,10,19,19);
  creatingPixels(pixel672);

  pixel673 = new Sprite(10,10,19,19);
  creatingPixels(pixel673);

  pixel674 = new Sprite(10,10,19,19);
  creatingPixels(pixel674);

  pixel675 = new Sprite(10,10,19,19);
  creatingPixels(pixel675);

  pixel676 = new Sprite(10,10,19,19);
  creatingPixels(pixel676);

  pixel677 = new Sprite(10,10,19,19);
  creatingPixels(pixel677);

  pixel678 = new Sprite(10,10,19,19);
  creatingPixels(pixel678);

  pixel679 = new Sprite(10,10,19,19);
  creatingPixels(pixel679);

  pixel680 = new Sprite(10,10,19,19);
  creatingPixels(pixel680);

  pixel681 = new Sprite(10,10,19,19);
  creatingPixels(pixel681);

  pixel682 = new Sprite(10,10,19,19);
  creatingPixels(pixel682);

  pixel683 = new Sprite(10,10,19,19);
  creatingPixels(pixel683);

  pixel684 = new Sprite(10,10,19,19);
  creatingPixels(pixel684);

  pixel685 = new Sprite(10,10,19,19);
  creatingPixels(pixel685);

  pixel686 = new Sprite(10,10,19,19);
  creatingPixels(pixel686);

  pixel687 = new Sprite(10,10,19,19);
  creatingPixels(pixel687);

  pixel688 = new Sprite(10,10,19,19);
  creatingPixels(pixel688);

  pixel689 = new Sprite(10,10,19,19);
  creatingPixels(pixel689);

  pixel690 = new Sprite(10,10,19,19);
  creatingPixels(pixel690);

  pixel691 = new Sprite(10,10,19,19);
  creatingPixels(pixel691);

  pixel692 = new Sprite(10,10,19,19);
  creatingPixels(pixel692);

  pixel693 = new Sprite(10,10,19,19);
  creatingPixels(pixel693);

  pixel694 = new Sprite(10,10,19,19);
  creatingPixels(pixel694);

  pixel695 = new Sprite(10,10,19,19);
  creatingPixels(pixel695);

  pixel696 = new Sprite(10,10,19,19);
  creatingPixels(pixel696);

  pixel697 = new Sprite(10,10,19,19);
  creatingPixels(pixel697);

  pixel698 = new Sprite(10,10,19,19);
  creatingPixels(pixel698);

  pixel699 = new Sprite(10,10,19,19);
  creatingPixels(pixel699);

  pixel700 = new Sprite(10,10,19,19);
  creatingPixels(pixel700);

  pixel701 = new Sprite(10,10,19,19);
  creatingPixels(pixel701);

  pixel702 = new Sprite(10,10,19,19);
  creatingPixels(pixel702);

  pixel703 = new Sprite(10,10,19,19);
  creatingPixels(pixel703);

  pixel704 = new Sprite(10,10,19,19);
  creatingPixels(pixel704);

  pixel705 = new Sprite(10,10,19,19);
  creatingPixels(pixel705);

  pixel706 = new Sprite(10,10,19,19);
  creatingPixels(pixel706);

  pixel707 = new Sprite(10,10,19,19);
  creatingPixels(pixel707);

  pixel708 = new Sprite(10,10,19,19);
  creatingPixels(pixel708);

  pixel709 = new Sprite(10,10,19,19);
  creatingPixels(pixel709);

  pixel710 = new Sprite(10,10,19,19);
  creatingPixels(pixel710);

  pixel711 = new Sprite(10,10,19,19);
  creatingPixels(pixel711);

  pixel712 = new Sprite(10,10,19,19);
  creatingPixels(pixel712);

  pixel713 = new Sprite(10,10,19,19);
  creatingPixels(pixel713);

  pixel714 = new Sprite(10,10,19,19);
  creatingPixels(pixel714);

  pixel715 = new Sprite(10,10,19,19);
  creatingPixels(pixel715);

  pixel716 = new Sprite(10,10,19,19);
  creatingPixels(pixel716);

  pixel717 = new Sprite(10,10,19,19);
  creatingPixels(pixel717);

  pixel718 = new Sprite(10,10,19,19);
  creatingPixels(pixel718);

  pixel719 = new Sprite(10,10,19,19);
  creatingPixels(pixel719);

  pixel720 = new Sprite(10,10,19,19);
  creatingPixels(pixel720);

  pixel721 = new Sprite(10,10,19,19);
  creatingPixels(pixel721);

  pixel722 = new Sprite(10,10,19,19);
  creatingPixels(pixel722);

  pixel723 = new Sprite(10,10,19,19);
  creatingPixels(pixel723);

  pixel724 = new Sprite(10,10,19,19);
  creatingPixels(pixel724);

  pixel725 = new Sprite(10,10,19,19);
  creatingPixels(pixel725);

  pixel726 = new Sprite(10,10,19,19);
  creatingPixels(pixel726);

  pixel727 = new Sprite(10,10,19,19);
  creatingPixels(pixel727);

  pixel728 = new Sprite(10,10,19,19);
  creatingPixels(pixel728);

  pixel729 = new Sprite(10,10,19,19);
  creatingPixels(pixel729);

  pixel730 = new Sprite(10,10,19,19);
  creatingPixels(pixel730);

  pixel731 = new Sprite(10,10,19,19);
  creatingPixels(pixel731);

  pixel732 = new Sprite(10,10,19,19);
  creatingPixels(pixel732);

  pixel733 = new Sprite(10,10,19,19);
  creatingPixels(pixel733);

  pixel734 = new Sprite(10,10,19,19);
  creatingPixels(pixel734);

  pixel735 = new Sprite(10,10,19,19);
  creatingPixels(pixel735);

  pixel736 = new Sprite(10,10,19,19);
  creatingPixels(pixel736);

  pixel737 = new Sprite(10,10,19,19);
  creatingPixels(pixel737);

  pixel738 = new Sprite(10,10,19,19);
  creatingPixels(pixel738);

  pixel739 = new Sprite(10,10,19,19);
  creatingPixels(pixel739);

  pixel740 = new Sprite(10,10,19,19);
  creatingPixels(pixel740);

  pixel741 = new Sprite(10,10,19,19);
  creatingPixels(pixel741);

  pixel742 = new Sprite(10,10,19,19);
  creatingPixels(pixel742);

  pixel743 = new Sprite(10,10,19,19);
  creatingPixels(pixel743);

  pixel744 = new Sprite(10,10,19,19);
  creatingPixels(pixel744);

  pixel745 = new Sprite(10,10,19,19);
  creatingPixels(pixel745);

  pixel746 = new Sprite(10,10,19,19);
  creatingPixels(pixel746);

  pixel747 = new Sprite(10,10,19,19);
  creatingPixels(pixel747);

  pixel748 = new Sprite(10,10,19,19);
  creatingPixels(pixel748);

  pixel749 = new Sprite(10,10,19,19);
  creatingPixels(pixel749);

  pixel750 = new Sprite(10,10,19,19);
  creatingPixels(pixel750);

  pixel751 = new Sprite(10,10,19,19);
  creatingPixels(pixel751);

  pixel752 = new Sprite(10,10,19,19);
  creatingPixels(pixel752);

  pixel753 = new Sprite(10,10,19,19);
  creatingPixels(pixel753);

  pixel754 = new Sprite(10,10,19,19);
  creatingPixels(pixel754);

  pixel755 = new Sprite(10,10,19,19);
  creatingPixels(pixel755);

  pixel756 = new Sprite(10,10,19,19);
  creatingPixels(pixel756);

  pixel757 = new Sprite(10,10,19,19);
  creatingPixels(pixel757);

  pixel758 = new Sprite(10,10,19,19);
  creatingPixels(pixel758);

  pixel759 = new Sprite(10,10,19,19);
  creatingPixels(pixel759);

  pixel760 = new Sprite(10,10,19,19);
  creatingPixels(pixel760);

  pixel761 = new Sprite(10,10,19,19);
  creatingPixels(pixel761);

  pixel762 = new Sprite(10,10,19,19);
  creatingPixels(pixel762);

  pixel763 = new Sprite(10,10,19,19);
  creatingPixels(pixel763);

  pixel764 = new Sprite(10,10,19,19);
  creatingPixels(pixel764);

  pixel765 = new Sprite(10,10,19,19);
  creatingPixels(pixel765);

  pixel766 = new Sprite(10,10,19,19);
  creatingPixels(pixel766);

  pixel767 = new Sprite(10,10,19,19);
  creatingPixels(pixel767);

  pixel768 = new Sprite(10,10,19,19);
  creatingPixels(pixel768);

  pixel769 = new Sprite(10,10,19,19);
  creatingPixels(pixel769);

  pixel770 = new Sprite(10,10,19,19);
  creatingPixels(pixel770);

  pixel771 = new Sprite(10,10,19,19);
  creatingPixels(pixel771);

  pixel772 = new Sprite(10,10,19,19);
  creatingPixels(pixel772);

  pixel773 = new Sprite(10,10,19,19);
  creatingPixels(pixel773);

  pixel774 = new Sprite(10,10,19,19);
  creatingPixels(pixel774);

  pixel775 = new Sprite(10,10,19,19);
  creatingPixels(pixel775);

  pixel776 = new Sprite(10,10,19,19);
  creatingPixels(pixel776);

  pixel777 = new Sprite(10,10,19,19);
  creatingPixels(pixel777);

  pixel778 = new Sprite(10,10,19,19);
  creatingPixels(pixel778);

  pixel779 = new Sprite(10,10,19,19);
  creatingPixels(pixel779);

  pixel780 = new Sprite(10,10,19,19);
  creatingPixels(pixel780);

  pixel781 = new Sprite(10,10,19,19);
  creatingPixels(pixel781);

  pixel782 = new Sprite(10,10,19,19);
  creatingPixels(pixel782);

  pixel783 = new Sprite(10,10,19,19);
  creatingPixels(pixel783);

  pixel784 = new Sprite(10,10,19,19);
  creatingPixels(pixel784);

  pixel785 = new Sprite(10,10,19,19);
  creatingPixels(pixel785);

  pixel786 = new Sprite(10,10,19,19);
  creatingPixels(pixel786);

  pixel787 = new Sprite(10,10,19,19);
  creatingPixels(pixel787);

  pixel788 = new Sprite(10,10,19,19);
  creatingPixels(pixel788);

  pixel789 = new Sprite(10,10,19,19);
  creatingPixels(pixel789);

  pixel790 = new Sprite(10,10,19,19);
  creatingPixels(pixel790);

  pixel791 = new Sprite(10,10,19,19);
  creatingPixels(pixel791);

  pixel792 = new Sprite(10,10,19,19);
  creatingPixels(pixel792);

  pixel793 = new Sprite(10,10,19,19);
  creatingPixels(pixel793);

  pixel794 = new Sprite(10,10,19,19);
  creatingPixels(pixel794);

  pixel795 = new Sprite(10,10,19,19);
  creatingPixels(pixel795);

  pixel796 = new Sprite(10,10,19,19);
  creatingPixels(pixel796);

  pixel797 = new Sprite(10,10,19,19);
  creatingPixels(pixel797);

  pixel798 = new Sprite(10,10,19,19);
  creatingPixels(pixel798);

  pixel799 = new Sprite(10,10,19,19);
  creatingPixels(pixel799);

  pixel800 = new Sprite(10,10,19,19);
  creatingPixels(pixel800);

  pixel801 = new Sprite(10,10,19,19);
  creatingPixels(pixel801);

  pixel802 = new Sprite(10,10,19,19);
  creatingPixels(pixel802);

  pixel803 = new Sprite(10,10,19,19);
  creatingPixels(pixel803);

  pixel804 = new Sprite(10,10,19,19);
  creatingPixels(pixel804);

  pixel805 = new Sprite(10,10,19,19);
  creatingPixels(pixel805);

  pixel806 = new Sprite(10,10,19,19);
  creatingPixels(pixel806);

  pixel807 = new Sprite(10,10,19,19);
  creatingPixels(pixel807);

  pixel808 = new Sprite(10,10,19,19);
  creatingPixels(pixel808);

  pixel809 = new Sprite(10,10,19,19);
  creatingPixels(pixel809);

  pixel810 = new Sprite(10,10,19,19);
  creatingPixels(pixel810);

  pixel811 = new Sprite(10,10,19,19);
  creatingPixels(pixel811);

  pixel812 = new Sprite(10,10,19,19);
  creatingPixels(pixel812);

  pixel813 = new Sprite(10,10,19,19);
  creatingPixels(pixel813);

  pixel814 = new Sprite(10,10,19,19);
  creatingPixels(pixel814);

  pixel815 = new Sprite(10,10,19,19);
  creatingPixels(pixel815);

  pixel816 = new Sprite(10,10,19,19);
  creatingPixels(pixel816);

  pixel817 = new Sprite(10,10,19,19);
  creatingPixels(pixel817);

  pixel818 = new Sprite(10,10,19,19);
  creatingPixels(pixel818);

  pixel819 = new Sprite(10,10,19,19);
  creatingPixels(pixel819);

  pixel820 = new Sprite(10,10,19,19);
  creatingPixels(pixel820);

  pixel821 = new Sprite(10,10,19,19);
  creatingPixels(pixel821);

  pixel822 = new Sprite(10,10,19,19);
  creatingPixels(pixel822);

  pixel823 = new Sprite(10,10,19,19);
  creatingPixels(pixel823);

  pixel824 = new Sprite(10,10,19,19);
  creatingPixels(pixel824);

  pixel825 = new Sprite(10,10,19,19);
  creatingPixels(pixel825);

  pixel826 = new Sprite(10,10,19,19);
  creatingPixels(pixel826);

  pixel827 = new Sprite(10,10,19,19);
  creatingPixels(pixel827);

  pixel828 = new Sprite(10,10,19,19);
  creatingPixels(pixel828);

  pixel829 = new Sprite(10,10,19,19);
  creatingPixels(pixel829);

  pixel830 = new Sprite(10,10,19,19);
  creatingPixels(pixel830);

  pixel831 = new Sprite(10,10,19,19);
  creatingPixels(pixel831);

  pixel832 = new Sprite(10,10,19,19);
  creatingPixels(pixel832);

  pixel833 = new Sprite(10,10,19,19);
  creatingPixels(pixel833);

  pixel834 = new Sprite(10,10,19,19);
  creatingPixels(pixel834);

  pixel835 = new Sprite(10,10,19,19);
  creatingPixels(pixel835);

  pixel836 = new Sprite(10,10,19,19);
  creatingPixels(pixel836);

  pixel837 = new Sprite(10,10,19,19);
  creatingPixels(pixel837);

  pixel838 = new Sprite(10,10,19,19);
  creatingPixels(pixel838);

  pixel839 = new Sprite(10,10,19,19);
  creatingPixels(pixel839);

  pixel840 = new Sprite(10,10,19,19);
  creatingPixels(pixel840);

  pixel841 = new Sprite(10,10,19,19);
  creatingPixels(pixel841);

  pixel842 = new Sprite(10,10,19,19);
  creatingPixels(pixel842);

  pixel843 = new Sprite(10,10,19,19);
  creatingPixels(pixel843);

  pixel844 = new Sprite(10,10,19,19);
  creatingPixels(pixel844);

  pixel845 = new Sprite(10,10,19,19);
  creatingPixels(pixel845);

  pixel846 = new Sprite(10,10,19,19);
  creatingPixels(pixel846);

  pixel847 = new Sprite(10,10,19,19);
  creatingPixels(pixel847);

  pixel848 = new Sprite(10,10,19,19);
  creatingPixels(pixel848);

  pixel849 = new Sprite(10,10,19,19);
  creatingPixels(pixel849);

  pixel850 = new Sprite(10,10,19,19);
  creatingPixels(pixel850);

  pixel851 = new Sprite(10,10,19,19);
  creatingPixels(pixel851);

  pixel852 = new Sprite(10,10,19,19);
  creatingPixels(pixel852);

  pixel853 = new Sprite(10,10,19,19);
  creatingPixels(pixel853);

  pixel854 = new Sprite(10,10,19,19);
  creatingPixels(pixel854);

  pixel855 = new Sprite(10,10,19,19);
  creatingPixels(pixel855);

  pixel856 = new Sprite(10,10,19,19);
  creatingPixels(pixel856);

  pixel857 = new Sprite(10,10,19,19);
  creatingPixels(pixel857);

  pixel858 = new Sprite(10,10,19,19);
  creatingPixels(pixel858);

  pixel859 = new Sprite(10,10,19,19);
  creatingPixels(pixel859);

  pixel860 = new Sprite(10,10,19,19);
  creatingPixels(pixel860);
  
  pixel861 = new Sprite(10,10,19,19);
  creatingPixels(pixel861);

  pixel862 = new Sprite(10,10,19,19);
  creatingPixels(pixel862);

  pixel863 = new Sprite(10,10,19,19);
  creatingPixels(pixel863);

  pixel864 = new Sprite(10,10,19,19);
  creatingPixels(pixel864);

  pixel865 = new Sprite(10,10,19,19);
  creatingPixels(pixel865);

  pixel866 = new Sprite(10,10,19,19);
  creatingPixels(pixel866);

  pixel867 = new Sprite(10,10,19,19);
  creatingPixels(pixel867);

  pixel868 = new Sprite(10,10,19,19);
  creatingPixels(pixel868);

  pixel869 = new Sprite(10,10,19,19);
  creatingPixels(pixel869);

  pixel870 = new Sprite(10,10,19,19);
  creatingPixels(pixel870);

  pixel871 = new Sprite(10,10,19,19);
  creatingPixels(pixel871);

  pixel872 = new Sprite(10,10,19,19);
  creatingPixels(pixel872);

  pixel873 = new Sprite(10,10,19,19);
  creatingPixels(pixel873);

  pixel874 = new Sprite(10,10,19,19);
  creatingPixels(pixel874);

  pixel875 = new Sprite(10,10,19,19);
  creatingPixels(pixel875);

  pixel876 = new Sprite(10,10,19,19);
  creatingPixels(pixel876);

  pixel877 = new Sprite(10,10,19,19);
  creatingPixels(pixel877);

  pixel878 = new Sprite(10,10,19,19);
  creatingPixels(pixel878);

  pixel879 = new Sprite(10,10,19,19);
  creatingPixels(pixel879);

  pixel880 = new Sprite(10,10,19,19);
  creatingPixels(pixel880);

  pixel881 = new Sprite(10,10,19,19);
  creatingPixels(pixel881);

  pixel882 = new Sprite(10,10,19,19);
  creatingPixels(pixel882);

  pixel883 = new Sprite(10,10,19,19);
  creatingPixels(pixel883);

  pixel884 = new Sprite(10,10,19,19);
  creatingPixels(pixel884);

  pixel885 = new Sprite(10,10,19,19);
  creatingPixels(pixel885);

  pixel886 = new Sprite(10,10,19,19);
  creatingPixels(pixel886);

  pixel887 = new Sprite(10,10,19,19);
  creatingPixels(pixel887);

  pixel888 = new Sprite(10,10,19,19);
  creatingPixels(pixel888);

  pixel889 = new Sprite(10,10,19,19);
  creatingPixels(pixel889);

  pixel890 = new Sprite(10,10,19,19);
  creatingPixels(pixel890);
  
  pixel891 = new Sprite(10,10,19,19);
  creatingPixels(pixel891);

  pixel892 = new Sprite(10,10,19,19);
  creatingPixels(pixel892);

  pixel893 = new Sprite(10,10,19,19);
  creatingPixels(pixel893);

  pixel894 = new Sprite(10,10,19,19);
  creatingPixels(pixel894);

  pixel895 = new Sprite(10,10,19,19);
  creatingPixels(pixel895);

  pixel896 = new Sprite(10,10,19,19);
  creatingPixels(pixel896);

  pixel897 = new Sprite(10,10,19,19);
  creatingPixels(pixel897);

  pixel898 = new Sprite(10,10,19,19);
  creatingPixels(pixel898);

  pixel899 = new Sprite(10,10,19,19);
  creatingPixels(pixel899);

  pixel900 = new Sprite(10,10,19,19);
  creatingPixels(pixel900);

  pixel901 = new Sprite(10,10,19,19);
  creatingPixels(pixel901);

  pixel902 = new Sprite(10,10,19,19);
  creatingPixels(pixel902);

  pixel903 = new Sprite(10,10,19,19);
  creatingPixels(pixel903);

  pixel904 = new Sprite(10,10,19,19);
  creatingPixels(pixel904);

  pixel905 = new Sprite(10,10,19,19);
  creatingPixels(pixel905);

  pixel906 = new Sprite(10,10,19,19);
  creatingPixels(pixel906);

  pixel907 = new Sprite(10,10,19,19);
  creatingPixels(pixel907);

  pixel908 = new Sprite(10,10,19,19);
  creatingPixels(pixel908);

  pixel909 = new Sprite(10,10,19,19);
  creatingPixels(pixel909);

  pixel910 = new Sprite(10,10,19,19);
  creatingPixels(pixel910);

  pixel911 = new Sprite(10,10,19,19);
  creatingPixels(pixel911);

  pixel912 = new Sprite(10,10,19,19);
  creatingPixels(pixel912);

  pixel913 = new Sprite(10,10,19,19);
  creatingPixels(pixel913);

  pixel914 = new Sprite(10,10,19,19);
  creatingPixels(pixel914);

  pixel915 = new Sprite(10,10,19,19);
  creatingPixels(pixel915);

  pixel916 = new Sprite(10,10,19,19);
  creatingPixels(pixel916);

  pixel917 = new Sprite(10,10,19,19);
  creatingPixels(pixel917);

  pixel918 = new Sprite(10,10,19,19);
  creatingPixels(pixel918);

  pixel919 = new Sprite(10,10,19,19);
  creatingPixels(pixel919);

  pixel920 = new Sprite(10,10,19,19);
  creatingPixels(pixel920);

  pixel921 = new Sprite(10,10,19,19);
  creatingPixels(pixel921);

  pixel922 = new Sprite(10,10,19,19);
  creatingPixels(pixel922);

  pixel923 = new Sprite(10,10,19,19);
  creatingPixels(pixel923);

  pixel924 = new Sprite(10,10,19,19);
  creatingPixels(pixel924);

  pixel925 = new Sprite(10,10,19,19);
  creatingPixels(pixel925);

  pixel926 = new Sprite(10,10,19,19);
  creatingPixels(pixel926);

  pixel927 = new Sprite(10,10,19,19);
  creatingPixels(pixel927);

  pixel928 = new Sprite(10,10,19,19);
  creatingPixels(pixel928);

  pixel929 = new Sprite(10,10,19,19);
  creatingPixels(pixel929);

  pixel930 = new Sprite(10,10,19,19);
  creatingPixels(pixel930);

  pixel931 = new Sprite(10,10,19,19);
  creatingPixels(pixel931);

  pixel932 = new Sprite(10,10,19,19);
  creatingPixels(pixel932);

  pixel933 = new Sprite(10,10,19,19);
  creatingPixels(pixel933);

  pixel934 = new Sprite(10,10,19,19);
  creatingPixels(pixel934);

  pixel935 = new Sprite(10,10,19,19);
  creatingPixels(pixel935);

  pixel936 = new Sprite(10,10,19,19);
  creatingPixels(pixel936);

  pixel937 = new Sprite(10,10,19,19);
  creatingPixels(pixel937);

  pixel938 = new Sprite(10,10,19,19);
  creatingPixels(pixel938);

  pixel939 = new Sprite(10,10,19,19);
  creatingPixels(pixel939);

  pixel940 = new Sprite(10,10,19,19);
  creatingPixels(pixel940);

  pixel941 = new Sprite(10,10,19,19);
  creatingPixels(pixel941);

  pixel942 = new Sprite(10,10,19,19);
  creatingPixels(pixel942);

  pixel943 = new Sprite(10,10,19,19);
  creatingPixels(pixel943);

  pixel944 = new Sprite(10,10,19,19);
  creatingPixels(pixel944);

  pixel945 = new Sprite(10,10,19,19);
  creatingPixels(pixel945);

  pixel946 = new Sprite(10,10,19,19);
  creatingPixels(pixel946);

  pixel947 = new Sprite(10,10,19,19);
  creatingPixels(pixel947);

  pixel948 = new Sprite(10,10,19,19);
  creatingPixels(pixel948);

  pixel949 = new Sprite(10,10,19,19);
  creatingPixels(pixel949);

  pixel950 = new Sprite(10,10,19,19);
  creatingPixels(pixel950);

  pixel951 = new Sprite(10,10,19,19);
  creatingPixels(pixel951);

  pixel952 = new Sprite(10,10,19,19);
  creatingPixels(pixel952);

  pixel953 = new Sprite(10,10,19,19);
  creatingPixels(pixel953);

  pixel954 = new Sprite(10,10,19,19);
  creatingPixels(pixel954);

  pixel955 = new Sprite(10,10,19,19);
  creatingPixels(pixel955);

  pixel956 = new Sprite(10,10,19,19);
  creatingPixels(pixel956);

  pixel957 = new Sprite(10,10,19,19);
  creatingPixels(pixel957);

  pixel958 = new Sprite(10,10,19,19);
  creatingPixels(pixel958);

  pixel959 = new Sprite(10,10,19,19);
  creatingPixels(pixel959);

  pixel960 = new Sprite(10,10,19,19);
  creatingPixels(pixel960);

  pixel961 = new Sprite(10,10,19,19);
  creatingPixels(pixel961);

  pixel962 = new Sprite(10,10,19,19);
  creatingPixels(pixel962);

  pixel963 = new Sprite(10,10,19,19);
  creatingPixels(pixel963);

  pixel964 = new Sprite(10,10,19,19);
  creatingPixels(pixel964);

  pixel965 = new Sprite(10,10,19,19);
  creatingPixels(pixel965);

  pixel966 = new Sprite(10,10,19,19);
  creatingPixels(pixel966);

  pixel967 = new Sprite(10,10,19,19);
  creatingPixels(pixel967);

  pixel968 = new Sprite(10,10,19,19);
  creatingPixels(pixel968);

  pixel969 = new Sprite(10,10,19,19);
  creatingPixels(pixel969);

  pixel970 = new Sprite(10,10,19,19);
  creatingPixels(pixel970);

  pixel971 = new Sprite(10,10,19,19);
  creatingPixels(pixel971);

  pixel972 = new Sprite(10,10,19,19);
  creatingPixels(pixel972);

  pixel973 = new Sprite(10,10,19,19);
  creatingPixels(pixel973);

  pixel974 = new Sprite(10,10,19,19);
  creatingPixels(pixel974);

  pixel975 = new Sprite(10,10,19,19);
  creatingPixels(pixel975);

  pixel976 = new Sprite(10,10,19,19);
  creatingPixels(pixel976);

  pixel977 = new Sprite(10,10,19,19);
  creatingPixels(pixel977);

  pixel978 = new Sprite(10,10,19,19);
  creatingPixels(pixel978);

  pixel979 = new Sprite(10,10,19,19);
  creatingPixels(pixel979);

  pixel980 = new Sprite(10,10,19,19);
  creatingPixels(pixel980);

  pixel981 = new Sprite(10,10,19,19);
  creatingPixels(pixel981);

  pixel982 = new Sprite(10,10,19,19);
  creatingPixels(pixel982);

  pixel983 = new Sprite(10,10,19,19);
  creatingPixels(pixel983);

  pixel984 = new Sprite(10,10,19,19);
  creatingPixels(pixel984);

  pixel985 = new Sprite(10,10,19,19);
  creatingPixels(pixel985);

  pixel986 = new Sprite(10,10,19,19);
  creatingPixels(pixel986);

  pixel987 = new Sprite(10,10,19,19);
  creatingPixels(pixel987);

  pixel988 = new Sprite(10,10,19,19);
  creatingPixels(pixel988);

  pixel989 = new Sprite(10,10,19,19);
  creatingPixels(pixel989);

  pixel990 = new Sprite(10,10,19,19);
  creatingPixels(pixel990);

  pixel991 = new Sprite(10,10,19,19);
  creatingPixels(pixel991);

  pixel992 = new Sprite(10,10,19,19);
  creatingPixels(pixel992);

  pixel993 = new Sprite(10,10,19,19);
  creatingPixels(pixel993);

  pixel994 = new Sprite(10,10,19,19);
  creatingPixels(pixel994);

  pixel995 = new Sprite(10,10,19,19);
  creatingPixels(pixel995);

  pixel996 = new Sprite(10,10,19,19);
  creatingPixels(pixel996);

  pixel997 = new Sprite(10,10,19,19);
  creatingPixels(pixel997);

  pixel998 = new Sprite(10,10,19,19);
  creatingPixels(pixel998);

  pixel999 = new Sprite(10,10,19,19);
  creatingPixels(pixel999);

  pixel1000 = new Sprite(10,10,19,19);
  creatingPixels(pixel1000);

  pixel1001 = new Sprite(10,10,19,19);
  creatingPixels(pixel1001);

  pixel1002 = new Sprite(10,10,19,19);
  creatingPixels(pixel1002);

  pixel1003 = new Sprite(10,10,19,19);
  creatingPixels(pixel1003);

  pixel1004 = new Sprite(10,10,19,19);
  creatingPixels(pixel1004);

  pixel1005 = new Sprite(10,10,19,19);
  creatingPixels(pixel1005);

  pixel1006 = new Sprite(10,10,19,19);
  creatingPixels(pixel1006);

  pixel1007 = new Sprite(10,10,19,19);
  creatingPixels(pixel1007);

  pixel1008 = new Sprite(10,10,19,19);
  creatingPixels(pixel1008);

  pixel1009 = new Sprite(10,10,19,19);
  creatingPixels(pixel1009);

  pixel1010 = new Sprite(10,10,19,19);
  creatingPixels(pixel1010);
  
  pixel1011 = new Sprite(10,10,19,19);
  creatingPixels(pixel1011);

  pixel1012 = new Sprite(10,10,19,19);
  creatingPixels(pixel1012);

  pixel1013 = new Sprite(10,10,19,19);
  creatingPixels(pixel1013);

  pixel1014 = new Sprite(10,10,19,19);
  creatingPixels(pixel1014);

  pixel1015 = new Sprite(10,10,19,19);
  creatingPixels(pixel1015);

  pixel1016 = new Sprite(10,10,19,19);
  creatingPixels(pixel1016);

  pixel1017 = new Sprite(10,10,19,19);
  creatingPixels(pixel1017);

  pixel1018 = new Sprite(10,10,19,19);
  creatingPixels(pixel1018);

  pixel1019 = new Sprite(10,10,19,19);
  creatingPixels(pixel1019);

  pixel1020 = new Sprite(10,10,19,19);
  creatingPixels(pixel1020);

  pixel1021 = new Sprite(10,10,19,19);
  creatingPixels(pixel1021);

  pixel1022 = new Sprite(10,10,19,19);
  creatingPixels(pixel1022);

  pixel1023 = new Sprite(10,10,19,19);
  creatingPixels(pixel1023);

  pixel1024 = new Sprite(10,10,19,19);
  creatingPixels(pixel1024);

  pixel1025 = new Sprite(10,10,19,19);
  creatingPixels(pixel1025);

  pixel1026 = new Sprite(10,10,19,19);
  creatingPixels(pixel1026);

  pixel1027 = new Sprite(10,10,19,19);
  creatingPixels(pixel1027);

  pixel1028 = new Sprite(10,10,19,19);
  creatingPixels(pixel1028);

  pixel1029 = new Sprite(10,10,19,19);
  creatingPixels(pixel1029);

  pixel1030 = new Sprite(10,10,19,19);
  creatingPixels(pixel1030);

  pixel1031 = new Sprite(10,10,19,19);
  creatingPixels(pixel1031);

  pixel1032 = new Sprite(10,10,19,19);
  creatingPixels(pixel1032);

  pixel1033 = new Sprite(10,10,19,19);
  creatingPixels(pixel1033);

  pixel1034 = new Sprite(10,10,19,19);
  creatingPixels(pixel1034);

  pixel1035 = new Sprite(10,10,19,19);
  creatingPixels(pixel1035);

  pixel1036 = new Sprite(10,10,19,19);
  creatingPixels(pixel1036);

  pixel1037 = new Sprite(10,10,19,19);
  creatingPixels(pixel1037);

  pixel1038 = new Sprite(10,10,19,19);
  creatingPixels(pixel1038);

  pixel1039 = new Sprite(10,10,19,19);
  creatingPixels(pixel1039);

  pixel1040 = new Sprite(10,10,19,19);
  creatingPixels(pixel1040);
  
  pixel1041 = new Sprite(10,10,19,19);
  creatingPixels(pixel1041);

  pixel1042 = new Sprite(10,10,19,19);
  creatingPixels(pixel1042);

  pixel1043 = new Sprite(10,10,19,19);
  creatingPixels(pixel1043);

  pixel1044 = new Sprite(10,10,19,19);
  creatingPixels(pixel1044);

  pixel1045 = new Sprite(10,10,19,19);
  creatingPixels(pixel1045);

  pixel1046 = new Sprite(10,10,19,19);
  creatingPixels(pixel1046);

  pixel1047 = new Sprite(10,10,19,19);
  creatingPixels(pixel1047);

  pixel1048 = new Sprite(10,10,19,19);
  creatingPixels(pixel1048);

  pixel1049 = new Sprite(10,10,19,19);
  creatingPixels(pixel1049);

  pixel1050 = new Sprite(10,10,19,19);
  creatingPixels(pixel1050);

  pixel1051 = new Sprite(10,10,19,19);
  creatingPixels(pixel1051);

  pixel1052 = new Sprite(10,10,19,19);
  creatingPixels(pixel1052);

  pixel1053 = new Sprite(10,10,19,19);
  creatingPixels(pixel1053);

  pixel1054 = new Sprite(10,10,19,19);
  creatingPixels(pixel1054);

  pixel1055 = new Sprite(10,10,19,19);
  creatingPixels(pixel1055);

  pixel1056 = new Sprite(10,10,19,19);
  creatingPixels(pixel1056);

  pixel1057 = new Sprite(10,10,19,19);
  creatingPixels(pixel1057);

  pixel1058 = new Sprite(10,10,19,19);
  creatingPixels(pixel1058);

  pixel1059 = new Sprite(10,10,19,19);
  creatingPixels(pixel1059);

  pixel1060 = new Sprite(10,10,19,19);
  creatingPixels(pixel1060);

  pixel1061 = new Sprite(10,10,19,19);
  creatingPixels(pixel1061);

  pixel1062 = new Sprite(10,10,19,19);
  creatingPixels(pixel1062);

  pixel1063 = new Sprite(10,10,19,19);
  creatingPixels(pixel1063);

  pixel1064 = new Sprite(10,10,19,19);
  creatingPixels(pixel1064);

  pixel1065 = new Sprite(10,10,19,19);
  creatingPixels(pixel1065);

  pixel1066 = new Sprite(10,10,19,19);
  creatingPixels(pixel1066);

  pixel1067 = new Sprite(10,10,19,19);
  creatingPixels(pixel1067);

  pixel1068 = new Sprite(10,10,19,19);
  creatingPixels(pixel1068);

  pixel1069 = new Sprite(10,10,19,19);
  creatingPixels(pixel1069);

  pixel1070 = new Sprite(10,10,19,19);
  creatingPixels(pixel1070);
  
  pixel1071 = new Sprite(10,10,19,19);
  creatingPixels(pixel1071);

  pixel1072 = new Sprite(10,10,19,19);
  creatingPixels(pixel1072);

  pixel1073 = new Sprite(10,10,19,19);
  creatingPixels(pixel1073);

  pixel1074 = new Sprite(10,10,19,19);
  creatingPixels(pixel1074);

  pixel1075 = new Sprite(10,10,19,19);
  creatingPixels(pixel1075);

  pixel1076 = new Sprite(10,10,19,19);
  creatingPixels(pixel1076);

  pixel1077 = new Sprite(10,10,19,19);
  creatingPixels(pixel1077);

  pixel1078 = new Sprite(10,10,19,19);
  creatingPixels(pixel1078);

  pixel1079 = new Sprite(10,10,19,19);
  creatingPixels(pixel1079);

  pixel1080 = new Sprite(10,10,19,19);
  creatingPixels(pixel1080);

  pixel1081 = new Sprite(10,10,19,19);
  creatingPixels(pixel1081);

  pixel1082 = new Sprite(10,10,19,19);
  creatingPixels(pixel1082);

  pixel1083 = new Sprite(10,10,19,19);
  creatingPixels(pixel1083);

  pixel1084 = new Sprite(10,10,19,19);
  creatingPixels(pixel1084);

  pixel1085 = new Sprite(10,10,19,19);
  creatingPixels(pixel1085);

  pixel1086 = new Sprite(10,10,19,19);
  creatingPixels(pixel1086);

  pixel1087 = new Sprite(10,10,19,19);
  creatingPixels(pixel1087);

  pixel1088 = new Sprite(10,10,19,19);
  creatingPixels(pixel1088);

  pixel1089 = new Sprite(10,10,19,19);
  creatingPixels(pixel1089);

  pixel1090 = new Sprite(10,10,19,19);
  creatingPixels(pixel1090);

  pixel1091 = new Sprite(10,10,19,19);
  creatingPixels(pixel1091);

  pixel1092 = new Sprite(10,10,19,19);
  creatingPixels(pixel1092);

  pixel1093 = new Sprite(10,10,19,19);
  creatingPixels(pixel1093);

  pixel1094 = new Sprite(10,10,19,19);
  creatingPixels(pixel1094);

  pixel1095 = new Sprite(10,10,19,19);
  creatingPixels(pixel1095);

  pixel1096 = new Sprite(10,10,19,19);
  creatingPixels(pixel1096);

  pixel1097 = new Sprite(10,10,19,19);
  creatingPixels(pixel1097);

  pixel1098 = new Sprite(10,10,19,19);
  creatingPixels(pixel1098);

  pixel1099 = new Sprite(10,10,19,19);
  creatingPixels(pixel1099);

  pixel1100 = new Sprite(10,10,19,19);
  creatingPixels(pixel1100);

  pixel1101 = new Sprite(10,10,19,19);
  creatingPixels(pixel101);

  pixel1102 = new Sprite(10,10,19,19);
  creatingPixels(pixel102);

  pixel1103 = new Sprite(10,10,19,19);
  creatingPixels(pixel103);

  pixel1104 = new Sprite(10,10,19,19);
  creatingPixels(pixel104);

  pixel1105 = new Sprite(10,10,19,19);
  creatingPixels(pixel105);

  pixel1106 = new Sprite(10,10,19,19);
  creatingPixels(pixel106);

  pixel1107 = new Sprite(10,10,19,19);
  creatingPixels(pixel107);

  pixel1108 = new Sprite(10,10,19,19);
  creatingPixels(pixel108);

  pixel1109 = new Sprite(10,10,19,19);
  creatingPixels(pixel109);

  pixel1110 = new Sprite(10,10,19,19);
  creatingPixels(pixel110);

  pixel1111 = new Sprite(10,10,19,19);
  creatingPixels(pixel111);

  pixel1112 = new Sprite(10,10,19,19);
  creatingPixels(pixel112);

  pixel1113 = new Sprite(10,10,19,19);
  creatingPixels(pixel113);

  pixel1114 = new Sprite(10,10,19,19);
  creatingPixels(pixel114);

  pixel1115 = new Sprite(10,10,19,19);
  creatingPixels(pixel115);

  pixel1116 = new Sprite(10,10,19,19);
  creatingPixels(pixel116);

  pixel1117 = new Sprite(10,10,19,19);
  creatingPixels(pixel117);

  pixel1118 = new Sprite(10,10,19,19);
  creatingPixels(pixel118);

  pixel1119 = new Sprite(10,10,19,19);
  creatingPixels(pixel119);

  pixel1120 = new Sprite(10,10,19,19);
  creatingPixels(pixel120);

  pixel1121 = new Sprite(10,10,19,19);
  creatingPixels(pixel121);

  pixel1122 = new Sprite(10,10,19,19);
  creatingPixels(pixel122);

  pixel1123 = new Sprite(10,10,19,19);
  creatingPixels(pixel123);

  pixel1124 = new Sprite(10,10,19,19);
  creatingPixels(pixel124);

  pixel1125 = new Sprite(10,10,19,19);
  creatingPixels(pixel125);

  pixel1126 = new Sprite(10,10,19,19);
  creatingPixels(pixel126);

  pixel1127 = new Sprite(10,10,19,19);
  creatingPixels(pixel127);

  pixel1128 = new Sprite(10,10,19,19);
  creatingPixels(pixel128);

  pixel1129 = new Sprite(10,10,19,19);
  creatingPixels(pixel129);

  pixel1130 = new Sprite(10,10,19,19);
  creatingPixels(pixel130);

  pixel1131 = new Sprite(10,10,19,19);
  creatingPixels(pixel131);

  pixel1132 = new Sprite(10,10,19,19);
  creatingPixels(pixel132);

  pixel1133 = new Sprite(10,10,19,19);
  creatingPixels(pixel133);

  pixel1134 = new Sprite(10,10,19,19);
  creatingPixels(pixel134);

  pixel1135 = new Sprite(10,10,19,19);
  creatingPixels(pixel135);

  pixel1136 = new Sprite(10,10,19,19);
  creatingPixels(pixel136);

  pixel1137 = new Sprite(10,10,19,19);
  creatingPixels(pixel137);

  pixel1138 = new Sprite(10,10,19,19);
  creatingPixels(pixel138);

  pixel1139 = new Sprite(10,10,19,19);
  creatingPixels(pixel139);

  pixel1140 = new Sprite(10,10,19,19);
  creatingPixels(pixel140);

  pixel1141 = new Sprite(10,10,19,19);
  creatingPixels(pixel141);

  pixel1142 = new Sprite(10,10,19,19);
  creatingPixels(pixel142);

  pixel1143 = new Sprite(10,10,19,19);
  creatingPixels(pixel143);

  pixel1144 = new Sprite(10,10,19,19);
  creatingPixels(pixel144);

  pixel1145 = new Sprite(10,10,19,19);
  creatingPixels(pixel145);

  pixel1146 = new Sprite(10,10,19,19);
  creatingPixels(pixel146);

  pixel1147 = new Sprite(10,10,19,19);
  creatingPixels(pixel147);

  pixel1148 = new Sprite(10,10,19,19);
  creatingPixels(pixel148);

  pixel1149 = new Sprite(10,10,19,19);
  creatingPixels(pixel149);

  pixel1150 = new Sprite(10,10,19,19);
  creatingPixels(pixel150);

  pixel1151 = new Sprite(10,10,19,19);
  creatingPixels(pixel151);

  pixel1152 = new Sprite(10,10,19,19);
  creatingPixels(pixel152);

  pixel1153 = new Sprite(10,10,19,19);
  creatingPixels(pixel153);

  pixel1154 = new Sprite(10,10,19,19);
  creatingPixels(pixel154);

  pixel1155 = new Sprite(10,10,19,19);
  creatingPixels(pixel155);

  pixel1156 = new Sprite(10,10,19,19);
  creatingPixels(pixel156);

  pixel1157 = new Sprite(10,10,19,19);
  creatingPixels(pixel157);

  pixel1158 = new Sprite(10,10,19,19);
  creatingPixels(pixel158);

  pixel1159 = new Sprite(10,10,19,19);
  creatingPixels(pixel159);

  pixel1160 = new Sprite(10,10,19,19);
  creatingPixels(pixel160);

  pixel1161 = new Sprite(10,10,19,19);
  creatingPixels(pixel161);

  pixel1162 = new Sprite(10,10,19,19);
  creatingPixels(pixel162);

  pixel1163 = new Sprite(10,10,19,19);
  creatingPixels(pixel163);

  pixel1164 = new Sprite(10,10,19,19);
  creatingPixels(pixel164);

  pixel1165 = new Sprite(10,10,19,19);
  creatingPixels(pixel165);

  pixel1166 = new Sprite(10,10,19,19);
  creatingPixels(pixel166);

  pixel1167 = new Sprite(10,10,19,19);
  creatingPixels(pixel167);

  pixel1168 = new Sprite(10,10,19,19);
  creatingPixels(pixel168);

  pixel1169 = new Sprite(10,10,19,19);
  creatingPixels(pixel169);

  pixel1170 = new Sprite(10,10,19,19);
  creatingPixels(pixel170);

  pixel1171 = new Sprite(10,10,19,19);
  creatingPixels(pixel171);

  pixel1172 = new Sprite(10,10,19,19);
  creatingPixels(pixel172);

  pixel1173 = new Sprite(10,10,19,19);
  creatingPixels(pixel173);

  pixel1174 = new Sprite(10,10,19,19);
  creatingPixels(pixel174);

  pixel1175 = new Sprite(10,10,19,19);
  creatingPixels(pixel175);

  pixel1176 = new Sprite(10,10,19,19);
  creatingPixels(pixel176);

  pixel1177 = new Sprite(10,10,19,19);
  creatingPixels(pixel177);

  pixel1178 = new Sprite(10,10,19,19);
  creatingPixels(pixel178);

  pixel1179 = new Sprite(10,10,19,19);
  creatingPixels(pixel179);

  pixel1180 = new Sprite(10,10,19,19);
  creatingPixels(pixel180);

  pixel1181 = new Sprite(10,10,19,19);
  creatingPixels(pixel181);

  pixel1182 = new Sprite(10,10,19,19);
  creatingPixels(pixel182);

  pixel1183 = new Sprite(10,10,19,19);
  creatingPixels(pixel183);

  pixel1184 = new Sprite(10,10,19,19);
  creatingPixels(pixel184);

  pixel1185 = new Sprite(10,10,19,19);
  creatingPixels(pixel185);

  pixel1186 = new Sprite(10,10,19,19);
  creatingPixels(pixel186);

  pixel1187 = new Sprite(10,10,19,19);
  creatingPixels(pixel187);

  pixel1188 = new Sprite(10,10,19,19);
  creatingPixels(pixel188);

  pixel1189 = new Sprite(10,10,19,19);
  creatingPixels(pixel189);

  pixel1190 = new Sprite(10,10,19,19);
  creatingPixels(pixel190);

  pixel1191 = new Sprite(10,10,19,19);
  creatingPixels(pixel191);

  pixel1192 = new Sprite(10,10,19,19);
  creatingPixels(pixel192);

  pixel1193 = new Sprite(10,10,19,19);
  creatingPixels(pixel193);

  pixel1194 = new Sprite(10,10,19,19);
  creatingPixels(pixel194);

  pixel1195 = new Sprite(10,10,19,19);
  creatingPixels(pixel195);

  pixel1196 = new Sprite(10,10,19,19);
  creatingPixels(pixel196);

  pixel1197 = new Sprite(10,10,19,19);
  creatingPixels(pixel197);

  pixel1198 = new Sprite(10,10,19,19);
  creatingPixels(pixel198);

  pixel1199 = new Sprite(10,10,19,19);
  creatingPixels(pixel199);

  pixel1200 = new Sprite(10,10,19,19);
  creatingPixels(pixel200);

  pixel1201 = new Sprite(10,10,19,19);
  creatingPixels(pixel201);

  pixel1202 = new Sprite(10,10,19,19);
  creatingPixels(pixel202);

  pixel1203 = new Sprite(10,10,19,19);
  creatingPixels(pixel203);

  pixel1204 = new Sprite(10,10,19,19);
  creatingPixels(pixel204);

  pixel1205 = new Sprite(10,10,19,19);
  creatingPixels(pixel205);

  pixel1206 = new Sprite(10,10,19,19);
  creatingPixels(pixel206);

  pixel1207 = new Sprite(10,10,19,19);
  creatingPixels(pixel207);

  pixel1208 = new Sprite(10,10,19,19);
  creatingPixels(pixel208);

  pixel1209 = new Sprite(10,10,19,19);
  creatingPixels(pixel209);

  pixel1210 = new Sprite(10,10,19,19);
  creatingPixels(pixel210);

  pixel1211 = new Sprite(10,10,19,19);
  creatingPixels(pixel211);

  pixel1212 = new Sprite(10,10,19,19);
  creatingPixels(pixel212);

  pixel1213 = new Sprite(10,10,19,19);
  creatingPixels(pixel213);

  pixel1214 = new Sprite(10,10,19,19);
  creatingPixels(pixel214);

  pixel1215 = new Sprite(10,10,19,19);
  creatingPixels(pixel215);

  pixel1216 = new Sprite(10,10,19,19);
  creatingPixels(pixel216);

  pixel1217 = new Sprite(10,10,19,19);
  creatingPixels(pixel217);

  pixel1218 = new Sprite(10,10,19,19);
  creatingPixels(pixel218);

  pixel1219 = new Sprite(10,10,19,19);
  creatingPixels(pixel219);

  pixel1220 = new Sprite(10,10,19,19);
  creatingPixels(pixel220);

  pixel1221 = new Sprite(10,10,19,19);
  creatingPixels(pixel221);

  pixel1222 = new Sprite(10,10,19,19);
  creatingPixels(pixel222);

  pixel1223 = new Sprite(10,10,19,19);
  creatingPixels(pixel223);

  pixel1224 = new Sprite(10,10,19,19);
  creatingPixels(pixel224);

  pixel1225 = new Sprite(10,10,19,19);
  creatingPixels(pixel225);

  pixel1226 = new Sprite(10,10,19,19);
  creatingPixels(pixel226);

  pixel1227 = new Sprite(10,10,19,19);
  creatingPixels(pixel227);

  pixel1228 = new Sprite(10,10,19,19);
  creatingPixels(pixel228);

  pixel1229 = new Sprite(10,10,19,19);
  creatingPixels(pixel229);

  pixel1230 = new Sprite(10,10,19,19);
  creatingPixels(pixel230);

  pixel1231 = new Sprite(10,10,19,19);
  creatingPixels(pixel231);

  pixel1232 = new Sprite(10,10,19,19);
  creatingPixels(pixel232);

  pixel1233 = new Sprite(10,10,19,19);
  creatingPixels(pixel233);

  pixel1234 = new Sprite(10,10,19,19);
  creatingPixels(pixel234);

  pixel1235 = new Sprite(10,10,19,19);
  creatingPixels(pixel235);

  pixel1236 = new Sprite(10,10,19,19);
  creatingPixels(pixel236);

  pixel1237 = new Sprite(10,10,19,19);
  creatingPixels(pixel237);

  pixel1238 = new Sprite(10,10,19,19);
  creatingPixels(pixel238);

  pixel1239 = new Sprite(10,10,19,19);
  creatingPixels(pixel239);

  pixel1240 = new Sprite(10,10,19,19);
  creatingPixels(pixel240);

  pixel1241 = new Sprite(10,10,19,19);
  creatingPixels(pixel241);

  pixel1242 = new Sprite(10,10,19,19);
  creatingPixels(pixel242);

  pixel1243 = new Sprite(10,10,19,19);
  creatingPixels(pixel243);

  pixel1244 = new Sprite(10,10,19,19);
  creatingPixels(pixel244);

  pixel1245 = new Sprite(10,10,19,19);
  creatingPixels(pixel245);

  pixel1246 = new Sprite(10,10,19,19);
  creatingPixels(pixel246);

  pixel1247 = new Sprite(10,10,19,19);
  creatingPixels(pixel247);

  pixel1248 = new Sprite(10,10,19,19);
  creatingPixels(pixel248);

  pixel1249 = new Sprite(10,10,19,19);
  creatingPixels(pixel249);

  pixel1250 = new Sprite(10,10,19,19);
  creatingPixels(pixel250);

  pixel1251 = new Sprite(10,10,19,19);
  creatingPixels(pixel251);

  pixel1252 = new Sprite(10,10,19,19);
  creatingPixels(pixel252);

  pixel1253 = new Sprite(10,10,19,19);
  creatingPixels(pixel253);

  pixel1254 = new Sprite(10,10,19,19);
  creatingPixels(pixel254);

  pixel1255 = new Sprite(10,10,19,19);
  creatingPixels(pixel255);

  pixel1256 = new Sprite(10,10,19,19);
  creatingPixels(pixel256);

  pixel1257 = new Sprite(10,10,19,19);
  creatingPixels(pixel257);

  pixel1258 = new Sprite(10,10,19,19);
  creatingPixels(pixel258);

  pixel1259 = new Sprite(10,10,19,19);
  creatingPixels(pixel259);

  pixel1260 = new Sprite(10,10,19,19);
  creatingPixels(pixel260);

  pixel1261 = new Sprite(10,10,19,19);
  creatingPixels(pixel261);

  pixel1262 = new Sprite(10,10,19,19);
  creatingPixels(pixel262);

  pixel1263 = new Sprite(10,10,19,19);
  creatingPixels(pixel263);

  pixel1264 = new Sprite(10,10,19,19);
  creatingPixels(pixel264);

  pixel1265 = new Sprite(10,10,19,19);
  creatingPixels(pixel265);

  pixel1266 = new Sprite(10,10,19,19);
  creatingPixels(pixel266);

  pixel1267 = new Sprite(10,10,19,19);
  creatingPixels(pixel267);

  pixel1268 = new Sprite(10,10,19,19);
  creatingPixels(pixel268);

  pixel1269 = new Sprite(10,10,19,19);
  creatingPixels(pixel269);

  pixel1270 = new Sprite(10,10,19,19);
  creatingPixels(pixel270);

  pixel1271 = new Sprite(10,10,19,19);
  creatingPixels(pixel271);

  pixel1272 = new Sprite(10,10,19,19);
  creatingPixels(pixel272);

  pixel1273 = new Sprite(10,10,19,19);
  creatingPixels(pixel273);

  pixel1274 = new Sprite(10,10,19,19);
  creatingPixels(pixel274);

  pixel1275 = new Sprite(10,10,19,19);
  creatingPixels(pixel275);

  pixel1276 = new Sprite(10,10,19,19);
  creatingPixels(pixel276);

  pixel1277 = new Sprite(10,10,19,19);
  creatingPixels(pixel277);

  pixel1278 = new Sprite(10,10,19,19);
  creatingPixels(pixel278);

  pixel1279 = new Sprite(10,10,19,19);
  creatingPixels(pixel279);

  pixel1280 = new Sprite(10,10,19,19);
  creatingPixels(pixel280);

  pixel1281 = new Sprite(10,10,19,19);
  creatingPixels(pixel281);

  pixel1282 = new Sprite(10,10,19,19);
  creatingPixels(pixel282);

  pixel1283 = new Sprite(10,10,19,19);
  creatingPixels(pixel283);

  pixel1284 = new Sprite(10,10,19,19);
  creatingPixels(pixel284);

  pixel1285 = new Sprite(10,10,19,19);
  creatingPixels(pixel285);

  pixel1286 = new Sprite(10,10,19,19);
  creatingPixels(pixel286);

  pixel1287 = new Sprite(10,10,19,19);
  creatingPixels(pixel287);

  pixel1288 = new Sprite(10,10,19,19);
  creatingPixels(pixel288);

  pixel1289 = new Sprite(10,10,19,19);
  creatingPixels(pixel289);

  pixel1290 = new Sprite(10,10,19,19);
  creatingPixels(pixel290);

  pixel1291 = new Sprite(10,10,19,19);
  creatingPixels(pixel291);

  pixel1292 = new Sprite(10,10,19,19);
  creatingPixels(pixel292);

  pixel1293 = new Sprite(10,10,19,19);
  creatingPixels(pixel293);

  pixel1294 = new Sprite(10,10,19,19);
  creatingPixels(pixel294);

  pixel1295 = new Sprite(10,10,19,19);
  creatingPixels(pixel295);

  pixel1296 = new Sprite(10,10,19,19);
  creatingPixels(pixel296);

  pixel1297 = new Sprite(10,10,19,19);
  creatingPixels(pixel297);

  pixel1298 = new Sprite(10,10,19,19);
  creatingPixels(pixel298);

  pixel1299 = new Sprite(10,10,19,19);
  creatingPixels(pixel299);

  pixel1300 = new Sprite(10,10,19,19);
  creatingPixels(pixel300);

  pixel1301 = new Sprite(10,10,19,19);
  creatingPixels(pixel301);

  pixel1302 = new Sprite(10,10,19,19);
  creatingPixels(pixel302);

  pixel1303 = new Sprite(10,10,19,19);
  creatingPixels(pixel303);

  pixel1304 = new Sprite(10,10,19,19);
  creatingPixels(pixel304);

  pixel1305 = new Sprite(10,10,19,19);
  creatingPixels(pixel305);

  pixel1306 = new Sprite(10,10,19,19);
  creatingPixels(pixel306);

  pixel1307 = new Sprite(10,10,19,19);
  creatingPixels(pixel307);

  pixel1308 = new Sprite(10,10,19,19);
  creatingPixels(pixel308);

  pixel1309 = new Sprite(10,10,19,19);
  creatingPixels(pixel309);

  pixel1310 = new Sprite(10,10,19,19);
  creatingPixels(pixel310);

  pixel1311 = new Sprite(10,10,19,19);
  creatingPixels(pixel311);

  pixel1312 = new Sprite(10,10,19,19);
  creatingPixels(pixel312);

  pixel1313 = new Sprite(10,10,19,19);
  creatingPixels(pixel313);

  pixel1314 = new Sprite(10,10,19,19);
  creatingPixels(pixel314);

  pixel1315 = new Sprite(10,10,19,19);
  creatingPixels(pixel315);

  pixel1316 = new Sprite(10,10,19,19);
  creatingPixels(pixel316);

  pixel1317 = new Sprite(10,10,19,19);
  creatingPixels(pixel317);

  pixel1318 = new Sprite(10,10,19,19);
  creatingPixels(pixel318);

  pixel1319 = new Sprite(10,10,19,19);
  creatingPixels(pixel319);

  pixel1320 = new Sprite(10,10,19,19);
  creatingPixels(pixel320);

  pixel1321 = new Sprite(10,10,19,19);
  creatingPixels(pixel321);

  pixel1322 = new Sprite(10,10,19,19);
  creatingPixels(pixel322);

  pixel1323 = new Sprite(10,10,19,19);
  creatingPixels(pixel323);

  pixel1324 = new Sprite(10,10,19,19);
  creatingPixels(pixel324);

  pixel1325 = new Sprite(10,10,19,19);
  creatingPixels(pixel325);

  pixel1326 = new Sprite(10,10,19,19);
  creatingPixels(pixel326);

  pixel1327 = new Sprite(10,10,19,19);
  creatingPixels(pixel327);

  pixel1328 = new Sprite(10,10,19,19);
  creatingPixels(pixel328);

  pixel1329 = new Sprite(10,10,19,19);
  creatingPixels(pixel329);

  pixel1330 = new Sprite(10,10,19,19);
  creatingPixels(pixel330);

  pixel1331 = new Sprite(10,10,19,19);
  creatingPixels(pixel331);

  pixel1332 = new Sprite(10,10,19,19);
  creatingPixels(pixel332);

  pixel1333 = new Sprite(10,10,19,19);
  creatingPixels(pixel333);

  pixel1334 = new Sprite(10,10,19,19);
  creatingPixels(pixel334);

  pixel1335 = new Sprite(10,10,19,19);
  creatingPixels(pixel335);

  pixel1336 = new Sprite(10,10,19,19);
  creatingPixels(pixel336);

  pixel1337 = new Sprite(10,10,19,19);
  creatingPixels(pixel337);

  pixel1338 = new Sprite(10,10,19,19);
  creatingPixels(pixel338);

  pixel1339 = new Sprite(10,10,19,19);
  creatingPixels(pixel339);

  pixel1340 = new Sprite(10,10,19,19);
  creatingPixels(pixel340);

  pixel1341 = new Sprite(10,10,19,19);
  creatingPixels(pixel341);

  pixel1342 = new Sprite(10,10,19,19);
  creatingPixels(pixel342);

  pixel1343 = new Sprite(10,10,19,19);
  creatingPixels(pixel343);

  pixel1344 = new Sprite(10,10,19,19);
  creatingPixels(pixel344);

  pixel1345 = new Sprite(10,10,19,19);
  creatingPixels(pixel345);

  pixel1346 = new Sprite(10,10,19,19);
  creatingPixels(pixel346);

  pixel1347 = new Sprite(10,10,19,19);
  creatingPixels(pixel347);

  pixel1348 = new Sprite(10,10,19,19);
  creatingPixels(pixel348);

  pixel1349 = new Sprite(10,10,19,19);
  creatingPixels(pixel349);

  pixel1350 = new Sprite(10,10,19,19);
  creatingPixels(pixel350);

  pixel1351 = new Sprite(10,10,19,19);
  creatingPixels(pixel351);

  pixel1352 = new Sprite(10,10,19,19);
  creatingPixels(pixel352);

  pixel1353 = new Sprite(10,10,19,19);
  creatingPixels(pixel353);

  pixel1354 = new Sprite(10,10,19,19);
  creatingPixels(pixel354);

  pixel1355 = new Sprite(10,10,19,19);
  creatingPixels(pixel355);

  pixel1356 = new Sprite(10,10,19,19);
  creatingPixels(pixel356);

  pixel1357 = new Sprite(10,10,19,19);
  creatingPixels(pixel357);

  pixel1358 = new Sprite(10,10,19,19);
  creatingPixels(pixel358);

  pixel1359 = new Sprite(10,10,19,19);
  creatingPixels(pixel359);

  pixel1360 = new Sprite(10,10,19,19);
  creatingPixels(pixel360);
  
  pixel1361 = new Sprite(10,10,19,19);
  creatingPixels(pixel361);

  pixel1362 = new Sprite(10,10,19,19);
  creatingPixels(pixel362);

  pixel1363 = new Sprite(10,10,19,19);
  creatingPixels(pixel363);

  pixel1364 = new Sprite(10,10,19,19);
  creatingPixels(pixel364);

  pixel1365 = new Sprite(10,10,19,19);
  creatingPixels(pixel365);

  pixel1366 = new Sprite(10,10,19,19);
  creatingPixels(pixel366);

  pixel1367 = new Sprite(10,10,19,19);
  creatingPixels(pixel367);

  pixel1368 = new Sprite(10,10,19,19);
  creatingPixels(pixel368);

  pixel1369 = new Sprite(10,10,19,19);
  creatingPixels(pixel369);

  pixel1370 = new Sprite(10,10,19,19);
  creatingPixels(pixel370);

  pixel1371 = new Sprite(10,10,19,19);
  creatingPixels(pixel371);

  pixel1372 = new Sprite(10,10,19,19);
  creatingPixels(pixel372);

  pixel1373 = new Sprite(10,10,19,19);
  creatingPixels(pixel373);

  pixel1374 = new Sprite(10,10,19,19);
  creatingPixels(pixel374);

  pixel1375 = new Sprite(10,10,19,19);
  creatingPixels(pixel375);

  pixel1376 = new Sprite(10,10,19,19);
  creatingPixels(pixel376);

  pixel1377 = new Sprite(10,10,19,19);
  creatingPixels(pixel377);

  pixel1378 = new Sprite(10,10,19,19);
  creatingPixels(pixel378);

  pixel1379 = new Sprite(10,10,19,19);
  creatingPixels(pixel379);

  pixel1380 = new Sprite(10,10,19,19);
  creatingPixels(pixel380);

  pixel1381 = new Sprite(10,10,19,19);
  creatingPixels(pixel381);

  pixel1382 = new Sprite(10,10,19,19);
  creatingPixels(pixel382);

  pixel1383 = new Sprite(10,10,19,19);
  creatingPixels(pixel383);

  pixel1384 = new Sprite(10,10,19,19);
  creatingPixels(pixel384);

  pixel1385 = new Sprite(10,10,19,19);
  creatingPixels(pixel385);

  pixel1386 = new Sprite(10,10,19,19);
  creatingPixels(pixel386);

  pixel1387 = new Sprite(10,10,19,19);
  creatingPixels(pixel387);

  pixel1388 = new Sprite(10,10,19,19);
  creatingPixels(pixel388);

  pixel1389 = new Sprite(10,10,19,19);
  creatingPixels(pixel389);

  pixel1390 = new Sprite(10,10,19,19);
  creatingPixels(pixel390);
  
  pixel1391 = new Sprite(10,10,19,19);
  creatingPixels(pixel391);

  pixel1392 = new Sprite(10,10,19,19);
  creatingPixels(pixel392);

  pixel1393 = new Sprite(10,10,19,19);
  creatingPixels(pixel393);

  pixel1394 = new Sprite(10,10,19,19);
  creatingPixels(pixel394);

  pixel1395 = new Sprite(10,10,19,19);
  creatingPixels(pixel395);

  pixel1396 = new Sprite(10,10,19,19);
  creatingPixels(pixel396);

  pixel1397 = new Sprite(10,10,19,19);
  creatingPixels(pixel397);

  pixel1398 = new Sprite(10,10,19,19);
  creatingPixels(pixel398);

  pixel1399 = new Sprite(10,10,19,19);
  creatingPixels(pixel399);

  pixel1400 = new Sprite(10,10,19,19);
  creatingPixels(pixel400);

  pixel1401 = new Sprite(10,10,19,19);
  creatingPixels(pixel401);

  pixel1402 = new Sprite(10,10,19,19);
  creatingPixels(pixel402);

  pixel1403 = new Sprite(10,10,19,19);
  creatingPixels(pixel403);

  pixel1404 = new Sprite(10,10,19,19);
  creatingPixels(pixel404);

  pixel1405 = new Sprite(10,10,19,19);
  creatingPixels(pixel405);

  pixel1406 = new Sprite(10,10,19,19);
  creatingPixels(pixel406);

  pixel1407 = new Sprite(10,10,19,19);
  creatingPixels(pixel407);

  pixel1408 = new Sprite(10,10,19,19);
  creatingPixels(pixel408);

  pixel1409 = new Sprite(10,10,19,19);
  creatingPixels(pixel409);

  pixel1410 = new Sprite(10,10,19,19);
  creatingPixels(pixel410);

  pixel1411 = new Sprite(10,10,19,19);
  creatingPixels(pixel411);

  pixel1412 = new Sprite(10,10,19,19);
  creatingPixels(pixel412);

  pixel1413 = new Sprite(10,10,19,19);
  creatingPixels(pixel413);

  pixel1414 = new Sprite(10,10,19,19);
  creatingPixels(pixel414);

  pixel1415 = new Sprite(10,10,19,19);
  creatingPixels(pixel415);

  pixel1416 = new Sprite(10,10,19,19);
  creatingPixels(pixel416);

  pixel1417 = new Sprite(10,10,19,19);
  creatingPixels(pixel417);

  pixel1418 = new Sprite(10,10,19,19);
  creatingPixels(pixel418);

  pixel1419 = new Sprite(10,10,19,19);
  creatingPixels(pixel419);

  pixel1420 = new Sprite(10,10,19,19);
  creatingPixels(pixel420);

  pixel1421 = new Sprite(10,10,19,19);
  creatingPixels(pixel421);

  pixel1422 = new Sprite(10,10,19,19);
  creatingPixels(pixel422);

  pixel1423 = new Sprite(10,10,19,19);
  creatingPixels(pixel423);

  pixel1424 = new Sprite(10,10,19,19);
  creatingPixels(pixel424);

  pixel1425 = new Sprite(10,10,19,19);
  creatingPixels(pixel425);

  pixel1426 = new Sprite(10,10,19,19);
  creatingPixels(pixel426);

  pixel1427 = new Sprite(10,10,19,19);
  creatingPixels(pixel427);

  pixel1428 = new Sprite(10,10,19,19);
  creatingPixels(pixel428);

  pixel1429 = new Sprite(10,10,19,19);
  creatingPixels(pixel429);

  pixel1430 = new Sprite(10,10,19,19);
  creatingPixels(pixel430);

  pixel1431 = new Sprite(10,10,19,19);
  creatingPixels(pixel431);

  pixel1432 = new Sprite(10,10,19,19);
  creatingPixels(pixel432);

  pixel1433 = new Sprite(10,10,19,19);
  creatingPixels(pixel433);

  pixel1434 = new Sprite(10,10,19,19);
  creatingPixels(pixel434);

  pixel1435 = new Sprite(10,10,19,19);
  creatingPixels(pixel435);

  pixel1436 = new Sprite(10,10,19,19);
  creatingPixels(pixel436);

  pixel1437 = new Sprite(10,10,19,19);
  creatingPixels(pixel437);

  pixel1438 = new Sprite(10,10,19,19);
  creatingPixels(pixel438);

  pixel1439 = new Sprite(10,10,19,19);
  creatingPixels(pixel439);

  pixel1440 = new Sprite(10,10,19,19);
  creatingPixels(pixel440);

  pixel1441 = new Sprite(10,10,19,19);
  creatingPixels(pixel441);

  pixel1442 = new Sprite(10,10,19,19);
  creatingPixels(pixel442);

  pixel1443 = new Sprite(10,10,19,19);
  creatingPixels(pixel443);

  pixel1444 = new Sprite(10,10,19,19);
  creatingPixels(pixel444);

  pixel1445 = new Sprite(10,10,19,19);
  creatingPixels(pixel445);

  pixel1446 = new Sprite(10,10,19,19);
  creatingPixels(pixel446);

  pixel1447 = new Sprite(10,10,19,19);
  creatingPixels(pixel447);

  pixel1448 = new Sprite(10,10,19,19);
  creatingPixels(pixel448);

  pixel1449 = new Sprite(10,10,19,19);
  creatingPixels(pixel449);

  pixel1450 = new Sprite(10,10,19,19);
  creatingPixels(pixel450);

  pixel1451 = new Sprite(10,10,19,19);
  creatingPixels(pixel451);

  pixel1452 = new Sprite(10,10,19,19);
  creatingPixels(pixel452);

  pixel1453 = new Sprite(10,10,19,19);
  creatingPixels(pixel453);

  pixel1454 = new Sprite(10,10,19,19);
  creatingPixels(pixel454);

  pixel1455 = new Sprite(10,10,19,19);
  creatingPixels(pixel455);

  pixel1456 = new Sprite(10,10,19,19);
  creatingPixels(pixel456);

  pixel1457 = new Sprite(10,10,19,19);
  creatingPixels(pixel457);

  pixel1458 = new Sprite(10,10,19,19);
  creatingPixels(pixel458);

  pixel1459 = new Sprite(10,10,19,19);
  creatingPixels(pixel459);

  pixel1460 = new Sprite(10,10,19,19);
  creatingPixels(pixel460);

  pixel1461 = new Sprite(10,10,19,19);
  creatingPixels(pixel461);

  pixel1462 = new Sprite(10,10,19,19);
  creatingPixels(pixel462);

  pixel1463 = new Sprite(10,10,19,19);
  creatingPixels(pixel463);

  pixel1464 = new Sprite(10,10,19,19);
  creatingPixels(pixel464);

  pixel1465 = new Sprite(10,10,19,19);
  creatingPixels(pixel465);

  pixel1466 = new Sprite(10,10,19,19);
  creatingPixels(pixel466);

  pixel1467 = new Sprite(10,10,19,19);
  creatingPixels(pixel467);

  pixel1468 = new Sprite(10,10,19,19);
  creatingPixels(pixel468);

  pixel1469 = new Sprite(10,10,19,19);
  creatingPixels(pixel469);

  pixel1470 = new Sprite(10,10,19,19);
  creatingPixels(pixel470);

  pixel1471 = new Sprite(10,10,19,19);
  creatingPixels(pixel471);

  pixel1472 = new Sprite(10,10,19,19);
  creatingPixels(pixel472);

  pixel1473 = new Sprite(10,10,19,19);
  creatingPixels(pixel473);

  pixel1474 = new Sprite(10,10,19,19);
  creatingPixels(pixel474);

  pixel1475 = new Sprite(10,10,19,19);
  creatingPixels(pixel475);

  pixel1476 = new Sprite(10,10,19,19);
  creatingPixels(pixel476);

  pixel1477 = new Sprite(10,10,19,19);
  creatingPixels(pixel477);

  pixel1478 = new Sprite(10,10,19,19);
  creatingPixels(pixel478);

  pixel1479 = new Sprite(10,10,19,19);
  creatingPixels(pixel479);

  pixel1480 = new Sprite(10,10,19,19);
  creatingPixels(pixel480);

  pixel1481 = new Sprite(10,10,19,19);
  creatingPixels(pixel481);

  pixel1482 = new Sprite(10,10,19,19);
  creatingPixels(pixel482);

  pixel1483 = new Sprite(10,10,19,19);
  creatingPixels(pixel483);

  pixel1484 = new Sprite(10,10,19,19);
  creatingPixels(pixel484);

  pixel1485 = new Sprite(10,10,19,19);
  creatingPixels(pixel485);

  pixel1486 = new Sprite(10,10,19,19);
  creatingPixels(pixel486);

  pixel1487 = new Sprite(10,10,19,19);
  creatingPixels(pixel487);

  pixel1488 = new Sprite(10,10,19,19);
  creatingPixels(pixel488);

  pixel1489 = new Sprite(10,10,19,19);
  creatingPixels(pixel489);

  pixel1490 = new Sprite(10,10,19,19);
  creatingPixels(pixel490);

  pixel1491 = new Sprite(10,10,19,19);
  creatingPixels(pixel491);

  pixel1492 = new Sprite(10,10,19,19);
  creatingPixels(pixel492);

  pixel1493 = new Sprite(10,10,19,19);
  creatingPixels(pixel493);

  pixel1494 = new Sprite(10,10,19,19);
  creatingPixels(pixel494);

  pixel1495 = new Sprite(10,10,19,19);
  creatingPixels(pixel495);

  pixel1496 = new Sprite(10,10,19,19);
  creatingPixels(pixel496);

  pixel1497 = new Sprite(10,10,19,19);
  creatingPixels(pixel497);

  pixel1498 = new Sprite(10,10,19,19);
  creatingPixels(pixel498);

  pixel1499 = new Sprite(10,10,19,19);
  creatingPixels(pixel499);

  pixel1500 = new Sprite(10,10,19,19);
  creatingPixels(pixel500);

  pixel1501 = new Sprite(10,10,19,19);
  creatingPixels(pixel501);

  pixel1502 = new Sprite(10,10,19,19);
  creatingPixels(pixel502);

  pixel1503 = new Sprite(10,10,19,19);
  creatingPixels(pixel503);

  pixel1504 = new Sprite(10,10,19,19);
  creatingPixels(pixel504);

  pixel1505 = new Sprite(10,10,19,19);
  creatingPixels(pixel505);

  pixel1506 = new Sprite(10,10,19,19);
  creatingPixels(pixel506);

  pixel1507 = new Sprite(10,10,19,19);
  creatingPixels(pixel507);

  pixel1508 = new Sprite(10,10,19,19);
  creatingPixels(pixel508);

  pixel1509 = new Sprite(10,10,19,19);
  creatingPixels(pixel509);

  pixel1510 = new Sprite(10,10,19,19);
  creatingPixels(pixel510);
  
  pixel1511 = new Sprite(10,10,19,19);
  creatingPixels(pixel511);

  pixel1512 = new Sprite(10,10,19,19);
  creatingPixels(pixel512);

  pixel1513 = new Sprite(10,10,19,19);
  creatingPixels(pixel513);

  pixel1514 = new Sprite(10,10,19,19);
  creatingPixels(pixel514);

  pixel1515 = new Sprite(10,10,19,19);
  creatingPixels(pixel515);

  pixel1516 = new Sprite(10,10,19,19);
  creatingPixels(pixel516);

  pixel1517 = new Sprite(10,10,19,19);
  creatingPixels(pixel517);

  pixel1518 = new Sprite(10,10,19,19);
  creatingPixels(pixel518);

  pixel1519 = new Sprite(10,10,19,19);
  creatingPixels(pixel519);

  pixel1520 = new Sprite(10,10,19,19);
  creatingPixels(pixel520);

  pixel1521 = new Sprite(10,10,19,19);
  creatingPixels(pixel521);

  pixel1522 = new Sprite(10,10,19,19);
  creatingPixels(pixel522);

  pixel1523 = new Sprite(10,10,19,19);
  creatingPixels(pixel523);

  pixel1524 = new Sprite(10,10,19,19);
  creatingPixels(pixel524);

  pixel1525 = new Sprite(10,10,19,19);
  creatingPixels(pixel525);

  pixel1526 = new Sprite(10,10,19,19);
  creatingPixels(pixel526);

  pixel1527 = new Sprite(10,10,19,19);
  creatingPixels(pixel527);

  pixel1528 = new Sprite(10,10,19,19);
  creatingPixels(pixel528);

  pixel1529 = new Sprite(10,10,19,19);
  creatingPixels(pixel529);

  pixel1530 = new Sprite(10,10,19,19);
  creatingPixels(pixel530);

  pixel1531 = new Sprite(10,10,19,19);
  creatingPixels(pixel531);

  pixel1532 = new Sprite(10,10,19,19);
  creatingPixels(pixel532);

  pixel1533 = new Sprite(10,10,19,19);
  creatingPixels(pixel533);

  pixel1534 = new Sprite(10,10,19,19);
  creatingPixels(pixel534);

  pixel1535 = new Sprite(10,10,19,19);
  creatingPixels(pixel535);

  pixel1536 = new Sprite(10,10,19,19);
  creatingPixels(pixel536);

  pixel1537 = new Sprite(10,10,19,19);
  creatingPixels(pixel537);

  pixel1538 = new Sprite(10,10,19,19);
  creatingPixels(pixel538);

  pixel1539 = new Sprite(10,10,19,19);
  creatingPixels(pixel539);

  pixel1540 = new Sprite(10,10,19,19);
  creatingPixels(pixel540);
  
  pixel1541 = new Sprite(10,10,19,19);
  creatingPixels(pixel541);

  pixel1542 = new Sprite(10,10,19,19);
  creatingPixels(pixel542);

  pixel1543 = new Sprite(10,10,19,19);
  creatingPixels(pixel543);

  pixel1544 = new Sprite(10,10,19,19);
  creatingPixels(pixel544);

  pixel1545 = new Sprite(10,10,19,19);
  creatingPixels(pixel545);

  pixel1546 = new Sprite(10,10,19,19);
  creatingPixels(pixel546);

  pixel1547 = new Sprite(10,10,19,19);
  creatingPixels(pixel547);

  pixel1548 = new Sprite(10,10,19,19);
  creatingPixels(pixel548);

  pixel1549 = new Sprite(10,10,19,19);
  creatingPixels(pixel549);

  pixel1550 = new Sprite(10,10,19,19);
  creatingPixels(pixel550);

  pixel1551 = new Sprite(10,10,19,19);
  creatingPixels(pixel551);

  pixel1552 = new Sprite(10,10,19,19);
  creatingPixels(pixel552);

  pixel1553 = new Sprite(10,10,19,19);
  creatingPixels(pixel553);

  pixel1554 = new Sprite(10,10,19,19);
  creatingPixels(pixel554);

  pixel1555 = new Sprite(10,10,19,19);
  creatingPixels(pixel555);

  pixel1556 = new Sprite(10,10,19,19);
  creatingPixels(pixel556);

  pixel1557 = new Sprite(10,10,19,19);
  creatingPixels(pixel557);

  pixel1558 = new Sprite(10,10,19,19);
  creatingPixels(pixel558);

  pixel1559 = new Sprite(10,10,19,19);
  creatingPixels(pixel559);

  pixel1560 = new Sprite(10,10,19,19);
  creatingPixels(pixel560);

  pixel1561 = new Sprite(10,10,19,19);
  creatingPixels(pixel561);

  pixel1562 = new Sprite(10,10,19,19);
  creatingPixels(pixel562);

  pixel1563 = new Sprite(10,10,19,19);
  creatingPixels(pixel563);

  pixel1564 = new Sprite(10,10,19,19);
  creatingPixels(pixel564);

  pixel1565 = new Sprite(10,10,19,19);
  creatingPixels(pixel565);

  pixel1566 = new Sprite(10,10,19,19);
  creatingPixels(pixel566);

  pixel1567 = new Sprite(10,10,19,19);
  creatingPixels(pixel567);

  pixel1568 = new Sprite(10,10,19,19);
  creatingPixels(pixel568);

  pixel1569 = new Sprite(10,10,19,19);
  creatingPixels(pixel569);

  pixel1570 = new Sprite(10,10,19,19);
  creatingPixels(pixel570);
  
  pixel1571 = new Sprite(10,10,19,19);
  creatingPixels(pixel571);

  pixel1572 = new Sprite(10,10,19,19);
  creatingPixels(pixel572);

  pixel1573 = new Sprite(10,10,19,19);
  creatingPixels(pixel573);

  pixel1574 = new Sprite(10,10,19,19);
  creatingPixels(pixel574);

  pixel1575 = new Sprite(10,10,19,19);
  creatingPixels(pixel575);

  pixel1576 = new Sprite(10,10,19,19);
  creatingPixels(pixel576);

  pixel1577 = new Sprite(10,10,19,19);
  creatingPixels(pixel577);

  pixel1578 = new Sprite(10,10,19,19);
  creatingPixels(pixel578);

  pixel1579 = new Sprite(10,10,19,19);
  creatingPixels(pixel579);

  pixel1580 = new Sprite(10,10,19,19);
  creatingPixels(pixel580);

  pixel1581 = new Sprite(10,10,19,19);
  creatingPixels(pixel581);

  pixel1582 = new Sprite(10,10,19,19);
  creatingPixels(pixel582);

  pixel1583 = new Sprite(10,10,19,19);
  creatingPixels(pixel583);

  pixel1584 = new Sprite(10,10,19,19);
  creatingPixels(pixel584);

  pixel1585 = new Sprite(10,10,19,19);
  creatingPixels(pixel585);

  pixel1586 = new Sprite(10,10,19,19);
  creatingPixels(pixel586);

  pixel1587 = new Sprite(10,10,19,19);
  creatingPixels(pixel587);

  pixel1588 = new Sprite(10,10,19,19);
  creatingPixels(pixel588);

  pixel1589 = new Sprite(10,10,19,19);
  creatingPixels(pixel589);

  pixel1590 = new Sprite(10,10,19,19);
  creatingPixels(pixel590);

  pixel1591 = new Sprite(10,10,19,19);
  creatingPixels(pixel591);

  pixel1592 = new Sprite(10,10,19,19);
  creatingPixels(pixel592);

  pixel1593 = new Sprite(10,10,19,19);
  creatingPixels(pixel593);

  pixel1594 = new Sprite(10,10,19,19);
  creatingPixels(pixel594);

  pixel1595 = new Sprite(10,10,19,19);
  creatingPixels(pixel595);

  pixel1596 = new Sprite(10,10,19,19);
  creatingPixels(pixel596);

  pixel1597 = new Sprite(10,10,19,19);
  creatingPixels(pixel597);

  pixel1598 = new Sprite(10,10,19,19);
  creatingPixels(pixel598);

  pixel1599 = new Sprite(10,10,19,19);
  creatingPixels(pixel599);

  pixel1600 = new Sprite(10,10,19,19);
  creatingPixels(pixel600);

  pixel1601 = new Sprite(10,10,19,19);
  creatingPixels(pixel601);

  pixel1602 = new Sprite(10,10,19,19);
  creatingPixels(pixel602);

  pixel1603 = new Sprite(10,10,19,19);
  creatingPixels(pixel603);

  pixel1604 = new Sprite(10,10,19,19);
  creatingPixels(pixel604);

  pixel1605 = new Sprite(10,10,19,19);
  creatingPixels(pixel605);

  pixel1606 = new Sprite(10,10,19,19);
  creatingPixels(pixel606);

  pixel1607 = new Sprite(10,10,19,19);
  creatingPixels(pixel607);

  pixel1608 = new Sprite(10,10,19,19);
  creatingPixels(pixel608);

  pixel1609 = new Sprite(10,10,19,19);
  creatingPixels(pixel609);

  pixel1610 = new Sprite(10,10,19,19);
  creatingPixels(pixel610);

  pixel1611 = new Sprite(10,10,19,19);
  creatingPixels(pixel611);

  pixel1612 = new Sprite(10,10,19,19);
  creatingPixels(pixel612);

  pixel1613 = new Sprite(10,10,19,19);
  creatingPixels(pixel613);

  pixel1614 = new Sprite(10,10,19,19);
  creatingPixels(pixel614);

  pixel1615 = new Sprite(10,10,19,19);
  creatingPixels(pixel615);

  pixel1616 = new Sprite(10,10,19,19);
  creatingPixels(pixel616);

  pixel1617 = new Sprite(10,10,19,19);
  creatingPixels(pixel617);

  pixel1618 = new Sprite(10,10,19,19);
  creatingPixels(pixel618);

  pixel1619 = new Sprite(10,10,19,19);
  creatingPixels(pixel619);

  pixel1620 = new Sprite(10,10,19,19);
  creatingPixels(pixel620);

  pixel1621 = new Sprite(10,10,19,19);
  creatingPixels(pixel621);

  pixel1622 = new Sprite(10,10,19,19);
  creatingPixels(pixel622);

  pixel1623 = new Sprite(10,10,19,19);
  creatingPixels(pixel623);

  pixel1624 = new Sprite(10,10,19,19);
  creatingPixels(pixel624);

  pixel1625 = new Sprite(10,10,19,19);
  creatingPixels(pixel625);

  pixel1626 = new Sprite(10,10,19,19);
  creatingPixels(pixel626);

  pixel1627 = new Sprite(10,10,19,19);
  creatingPixels(pixel627);

  pixel1628 = new Sprite(10,10,19,19);
  creatingPixels(pixel628);

  pixel1629 = new Sprite(10,10,19,19);
  creatingPixels(pixel629);

  pixel1630 = new Sprite(10,10,19,19);
  creatingPixels(pixel630);

  pixel1631 = new Sprite(10,10,19,19);
  creatingPixels(pixel631);

  pixel1632 = new Sprite(10,10,19,19);
  creatingPixels(pixel632);

  pixel1633 = new Sprite(10,10,19,19);
  creatingPixels(pixel633);

  pixel1634 = new Sprite(10,10,19,19);
  creatingPixels(pixel634);

  pixel1635 = new Sprite(10,10,19,19);
  creatingPixels(pixel635);

  pixel1636 = new Sprite(10,10,19,19);
  creatingPixels(pixel636);

  pixel1637 = new Sprite(10,10,19,19);
  creatingPixels(pixel637);

  pixel1638 = new Sprite(10,10,19,19);
  creatingPixels(pixel638);

  pixel1639 = new Sprite(10,10,19,19);
  creatingPixels(pixel639);

  pixel1640 = new Sprite(10,10,19,19);
  creatingPixels(pixel640);

  pixel1641 = new Sprite(10,10,19,19);
  creatingPixels(pixel641);

  pixel1642 = new Sprite(10,10,19,19);
  creatingPixels(pixel642);

  pixel1643 = new Sprite(10,10,19,19);
  creatingPixels(pixel643);

  pixel1644 = new Sprite(10,10,19,19);
  creatingPixels(pixel644);

  pixel1645 = new Sprite(10,10,19,19);
  creatingPixels(pixel645);

  pixel1646 = new Sprite(10,10,19,19);
  creatingPixels(pixel646);

  pixel1647 = new Sprite(10,10,19,19);
  creatingPixels(pixel647);

  pixel1648 = new Sprite(10,10,19,19);
  creatingPixels(pixel648);

  pixel1649 = new Sprite(10,10,19,19);
  creatingPixels(pixel649);

  pixel1650 = new Sprite(10,10,19,19);
  creatingPixels(pixel650);

  pixel1651 = new Sprite(10,10,19,19);
  creatingPixels(pixel651);

  pixel1652 = new Sprite(10,10,19,19);
  creatingPixels(pixel652);

  pixel1653 = new Sprite(10,10,19,19);
  creatingPixels(pixel653);

  pixel1654 = new Sprite(10,10,19,19);
  creatingPixels(pixel654);

  pixel1655 = new Sprite(10,10,19,19);
  creatingPixels(pixel655);

  pixel1656 = new Sprite(10,10,19,19);
  creatingPixels(pixel656);

  pixel1657 = new Sprite(10,10,19,19);
  creatingPixels(pixel657);

  pixel1658 = new Sprite(10,10,19,19);
  creatingPixels(pixel658);

  pixel1659 = new Sprite(10,10,19,19);
  creatingPixels(pixel659);

  pixel1660 = new Sprite(10,10,19,19);
  creatingPixels(pixel660);

  pixel1661 = new Sprite(10,10,19,19);
  creatingPixels(pixel661);

  pixel1662 = new Sprite(10,10,19,19);
  creatingPixels(pixel662);

  pixel1663 = new Sprite(10,10,19,19);
  creatingPixels(pixel663);

  pixel1664 = new Sprite(10,10,19,19);
  creatingPixels(pixel664);

  pixel1665 = new Sprite(10,10,19,19);
  creatingPixels(pixel665);

  pixel1666 = new Sprite(10,10,19,19);
  creatingPixels(pixel666);

  pixel1667 = new Sprite(10,10,19,19);
  creatingPixels(pixel667);

  pixel1668 = new Sprite(10,10,19,19);
  creatingPixels(pixel668);

  pixel1669 = new Sprite(10,10,19,19);
  creatingPixels(pixel669);

  pixel1670 = new Sprite(10,10,19,19);
  creatingPixels(pixel670);

  pixel1671 = new Sprite(10,10,19,19);
  creatingPixels(pixel671);

  pixel1672 = new Sprite(10,10,19,19);
  creatingPixels(pixel672);

  pixel1673 = new Sprite(10,10,19,19);
  creatingPixels(pixel673);

  pixel1674 = new Sprite(10,10,19,19);
  creatingPixels(pixel674);

  pixel1675 = new Sprite(10,10,19,19);
  creatingPixels(pixel675);

  pixel1676 = new Sprite(10,10,19,19);
  creatingPixels(pixel676);

  pixel1677 = new Sprite(10,10,19,19);
  creatingPixels(pixel677);

  pixel1678 = new Sprite(10,10,19,19);
  creatingPixels(pixel678);

  pixel1679 = new Sprite(10,10,19,19);
  creatingPixels(pixel679);

  pixel1680 = new Sprite(10,10,19,19);
  creatingPixels(pixel680);

  pixel1681 = new Sprite(10,10,19,19);
  creatingPixels(pixel681);

  pixel1682 = new Sprite(10,10,19,19);
  creatingPixels(pixel682);

  pixel1683 = new Sprite(10,10,19,19);
  creatingPixels(pixel683);

  pixel1684 = new Sprite(10,10,19,19);
  creatingPixels(pixel684);

  pixel1685 = new Sprite(10,10,19,19);
  creatingPixels(pixel685);

  pixel1686 = new Sprite(10,10,19,19);
  creatingPixels(pixel686);

  pixel1687 = new Sprite(10,10,19,19);
  creatingPixels(pixel687);

  pixel1688 = new Sprite(10,10,19,19);
  creatingPixels(pixel688);

  pixel1689 = new Sprite(10,10,19,19);
  creatingPixels(pixel689);

  pixel1690 = new Sprite(10,10,19,19);
  creatingPixels(pixel690);

  pixel1691 = new Sprite(10,10,19,19);
  creatingPixels(pixel691);

  pixel1692 = new Sprite(10,10,19,19);
  creatingPixels(pixel692);

  pixel1693 = new Sprite(10,10,19,19);
  creatingPixels(pixel693);

  pixel1694 = new Sprite(10,10,19,19);
  creatingPixels(pixel694);

  pixel1695 = new Sprite(10,10,19,19);
  creatingPixels(pixel695);

  pixel1696 = new Sprite(10,10,19,19);
  creatingPixels(pixel696);

  pixel1697 = new Sprite(10,10,19,19);
  creatingPixels(pixel697);

  pixel1698 = new Sprite(10,10,19,19);
  creatingPixels(pixel698);

  pixel1699 = new Sprite(10,10,19,19);
  creatingPixels(pixel699);

  pixel1700 = new Sprite(10,10,19,19);
  creatingPixels(pixel700);

  pixel1701 = new Sprite(10,10,19,19);
  creatingPixels(pixel701);

  pixel1702 = new Sprite(10,10,19,19);
  creatingPixels(pixel702);

  pixel1703 = new Sprite(10,10,19,19);
  creatingPixels(pixel703);

  pixel1704 = new Sprite(10,10,19,19);
  creatingPixels(pixel704);

  pixel1705 = new Sprite(10,10,19,19);
  creatingPixels(pixel705);

  pixel1706 = new Sprite(10,10,19,19);
  creatingPixels(pixel706);

  pixel1707 = new Sprite(10,10,19,19);
  creatingPixels(pixel707);

  pixel1708 = new Sprite(10,10,19,19);
  creatingPixels(pixel708);

  pixel1709 = new Sprite(10,10,19,19);
  creatingPixels(pixel709);

  pixel1710 = new Sprite(10,10,19,19);
  creatingPixels(pixel710);

  pixel1711 = new Sprite(10,10,19,19);
  creatingPixels(pixel711);

  pixel1712 = new Sprite(10,10,19,19);
  creatingPixels(pixel712);

  pixel1713 = new Sprite(10,10,19,19);
  creatingPixels(pixel713);

  pixel1714 = new Sprite(10,10,19,19);
  creatingPixels(pixel714);

  pixel1715 = new Sprite(10,10,19,19);
  creatingPixels(pixel715);

  pixel1716 = new Sprite(10,10,19,19);
  creatingPixels(pixel716);

  pixel1717 = new Sprite(10,10,19,19);
  creatingPixels(pixel717);

  pixel1718 = new Sprite(10,10,19,19);
  creatingPixels(pixel718);

  pixel1719 = new Sprite(10,10,19,19);
  creatingPixels(pixel719);

  pixel1720 = new Sprite(10,10,19,19);
  creatingPixels(pixel720);

  pixel1721 = new Sprite(10,10,19,19);
  creatingPixels(pixel721);

  pixel1722 = new Sprite(10,10,19,19);
  creatingPixels(pixel722);

  pixel1723 = new Sprite(10,10,19,19);
  creatingPixels(pixel723);

  pixel1724 = new Sprite(10,10,19,19);
  creatingPixels(pixel724);

  pixel1725 = new Sprite(10,10,19,19);
  creatingPixels(pixel725);

  pixel1726 = new Sprite(10,10,19,19);
  creatingPixels(pixel726);

  pixel1727 = new Sprite(10,10,19,19);
  creatingPixels(pixel727);

  pixel1728 = new Sprite(10,10,19,19);
  creatingPixels(pixel728);

  pixel1729 = new Sprite(10,10,19,19);
  creatingPixels(pixel729);

  pixel1730 = new Sprite(10,10,19,19);
  creatingPixels(pixel730);

  pixel1731 = new Sprite(10,10,19,19);
  creatingPixels(pixel731);

  pixel1732 = new Sprite(10,10,19,19);
  creatingPixels(pixel732);

  pixel1733 = new Sprite(10,10,19,19);
  creatingPixels(pixel733);

  pixel1734 = new Sprite(10,10,19,19);
  creatingPixels(pixel734);

  pixel1735 = new Sprite(10,10,19,19);
  creatingPixels(pixel735);

  pixel1736 = new Sprite(10,10,19,19);
  creatingPixels(pixel736);

  pixel1737 = new Sprite(10,10,19,19);
  creatingPixels(pixel737);

  pixel1738 = new Sprite(10,10,19,19);
  creatingPixels(pixel738);

  pixel1739 = new Sprite(10,10,19,19);
  creatingPixels(pixel739);

  pixel1740 = new Sprite(10,10,19,19);
  creatingPixels(pixel740);

  pixel1741 = new Sprite(10,10,19,19);
  creatingPixels(pixel741);

  pixel1742 = new Sprite(10,10,19,19);
  creatingPixels(pixel742);

  pixel1743 = new Sprite(10,10,19,19);
  creatingPixels(pixel743);

  pixel1744 = new Sprite(10,10,19,19);
  creatingPixels(pixel744);

  pixel1745 = new Sprite(10,10,19,19);
  creatingPixels(pixel745);

  pixel1746 = new Sprite(10,10,19,19);
  creatingPixels(pixel746);

  pixel1747 = new Sprite(10,10,19,19);
  creatingPixels(pixel747);

  pixel1748 = new Sprite(10,10,19,19);
  creatingPixels(pixel748);

  pixel1749 = new Sprite(10,10,19,19);
  creatingPixels(pixel749);

  pixel1750 = new Sprite(10,10,19,19);
  creatingPixels(pixel750);

  pixel1751 = new Sprite(10,10,19,19);
  creatingPixels(pixel751);

  pixel1752 = new Sprite(10,10,19,19);
  creatingPixels(pixel752);

  pixel1753 = new Sprite(10,10,19,19);
  creatingPixels(pixel753);

  pixel1754 = new Sprite(10,10,19,19);
  creatingPixels(pixel754);

  pixel1755 = new Sprite(10,10,19,19);
  creatingPixels(pixel755);

  pixel1756 = new Sprite(10,10,19,19);
  creatingPixels(pixel756);

  pixel1757 = new Sprite(10,10,19,19);
  creatingPixels(pixel757);

  pixel1758 = new Sprite(10,10,19,19);
  creatingPixels(pixel758);

  pixel1759 = new Sprite(10,10,19,19);
  creatingPixels(pixel759);

  pixel1760 = new Sprite(10,10,19,19);
  creatingPixels(pixel760);

  pixel1761 = new Sprite(10,10,19,19);
  creatingPixels(pixel761);

  pixel1762 = new Sprite(10,10,19,19);
  creatingPixels(pixel762);

  pixel1763 = new Sprite(10,10,19,19);
  creatingPixels(pixel763);

  pixel1764 = new Sprite(10,10,19,19);
  creatingPixels(pixel764);

  pixel1765 = new Sprite(10,10,19,19);
  creatingPixels(pixel765);

  pixel1766 = new Sprite(10,10,19,19);
  creatingPixels(pixel766);

  pixel1767 = new Sprite(10,10,19,19);
  creatingPixels(pixel767);

  pixel1768 = new Sprite(10,10,19,19);
  creatingPixels(pixel768);

  pixel1769 = new Sprite(10,10,19,19);
  creatingPixels(pixel769);

  pixel1770 = new Sprite(10,10,19,19);
  creatingPixels(pixel770);

  pixel1771 = new Sprite(10,10,19,19);
  creatingPixels(pixel771);

  pixel1772 = new Sprite(10,10,19,19);
  creatingPixels(pixel772);

  pixel1773 = new Sprite(10,10,19,19);
  creatingPixels(pixel773);

  pixel1774 = new Sprite(10,10,19,19);
  creatingPixels(pixel774);

  pixel1775 = new Sprite(10,10,19,19);
  creatingPixels(pixel775);

  pixel1776 = new Sprite(10,10,19,19);
  creatingPixels(pixel776);

  pixel1777 = new Sprite(10,10,19,19);
  creatingPixels(pixel777);

  pixel1778 = new Sprite(10,10,19,19);
  creatingPixels(pixel778);

  pixel1779 = new Sprite(10,10,19,19);
  creatingPixels(pixel779);

  pixel1780 = new Sprite(10,10,19,19);
  creatingPixels(pixel780);

  pixel1781 = new Sprite(10,10,19,19);
  creatingPixels(pixel781);

  pixel1782 = new Sprite(10,10,19,19);
  creatingPixels(pixel782);

  pixel1783 = new Sprite(10,10,19,19);
  creatingPixels(pixel783);

  pixel1784 = new Sprite(10,10,19,19);
  creatingPixels(pixel784);

  pixel1785 = new Sprite(10,10,19,19);
  creatingPixels(pixel785);

  pixel1786 = new Sprite(10,10,19,19);
  creatingPixels(pixel786);

  pixel1787 = new Sprite(10,10,19,19);
  creatingPixels(pixel787);

  pixel1788 = new Sprite(10,10,19,19);
  creatingPixels(pixel788);

  pixel1789 = new Sprite(10,10,19,19);
  creatingPixels(pixel789);

  pixel1790 = new Sprite(10,10,19,19);
  creatingPixels(pixel790);

  pixel1791 = new Sprite(10,10,19,19);
  creatingPixels(pixel791);

  pixel1792 = new Sprite(10,10,19,19);
  creatingPixels(pixel792);

  pixel1793 = new Sprite(10,10,19,19);
  creatingPixels(pixel793);

  pixel1794 = new Sprite(10,10,19,19);
  creatingPixels(pixel794);

  pixel1795 = new Sprite(10,10,19,19);
  creatingPixels(pixel795);

  pixel1796 = new Sprite(10,10,19,19);
  creatingPixels(pixel796);

  pixel1797 = new Sprite(10,10,19,19);
  creatingPixels(pixel797);

  pixel1798 = new Sprite(10,10,19,19);
  creatingPixels(pixel798);

  pixel1799 = new Sprite(10,10,19,19);
  creatingPixels(pixel799);

  pixel1800 = new Sprite(10,10,19,19);
  creatingPixels(pixel800);

  pixel1801 = new Sprite(10,10,19,19);
  creatingPixels(pixel801);

  pixel1802 = new Sprite(10,10,19,19);
  creatingPixels(pixel802);

  pixel1803 = new Sprite(10,10,19,19);
  creatingPixels(pixel803);

  pixel1804 = new Sprite(10,10,19,19);
  creatingPixels(pixel804);

  pixel1805 = new Sprite(10,10,19,19);
  creatingPixels(pixel805);

  pixel1806 = new Sprite(10,10,19,19);
  creatingPixels(pixel806);

  pixel1807 = new Sprite(10,10,19,19);
  creatingPixels(pixel807);

  pixel1808 = new Sprite(10,10,19,19);
  creatingPixels(pixel808);

  pixel1809 = new Sprite(10,10,19,19);
  creatingPixels(pixel809);

  pixel1810 = new Sprite(10,10,19,19);
  creatingPixels(pixel810);

  pixel1811 = new Sprite(10,10,19,19);
  creatingPixels(pixel811);

  pixel1812 = new Sprite(10,10,19,19);
  creatingPixels(pixel812);

  pixel1813 = new Sprite(10,10,19,19);
  creatingPixels(pixel813);

  pixel1814 = new Sprite(10,10,19,19);
  creatingPixels(pixel814);

  pixel1815 = new Sprite(10,10,19,19);
  creatingPixels(pixel815);

  pixel1816 = new Sprite(10,10,19,19);
  creatingPixels(pixel816);

  pixel1817 = new Sprite(10,10,19,19);
  creatingPixels(pixel817);

  pixel1818 = new Sprite(10,10,19,19);
  creatingPixels(pixel818);

  pixel1819 = new Sprite(10,10,19,19);
  creatingPixels(pixel819);

  pixel1820 = new Sprite(10,10,19,19);
  creatingPixels(pixel820);

  pixel1821 = new Sprite(10,10,19,19);
  creatingPixels(pixel821);

  pixel1822 = new Sprite(10,10,19,19);
  creatingPixels(pixel822);

  pixel1823 = new Sprite(10,10,19,19);
  creatingPixels(pixel823);

  pixel1824 = new Sprite(10,10,19,19);
  creatingPixels(pixel824);

  pixel1825 = new Sprite(10,10,19,19);
  creatingPixels(pixel825);

  pixel1826 = new Sprite(10,10,19,19);
  creatingPixels(pixel826);

  pixel1827 = new Sprite(10,10,19,19);
  creatingPixels(pixel827);

  pixel1828 = new Sprite(10,10,19,19);
  creatingPixels(pixel828);

  pixel1829 = new Sprite(10,10,19,19);
  creatingPixels(pixel829);

  pixel1830 = new Sprite(10,10,19,19);
  creatingPixels(pixel830);

  pixel1831 = new Sprite(10,10,19,19);
  creatingPixels(pixel831);

  pixel1832 = new Sprite(10,10,19,19);
  creatingPixels(pixel832);

  pixel1833 = new Sprite(10,10,19,19);
  creatingPixels(pixel833);

  pixel1834 = new Sprite(10,10,19,19);
  creatingPixels(pixel834);

  pixel1835 = new Sprite(10,10,19,19);
  creatingPixels(pixel835);

  pixel1836 = new Sprite(10,10,19,19);
  creatingPixels(pixel836);

  pixel1837 = new Sprite(10,10,19,19);
  creatingPixels(pixel837);

  pixel1838 = new Sprite(10,10,19,19);
  creatingPixels(pixel838);

  pixel1839 = new Sprite(10,10,19,19);
  creatingPixels(pixel839);

  pixel1840 = new Sprite(10,10,19,19);
  creatingPixels(pixel840);

  pixel1841 = new Sprite(10,10,19,19);
  creatingPixels(pixel841);

  pixel1842 = new Sprite(10,10,19,19);
  creatingPixels(pixel842);

  pixel1843 = new Sprite(10,10,19,19);
  creatingPixels(pixel843);

  pixel1844 = new Sprite(10,10,19,19);
  creatingPixels(pixel844);

  pixel1845 = new Sprite(10,10,19,19);
  creatingPixels(pixel845);

  pixel1846 = new Sprite(10,10,19,19);
  creatingPixels(pixel846);

  pixel1847 = new Sprite(10,10,19,19);
  creatingPixels(pixel847);

  pixel1848 = new Sprite(10,10,19,19);
  creatingPixels(pixel848);

  pixel1849 = new Sprite(10,10,19,19);
  creatingPixels(pixel849);

  pixel1850 = new Sprite(10,10,19,19);
  creatingPixels(pixel850);

  pixel1851 = new Sprite(10,10,19,19);
  creatingPixels(pixel851);

  pixel1852 = new Sprite(10,10,19,19);
  creatingPixels(pixel852);

  pixel1853 = new Sprite(10,10,19,19);
  creatingPixels(pixel853);

  pixel1854 = new Sprite(10,10,19,19);
  creatingPixels(pixel854);

  pixel1855 = new Sprite(10,10,19,19);
  creatingPixels(pixel855);

  pixel1856 = new Sprite(10,10,19,19);
  creatingPixels(pixel856);

  pixel1857 = new Sprite(10,10,19,19);
  creatingPixels(pixel857);

  pixel1858 = new Sprite(10,10,19,19);
  creatingPixels(pixel858);

  pixel1859 = new Sprite(10,10,19,19);
  creatingPixels(pixel859);

  pixel1860 = new Sprite(10,10,19,19);
  creatingPixels(pixel860);
  
  pixel1861 = new Sprite(10,10,19,19);
  creatingPixels(pixel861);

  pixel1862 = new Sprite(10,10,19,19);
  creatingPixels(pixel862);

  pixel1863 = new Sprite(10,10,19,19);
  creatingPixels(pixel863);

  pixel1864 = new Sprite(10,10,19,19);
  creatingPixels(pixel864);

  pixel1865 = new Sprite(10,10,19,19);
  creatingPixels(pixel865);

  pixel1866 = new Sprite(10,10,19,19);
  creatingPixels(pixel866);

  pixel1867 = new Sprite(10,10,19,19);
  creatingPixels(pixel867);

  pixel1868 = new Sprite(10,10,19,19);
  creatingPixels(pixel868);

  pixel1869 = new Sprite(10,10,19,19);
  creatingPixels(pixel869);

  pixel1870 = new Sprite(10,10,19,19);
  creatingPixels(pixel870);

  pixel1871 = new Sprite(10,10,19,19);
  creatingPixels(pixel871);

  pixel1872 = new Sprite(10,10,19,19);
  creatingPixels(pixel872);

  pixel1873 = new Sprite(10,10,19,19);
  creatingPixels(pixel873);

  pixel1874 = new Sprite(10,10,19,19);
  creatingPixels(pixel874);

  pixel1875 = new Sprite(10,10,19,19);
  creatingPixels(pixel875);

  pixel1876 = new Sprite(10,10,19,19);
  creatingPixels(pixel876);

  pixel1877 = new Sprite(10,10,19,19);
  creatingPixels(pixel877);

  pixel1878 = new Sprite(10,10,19,19);
  creatingPixels(pixel878);

  pixel1879 = new Sprite(10,10,19,19);
  creatingPixels(pixel879);

  pixel1880 = new Sprite(10,10,19,19);
  creatingPixels(pixel880);

  pixel1881 = new Sprite(10,10,19,19);
  creatingPixels(pixel881);

  pixel1882 = new Sprite(10,10,19,19);
  creatingPixels(pixel882);

  pixel1883 = new Sprite(10,10,19,19);
  creatingPixels(pixel883);

  pixel1884 = new Sprite(10,10,19,19);
  creatingPixels(pixel884);

  pixel1885 = new Sprite(10,10,19,19);
  creatingPixels(pixel885);

  pixel1886 = new Sprite(10,10,19,19);
  creatingPixels(pixel886);

  pixel1887 = new Sprite(10,10,19,19);
  creatingPixels(pixel887);

  pixel1888 = new Sprite(10,10,19,19);
  creatingPixels(pixel888);

  pixel1889 = new Sprite(10,10,19,19);
  creatingPixels(pixel889);

  pixel1890 = new Sprite(10,10,19,19);
  creatingPixels(pixel890);
  
  pixel1891 = new Sprite(10,10,19,19);
  creatingPixels(pixel891);

  pixel1892 = new Sprite(10,10,19,19);
  creatingPixels(pixel892);

  pixel1893 = new Sprite(10,10,19,19);
  creatingPixels(pixel893);

  pixel1894 = new Sprite(10,10,19,19);
  creatingPixels(pixel894);

  pixel1895 = new Sprite(10,10,19,19);
  creatingPixels(pixel895);

  pixel1896 = new Sprite(10,10,19,19);
  creatingPixels(pixel896);

  pixel1897 = new Sprite(10,10,19,19);
  creatingPixels(pixel897);

  pixel1898 = new Sprite(10,10,19,19);
  creatingPixels(pixel898);

  pixel1899 = new Sprite(10,10,19,19);
  creatingPixels(pixel899);

  pixel1900 = new Sprite(10,10,19,19);
  creatingPixels(pixel900);

  pixel1901 = new Sprite(10,10,19,19);
  creatingPixels(pixel901);

  pixel1902 = new Sprite(10,10,19,19);
  creatingPixels(pixel902);

  pixel1903 = new Sprite(10,10,19,19);
  creatingPixels(pixel903);

  pixel1904 = new Sprite(10,10,19,19);
  creatingPixels(pixel904);

  pixel1905 = new Sprite(10,10,19,19);
  creatingPixels(pixel905);

  pixel1906 = new Sprite(10,10,19,19);
  creatingPixels(pixel906);

  pixel1907 = new Sprite(10,10,19,19);
  creatingPixels(pixel907);

  pixel1908 = new Sprite(10,10,19,19);
  creatingPixels(pixel908);

  pixel1909 = new Sprite(10,10,19,19);
  creatingPixels(pixel909);

  pixel1910 = new Sprite(10,10,19,19);
  creatingPixels(pixel910);

  pixel1911 = new Sprite(10,10,19,19);
  creatingPixels(pixel911);

  pixel1912 = new Sprite(10,10,19,19);
  creatingPixels(pixel912);

  pixel1913 = new Sprite(10,10,19,19);
  creatingPixels(pixel913);

  pixel1914 = new Sprite(10,10,19,19);
  creatingPixels(pixel914);

  pixel1915 = new Sprite(10,10,19,19);
  creatingPixels(pixel915);

  pixel1916 = new Sprite(10,10,19,19);
  creatingPixels(pixel916);

  pixel1917 = new Sprite(10,10,19,19);
  creatingPixels(pixel917);

  pixel1918 = new Sprite(10,10,19,19);
  creatingPixels(pixel918);

  pixel1919 = new Sprite(10,10,19,19);
  creatingPixels(pixel919);

  pixel1920 = new Sprite(10,10,19,19);
  creatingPixels(pixel920);

  pixel1921 = new Sprite(10,10,19,19);
  creatingPixels(pixel921);

  pixel1922 = new Sprite(10,10,19,19);
  creatingPixels(pixel922);

  pixel1923 = new Sprite(10,10,19,19);
  creatingPixels(pixel923);

  pixel1924 = new Sprite(10,10,19,19);
  creatingPixels(pixel924);

  pixel1925 = new Sprite(10,10,19,19);
  creatingPixels(pixel925);

  pixel1926 = new Sprite(10,10,19,19);
  creatingPixels(pixel926);

  pixel1927 = new Sprite(10,10,19,19);
  creatingPixels(pixel927);

  pixel1928 = new Sprite(10,10,19,19);
  creatingPixels(pixel928);

  pixel1929 = new Sprite(10,10,19,19);
  creatingPixels(pixel929);

  pixel1930 = new Sprite(10,10,19,19);
  creatingPixels(pixel930);

  pixel1931 = new Sprite(10,10,19,19);
  creatingPixels(pixel931);

  pixel1932 = new Sprite(10,10,19,19);
  creatingPixels(pixel932);

  pixel1933 = new Sprite(10,10,19,19);
  creatingPixels(pixel933);

  pixel1934 = new Sprite(10,10,19,19);
  creatingPixels(pixel934);

  pixel1935 = new Sprite(10,10,19,19);
  creatingPixels(pixel935);

  pixel1936 = new Sprite(10,10,19,19);
  creatingPixels(pixel936);

  pixel1937 = new Sprite(10,10,19,19);
  creatingPixels(pixel937);

  pixel1938 = new Sprite(10,10,19,19);
  creatingPixels(pixel938);

  pixel1939 = new Sprite(10,10,19,19);
  creatingPixels(pixel939);

  pixel1940 = new Sprite(10,10,19,19);
  creatingPixels(pixel940);

  pixel1941 = new Sprite(10,10,19,19);
  creatingPixels(pixel941);

  pixel1942 = new Sprite(10,10,19,19);
  creatingPixels(pixel942);

  pixel1943 = new Sprite(10,10,19,19);
  creatingPixels(pixel943);

  pixel1944 = new Sprite(10,10,19,19);
  creatingPixels(pixel944);

  pixel1945 = new Sprite(10,10,19,19);
  creatingPixels(pixel945);

  pixel1946 = new Sprite(10,10,19,19);
  creatingPixels(pixel946);

  pixel1947 = new Sprite(10,10,19,19);
  creatingPixels(pixel947);

  pixel1948 = new Sprite(10,10,19,19);
  creatingPixels(pixel948);

  pixel1949 = new Sprite(10,10,19,19);
  creatingPixels(pixel949);

  pixel1950 = new Sprite(10,10,19,19);
  creatingPixels(pixel950);

  pixel1951 = new Sprite(10,10,19,19);
  creatingPixels(pixel951);

  pixel1952 = new Sprite(10,10,19,19);
  creatingPixels(pixel952);

  pixel1953 = new Sprite(10,10,19,19);
  creatingPixels(pixel953);

  pixel1954 = new Sprite(10,10,19,19);
  creatingPixels(pixel954);

  pixel1955 = new Sprite(10,10,19,19);
  creatingPixels(pixel955);

  pixel1956 = new Sprite(10,10,19,19);
  creatingPixels(pixel956);

  pixel1957 = new Sprite(10,10,19,19);
  creatingPixels(pixel957);

  pixel1958 = new Sprite(10,10,19,19);
  creatingPixels(pixel958);

  pixel1959 = new Sprite(10,10,19,19);
  creatingPixels(pixel959);

  pixel1960 = new Sprite(10,10,19,19);
  creatingPixels(pixel960);

  pixel1961 = new Sprite(10,10,19,19);
  creatingPixels(pixel961);

  pixel1962 = new Sprite(10,10,19,19);
  creatingPixels(pixel962);

  pixel1963 = new Sprite(10,10,19,19);
  creatingPixels(pixel963);

  pixel1964 = new Sprite(10,10,19,19);
  creatingPixels(pixel964);

  pixel1965 = new Sprite(10,10,19,19);
  creatingPixels(pixel965);

  pixel1966 = new Sprite(10,10,19,19);
  creatingPixels(pixel966);

  pixel1967 = new Sprite(10,10,19,19);
  creatingPixels(pixel967);

  pixel1968 = new Sprite(10,10,19,19);
  creatingPixels(pixel968);

  pixel1969 = new Sprite(10,10,19,19);
  creatingPixels(pixel969);

  pixel1970 = new Sprite(10,10,19,19);
  creatingPixels(pixel970);

  pixel1971 = new Sprite(10,10,19,19);
  creatingPixels(pixel971);

  pixel1972 = new Sprite(10,10,19,19);
  creatingPixels(pixel972);

  pixel1973 = new Sprite(10,10,19,19);
  creatingPixels(pixel973);

  pixel1974 = new Sprite(10,10,19,19);
  creatingPixels(pixel974);

  pixel1975 = new Sprite(10,10,19,19);
  creatingPixels(pixel975);

  pixel1976 = new Sprite(10,10,19,19);
  creatingPixels(pixel976);

  pixel1977 = new Sprite(10,10,19,19);
  creatingPixels(pixel977);

  pixel1978 = new Sprite(10,10,19,19);
  creatingPixels(pixel978);

  pixel1979 = new Sprite(10,10,19,19);
  creatingPixels(pixel979);

  pixel1980 = new Sprite(10,10,19,19);
  creatingPixels(pixel980);

  pixel1981 = new Sprite(10,10,19,19);
  creatingPixels(pixel981);

  pixel1982 = new Sprite(10,10,19,19);
  creatingPixels(pixel982);

  pixel1983 = new Sprite(10,10,19,19);
  creatingPixels(pixel983);

  pixel1984 = new Sprite(10,10,19,19);
  creatingPixels(pixel984);

  pixel1985 = new Sprite(10,10,19,19);
  creatingPixels(pixel985);

  pixel1986 = new Sprite(10,10,19,19);
  creatingPixels(pixel986);

  pixel1987 = new Sprite(10,10,19,19);
  creatingPixels(pixel987);

  pixel1988 = new Sprite(10,10,19,19);
  creatingPixels(pixel988);

  pixel1989 = new Sprite(10,10,19,19);
  creatingPixels(pixel989);

  pixel1990 = new Sprite(10,10,19,19);
  creatingPixels(pixel990);

  pixel1991 = new Sprite(10,10,19,19);
  creatingPixels(pixel991);

  pixel1992 = new Sprite(10,10,19,19);
  creatingPixels(pixel992);

  pixel1993 = new Sprite(10,10,19,19);
  creatingPixels(pixel993);

  pixel1994 = new Sprite(10,10,19,19);
  creatingPixels(pixel994);

  pixel1995 = new Sprite(10,10,19,19);
  creatingPixels(pixel995);

  pixel1996 = new Sprite(10,10,19,19);
  creatingPixels(pixel996);

  pixel1997 = new Sprite(10,10,19,19);
  creatingPixels(pixel997);

  pixel1998 = new Sprite(10,10,19,19);
  creatingPixels(pixel998);

  pixel1999 = new Sprite(10,10,19,19);
  creatingPixels(pixel999);

  pixel2000 = new Sprite(10,10,19,19);
  creatingPixels(pixel1000);

  pixel2001 = new Sprite(10,10,19,19);
  creatingPixels(pixel1001);

  pixel2002 = new Sprite(10,10,19,19);
  creatingPixels(pixel1002);

  pixel2003 = new Sprite(10,10,19,19);
  creatingPixels(pixel1003);

  pixel2004 = new Sprite(10,10,19,19);
  creatingPixels(pixel1004);

  pixel2005 = new Sprite(10,10,19,19);
  creatingPixels(pixel1005);

  pixel2006 = new Sprite(10,10,19,19);
  creatingPixels(pixel1006);

  pixel2007 = new Sprite(10,10,19,19);
  creatingPixels(pixel1007);

  pixel2008 = new Sprite(10,10,19,19);
  creatingPixels(pixel1008);

  pixel2009 = new Sprite(10,10,19,19);
  creatingPixels(pixel1009);

  pixel2010 = new Sprite(10,10,19,19);
  creatingPixels(pixel1010);
  
  pixel2011 = new Sprite(10,10,19,19);
  creatingPixels(pixel1011);

  pixel2012 = new Sprite(10,10,19,19);
  creatingPixels(pixel1012);

  pixel2013 = new Sprite(10,10,19,19);
  creatingPixels(pixel1013);

  pixel2014 = new Sprite(10,10,19,19);
  creatingPixels(pixel1014);

  pixel2015 = new Sprite(10,10,19,19);
  creatingPixels(pixel1015);

  pixel2016 = new Sprite(10,10,19,19);
  creatingPixels(pixel1016);

  pixel2017 = new Sprite(10,10,19,19);
  creatingPixels(pixel1017);

  pixel2018 = new Sprite(10,10,19,19);
  creatingPixels(pixel1018);

  pixel2019 = new Sprite(10,10,19,19);
  creatingPixels(pixel1019);

  pixel2020 = new Sprite(10,10,19,19);
  creatingPixels(pixel1020);

  pixel2021 = new Sprite(10,10,19,19);
  creatingPixels(pixel1021);

  pixel2022 = new Sprite(10,10,19,19);
  creatingPixels(pixel1022);

  pixel2023 = new Sprite(10,10,19,19);
  creatingPixels(pixel1023);

  pixel2024 = new Sprite(10,10,19,19);
  creatingPixels(pixel1024);

  pixel2025 = new Sprite(10,10,19,19);
  creatingPixels(pixel1025);

  pixel2026 = new Sprite(10,10,19,19);
  creatingPixels(pixel1026);

  pixel2027 = new Sprite(10,10,19,19);
  creatingPixels(pixel1027);

  pixel2028 = new Sprite(10,10,19,19);
  creatingPixels(pixel1028);

  pixel2029 = new Sprite(10,10,19,19);
  creatingPixels(pixel1029);

  pixel2030 = new Sprite(10,10,19,19);
  creatingPixels(pixel1030);

  pixel2031 = new Sprite(10,10,19,19);
  creatingPixels(pixel1031);

  pixel2032 = new Sprite(10,10,19,19);
  creatingPixels(pixel1032);

  pixel2033 = new Sprite(10,10,19,19);
  creatingPixels(pixel1033);

  pixel2034 = new Sprite(10,10,19,19);
  creatingPixels(pixel1034);

  pixel2035 = new Sprite(10,10,19,19);
  creatingPixels(pixel1035);

  pixel2036 = new Sprite(10,10,19,19);
  creatingPixels(pixel1036);

  pixel2037 = new Sprite(10,10,19,19);
  creatingPixels(pixel1037);

  pixel2038 = new Sprite(10,10,19,19);
  creatingPixels(pixel1038);

  pixel2039 = new Sprite(10,10,19,19);
  creatingPixels(pixel1039);

  pixel2040 = new Sprite(10,10,19,19);
  creatingPixels(pixel1040);
  
  pixel2041 = new Sprite(10,10,19,19);
  creatingPixels(pixel1041);

  pixel2042 = new Sprite(10,10,19,19);
  creatingPixels(pixel1042);

  pixel2043 = new Sprite(10,10,19,19);
  creatingPixels(pixel1043);

  pixel2044 = new Sprite(10,10,19,19);
  creatingPixels(pixel1044);

  pixel2045 = new Sprite(10,10,19,19);
  creatingPixels(pixel1045);

  pixel2046 = new Sprite(10,10,19,19);
  creatingPixels(pixel1046);

  pixel2047 = new Sprite(10,10,19,19);
  creatingPixels(pixel1047);

  pixel2048 = new Sprite(10,10,19,19);
  creatingPixels(pixel1048);

  pixel2049 = new Sprite(10,10,19,19);
  creatingPixels(pixel1049);

  pixel2050 = new Sprite(10,10,19,19);
  creatingPixels(pixel1050);

  pixel2051 = new Sprite(10,10,19,19);
  creatingPixels(pixel1051);

  pixel2052 = new Sprite(10,10,19,19);
  creatingPixels(pixel1052);

  pixel2053 = new Sprite(10,10,19,19);
  creatingPixels(pixel1053);

  pixel2054 = new Sprite(10,10,19,19);
  creatingPixels(pixel1054);

  pixel2055 = new Sprite(10,10,19,19);
  creatingPixels(pixel1055);

  pixel2056 = new Sprite(10,10,19,19);
  creatingPixels(pixel1056);

  pixel2057 = new Sprite(10,10,19,19);
  creatingPixels(pixel1057);

  pixel2058 = new Sprite(10,10,19,19);
  creatingPixels(pixel1058);

  pixel2059 = new Sprite(10,10,19,19);
  creatingPixels(pixel1059);

  pixel2060 = new Sprite(10,10,19,19);
  creatingPixels(pixel1060);

  pixel2061 = new Sprite(10,10,19,19);
  creatingPixels(pixel1061);

  pixel2062 = new Sprite(10,10,19,19);
  creatingPixels(pixel1062);

  pixel2063 = new Sprite(10,10,19,19);
  creatingPixels(pixel1063);

  pixel2064 = new Sprite(10,10,19,19);
  creatingPixels(pixel1064);

  pixel2065 = new Sprite(10,10,19,19);
  creatingPixels(pixel1065);

  pixel2066 = new Sprite(10,10,19,19);
  creatingPixels(pixel1066);

  pixel2067 = new Sprite(10,10,19,19);
  creatingPixels(pixel1067);

  pixel2068 = new Sprite(10,10,19,19);
  creatingPixels(pixel1068);

  pixel2069 = new Sprite(10,10,19,19);
  creatingPixels(pixel1069);

  pixel2070 = new Sprite(10,10,19,19);
  creatingPixels(pixel1070);
  
  pixel2071 = new Sprite(10,10,19,19);
  creatingPixels(pixel1071);

  pixel2072 = new Sprite(10,10,19,19);
  creatingPixels(pixel1072);

  pixel2073 = new Sprite(10,10,19,19);
  creatingPixels(pixel1073);

  pixel2074 = new Sprite(10,10,19,19);
  creatingPixels(pixel1074);

  pixel2075 = new Sprite(10,10,19,19);
  creatingPixels(pixel1075);

  pixel2076 = new Sprite(10,10,19,19);
  creatingPixels(pixel1076);

  pixel2077 = new Sprite(10,10,19,19);
  creatingPixels(pixel1077);

  pixel2078 = new Sprite(10,10,19,19);
  creatingPixels(pixel1078);

  pixel2079 = new Sprite(10,10,19,19);
  creatingPixels(pixel1079);

  pixel2080 = new Sprite(10,10,19,19);
  creatingPixels(pixel1080);

  pixel2081 = new Sprite(10,10,19,19);
  creatingPixels(pixel1081);

  pixel2082 = new Sprite(10,10,19,19);
  creatingPixels(pixel1082);

  pixel2083 = new Sprite(10,10,19,19);
  creatingPixels(pixel1083);

  pixel2084 = new Sprite(10,10,19,19);
  creatingPixels(pixel1084);

  pixel2085 = new Sprite(10,10,19,19);
  creatingPixels(pixel1085);

  pixel2086 = new Sprite(10,10,19,19);
  creatingPixels(pixel1086);

  pixel2087 = new Sprite(10,10,19,19);
  creatingPixels(pixel1087);

  pixel2088 = new Sprite(10,10,19,19);
  creatingPixels(pixel1088);

  pixel2089 = new Sprite(10,10,19,19);
  creatingPixels(pixel1089);

  pixel2090 = new Sprite(10,10,19,19);
  creatingPixels(pixel1090);

  pixel2091 = new Sprite(10,10,19,19);
  creatingPixels(pixel1091);

  pixel2092 = new Sprite(10,10,19,19);
  creatingPixels(pixel1092);

  pixel2093 = new Sprite(10,10,19,19);
  creatingPixels(pixel1093);

  pixel2094 = new Sprite(10,10,19,19);
  creatingPixels(pixel1094);

  pixel2095 = new Sprite(10,10,19,19);
  creatingPixels(pixel1095);

  pixel2096 = new Sprite(10,10,19,19);
  creatingPixels(pixel1096);

  pixel2097 = new Sprite(10,10,19,19);
  creatingPixels(pixel1097);

  pixel2098 = new Sprite(10,10,19,19);
  creatingPixels(pixel1098);

  pixel2099 = new Sprite(10,10,19,19);
  creatingPixels(pixel1099);

  pixel2100 = new Sprite(10,10,19,19);
  creatingPixels(pixel2100);

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

Position(pixel1801, 1, 1);
Position(pixel1802, 2, 1);
Position(pixel1803, 3, 1);
Position(pixel1804, 4, 1);
Position(pixel1805, 5, 1);
Position(pixel1806, 6, 1);
Position(pixel1807, 7, 1);
Position(pixel1808, 8, 1);
Position(pixel1809, 9, 1);
Position(pixel1810, 10, 1);
Position(pixel1811, 11, 1);
Position(pixel1812, 12, 1);
Position(pixel1813, 13, 1);
Position(pixel1814, 14, 1);
Position(pixel1815, 15, 1);
Position(pixel1816, 16, 1);
Position(pixel1817, 17, 1);
Position(pixel1818, 18, 1);
Position(pixel1819, 19, 1);
Position(pixel1820, 20, 1);
Position(pixel1821, 21, 1);
Position(pixel1822, 22, 1);
Position(pixel1823, 23, 1);
Position(pixel1824, 24, 1);
Position(pixel1825, 25, 1);
Position(pixel1826, 26, 1);
Position(pixel1827, 27, 1);
Position(pixel1828, 28, 1);
Position(pixel1829, 29, 1);
Position(pixel1830, 30, 1);
//////////////////////////
//row2
Position(pixel1831, 1, 2);
Position(pixel1832, 2, 2);
Position(pixel1833, 3, 2);
Position(pixel1834, 4, 2);
Position(pixel1835, 5, 2);
Position(pixel1836, 6, 2);
Position(pixel1837, 7, 2);
Position(pixel1838, 8, 2);
Position(pixel1839, 9, 2);
Position(pixel1840, 10, 2);
Position(pixel1841, 11, 2);
Position(pixel1842, 12, 2);
Position(pixel1843, 13, 2);
Position(pixel1844, 14, 2);
Position(pixel1845, 15, 2);
Position(pixel1846, 16, 2);
Position(pixel1847, 17, 2);
Position(pixel1848, 18, 2);
Position(pixel1849, 19, 2);
Position(pixel1850, 20, 2);
Position(pixel1851, 21, 2);
Position(pixel1852, 22, 2);
Position(pixel1853, 23, 2);
Position(pixel1854, 24, 2);
Position(pixel1855, 25, 2);
Position(pixel1856, 26, 2);
Position(pixel1857, 27, 2);
Position(pixel1858, 28, 2);
Position(pixel1859, 29, 2);
Position(pixel1860, 30, 2);


//row 3////////////////////////////////////////
Position(pixel1861, 1, 3);
Position(pixel1862, 2, 3);
Position(pixel1863, 3, 3);
Position(pixel1864, 4, 3);
Position(pixel1865, 5, 3);
Position(pixel1866, 6, 3);
Position(pixel1867, 7, 3);
Position(pixel1868, 8, 3);
Position(pixel1869, 9, 3);
Position(pixel1870, 10, 3);
Position(pixel1871, 11, 3);
Position(pixel1872, 12, 3);
Position(pixel1873, 13, 3);
Position(pixel1874, 14, 3);
Position(pixel1875, 15, 3);
Position(pixel1876, 16, 3);
Position(pixel1877, 17, 3);
Position(pixel1878, 18, 3);
Position(pixel1879, 19, 3);
Position(pixel1880, 20, 3);
Position(pixel1881, 21, 3);
Position(pixel1882, 22, 3);
Position(pixel1883, 23, 3);
Position(pixel1884, 24, 3);
Position(pixel1885, 25, 3);
Position(pixel1886, 26, 3);
Position(pixel1887, 27, 3);
Position(pixel1888, 28, 3);
Position(pixel1889, 29, 3);
Position(pixel1890, 30, 3);

//row4
Position(pixel1891, 1, 4);
Position(pixel1892, 2, 4);
Position(pixel1893, 3, 4);
Position(pixel1894, 4, 4);
Position(pixel1895, 5, 4);
Position(pixel1896, 6, 4);
Position(pixel1897, 7, 4);
Position(pixel1898, 8, 4);
Position(pixel1899, 9, 4);
Position(pixel1900, 10, 4);
Position(pixel1901, 11, 4);
Position(pixel1902, 12, 4);
Position(pixel1903, 13, 4);
Position(pixel1904, 14, 4);
Position(pixel1905, 15, 4);
Position(pixel1906, 16, 4);
Position(pixel1907, 17, 4);
Position(pixel1908, 18, 4);
Position(pixel1909, 19, 4);
Position(pixel1910, 20, 4);
Position(pixel1911, 21, 4);
Position(pixel1912, 22, 4);
Position(pixel1913, 23, 4);
Position(pixel1914, 24, 4);
Position(pixel1915, 25, 4);
Position(pixel1916, 26, 4);
Position(pixel1917, 27, 4);
Position(pixel1918, 28, 4);
Position(pixel1919, 29, 4);
Position(pixel1920, 30, 4);


//row5///////////////////////////////
Position(pixel1921, 1, 5);
Position(pixel1922, 2, 5);
Position(pixel1923, 3, 5);
Position(pixel1924, 4, 5);
Position(pixel1925, 5, 5);
Position(pixel1926, 6, 5);
Position(pixel1927, 7, 5);
Position(pixel1928, 8, 5);
Position(pixel1929, 9, 5);
Position(pixel1930, 10, 5);
Position(pixel1931, 11, 5);
Position(pixel1932, 12, 5);
Position(pixel1933, 13, 5);
Position(pixel1934, 14, 5);
Position(pixel1935, 15, 5);
Position(pixel1936, 16, 5);
Position(pixel1937, 17, 5);
Position(pixel1938, 18, 5);
Position(pixel1939, 19, 5);
Position(pixel1940, 20, 5);
Position(pixel1941, 21, 5);
Position(pixel1942, 22, 5);
Position(pixel1943, 23, 5);
Position(pixel1944, 24, 5);
Position(pixel1945, 25, 5);
Position(pixel1946, 26, 5);
Position(pixel1947, 27, 5);
Position(pixel1948, 28, 5);
Position(pixel1949, 29, 5);
Position(pixel1950, 30, 5);
////////////r0w 6/////////////////////////////////
x = 1
Position(pixel1951, 1, 5+x);
Position(pixel1952, 2, 5+x);
Position(pixel1953, 3, 5+x);
Position(pixel1954, 4, 5+x);
Position(pixel1955, 5, 5+x);
Position(pixel1956, 6, 5+x);
Position(pixel1957, 7, 5+x);
Position(pixel1958, 8, 5+x);
Position(pixel1959, 9, 5+x);
Position(pixel1960, 10, 5+x);
Position(pixel1961, 11, 5+x);
Position(pixel1962, 12, 5+x);
Position(pixel1963, 13, 5+x);
Position(pixel1964, 14, 5+x);
Position(pixel1965, 15, 5+x);
Position(pixel1966, 16, 5+x);
Position(pixel1967, 17, 5+x);
Position(pixel1968, 18, 5+x);
Position(pixel1969, 19, 5+x);
Position(pixel1970, 20, 5+x);
Position(pixel1971, 21, 5+x);
Position(pixel1972, 22, 5+x);
Position(pixel1973, 23, 5+x);
Position(pixel1974, 24, 5+x);
Position(pixel1975, 25, 5+x);
Position(pixel1976, 26, 5+x);
Position(pixel1977, 27, 5+x);
Position(pixel1978, 28, 5+x);
Position(pixel1979, 29, 5+x);
Position(pixel1980, 30, 5+x);

////////////r0w 7/////////////////////////////////
x = 2
Position(pixel1981, 1, 5+x);
Position(pixel1982, 2, 5+x);
Position(pixel1983, 3, 5+x);
Position(pixel1984, 4, 5+x);
Position(pixel1985, 5, 5+x);
Position(pixel1986, 6, 5+x);
Position(pixel1987, 7, 5+x);
Position(pixel1988, 8, 5+x);
Position(pixel1989, 9, 5+x);
Position(pixel1990, 10, 5+x);
Position(pixel1991, 11, 5+x);
Position(pixel1992, 12, 5+x);
Position(pixel1993, 13, 5+x);
Position(pixel1994, 14, 5+x);
Position(pixel1995, 15, 5+x);
Position(pixel1996, 16, 5+x);
Position(pixel1997, 17, 5+x);
Position(pixel1998, 18, 5+x);
Position(pixel1999, 19, 5+x);
Position(pixel2000, 20, 5+x);
Position(pixel2001, 21, 5+x);
Position(pixel2002, 22, 5+x);
Position(pixel2003, 23, 5+x);
Position(pixel2004, 24, 5+x);
Position(pixel2005, 25, 5+x);
Position(pixel2006, 26, 5+x);
Position(pixel2007, 27, 5+x);
Position(pixel2008, 28, 5+x);
Position(pixel2009, 29, 5+x);
Position(pixel2010, 30, 5+x);

////////////r0w 8/////////////////////////////////
x = 3
Position(pixel2011, 1, 5+x);
Position(pixel2012, 2, 5+x);
Position(pixel2013, 3, 5+x);
Position(pixel2014, 4, 5+x);
Position(pixel2015, 5, 5+x);
Position(pixel2016, 6, 5+x);
Position(pixel2017, 7, 5+x);
Position(pixel2018, 8, 5+x);
Position(pixel2019, 9, 5+x);
Position(pixel2020, 10, 5+x);
Position(pixel2021, 11, 5+x);
Position(pixel2022, 12, 5+x);
Position(pixel2023, 13, 5+x);
Position(pixel2024, 14, 5+x);
Position(pixel2025, 15, 5+x);
Position(pixel2026, 16, 5+x);
Position(pixel2027, 17, 5+x);
Position(pixel2028, 18, 5+x);
Position(pixel2029, 19, 5+x);
Position(pixel2030, 20, 5+x);
Position(pixel2031, 21, 5+x);
Position(pixel2032, 22, 5+x);
Position(pixel2033, 23, 5+x);
Position(pixel2034, 24, 5+x);
Position(pixel2035, 25, 5+x);
Position(pixel2036, 26, 5+x);
Position(pixel2037, 27, 5+x);
Position(pixel2038, 28, 5+x);
Position(pixel2039, 29, 5+x);
Position(pixel2040, 30, 5+x);

////////////r0w 9/////////////////////////////////
x = 4
Position(pixel2041, 1, 5+x);
Position(pixel2042, 2, 5+x);
Position(pixel2043, 3, 5+x);
Position(pixel2044, 4, 5+x);
Position(pixel2045, 5, 5+x);
Position(pixel2046, 6, 5+x);
Position(pixel2047, 7, 5+x);
Position(pixel2048, 8, 5+x);
Position(pixel2049, 9, 5+x);
Position(pixel2050, 10, 5+x);
Position(pixel2051, 11, 5+x);
Position(pixel2052, 12, 5+x);
Position(pixel2053, 13, 5+x);
Position(pixel2054, 14, 5+x);
Position(pixel2055, 15, 5+x);
Position(pixel2056, 16, 5+x);
Position(pixel2057, 17, 5+x);
Position(pixel2058, 18, 5+x);
Position(pixel2059, 19, 5+x);
Position(pixel2060, 20, 5+x);
Position(pixel2061, 21, 5+x);
Position(pixel2062, 22, 5+x);
Position(pixel2063, 23, 5+x);
Position(pixel2064, 24, 5+x);
Position(pixel2065, 25, 5+x);
Position(pixel2066, 26, 5+x);
Position(pixel2067, 27, 5+x);
Position(pixel2068, 28, 5+x);
Position(pixel2069, 29, 5+x);
Position(pixel2070, 30, 5+x);

////////////r0w 10/////////////////////////////////
x = 5
Position(pixel2071, 1, 5+x);
Position(pixel2072, 2, 5+x);
Position(pixel2073, 3, 5+x);
Position(pixel2074, 4, 5+x);
Position(pixel2075, 5, 5+x);
Position(pixel2076, 6, 5+x);
Position(pixel2077, 7, 5+x);
Position(pixel2078, 8, 5+x);
Position(pixel2079, 9, 5+x);
Position(pixel2080, 10, 5+x);
Position(pixel2081, 11, 5+x);
Position(pixel2082, 12, 5+x);
Position(pixel2083, 13, 5+x);
Position(pixel2084, 14, 5+x);
Position(pixel2085, 15, 5+x);
Position(pixel2086, 16, 5+x);
Position(pixel2087, 17, 5+x);
Position(pixel2088, 18, 5+x);
Position(pixel2089, 19, 5+x);
Position(pixel2090, 20, 5+x);
Position(pixel2091, 21, 5+x);
Position(pixel2092, 22, 5+x);
Position(pixel2093, 23, 5+x);
Position(pixel2094, 24, 5+x);
Position(pixel2095, 25, 5+x);
Position(pixel2096, 26, 5+x);
Position(pixel2097, 27, 5+x);
Position(pixel2098, 28, 5+x);
Position(pixel2099, 29, 5+x);
Position(pixel2100, 30, 5+x);

////////////r0w 11/////////////////////////////////
x = 6
Position(pixel2101, 1, 5+x);
Position(pixel2102, 2, 5+x);
Position(pixel2103, 3, 5+x);
Position(pixel2104, 4, 5+x);
Position(pixel2105, 5, 5+x);
Position(pixel2106, 6, 5+x);
Position(pixel2107, 7, 5+x);
Position(pixel2108, 8, 5+x);
Position(pixel2109, 9, 5+x);
Position(pixel2110, 10, 5+x);
Position(pixel2111, 11, 5+x);
Position(pixel2112, 12, 5+x);
Position(pixel2113, 13, 5+x);
Position(pixel2114, 14, 5+x);
Position(pixel2115, 15, 5+x);
Position(pixel2116, 16, 5+x);
Position(pixel2117, 17, 5+x);
Position(pixel2118, 18, 5+x);
Position(pixel2119, 19, 5+x);
Position(pixel2120, 20, 5+x);
Position(pixel2121, 21, 5+x);
Position(pixel2122, 22, 5+x);
Position(pixel2123, 23, 5+x);
Position(pixel2124, 24, 5+x);
Position(pixel2125, 25, 5+x);
Position(pixel2126, 26, 5+x);
Position(pixel2127, 27, 5+x);
Position(pixel2128, 28, 5+x);
Position(pixel2129, 29, 5+x);
Position(pixel2130, 30, 5+x);
////////////r0w 12////////////////////////////////
 = 7
Position(pixel2131, 1, 5+x);
Position(pixel2132, 2, 5+x);
Position(pixel2133, 3, 5+x);
Position(pixel2134, 4, 5+x);
Position(pixel2135, 5, 5+x);
Position(pixel2136, 6, 5+x);
Position(pixel2137, 7, 5+x);
Position(pixel2138, 8, 5+x);
Position(pixel2139, 9, 5+x);
Position(pixel2140, 10, 5+x);
Position(pixel2141, 11, 5+x);
Position(pixel2142, 12, 5+x);
Position(pixel2143, 13, 5+x);
Position(pixel2144, 14, 5+x);
Position(pixel2145, 15, 5+x);
Position(pixel2146, 16, 5+x);
Position(pixel2147, 17, 5+x);
Position(pixel2148, 18, 5+x);
Position(pixel2149, 19, 5+x);
Position(pixel2150, 20, 5+x);
Position(pixel2151, 21, 5+x);
Position(pixel2152, 22, 5+x);
Position(pixel2153, 23, 5+x);
Position(pixel2154, 24, 5+x);
Position(pixel2155, 25, 5+x);
Position(pixel2156, 26, 5+x);
Position(pixel2157, 27, 5+x);
Position(pixel2158, 28, 5+x);
Position(pixel2159, 29, 5+x);
Position(pixel2160, 30, 5+x);

////////////r0w 13/////////////////////////////////
x = 8
Position(pixel2161, 1, 5+x);
Position(pixel2162, 2, 5+x);
Position(pixel2163, 3, 5+x);
Position(pixel2164, 4, 5+x);
Position(pixel2165, 5, 5+x);
Position(pixel2166, 6, 5+x);
Position(pixel2167, 7, 5+x);
Position(pixel2168, 8, 5+x);
Position(pixel2169, 9, 5+x);
Position(pixel2170, 10, 5+x);
Position(pixel2171, 11, 5+x);
Position(pixel2172, 12, 5+x);
Position(pixel2173, 13, 5+x);
Position(pixel2174, 14, 5+x);
Position(pixel2175, 15, 5+x);
Position(pixel2176, 16, 5+x);
Position(pixel2177, 17, 5+x);
Position(pixel2178, 18, 5+x);
Position(pixel2179, 19, 5+x);
Position(pixel2180, 20, 5+x);
Position(pixel2181, 21, 5+x);
Position(pixel2182, 22, 5+x);
Position(pixel2183, 23, 5+x);
Position(pixel2184, 24, 5+x);
Position(pixel2185, 25, 5+x);
Position(pixel2186, 26, 5+x);
Position(pixel2187, 27, 5+x);
Position(pixel2188, 28, 5+x);
Position(pixel2189, 29, 5+x);
Position(pixel2190, 30, 5+x);

////////////r0w 14/////////////////////////////////
x = 9
Position(pixel2191, 1, 5+x);
Position(pixel2192, 2, 5+x);
Position(pixel2193, 3, 5+x);
Position(pixel2194, 4, 5+x);
Position(pixel2195, 5, 5+x);
Position(pixel2196, 6, 5+x);
Position(pixel2197, 7, 5+x);
Position(pixel2198, 8, 5+x);
Position(pixel2199, 9, 5+x);
Position(pixel2200, 10, 5+x);
Position(pixel2201, 11, 5+x);
Position(pixel2202, 12, 5+x);
Position(pixel2203, 13, 5+x);
Position(pixel2204, 14, 5+x);
Position(pixel2205, 15, 5+x);
Position(pixel2206, 16, 5+x);
Position(pixel2207, 17, 5+x);
Position(pixel2208, 18, 5+x);
Position(pixel2209, 19, 5+x);
Position(pixel2210, 20, 5+x);
Position(pixel2211, 21, 5+x);
Position(pixel2212, 22, 5+x);
Position(pixel2213, 23, 5+x);
Position(pixel2214, 24, 5+x);
Position(pixel2215, 25, 5+x);
Position(pixel2216, 26, 5+x);
Position(pixel2217, 27, 5+x);
Position(pixel2218, 28, 5+x);
Position(pixel2219, 29, 5+x);
Position(pixel2220, 30, 5+x);

////////////r0w 15/////////////////////////////////
x = 10
Position(pixel2221, 1, 5+x);
Position(pixel2222, 2, 5+x);
Position(pixel2223, 3, 5+x);
Position(pixel2224, 4, 5+x);
Position(pixel2225, 5, 5+x);
Position(pixel2226, 6, 5+x);
Position(pixel2227, 7, 5+x);
Position(pixel2228, 8, 5+x);
Position(pixel2229, 9, 5+x);
Position(pixel2230, 10, 5+x);
Position(pixel2231, 11, 5+x);
Position(pixel2232, 12, 5+x);
Position(pixel2233, 13, 5+x);
Position(pixel2234, 14, 5+x);
Position(pixel2235, 15, 5+x);
Position(pixel2236, 16, 5+x);
Position(pixel2237, 17, 5+x);
Position(pixel2238, 18, 5+x);
Position(pixel2239, 19, 5+x);
Position(pixel2240, 20, 5+x);
Position(pixel2241, 21, 5+x);
Position(pixel2242, 22, 5+x);
Position(pixel2243, 23, 5+x);
Position(pixel2244, 24, 5+x);
Position(pixel2245, 25, 5+x);
Position(pixel2246, 26, 5+x);
Position(pixel2247, 27, 5+x);
Position(pixel2248, 28, 5+x);
Position(pixel2249, 29, 5+x);
Position(pixel2250, 30, 5+x);

////////////r0w 16/////////////////////////////////
x = 11
Position(pixel2251, 1, 5+x);
Position(pixel2252, 2, 5+x);
Position(pixel2253, 3, 5+x);
Position(pixel2254, 4, 5+x);
Position(pixel2255, 5, 5+x);
Position(pixel2256, 6, 5+x);
Position(pixel2257, 7, 5+x);
Position(pixel2258, 8, 5+x);
Position(pixel2259, 9, 5+x);
Position(pixel2260, 10, 5+x);
Position(pixel2261, 11, 5+x);
Position(pixel2262, 12, 5+x);
Position(pixel2263, 13, 5+x);
Position(pixel2264, 14, 5+x);
Position(pixel2265, 15, 5+x);
Position(pixel2266, 16, 5+x);
Position(pixel2267, 17, 5+x);
Position(pixel2268, 18, 5+x);
Position(pixel2269, 19, 5+x);
Position(pixel2270, 20, 5+x);
Position(pixel2271, 21, 5+x);
Position(pixel2272, 22, 5+x);
Position(pixel2273, 23, 5+x);
Position(pixel2274, 24, 5+x);
Position(pixel2275, 25, 5+x);
Position(pixel2276, 26, 5+x);
Position(pixel2277, 27, 5+x);
Position(pixel2278, 28, 5+x);
Position(pixel2279, 29, 5+x);
Position(pixel2280, 30, 5+x);

////////////r0w 17/////////////////////////////////
x = 12
Position(pixel2281, 1, 5+x);
Position(pixel2282, 2, 5+x);
Position(pixel2283, 3, 5+x);
Position(pixel2284, 4, 5+x);
Position(pixel2285, 5, 5+x);
Position(pixel2286, 6, 5+x);
Position(pixel2287, 7, 5+x);
Position(pixel2288, 8, 5+x);
Position(pixel2289, 9, 5+x);
Position(pixel2290, 10, 5+x);
Position(pixel2291, 11, 5+x);
Position(pixel2292, 12, 5+x);
Position(pixel2293, 13, 5+x);
Position(pixel2294, 14, 5+x);
Position(pixel2295, 15, 5+x);
Position(pixel2296, 16, 5+x);
Position(pixel2297, 17, 5+x);
Position(pixel2298, 18, 5+x);
Position(pixel2299, 19, 5+x);
Position(pixel2300, 20, 5+x);
Position(pixel2301, 21, 5+x);
Position(pixel2302, 22, 5+x);
Position(pixel2303, 23, 5+x);
Position(pixel2304, 24, 5+x);
Position(pixel2305, 25, 5+x);
Position(pixel2306, 26, 5+x);
Position(pixel2307, 27, 5+x);
Position(pixel2308, 28, 5+x);
Position(pixel2309, 29, 5+x);
Position(pixel2310, 30, 5+x);
////////////r0w 18/////////////////////////////////
x = 13
Position(pixel2311, 1, 5+x);
Position(pixel2312, 2, 5+x);
Position(pixel2313, 3, 5+x);
Position(pixel2314, 4, 5+x);
Position(pixel2315, 5, 5+x);
Position(pixel2316, 6, 5+x);
Position(pixel2317, 7, 5+x);
Position(pixel2318, 8, 5+x);
Position(pixel2319, 9, 5+x);
Position(pixel2320, 10, 5+x);
Position(pixel2321, 11, 5+x);
Position(pixel2322, 12, 5+x);
Position(pixel2323, 13, 5+x);
Position(pixel2324, 14, 5+x);
Position(pixel2325, 15, 5+x);
Position(pixel2326, 16, 5+x);
Position(pixel2327, 17, 5+x);
Position(pixel2328, 18, 5+x);
Position(pixel2329, 19, 5+x);
Position(pixel2330, 20, 5+x);
Position(pixel2331, 21, 5+x);
Position(pixel2332, 22, 5+x);
Position(pixel2333, 23, 5+x);
Position(pixel2334, 24, 5+x);
Position(pixel2335, 25, 5+x);
Position(pixel2336, 26, 5+x);
Position(pixel2337, 27, 5+x);
Position(pixel2338, 28, 5+x);
Position(pixel2339, 29, 5+x);
Position(pixel2340, 30, 5+x);

////////////r0w 19/////////////////////////////////
x = 14
Position(pixel2341, 1, 5+x);
Position(pixel2342, 2, 5+x);
Position(pixel2343, 3, 5+x);
Position(pixel2344, 4, 5+x);
Position(pixel2345, 5, 5+x);
Position(pixel2346, 6, 5+x);
Position(pixel2347, 7, 5+x);
Position(pixel2348, 8, 5+x);
Position(pixel2349, 9, 5+x);
Position(pixel2350, 10, 5+x);
Position(pixel2351, 11, 5+x);
Position(pixel2352, 12, 5+x);
Position(pixel2353, 13, 5+x);
Position(pixel2354, 14, 5+x);
Position(pixel2355, 15, 5+x);
Position(pixel2356, 16, 5+x);
Position(pixel2357, 17, 5+x);
Position(pixel2358, 18, 5+x);
Position(pixel2359, 19, 5+x);
Position(pixel2360, 20, 5+x);
Position(pixel2361, 21, 5+x);
Position(pixel2362, 22, 5+x);
Position(pixel2363, 23, 5+x);
Position(pixel2364, 24, 5+x);
Position(pixel2365, 25, 5+x);
Position(pixel2366, 26, 5+x);
Position(pixel2367, 27, 5+x);
Position(pixel2368, 28, 5+x);
Position(pixel2369, 29, 5+x);
Position(pixel2370, 30, 5+x);

////////////r0w 20/////////////////////////////////
x = 15
Position(pixel2371, 1, 5+x);
Position(pixel2372, 2, 5+x);
Position(pixel2373, 3, 5+x);
Position(pixel2374, 4, 5+x);
Position(pixel2375, 5, 5+x);
Position(pixel2376, 6, 5+x);
Position(pixel2377, 7, 5+x);
Position(pixel2378, 8, 5+x);
Position(pixel2379, 9, 5+x);
Position(pixel2380, 10, 5+x);
Position(pixel2381, 11, 5+x);
Position(pixel2382, 12, 5+x);
Position(pixel2383, 13, 5+x);
Position(pixel2384, 14, 5+x);
Position(pixel2385, 15, 5+x);
Position(pixel2386, 16, 5+x);
Position(pixel2387, 17, 5+x);
Position(pixel2388, 18, 5+x);
Position(pixel2389, 19, 5+x);
Position(pixel2390, 20, 5+x);
Position(pixel2391, 21, 5+x);
Position(pixel2392, 22, 5+x);
Position(pixel2393, 23, 5+x);
Position(pixel2394, 24, 5+x);
Position(pixel2395, 25, 5+x);
Position(pixel2396, 26, 5+x);
Position(pixel2397, 27, 5+x);
Position(pixel2398, 28, 5+x);
Position(pixel2399, 29, 5+x);
Position(pixel2400, 30, 5+x);




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

