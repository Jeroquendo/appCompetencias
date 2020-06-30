import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CanvasURLService {
url;
  constructor() { }
  toDataURL(url)
  {
    this.url =  url;
  }
  getDataURL(){
    return this.url;
  }
}
