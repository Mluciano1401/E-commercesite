import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditProductComponent } from 'src/app/Modules/home/home-sections/edit-product/edit-product.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' | 'editable' = 'small';
  @Input() datacard= {_id: '0', name : "", username:"", lastname:"", price: "", description: "", urlImg:""};
  urlImg:string = "";
  color: string ="#bdbdbd";
  is_liked:boolean = false;
  constructor(private router: Router,
    private matDialog: MatDialog) { }

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

}
