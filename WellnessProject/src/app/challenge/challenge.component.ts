import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  idAdmin: any;
	challenges: any;
	user = {};

  constructor(private challengeService: ChallengeService, private router: Router, private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
  	this.getChallengeList();
  	this.idAdmin = this.route.snapshot.params['id'];
  	this.getUserById(this.idAdmin);
  }

  getChallengeList(){
  	this.challengeService.getAllChallenges()
  	.then((res) => {
  		this.challenges = res;
  	}, (err) => {
  		console.log(err);
  	}
  	)
  }

  getUserById(id){
    this.userService.getUserById(id)
      .then((res) => {
        this.user = res;
      }, (err) => {
        console.log("error", err);
      });
  }

  //Redirection to add challenge
  goToAddChallengePage(){
    this.router.navigate(['/home-page-admin/'+this.idAdmin+'/add-challenge']);
  }
  goTohomePage(){
    this.router.navigate(['/home-page-admin/'+this.idAdmin]);
  }
}
