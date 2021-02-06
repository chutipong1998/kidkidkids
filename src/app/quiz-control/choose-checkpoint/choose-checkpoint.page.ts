import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatabaseKnowledgeService, Data } from 'src/app/services/database/knowledge/database-knowledge.service';

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
  

  constructor(public navCtrl: NavController, private route: Router, private db: DatabaseKnowledgeService) { }

  ngOnInit() {
    this.quiz = localStorage.getItem('quiz');
    console.log('quiz =', this.quiz);
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getData(this.quiz, this.category);
      }
    })
    
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
              this.data.push(res[i]);
              // localStorage.setItem('quiz', null)
              // localStorage.setItem('category', '')
            }
          }
        } else {
          if (res[i].name_state == this.quiz) {
            this.data.push(res[i]);
            // localStorage.setItem('quiz', '')

          }
        }
      }
      console.log('data =', this.data);
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
