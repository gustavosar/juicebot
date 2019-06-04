import { Component, OnInit } from '@angular/core';
import Slide from '../models/slide';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.styl']
})

export class SliderComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) {

  }

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
      config: "70 PG / 30 VG / 30ml",
      description: "Nosso Joice com uma marcante explosão de sabor de melão.",
      price: "32,50",
      bg: "bg-melon",
      total: "4",
      site:"golden-melon"
    },
    {
      id: 2,
      title: "Juicy",
      flavor: "watermelon",
      config: "70 PG / 30 VG / 30ml",
      description: "Todo sabor único e delicioso que só a Melancia pode proporcionar.",
      price: "32,50",
      bg: "bg-watermelon",
      total: "4",
      site:"juicy-watermelon"
    },
    {
      id: 3,
      title: "Paradise",
      flavor: "kiwi",
      config: "70 PG / 30 VG / 30ml",
      description: "Nosso sensacional ejuice que equilibra o dedinho com o doce.",
      price: "32,50",
      bg: "bg-kiwi",
      total: "4",
      site:"paradise-kiwi"
    },
    {
      id: 4,
      title: "Sunshine",
      flavor: "strawberry",
      config: "70 PG / 30 VG / 30ml",
      description: "O ejuice que dispensa apresentações, nosso morango sweet!",
      price: "32,50",
      bg: "bg-strawberry",
      total: "4",
      site:"sunshine-strawberry"
    }

  ]
}
