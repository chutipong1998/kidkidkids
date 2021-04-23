import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
  state: string;
  level: string;
  category: string;
  score: number;
  dataScore: any = [];
  heart: any;
  heart_status: number;
  random: number;
  statusSound: boolean;

  constructor(
    private db: DatabaseQuizService,
    private route: Router, 
    private nativeAudio: NativeAudio
  ) { }

  ngOnInit() {
    this.heart = heart;
    this.heart_status = 0;
    this.level = localStorage.getItem('state');
    this.category = localStorage.getItem('category');

    this.nativeAudio.stop('test2').then((res) => {
      console.log('stop test2');
      console.log(res);
    }, (err) => {
      console.log('test2 stop error');
      console.log(err);
    });
    this.statusSound = true;
    localStorage.setItem('statusSound', JSON.stringify(this.statusSound));

    this.dataScore = JSON.parse(localStorage.getItem('score'));

    this.checkScore(this.level, this.dataScore)

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz(this.category);
      }
    })

    this.hideAlert();
  }

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

    this.continueGame();
  }

  continueGame() {
    $('#resetGame').hide();
    $('#resetGame').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });
  }

  getAns(i: string) {
    let alp;
    if (this.listen[0].answer == i) {
      alp = this.listen[Number(i)-1].alphabet
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '125px',
        top: '30px',
        width: '500px',
        height: '300px',
        opacity: 1,
      });
    } else {
      this.heart[this.heart_status].img = '../../../../assets/img/heart-border.png',
      this.heart_status++;

      if (this.heart_status ==3) {
        $('#failMessage').show();
        $('#failMessage').animate({
          left: '125px',
          top: '30px',
          width: '500px',
          height: '300px',
          opacity: 1,
        });
      }
    }
  }

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

    if (category == 'สัตว์') {
      this.db.getLisAnimal().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }

        this.loadSound();
      });
    } else if (category == 'ตัวอักษรภาษาไทย') {
      this.db.getLisThaiAlp().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }
        this.loadSound();
      });
    } else if (category == 'ผลไม้') {
      this.db.getLisFruit().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }
        this.loadSound();
      });
    }
  }

  loadSound() {
    this.nativeAudio.preloadSimple(this.listen[0].sound, this.listen[0].sound).then((res) => {
      console.log('loading...');
      console.log(res);
    }, (err) => {
      console.log('error');
      console.log(err);
    });
  }

  gotoCheckpoint() {
    let score = 100 - (20*this.heart_status);
    if (score > this.score) {
      this.updateData(this.dataScore[0].id, this.state, score);
    }
    this.route.navigateByUrl('/choose-checkpoint');
    this.playBgSound();
  }

  fail() {
    for (let i = 0; i < 3; i++) {
      heart[i].img = '../../../../assets/img/heart.png';
    }
    this.heart = heart;
    this.route.navigateByUrl('/choose-checkpoint');
    this.playBgSound();
  }

  updateData(id: string, scoreState: string, score: number) {
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

  resetGame() {
    $('#resetGame').show();
    $('#resetGame').animate({
      left: '125px',
      top: '30px',
      width: '500px',
      height: '300px',
      opacity: 1,
    });
  }

  playBgSound() {
    this.nativeAudio.loop('test2').then((res) => {
      console.log('playing test2');
      console.log(res);
    }, (err) => {
      console.log('test2 playing error');
      console.log(err);
    });
    this.statusSound = false;
    localStorage.setItem('statusSound', JSON.stringify(this.statusSound));
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
