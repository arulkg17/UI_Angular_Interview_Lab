import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class BehaviorSubjectDemoService {
    private messageSubject = new BehaviorSubject<string>("Initial Message");
    message$=this.messageSubject.asObservable();
    sendMessage(message:string):void{
        this.messageSubject.next(message);
    }
}