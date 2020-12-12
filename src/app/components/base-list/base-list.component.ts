import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {
  @Input() name: string;
  @Input() values: any[];

  constructor() { }

  ngOnInit(): void { }

  formatName(value: any, index: number): string {
    return '.' + (index + 1).toString() + ' ' + value.name;
  }

}
