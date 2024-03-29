import {
  Component, ElementRef, Input, OnInit, ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel2.0.html',
  styleUrls: ['./carousel.component.css'],
})
export default class CarouselComponent implements OnInit {
  @Input() datacarousel: Array<any> = [];

  slideIndex = 0;

  @ViewChild('mySlide') mySlide!: ElementRef;

  @ViewChild('Caption') Caption!: ElementRef;

  constructor(private el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    const content = this.el.nativeElement.querySelector('.contentSlides');
    const dots = this.el.nativeElement.querySelector('.demo');
    const captionText = this.el.nativeElement.querySelector('#caption');
    if (n === content.childElementCount) { this.slideIndex = 0; }
    if (n < 0) { this.slideIndex = content.childElementCount - 1; }
    for (i = 0; i < content.childElementCount; i++) {
      content.children[i].style.display = 'none';
    }
    for (i = 0; i < content.childElementCount; i++) {
      dots.className = dots.className.replace(' active', '');
    }
    content.children[this.slideIndex].style.display = 'block';
    dots.className += ' active';
    captionText.innerHTML = dots.alt;
  }
}
