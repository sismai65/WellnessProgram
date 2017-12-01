import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css']
})
export class SigninUserComponent implements OnInit {
  credentials = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authenticationService.loginUser(this.credentials)
      .then((res) => {
        // console.log("res", res);
        let id = res['_id'];
        //console.log("id:", id);
        this.router.navigate(['/home-page-user/'+id]);
      }, (err) => {
        console.log(err);
      });
  }
}
