import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // GET all users
  getAllUsers(){
  	return new Promise((resolve, reject) => {
  		this.http.get('/auth')
  		.map(res => res.json())
  		.subscribe((res) =>{
  			resolve(res);
  		}, (err) => {
  			reject(err);
  		});
  	});
  }

  //GET single user by id
  getUserById(id){
     return new Promise((resolve, reject) => {
       this.http.get('/auth/'+id)
         .map(res => res.json())
         .subscribe((res) => {
         resolve(res);
         }, (err) => {
         reject(err);
         });
     });
  }

  // Update user details
  updateUserDetails(id, data){
    return new Promise((resolve, reject) => {
      this.http.post('/auth/user/'+id, data)
        .map(res => res.json())
        .subscribe((res) => {
        resolve(res)
        }, (err) => {
        reject(err);
        console.log('error', err);
        });
    });
  }

  // EDIT members attribute of Team model
  updateMembersTeam(id, data){
    return new Promise((resolve, reject) => {
      this.http.put('/team/'+id+"/members", data)
      .map(res => res.json())
      .subscribe(res => {
        res['members'] = data;
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
