import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stepcounter } from '@ionic-native/stepcounter';
import { Pedometer } from '@ionic-native/pedometer';
import { AuthenticationProvider } from '../../providers/authentication/authentication'; 

import { LoginPage } from '../login/login'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  steps: Number; 
  startingOffset: any; 
  max = 10000; 
  constructor(public navCtrl: NavController, public stepcounter: Stepcounter, public pedometer: Pedometer,
    private authenticationProvider: AuthenticationProvider) {
     this.startingOffset = this.steps; 
      this.stepcounter.start(this.startingOffset)
      .then(onSuccess => {
        //alert("C'est parti...")
      },
      onFailure => alert("Aucun téléphone n'a été détecté"));
    }
      
    
    display(){
      this.stepcounter.getStepCount()
      .then(onSuccess => {
        this.steps = onSuccess; 
        //alert(this.steps+" pas")
      },
      onFailure => alert(onFailure));
    }

    //Send data to the server to update steps
    synchroniser(){
      this.authenticationProvider.getUser()
      .then((res) => {
        var num = this.steps; 
        this.authenticationProvider.updateUserDetails({'steps': JSON.stringify(num)})
        .then((res) => {
          console.log("res:", res); 
          
        }, (err) => {
          console.log("error:", err); 
          alert("Serveur Introuvable !");
        })
      }, (err) => {
        console.log("error", err); 
        alert("Information non disponible"); 
      })  
    }  

    // getHistory(){
    //   this.stepcounter.getHistory()
    //   .then((res) => {

    //   })
    // }
 
    logout(){
      this.authenticationProvider.logout(); 
      this.navCtrl.setRoot(LoginPage); 
    }
  
    
}
  


