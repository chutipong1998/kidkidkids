import { Component, OnInit } from '@angular/core';
import { DatabaseQuizService } from 'src/app/services/database/Quiz/database-quiz.service';
import { Router } from '@angular/router';
import { SortNumber } from '../../../model/quiz/sortNumber';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let correctCards = 0;
let win = 0;
let heart_status = 0;
let heart = [
  {id: '1', img: '../../../../assets/img/heart.png'},
  {id: '2', img: '../../../../assets/img/heart.png'},
  {id: '3', img: '../../../../assets/img/heart.png'},
];

@Component({
  selector: 'app-state3',
  templateUrl: './state3.page.html',
  styleUrls: ['./state3.page.scss'],
})
export class State3Page implements OnInit {

  score: number;
  dataScore: any = [];
  category: string;

  state: string;
  level: string;

  topic: string;

  heart: any;

  data_sort_number: SortNumber[] = [];
  random: number;

  constructor(private db: DatabaseQuizService, private route: Router) { }

  ngOnInit() {
    this.hide_alert();
    this.heart = heart;

    this.level = localStorage.getItem('state');
    console.log('level =', this.level);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.checkScore(this.level, this.dataScore)

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
    this.db.getSortNumber().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].state === this.level) {
          this.data_sort_number.push(res[i]);
          this.drag_drop(this.data_sort_number);
        }
      }
      console.log('dsn =');
      console.log(this.data_sort_number);
    });

  }

  drag_drop(data_sort_number: any) {
    for (let i = 0; i < 3; i++) {
      heart[i].img = '../../../../assets/img/heart.png';
    }
    this.heart = heart;

    this.hide_alert();

    // Reset the game
    correctCards = 0;
    heart_status = 0;
    win = data_sort_number.length;
    console.log('win =', win);
    
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    console.log('len =', data_sort_number);
    console.log('len1 =', data_sort_number[0].answer);
    
    for (var i = 0; i < data_sort_number.length; i++) {
      $(`<div style="text-align: center; margin: auto"><img src="${data_sort_number[i].alphabet}" alt="" width="100px"></div>`)
      .data('number', data_sort_number[i].answer)
      .attr('id', 'card' + data_sort_number[i].id)
      .appendTo('#cardPile')
      .draggable({
        stack: '#cardPile div',
        cursor: 'move',
        revert: true,
      });
    }

    // let code = this.correctCards;
    for (var i = 0; i < data_sort_number.length; i++) {
      // $('<div class="col-mid" style="margin: auto;">' + data_sort_number[0].answer + '</div>')
      $(`<div class="col-mid" style="margin: auto;"><img class="img-ngao" src="../../../../assets/img/24663.jpg" alt="" width="100px"></div>`)
        .data('number', i+1)
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
          left: '182px',
          top: '70px',
          width: '500px',
          height: '300px',
          opacity: 1,
        });
      }
    }

    console.log('correctCards');
    console.log(correctCards);


    // this.card_correct;

    if (correctCards == win) {
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '182px',
        top: '70px',
        width: '500px',
        height: '300px',
        opacity: 1,
      });
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
    console.log('state_score =');
    console.log(this.score);

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

  checkScore(level: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (level == '1') {
        this.score = datascore[i].score_state1
        this.state = 'score_state1';
        this.topic = 'จงเรียงลำดับตัวเลขจากน้อยไปมากต่อไปนี้';
      } else if (level == '2') {
        this.score = datascore[i].score_state2
        this.state = 'score_state2';
        this.topic = 'จงเรียงลำดับตัวเลขจากมากไปน้อยต่อไปนี้';
      } else if (level == '3') {
        this.score = datascore[i].score_state3
        this.state = 'score_state3';
        this.topic = 'จงเรียงลำดับตัวเลขจากน้อยไปมากต่อไปนี้';
      } else if (level == '4') {
        this.score = datascore[i].score_state4
        this.state = 'score_state4';
      } else if (level == '5') {
        this.score = datascore[i].score_state5
        this.state = 'score_state5';
        this.topic = 'จงเรียงลำดับตัวเลขจากน้อยไปมากต่อไปนี้';
      } else if (level == '6') {
        this.score = datascore[i].score_state6
        this.state = 'score_state6';
        this.topic = 'จงเรียงลำดับตัวเลขจากน้อยไปมากต่อไปนี้';
      }
    }
  }

}
