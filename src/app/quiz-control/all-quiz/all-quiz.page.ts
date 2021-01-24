import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.page.html',
  styleUrls: ['./all-quiz.page.scss'],
})
export class AllQuizPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

  getQuiz(i: string) {
    localStorage.setItem('quiz', i);
  }

}
