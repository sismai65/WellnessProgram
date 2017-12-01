import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {AbstractControl, NG_VALIDATORS } from '@angular/forms';

function passwordMatcher(absCtrl: AbstractControl){
  if(!absCtrl.get('password') || !absCtrl.get('password2')) return true;
  return !absCtrl.get('password').value === absCtrl.get('password2').value ? false : {'nomatch': true};
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: 'passwordMatcher' }
  ]
})
export class PasswordMatcher{}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	user = {};
	error: any;
	droits: any[];

  constructor(private router: Router, private authenticationService: AuthenticationService) { }


  ngOnInit() {
    this.droits = [
      { value:'Admin' },
      { value: 'User' }
    ];
  }



  saveUser(){
  	this.authenticationService.saveUser(this.user)
  	.then((result) => {
  		let id = result['_id'];
  		this.router.navigate(['/welcome']);
  	}, (err) => {
  		console.log(err);
  	});
  }






}


