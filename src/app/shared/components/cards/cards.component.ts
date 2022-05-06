import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditProductComponent } from 'src/app/Modules/home/home-sections/edit-product/edit-product.component';
import { PurchaseService } from '../../services/purchaseService/purchase.service';
import { GetUserSellerService } from '../../services/userseller.service/get-user-seller.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' | 'editable' = 'small';
  @Input() datacard= {_id: '0', name : "", username:"", lastname:"", price: 0, description: "", urlImg:"", supplier: ""};
  urlImg:string = "";
  user:any = sessionStorage.getItem("User");
  color:any ="#bdbdbd";
  is_liked:boolean = false;
  constructor(private router: Router,
    public matDialog: MatDialog,
    private purchaseService: PurchaseService,
    private sellerService: GetUserSellerService) { }

  ngOnInit(): void {
    this.geturlImg()
  }
  geturlImg(){
    var urls = ["../../../assets/images/profileImg/profile-img-0.png",
    "../../../assets/images/profileImg/profile-img-1.jpg",
    "../../../assets/images/profileImg/profile-img-2.jpg",
    "../../../assets/images/profileImg/profile-img-3.jpeg",
    "../../../assets/images/profileImg/profile-img-4.jpg",
    "../../../assets/images/profileImg/profile-img-5.jpg"]
    let position = Math.floor(Math.random() * (6-0))+ 0;
    this.urlImg=urls[position];
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
    var dataraw_user = JSON.parse(this.user);
    var money = {
      money: dataraw_user.money + price}
    this.sellerService.updatemoney(dataraw_user.id,money).subscribe((data)=>{
      //console.log(data)
    })
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
      console.log(data)
    })
  }

}
