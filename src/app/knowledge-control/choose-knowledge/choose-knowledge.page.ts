import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-knowledge',
  templateUrl: './choose-knowledge.page.html',
  styleUrls: ['./choose-knowledge.page.scss'],
})
export class ChooseKnowledgePage implements OnInit {

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

  test: any = [];

  k = 3;

  url = 'play-knowledge';


  constructor(public navCtrl: NavController, private route: Router) {
    this.toppic = localStorage.getItem('topic');
    console.log('topic = ' + this.toppic);

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.mock.length; index++) {
      if (this.mock[index].name == this.toppic) {
        this.showTop = this.mock[index].datatop;
        this.showUnder = this.mock[index].databuttom;
        console.log('name =', this.mock[index].datatop);
        // console.log('show =', this.show[0].alphabet);
      }
    }
  }

  ngOnInit() {
  }

  getValue(i) {
    console.log('i =', i);
    localStorage.setItem('i', i);
  }

  goback() {
    this.navCtrl.pop();
  }

  playKnowledge() {
    if (this.toppic !== 'thaiAlphabet' && this.toppic !== 'englishAlphabet') {
      this.route.navigateByUrl('/play-knowledge');
      console.log('go to play knowledge.');
    }
  }

}
