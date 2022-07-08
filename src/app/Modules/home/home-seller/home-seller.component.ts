import { Component, OnInit, OnDestroy } from '@angular/core';


import { Dataraw } from 'src/app/data/categories';

import { StorageService } from 'src/app/core/local-storage.service';
import { ProductService } from 'src/app/shared/services/products.service/product.service';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css']
})
export class HomeSellerComponent implements OnInit, OnDestroy {
  titles:Array<string>=["My products","My offers",""];
  products:Array<any>=[];
  user:any;
  menuurl:Array<any>=Dataraw.menu2;
  constructor(  
    private Productservice: ProductService,
    private storageService:StorageService
    ) { 
    }

  ngOnInit(): void {
    this.user = this.storageService.getItem("User");
    this.getproductsbyseller();
  }
  getproductsbyseller(){ 
    if(this.user != null){
      this.Productservice.getproductsbysupplier(this.user.username).subscribe((data)=>{
        this.products = data;
      })  
    }
     
  }
  ngOnDestroy(): void {
    console.log("Component home/seller is dead")
  }

}
