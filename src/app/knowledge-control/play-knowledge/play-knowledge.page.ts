import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-play-knowledge',
  templateUrl: './play-knowledge.page.html',
  styleUrls: ['./play-knowledge.page.scss'],
})
export class PlayKnowledgePage implements OnInit {

  show: any;

  constructor(public navCtrl: NavController) {
    let s = localStorage.getItem('list');
    console.log('s =', s);
    this.show = JSON.parse(s)
  }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

}
