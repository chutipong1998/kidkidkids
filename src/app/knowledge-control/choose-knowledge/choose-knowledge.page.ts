import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { NavController } from '@ionic/angular';
import { DatabaseKnowledgeService } from 'src/app/services/database/knowledge/database-knowledge.service';

@Component({
  selector: 'app-choose-knowledge',
  templateUrl: './choose-knowledge.page.html',
  styleUrls: ['./choose-knowledge.page.scss'],
})
export class ChooseKnowledgePage implements OnInit {

  topic: string;

  info: any = [];

  dataString: any = [];
  data: any = [];

  url = 'play-knowledge';

  data_show_length = [
    {id: 1, txt: 'sdv'},
    {id: 1, txt: 'sdv'},
    {id: 1, txt: 'sdv'},
  ]

  statusSound: boolean;
  // x: string;

  constructor(private route: Router, private db: DatabaseKnowledgeService, private nativeAudio: NativeAudio) {

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

    this.getData(this.topic);

    this.nativeAudio.stop('test2').then((res) => {
      console.log('stop test2');
      console.log(res);
    }, (err) => {
      console.log('test2 stop error');
      console.log(err);
    });
    this.statusSound = true;
    localStorage.setItem('statusSound', JSON.stringify(this.statusSound));
  }

  showData(data: any) {
    for (let i = 0; i < data.length/6; i++) {
      for (let j = 0; j < 6; j++) {
        if (data[j + (6*i)] !== undefined) {
          this.info.push(data[j + (6*i)]);
        } else {
          const d = {
            id: j+1,
            alphabet: ''
          };
          this.info.push(d);
        }
        if (this.info.length == 6) {
          const dataObj = {
            id: i+1,
            data: this.info,
          };
          this.dataString.push(dataObj)
          this.info = []
          
          
        }
      }
    }
  }

  getData(topic: string) {
    if (topic == 'englishAlphabet') {
      this.db.getDatabaseState().subscribe(ready => {
        if(ready) {
          this.db.getEngAlps().subscribe(res => {
            console.log('eng:', res);
            this.data = res;
            this.showData(this.data)
            this.loadSound(this.data, topic)
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
            this.loadSound(this.data, topic)
          });
          console.log('data =');
          console.log(this.data);
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

  loadSound(data: any, topic: string) {
    if (topic == 'thaiAlphabet') {
      for (let i = 0; i < data.length; i++) {
        this.nativeAudio.preloadSimple(data[i].thai_sound, data[i].thai_sound).then((res) => {
          console.log((i+1)+'.','loading ', data[i].thai_sound, res);
        }, (err) => {
          console.log('error');
          console.log(err);
        });
      }
    } else if (topic == 'englishAlphabet') {
      for (let i = 0; i < data.length; i++) {
        this.nativeAudio.preloadSimple(data[i].english_sound, data[i].english_sound).then((res) => {
          console.log((i+1)+'.','loading ', data[i].english_sound, res);
        }, (err) => {
          console.log('error');
          console.log(err);
        });
      }
    }
  }

  getDataStringValue(list: any) {
    localStorage.setItem('list', JSON.stringify(list));
  }

  goback() {
    if (this.topic == 'thaiAlphabet' || this.topic == 'englishAlphabet') {
      this.route.navigate(['alphabet-category']);
    } else {
      this.route.navigate(['all-knowledge']);
    }

    this.nativeAudio.loop('test2').then((res) => {
      console.log('playing test2');
      console.log(res);
    }, (err) => {
      console.log('test2 playing error');
      console.log(err);
    });
    this.statusSound = false;
    localStorage.setItem('statusSound', JSON.stringify(this.statusSound));
  }

  playKnowledge(list: any) {
    if (this.topic !== 'thaiAlphabet' && this.topic !== 'englishAlphabet') {
      localStorage.setItem('list', JSON.stringify(list));
      this.route.navigateByUrl('/play-knowledge');
    } else {
      if (this.topic == 'thaiAlphabet') {
        this.playSound(list.thai_sound)
      } else if (this.topic == 'englishAlphabet') {
        this.playSound(list.english_sound)
      }
    }
  }

  playSound(sound_id: string) {
    this.nativeAudio.play(sound_id).then((res) => {
      console.log('playing animalSound');
      console.log(res);
    }, (err) => {
      console.log('animalSound playing error');
      console.log(err);
    });
  }

}
