import { SellerGuard } from './../../core/guards/seller.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerGuard } from 'src/app/core/guards/buyer.guard';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { SectionproductsComponent } from './home-sections/sectionproducts/sectionproducts.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'buyer', component:HomeBuyerComponent, canActivate: [BuyerGuard]},
  {path: 'supplier/:id', component:SectionproductsComponent},
  {path: 'product/:id', component:SectionproductsComponent},
  {path: 'category/:id', component:SectionproductsComponent},
  {path: 'seller', component:HomeSellerComponent, canActivate:[SellerGuard]},
  {path: 'profile', component:ProfileComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
