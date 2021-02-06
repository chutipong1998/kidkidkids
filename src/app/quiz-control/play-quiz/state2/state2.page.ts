import { Component, OnInit } from '@angular/core';
import { DatabaseQuizService, Listen } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-state2',
  templateUrl: './state2.page.html',
  styleUrls: ['./state2.page.scss'],
})
export class State2Page implements OnInit {

  listen: Listen[] = [];

  state: Listen[] = [];

  level: string;

  category: string;

  // developer = {};

  constructor(private db: DatabaseQuizService) { }

  ngOnInit() {
    this.level = localStorage.getItem('state');
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);
    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.getDataQuiz(this.category);
      }
    })
  }

  getAns(i: string) {
    console.log(i);
    console.log('ans =', this.state[0].answer);
    if (this.state[0].answer == i) {
      console.log('ถูกต้อง');
    } else {
      console.log('ผิด');
    }
  }

  getDataQuiz(category: string) {
    if (category == 'สัตว์') {
      this.db.getLisAnimal().subscribe(res => {
        console.log('log ani =', res);
        // this.listen = res;
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.state.push(res[i]);
          }
          
        }
        console.log('animal =', this.state);
      });
    } else if (category == 'ตัวอักษรภาษาไทย') {
      this.db.getLisThaiAlp().subscribe(res => {
        console.log('log thai =', res);
        // this.listen = res;
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.state.push(res[i]);
          }
          
        }
        console.log('thaiAlp =', this.state);
      });
    } else if (category == 'ผลไม้') {
      this.db.getLisFruit().subscribe(res => {
        console.log('log fru =', res);
        // this.listen = res;
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.state.push(res[i]);
          }
          
        }
        console.log('fruit =', this.state);
      });
    }
  }


  // let len = 6
  // let state = 4
  // let j = len/state

  // let lst = []
  // let list = []

  // if(state%2 !== 0) {
  //     console.log(state + ' % 2 = 0');
  // } else {
  //     for (let index = 0; index < j; index++) {
  //         for (let i = 0; i < len/2; i++) {
  //             let k = i + ((len/2)*index);
  //             lst.push(k)
  //         }
  //         if(lst.length == len/2) {
  //             const dataObj = {
  //                 id: index+1,
  //                 data: lst,
  //             };
  //             list.push(dataObj)
  //             lst = []
  //         }
  //     }
  //     console.log('list = ' + list);
  // }

}
