import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css'],
})
export default class ItemCarouselComponent implements OnInit {
  @Input() title:string = '';

  @Input() subtitle:string = '';

  @Input() urlimg:string = '';

  @Input() mode:string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
