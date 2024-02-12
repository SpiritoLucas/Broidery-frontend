import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AppConfigService } from './AppConfigService';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  private source = new Subject<Product[]>();
  products$ = this.source.asObservable();
  BroideryBackendUrl: string;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.BroideryBackendUrl = this.appConfigService.getConfig().BroideryBackendUrl;
  }

  onDisplayAllProducts() {
    return this.http.get<Product[]>(`${this.BroideryBackendUrl}/api/all-products`);
  }

  onShowProducts() {
    return this.http.get<Product[]>(
      `${this.BroideryBackendUrl}/api/all-active-products`
    );
  }

  onEditProductState(productId: number) {
    return this.http.put(`${this.BroideryBackendUrl}/api/product-edit-state`, {
      id: productId,
    });
  }

  onDisplayProductById(productId: number) {
    return this.http.get<Product>(`${this.BroideryBackendUrl}/api/product-by-id`, {
      params: {
        id: `${productId}`,
      },
    });
  }

  onEditProduct(product: Product) {
    return this.http.put(`${this.BroideryBackendUrl}/api/product-edit`, product, {
      params: {
        id: `${product.id}`,
      },
    });
  }
}
