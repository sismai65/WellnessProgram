import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  id: any;
	challenge = {};
  constructor(private router: Router ,private challengeService: ChallengeService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  saveChallenge(){
  	this.challengeService.saveChallenge(this.challenge)
  	.then((result) => {
  		let id =  result['_id'];
  		// this.router.navigate(['/challenge-details', id]);
      this.router.navigate(['/home-page-admin/'+this.id+'/challenges/'+id]);

  	}, (err) => {
  		console.log(err);
  	});
  }
}
