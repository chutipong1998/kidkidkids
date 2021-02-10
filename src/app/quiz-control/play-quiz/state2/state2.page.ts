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

  list: any = [];
  lst: any = [];
  res: any = [];

  level: string;

  category: string;

  score: number;
  dataScore: any = [];

  // developer = {};

  constructor(private db: DatabaseQuizService) { }

  ngOnInit() {
    this.level = localStorage.getItem('state');
    this.category = localStorage.getItem('category');
    console.log('category =', this.category);

    this.dataScore = JSON.parse(localStorage.getItem('score'));
    console.log('datasc =', this.dataScore);

    this.chkScore(this.level, this.dataScore)

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

  chkScore(state: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (state == '1') {
        this.score = datascore[i].score_state1
      } else if (state == '2') {
        this.score = datascore[i].score_state2
      } else if (state == '3') {
        this.score = datascore[i].score_state3
      } else if (state == '4') {
        this.score = datascore[i].score_state4
      } else if (state == '5') {
        this.score = datascore[i].score_state5
      } else if (state == '6') {
        this.score = datascore[i].score_state6
      }
    }
  }

  getDataQuiz(category: string) {
    if (category == 'สัตว์') {
      this.db.getLisAnimal().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state === this.level) {
            this.state.push(res[i]);
          }
        }
        this.pushData(this.state)
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

  pushData(res: any) {
    let state;
    console.log('log ani =', res);
    console.log('log ani len =', res.length);

    state = Number(this.level)
    console.log('state =', state%2);
    console.log('res =', res.length);
    let j = res.length/state
    if(state%2 !== 0) {
      for (let i = 0; i < res.length; i++) {
        this.lst.push(res[i]);
        console.log('push!!');
      }
      console.log('lst =', this.lst);
      const dataObj = {
        id: 1,
        data: this.lst,
      };
      this.list.push(dataObj);
      console.log('list =');
      console.log(this.list);
    } else {
      for (let index = 0; index < j; index++) {
        for (let i = 0; i < res.length/2; i++) {
            this.lst.push(res[i + ((res.length/2)*index)]);
            console.log('push!!!!!!!!');
        }
        if(this.lst.length == res.length/2) {
          const dataObj = {
              id: index+1,
              data: this.lst,
          };
          this.list.push(dataObj)
          this.lst = []
        }
      }
      console.log('list =');
      console.log(this.list);
    }
  }


  // let len = 6
  // let state = 4
  // let j = len/state

  // let lst = []
  // let list = []

  // if(state%2 !== 0) {
  //   console.log(state + ' % 2 = 0');
  //   for (let i = 0; i < len; i++) {
  //       lst.push(i)
  //   }
  //   if(lst.length == len) {
  //       const dataObj = {
  //           id: 1,
  //           data: lst,
  //       };
  //       list.push(dataObj)
  //       lst = []
  //   }
  //   console.log('list = ' + JSON.stringify(list));
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
  //     console.log('list = ' + JSON.stringify(list));
  // }

}
