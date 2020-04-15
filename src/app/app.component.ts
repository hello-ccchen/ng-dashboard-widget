import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;
}
