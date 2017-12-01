import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../challenge.service';
import { MailService } from "../mail.service";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-challenge-details-user',
  templateUrl: './challenge-details-user.component.html',
  styleUrls: ['./challenge-details-user.component.css']
})
export class ChallengeDetailsUserComponent implements OnInit {

  idAdmin: any;
  idChallenge: any;
  challenge = {};
  challengeName:any;
  router: any;

  constructor(private challengeService: ChallengeService, private mailService: MailService,
              private route: ActivatedRoute, router: Router, public snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.idChallenge = this.route.snapshot.params['idC'];
    this.idAdmin = this.route.snapshot.params['id'];
    this.getChallengeDetails(this.idChallenge);
  }

  getChallengeDetails(id){
    this.challengeService.showChallenge(id)
      .then((result) => {
        this.challenge = result;
        console.log("result:", result);
        this.challengeName = this.challenge['name'];
      }, (err) => {
        console.log(err);
      })
  }

  sendMail(data){
    data = this.challenge;
    this.mailService.sendMail(data)
      .then((result) => {
      console.log('sending mail:', data);
      this.snackBar.open('Votre demande a été prise en compte', 'OK !', { duration: 2000 });
      }, (err) => {
      console.log(err);
        console.log('Failed sending mail');
      });
  }


}
