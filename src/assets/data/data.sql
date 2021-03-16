CREATE TABLE IF NOT EXISTS "ENGLISH_ALPHABET" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "THAI_ALPHABET" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "NUMBER" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "ANIMAL" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "FRUIT" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "VEHICLE" (
	"id"	TEXT NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"alphabet"	TEXT,
	"thai_sound"	TEXT,
	"english_sound"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "DRAGDROPANIMAL" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"shadow_image"	TEXT NOT NULL,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "DRAGDROPFRUIT" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"shadow_image"	TEXT NOT NULL,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "DRAGDROPNUMBER" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"shadow_image"	TEXT NOT NULL,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LISTENANIMAL" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"sound"	TEXT,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LISTENFRUIT" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"sound"	TEXT,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LISTENTHAIALPHABET" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"sound"	TEXT,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "SORTNUMBER" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "MATCHANIMALSOUND" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"shadow_image"	TEXT,
	"sound"	TEXT,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "DATA" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"category"	TEXT,
	"score_state1"	INTEGER NOT NULL,
	"score_state2"	INTEGER NOT NULL,
	"score_state3"	INTEGER NOT NULL,
	"score_state4"	INTEGER NOT NULL,
	"total_score"	INTEGER NOT NULL,
	PRIMARY KEY("id")
);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng01','englishAlphabet','../../../assets/img/letters/eng/Aa.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng02','englishAlphabet','../../../assets/img/letters/eng/Bb.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng03','englishAlphabet','../../../assets/img/letters/eng/Cc.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng04','englishAlphabet','../../../assets/img/letters/eng/Dd.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng05','englishAlphabet','../../../assets/img/letters/eng/Ee.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng06','englishAlphabet','../../../assets/img/letters/eng/Ff.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng07','englishAlphabet','../../../assets/img/letters/eng/Gg.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng08','englishAlphabet','../../../assets/img/letters/eng/Hh.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng09','englishAlphabet','../../../assets/img/letters/eng/Ii.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng10','englishAlphabet','../../../assets/img/letters/eng/Jj.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng11','englishAlphabet','../../../assets/img/letters/eng/Kk.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng12','englishAlphabet','../../../assets/img/letters/eng/Ll.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng13','englishAlphabet','../../../assets/img/letters/eng/Mm.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng14','englishAlphabet','../../../assets/img/letters/eng/Nn.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng15','englishAlphabet','../../../assets/img/letters/eng/Oo.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng16','englishAlphabet','../../../assets/img/letters/eng/Pp.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng17','englishAlphabet','../../../assets/img/letters/eng/Qq.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng18','englishAlphabet','../../../assets/img/letters/eng/Rr.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng19','englishAlphabet','../../../assets/img/letters/eng/Ss.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng20','englishAlphabet','../../../assets/img/letters/eng/Tt.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng21','englishAlphabet','../../../assets/img/letters/eng/Uu.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng22','englishAlphabet','../../../assets/img/letters/eng/Vv.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng23','englishAlphabet','../../../assets/img/letters/eng/Ww.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng24','englishAlphabet','../../../assets/img/letters/eng/Xx.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng25','englishAlphabet','../../../assets/img/letters/eng/Yy.png',NULL,NULL);
INSERT or IGNORE INTO "ENGLISH_ALPHABET" VALUES ('eng26','englishAlphabet','../../../assets/img/letters/eng/Zz.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai01','thaiAlphabet','../../../assets/img/letters/thai/1.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai02','thaiAlphabet','../../../assets/img/letters/thai/2.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai03','thaiAlphabet','../../../assets/img/letters/thai/3.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai04','thaiAlphabet','../../../assets/img/letters/thai/4.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai05','thaiAlphabet','../../../assets/img/letters/thai/5.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai06','thaiAlphabet','../../../assets/img/letters/thai/6.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai07','thaiAlphabet','../../../assets/img/letters/thai/7.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai08','thaiAlphabet','../../../assets/img/letters/thai/8.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai09','thaiAlphabet','../../../assets/img/letters/thai/9.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai10','thaiAlphabet','../../../assets/img/letters/thai/10.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai11','thaiAlphabet','../../../assets/img/letters/thai/11.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai12','thaiAlphabet','../../../assets/img/letters/thai/12.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai13','thaiAlphabet','../../../assets/img/letters/thai/13.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai14','thaiAlphabet','../../../assets/img/letters/thai/14.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai15','thaiAlphabet','../../../assets/img/letters/thai/15.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai16','thaiAlphabet','../../../assets/img/letters/thai/16.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai17','thaiAlphabet','../../../assets/img/letters/thai/17.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai18','thaiAlphabet','../../../assets/img/letters/thai/18.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai19','thaiAlphabet','../../../assets/img/letters/thai/19.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai20','thaiAlphabet','../../../assets/img/letters/thai/20.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai21','thaiAlphabet','../../../assets/img/letters/thai/21.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai22','thaiAlphabet','../../../assets/img/letters/thai/22.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai23','thaiAlphabet','../../../assets/img/letters/thai/23.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai24','thaiAlphabet','../../../assets/img/letters/thai/24.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai25','thaiAlphabet','../../../assets/img/letters/thai/25.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai26','thaiAlphabet','../../../assets/img/letters/thai/26.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai27','thaiAlphabet','../../../assets/img/letters/thai/27.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai28','thaiAlphabet','../../../assets/img/letters/thai/28.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai29','thaiAlphabet','../../../assets/img/letters/thai/29.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai30','thaiAlphabet','../../../assets/img/letters/thai/30.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai31','thaiAlphabet','../../../assets/img/letters/thai/31.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai32','thaiAlphabet','../../../assets/img/letters/thai/32.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai33','thaiAlphabet','../../../assets/img/letters/thai/33.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai34','thaiAlphabet','../../../assets/img/letters/thai/34.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai35','thaiAlphabet','../../../assets/img/letters/thai/35.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai36','thaiAlphabet','../../../assets/img/letters/thai/36.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai37','thaiAlphabet','../../../assets/img/letters/thai/37.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai38','thaiAlphabet','../../../assets/img/letters/thai/38.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai39','thaiAlphabet','../../../assets/img/letters/thai/39.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai40','thaiAlphabet','../../../assets/img/letters/thai/40.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai41','thaiAlphabet','../../../assets/img/letters/thai/41.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai42','thaiAlphabet','../../../assets/img/letters/thai/42.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai43','thaiAlphabet','../../../assets/img/letters/thai/43.png',NULL,NULL);
INSERT or IGNORE INTO "THAI_ALPHABET" VALUES ('thai44','thaiAlphabet','../../../assets/img/letters/thai/44.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num01','number','../../../assets/img/number/one.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num02','number','../../../assets/img/number/two.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num03','number','../../../assets/img/number/three.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num04','number','../../../assets/img/number/four.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num05','number','../../../assets/img/number/five.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num06','number','../../../assets/img/number/six.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num07','number','../../../assets/img/number/one.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num08','number','../../../assets/img/number/two.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num09','number','../../../assets/img/number/three.png',NULL,NULL);
INSERT or IGNORE INTO "NUMBER" VALUES ('num10','number','../../../assets/img/number/four.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal01','animal','../../../assets/img/animal/bird.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal02','animal','../../../assets/img/animal/dog.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal03','animal','../../../assets/img/animal/horse.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal04','animal','../../../assets/img/animal/monkey.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal05','animal','../../../assets/img/animal/elephant.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal06','animal','../../../assets/img/animal/Pig.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal07','animal','../../../assets/img/animal/bird.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal08','animal','../../../assets/img/animal/dog.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal09','animal','../../../assets/img/animal/horse.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal10','animal','../../../assets/img/animal/monkey.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal11','animal','../../../assets/img/animal/bird.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal12','animal','../../../assets/img/animal/dog.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal13','animal','../../../assets/img/animal/horse.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal14','animal','../../../assets/img/animal/monkey.png',NULL,NULL);
INSERT or IGNORE INTO "ANIMAL" VALUES ('animal15','animal','../../../assets/img/animal/elephant.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit01','fruit','../../../assets/img/fruit/apple.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit02','fruit','../../../assets/img/fruit/orange.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit03','fruit','../../../assets/img/fruit/strawberry.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit04','fruit','../../../assets/img/fruit/mango.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit05','fruit','../../../assets/img/fruit/watermelon.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit06','fruit','../../../assets/img/fruit/banana.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit07','fruit','../../../assets/img/fruit/apple.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit08','fruit','../../../assets/img/fruit/orange.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit09','fruit','../../../assets/img/fruit/strawberry.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit10','fruit','../../../assets/img/fruit/mango.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit11','fruit','../../../assets/img/fruit/apple.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit12','fruit','../../../assets/img/fruit/orange.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit13','fruit','../../../assets/img/fruit/strawberry.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit14','fruit','../../../assets/img/fruit/mango.png',NULL,NULL);
INSERT or IGNORE INTO "FRUIT" VALUES ('fruit15','fruit','../../../assets/img/fruit/watermelon.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc01','vehicle','../../../assets/img/vehicle/ship.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc02','vehicle','../../../assets/img/vehicle/bus.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc03','vehicle','../../../assets/img/vehicle/taxi.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc04','vehicle','../../../assets/img/vehicle/bike.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc05','vehicle','../../../assets/img/vehicle/Motorcycles.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc06','vehicle','../../../assets/img/vehicle/plane.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc07','vehicle','../../../assets/img/vehicle/ship.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc08','vehicle','../../../assets/img/vehicle/bus.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc09','vehicle','../../../assets/img/vehicle/taxi.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc10','vehicle','../../../assets/img/vehicle/bike.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc11','vehicle','../../../assets/img/vehicle/ship.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc12','vehicle','../../../assets/img/vehicle/bus.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc13','vehicle','../../../assets/img/vehicle/taxi.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc14','vehicle','../../../assets/img/vehicle/bike.png',NULL,NULL);
INSERT or IGNORE INTO "VEHICLE" VALUES ('vhc15','vehicle','../../../assets/img/vehicle/Motorcycles.png',NULL,NULL);
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1001','ลากวาง','1','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('2001','ลากวาง','2','สัตว์','../../../../assets/img/animal/Pig.png','../../../../assets/img/ngow.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('2002','ลากวาง','2','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/ngow.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('3001','ลากวาง','3','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('3002','ลากวาง','3','สัตว์','../../../../assets/img/animal/horse.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('3003','ลากวาง','3','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4001','ลากวาง','4','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4002','ลากวาง','4','สัตว์','../../../../assets/img/animal/Pig.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4003','ลากวาง','4','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4004','ลากวาง','4','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1001','ลากวาง','1','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('2001','ลากวาง','2','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('2002','ลากวาง','2','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('3001','ลากวาง','3','ผลไม้','../../../../assets/img/fruit/mango.png','../../../../assets/img/ngow.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('3002','ลากวาง','3','ผลไม้','../../../../assets/img/fruit/watermelon.png','../../../../assets/img/ngow.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('3003','ลากวาง','3','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/ngow.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4001','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4002','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4003','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4004','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1001','ลากวาง','1','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('2001','ลากวาง','2','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('2002','ลากวาง','2','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/ngow.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('3001','ลากวาง','3','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('3002','ลากวาง','3','ตัวเลข','../../../../assets/img/number/five.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('3003','ลากวาง','3','ตัวเลข','../../../../assets/img/number/six.png','../../../../assets/img/ngow.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4001','ลากวาง','4','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4002','ลากวาง','4','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4003','ลากวาง','4','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4004','ลากวาง','4','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/ngow.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','สัตว์','../../../../assets/img/animal/elephant.png',NULL,'1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/Pig.png',NULL,'1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/dog.png',NULL,'1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/bird.png',NULL,'2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/horse.png',NULL,'2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3003','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/monkey.png',NULL,'2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/elephant.png',NULL,'3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/Pig.png',NULL,'3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/dog.png',NULL,'3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4004','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/monkey.png',NULL,'3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','ผลไม้','../../../../assets/img/fruit/apple.png',NULL,'1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','ผลไม้','../../../../assets/img/fruit/orange.png',NULL,'2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','ผลไม้','../../../../assets/img/fruit/strawberry.png',NULL,'2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','ผลไม้','../../../../assets/img/fruit/mango.png',NULL,'3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','ผลไม้','../../../../assets/img/fruit/watermelon.png',NULL,'3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('3003','ฟังเสียงเพื่อตอบคำถาม','3','ผลไม้','../../../../assets/img/fruit/banana.png',NULL,'3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/apple.png',NULL,'4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/orange.png',NULL,'4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/strawberry.png',NULL,'4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4004','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/mango.png',NULL,'4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/1.png',NULL,'1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/2.png',NULL,'1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/3.png',NULL,'1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/4.png',NULL,'2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/7.png',NULL,'2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('3003','ฟังเสียงเพื่อตอบคำถาม','3','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/8.png',NULL,'2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/11.png',NULL,'3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/12.png',NULL,'3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/13.png',NULL,'3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4004','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/15.png',NULL,'3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1001','เรียงลำดับตัวเลข','1','../../../../assets/img/number/one.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('2001','เรียงลำดับตัวเลข','2','../../../../assets/img/number/three.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('2002','เรียงลำดับตัวเลข','2','../../../../assets/img/number/two.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('3001','เรียงลำดับตัวเลข','3','../../../../assets/img/number/six.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('3002','เรียงลำดับตัวเลข','3','../../../../assets/img/number/four.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('3003','เรียงลำดับตัวเลข','3','../../../../assets/img/number/five.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4001','เรียงลำดับตัวเลข','4','../../../../assets/img/number/four.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4002','เรียงลำดับตัวเลข','4','../../../../assets/img/number/five.png','4');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4003','เรียงลำดับตัวเลข','4','../../../../assets/img/number/three.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4004','เรียงลำดับตัวเลข','4','../../../../assets/img/number/two.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1001','จับคู่เสียงของสัตว์','1','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png',NULL,'1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('2001','จับคู่เสียงของสัตว์','2','../../../../assets/img/animal/Pig.png','../../../../assets/img/24663.jpg',NULL,'2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('2002','จับคู่เสียงของสัตว์','2','../../../../assets/img/animal/dog.png','../../../../assets/img/24663.jpg',NULL,'2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('3001','จับคู่เสียงของสัตว์','3','../../../../assets/img/animal/bird.png','../../../../assets/img/24663.jpg',NULL,'3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('3002','จับคู่เสียงของสัตว์','3','../../../../assets/img/animal/horse.png','../../../../assets/img/24663.jpg',NULL,'3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('3003','จับคู่เสียงของสัตว์','3','../../../../assets/img/animal/monkey.png','../../../../assets/img/24663.jpg',NULL,'3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4001','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/elephant.png','../../../../assets/img/24663.jpg',NULL,'4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4002','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/Pig.png','../../../../assets/img/24663.jpg',NULL,'4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4003','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/dog.png','../../../../assets/img/24663.jpg',NULL,'4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4004','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/bird.png','../../../../assets/img/24663.jpg',NULL,'4');
INSERT or IGNORE INTO "DATA" VALUES ('1001','ลากวาง','สัตว์',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('1002','ลากวาง','ตัวเลข',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('1003','ลากวาง','ผลไม้',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','สัตว์',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','ตัวอักษรภาษาไทย',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('2003','ฟังเสียงเพื่อตอบคำถาม','ผลไม้',0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('3001','เรียงลำดับตัวเลข',NULL,0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('4001','จับคู่เสียงของสัตว์',NULL,0,0,0,0,0);