import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  products = [
    'http://www.karatex.com.ar/media/medium/bp0001.jpg',
    'http://www.karatex.com.ar/media/medium/bp0038.jpg',
    'http://www.karatex.com.ar/media/medium/bp0037.jpg',
    'http://www.karatex.com.ar/media/medium/bp0009.jpg',
    'http://www.karatex.com.ar/media/medium/bp0065.jpg',
    'http://www.karatex.com.ar/media/medium/bl0033.jpg',
    'http://www.karatex.com.ar/media/medium/bl0025.jpg',
  ];

  ngOnInit() {}
}
