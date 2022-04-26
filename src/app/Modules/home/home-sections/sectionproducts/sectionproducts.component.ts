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
  seller:any;
  products:Array<any>=[];
  constructor(private aRouter: ActivatedRoute,
    private router: Router,
    private sellerService: GetUserSellerService,
    private Productservice: ProductService) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getseller()
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
      console.log(this.products)
    })   
  }
  return(){
    this.router.navigate([`/home/buyer`]);
  }

}
