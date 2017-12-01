import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

	team = {};
  users: any;
  idAdmin : any ;
  idTeam: any;

  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.idAdmin = this.route.snapshot.params['id'];
    this.idTeam = this.route.snapshot.params['idT'];
  	this.getTeam(this.idTeam);

  }

  //GET single team by id
  getTeam(id){
  	this.teamService.getTeamById(id)
  	.then((res) => {
  		this.team = res;
  		console.log("this team",this.team);
  	}, (err) => {
  		console.log(err);
  	});
  }

  // Edit the team selected by id
  updateTeam(id){
  	this.teamService.updateTeam(id, this.team)
  	.then((result) => {
  		let id = result['_id'];
  		this.router.navigate(['/home-page-admin/'+this.idAdmin+'/teams/'+this.idTeam]);
  	}, (err) => {
  		console .log(err);
  	});

  }

  // GET users list to add members to the team
  getUsersList(){
    this.userService.getAllUsers()
    .then((result) => {
      this.router.navigate(['/home-page-admin/'+this.idAdmin+'/team-edit/'+this.idTeam+'/users/']);
    }, (err) => {
      console.log(err);
    });
  }


}
