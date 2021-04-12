import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DatabaseQuizService, Dragdrop, Listen } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-choose-quiz',
  templateUrl: './choose-quiz.page.html',
  styleUrls: ['./choose-quiz.page.scss'],
})
export class ChooseQuizPage implements OnInit {

  quiz: string;

  topic: string;

  class: string;
  img: string;

  constructor(private route: Router) { }

  ngOnInit() {
    this.quiz = localStorage.getItem('quiz');
    // console.log('quiz =', this.quiz);

    if (this.quiz === 'ลากวาง') {
      this.topic = 'ตัวเลข';
      this.class = 'btn';
      this.img = '../../../assets/img/menu-learning-icns/2.png'
    } else if (this.quiz === 'ฟังเสียงเพื่อตอบคำถาม') {
      this.topic = 'ตัวอักษรภาษาไทย';
      this.class = 'thai-alp';
      this.img = '../../../assets/img/menu-learning-icns/1.png'
    }
  }

  getQuiz(cat: string) {
    localStorage.setItem('category', cat);
  }

  gotoAllQuiz() {
    localStorage.setItem('category', '')
    this.route.navigateByUrl('/all-quiz');
  }

}
