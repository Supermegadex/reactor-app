import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {

  kw;
  kw_timer;
  kw_max = 32;
  kw_min = 24;

  constructor(public navCtrl: NavController, private http: HttpProvider, public toast: ToastController) {
    this.kw = 28;
    this.kw_timer = setInterval(() => {
      let rand = Math.random();
      if (rand < .2 && this.kw > this.kw_min) {
        this.kw--;
      }
      if (rand > .8 && this.kw < this.kw_max) {
        this.kw++;
      }
    }, 1000);
  }

  getPower() {
    return localStorage.getItem("on") == "true";
  }

  getError() {
    return localStorage.getItem("error") == "true";
  }

  toggle() {
    if (localStorage.getItem("on") == "false") {
      this.on();
    }
    else {
      this.off();
    }
  }

  on() {
    this.http.on().subscribe((res: any) => {
      if(res.success) {
        console.log("success");
      }
      else {
        console.log("error");
      }
      localStorage.setItem("on", "true");
    }, (err) => {
      this.error(err.json().message);
    });
  }

  off() {
    this.http.off().subscribe((res: any) => {
      if(res.success) {
        console.log("success");
      }
      else {
        console.log("error");
      }
      localStorage.setItem("on", "false");
    })
  }

  error(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
