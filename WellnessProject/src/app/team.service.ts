import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  getAllTeams(){
  	return new Promise((resolve, reject) => {
  		this.http.get('/team')
  		.map(res => res.json())
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err); 
  		});
  	}); 
  }

  getTeamById(id){
  	return new Promise((resolve, reject) => {
  		this.http.get('/team/'+id)
  		.map(res => res.json())
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	}); 
  }

  saveTeam(data){
  	return new Promise((resolve, reject) => {
  		this.http.post('/team', data)
  		.map(res => res.json())
  		.subscribe(res => { 
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	});
  }

  updateTeam(id, data){
  	return new Promise((resolve, reject) => {
  		this.http.put('/team/'+id, data)
  		.map(res => res.json())
  		.subscribe(res => {
  			resolve(res); 
  		}, (err) => {
  			reject(err); 
  		});
  	}); 
  }

  deleteTeam(id){
  	return new Promise((resolve, reject) => {
  		this.http.delete('/team/'+id)
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err); 
  		});
  	}); 
  }
}
