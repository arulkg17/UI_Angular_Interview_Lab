import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators,ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector:'',
  standalone:true,
  imports:[CommonModule, ReactiveFormsModule],
  template:
  `
    <h3> Login </h3>
    <form [formGroup]="form" (ngSubmit)="submit()">
          <input placeholder="email" formControlName="email" /> 
          <input placeholder="password" type="password" formControlName="password" />
          <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder, private auth:AuthService,private router:Router){}
  form:any;
   
  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',Validators.required],
      password: ['',Validators.required]
    });
  }
  
  submit(){
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }

}