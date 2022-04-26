import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/products.service/product.service';
import { GetUserSellerService } from 'src/app/shared/services/userseller.service/get-user-seller.service';
import { Dataraw } from '../../../data/categories';
@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit {
  categories:Array<any>=Dataraw.category; 
  //categories:Array<any>=[]
  sellers:Array<any>=[];
  menu:Array<any>=Dataraw.menu;
  //menu:Array<any>=[];
  products:Array<any>=[];
  constructor(
    private sellerService: GetUserSellerService,
    private Productservice: ProductService
  ) { }

  ngOnInit(): void {
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

}
