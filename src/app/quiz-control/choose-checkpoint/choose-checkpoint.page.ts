import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-checkpoint',
  templateUrl: './choose-checkpoint.page.html',
  styleUrls: ['./choose-checkpoint.page.scss'],
})
export class ChooseCheckpointPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

}
