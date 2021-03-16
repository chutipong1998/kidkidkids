import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseQuizService, Match_animal_sound } from 'src/app/services/database/Quiz/database-quiz.service';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let correctCards = 0;

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

  match_sound: Match_animal_sound[] = [];
  data_match_sound_left: Match_animal_sound[] = [];
  data_match_sound_right: Match_animal_sound[] = [];

  constructor(private db: DatabaseQuizService, private route: Router) { }

  ngOnInit() {
    $('#successMessage').hide();
    $('#successMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });

    this.level = localStorage.getItem('state');
    console.log('level =', this.level);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.chkScore(this.level, this.dataScore);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz();
      }
    });
  }

  getDataQuiz() {
    this.db.getMatchAnimalSound().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].state === this.level) {
          this.match_sound.push(res[i])
          this.drag_drop(this.match_sound);
        }
      }
      console.log('dmsl =');
      console.log(this.match_sound);
    });

  }

  drag_drop(match_sound: any) {
    $('#successMessage').hide();
    $('#successMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });

    // $("p").css({"background-color": "yellow", "font-size": "200%"});

    // Reset the game
    correctCards = 0;
    
    $('#cardPileLeft').html('');
    $('#cardPileRight').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    console.log('len =', match_sound);
    console.log('len1 =', match_sound[0].answer);
    
    for (var i = 0; i < match_sound.length; i++) {
      console.log('i =', i);
      if (i%2 == 0) {
        $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
        .data('number', i+1)
        .attr('id', 'card' + match_sound[i].id)
        .appendTo('#cardPileLeft')
        .draggable({
          stack: '#cardPileLeft div',
          cursor: 'move',
          revert: true,
        });
      } else {
        $(`<div style="text-align: center; margin: auto"><img src="${match_sound[i].alphabet}" alt="" width="100px"></div>`)
        .data('number', i+1)
        .attr('id', 'card' + match_sound[i].id)
        .appendTo('#cardPileRight')
        .draggable({
          stack: '#cardPileRight div',
          cursor: 'move',
          revert: true,
        });
      }
    }

    // let code = this.correctCards;
    for (var i = 0; i < 1; i++) {
      // $('<div class="col-mid" style="margin: auto;">' + match_sound[0].answer + '</div>')
      $(`<div class="col-mid" style="margin: auto;"><img class="img-ngao" src="../../../../assets/img/24663.jpg" alt="" width="100px"></div>`)
        .data('number', match_sound[i].answer)
        .appendTo('#cardSlots')
        .droppable({
          accept: '#cardPileLeft div, #cardPileRight div',
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
        left: '182px',
        top: '70px',
        width: '500px',
        height: '300px',
        opacity: 1,
      });
    }
  }

  chkScore(level: string, datascore: any) {
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

  go_to_chk_point() {
    let score = 100;
    console.log('dataScore:');
    console.log(this.dataScore[0].id);
    console.log('state =');
    console.log(this.state);
    
    this.updateData(this.dataScore[0].id, this.state, score);
    // localStorage.setItem('state', '');
    this.route.navigateByUrl('/choose-checkpoint');
  }

}
