import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { PageGenerationListComponent } from './components/page-generation-list/page-generation-list.component';
import { PageGenerationDetailsComponent } from './components/page-generation-details/page-generation-details.component';
import { BaseListComponent } from './components/base-list/base-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BaseNavbarComponent,
    PageGenerationListComponent,
    PageGenerationDetailsComponent,
    BaseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CollapseModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
