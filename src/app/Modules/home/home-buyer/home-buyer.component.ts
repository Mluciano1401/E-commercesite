import { User } from './../../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/products.service/product.service';
import { GetUserSellerService } from 'src/app/shared/services/userseller.service/get-user-seller.service';
import { Dataraw } from '../../../data/categories';
@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit, OnDestroy {
  categories:Array<any>=Dataraw.category; 
  //categories:Array<any>=[]
  sellers:Array<any>=[];
  menu:Array<any>=Dataraw.menu1;
  //menu:Array<any>=[];
  titles:Array<string>=["The most recent","Suppliers","Category"];
  user:any = sessionStorage.getItem("User")
  products:Array<any>=[];
  constructor(
    private sellerService: GetUserSellerService,
    private aRouter: ActivatedRoute,
    private Productservice: ProductService,
  ) { 
   
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.user)
    this.user
    this.categories;
    this.getseller()
    this.getproducts()
  }
  getseller(){
    this.sellerService.getSellers().subscribe((users) => {
      for(let user of users){
        if(user.role =="seller"){
          this.sellers.push(user)
        }
      }
    })
  }
  getproducts(){
    this.Productservice.getproducts().subscribe((data)=>{
      this.products = data
    })
  }
  ngOnDestroy(): void {
    console.log("I'm dead")
  }

}
