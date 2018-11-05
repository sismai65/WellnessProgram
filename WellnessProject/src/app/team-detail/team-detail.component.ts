import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';
import { UserService } from "../user.service";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  idAdmin: any;
  idTeam: any;
	team = {};
	user = {};
	members: any[] = [];

  constructor(private route: ActivatedRoute, private teamService: TeamService, private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.idAdmin = this.route.snapshot.params['id'];
    this.idTeam = this.route.snapshot.params['idT'];
  	this.getTeamDetails(this.idTeam);
  	this.getUserById(this.idAdmin);
	}

  getTeamDetails(id){
  	this.teamService.getTeamById(id)
  	.then((res) => {
  		this.team = res;
  		console.log(this.team);
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

  deleteTeam(id) {
  this.teamService.deleteTeam(id).then((result) => {
    console.log("result:", result);
    this.router.navigate(['/home-page-admin/'+this.idAdmin+'/teams']);
  }, (err) => {
    console.log(err);
  });
}



}
