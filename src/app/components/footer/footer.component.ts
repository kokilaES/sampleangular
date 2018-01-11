import { Component, OnInit ,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Output() godName: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
 this.godName.emit('Click from nested component');
  }

}
