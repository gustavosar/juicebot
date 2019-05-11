import { Component, OnInit } from '@angular/core';
import { compileFactoryFunction } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.styl']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  title = 'NG7Swiper';
 
  config: SwiperOptions = {
    autoplay: 95000, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    loop: true,
    effect: 'fade',

  };
}
