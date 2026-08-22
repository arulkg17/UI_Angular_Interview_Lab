import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductBehaviorStoreService {
  private productSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productSubject.asObservable();
  addProduct(product: Product): void {
    const currentProducts = this.productSubject.value;
    const updatedProducts = [...currentProducts, product];
    this.productSubject.next(updatedProducts);
  }
}
