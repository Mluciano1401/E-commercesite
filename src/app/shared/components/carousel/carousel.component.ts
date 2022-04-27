import { Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() datacarousel: Array<any> = [];
  scrHeight:any;
  scrWidth:any; 
  slideIndex:number = 1;
  constructor(private el: ElementRef) { 
    this.scrHeight = (window.screen.height) + "px";
    this.scrWidth = (window.screen.width) + "px";
  }
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n:number) {
    let i;
    let slides = this.el.nativeElement.querySelector(".mySlides");
    let dots = this.el.nativeElement.querySelector(".demo");
    let captionText = this.el.nativeElement.querySelector("#caption");
    if (n > this.datacarousel.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = this.datacarousel.length}
    for (i = 1; i <= this.datacarousel.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 1; i < this.datacarousel.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
    captionText.innerHTML = dots[this.slideIndex-1].alt;
    console.log(dots)
  }

}
