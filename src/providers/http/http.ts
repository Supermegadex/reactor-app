import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {

  }

  static getHeaders() {
    let headers = new Headers({'Content-Type': 'application/json', "Authorization": "Bearer 28d33af56661b63fbc77de29de25169d12733914cf5087e5f5b35cf803ad4c69"});
    return new RequestOptions({headers: headers});
  }

  public on(): Observable<object> {
    return this.http.post("https://api-http.littlebitscloud.cc/v2/devices/00e04c037ad9/output", { "percent": 100, "duration_ms": -1 }, HttpProvider.getHeaders()).map((res: any) => {
      return res.json();
    });
  }

  public off(): Observable<object> {
    return this.http.post("https://api-http.littlebitscloud.cc/v2/devices/00e04c037ad9/output", { "percent": 0, "duration_ms": -1 }, HttpProvider.getHeaders()).map((res: any) => {
      return res.json();
    });
  }

}
