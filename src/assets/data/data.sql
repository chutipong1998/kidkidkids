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
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LISTENTHAIALPHABET" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
	"answer"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LISTENFRUIT" (
	"id"	TEXT NOT NULL UNIQUE,
	"name_state"	TEXT NOT NULL,
	"state"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"alphabet"	TEXT NOT NULL,
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
	"score_state5"	INTEGER NOT NULL,
	"score_state6"	INTEGER NOT NULL,
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
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1002','ลากวาง','1','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('2001','ลากวาง','2','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('2002','ลากวาง','2','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('3001','ลากวาง','3','สัตว์','../../../../assets/img/animal/horse.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('3002','ลากวาง','3','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4001','ลากวาง','4','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4002','ลากวาง','4','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('4003','ลากวาง','4','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('5001','ลากวาง','5','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('5002','ลากวาง','5','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('5003','ลากวาง','5','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('6001','ลากวาง','6','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('6002','ลากวาง','6','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('6003','ลากวาง','6','สัตว์','../../../../assets/img/animal/horse.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('7001','ลากวาง','7','สัตว์','../../../../assets/img/animal/bird.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('7002','ลากวาง','7','สัตว์','../../../../assets/img/animal/horse.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('7003','ลากวาง','7','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('7004','ลากวาง','7','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('8001','ลากวาง','8','สัตว์','../../../../assets/img/animal/horse.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('8002','ลากวาง','8','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('8003','ลากวาง','8','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('8004','ลากวาง','8','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('9001','ลากวาง','9','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('9002','ลากวาง','9','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('9003','ลากวาง','9','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('9004','ลากวาง','9','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1101','ลากวาง','10','สัตว์','../../../../assets/img/animal/elephant.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1102','ลากวาง','10','สัตว์','../../../../assets/img/animal/giraffe.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1103','ลากวาง','10','สัตว์','../../../../assets/img/animal/dog.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPANIMAL" VALUES ('1104','ลากวาง','10','สัตว์','../../../../assets/img/animal/monkey.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1001','ลากวาง','1','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1002','ลากวาง','1','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('2001','ลากวาง','2','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('2002','ลากวาง','2','ผลไม้','../../../../assets/img/fruit/mango.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('3001','ลากวาง','3','ผลไม้','../../../../assets/img/fruit/watermelon.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('3002','ลากวาง','3','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4001','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4002','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('4003','ลากวาง','4','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('5001','ลากวาง','5','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('5002','ลากวาง','5','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('5003','ลากวาง','5','ผลไม้','../../../../assets/img/fruit/mango.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('6001','ลากวาง','6','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('6002','ลากวาง','6','ผลไม้','../../../../assets/img/fruit/mango.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('6003','ลากวาง','6','ผลไม้','../../../../assets/img/fruit/watermelon.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('7001','ลากวาง','7','ผลไม้','../../../../assets/img/fruit/mango.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('7002','ลากวาง','7','ผลไม้','../../../../assets/img/fruit/watermelon.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('7003','ลากวาง','7','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('7004','ลากวาง','7','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('8001','ลากวาง','8','ผลไม้','../../../../assets/img/fruit/watermelon.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('8002','ลากวาง','8','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('8003','ลากวาง','8','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('8004','ลากวาง','8','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('9001','ลากวาง','9','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('9002','ลากวาง','9','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('9003','ลากวาง','9','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('9004','ลากวาง','9','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1101','ลากวาง','10','ผลไม้','../../../../assets/img/fruit/apple.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1102','ลากวาง','10','ผลไม้','../../../../assets/img/fruit/orange.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1103','ลากวาง','10','ผลไม้','../../../../assets/img/fruit/strawberry.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPFRUIT" VALUES ('1104','ลากวาง','10','ผลไม้','../../../../assets/img/fruit/banana.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1001','ลากวาง','1','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1002','ลากวาง','1','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('2001','ลากวาง','2','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('2002','ลากวาง','2','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('3001','ลากวาง','3','ตัวเลข','../../../../assets/img/number/five.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('3002','ลากวาง','3','ตัวเลข','../../../../assets/img/number/six.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4001','ลากวาง','4','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4002','ลากวาง','4','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('4003','ลากวาง','4','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('5001','ลากวาง','5','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('5002','ลากวาง','5','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('5003','ลากวาง','5','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('6001','ลากวาง','6','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('6002','ลากวาง','6','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('6003','ลากวาง','6','ตัวเลข','../../../../assets/img/number/five.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('7001','ลากวาง','7','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('7002','ลากวาง','7','ตัวเลข','../../../../assets/img/number/five.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('7003','ลากวาง','7','ตัวเลข','../../../../assets/img/number/six.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('7004','ลากวาง','7','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','4');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('8001','ลากวาง','8','ตัวเลข','../../../../assets/img/number/five.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('8002','ลากวาง','8','ตัวเลข','../../../../assets/img/number/six.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('8003','ลากวาง','8','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('8004','ลากวาง','8','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','3');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('9001','ลากวาง','9','ตัวเลข','../../../../assets/img/number/six.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('9002','ลากวาง','9','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('9003','ลากวาง','9','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('9004','ลากวาง','9','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','2');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1101','ลากวาง','10','ตัวเลข','../../../../assets/img/number/one.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1102','ลากวาง','10','ตัวเลข','../../../../assets/img/number/two.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1103','ลากวาง','10','ตัวเลข','../../../../assets/img/number/three.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "DRAGDROPNUMBER" VALUES ('1104','ลากวาง','10','ตัวเลข','../../../../assets/img/number/four.png','../../../../assets/img/animal/Picture5.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','สัตว์','../../../../assets/img/animal/elephant.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('1002','ฟังเสียงเพื่อตอบคำถาม','1','สัตว์','../../../../assets/img/animal/giraffe.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/dog.png','2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/bird.png','2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2011','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/horse.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('2012','ฟังเสียงเพื่อตอบคำถาม','2','สัตว์','../../../../assets/img/animal/monkey.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/elephant.png','2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/giraffe.png','2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('3003','ฟังเสียงเพื่อตอบคำถาม','3','สัตว์','../../../../assets/img/animal/dog.png','2');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/giraffe.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/dog.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/bird.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4011','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/dog.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4012','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/bird.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('4013','ฟังเสียงเพื่อตอบคำถาม','4','สัตว์','../../../../assets/img/animal/horse.png','1');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('5001','ฟังเสียงเพื่อตอบคำถาม','5','สัตว์','../../../../assets/img/animal/bird.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('5002','ฟังเสียงเพื่อตอบคำถาม','5','สัตว์','../../../../assets/img/animal/horse.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('5003','ฟังเสียงเพื่อตอบคำถาม','5','สัตว์','../../../../assets/img/animal/monkey.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('5004','ฟังเสียงเพื่อตอบคำถาม','5','สัตว์','../../../../assets/img/animal/elephant.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6001','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/horse.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6002','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/monkey.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6003','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/elephant.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6004','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/giraffe.png','3');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6011','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/monkey.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6012','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/elephant.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6013','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/giraffe.png','4');
INSERT or IGNORE INTO "LISTENANIMAL" VALUES ('6014','ฟังเสียงเพื่อตอบคำถาม','6','สัตว์','../../../../assets/img/animal/dog.png','4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/1.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1002','ฟังเสียงเพื่อตอบคำถาม','1','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/2.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/3.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/4.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/7.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/8.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/11.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/12.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/13.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('5001','ฟังเสียงเพื่อตอบคำถาม','5','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/15.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('5002','ฟังเสียงเพื่อตอบคำถาม','5','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/16.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('5003','ฟังเสียงเพื่อตอบคำถาม','5','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/17.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('6001','ฟังเสียงเพื่อตอบคำถาม','6','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/19.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('6002','ฟังเสียงเพื่อตอบคำถาม','6','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/20.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('6003','ฟังเสียงเพื่อตอบคำถาม','6','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/21.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('7001','ฟังเสียงเพื่อตอบคำถาม','7','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/26.png','4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('7002','ฟังเสียงเพื่อตอบคำถาม','7','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/27.png','4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('7003','ฟังเสียงเพื่อตอบคำถาม','7','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/28.png','4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('7004','ฟังเสียงเพื่อตอบคำถาม','7','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/29.png','4');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('8001','ฟังเสียงเพื่อตอบคำถาม','8','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/31.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('8002','ฟังเสียงเพื่อตอบคำถาม','8','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/32.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('8003','ฟังเสียงเพื่อตอบคำถาม','8','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/33.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('8004','ฟังเสียงเพื่อตอบคำถาม','8','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/34.png','3');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('9001','ฟังเสียงเพื่อตอบคำถาม','9','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/36.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('9002','ฟังเสียงเพื่อตอบคำถาม','9','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/37.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('9003','ฟังเสียงเพื่อตอบคำถาม','9','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/38.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('9004','ฟังเสียงเพื่อตอบคำถาม','9','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/39.png','2');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1101','ฟังเสียงเพื่อตอบคำถาม','10','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/41.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1102','ฟังเสียงเพื่อตอบคำถาม','10','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/42.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1103','ฟังเสียงเพื่อตอบคำถาม','10','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/43.png','1');
INSERT or IGNORE INTO "LISTENTHAIALPHABET" VALUES ('1104','ฟังเสียงเพื่อตอบคำถาม','10','ตัวอักษรภาษาไทย','../../../../assets/img/letters/thai/44.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1001','ฟังเสียงเพื่อตอบคำถาม','1','ผลไม้','../../../../assets/img/fruit/apple.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1002','ฟังเสียงเพื่อตอบคำถาม','1','ผลไม้','../../../../assets/img/fruit/orange.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','2','ผลไม้','../../../../assets/img/fruit/strawberry.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','2','ผลไม้','../../../../assets/img/fruit/mango.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('3001','ฟังเสียงเพื่อตอบคำถาม','3','ผลไม้','../../../../assets/img/fruit/watermelon.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('3002','ฟังเสียงเพื่อตอบคำถาม','3','ผลไม้','../../../../assets/img/fruit/banana.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4001','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/apple.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4002','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/orange.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('4003','ฟังเสียงเพื่อตอบคำถาม','4','ผลไม้','../../../../assets/img/fruit/strawberry.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('5001','ฟังเสียงเพื่อตอบคำถาม','5','ผลไม้','../../../../assets/img/fruit/orange.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('5002','ฟังเสียงเพื่อตอบคำถาม','5','ผลไม้','../../../../assets/img/fruit/strawberry.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('5003','ฟังเสียงเพื่อตอบคำถาม','5','ผลไม้','../../../../assets/img/fruit/mango.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('6001','ฟังเสียงเพื่อตอบคำถาม','6','ผลไม้','../../../../assets/img/fruit/strawberry.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('6002','ฟังเสียงเพื่อตอบคำถาม','6','ผลไม้','../../../../assets/img/fruit/mango.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('6003','ฟังเสียงเพื่อตอบคำถาม','6','ผลไม้','../../../../assets/img/fruit/watermelon.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('7001','ฟังเสียงเพื่อตอบคำถาม','7','ผลไม้','../../../../assets/img/fruit/mango.png','4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('7002','ฟังเสียงเพื่อตอบคำถาม','7','ผลไม้','../../../../assets/img/fruit/watermelon.png','4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('7003','ฟังเสียงเพื่อตอบคำถาม','7','ผลไม้','../../../../assets/img/fruit/banana.png','4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('7004','ฟังเสียงเพื่อตอบคำถาม','7','ผลไม้','../../../../assets/img/fruit/apple.png','4');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('8001','ฟังเสียงเพื่อตอบคำถาม','8','ผลไม้','../../../../assets/img/fruit/watermelon.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('8002','ฟังเสียงเพื่อตอบคำถาม','8','ผลไม้','../../../../assets/img/fruit/banana.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('8003','ฟังเสียงเพื่อตอบคำถาม','8','ผลไม้','../../../../assets/img/fruit/apple.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('8004','ฟังเสียงเพื่อตอบคำถาม','8','ผลไม้','../../../../assets/img/fruit/orange.png','2');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('9001','ฟังเสียงเพื่อตอบคำถาม','9','ผลไม้','../../../../assets/img/fruit/banana.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('9002','ฟังเสียงเพื่อตอบคำถาม','9','ผลไม้','../../../../assets/img/fruit/apple.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('9003','ฟังเสียงเพื่อตอบคำถาม','9','ผลไม้','../../../../assets/img/fruit/orange.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('9004','ฟังเสียงเพื่อตอบคำถาม','9','ผลไม้','../../../../assets/img/fruit/strawberry.png','1');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1101','ฟังเสียงเพื่อตอบคำถาม','10','ผลไม้','../../../../assets/img/fruit/apple.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1102','ฟังเสียงเพื่อตอบคำถาม','10','ผลไม้','../../../../assets/img/fruit/orange.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1103','ฟังเสียงเพื่อตอบคำถาม','10','ผลไม้','../../../../assets/img/fruit/strawberry.png','3');
INSERT or IGNORE INTO "LISTENFRUIT" VALUES ('1104','ฟังเสียงเพื่อตอบคำถาม','10','ผลไม้','../../../../assets/img/fruit/banana.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1001','เรียงลำดับตัวเลข','1','../../../../assets/img/number/one.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1002','เรียงลำดับตัวเลข','1','../../../../assets/img/number/two.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('2001','เรียงลำดับตัวเลข','2','../../../../assets/img/number/three.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('2002','เรียงลำดับตัวเลข','2','../../../../assets/img/number/four.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('3001','เรียงลำดับตัวเลข','3','../../../../assets/img/number/five.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('3002','เรียงลำดับตัวเลข','3','../../../../assets/img/number/six.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4001','เรียงลำดับตัวเลข','4','../../../../assets/img/number/one.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4002','เรียงลำดับตัวเลข','4','../../../../assets/img/number/two.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('4003','เรียงลำดับตัวเลข','4','../../../../assets/img/number/three.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('5001','เรียงลำดับตัวเลข','5','../../../../assets/img/number/two.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('5002','เรียงลำดับตัวเลข','5','../../../../assets/img/number/three.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('5003','เรียงลำดับตัวเลข','5','../../../../assets/img/number/four.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('6001','เรียงลำดับตัวเลข','6','../../../../assets/img/number/three.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('6002','เรียงลำดับตัวเลข','6','../../../../assets/img/number/four.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('6003','เรียงลำดับตัวเลข','6','../../../../assets/img/number/five.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('7001','เรียงลำดับตัวเลข','7','../../../../assets/img/number/four.png','4');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('7002','เรียงลำดับตัวเลข','7','../../../../assets/img/number/five.png','4');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('7003','เรียงลำดับตัวเลข','7','../../../../assets/img/number/six.png','4');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('7004','เรียงลำดับตัวเลข','7','../../../../assets/img/number/one.png','4');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('8001','เรียงลำดับตัวเลข','8','../../../../assets/img/number/five.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('8002','เรียงลำดับตัวเลข','8','../../../../assets/img/number/six.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('8003','เรียงลำดับตัวเลข','8','../../../../assets/img/number/one.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('8004','เรียงลำดับตัวเลข','8','../../../../assets/img/number/two.png','2');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('9001','เรียงลำดับตัวเลข','9','../../../../assets/img/number/six.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('9002','เรียงลำดับตัวเลข','9','../../../../assets/img/number/one.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('9003','เรียงลำดับตัวเลข','9','../../../../assets/img/number/two.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('9004','เรียงลำดับตัวเลข','9','../../../../assets/img/number/three.png','1');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1101','เรียงลำดับตัวเลข','10','../../../../assets/img/number/one.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1102','เรียงลำดับตัวเลข','10','../../../../assets/img/number/two.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1103','เรียงลำดับตัวเลข','10','../../../../assets/img/number/three.png','3');
INSERT or IGNORE INTO "SORTNUMBER" VALUES ('1104','เรียงลำดับตัวเลข','10','../../../../assets/img/number/four.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1001','จับคู่เสียงของสัตว์','1','../../../../assets/img/animal/elephant.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1002','จับคู่เสียงของสัตว์','1','../../../../assets/img/animal/giraffe.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('2001','จับคู่เสียงของสัตว์','2','../../../../assets/img/animal/dog.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('2002','จับคู่เสียงของสัตว์','2','../../../../assets/img/animal/bird.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('3001','จับคู่เสียงของสัตว์','3','../../../../assets/img/animal/horse.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('3002','จับคู่เสียงของสัตว์','3','../../../../assets/img/animal/monkey.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4001','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/elephant.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4002','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/giraffe.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('4003','จับคู่เสียงของสัตว์','4','../../../../assets/img/animal/dog.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('5001','จับคู่เสียงของสัตว์','5','../../../../assets/img/animal/giraffe.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('5002','จับคู่เสียงของสัตว์','5','../../../../assets/img/animal/dog.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('5003','จับคู่เสียงของสัตว์','5','../../../../assets/img/animal/bird.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('6001','จับคู่เสียงของสัตว์','6','../../../../assets/img/animal/dog.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('6002','จับคู่เสียงของสัตว์','6','../../../../assets/img/animal/bird.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('6003','จับคู่เสียงของสัตว์','6','../../../../assets/img/animal/horse.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('7001','จับคู่เสียงของสัตว์','7','../../../../assets/img/animal/bird.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('7002','จับคู่เสียงของสัตว์','7','../../../../assets/img/animal/horse.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('7003','จับคู่เสียงของสัตว์','7','../../../../assets/img/animal/monkey.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('7004','จับคู่เสียงของสัตว์','7','../../../../assets/img/animal/elephant.png','1');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('8001','จับคู่เสียงของสัตว์','8','../../../../assets/img/animal/horse.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('8002','จับคู่เสียงของสัตว์','8','../../../../assets/img/animal/monkey.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('8003','จับคู่เสียงของสัตว์','8','../../../../assets/img/animal/elephant.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('8004','จับคู่เสียงของสัตว์','8','../../../../assets/img/animal/giraffe.png','2');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('9001','จับคู่เสียงของสัตว์','9','../../../../assets/img/animal/monkey.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('9002','จับคู่เสียงของสัตว์','9','../../../../assets/img/animal/elephant.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('9003','จับคู่เสียงของสัตว์','9','../../../../assets/img/animal/giraffe.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('9004','จับคู่เสียงของสัตว์','9','../../../../assets/img/animal/dog.png','3');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1101','จับคู่เสียงของสัตว์','10','../../../../assets/img/animal/elephant.png','4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1102','จับคู่เสียงของสัตว์','10','../../../../assets/img/animal/giraffe.png','4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1103','จับคู่เสียงของสัตว์','10','../../../../assets/img/animal/dog.png','4');
INSERT or IGNORE INTO "MATCHANIMALSOUND" VALUES ('1104','จับคู่เสียงของสัตว์','10','../../../../assets/img/animal/monkey.png','4');
INSERT or IGNORE INTO "DATA" VALUES ('1001','ลากวาง','สัตว์',100,0,0,0,0,0,100);
INSERT or IGNORE INTO "DATA" VALUES ('1002','ลากวาง','ตัวเลข',100,100,0,0,0,0,200);
INSERT or IGNORE INTO "DATA" VALUES ('1003','ลากวาง','ผลไม้',100,100,100,0,0,0,300);
INSERT or IGNORE INTO "DATA" VALUES ('2001','ฟังเสียงเพื่อตอบคำถาม','สัตว์',100,0,0,0,0,0,100);
INSERT or IGNORE INTO "DATA" VALUES ('2002','ฟังเสียงเพื่อตอบคำถาม','ตัวอักษรภาษาไทย',100,100,0,0,0,0,200);
INSERT or IGNORE INTO "DATA" VALUES ('2003','ฟังเสียงเพื่อตอบคำถาม','ผลไม้',100,100,100,0,0,0,300);
INSERT or IGNORE INTO "DATA" VALUES ('3001','เรียงลำดับตัวเลข',NULL,0,0,0,0,0,0,0);
INSERT or IGNORE INTO "DATA" VALUES ('3002','จับคู่เสียงของสัตว์',NULL,0,0,0,0,0,0,0);