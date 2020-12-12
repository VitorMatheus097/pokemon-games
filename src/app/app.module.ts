import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { PageGenerationListComponent } from './components/page-generation-list/page-generation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BaseNavbarComponent,
    PageGenerationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
