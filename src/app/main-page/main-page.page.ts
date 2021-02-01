import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  data: any;

  constructor(public navCtrl: NavController) { this.read_data() }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

  read_data(){
    fetch('./assets/data/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
      // console.log(this.data);
      // console.log(this.data[0].question);
    });
  }

}
