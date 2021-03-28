import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-knowledge',
  templateUrl: './all-knowledge.page.html',
  styleUrls: ['./all-knowledge.page.scss'],
})
export class AllKnowledgePage implements OnInit {

  topic: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  getTopic(topic) {
    this.topic = topic;
    localStorage.setItem('topic', this.topic);
  }

  goback() {
    this.navCtrl.pop();
  }

}
