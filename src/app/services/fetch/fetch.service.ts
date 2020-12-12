import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from 'src/app/services/helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(
    private httpClient: HttpClient,
    private helperService: HelperService
  ) { }

  getGenerations(): Promise<void> {
    return new Promise((resolve) => {
      const url = this.helperService.formatUrl('generation');

      this.httpClient.get<any>(url).subscribe((response: any) => {
        const data = response ? response : {};
        resolve(data);
      }, (error) => {
        this.helperService.handleError(error);
      });
    });
  }

  getGenerationDetails(id: string): Promise<void> {
    return new Promise((resolve) => {
      const url = this.helperService.formatUrl('generation/' + id);

      this.httpClient.get<any>(url).subscribe((response: any) => {
        const data = response ? response : {};
        resolve(data);
      }, (error) => {
        this.helperService.handleError(error);
      });
    });
  }

}
