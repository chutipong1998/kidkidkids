import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseQuizService } from 'src/app/services/database/Quiz/database-quiz.service';
import { MatchAnimalSound } from '../../../model/quiz/matchAnimalSound';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let correctCards = 0;
let heart_status = 0;
let heart = [
  {id: '1', img: '../../../../assets/img/heart.png'},
  {id: '2', img: '../../../../assets/img/heart.png'},
  {id: '3', img: '../../../../assets/img/heart.png'},
];

@Component({
  selector: 'app-state4',
  templateUrl: './state4.page.html',
  styleUrls: ['./state4.page.scss'],
})
export class State4Page implements OnInit {

  score: number;
  dataScore: any = [];
  category: string;

  state: string;
  level: string;

  heart: any;

  match_sound: MatchAnimalSound[] = [];
  // data_match_sound_left: Match_animal_sound[] = [];
  // data_match_sound_right: Match_animal_sound[] = [];

  constructor(private db: DatabaseQuizService, private route: Router, private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.hide_alert();

    this.level = localStorage.getItem('state');
    // console.log('level =', this.level);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    // console.log('datasc =', this.dataScore);

    this.checkScore(this.level, this.dataScore);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz();
      }
    });
  }

  // random_number() {
  //   return Math.floor(Math.random() * 2) + 1;
  // }

  hide_alert() {
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

  getDataQuiz() {
    this.db.getMatchAnimalSound().subscribe(async res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].state === this.level) {
          this.match_sound.push(res[i])
          // this.drag_drop(this.match_sound);
        }
      }
      console.log('dmsl =');
      console.log(this.match_sound);
      await this.drag_drop(this.match_sound);

      await this.nativeAudio.preloadComplex(this.match_sound[0].sound, this.match_sound[0].sound, 1, 1, 0).then((res) => {
        console.log('loading...');
        console.log(res);
      }, (err) => {
        console.log('error');
        console.log(err);
      });
    });

  }

  drag_drop(match_sound: any) {
    for (let i = 0; i < 3; i++) {
      heart[i].img = '../../../../assets/img/heart.png';
    }
    this.heart = heart;

    this.hide_alert();

    // Reset the game
    correctCards = 0;
    heart_status = 0;
    
    $('#cardPileLeftTop').html('');
    $('#cardPileRightTop').html('');
    $('#cardPileLeftBottom').html('');
    $('#cardPileRightBottom').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    // console.log('len =', match_sound);
    // console.log('len1 =', match_sound[0].answer);
    
    console.log('len =', match_sound.length);
    for (var i = 0; i < match_sound.length; i++) {
      console.log('i =', i);
      if (i%2 == 0) {
        if (i%4 == 0) {
          console.log('ซ้ายบน =', i%4);
          $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
          .data('number', i+1)
          .attr('id', 'card' + match_sound[i].id)
          .appendTo('#cardPileLeftTop')
          .draggable({
            stack: '#cardPileLeftTop div',
            cursor: 'move',
            revert: true,
          });
        } else if (i%4 == 2) {
          console.log('ซ้ายล่าง =', i%4);
          $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
          .data('number', i+1)
          .attr('id', 'card' + match_sound[i].id)
          .appendTo('#cardPileLeftBottom')
          .draggable({
            stack: '#cardPileLeftBottom div',
            cursor: 'move',
            revert: true,
          });
        }
      } else {
        if (i%4 == 1) {
          console.log('ขวาบน =', i%4);
          $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
          .data('number', i+1)
          .attr('id', 'card' + match_sound[i].id)
          .appendTo('#cardPileRightTop')
          .draggable({
            stack: '#cardPileRighTop div',
            cursor: 'move',
            revert: true,
          });
        } else if (i%4 == 3) {
          console.log('ขวาล่าง =', i%4);
          $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
          .data('number', i+1)
          .attr('id', 'card' + match_sound[i].id)
          .appendTo('#cardPileRightBottom')
          .draggable({
            stack: '#cardPileRightBottom div',
            cursor: 'move',
            revert: true,
          });
        }
      }
    }

    // let code = this.correctCards;
    for (var i = 0; i < 1; i++) {
      // $('<div class="col-mid" style="margin: auto;">' + match_sound[0].answer + '</div>')
      if (match_sound.length != 0) {
        $(`<div class="col-mid" style="margin: auto;"><img class="img-ngao" src="../../../../assets/img/shadow-animals/box-shadow.png" alt="" width="100px"></div>`)
          .data('number', match_sound[i].answer)
          .appendTo('#cardSlots')
          .droppable({
            accept: '#cardPileLeftTop div, #cardPileLeftBottom div, #cardPileRightTop div, #cardPileRightBottom div',
            hoverClass: 'hovered',
            drop: this.handleCardDrop,
          }
        );
      }
    }
  }

  handleCardDrop(event, ui) {
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    console.log('slotNumber =', slotNumber);
    console.log('cardNumber =', cardNumber);

    if (slotNumber == cardNumber) {
      // ui.draggable.addClass('correct');
      // ui.draggable.draggable('disable');
      // $(this).droppable('disable');
      ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
      ui.draggable.draggable('option', 'revert', false);
      correctCards++;
    } else {
      console.log('heart_statusBf =', heart_status);
      heart[heart_status].img = '../../../../assets/img/heart-border.png',
      heart_status++;
      console.log('heart_statusAt =', heart_status);
      if (heart_status == 3) {
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

    console.log('correctCards');
    console.log(correctCards);


    // this.card_correct;

    if (correctCards == 1) {
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '125px',
        top: '30px',
        width: '500px',
        height: '300px',
        opacity: 1,
      });
    }
  }

  checkScore(level: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (level == '1') {
        this.score = datascore[i].score_state1
        this.state = 'score_state1';
      } else if (level == '2') {
        this.score = datascore[i].score_state2
        this.state = 'score_state2';
      } else if (level == '3') {
        this.score = datascore[i].score_state3
        this.state = 'score_state3';
      } else if (level == '4') {
        this.score = datascore[i].score_state4
        this.state = 'score_state4';
      } else if (level == '5') {
        this.score = datascore[i].score_state5
        this.state = 'score_state5';
      } else if (level == '6') {
        this.score = datascore[i].score_state6
        this.state = 'score_state6';
      }
    }
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

  gotoCheckpoint() {
    console.log('heart_statusFn =', heart_status);
    let score = 100 - (20*heart_status);
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

  listenToAnimalSound(){
    this.nativeAudio.play(this.match_sound[0].sound).then((res) => {
      console.log('playing animalSound');
      console.log(res);
    }, (err) => {
      console.log('animalSound playing error');
      console.log(err);
    });
  }

}
