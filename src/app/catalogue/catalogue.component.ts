import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.products$ = this.productService.onDisplayAllProducts();
  }
  onDisplayAllProducts() {
    this.products$ = this.productService.onDisplayAllProducts();
  }

}
