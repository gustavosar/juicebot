import { Component, OnInit } from '@angular/core';
import { compileFactoryFunction } from '@angular/compiler/src/render3/r3_factory';
import Slide from '../models/slide';

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
    autoplay: 5000, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 1, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    loop: true,
    effect: 'fade',
  };

  totalnum: 4;

  slides: Slide[] = [

    {
      id: 1,
      title: "Golden",
      flavor: "melon",
      config: "40 VG / 60 PG / 30ml",
      description: "Lorem ipsum dolor sit amet, adipiscing elit.",
      price: "35,00",
      bg: "bg-melon",
      total: "4"
    },
    {
      id: 2,
      title: "Juicy",
      flavor: "watermelon",
      config: "40 VG / 60 PG / 30ml",
      description: "Lorem ipsum dolor sit amet, adipiscing elit.",
      price: "35,00",
      bg: "bg-watermelon",
      total: "4"
    },
    {
      id: 3,
      title: "Paradise",
      flavor: "kiwi",
      config: "40 VG / 60 PG / 30ml",
      description: "Lorem ipsum dolor sit amet, adipiscing elit.",
      price: "35,00",
      bg: "bg-kiwi",
      total: "4"
    },
    {
      id: 4,
      title: "Sunshine",
      flavor: "strawberry",
      config: "40 VG / 60 PG / 30ml",
      description: "Lorem ipsum dolor sit amet, adipiscing elit.",
      price: "35,00",
      bg: "bg-strawberry",
      total: "4"
    }

  ]
}
