import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/products.service/product.service';

@Component({
  selector: 'app-box-shop',
  templateUrl: './box-shop.component.html',
  styleUrls: ['./box-shop.component.css']
})
export class BoxShopComponent implements OnInit {
  datashop:Array<any>=[];
  products:Array<any>=[]
  moneytotal:number=0;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {data: any},
    private productservice: ProductService) { }

  ngOnInit(): void {
    this.datashop= this.data.data
    this.getdataproduct()
    this.calculatetotal()
  }
  getdataproduct(){
   for(let product of this.datashop){
    this.productservice.getproduct(product.product).subscribe((data)=>{
      this.products.push(data);
    })
   }
  }
  calculatetotal(){
    for(let product of this.datashop){
      this.moneytotal += Number.parseFloat(product.price);
    }
  }

}
