import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
    id:number;
    name:string;
    price:number;
}
@Injectable({
    providedIn:'root'
})
export class ProductsStoreService{
    currentId=1;
    private productsSubject = new BehaviorSubject<Product[]>([]);
    products$ = this.productsSubject.asObservable();
    addProduct(name:string, price:number){
           const newProduct : Product = {
            id:this.currentId++,name,price
        };
        const updated=[...this.productsSubject.value, newProduct];
        this.productsSubject.next(updated);
    }
}