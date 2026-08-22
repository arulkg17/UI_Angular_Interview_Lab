import { Component, OnInit, OnDestroy} from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "../../../models/product";
import { ProductBehaviorStoreService } from "../../../services/product-behavior-store.service";
@Component({
    selector:'app-list-product',
    standalone:true,
    imports:[],
    templateUrl:'./list-product.component.html',
    styleUrl:'./list-product.component.css'
})
export class ListProductComponent implements OnInit, OnDestroy {
    products:Product[] = [];
    private subscription?:Subscription;
    constructor(
        private productBehaviorStoreServicfe:ProductBehaviorStoreService
    ){}
    ngOnInit(): void {
        this.subscription = 
        this.productBehaviorStoreServicfe.products$.subscribe(
            products=>{
                this.products = products;
            }
        )
    }
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}