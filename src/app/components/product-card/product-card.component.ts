import { Component, Input } from '@angular/core';
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CapitalizePipe, CommonModule],
  template:
  `
    <div style="border: 1px solid #cc; padding:10px; margin:10px;">
      <h3> {{ name | capitalize }} </h3>
      <p> {{ price | currency }} </p>
    </div>
  ` ,
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() name :string = '';
  @Input() price! :number;
}
