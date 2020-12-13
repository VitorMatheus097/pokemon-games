import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() values: any[];

  public page: number;
  public pageSize: number;
  public paginateOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;

    this.paginate();
  }

  pageChange(event: any): void {
    this.page = event;
    this.paginate();
  }

  paginate(): void {
    this.paginateOptions = {
      id: this.id,
      itemsPerPage: this.pageSize,
      currentPage: this.page
    };
  }

  formatName(value: any, index: number): string {
    return '.' + (this.pageSize * (this.page - 1) + index + 1).toString() + ' ' + value.name;
  }

}
