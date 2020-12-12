import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-page-generation-list',
  templateUrl: './page-generation-list.component.html',
  styleUrls: ['./page-generation-list.component.css']
})
export class PageGenerationListComponent implements OnInit {
  public data: any;

  constructor(
    private fetchService: FetchService
  ) { }

  ngOnInit(): void {
    this.fetchService.getGenerations().then((data: any) => {
      this.data = data ? data : {};
    });
  }

  isLoading(): boolean {
    return !this.data;
  }

  getGenerationUrl(url: string): string {
    return 'generation-details?id=' + url.slice(0, -1).split('/').pop();
  }

}
