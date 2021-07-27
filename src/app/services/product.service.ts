import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  private source = new Subject<Product[]>();
  products$ = this.source.asObservable();

  constructor(private http: HttpClient) {}

  onDisplayAllProducts() {
    return this.http.get<Product[]>('http://192.168.0.136:8082/api/all-products');
  }

  onShowProducts() {
    return this.http.get<Product[]>(
      'http://192.168.0.136:8082/api/all-active-products'
    );
  }

  onEditProductState(productId: number) {
    return this.http.put('http://192.168.0.136:8082/api/product-edit-state', {
      id: productId,
    });
  }

  onDisplayProductById(productId: number) {
    return this.http.get<Product>('http://192.168.0.136:8082/api/product-by-id', {
      params: {
        id: `${productId}`,
      },
    });
  }
  onEditProduct(product: Product) {
    return this.http.put('http://192.168.0.136:8082/api/product-edit', product, {
      params: {
        id: `${product.id}`,
      },
    });
  }
}
