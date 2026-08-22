import {Component, OnInit, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { SubjectDemoService } from "../../services/subject-demo.service";
@Component({
    selector:'app-subject-demo',
    standalone:true,
    imports:[FormsModule],
    templateUrl:'./subject.component.html',
    styleUrl:'./subject.component.css'
})
export class SubjectComponent implements OnInit, OnDestroy {
    message='';
    receivedMessage='';
    private subscription?:Subscription;
    constructor(
        private subjectDemoService:SubjectDemoService
    ){}

    ngOnInit(): void {
        this.subscription = 
        this.subjectDemoService.message$
        .subscribe(message=>{
            this.receivedMessage = message;
        });    
    }
    sendMessage():void{
        this.subjectDemoService.sendMessage(this.message);
    }
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}