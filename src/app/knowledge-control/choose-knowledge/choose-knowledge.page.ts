import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatabaseKnowledgeService } from 'src/app/services/database/knowledge/database-knowledge.service';

@Component({
  selector: 'app-choose-knowledge',
  templateUrl: './choose-knowledge.page.html',
  styleUrls: ['./choose-knowledge.page.scss'],
})
export class ChooseKnowledgePage implements OnInit {

  // mock = [
  //   {
  //     id: 1,
  //     name: 'thaiAlphabet',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: 'englishAlphabet',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/letters/eng/Gg.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/letters/eng/Hh.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/letters/eng/Ii.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/letters/eng/Jj.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/letters/eng/Kk.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/letters/eng/Ff.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: 'number',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/number/one.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/number/two.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/number/three.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/number/four.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/number/five.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/number/six.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'animal',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/animal/bird.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/animal/dog.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/animal/horse.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/animal/monkey.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/animal/elephant.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/animal/Pig.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 5,
  //     name: 'fruit',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/fruit/apple.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/fruit/orange.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/fruit/strawberry.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/fruit/mango.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/fruit/watermelon.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/fruit/banana.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 6,
  //     name: 'vehicle',
  //     datatop: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/vehicle/ship.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/vehicle/bus.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/vehicle/taxi.png'
  //       },
  //     ],
  //     databuttom: [
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/vehicle/bike.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/vehicle/Motorcycles.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/vehicle/plane.png'
  //       },
  //     ]
  //   },
  // ]

  // d = [
  //   {
  //     id: 1,
  //     data: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/letters/eng/Gg.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/letters/eng/Hh.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/letters/eng/Ii.png'
  //       },
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/letters/eng/Jj.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/letters/eng/Kk.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/letters/eng/Ll.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     data: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/letters/thai/1.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/letters/thai/2.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/letters/thai/3.png'
  //       },
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/letters/thai/4.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/letters/thai/5.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/letters/thai/6.png'
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     data: [
  //       {
  //         id: 1,
  //         alphabet: '../../../assets/img/fruit/apple.png'
  //       },
  //       {
  //         id: 2,
  //         alphabet: '../../../assets/img/fruit/orange.png'
  //       },
  //       {
  //         id: 3,
  //         alphabet: '../../../assets/img/fruit/strawberry.png'
  //       },
  //       {
  //         id: 4,
  //         alphabet: '../../../assets/img/fruit/mango.png'
  //       },
  //       {
  //         id: 5,
  //         alphabet: '../../../assets/img/fruit/watermelon.png'
  //       },
  //       {
  //         id: 6,
  //         alphabet: '../../../assets/img/fruit/banana.png'
  //       },
  //     ]
  //   }
  // ]

  // data = [
  //   {
  //     id: 1,
  //     alphabet: '../../../assets/img/letters/eng/Gg.png'
  //   },
  //   {
  //     id: 2,
  //     alphabet: '../../../assets/img/letters/eng/Hh.png'
  //   },
  //   {
  //     id: 3,
  //     alphabet: '../../../assets/img/letters/eng/Ii.png'
  //   },
  //   {
  //     id: 4,
  //     alphabet: '../../../assets/img/letters/eng/Jj.png'
  //   },
  //   {
  //     id: 5,
  //     alphabet: '../../../assets/img/letters/eng/Kk.png'
  //   },
  //   {
  //     id: 6,
  //     alphabet: '../../../assets/img/letters/eng/Ll.png'
  //   },
  //   {
  //     id: 1,
  //     alphabet: '../../../assets/img/letters/thai/1.png'
  //   },
  //   {
  //     id: 2,
  //     alphabet: '../../../assets/img/letters/thai/2.png'
  //   },
  //   {
  //     id: 3,
  //     alphabet: '../../../assets/img/letters/thai/3.png'
  //   },
  //   {
  //     id: 4,
  //     alphabet: '../../../assets/img/letters/thai/4.png'
  //   },
  //   {
  //     id: 5,
  //     alphabet: '../../../assets/img/letters/thai/5.png'
  //   },
  //   {
  //     id: 6,
  //     alphabet: '../../../assets/img/letters/thai/6.png'
  //   },{
  //     id: 1,
  //     alphabet: '../../../assets/img/fruit/apple.png'
  //   },
  //   {
  //     id: 2,
  //     alphabet: '../../../assets/img/fruit/orange.png'
  //   },
  //   {
  //     id: 3,
  //     alphabet: '../../../assets/img/fruit/strawberry.png'
  //   },
  //   {
  //     id: 4,
  //     alphabet: '../../../assets/img/fruit/mango.png'
  //   },
  //   {
  //     id: 5,
  //     alphabet: '../../../assets/img/fruit/watermelon.png'
  //   },
  //   {
  //     id: 6,
  //     alphabet: '../../../assets/img/fruit/banana.png'
  //   },
  // ]

  topic: string;

  info: any = [];

  dataString: any = [];
  data: any = [];

  url = 'play-knowledge';


  constructor(public navCtrl: NavController, private route: Router, private db: DatabaseKnowledgeService,) {

    // console.log('len(dataString) =', this.dataString.length);
    // console.log('len(dataString)/6 =', this.dataString.length/6);


    // tslint:disable-next-line: prefer-for-of
    // for (let index = 0; index < this.mock.length; index++) {
    //   if (this.mock[index].name == this.toppic) {
    //     this.showTop = this.mock[index].datatop;
    //     this.showUnder = this.mock[index].databuttom;
    //     console.log('name =', this.mock[index].datatop);
    //     // console.log('show =', this.show[0].alphabet);
    //   }
    // }

    // console.log('ind =', this.data.length/6);

    // for (let i = 0; i < this.data.length/6; i++) {
    //   for (let j = 0; j < 6; j++) {
    //     if (i == 0) {
    //       this.test.push(this.data[j])
    //     } else {
    //       this.test.push(this.data[j + (6*i)])
    //     }
    //     if (this.test.length == 6) {
    //       const dataObj = {
    //         id: i+1,
    //         data: this.test,
    //       };

    //       // this.test1.push(this.test)
    //       this.dataString.push(dataObj)
    //       this.test = []
    //     }
    //   }
    // }

    // console.log('e:', this.dataString);
    // console.log('d:', this.d);
  }

  ngOnInit() {
    this.topic = localStorage.getItem('topic');
    // console.log('topic = ' + this.topic);

    // console.log('mod1 =', 26%6);


    this.getData(this.topic);
  }

  showData(data: any) {
    // console.log('data =', data);
    // console.log('data/6 =', data.length/6);

    // console.log('mod2 =', 44%6);
    
    for (let i = 0; i < data.length/6; i++) {
      console.log('ind =', i);
      for (let j = 0; j < 6; j++) {
        if (data[j + (6*i)] !== undefined) {
          this.info.push(data[j + (6*i)])
          // if (i == 0) {
          //   this.info.push(data[j])
          // } else {
          //   this.info.push(data[j + (6*i)])
          // }
        } else {
          const d = {
            id: j+1,
            alphabet: ''
          };
          this.info.push(d);
        }
        // console.log('info =', this.info);
        if (this.info.length == 6) {
          const dataObj = {
            id: i+1,
            data: this.info,
          };
          this.dataString.push(dataObj)
          this.info = []
          
          
        }
      }
      // console.log('dataString');
      // console.log(this.dataString[0]);
      // console.log(this.dataString.length);
    }
    // console.log('string =', this.dataString.length);
    // console.log('data string:', this.dataString);
    // for (let j = 0; j < this.dataString.length; j++) {
    //   if (this.dataString.length < 3) {
    //     for (let i = 0; i < 6; i++) {
    //       const d = {
    //         id: i+1,
    //         alphabet: ''
    //       };
    //       this.info.push(d);
    //       if (this.info.length == 6) {
    //         const dataObj = {
    //           id: 3,
    //           data: this.info,
    //         };
    //         this.dataString.push(dataObj)
    //         this.info = []
    //       }
    //       // const dataObj = {
    //       //   id: i+1,
    //       //   data: {
    //       //     id: i+1,
    //       //     alphabet: ''
    //       //   },
    //       // };
    //       // this.dataString.push(dataObj)
    //     }
    //   }
    // }
  }

  getData(topic: string) {
    if (topic == 'englishAlphabet') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getEngAlps().subscribe(res => {
            console.log('eng:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    } else if (topic == 'thaiAlphabet') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getThaiAlps().subscribe(res => {
            console.log('thai:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    } else if (topic == 'number') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getNumbers().subscribe(res => {
            console.log('num:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    } else if (topic == 'fruit') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getFruits().subscribe(res => {
            console.log('fruit:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    } else if (topic == 'vehicle') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getVehicles().subscribe(res => {
            console.log('vehicle:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    } else if (topic == 'animal') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getAnimals().subscribe(res => {
            console.log('animal:', res);
            this.data = res;
            this.showData(this.data)
          });
        }
      });
    }
  }

  getDataStringValue(list: any) {
    console.log('list =', list);
    localStorage.setItem('list', JSON.stringify(list));
  }

  goback() {
    this.navCtrl.pop();
  }

  playKnowledge() {
    if (this.topic !== 'thaiAlphabet' && this.topic !== 'englishAlphabet') {
      this.route.navigateByUrl('/play-knowledge');
      console.log('go to play knowledge.');
    }
  }

}
