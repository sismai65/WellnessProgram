import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service";
import { TeamService } from "../team.service";
import { ChallengeService } from "../challenge.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  steps: Number;
  user = {};
  id: any;
  idTeam: String;
  idChallenge: any;
  team = {};
  challenge = {};
  max = 10000;

  constructor(private route: ActivatedRoute, private userService: UserService, private teamService: TeamService,
              private challengeService: ChallengeService, private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getUserDetails(this.id);
  }

  getUserDetails(id){
    this.userService.getUserById(id)
      .then((res) => {
        this.user = res;
        this.idTeam = this.user['idTeam'];
        this.steps = this.user['steps'];
        this.getTeambyId(this.idTeam);
        console.log("userDetails:", this.user);
      }, (err) => {
      console.log("err", err);
      })
  }

  //get team to find challenge name
  getTeambyId(id){
    this.teamService.getTeamById(id)
      .then((res) => {
        this.team = res;
        this.idChallenge = this.team['idChallenge'];
        console.log("infos team", this.team);
        console.log("idChallenge:", this.idChallenge);
        this.challengeService.showChallenge(this.idChallenge)
          .then((res) => {
            this.challenge = res;
            console.log("challenge details:", this.challenge);
          }, (err) => {
            console.log('error:', err);
          })
      },(err) => {
        console.log("error", err);
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
