import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private apiUrl = environment.apiUrl;
  private production = environment.production;

  constructor(
    private router: Router
  ) { }

  formatUrl(url: string): string {
    return this.apiUrl + url;
  }

  handleError(error: any): void {
    if (!this.production) {
      console.log(error);
    }

    if (error.status === 404) {
      this.handleNotFound();
    }
  }

  handleNotFound(): void {
    this.router.navigateByUrl('404', { skipLocationChange: true });
  }

}
