import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ChildComponent } from "./components/child/child.component";
import { ParentComponent } from './components/parent-child-test/parent.component';
import { CreateProductComponent } from './components/behaviorSubject/products/create-product.component';
import { ListProductComponent } from './components/behaviorSubject/products/list-product.component';
import { ProductsStoreService } from './services/product-store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, ChildComponent, ParentComponent,CreateProductComponent, ListProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message='';
}
