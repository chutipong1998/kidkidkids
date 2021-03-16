import { Component, OnInit } from '@angular/core';
import { DatabaseKnowledgeService, Knowledge } from '../services/database/knowledge/database-knowledge.service';
import { Data, DatabaseQuizService } from '../services/database/Quiz/database-quiz.service';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';

// import { File } from '@ionic-native/file/ngx';
// import { Platform } from '@ionic/angular';

// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { DatabaseService, Alphabet } from '../services/database/service/database.service';
// import { JsonService } from '../services/writejson/json.service';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
// import * as touch from 'jquery-ui-touch-punch';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let correctCards = 0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  terms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  words = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
  img = [
    {
      id: 1,
      img: '../../assets/img/letters/thai/1.png'
    },
  ]

  ngow = [
    {
      id: 1,
      img: '../../assets/img/ngow.png'
    },
  ]

  // onSuccessPreloading: any;
  // onError: any;

  // stringToWrite: any;
  // blob: any;

  // x: any;
  // storageDirectory: any;

  // setData: any;

  // developers: Knowledge[] = [];

  datas: Data[] = []
  knows: Knowledge[] = []

  // developer = {};

  // data: any;

  // private db: SQLiteObject;

  constructor(
    // private screenOrientation: ScreenOrientation, 
    // private file: File, 
    private platform: Platform, 
    private db: DatabaseQuizService,
    private knowdb: DatabaseKnowledgeService,
    private nativeAudio: NativeAudio
    // private json: JsonService
  ) {
    // require('jquery-ui-touch-punch');
    // get current
    // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // // set to landscape
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // // allow user rotate
    // this.screenOrientation.unlock();

    // // detect orientation changes
    // this.screenOrientation.onChange().subscribe(
    //   () => {
    //     console.log('Orientation Changed');
    //   }
    // );

    // this.platform.ready().then(() => {
    //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
    //   if(!this.platform.is('cordova')) {
    //     return false;
    //   }
    //   if(this.platform.is('android')) {
    //     // this.json.readJson().then(res => {
    //     //   console.log('res =', res);
    //     // })
    //     // this.file.readAsText(this.file.externalApplicationStorageDirectory, "result.json").then(fileStr => {
    //     //   this.x = JSON.parse(String(fileStr));
    //     //   // alert(this.x.ID)
    //     //   console.log('file',this.x);
    //     //   // this.setData(this.x);
    //     // }).catch(err => {
    //     //   console.log('it messed up wow');
    //     //   console.log(err);
    //     // });
    //     // this.writeJSON();
    //     // this.readJSON();
    //   }
    //   else {
    //     // exit otherwise, but you could add further types here e.g. Windows
    //     return false;
    //   }
    // });


    // this.nativeAudio.preloadSimple('test1', 'assets/audio/Claudio.mp3').then((res) => {
    //   console.log('loading1...');
    //   console.log(res);
    // }, (err) => {
    //   console.log('error');
    //   console.log(err);
    // });

    // this.nativeAudio.preloadComplex('test2', 'assets/audio/bg_audio.mp3', 1, 1, 0).then((res) => {
    //   console.log('loading2...');
    //   console.log(res);
    // }, (err) => {
    //   console.log('error');
    //   console.log(err);
    // });

    // เล่นรอบเดียว
    // this.nativeAudio.play('test1', () => console.log('uniqueId1 is done playing'));

    // this.nativeAudio.loop('test2').then((res) => {
    //   console.log('playing test2');
    //   console.log(res);
    // }, (err) => {
    //   console.log('test2 error');
    //   console.log(err);
    // });

    // var audio = new Audio('../../assets/audio/audio_hero_Story-Time_SIPML_Q-0216.mp3');
    // audio.play();
    
  }

  ngOnInit() {
    // $(document).ready(function () {
    // })
    
    
    this.init()
  //   $('.dragme').draggable({
  //     revert: true,
  //     drag: function (e, ui) {
  //       var elem = $(ui.helper),
  //           id = elem.attr('id'),
  //           data = elem.data('example');
        
  //       $('h1').text(data + ' being dragged! #' + id);
  //   },
  // });

  //   this.platform.ready().then(() => {
  //     if (this.platform.is('android')) {
  //       this.init();
  //     }
  //   });
  //   $('.card').draggable({
  //     revert: true,
  //     drag: function (e, ui) {
  //         var elem = $(ui.helper),
  //             id = elem.attr('id'),
  //             data = elem.data('number');
          
  //         $('h1').text(data + ' being dragged! #' + id);
  //     }
  // });
    // load audio
    this.nativeAudio.preloadComplex('test2', 'assets/audio/bg_audio.mp3', 1, 1, 0).then((res) => {
      console.log('loading2...');
      console.log(res);
      this.nativeAudio.loop('test2').then((res) => {
        console.log('playing test2');
        console.log(res);
      }, (err) => {
        console.log('test2 error');
        console.log(err);
      });
    }, (err) => {
      console.log('error');
      console.log(err);
    });

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.db.getData().subscribe(data => {
          // console.log('data:', data);
          this.datas = data;
          console.log('data:', this.datas);
        })
      }
    });

    this.knowdb.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.knowdb.getEngAlps().subscribe(res => {
          this.knows = res;
          console.log('knw:', res);
        })
      }
    });
  }

  init() {
    
    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });

    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    for (var i = 0; i < this.img.length; i++) {
      $(`<div><img src="${this.img[i].img}" alt="" width="200px"></div>`)
        .data('number', this.numbers[i])
        .attr('id', 'card' + this.numbers[i])
        .appendTo('#cardPile')
        .draggable({
          stack: '#cardPile div',
          cursor: 'move',
          revert: true,
        }
      );
    }
    // Create the card slots

    // let code = this.correctCards;
    for (var i = 1; i <= this.ngow.length; i++) {
      $(`<div><img src="${this.ngow[i-1].img}" alt="" width="200px"></div>`)
        .data('number', i)
        .appendTo('#cardSlots')
        .droppable({
          accept: '#cardPile div',
          hoverClass: 'hovered',
          drop: this.handleCardDrop,
        }
      );
    }
  }

  handleCardDrop(event, ui) {
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    if (slotNumber == cardNumber) {
      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');
      $(this).droppable('disable');
      ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
      ui.draggable.draggable('option', 'revert', false);
      correctCards++;
    }

    console.log('correctCards');
    console.log(correctCards);


    // this.card_correct;

    if (correctCards == 1) {
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '380px',
        top: '200px',
        width: '400px',
        height: '100px',
        opacity: 1,
      });
    }
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
