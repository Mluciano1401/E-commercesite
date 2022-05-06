import { Component, OnInit } from '@angular/core';
import { GetUserSellerService } from '../../services/userseller.service/get-user-seller.service';

@Component({
  selector: 'app-box-shop',
  templateUrl: './box-shop.component.html',
  styleUrls: ['./box-shop.component.css']
})
export class BoxShopComponent implements OnInit {
  datashop:any;
  constructor(private Shopservice: GetUserSellerService) { }

  ngOnInit(): void {
    this.datashop
  }
  getdatashop(){
    this.Shopservice.getSellers().subscribe((data)=>{
      this.datashop = data;
    }, (error) =>{
      console.log(error)
    })
  }

}
