import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.css']
})
export class BaseNavbarComponent implements OnInit {
  @Input() activePage: string;

  constructor() { }

  ngOnInit(): void { }

  isActive(page: string): boolean {
    return this.activePage === page;
  }

}
