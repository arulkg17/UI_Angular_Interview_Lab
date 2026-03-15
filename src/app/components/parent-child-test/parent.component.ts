import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildComponent } from "./child.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-parent-test',
    standalone:true,
    imports:[CommonModule, ChildComponent, FormsModule],
    template:`
        <h3> Parent Component </h3>
        <input [(ngModel)]="parentValue" placeholder="Enter value" />
        <app-child [value]="parentValue"></app-child>
    `
})
export class ParentComponent {
    parentValue:string = '';
}