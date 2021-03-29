import { Component, OnInit } from '@angular/core';
import { DatabaseKnowledgeService } from '../services/database/knowledge/database-knowledge.service';
import { DatabaseQuizService } from '../services/database/Quiz/database-quiz.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Knowledge } from '../model/knowledge/knowledge';
import { Data } from '../model/quiz/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dataScore: Data[] = []
  dataKnowledge: Knowledge[] = []
  statusSound: boolean;

  constructor(
    private db: DatabaseQuizService,
    private knowdb: DatabaseKnowledgeService,
    private nativeAudio: NativeAudio
  ) {
  }

  ngOnInit() {
    this.statusSound = false;
    // this.nativeAudio.preloadComplex('test2', 'assets/audio/bg_audio.mp3', 1, 1, 0).then((res) => {
    //   console.log('loading2...');
    //   console.log(res);
    // }, (err) => {
    //   console.log('error');
    //   console.log(err);
    // });
    // load audio
    this.loadSound();

    // load data score
    this.loadDataScore();

    // load data knowledge
    this.loadDataKnowledge();
  }

  loadSound() {
    this.nativeAudio.preloadComplex('test2', 'assets/audio/bg_audio.mp3', 1, 1, 0).then((res) => {
      console.log('loading2...');
      console.log(res);
      this.nativeAudio.loop('test2').then((res) => {
        console.log('playing test2');
        console.log(res);
      }, (err) => {
        console.log('test2 playing error');
        console.log(err);
      });
    }, (err) => {
      console.log('error');
      console.log(err);
    });
  }

  turnOnOffSound() {
    if (this.statusSound) {
      console.log('status =', this.statusSound);
      this.nativeAudio.loop('test2').then((res) => {
        console.log('playing test2');
        console.log(res);
      }, (err) => {
        console.log('test2 playing error');
        console.log(err);
      });
      this.statusSound = false;
    } else {
      console.log('status =', this.statusSound);
      this.nativeAudio.stop('test2').then((res) => {
        console.log('stop test2');
        console.log(res);
      }, (err) => {
        console.log('test2 stop error');
        console.log(err);
      });
      this.statusSound = true;
    }
  }

  loadDataScore() {
    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.db.getData().subscribe(data => {
          // console.log('data:', data);
          this.dataScore = data;
          // console.log('data:', this.dataScore);
        })
      }
    });
  }

  loadDataKnowledge() {
    this.knowdb.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.knowdb.getEngAlps().subscribe(res => {
          this.dataKnowledge = res;
          // console.log('knw:', res);
        })
      }
    });
  }

  // writeJSON() {
  //   this.json.writeJson().then(() => {
  //     console.log('เขียนลงเครื่องแล้ว');
  //   }).catch(err => {
  //     console.log('it messed up wow');
  //     console.log(err);
  //   });
  //   // this.platform.ready().then(() => {
  //   //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
  //   //   if(!this.platform.is('cordova')) {
  //   //     return false;
  //   //   }
  //   //   if(this.platform.is('android')) {
  //   //     this.json.writeJson().then(() => {
  //   //       console.log('เขียนลงเครื่องแล้ว');
  //   //     })
  //   //     this.storageDirectory = this.file.externalApplicationStorageDirectory; 
  //   //     console.log(this.storageDirectory);
  //   //     var jsonString = JSON.stringify(
  //   //       [
  //   //         {
  //   //             "id": 1,
  //   //             "name_state": "ลากวาง",
  //   //             "category": [
  //   //                 {
  //   //                     "id": 1,
  //   //                     "name": "สัตว์",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 },
  //   //                 {
  //   //                     "id": 2,
  //   //                     "name": "ตัวเลข",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 },
  //   //                 {
  //   //                     "id": 3,
  //   //                     "name": "ผลไม้",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 }
  //   //             ]
  //   //         },
  //   //         {
  //   //             "id": 2,
  //   //             "name_state": "ฟังเสียงเพื่อตอบคำถาม",
  //   //             "category": [
  //   //                 {
  //   //                     "id": 1,
  //   //                     "name": "สัตว์",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 },
  //   //                 {
  //   //                     "id": 2,
  //   //                     "name": "ตัวอักษรภาษาไทย",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 },
  //   //                 {
  //   //                     "id": 3,
  //   //                     "name": "ผลไม้",
  //   //                     "score_state1": 0,
  //   //                     "score_state2": 0,
  //   //                     "score_state3": 0,
  //   //                     "score_state4": 0,
  //   //                     "score_state5": 0,
  //   //                     "score_state6": 0,
  //   //                     "score_state7": 0,
  //   //                     "score_state8": 0,
  //   //                     "score_state9": 0,
  //   //                     "score_state10": 0,
  //   //                     "total_score": 0
  //   //                 }
  //   //             ]
  //   //         },
  //   //         {
  //   //             "id": 3,
  //   //             "name_state": "เรียงลำดับตัวเลข",
  //   //             "score_state1": 0,
  //   //             "score_state2": 0,
  //   //             "score_state3": 0,
  //   //             "score_state4": 0,
  //   //             "score_state5": 0,
  //   //             "score_state6": 0,
  //   //             "score_state7": 0,
  //   //             "score_state8": 0,
  //   //             "score_state9": 0,
  //   //             "score_state10": 0,
  //   //             "total_score": 0
  //   //         },
  //   //         {
  //   //             "id": 4,
  //   //             "name_state": "จับคู่เสียงของสัตว์",
  //   //             "score_state1": 0,
  //   //             "score_state2": 0,
  //   //             "score_state3": 0,
  //   //             "score_state4": 0,
  //   //             "score_state5": 0,
  //   //             "score_state6": 0,
  //   //             "score_state7": 0,
  //   //             "score_state8": 0,
  //   //             "score_state9": 0,
  //   //             "score_state10": 0,
  //   //             "total_score": 0
  //   //         }
  //   //       ]
  //   //     );
  //   //     var fileDir = this.file.externalApplicationStorageDirectory; 
  //   //     var filename = "result.json";
  //   //     this.file.writeFile(fileDir, filename, jsonString, {replace: true}) ;

  //   //     this.file.readAsText(this.file.externalApplicationStorageDirectory, "result.json").then(fileStr => {
  //   //       this.x = JSON.parse(String(fileStr));
  //   //       // alert(this.x.ID)
  //   //       console.log('file',this.x);
  //   //       // this.setData(this.x);
  //   //     }).catch(err => {
  //   //       console.log('it messed up wow');
  //   //       console.log(err);
  //   //     });
  //   //   }
  //   //   else {
  //   //     // exit otherwise, but you could add further types here e.g. Windows
  //   //     return false;
  //   //   }
  //   // });

  // }

  // readJSON() {
  //   this.json.readJson().then(fileStr => {
  //     this.data = JSON.parse(String(fileStr));
  //     // alert(this.x.ID)
  //     console.log('file2',this.data);
  //     // this.setData(this.x);
  //   }).catch(err => {
  //     console.log('it messed up wow');
  //     console.log(err);
  //   });
  //   // this.platform.ready().then(() => {
  //   //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
  //   //   if(!this.platform.is('cordova')) {
  //   //     return false;
  //   //   }
  //   //   if(this.platform.is('android')) {
  //   //     this.json.readJson().then(res => {
  //   //       console.log('res =', res);
  //   //     })
  //   //     // this.file.readAsText(this.file.externalApplicationStorageDirectory, "result.json").then(fileStr => {
  //   //     //   this.x = JSON.parse(String(fileStr));
  //   //     //   // alert(this.x.ID)
  //   //     //   console.log('file',this.x);
  //   //     //   // this.setData(this.x);
  //   //     // }).catch(err => {
  //   //     //   console.log('it messed up wow');
  //   //     //   console.log(err);
  //   //     // });
  //   //   }
  //   //   else {
  //   //     // exit otherwise, but you could add further types here e.g. Windows
  //   //     return false;
  //   //   }
  //   // });
  // }

  // readData() {
  //   this.sqlite.create({
  //     name: 'data.db',
  //     location: 'default'
  //   })
  //     .then((db: SQLiteObject) => {
  //       // db.executeSql('create table danceMoves(id integer primary key AUTOINCREMENT, descicao TEX)')
  //       db.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)')
  //         .then(() => console.log('Executed SQL'))
  //         .catch(e => console.log(e));
  //       db.executeSql('INSERT INTO DemoTable VALUES (name, score)', ['Alice', 101])
  //         .then(() => console.log('row 1'))
  //         .catch(e => console.log(e));
  //       db.executeSql('INSERT INTO DemoTable VALUES (name, score)', ['Betty', 202])
  //         .then(() => console.log('row 2'))
  //         .catch(e => console.log(e));
  //     })
  //     .catch(e => console.log(e));
  // }

  

  // addDeveloper() {
  //   let alphabets = this.developer['alphabet'].split(',');
  //   alphabets = alphabets.map(alphabet => alphabet.trim());
 
  //   this.db.addDeveloper(this.developer['id'], this.developer['name'], alphabets, this.developer['sound'])
  //   .then(_ => {
  //     this.developer = {};
  //   });
  // }

}
