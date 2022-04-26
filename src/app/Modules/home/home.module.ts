import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectionproductsComponent } from './home-sections/sectionproducts/sectionproducts.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeSellerComponent,
    HomeBuyerComponent,
    SectionproductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class HomeModule { }
