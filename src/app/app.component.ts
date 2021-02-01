import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private navigationBar: NavigationBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //   get current
      console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

      // set to landscape
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

      // allow user rotate
      this.screenOrientation.unlock();

      // detect orientation changes
      this.screenOrientation.onChange().subscribe(
        () => {
          console.log('Orientation Changed');
        }
      );

      this.statusBar.overlaysWebView(true);
      if (window.statusbar) {
        this.statusBar.hide();
        // this.statusBar.styleDefault();
      }
      this.statusBar.backgroundColorByHexString("#ffffff");
      this.splashScreen.hide();

      // this.androidFullScreen.isImmersiveModeSupported()
      // .then(() => console.log('Immersive mode supported'))
      // .catch(err => console.log(err));
      let autoHide: boolean = true;
      this.navigationBar.setUp(autoHide);
    });
  }

}
