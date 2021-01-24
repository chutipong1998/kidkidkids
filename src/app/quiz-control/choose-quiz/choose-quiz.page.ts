import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-quiz',
  templateUrl: './choose-quiz.page.html',
  styleUrls: ['./choose-quiz.page.scss'],
})
export class ChooseQuizPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getQuiz(i: string) {
    localStorage.setItem('category', i);
  }

}
