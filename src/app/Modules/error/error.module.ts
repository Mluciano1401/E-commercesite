import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import ErrorRoutingModule from './error-routing.module';
import PageErrorComponent from './page-error/page-error.component';

@NgModule({
  declarations: [
    PageErrorComponent,
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ],
})
export default class ErrorModule { }
