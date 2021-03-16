import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatabaseQuizService, Dragdrop } from 'src/app/services/database/Quiz/database-quiz.service';

import * as $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';

declare var require: any
(window as any).jQuery = $;
require('jquery-ui-touch-punch');

let correctCards = 0;

@Component({
  selector: 'app-state1',
  templateUrl: './state1.page.html',
  styleUrls: ['./state1.page.scss'],
})
export class State1Page implements OnInit {

  dragdrop: Dragdrop[] = [];

  score: number;
  dataScore: any = [];
  category: string;

  state: string;
  level: string;

  constructor(private db: DatabaseQuizService, private route: Router) {
  }

  ngOnInit() {
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.level = localStorage.getItem('state');
    console.log('level =', this.level);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.chkScore(this.level, this.dataScore)

    // this.init();

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz(this.category);
      }
    });

    $('#successMessage').hide();
    $('#successMessage').css({
      left: '580px',
      top: '250px',
      width: 0,
      height: 0,
    });
  }

  getDataQuiz(category: string) {
    if (category == 'สัตว์') {
      this.db.getDragAnimal().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.dragdrop.push(res[i]);
            this.init(this.dragdrop);
          }
        }
        console.log('dragdrop =');
        console.log(this.dragdrop);

        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ผลไม้') {
      this.db.getDragFruit().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.dragdrop.push(res[i]);
            this.init(this.dragdrop);
          }
        }
        console.log('dragdrop =');
        console.log(this.dragdrop);

        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ตัวเลข') {
      this.db.getDragNumber().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.dragdrop.push(res[i]);
            this.init(this.dragdrop);
          }
        }
        console.log('dragdrop =');
        console.log(this.dragdrop);

        // this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    }
  }

  init(dragdrop) {
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
    console.log('len =', dragdrop[0].alphabet);
    console.log('len1 =', dragdrop[0].shadow_image);
    
    for (var i = 0; i < dragdrop.length; i++) {
      $(`<div style="text-align: center; margin: auto"><img src="${dragdrop[i].alphabet}" alt="" width="130px"></div>`)
      .data('number', i+1)
      .attr('id', 'card' + dragdrop[i].id)
      .appendTo('#cardPile')
      .draggable({
        stack: '#cardPile div',
        cursor: 'move',
        revert: true,
      });
      // $(`<div><img src="${this.img[i].img}" alt="" width="200px"></div>`)
    }
    // Create the card slots

    // let code = this.correctCards;
    for (var i = 0; i < 1; i++) {
      $(`<div class="col-mid" style="margin: auto;"><img src="${dragdrop[i].shadow_image}" alt="" width="130px"></div>`)
        .data('number', dragdrop[i].answer)
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

}
