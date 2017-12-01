import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { TeamService } from '../team.service';
import {concatStatic} from "rxjs/operator/concat";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  team = {};
  teamName: any;
  idTeam: any;
  challengeName: String;
	users: any;
	user: any[]=[];
  selectedUsers: any[]=[];
  idAdmin: any;
  checked: boolean;


  constructor(private userService: UserService, private teamService: TeamService, private route: ActivatedRoute,
              private router: Router) {
    this.idAdmin = this.route.snapshot.params['id'];
    this.idTeam = this.route.snapshot.params['idT'];
    console.log("idTeam", this.idTeam);
    this.getUserTeambyId(this.idTeam);
  }


  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(){
    this.userService.getAllUsers()
      .then((res) => {
        this.users = res;
      }, (err) => {
        console.log(err);
      });
  }

  getUserTeambyId(id){
    this.teamService.getTeamById(this.idTeam)
      .then((res) => {
       this.team = res;
      //console.log("user team",this.team);
      this.teamName = this.team['name'];
      this.challengeName = this.team['challengeName'];
      console.log("challenge Name:", this.challengeName);
      }, (err) => {
      console.log('err', err);
      });
  }

  // Update ckeck status of the elements
  updateChecked(){
    for(var i = 0; i < this.users.length; i++) {
      this.user[i] = this.users[i];
      console.log('check', this.user[i].selected)
      if(this.user[i].selected){
        this.selectedUsers[i] = this.user[i].firstName+" "+this.user[i].lastName;
        console.log("selected Users:", this.selectedUsers[i]);
        // add team's name id challengeName to the user attributes
        this.user[i].idTeam = this.idTeam;
        //var idTeam = this.user[i].idTeam;
        this.user[i].teamName = this.teamName;
        var teamName = this.user[i].teamName;
        this.user[i].challengeName = this.challengeName;
        var challengeName = this.user[i].challengeName;
        //update teamName attribute in user's model
        this.userService.updateUserDetails(this.user[i]._id, {"teamName" : teamName, "challengeName" : challengeName,
                                                                    "idTeam" : this.idTeam});
        console.log("user infos:", this.user[i]);
      }

    }
  }




//GET single team to change members attribute
  getTeam(id){
    this.teamService.getTeamById(id)
      .then((res) => {
        this.team = res;
        console.log("team:", this.team);
      }, (err) => {
        console.log(err);
      });
  }

  //ADD new member to the team
  updateMembersTeam(id){
    let data = this.teamService.getTeamById(id)
      .then((res) => {
        this.team = res;
        this.team['members'] = this.selectedUsers;
        let members = this.team['members'];
        console.log("data:", members);
        console.log("teamObj:", this.team);
        this.userService.updateMembersTeam(id, this.team)
          .then((result) => {
            console.log("team:", this.team);
            this.router.navigate(['/home-page-admin/'+this.idAdmin+'/teams/'+this.idTeam]);
          }, (err) => {
            console.log(err);
          });
      }, (err) => {
        console.log(err);
      });
  }





















    // this.userService.updateMembersTeam(id, data)
    // .then((result) => {
    //   console.log("data:", data);
      // let team = this.getTeam(id);
      // console.log("data:", data);
     // console.log("id: "+result+" selected: "+this.selectedUsers);
     // console.log("selected:", this.selectedUsers);
     // result['members'] = this.selectedUsers;
     // let members = result['members'];
     // console.log("result:",result);
     // console.log("members:",members);
     // console.log("idTeamNX:", id);
     // this.router.navigate(['/team-edit', id]);
    //   console.log('users:',this.selectedUsers);
    // }, (err) => {
    //   console.log(err);
    // });
    // console.log(this.tab);
    // }, (err) => {
    //   console.log(err);
    // });


}
