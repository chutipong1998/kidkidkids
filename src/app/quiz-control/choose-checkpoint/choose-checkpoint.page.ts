import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Data, DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-choose-checkpoint',
  templateUrl: './choose-checkpoint.page.html',
  styleUrls: ['./choose-checkpoint.page.scss'],
})
export class ChooseCheckpointPage implements OnInit {

  data: Data[] = [];

  quiz: string;
  category: string;

  constructor(public navCtrl: NavController, private db: DatabaseService) { }

  ngOnInit() {
    this.quiz = localStorage.getItem('quiz');
    console.log('quiz =', this.quiz);
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.db.getData().subscribe(res => {
          console.log('dev change:', res);
          for (let i = 0; i < res.length; i++) {
            if (this.category != null && this.category != '') {
              if (res[i].name_state == this.quiz) {
                if (res[i].category == this.category) {
                  this.data.push(res[i]);
                  // localStorage.setItem('quiz', null)
                  localStorage.setItem('category', '')
                }
              }
            } else {
              if (res[i].name_state == this.quiz) {
                this.data.push(res[i]);
                localStorage.setItem('quiz', '')

              }
            }
          }
          console.log('data =', this.data);
        })
      }
    })
    
  }

  goback() {
    this.navCtrl.pop();
  }

  getState(state: string) {
    localStorage.setItem('state', state)
  }

}
