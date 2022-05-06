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
import { ProfileComponent } from './profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditProductComponent } from './home-sections/edit-product/edit-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeSellerComponent,
    HomeBuyerComponent,
    SectionproductsComponent,
    ProfileComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
