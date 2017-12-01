import { Component, OnInit } from '@angular/core';
import { ChallengeService } from "../challenge.service";

@Component({
  selector: 'app-challenges-list-admin',
  templateUrl: './challenges-list-admin.component.html',
  styleUrls: ['./challenges-list-admin.component.css']
})
export class ChallengesListAdminComponent implements OnInit {

  challenges: any;
  selectedChallenges;
  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getChallengesList();
  }

  getChallengesList(){
    this.challengeService.getAllChallenges()
      .then((result) => {
        this.challenges = result;
      }, (err) => {
        console.log(err);
      });
  }


  updateChecked(){
    for(var i = 0; i < this.challenges.length; i++ ){
      let challenge = this.challenges[i];
      if (challenge['selected']) {
        //this.selectedChallenges= ["SOSO", "MOMO", "TOTO", "SHOOS"];
        this.selectedChallenges = challenge['name'];
        console.log("Selected Users:", this.selectedChallenges);
      }
    }
  }

  addChallengeToTeam(id){

  }

}
