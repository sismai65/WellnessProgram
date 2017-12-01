import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  id: any; 
  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
  }

  login(credentials){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/auth/login', credentials) 
      .map(res => res.json())
      .subscribe((res) => {
        resolve(res);
        this.id = res['_id']
        console.log("id", this.id); 
      }, (err) => {
        reject(err); 
        alert(err); 
        console.log("ERROR", err); 
      })
    })
  }

  //GET logged user
  getUser(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/auth/'+this.id)
      .map((res) => res.json())
      .subscribe((res) => {
        resolve(res);
        console.log("result", res); 
      }, (err) => {
        console.log("error", err); 
        alert("Server Error"); 
      })
    })
  }

  //get steps updated 
  updateUserDetails(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/auth/user/'+this.id, data)
      .map((res) => res.json())
      .subscribe((res) => {
        resolve(res); 
        console.log("res", res); 
      }, (err) => {
        console.log("ERR", err); 
      })
    })
  }

  //log out
  logout(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/auth/user/logout')
      .map((res) => res.json())
      .subscribe((res) => {
        resolve(res); 
        console.log('res out', res); 
      }, (err) => {
        console.log("error", err); 
      })
    })
  }


}
