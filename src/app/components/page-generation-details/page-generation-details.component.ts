import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch/fetch.service';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-page-generation-details',
  templateUrl: './page-generation-details.component.html',
  styleUrls: ['./page-generation-details.component.css']
})
export class PageGenerationDetailsComponent implements OnInit {
  public chartColors: Array<any>;
  public chartDatasets: Array<any>;
  public chartLabels: Array<any>;
  public chartOptions: any;
  public chartType: string;
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
        this.fillChart();
      });
    });
  }

  isLoading(): boolean {
    return !this.data;
  }

  fillChart(): void {
    this.chartType = 'doughnut';

    this.chartDatasets = [{
      data: [
        this.data.abilities.length || 0,
        this.data.moves.length || 0,
        this.data.pokemon_species.length || 0,
        this.data.types.length || 0,
        this.data.version_groups.length || 0],
      label: 'Generation Data'
    }];

    this.chartLabels = ['Added Abilities', 'Added Moves', 'Added Species', 'Added Types', 'Added Group Versions'];

    this.chartColors = [{
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }];

    this.chartOptions = {
      responsive: true
    };
  }

}
