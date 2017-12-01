import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { ChallengeService } from '../challenge.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

	challenge = {};
	id: any;
	idChallenge: any;
  idAdmin:any;
  constructor(private route: ActivatedRoute, private challengeService: ChallengeService, private router: Router) { }

  ngOnInit() {
    this.getChallengeDetail(this.route.snapshot.params['idC']);
    this.idChallenge = this.route.snapshot.params['idC'];
    this.idAdmin = this.route.snapshot.params['id'];
    console.log("idAdmin", this.idAdmin );
  }

  getChallengeDetail(id){
  	this.challengeService.showChallenge(id)
  	.then((res) => {
  		this.challenge = res;
  		console.log(this.challenge);
  	}, (err) => {
  		console.log(err);
  	});
  }

  deleteChallenge(id) {
  this.challengeService.deleteChallenge(id).then((result) => {
    this.router.navigate(['/home-page-admin/'+this.idAdmin+'/challenges']);
  }, (err) => {
    console.log(err);
  });
}

  goToListTeams(){
    this.router.navigate(['/home-page-admin/'+this.idAdmin+'/challenges/teams-list/'+this.idChallenge]);
    console.log(this.id);
  }

  goToChallengesList(){
    this.router.navigate(['/home-page-admin/'+this.idAdmin+'/challenges']);
  }

}
