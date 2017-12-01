import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {

  challenges:any;
  idAdmin: any;
  user = {};

  constructor(private challengeService: ChallengeService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.idAdmin = this.route.snapshot.params['id'];
    this.getListChallenges();
    this.getUserById(this.idAdmin);
  }

  getListChallenges(){
    this.challengeService.getAllChallenges()
      .then((result) => {
        this.challenges = result;
      }, (err) => {
      console.log(err);
      })
  }

  getUserById(id){
    this.userService.getUserById(id)
      .then((res) => {
      this.user = res;
      }, (err) => {
      console.log('error', err);
      });
  }


}
