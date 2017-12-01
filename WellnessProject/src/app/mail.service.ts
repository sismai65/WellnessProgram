import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

@Injectable()
export class MailService {

  constructor(private http: Http) { }

  sendMail(data){
    return new Promise((resolve, reject) => {
      this.http.post('/mail/sendmail', data)
        .map(res => res.json())
        .subscribe(res =>{
          resolve(res);
        }, (err) => {
          console.log(err);
        })
    });
  }
}
