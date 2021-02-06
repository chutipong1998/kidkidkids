import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseQuizService, Dragdrop, Listen } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-choose-quiz',
  templateUrl: './choose-quiz.page.html',
  styleUrls: ['./choose-quiz.page.scss'],
})
export class ChooseQuizPage implements OnInit {

  quiz: string;

  constructor(private route: Router, private db: DatabaseQuizService) { }

  ngOnInit() {
    this.quiz = localStorage.getItem('quiz');
    console.log('quiz =', this.quiz);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz(this.quiz);
      }
    });
  }

  getQuiz(i: string) {
    localStorage.setItem('category', i);
  }

  gotoAllQuiz() {
    localStorage.setItem('category', '')
    this.route.navigateByUrl('/all-quiz');
  }

  getDataQuiz(quiz: string) {
    if (quiz === 'ลากวาง') {
      this.db.getDragNumber().subscribe(res => {
        console.log('res:', res);
        // this.datas = devs;
      });
    }
  }

}
