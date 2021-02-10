import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.page.html',
  styleUrls: ['./all-quiz.page.scss'],
})
export class AllQuizPage implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

  getQuiz(quiz: string) {
    localStorage.setItem('quiz', quiz);
    localStorage.setItem('category', '');
  }

  // getTopcQuiz(quiz: string) {
  //   if (quiz === 'ลากวาง') {
  //     this.db.getDragNumber().subscribe(res => {
  //       // console.log('res:', res[0]);
  //       for (let i = 0; i < res.length; i++) {
  //         console.log('data:', res[0].category);
  //         this.topic = res[0].category;
  //       }
  //       localStorage.setItem('topic', this.topic);
  //       localStorage.setItem('class', 'btn');
  //       // console.log('topic =', this.topic);
  //       // this.class = 'btn';
  //       // this.datas = devs;
  //     });
  //   } else if (quiz === 'ฟังเสียงเพื่อตอบคำถาม') {
  //     this.db.getLisThaiAlp().subscribe(res => {
  //       // console.log('res:', res[0]);
  //       for (let i = 0; i < res.length; i++) {
  //         console.log('data:', res[0].category);
  //         this.topic = res[0].category;
  //       }
  //       localStorage.setItem('topic', this.topic);
  //       localStorage.setItem('class', 'thai-alp');
  //       // console.log('topic =', this.topic);
  //       // this.class = 'thai-alp';
  //       // this.topic = res[0].category;
  //     });
  //   }
  // }

}
