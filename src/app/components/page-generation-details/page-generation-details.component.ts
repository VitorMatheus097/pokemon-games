import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch/fetch.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-page-generation-details',
  templateUrl: './page-generation-details.component.html',
  styleUrls: ['./page-generation-details.component.css']
})
export class PageGenerationDetailsComponent implements OnInit {
  public data: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchService: FetchService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query) => {
      const id = query.id;

      if (!id) {
        this.helperService.handleNotFound();
      }

      this.fetchService.getGenerationDetails(id).then((data: any) => {
        this.data = data ? data : {};
      });
    });
  }

  isLoading(): boolean {
    return !this.data;
  }

}
