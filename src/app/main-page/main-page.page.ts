import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  data: any;

  constructor() { this.read_data() }

  ngOnInit() {
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
