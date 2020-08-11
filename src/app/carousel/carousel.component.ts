import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}
  images = [
    '../../assets/images/broidery_1.jpeg',
    '../../assets/images/broidery_2.jpeg',
    '../../assets/images/broidery_3.jpeg',
  ];

  ngOnInit() {}
}
