import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/products.service/product.service';
import { GetUserSellerService } from 'src/app/shared/services/userseller.service/get-user-seller.service';

@Component({
  selector: 'app-sectionproducts',
  templateUrl: './sectionproducts.component.html',
  styleUrls: ['./sectionproducts.component.css']
})
export class SectionproductsComponent implements OnInit {
  id: string | null;
  section: string |undefined;
  seller:any;
  products:Array<any>=[];
  isseller:boolean= false;
  iscategory:boolean = false;
  color: string ="#bdbdbd";
  is_liked:boolean = false;
  constructor(private aRouter: ActivatedRoute,
    private router: Router,
    private sellerService: GetUserSellerService,
    private Productservice: ProductService) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.section = this.aRouter.snapshot.routeConfig?.path
  }
  ngOnInit(): void {
    if("supplier/:id" == this.section){
      this.getseller()
      this.isseller = true
    }
    if("product/:id" == this.section){
      this.getproduct()
      this.isseller = false
    }
    if("category/:id" == this.section){
      if(this.id != null){
        this.iscategory = true;
        this.isseller = false;
        this.seller = {name: this.id}
        this.getproductsbycat(null, this.id)
      }
      
    }
  }
  getseller(){
    if(this.id != null){
      this.sellerService.getSellerbyAPI(this.id).subscribe((data)=>{
        this.seller = data;
        this.getproductsbyseller();
      })
    }    
  }
  getproductsbyseller(){ 
    this.Productservice.getproductsbysupplier(this.seller.username).subscribe((data)=>{
      this.products = data;
    })   
  }
  return(){
    this.router.navigate([`/home/buyer`]);
  }
  getproduct(){
    if(this.id != null){
      this.Productservice.getproduct(this.id).subscribe((data)=>{
        this.seller = data;
        this.getproductsbycat(this.seller, null);
      })
    }   
  }
  getproductsbycat(object:any|null, name:string|null){
    if(object != null){
      this.Productservice.getproductsbycategory(object.category).subscribe((data)=>{
        this.products = data;
      })
    }
    if(name != null){
      this.Productservice.getproductsbycategory(name).subscribe((data)=>{
        this.products = data;
      })
    }
  }
  changeColor(){
    if(!this.is_liked){
      this.is_liked=true;
      this.color="warn"
    }else{
      this.is_liked=false;
      this.color="#bdbdbd"
    }
  }
}
