import { Component } from "@angular/core";
import { ProductsStoreService } from "../../../services/product-store.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
    selector:'app-create-product-compnt',
    standalone:true,
    imports:[FormsModule, CommonModule],
    template:`
        <h3> Create Product Component </h3>
        <input [(ngModel)]="name" placeholder="Enter Name">
        <input [(ngModel)]="price" type=number placeholder="Enter price">
        <button (click)="Add()">Add</button>
    `
})
export class CreateProductComponent{
    name:string='';
    price:number=0;
    constructor(private store:ProductsStoreService){}

    Add(){
        if(!this.name || !this.price) return ;
        this.store.addProduct(this.name,this.price);
        this.name='';
        this.price=0;
    }
}