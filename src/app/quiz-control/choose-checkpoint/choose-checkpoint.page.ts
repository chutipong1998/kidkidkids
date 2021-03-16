import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Data, DatabaseQuizService } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-choose-checkpoint',
  templateUrl: './choose-checkpoint.page.html',
  styleUrls: ['./choose-checkpoint.page.scss'],
})
export class ChooseCheckpointPage implements OnInit {

  data: Data[] = [];

  quiz: string;
  category: string;

  url: string;

  dataSc: any = [];

  constructor(public navCtrl: NavController, private route: Router, private db: DatabaseQuizService) { }

  ngOnInit() {
    this.quiz = localStorage.getItem('quiz');
    console.log('quiz =', this.quiz);
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getData(this.quiz, this.category);
      }
    });
    
  }

  goback() {
    this.navCtrl.pop();
  }

  getState(state: string) {
    localStorage.setItem('state', state)
  }

  getData(quiz: string, category: string) {
    this.db.getData().subscribe(res => {
      console.log('dev change:', res);
      for (let i = 0; i < res.length; i++) {
        if (category != null && category != '') {
          if (res[i].name_state == quiz) {
            if (res[i].category == category) {
              console.log('res:');
              console.log(res[i]);
              this.dataSc = [res[i]];

              
              this.data.push(res[i]);
              // localStorage.setItem('category', '')
            }
          }
        } else {
          if (res[i].name_state == this.quiz) {
              this.dataSc = [res[i]];
              this.data.push(res[i]);
          }
        }
      }
      console.log('dataSC =', this.dataSc);
      console.log('data =', this.data);
      localStorage.setItem('score', JSON.stringify(this.dataSc))
    });
  }

  gotostate() {
    console.log('quiz =', this.quiz);
    if (this.quiz === 'ลากวาง') {
      this.route.navigateByUrl('/state1');
      console.log('go to', this.quiz);
    } else if (this.quiz == 'ฟังเสียงเพื่อตอบคำถาม') {
      this.route.navigateByUrl('/state2');
      console.log('go to', this.quiz);
    } else if (this.quiz == 'เรียงลำดับตัวเลข') {
      this.route.navigateByUrl('/state3');
      console.log('go to', this.quiz);
    } else if (this.quiz == 'จับคู่เสียงของสัตว์') {
      this.route.navigateByUrl('/state4');
      console.log('go to', this.quiz);
    }
  }

}
