import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play-knowledge',
  templateUrl: './play-knowledge.page.html',
  styleUrls: ['./play-knowledge.page.scss'],
})
export class PlayKnowledgePage implements OnInit {

  mock = [
    {
      id: 1,
      name: 'thaiAlphabet',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/letters/thai/kai.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/letters/thai/khai.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/letters/thai/khuad.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/letters/thai/cway.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/letters/thai/kon.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/letters/thai/kang.png'
        },
      ]
    },
    {
      id: 2,
      name: 'englishAlphabet',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/letters/eng/a.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/letters/eng/b.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/letters/eng/c.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/letters/eng/d.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/letters/eng/e.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/letters/eng/f.png'
        },
      ]
    },
    {
      id: 3,
      name: 'number',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/number/one.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/number/two.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/number/three.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/number/four.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/number/five.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/number/six.png'
        },
      ]
    },
    {
      id: 4,
      name: 'animal',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/animal/bird.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/animal/dog.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/animal/horse.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/animal/monkey.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/animal/elephant.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/animal/Pig.png'
        },
      ]
    },
    {
      id: 5,
      name: 'fruit',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/fruit/apple.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/fruit/orange.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/fruit/strawberry.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/fruit/mango.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/fruit/watermelon.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/fruit/banana.png'
        },
      ]
    },
    {
      id: 6,
      name: 'vehicle',
      datatop: [
        {
          id: 1,
          alphabet: '../../../assets/img/vehicle/ship.png'
        },
        {
          id: 2,
          alphabet: '../../../assets/img/vehicle/bus.png'
        },
        {
          id: 3,
          alphabet: '../../../assets/img/vehicle/taxi.png'
        },
      ],
      databuttom: [
        {
          id: 4,
          alphabet: '../../../assets/img/vehicle/bike.png'
        },
        {
          id: 5,
          alphabet: '../../../assets/img/vehicle/Motorcycles.png'
        },
        {
          id: 6,
          alphabet: '../../../assets/img/vehicle/plane.png'
        },
      ]
    },
  ];

  toppic: any;

  showTop: any;
  showUnder: any;

  arr: any = [];
  i: any;

  show: any;

  constructor(public navCtrl: NavController) {
    this.toppic = localStorage.getItem('topic');
    console.log('topic = ' + this.toppic);

    this.i = localStorage.getItem('i');
    console.log('topic = ' + this.i);

    for (let i = 0; i < this.mock.length; i++) {
      if (this.mock[i].name == this.toppic) {
        for (let j =0; j < this.mock[i].datatop.length; j++) {
          this.arr.push(this.mock[i].datatop[j]);
        }
        for (let l =0; l < this.mock[i].databuttom.length; l++) {
          this.arr.push(this.mock[i].databuttom[l]);
        }

        this.show = this.arr[this.i - 1];
        console.log('show =', this.show);
      }
    }
  }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

}
