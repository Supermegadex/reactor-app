import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpProvider } from '../providers/http/http';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers: [HttpProvider]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, http: HttpProvider, public toast: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      http.off().subscribe((res: any) => {
        if (res.success) {
          console.log("success");
        }
        else {
          console.log("error");
        }
        localStorage.setItem("on", "false");
      }, err => {
        let toast = this.toast.create({
          message: err.json().message,
          duration: 3000
        });
        toast.present();
      });
    });
  }
}
