import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dataraw } from '../../../data/categories';

import { User } from './../../../models/user.model';
import { Products } from 'src/app/models/products.model';

import { ProductService } from 'src/app/shared/services/products.service/product.service';
import { GetUserSellerService } from 'src/app/shared/services/userseller.service/get-user-seller.service';
import { StorageService } from 'src/app/core/local-storage.service';
@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit, OnDestroy {
  categories:Array<any>=Dataraw.category;
  sellers:Array<User>=[];
  menu:Array<any>=Dataraw.menu1;
  titles:Array<string>=["The most recent","Suppliers","Category"];
  user:any;
  products:Array<Products>=[];
  constructor(
    private sellerService: GetUserSellerService,
    private aRouter: ActivatedRoute,
    private productservice: ProductService,
    private storageService:StorageService
  ) { 
   
  }

  ngOnInit(): void {
    this.user = this.storageService.getItem("User");
    this.categories;
    this.getseller()
    this.getproducts()
  }
  getseller(){
    this.sellerService.getSellers().subscribe((users) => {
      this.sellers = users.filter((user: { role: string; }) => user.role === 'seller');
    })
  }
  getproducts(){
    this.productservice.getproducts().subscribe((data)=>{
      this.products = data
    })
  }
  ngOnDestroy(): void {
    console.log("Component home/buyer is dead")
  }

}
