import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private screenOrientation: ScreenOrientation, private nativeAudio: NativeAudio) {
    // get current
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

    // this.nativeAudio.preloadSimple('uniqueId1', '../../assets/audio/Claudio.mp3').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.preloadComplex('uniqueId2', '../../assets/audio/Cinema.mp3', 1, 1, 0).then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.play('uniqueId1').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });

    // this.nativeAudio.loop('uniqueId2').then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // });
  }

}
