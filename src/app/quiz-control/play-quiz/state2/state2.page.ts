import { Component, OnInit } from '@angular/core';
import { DatabaseService, Listen } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-state2',
  templateUrl: './state2.page.html',
  styleUrls: ['./state2.page.scss'],
})
export class State2Page implements OnInit {

  listen: Listen[] = [];

  state: Listen[] = [];

  level: string;

  

  // developer = {};

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.level = localStorage.getItem('state');
    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        // if (condition) {
          
        // }
        this.db.getLisAnimal().subscribe(res => {
          console.log('listen change:', res);
          // this.listen = res;
          for (let i = 0; i < res.length; i++) {
            if (res[i].state === this.level) {
              this.state.push(res[i]);
            }
            
          }
        })
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

}
