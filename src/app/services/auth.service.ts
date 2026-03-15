import { Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
@Injectable({
  providedIn:'root'
})
export class AuthService{
  constructor(){}

  login(){
    localStorage.setItem('token','demo-token');
  }
  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
}