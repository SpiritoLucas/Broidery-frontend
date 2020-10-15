import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  private source = new Subject<Product[]>();
  products$ = this.source.asObservable();

  constructor(private http: HttpClient) {}

  onShowProducts() {
    return this.http.get<Product[]>(
      'http://localhost:5000/api/all-active-products'
    );
  }
}
