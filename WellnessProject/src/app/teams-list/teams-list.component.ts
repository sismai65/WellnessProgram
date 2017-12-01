import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ChallengeService} from "../challenge.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: any;
  team:any[]=[];
  challenge = {};
  challengeName: String;
  selectedTeams: any[]=[];
  idChallenge: any;
  idAdmin: any;

  constructor(private teamService: TeamService, private challengeService: ChallengeService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getListTeams();
    this.idChallenge = this.route.snapshot.params['idC'];
    console.log('idChallenge:', this.idChallenge);
    this.idAdmin = this.route.snapshot.params['id'];
    this.getChallengeById(this.idChallenge);
  }

  getListTeams() {
    this.teamService.getAllTeams()
      .then((result) => {
        this.teams = result;
      }, (err) => {
        console.log(err);
      });
  }

  getChallengeById(idChallenge){
    this.challengeService.showChallenge(idChallenge)
      .then((result) => {
        this.challengeName = result['name'];
        console.log("challenge name", this.challengeName);
      }, (err) => {
      console.log("err", err);
      });
  }

  // Update checked teams
  updateChecked() {
    for (var i = 0; i < this.teams.length; i++) {
      this.team[i] = this.teams[i];
      if(this.team[i].selected){
        this.selectedTeams[i] = this.team[i].name;
        console.log("selectedTeams:", this.selectedTeams[i]);
        var idChallenge = this.idChallenge
        this.team[i].challengeName = this.challengeName;
        var challengeName = this.team[i].challengeName;
        this.teamService.updateTeam(this.team[i]._id, {"idChallenge" : idChallenge ,"challengeName": challengeName});
        console.log("infos team:", this.team[i]);
      }
    }
  }

  // ADD teams to challenge
  addTeamToChallenge(id) {
    this.challengeService.showChallenge(this.idChallenge)
      .then((result) => {
        console.log("idChallengeshown:", this.idChallenge);
        this.challenge = result;
        this.challenge['teams'] = this.selectedTeams;
        console.log("team:", this.challenge['teams']);
        console.log("challengeObject:", this.challenge);

        this.challengeService.updateTeamsChallenge(this.idChallenge, this.challenge)
          .then((result) => {
            console.log("challenge updated:", this.challenge);
            this.router.navigate(['/home-page-admin/'+this.idAdmin+'/challenges/'+this.idChallenge]);
          }, (err) => {
            console.log(err);
          })
      }, (err) => {
        console.log(err);
      });
  }


}
