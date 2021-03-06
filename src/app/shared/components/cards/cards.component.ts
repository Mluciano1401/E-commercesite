import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ProductService } from '../../services/products.service/product.service';
import { PurchaseService } from '../../services/purchaseService/purchase.service';
import { GetUserSellerService } from '../../services/userseller.service/get-user-seller.service';
import { StorageService } from 'src/app/core/local-storage.service';

import { EditProductComponent } from 'src/app/Modules/home/home-sections/edit-product/edit-product.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' | 'editable' = 'small';
  @Input() datacard= {_id: '0', name : "", username:"", lastname:"", price: 0, description: "", urlImg:"", supplier: ""};
  urlImg:string = "";
  user:any;
  color:any ="#bdbdbd";
  is_liked:boolean = false;
  constructor(private router: Router,
    private Productservice: ProductService,
    public matDialog: MatDialog,
    private purchaseService: PurchaseService,
    private sellerService: GetUserSellerService,
    private storageService:StorageService) { }

  ngOnInit(): void {
  }
  getproducts(id:string){
    this.router.navigate([`/home/supplier/${id}`]);
  }
  getproduct(id:string){
    this.router.navigate([`/home/product/${id}`]);
  }
  getcategort(id:string){
    this.router.navigate([`/home/category/${id}`]);
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
  openmodal(id:string){
    this.matDialog.open(EditProductComponent, {
      width: '40vw',
      data: {id: id, title: "Modify Product"}
    });
  }
  buyprodut(price:number,supplier:string, idproduct:string){
    if(this.user){
        var dataraw_user = this.storageService.getItem("User");
        var money;
        this.sellerService.getuserbyusername(supplier).subscribe((data)=>{
        money = { money: data[0].money + price}
        this.sellerService.updatemoney(data[0]._id,money).subscribe((dat)=>{
            //console.log(dat)
          }) 
        })
        var datas = {
          customer: dataraw_user.username,
          product: idproduct,
          price: price,
          seller: supplier
        }
        this.purchaseService.processpurchase(datas).subscribe((data)=>{
          this.router.navigate(['/home/buyer'],)
        }, (error)=>{
          
        })
    }
  }
  remove(id:string){
    this.Productservice.deleteProduct(id).subscribe(()=>{
      this.router.navigate(['/home/seller'],)
    })
  }

}
