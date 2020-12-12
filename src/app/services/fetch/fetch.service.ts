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

      this.httpClient.get<any>(url).subscribe((response) => {
        resolve(response);
      }, (error) => {
        this.helperService.handleError(error);
        resolve(null);
      });
    });
  }

}
