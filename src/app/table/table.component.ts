import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  constructor() { }

  ngOnInit(): void {
  }

}
