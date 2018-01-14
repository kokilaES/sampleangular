import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gift-demo',
   styleUrls: ['./gift-demo.component.css'],
  template: `
    <div ng-controller="myCtrl">
       <app-gift [items]="items"></app-gift>
      </div>
   `

})
export class GiftDemoComponent implements OnInit {
  items = null;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/djf7h').subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }


}
