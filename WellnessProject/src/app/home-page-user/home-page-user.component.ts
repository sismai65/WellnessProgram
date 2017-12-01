import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../user.service";


@Component({
  selector: 'app-home-page-user',
  templateUrl: './home-page-user.component.html',
  styleUrls: ['./home-page-user.component.css']
})
export class HomePageUserComponent implements OnInit {

  Links = {};
  idUser: any;
  user:any;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.idUser = this.route.snapshot.params['id'];
    this.getUserDetails(this.idUser);
  }

  ngOnInit() {

    this.Links = [
      //{ 'page': 'Teams' , 'route': '/teams-list' },
      { 'page': 'Mon Compte' , 'route': '/home-page-user/'+this.idUser+'/dashboard' },
      { 'page': 'Challenges' , 'route': '/home-page-user/'+this.idUser+'/challenges' }
    ];
  }

  getUserDetails(id){
    this.userService.getUserById(id)
      .then((res) => {
        this.user = res;
        console.log("userDetails:", this.user);
      }, (err) => {
        console.log("err", err);
      })
  }





}
