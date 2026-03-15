import { Component, OnInit} from '@angular/core';
import { AsyncPipe, NgFor, CurrencyPipe } from '@angular/common';
import { ProductsStoreService } from '../../../services/product-store.service';

@Component({
    selector:'app-list-product-compnt',
    standalone:true,
    imports:[AsyncPipe, NgFor, CurrencyPipe],
    template:`
        <h3> Product List Component </h3>
        <ul>
            <li *ngFor="let p of products$ | async">
                {{p.name}} - {{p.price | currency}}
            </li>
        </ul>
    `
})
export class ListProductComponent implements OnInit {
    products$: any;

    ngOnInit(){
        this.products$ = this.store.products$;
    }
    constructor(private store: ProductsStoreService){}
}
