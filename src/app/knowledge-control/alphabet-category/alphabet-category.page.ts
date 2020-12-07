import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alphabet-category',
  templateUrl: './alphabet-category.page.html',
  styleUrls: ['./alphabet-category.page.scss'],
})
export class AlphabetCategoryPage implements OnInit {

  topic: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  getValue(a) {
    this.topic = a;
    localStorage.setItem('topic', this.topic);
    console.log(this.topic);
  }

  goback() {
    this.navCtrl.pop();
  }

}
