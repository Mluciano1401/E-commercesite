import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';

const routes: Routes = [
  {path: 'buyer', component:HomeBuyerComponent},
  {path: 'seller', component:HomeSellerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
