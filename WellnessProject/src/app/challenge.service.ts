import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {

  idAdmin: any;
  idChallenge: any;
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
  }

  getAllChallenges() {
    return new Promise((resolve, reject) => {
      this.http.get('/challenge')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showChallenge(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/challenge/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChallenge(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/challenge', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateChallenge(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/challenge/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateTeamsChallenge(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/challenge/'+id+'/teams', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteChallenge(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/challenge/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
