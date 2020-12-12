import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private apiUrl = environment.apiUrl;
  private production = environment.production;

  constructor() { }

  formatUrl(url: string): string {
    return this.apiUrl + url;
  }

  handleError(error: any): void {
    if (!this.production) {
      console.log(error);
    }
  }

}
