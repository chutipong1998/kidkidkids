import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseQuizService, Listen } from 'src/app/services/database/Quiz/database-quiz.service';

@Component({
  selector: 'app-state2',
  templateUrl: './state2.page.html',
  styleUrls: ['./state2.page.scss'],
})
export class State2Page implements OnInit {

  listen: Listen[] = [];

  state: string;
  newScore: number;

  list: any = [];
  lst: any = [];
  res: any = [];

  level: string;

  category: string;

  score: number;
  dataScore: any = [];

  // developer = {};

  constructor(private db: DatabaseQuizService, private alertCtrl: AlertController, private route: Router) { }

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
    let alp;
    console.log(i);
    console.log('ans1 =', this.listen[0].answer);
    // console.log('ans =', this.list[0].data[Number(i)-1].alphabet);
    if (this.listen[0].answer == i) {
      console.log('ถูกต้อง');
      alp = this.listen[Number(i)-1].alphabet
      console.log(alp);
      if (this.list.length > 1) {
        this.next(alp);
      } else {
        this.correct(alp);
      }
    } else {
      console.log('ผิด');
    }
  }

  chkData() {
    this.list.splice(0, 1);
    console.log('del.');
    console.log(this.list);
  }

  chkScore(state: string, datascore: any) {
    for (let i = 0; i < datascore.length; i++) {
      if (state == '1') {
        this.score = datascore[i].score_state1;
        this.state = 'score_state1';
      } else if (state == '2') {
        this.score = datascore[i].score_state2;
        this.state = 'score_state2';
      } else if (state == '3') {
        this.score = datascore[i].score_state3;
        this.state = 'score_state3';
      } else if (state == '4') {
        this.score = datascore[i].score_state4;
        this.state = 'score_state4';
      } else if (state == '5') {
        this.score = datascore[i].score_state5;
        this.state = 'score_state5';
      } else if (state == '6') {
        this.score = datascore[i].score_state6;
        this.state = 'score_state6';
      }
    }
  }

  getDataQuiz(category: string) {
    if (category == 'สัตว์') {
      this.db.getLisAnimal().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }
        console.log('listen');
        console.log(this.listen);
        
        this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ตัวอักษรภาษาไทย') {
      this.db.getLisThaiAlp().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }
        console.log('listen');
        console.log(this.listen);
        this.pushData(this.listen)
        // localStorage.setItem('category', '')
      });
    } else if (category == 'ผลไม้') {
      this.db.getLisFruit().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].state == this.level) {
            this.listen.push(res[i]);
          }
        }
        console.log('listen');
        console.log(this.listen);
        this.pushData(this.listen)
        // localStorage.setItem('category', '')
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

  async correct(msg_img) {
    let alert = await this.alertCtrl.create({
      header: 'ยินดีด้วย คุณตอบถูก',
      // subHeader: 'คุณตอบถูก',
      message: 'คำตอบคือ :  ' + `<img src="${msg_img}" alt="g-maps" style="border-radius: 2px; text-align: center;">`,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'ตกลง',
          role: 'ok',
          handler: () => {
            let score = 100;
            this.updateData(this.dataScore[0].id, this.state, score);
            this.route.navigateByUrl('/choose-checkpoint');
          }
        }
      ], backdropDismiss: false
    });
    await alert.present();
  }

  async next(msg_img) {
    let alert = await this.alertCtrl.create({
      header: 'ยินดีด้วย คุณตอบถูก',
      // subHeader: 'คุณตอบถูก',
      message: 'คำตอบคือ :  ' + `<img src="${msg_img}" alt="g-maps" style="border-radius: 2px; text-align: center;">`,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'ถัดไป',
          role: 'ok',
          handler: () => {
            this.list.splice(0, 1);
          }
        }
      ], backdropDismiss: false
    });
    await alert.present();
  }

  async result_was_wrong(txt) {
    let alert = await this.alertCtrl.create({
      header: 'คุณตอบผิด !!',
      // subHeader: 'เฉลย',
      message: 'เฉลย : ' + txt,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'ตกลง',
          role: 'ok',
          handler: () => {
            // this.quiz.splice(0, 1);
            // console.log('count =', this.quiz.length);
            // console.log('catd =', this.quiz);
            // this.status = '';
            // // clearInterval(this.timer);
            // this.maxtime = 60;
            // this.StartTimer(this.maxtime);
            // console.log('Cancel clicked');
          }
        }
      ], backdropDismiss: false

    });
    await alert.present();
  }


  updateData(id: string, scoreState: string, score: number) {
    // let alphabets = this.dataScore['alphabet'].split(',');
    // alphabets = alphabets.map(alphabet => alphabet.trim());

    let total;
    if (scoreState == 'score_state1') {
      total = score
            + this.dataScore[0].score_state2
            + this.dataScore[0].score_state3
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state2') {
      total = this.dataScore[0].score_state1
            + score
            + this.dataScore[0].score_state3
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state3') {
      total = this.dataScore[0].score_state1
            + this.dataScore[0].score_state2
            + score
            + this.dataScore[0].score_state4
    } else if (scoreState == 'score_state4') {
      total = this.dataScore[0].score_state1
            + this.dataScore[0].score_state2
            + this.dataScore[0].score_state3
            + score
    }

 
    this.db.updateData(id, scoreState, score, total)
    .then(_ => {
      console.log('update complete!!');
    });
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
