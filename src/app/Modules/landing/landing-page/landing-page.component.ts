import { Component, OnInit } from '@angular/core';
import ProductService from 'src/app/shared/services/products.service/product.service';
import Dataraw from '../../../data/categories';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export default class LandingPageComponent implements OnInit {
  urlImgs: Array<any> = [];

  categories: Array<any> = Dataraw.category;

  products: Array<any> = [];

  constructor(
    private Productservice: ProductService,
  ) {
    this.Productservice = Productservice;
  }

  ngOnInit(): void {
    this.urlImgs = [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: 'https://d1ih8jugeo2m5m.cloudfront.net/2021/06/Ecommerce-Thumbnail.jpg',
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: 'https://www.imagar.com/wp-content/uploads/2020/07/Desarrollo-web-ecommerce-1.jpg',
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: 'https://directivosygerentes.es/wp-content/uploads/2020/03/Ecommerce.jpg',
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: 'https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2019/04/25160328/El-crecimiento-del-eCommerce-en-M%C3%A9xico-compressor.jpg',
      },
    ];
    this.getproducts();
  }

  getproducts() {
    this.Productservice.getproducts().subscribe((data) => {
      this.products = data;
    });
  }
}
