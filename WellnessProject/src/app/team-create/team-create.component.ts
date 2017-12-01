import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team = {};
  idAdmin: any;
  users: any;

  constructor(private teamService : TeamService, private router : Router, private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.idAdmin = this.route.snapshot.params['id'];
  }

  saveTeam(){
  	this.teamService.saveTeam(this.team)
  	.then((result) => {
  		let id = result['_id'];
  		this.router.navigate(['/home-page-admin/'+this.idAdmin+'/teams/'+id]);
  	}, (err) => {
  		console.log(err);
  	});
  }

  // GET user list to add members to the team
  /*getUsersList(){
    this.userService.getAllUsers()
    .then((result) => {
      for(var i in result)
      this.users = result[i];
      let id = this.users['_id'];
      this.router.navigate(['/users', this.route.snapshot.params['id']]);
    }, (err) => {
      console.log(err);
    });
  }*/


}
