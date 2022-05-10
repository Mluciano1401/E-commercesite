import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dataraw } from 'src/app/data/categories';
import { ProductService } from 'src/app/shared/services/products.service/product.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css']
})
export class HomeSellerComponent implements OnInit, OnDestroy {
  titles:Array<string>=["My products","My offers",""];
  products:Array<any>=[];
  user:any = sessionStorage.getItem("User")
  menuurl:Array<any>=Dataraw.menu2;
  constructor(private aRouter: ActivatedRoute,    
    private Productservice: ProductService,) { 
    }

  ngOnInit(): void {
    this.user = JSON.parse(this.user)
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
    console.log("I'm dead b*tch")
  }

}
