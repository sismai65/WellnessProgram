import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {
	challenge = {};
  idAdmin: any;
  constructor(private challengeService: ChallengeService, private router: Router, private route: ActivatedRoute) {
    this.idAdmin = this.route.snapshot.params['id'];
  }


  	ngOnInit() {
    this.getChallenge(this.route.snapshot.params['idC']);
  	}

  	getChallenge(id){
  		this.challengeService.showChallenge(id).then((res) => {
      	this.challenge = res;
     	 console.log(this.challenge);
    }, (err) => {
      console.log(err);
    });
  	}

  	updateChallenge(id) {
    this.challengeService.updateChallenge(id, this.challenge).then((result) => {
      console.log(this.challenge);
      let id = result['_id'];
      this.router.navigate(['/home-page-admin/'+this.idAdmin+'/challenges/'+id]);
    }, (err) => {
      console.log(err);
    });
  }


}
