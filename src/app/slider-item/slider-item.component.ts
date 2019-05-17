import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.styl']
})
export class SliderItemComponent implements OnInit {

  Slider: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() { this.loadSliders() }

  // Get Slider list
  loadSliders() {
    return this.restApi.getSliders().subscribe((data: {}) => {
      this.Slider = data;
    })
  }

}
