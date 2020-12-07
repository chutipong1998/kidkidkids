import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation
  ) {
    // get current
    // console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // // set to landscape
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // // allow user rotate
    // this.screenOrientation.unlock();

    // // detect orientation changes
    // this.screenOrientation.onChange().subscribe(
    //   () => {
    //     console.log('Orientation Changed');
    //   }
    // );
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
