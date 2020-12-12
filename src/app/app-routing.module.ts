import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGenerationListComponent } from './components/page-generation-list/page-generation-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'generations', component: PageGenerationListComponent },
  { path: '', redirectTo: '/generations', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
