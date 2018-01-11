import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  constructor() { }
  profile = "Profile";
  upgrade = "Upgrade to plus";
  gifts = "Gifts";
  ngOnInit() {
  }

}
