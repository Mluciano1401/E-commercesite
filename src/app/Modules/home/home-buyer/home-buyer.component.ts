import { Component, OnDestroy, OnInit } from '@angular/core';

import Products from 'src/app/models/products.model';

import ProductService from 'src/app/shared/services/products.service/product.service';
import GetUserSellerService from 'src/app/shared/services/userseller.service/get-user-seller.service';
import StorageService from 'src/app/core/local-storage.service';
import User from '../../../models/user/user.model';
import Dataraw from '../../../data/categories';

@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css'],
})
export default class HomeBuyerComponent implements OnInit, OnDestroy {
  categories: Array<Object> = [];

  sellers: Array<User> = [];

  menu: Array<Object> = Dataraw.menu1;

  titles: Array<string> = ['The most recent', 'Suppliers', 'Category'];

  user: any;

  products: Array<Products> = [];

  constructor(
    private sellerService: GetUserSellerService,
    private productservice: ProductService,
    private storageService: StorageService,
  ) {
    this.sellerService = sellerService;
    this.productservice = productservice;
    this.storageService = storageService;
  }

  ngOnInit(): void {
    this.user = this.storageService.getItem('User');
    this.categories = Dataraw.category;
    this.getseller();
    this.getproducts();
  }

  getseller() {
    this.sellerService.getSellers().subscribe((users) => {
      this.sellers = users.filter((user: { role: string }) => user.role === 'seller');
    });
  }

  getproducts() {
    this.productservice.getproducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    console.log('Component home/buyer is dead');
  }
}
