import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../authentication.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
        this.router.navigate(['/home-page-admin/'+id]);
      }, (err) => {
        console.log(err);
      });
  }




}
