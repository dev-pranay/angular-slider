import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: true, showIndicators: true } }
  ]
})
export class AppComponent {
  title = 'angularslider';
  images = ['assets/hogwarts.jpg', 'assets/pexels-photo.jpeg',
    'assets/nature_road.jpg', 'assets/pexels-photo-1.jpeg'];

  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  ngOnInit() { }

  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  
  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

}
