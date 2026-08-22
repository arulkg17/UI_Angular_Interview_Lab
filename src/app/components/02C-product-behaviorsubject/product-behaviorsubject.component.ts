import { Component } from '@angular/core';

import { CreateProductComponent }
  from './create-product/create-product.component';

import { ListProductComponent }
  from './list-product/list-product.component';

@Component({
  selector: 'app-product-behaviorsubject',
  standalone: true,
  imports: [
    CreateProductComponent,
    ListProductComponent
  ],
  templateUrl: './product-behaviorsubject.component.html',
  styleUrl: './product-behaviorsubject.component.css'
})
export class ProductBehaviorSubjectComponent {
}