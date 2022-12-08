import { Component, OnInit, OnDestroy } from '@angular/core';

import Dataraw from 'src/app/data/categories';

import StorageService from 'src/app/core/local-storage.service';
import ProductService from 'src/app/shared/services/products.service/product.service';
import Products from 'src/app/models/products.model';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css'],
})
export default class HomeSellerComponent implements OnInit, OnDestroy {
  titles: Array<string> = ['My products', 'My offers', ''];

  products: Array<Products> = [];

  user: any;

  menuurl: Array<Object> = Dataraw.menu2;

  constructor(
    private Productservice: ProductService,
    private storageService: StorageService,
  ) {
    this.Productservice = Productservice;
    this.storageService = storageService;
  }

  ngOnInit(): void {
    this.user = this.storageService.getItem('User');
    this.getproductsbyseller();
  }

  getproductsbyseller() {
    this.Productservice.getproductsbysupplier(this.user.username).subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {

  }
}
