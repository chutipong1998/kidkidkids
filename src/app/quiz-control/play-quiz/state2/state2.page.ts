import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseQuizService } from 'src/app/services/database/Quiz/database-quiz.service';
import { Listen } from '../../../model/quiz/listen';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let heart = [
  {id: '1', img: '../../../../assets/img/heart.png'},
  {id: '2', img: '../../../../assets/img/heart.png'},
  {id: '3', img: '../../../../assets/img/heart.png'},
];

@Component({
  selector: 'app-state2',
  templateUrl: './state2.page.html',
  styleUrls: ['./state2.page.scss'],
})
export class State2Page implements OnInit {

  listen: Listen[] = [];

  // listen: any;

  state: string;
  // newScore: number;

  // list: any = [];
  // lst: any = [];
  // res: any = [];

  level: string;

  category: string;

  score: number;
  dataScore: any = [];

  heart: any;
  heart_status: number;
  random: number;

  constructor(private db: DatabaseQuizService, private alertCtrl: AlertController, private route: Router, private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.heart = heart;
    this.heart_status = 0;
    this.level = localStorage.getItem('state');
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.checkScore(this.level, this.dataScore)

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz(this.category);
      }
    })

    this.hideAlert();
  }

  // random_number() {
  //   return Math.floor(Math.random() * 2) + 1;
  // }

  hideAlert() {
    $('#successMessage').hide();
    $('#successMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });

    $('#failMessage').hide();
    $('#failMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });
  }

  getAns(i: string) {
    let alp;
    console.log(i);
    console.log('ans1 =', this.listen[0].answer);
    // console.log('ans =', this.list[0].data[Number(i)-1].alphabet);
    if (this.listen[0].answer == i) {
      console.log('ถูกต้อง');
      alp = this.listen[Number(i)-1].alphabet
      console.log(alp);
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '125px',
        top: '30px',
        width: '500px',
        height: '300px',
        opacity: 1,
      });
      // this.correct(alp);
    } else {
      console.log('ผิด');
      console.log('heart_statusBf =', this.heart_status);
      this.heart[this.heart_status].img = '../../../../assets/img/heart-border.png',
      this.heart_status++;
      console.log('heart_statusAt =', this.heart_status);

      if (this.heart_status ==3) {
        $('#failMessage').show();
        $('#failMessage').animate({
          left: '125px',
          top: '30px',
          width: '500px',
          height: '300px',
          opacity: 1,
        });
        // this.result_was_wrong();
      }
    }
  }

  // chkData() {
  //   this.list.splice(0, 1);
  //   console.log('del.');
  //   console.log(this.list);
  // }

  checkScore(level: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (level == '1') {
        this.score = datascore[i].score_state1;
        this.state = 'score_state1';
      } else if (level == '2') {
        this.score = datascore[i].score_state2;
        this.state = 'score_state2';
      } else if (level == '3') {
        this.score = datascore[i].score_state3;
        this.state = 'score_state3';
      } else if (level == '4') {
        this.score = datascore[i].score_state4;
        this.state = 'score_state4';
      } else if (level == '5') {
        this.score = datascore[i].score_state5;
        this.state = 'score_state5';
      } else if (level == '6') {
        this.score = datascore[i].score_state6;
        this.state = 'score_state6';
      }
    }
  }

  getDataQuiz(category: string) {
    this.hideAlert();

    this.listen = [];
    this.heart_status = 0;
    for (let i = 0; i < 3; i++) {
      heart[i].img = '../../../../assets/img/heart.png';
    }

    this.heart = heart;
    console.log('heartf =');
    console.log(this.heart);

    if (category == 'สัตว์') {
      this.db.getLisAnimal().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
            // this.listen = [res[i]];
          }
        }
        console.log('listen');
        console.log(this.listen);

        this.nativeAudio.preloadComplex(this.listen[0].sound, this.listen[0].sound, 1, 1, 0).then((res) => {
          console.log('loading...');
          console.log(res);
        }, (err) => {
          console.log('error');
          console.log(err);
        });
        
        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ตัวอักษรภาษาไทย') {
      this.db.getLisThaiAlp().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            // this.listen = [res[i]];
            this.listen.push(res[i]);
          }
        }
        console.log('listen');
        console.log(this.listen);
        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ผลไม้') {
      this.db.getLisFruit().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            // this.listen = [res[i]];
            this.listen.push(res[i]);
          }
        }
        console.log('listen');
        console.log(this.listen);
        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    }
  }

  // pushData(res: any) {
  //   let state;
  //   console.log('log ani =', res);
  //   console.log('log ani len =', res.length);

  //   state = Number(this.level)
  //   console.log('state =', state%2);
  //   console.log('res =', res.length);
  //   let j = res.length/state
  //   if(state%2 !== 0) {
  //     for (let i = 0; i < res.length; i++) {
  //       this.lst.push(res[i]);
  //       console.log('push!!');
  //     }
  //     console.log('lst =', this.lst);
  //     const dataObj = {
  //       id: 1,
  //       data: this.lst,
  //     };
  //     this.list.push(dataObj);
  //     console.log('list =');
  //     console.log(this.list);
  //   } else {
  //     for (let index = 0; index < j; index++) {
  //       for (let i = 0; i < res.length/2; i++) {
  //           this.lst.push(res[i + ((res.length/2)*index)]);
  //           console.log('push!!!!!!!!');
  //       }
  //       if(this.lst.length == res.length/2) {
  //         const dataObj = {
  //             id: index+1,
  //             data: this.lst,
  //         };
  //         this.list.push(dataObj)
  //         this.lst = []
  //       }
  //     }
  //     console.log('list =');
  //     console.log(this.list);
  //   }
  // }

  // async correct(msg_img) {
  //   let alert = await this.alertCtrl.create({
  //     header: 'สุดยอด เก่งสุดๆเลย',
  //     // subHeader: 'คุณตอบถูก',
  //     message: `<img src="../../../../assets/img/congrate.png" alt="g-maps" style="border-radius: 2px; text-align: center;">`,
  //     buttons: [
  //       {
  //         text: 'ตกลง',
  //         role: 'ok',
  //         handler: () => {
  //           let score = 100;
  //           this.updateData(this.dataScore[0].id, this.state, score);
  //           this.route.navigateByUrl('/choose-checkpoint');
  //         },
  //         cssClass: 'my-custom-class',
  //       }
  //     ], backdropDismiss: false
  //   });
  //   await alert.present();
  // }

  // async result_was_wrong() {
  //   let alert = await this.alertCtrl.create({
  //     header: 'ไม่ไหวๆ ลองใหม่อีกทีนะ',
  //     // subHeader: 'เฉลย',
  //     message: `<img src="../../../../assets/img/cry.png" alt="g-maps" style="border-radius: 2px; text-align: center;">`,
  //     cssClass: 'my-custom-class',
  //     buttons: [
  //       {
  //         text: 'กลับสู่หน้าหลัก',
  //         role: 'ok',
  //         handler: () => {
  //           for (let i = 0; i < 3; i++) {
  //             heart[i].img = '../../../../assets/img/heart.png';
  //           }
  //           this.heart = heart;
  //           this.route.navigateByUrl('/choose-checkpoint');
  //         }
  //       },
  //       {
  //         text: 'เล่นใหม่',
  //         role: 'ok',
  //         handler: () => {
  //           for (let i = 0; i < 3; i++) {
  //             heart[i].img = '../../../../assets/img/heart.png';
  //           }
  //           this.heart = heart;
            
  //           // this.db.getDatabaseState().subscribe(ready => {
  //           //   if(ready) {
  //           //     this.getDataQuiz(this.category);
  //           //   }
  //           // })
  //         }
  //       }
  //     ], backdropDismiss: false

  //   });
  //   await alert.present();
  // }

  gotoCheckpoint() {
    let score = 100 - (20*this.heart_status);
    console.log('dataScore:');
    console.log(this.dataScore[0].id);
    console.log('state =');
    console.log(this.state);
    
    if (score > this.score) {
      this.updateData(this.dataScore[0].id, this.state, score);
    }
    // localStorage.setItem('state', '');
    this.route.navigateByUrl('/choose-checkpoint');
  }

  fail() {
    for (let i = 0; i < 3; i++) {
      heart[i].img = '../../../../assets/img/heart.png';
    }
    this.heart = heart;
    console.log('heartf =');
    console.log(this.heart);
    this.route.navigateByUrl('/choose-checkpoint');
  }

  updateData(id: string, scoreState: string, score: number) {
    // let alphabets = this.dataScore['alphabet'].split(',');
    // alphabets = alphabets.map(alphabet => alphabet.trim());

    let total;
    if (scoreState == 'score_state1') {
      total = score
            + this.dataScore[0].score_state2
            + this.dataScore[0].score_state3
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state2') {
      total = this.dataScore[0].score_state1
            + score
            + this.dataScore[0].score_state3
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state3') {
      total = this.dataScore[0].score_state1
            + this.dataScore[0].score_state2
            + score
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state4') {
      total = this.dataScore[0].score_state1
            + this.dataScore[0].score_state2
            + this.dataScore[0].score_state3
            + score
    }

 
    this.db.updateData(id, scoreState, score, total)
    .then(_ => {
      console.log('update complete!!');
    });
  }

  listenToAnimalSound(){
    this.nativeAudio.play(this.listen[0].sound).then((res) => {
      console.log('playing animalSound');
      console.log(res);
    }, (err) => {
      console.log('animalSound playing error');
      console.log(err);
    });
  }



  // let len = 6
  // let state = 4
  // let j = len/state

  // let lst = []
  // let list = []

  // if(state%2 !== 0) {
  //   console.log(state + ' % 2 = 0');
  //   for (let i = 0; i < len; i++) {
  //       lst.push(i)
  //   }
  //   if(lst.length == len) {
  //       const dataObj = {
  //           id: 1,
  //           data: lst,
  //       };
  //       list.push(dataObj)
  //       lst = []
  //   }
  //   console.log('list = ' + JSON.stringify(list));
  // } else {
  //     for (let index = 0; index < j; index++) {
  //         for (let i = 0; i < len/2; i++) {
  //             let k = i + ((len/2)*index);
  //             lst.push(k)
  //         }
  //         if(lst.length == len/2) {
  //             const dataObj = {
  //                 id: index+1,
  //                 data: lst,
  //             };
  //             list.push(dataObj)
  //             lst = []
  //         }
  //     }
  //     console.log('list = ' + JSON.stringify(list));
  // }

}
