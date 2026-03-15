import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-child',
    standalone:true,
    imports:[CommonModule],
    template:`
        <h3> Child Component </h3>
        <p>Value from Parent = {{ value }} </p>
    `
})
export class ChildComponent{
    @Input() value : string = '';
}