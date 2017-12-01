import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from "../user.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-home-page-admin',
  templateUrl: './home-page-admin.component.html',
  styleUrls: ['./home-page-admin.component.css']
})
export class HomePageAdminComponent implements OnInit {

  idAdmin: any;
  Links = {};
  user = {};
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
              private authenticationService: AuthenticationService) {
    this.idAdmin = this.route.snapshot.params['id'];
    this.getUserbyId(this.idAdmin);
  }

  ngOnInit() {
    this.Links = [
      { 'page': 'Equipes' , 'route': '/home-page-admin/'+this.idAdmin+'/teams' },
      { 'page': 'Challenges' , 'route': '/home-page-admin/'+this.idAdmin+'/challenges' }
    ];
  }

  getUserbyId(id){
    this.userService.getUserById(id)
      .then((res) => {
      this.user = res;
      }, (err) => {
      console.log('error', err);
      });
  }

  logout(){
    this.authenticationService.logoutUser()
      .then((res) => {
        this.router.navigate(['/welcome']);
      }, (err) => {
        console.log(err);
      });
  }

}
