import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service/product.service';
import { PurchaseService } from '../../services/purchaseService/purchase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any = sessionStorage.getItem("User")
  datapurchase:Array<any>=[]
  @Input() iscolorblack:boolean=false;
  constructor(
    private purchaseService: PurchaseService,
    private Productservice: ProductService) { 
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.user)
    if(this.user){
      this.gethistory()
    }
  }
  gethistory(){
    this.purchaseService.gethistory(this.user.username).subscribe((data)=>{
      this.datapurchase = data
    })
  }
  openhistorymodal(){
    console.log(this.datapurchase)
  }
}
