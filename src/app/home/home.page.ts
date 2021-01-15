import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService, Alphabet } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  onSuccessPreloading: any;
  onError: any;

  stringToWrite: any;
  blob: any;

  x: any;
  storageDirectory: any;

  setData: any;

  developers: Alphabet[] = [];

  developer = {};

  // private db: SQLiteObject;

  constructor(
    private screenOrientation: ScreenOrientation, 
    private file: File, 
    private platform: Platform, 
    private db: DatabaseService
  ) {
    // get current
    // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // // allow user rotate
    // this.screenOrientation.unlock();

    // // detect orientation changes
    // this.screenOrientation.onChange().subscribe(
    //   () => {
    //     console.log('Orientation Changed');
    //   }
    // );

    // this.nativeAudio.preloadSimple('uniqueId1', '../../assets/audio/Claudio.mp3').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.preloadComplex('uniqueId2', '../../assets/audio/Cinema.mp3', 1, 1, 0).then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.play('uniqueId1').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.loop('uniqueId2').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio
    //   .preloadComplex('track1', '../../assets/audio/Claudio.mp3', 1, 1, 0)
    //   .then(this.onSuccessPreloading, this.onError);

    // this.nativeAudio.play('track1').then(this.onSuccessPreloading, this.onError);

    // var audio = new Audio('../../assets/audio/audio_hero_Story-Time_SIPML_Q-0216.mp3');
    // audio.play();

    // private nativeAudio: NativeAudio

    this.writeJSON();
    
  }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.db.getAlps().subscribe(devs => {
          console.log('dev change:', devs);
          this.developers = devs;
        })
      }
    })
  }

  writeJSON() {
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }
      if(this.platform.is('android')) {
        this.storageDirectory = this.file.externalApplicationStorageDirectory; 
        console.log(this.storageDirectory);
        var jsonString = JSON.stringify(
          [
            {
                "id": 1,
                "name_state": "ลากวาง",
                "category": [
                    {
                        "id": 1,
                        "name": "สัตว์",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    },
                    {
                        "id": 2,
                        "name": "ตัวเลข",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    },
                    {
                        "id": 3,
                        "name": "ผลไม้",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    }
                ]
            },
            {
                "id": 2,
                "name_state": "ฟังเสียงเพื่อตอบคำถาม",
                "category": [
                    {
                        "id": 1,
                        "name": "สัตว์",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    },
                    {
                        "id": 2,
                        "name": "ตัวอักษรภาษาไทย",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    },
                    {
                        "id": 3,
                        "name": "ผลไม้",
                        "score_state1": 0,
                        "score_state2": 0,
                        "score_state3": 0,
                        "score_state4": 0,
                        "score_state5": 0,
                        "score_state6": 0,
                        "score_state7": 0,
                        "score_state8": 0,
                        "score_state9": 0,
                        "score_state10": 0,
                        "total_score": 0
                    }
                ]
            },
            {
                "id": 3,
                "name_state": "เรียงลำดับตัวเลข",
                "score_state1": 0,
                "score_state2": 0,
                "score_state3": 0,
                "score_state4": 0,
                "score_state5": 0,
                "score_state6": 0,
                "score_state7": 0,
                "score_state8": 0,
                "score_state9": 0,
                "score_state10": 0,
                "total_score": 0
            },
            {
                "id": 4,
                "name_state": "จับคู่เสียงของสัตว์",
                "score_state1": 0,
                "score_state2": 0,
                "score_state3": 0,
                "score_state4": 0,
                "score_state5": 0,
                "score_state6": 0,
                "score_state7": 0,
                "score_state8": 0,
                "score_state9": 0,
                "score_state10": 0,
                "total_score": 0
            }
          ]
        );
        var fileDir = this.file.externalApplicationStorageDirectory; 
        var filename = "result.json";
        this.file.writeFile(fileDir, filename, jsonString, {replace: true}) ;

        this.file.readAsText(this.file.externalApplicationStorageDirectory, "result.json").then(fileStr => {
          this.x = JSON.parse(String(fileStr));
          // alert(this.x.ID)
          console.log('file',this.x);
          // this.setData(this.x);
        }).catch(err => {
          console.log('it messed up wow');
          console.log(err);
        });
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });

  }

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
