import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Products from 'src/app/models/products.model';
import ShopItem from 'src/app/models/shopitem.model';

import ProductService from '../../services/products.service/product.service';

@Component({
  selector: 'app-box-shop',
  templateUrl: './box-shop.component.html',
  styleUrls: ['./box-shop.component.css'],
})
export default class BoxShopComponent implements OnInit {
  datashop: Array<ShopItem> = [];

  products: Array<Products> = [];

  moneyTotal = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {data: any},
    private productservice: ProductService,
  ) {
    this.data = data;
    this.productservice = productservice;
  }

  ngOnInit(): void {
    this.datashop = this.data.data;
    this.getdataproduct();
    this.calculateTotal();
  }

  getdataproduct():void {
    this.datashop.forEach((object) => {
      this.productservice.getproduct(object.product).subscribe((data) => {
        this.products.push(data);
      });
    });
  }

  calculateTotal():void {
    this.datashop.forEach((object) => {
      this.moneyTotal += Number.parseFloat(object.price);
    });
  }
}
