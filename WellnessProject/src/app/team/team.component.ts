import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  idAdmin: any;
	teams: any;
	user = {};

  constructor(private teamService :TeamService, private router: Router,
              private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  	this.getTeamList();
    this.idAdmin = this.route.snapshot.params['id'];
    this.getUserById(this.idAdmin);
  }

  getTeamList(){
  	this.teamService.getAllTeams()
  	.then(res => {
  		this.teams = res;
  	}, (err) => {
  		console.log(err);
  	});
  }

  getUserById(id){
    this.userService.getUserById(id)
      .then((res) => {
      this.user = res;
      }, (err) => {
      console.log("error", err);
      });
  }

  goTohomePage(){
    this.router.navigate(['/home-page-admin/'+this.idAdmin]);
  }

}
