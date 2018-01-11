import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  displayname = "Juvi";
  fullname = "Kokila Elango";
  registeredDate = "October 31st, 2017";
  ngOnInit() {
  }

}
