import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HttpProvider) {

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

}
