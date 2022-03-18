import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  urlImgs:Array<any>=[];
  categories:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
    this.urlImgs=[
      {"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "url": "https://d1ih8jugeo2m5m.cloudfront.net/2021/06/Ecommerce-Thumbnail.jpg"},
      {"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "url": "https://www.imagar.com/wp-content/uploads/2020/07/Desarrollo-web-ecommerce-1.jpg"},
      {"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "url": "https://directivosygerentes.es/wp-content/uploads/2020/03/Ecommerce.jpg"},
      {"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "url": "https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2019/04/25160328/El-crecimiento-del-eCommerce-en-M%C3%A9xico-compressor.jpg"},     
    ]
    this.categories = [
      {
        "_id": 1,
        "name": "offers",
        "img": "../../../../assets/images/img-broken.png"
      },
    {
        "_id": 2,
        "name": "office items",
        "img": "../../../../assets/images/img-broken.png"
    },
    {
        "_id": 3,
        "name": "clothes",
        "img": "../../../../assets/images/img-broken.png"
    },
    {
        "_id": 4,
        "name": "electronics",
        "img": "../../../../assets/images/img-broken.png"
    },
    {
        "_id": 5,
        "name": "home items",
        "img": "../../../../assets/images/img-broken.png"
    }
    ];
  }

}
