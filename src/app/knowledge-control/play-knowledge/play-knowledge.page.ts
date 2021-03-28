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
  }

  ngOnInit() {
    let s = localStorage.getItem('list');
    this.show = JSON.parse(s)
  }

  goback() {
    this.navCtrl.pop();
  }

}
