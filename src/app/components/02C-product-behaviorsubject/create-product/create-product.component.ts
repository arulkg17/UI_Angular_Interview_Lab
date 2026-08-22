import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product';
import { ProductBehaviorStoreService } from '../../../services/product-behavior-store.service';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  productName = '';
  productPrice = 0;
  constructor(
    private productBehaviorStoreService: ProductBehaviorStoreService,
  ) {}

  addProduct(): void {
    if(!this.productName.trim()) return;
    const product: Product = {
      id: Date.now(),
      name: this.productName,
      price: this.productPrice,
    };
    this.productBehaviorStoreService.addProduct(product);
    this.productName="";
    this.productPrice=0;
  }
}
