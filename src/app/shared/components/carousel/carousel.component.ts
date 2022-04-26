import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() datacarousel: Array<any> = [];
  scrHeight:any;
  scrWidth:any; 

  constructor() { 
    this.scrHeight = (window.screen.height) + "px";
    this.scrWidth = (window.screen.width) + "px";
    console.log(this.scrHeight, this.scrWidth);
  }

  ngOnInit(): void {
  }

}
