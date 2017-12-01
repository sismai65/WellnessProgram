import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router) { }


  // Create new user
  saveUser(data){
  	return new Promise((resolve, reject) => {
  		this.http.post('/auth/signup', data)
  		.map(res => res.json())
  		.subscribe((res) => {
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	});
  }

  // Login user
  loginUser(credentials){
    return new Promise((resolve, reject) => {
      this.http.post('/auth/signin', credentials)
        .map(res => res.json())
        .subscribe((res) => {
        resolve(res)
        }, (err) => {
         console.log('err:', err);
          reject(err);
        });
    });
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      this.http.get('/auth/user/logout')
        .map((res) => res.json())
        .subscribe((res) => {
        resolve(res)
        },(err) => {
        console.log('err:', err);
        reject(err);
        });
    });
  }

}
