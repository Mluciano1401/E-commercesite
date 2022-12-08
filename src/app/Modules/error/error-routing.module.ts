import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PageErrorComponent from './page-error/page-error.component';

const routes: Routes = [
  { path: 'no-found', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class ErrorRoutingModule { }
